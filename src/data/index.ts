import './i18n' // NOTE initial i18n
import 'dotenv/config'
import { regions } from 'appinfo.config'
import { getRegionAppTopInfo, getRegionAppInfo } from './scrape'
import { getStorageAppInfo, setStorageAppInfo } from './storage'
import calculateLatestRegionStorageAppInfoAndRegionDiscountsInfo from './calculate'
import updateFeeds from './rss'
import { start, end, summarize } from './timer'
import pushTelegramNotification from './telegram'
// import updateIpCounter from './ip'
import pushDingTalkNotification from './dingtalk'
import updateAppInfoConfig from './config'
import updateLog from './log'
import disableApps from './disableApps'
import {
  loadNotificationFilters,
  filterNotificationDiscounts,
} from './notificationFilters'

async function controller() {
  const notificationFilters = loadNotificationFilters()
  start('controller')
  const regionAppTopInfo = await getRegionAppTopInfo(regions)
  const appConfig = updateAppInfoConfig(regionAppTopInfo)
  const appIds = appConfig
    .filter((item) => item.allowNotification !== false)
    .map((item) => item.id) /* .slice(0, 2) */
  const timestamp = Date.now()

  console.info(
    `当前收录地区数：${regions.length}
当前收录应用数：${appIds.length}`,
  )

  // await updateIpCounter()

  const { regionAppInfo, limitCount, scrapeType } = await getRegionAppInfo(
    appIds,
    regions,
  )

  if (Object.keys(regionAppInfo).length === 0) {
    console.info('No data captured, program execution has ended')
    return
  }

  const regionStorageAppInfo = getStorageAppInfo(regions)

  const regionDiscountInfo =
    calculateLatestRegionStorageAppInfoAndRegionDiscountsInfo(
      timestamp,
      regions,
      regionAppInfo,
      regionStorageAppInfo,
    )

  setStorageAppInfo(regions, regionStorageAppInfo)

  const { regionMonthlyDiscountStats } = updateFeeds({
    timestamp,
    regionDiscountInfo,
    appConfig,
    regionStorageAppInfo,
  })

  const notificationDiscounts = filterNotificationDiscounts(
    regionDiscountInfo,
    notificationFilters,
  )

  await pushTelegramNotification(notificationDiscounts)

  await pushDingTalkNotification(notificationDiscounts)

  disableApps({
    appConfig,
    includeAppIds: appIds,
    regionMonthlyDiscountStats,
  })

  end('controller')

  const sum = summarize()

  updateLog({
    timestamp,
    regionAppInfo,
    duration: sum['controller'],
    limitCount,
    scrapeType,
  })
}

controller()
