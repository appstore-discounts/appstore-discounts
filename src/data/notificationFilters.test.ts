import assert from 'node:assert/strict'
import test from 'node:test'
import { regions } from '../../appinfo.config'
import {
  filterNotificationDiscounts,
  loadNotificationFilters,
  parseNotificationFilters,
  validateNotificationFilters,
} from './notificationFilters'

function fixture(): RegionDiscountInfo {
  return Object.fromEntries(
    regions.map((region) => [
      region,
      [101, 202].map((trackId) => ({
        trackId,
        trackName: `${region}-${trackId}`,
        discounts: [{ type: 'price' }, { type: 'inAppPurchase' }],
      })),
    ]),
  ) as RegionDiscountInfo
}

test('default configuration preserves every region and discount', () => {
  const input = fixture()
  assert.deepEqual(filterNotificationDiscounts(input, {}), input)
  assert.deepEqual(validateNotificationFilters({}), {})
})

test('repository notification configuration loads successfully', () => {
  assert.doesNotThrow(() => loadNotificationFilters())
})

test('region-only filtering keeps all apps in selected regions', () => {
  const input = fixture()
  const output = filterNotificationDiscounts(input, { regions: ['cn', 'us'] })
  for (const region of regions) {
    assert.deepEqual(
      output[region],
      region === 'cn' || region === 'us' ? input[region] : [],
    )
  }
})

test('app-only filtering matches IDs across translated names and regions', () => {
  const output = filterNotificationDiscounts(fixture(), { appIds: [202] })
  for (const region of regions) {
    assert.deepEqual(
      output[region].map((app) => app.trackId),
      [202],
    )
    assert.equal(output[region][0].discounts.length, 2)
  }
})

test('region and app filters use intersection without modifying source data', () => {
  const input = fixture()
  const before = JSON.stringify(input)
  const output = filterNotificationDiscounts(input, {
    regions: ['cn'],
    appIds: [202],
  })
  assert.deepEqual(output.cn, [input.cn[1]])
  assert.deepEqual(output.us, [])
  assert.equal(JSON.stringify(input), before)
  output.cn.pop()
  assert.equal(input.cn.length, 2)
})

test('empty lists impose no restrictions', () => {
  const input = fixture()
  for (const config of [
    { regions: [] },
    { appIds: [] },
    { regions: [], appIds: [] },
  ]) {
    assert.deepEqual(filterNotificationDiscounts(input, config), input)
  }
  assert.deepEqual(
    filterNotificationDiscounts(input, { regions: [], appIds: [202] }),
    filterNotificationDiscounts(input, { appIds: [202] }),
  )
  assert.deepEqual(
    filterNotificationDiscounts(input, { regions: ['cn'], appIds: [] }),
    filterNotificationDiscounts(input, { regions: ['cn'] }),
  )
})

test('duplicate selections do not duplicate notifications', () => {
  const config = validateNotificationFilters(
    { appIds: [202, 202], regions: ['cn', 'cn'] },
    [101, 202],
  )
  const output = filterNotificationDiscounts(fixture(), config)
  assert.deepEqual(
    output.cn.map((app) => app.trackId),
    [202],
  )
  assert.deepEqual(output.us, [])
})

test('invalid JSON or object structure reports a format error', () => {
  for (const content of ['', '{', '{"regions":["cn"],}', 'null', '[]', '1']) {
    assert.throws(() => parseNotificationFilters(content), {
      message: 'Invalid notification configuration format.',
    })
  }
  for (const regions of ['cn', null]) {
    assert.throws(() => validateNotificationFilters({ regions }), {
      message: 'Invalid notification configuration format.',
    })
  }
  for (const appIds of ['101', null, ['101'], [0], [-1], [1.5], [Infinity]]) {
    assert.throws(() => validateNotificationFilters({ appIds }), {
      message: 'Invalid notification configuration format.',
    })
  }
})

test('unknown field names report an invalid field name', () => {
  for (const config of [
    { region: ['cn'] },
    { appsIds: [101] },
    { enabled: false },
  ]) {
    assert.throws(() => validateNotificationFilters(config), {
      message: 'Invalid notification configuration field name.',
    })
  }
})

test('unsupported region codes report an unsupported region', () => {
  for (const regions of [['CN'], ['cn', 'unknown'], [1]]) {
    assert.throws(() => validateNotificationFilters({ regions }), {
      message: 'Unsupported notification region.',
    })
  }
})

test('untracked App IDs report an untracked App ID even with empty region selection', () => {
  for (const config of [
    { appIds: [999] },
    { appIds: [202, 999] },
    { regions: [], appIds: [999] },
  ]) {
    assert.throws(() => validateNotificationFilters(config, [101, 202]), {
      message: 'App ID is not tracked.',
    })
  }
  assert.deepEqual(
    parseNotificationFilters('{"regions":[],"appIds":[202]}', [101, 202]),
    { regions: [], appIds: [202] },
  )
})
