import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { regions as supportedRegions } from '../../appinfo.config'
import { appConfig } from '../../apps.json'

export type NotificationFilters = {
  regions?: Region[]
  appIds?: number[]
}

export function validateNotificationFilters(
  value: unknown,
  trackedAppIds: readonly number[] = (appConfig as AppConfig[])
    .filter((app) => app.allowNotification !== false)
    .map((app) => app.id),
): NotificationFilters {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('格式错误')
  }

  const config = value as Record<string, unknown>
  for (const key of Object.keys(config)) {
    if (key !== 'regions' && key !== 'appIds') {
      throw new Error('字段名不合法')
    }
  }

  if (config.regions !== undefined && !Array.isArray(config.regions)) {
    throw new Error('格式错误')
  }

  if (
    Array.isArray(config.regions) &&
    !config.regions.every((region) => supportedRegions.includes(region))
  ) {
    throw new Error('regions未收录')
  }

  if (
    config.appIds !== undefined &&
    (!Array.isArray(config.appIds) ||
      !config.appIds.every((id) => Number.isSafeInteger(id) && id > 0))
  ) {
    throw new Error('格式错误')
  }

  const trackedIds = new Set(trackedAppIds)
  if (
    Array.isArray(config.appIds) &&
    !config.appIds.every((id) => trackedIds.has(id))
  ) {
    throw new Error('AppID未收录')
  }

  return config as NotificationFilters
}

export function parseNotificationFilters(
  content: string,
  trackedAppIds?: readonly number[],
): NotificationFilters {
  let value: unknown
  try {
    value = JSON.parse(content)
  } catch {
    throw new Error('格式错误')
  }
  return validateNotificationFilters(value, trackedAppIds)
}

export function loadNotificationFilters(): NotificationFilters {
  const path = resolve(__dirname, '../../notifications.config.json')
  return parseNotificationFilters(readFileSync(path, 'utf-8'))
}

export function filterNotificationDiscounts(
  discounts: RegionDiscountInfo,
  config: NotificationFilters,
): RegionDiscountInfo {
  const regions = config.regions?.length ? new Set(config.regions) : undefined
  const appIds = config.appIds?.length ? new Set(config.appIds) : undefined

  return Object.fromEntries(
    Object.entries(discounts).map(([region, apps]) => [
      region,
      regions && !regions.has(region as Region)
        ? []
        : apps.filter((app) => !appIds || appIds.has(app.trackId)),
    ]),
  ) as RegionDiscountInfo
}
