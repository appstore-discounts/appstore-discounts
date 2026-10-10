import assert from 'node:assert/strict'
import test from 'node:test'
import { regions } from '../../appinfo.config'
import {
  filterNotificationDiscounts,
  loadNotificationFilters,
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

test('explicit empty lists disable notifications', () => {
  for (const config of [{ regions: [] }, { appIds: [] }]) {
    const output = filterNotificationDiscounts(fixture(), config)
    assert.ok(Object.values(output).every((apps) => apps.length === 0))
  }
})

test('unknown app IDs do not create notifications or duplicate entries', () => {
  const output = filterNotificationDiscounts(fixture(), {
    appIds: [999, 202, 202],
    regions: ['cn', 'cn'],
  })
  assert.deepEqual(
    output.cn.map((app) => app.trackId),
    [202],
  )
  assert.deepEqual(output.us, [])
  const empty = filterNotificationDiscounts(fixture(), { appIds: [999] })
  assert.ok(Object.values(empty).every((apps) => apps.length === 0))
})

test('invalid configuration fails instead of silently sending all notifications', () => {
  for (const value of [null, [], 'cn', 1, { region: ['cn'] }]) {
    assert.throws(() => validateNotificationFilters(value))
  }
  for (const regions of ['cn', null, ['CN'], ['unknown'], [1]]) {
    assert.throws(() => validateNotificationFilters({ regions }))
  }
  for (const appIds of ['101', null, ['101'], [0], [-1], [1.5], [Infinity]]) {
    assert.throws(() => validateNotificationFilters({ appIds }))
  }
})
