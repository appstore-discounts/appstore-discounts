import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { regions as supportedRegions } from '../../appinfo.config'

export type NotificationFilters = {
  regions?: Region[]
  appIds?: number[]
}

export function validateNotificationFilters(
  value: unknown,
): NotificationFilters {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('notifications.config.json must contain an object')
  }

  const config = value as Record<string, unknown>
  for (const key of Object.keys(config)) {
    if (key !== 'regions' && key !== 'appIds') {
      throw new Error(`Unknown notification filter: ${key}`)
    }
  }

  if (
    config.regions !== undefined &&
    (!Array.isArray(config.regions) ||
      !config.regions.every((region) => supportedRegions.includes(region)))
  ) {
    throw new Error(
      `Notification regions must be an array containing only: ${supportedRegions.join(
        ', ',
      )}`,
    )
  }

  if (
    config.appIds !== undefined &&
    (!Array.isArray(config.appIds) ||
      !config.appIds.every((id) => Number.isSafeInteger(id) && id > 0))
  ) {
    throw new Error('Notification appIds must be an array of positive integers')
  }

  return config as NotificationFilters
}

export function loadNotificationFilters(): NotificationFilters {
  const path = resolve(__dirname, '../../notifications.config.json')
  return validateNotificationFilters(JSON.parse(readFileSync(path, 'utf-8')))
}

export function filterNotificationDiscounts(
  discounts: RegionDiscountInfo,
  config: NotificationFilters,
): RegionDiscountInfo {
  const regions = config.regions ? new Set(config.regions) : undefined
  const appIds = config.appIds ? new Set(config.appIds) : undefined

  return Object.fromEntries(
    Object.entries(discounts).map(([region, apps]) => [
      region,
      regions && !regions.has(region as Region)
        ? []
        : apps.filter((app) => !appIds || appIds.has(app.trackId)),
    ]),
  ) as RegionDiscountInfo
}
