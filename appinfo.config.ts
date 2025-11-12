import { Translate } from 'i18n-pro'

export const regions: Region[] = ['cn', 'hk', 'mo', 'tw', 'us', 'tr', 'pt']

/**
 * 注意：这里默认写的是中文，做了多语言支持，以中文为key
 */
export const getRegionNameMap = (tProp?: Translate) => {
  const t = tProp || (global as any).t
  return {
    cn: t('中国大陆'),
    hk: t('中国香港'),
    mo: t('中国澳门'),
    tw: t('中国台湾'),
    us: t('美国'),
    tr: t('土耳其'),
    pt: t('葡萄牙'),
  }
}

/**
 * 注意：这里的 value 值是从浏览器打开应用详情页时，对应的 `App 内购买项目` 的标题
 * 文本内容一定要对得上，不然获取不到应用的内购信息
 */
export const regionInAppPurchasesTextMap: Record<Region, string> = {
  cn: 'App内购买',
  hk: 'App 內購買',
  mo: 'App 內購買',
  tw: 'App內購買',
  us: 'In-App Purchases',
  tr: `In-App Purchases`,
  pt: 'Compras integradas',
}

/**
 * 注意：这里暂时规划是只有中文和英文
 */
export const regionLanguageCodeMap: Record<Region, string> = {
  cn: 'zh-CN',
  hk: 'zh-CN',
  mo: 'zh-CN',
  tw: 'zh-CN',
  us: 'en',
  tr: 'en',
  pt: 'en',
}

/**
 * 国家或地区对应的时区，用途是计算日期分类时，不同时区可以按其当地的时区归类
 * 值需要遵循 https://www.iana.org/time-zones 中的取值
 */
export const regionTimezoneMap: Record<Region, string> = {
  cn: 'Asia/Shanghai',
  hk: 'Asia/Hong_Kong',
  mo: 'Asia/Macau',
  tw: 'Asia/Taipei',
  us: 'America/New_York',
  tr: 'Europe/Istanbul',
  pt: 'Europe/Lisbon',
}

/**
 * Note: To improve code readability added a constant for common properties
 */
const denyNotification : Partial<AppConfig> = { allowNotification: false }

/**
 * 注意：新添加的应用写在最上面
 * Note: Newly added applications should be written at the top
 *
 * id 是应用的 ID
 * name 是应用名称，可以是多种类型
 * name 为 string 类型表示该应用在所有地区都是同一个名称
 * name 为 Partial<Record<Record, string>> 类型表示不同国家或地区的应用名称都不一样
 * name 为 [string, Partial<Record<Record, string>>] 类型表示多个地区的应用名称都相同，其他地区可能有不同的名称
 * 正常的话，中英文不一样就中英文各写一个就可以；这里的名称只有写代码的能看到
 */
export const latestAppConfig: AppConfig[] = [
  {
    id: 1447768809,
    name: {
      mo: 'Marvis Pro',
    },
    addType: 'auto',
  },
  {
    id: 1556984702,
    name: {
      mo: 'EasyVirtualChoir',
    },
    addType: 'auto',
  },
  {
    id: 6443540386,
    name: {
      mo: '菲林观片器',
    },
    addType: 'auto',
  },
  {
    id: 1623264392,
    name: {
      pt: 'Exame Federativo | app',
    },
    addType: 'auto',
  },
  {
    id: 6670338827,
    name: {
      mo: '牛牛挤奶',
    },
    addType: 'auto',
  },
  {
    id: 364876095,
    name: {
      mo: 'Jump Desktop (RDP, VNC, Fluid)',
    },
    addType: 'auto',
  },
  {
    id: 1450106361,
    name: {
      mo: 'Tripiday - 最佳旅行規劃App',
    },
    addType: 'auto',
  },
  {
    id: 6733247534,
    name: {
      mo: '生命數字命理',
    },
    addType: 'auto',
  },
  {
    id: 1551779746,
    name: {
      mo: '打字練習簿 Premium',
    },
    addType: 'auto',
  },
  {
    id: 6753062308,
    name: {
      hk: '石器經典版-情懷服',
      tw: '石器經典版-情懷服',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 6749849358,
    name: {
      mo: '摩斯密码工具',
    },
    addType: 'auto',
  },
  {
    id: 482540781,
    name: {
      hk: 'RallyTracks',
    },
    addType: 'auto',
  },
  {
    id: 6747325233,
    name: {
      mo: '完蛋！我被美女包围了！2',
    },
    addType: 'auto',
  },
  {
    id: 1346501102,
    name: {
      mo: 'FSNotes',
    },
    addType: 'auto',
  },
  {
    id: 6747080984,
    name: {
      hk: 'Trigramly',
    },
    addType: 'auto',
  },
  {
    id: 6449265626,
    name: {
      pt: 'Groic : Listen music togther',
    },
    addType: 'auto',
  },
  {
    id: 911208088,
    name: {
      mo: 'DRAGON QUEST III',
    },
    addType: 'auto',
  },
  {
    id: 1020967894,
    name: {
      mo: 'GPS診斷 - 衛星測試工具和坐標',
    },
    addType: 'auto',
  },
  {
    id: 982457990,
    name: {
      mo: '求生無限-無限流大冒險',
    },
    addType: 'auto',
  },
  {
    id: 6751413449,
    name: {
      tw: 'Keep on Mining!',
    },
    addType: 'auto',
  },
  {
    id: 6478566840,
    name: {
      mo: 'Magic Research 2',
    },
    addType: 'auto',
  },
  {
    id: 1618663548,
    name: {
      pt: 'swimstats live',
    },
    addType: 'auto',
  },
  {
    id: 1583113291,
    name: {
      pt: 'IRFSpro',
    },
    addType: 'auto',
  },
  {
    id: 6587551050,
    name: {
      mo: 'FilmN Kankokuma: Ramune',
    },
    addType: 'auto',
  },
  {
    id: 886697025,
    name: {
      mo: 'ArtPose Female Edition',
    },
    addType: 'auto',
  },
  {
    id: 1000884506,
    name: {
      mo: 'Hmmsim 2 - Train Simulator',
    },
    addType: 'auto',
  },
  {
    id: 6477356535,
    name: {
      tr: 'Etiket Tofask',
    },
    addType: 'auto',
  },
  {
    id: 1007346233,
    name: {
      mo: 'Rhythm Swing- Music Drills',
    },
    addType: 'auto',
  },
  {
    id: 530060483,
    name: {
      mo: 'METAL SLUG 3',
    },
    addType: 'auto',
  },
  {
    id: 666202151,
    name: {
      mo: '汇声绘影 PRO',
    },
    addType: 'auto',
  },
  {
    id: 6752563564,
    name: {
      hk: '石器懷舊服 - 1:1移植版',
      tw: '石器懷舊服 - 1:1移植版',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 6753921107,
    name: {
      pt: 'GestO',
    },
    addType: 'auto',
  },
  {
    id: 6753980946,
    name: {
      pt: 'Urbexplore Portugal',
    },
    addType: 'auto',
  },
  {
    id: 6702020560,
    name: {
      mo: 'Swiss Rounds',
    },
    addType: 'auto',
  },
  {
    id: 981914761,
    name: {
      mo: '首尔韩国语第一册 -大学韩语一本通',
    },
    addType: 'auto',
  },
  {
    id: 1512939054,
    name: {
      mo: 'Teach Monster: Reading for Fun',
    },
    addType: 'auto',
  },
  {
    id: 6744589266,
    name: {
      mo: 'DeviDeviSurvivor',
    },
    addType: 'auto',
  },
  {
    id: 6739813869,
    name: {
      tw: 'Fortune Quest - Roguelike',
    },
    addType: 'auto',
  },
  {
    id: 390017969,
    name: {
      mo: 'Due - Reminders & Timers',
    },
    addType: 'auto',
  },
  {
    id: 6742044212,
    name: {
      cn: '简记快捷记账-自动记账&记账理财助手',
    },
    addType: 'auto',
  },
  {
    id: 1637377410,
    name: {
      mo: 'Flying Carpet File Transfer',
    },
    addType: 'auto',
  },
  {
    id: 1449383466,
    name: {
      mo: 'WristChat for Facebook',
    },
    addType: 'auto',
  },
  {
    id: 1517410833,
    name: {
      mo: 'Startup Panic',
    },
    addType: 'auto',
  },
  {
    id: 6753707049,
    name: {
      mo: '通勝 2026',
    },
    addType: 'auto',
  },
  {
    id: 1250601531,
    name: {
      mo: 'RAW Power',
    },
    addType: 'auto',
  },
  {
    id: 479665601,
    name: {
      mo: 'iZip專業版 - Zip RAR 壓縮、解壓縮工具',
    },
    addType: 'auto',
  },
  {
    id: 6754234559,
    name: {
      tr: 'Husha - Echoheart Chat',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1459657920,
    name: {
      mo: 'Blood Card',
    },
    addType: 'auto',
  },
  {
    id: 1592854410,
    name: {
      tw: '荒島物語100天 - 單人無人島生存遊戲',
    },
    addType: 'auto',
  },
  {
    id: 1136993233,
    name: {
      mo: 'Apollo Justice Ace Attorney',
    },
    addType: 'auto',
  },
  {
    id: 6753102218,
    name: {
      cn: '神器行者：奥罗瑞恩传奇',
    },
    addType: 'auto',
  },
  {
    id: 906586079,
    name: {
      mo: 'Morse Toad',
    },
    addType: 'auto',
  },
  {
    id: 6739274856,
    name: {
      cn: '调律诗篇',
    },
    addType: 'auto',
  },
  {
    id: 952704587,
    name: {
      mo: 'Analog Portland',
    },
    addType: 'auto',
  },
  {
    id: 1017225151,
    name: {
      mo: 'Analog Jeju',
    },
    addType: 'auto',
  },
  {
    id: 596684220,
    name: {
      mo: 'Essential Anatomy 5',
    },
    addType: 'auto',
  },
  {
    id: 1386813914,
    name: {
      mo: 'You are Hope',
    },
    addType: 'auto',
  },
  {
    id: 6751436807,
    name: {
      tw: '混在美國·豪華版',
    },
    addType: 'auto',
  },
  {
    id: 1133544923,
    name: {
      mo: 'Hidden Folks',
    },
    addType: 'auto',
  },
  {
    id: 1561442623,
    name: {
      mo: 'Access Code Zero',
    },
    addType: 'auto',
  },
  {
    id: 1566817391,
    name: {
      mo: 'オフトレカメラ',
    },
    addType: 'auto',
  },
  {
    id: 6753934071,
    name: {
      hk: 'Slime Dash - Roguelike Game',
    },
    addType: 'auto',
  },
  {
    id: 1113002956,
    name: {
      mo: 'Plague Inc (瘟疫公司):場景工房',
    },
    addType: 'auto',
  },
  {
    id: 1552864378,
    name: {
      mo: 'ScourgeBringer',
    },
    addType: 'auto',
  },
  {
    id: 1497165353,
    name: {
      mo: 'Dictionnaire Larousse français',
    },
    addType: 'auto',
  },
  {
    id: 6740115177,
    name: {
      cn: '破门而入：行动小队',
    },
    addType: 'auto',
  },
  {
    id: 322681972,
    name: {
      mo: 'DrugDoses',
    },
    addType: 'auto',
  },
  {
    id: 928403895,
    name: {
      mo: '拼音字典專業版',
    },
    addType: 'auto',
  },
  {
    id: 832390059,
    name: {
      mo: '時間相機高級版',
    },
    addType: 'auto',
  },
  {
    id: 6468493048,
    name: {
      mo: '裁切大师',
    },
    addType: 'auto',
  },
  {
    id: 1369699810,
    name: {
      mo: 'Nuclear inc 2. Atom simulator',
    },
    addType: 'auto',
  },
  {
    id: 1638485107,
    name: {
      tw: '檔案管理器',
    },
    addType: 'auto',
  },
  {
    id: 386303262,
    name: {
      mo: 'Beyond Ynth',
    },
    addType: 'auto',
  },
  {
    id: 314481272,
    name: {
      mo: '紫微斗數 批語版',
    },
    addType: 'auto',
  },
  {
    id: 1530345628,
    name: {
      mo: '溫泉物語2',
    },
    addType: 'auto',
  },
  {
    id: 438927135,
    name: {
      mo: 'Breviarium Meum',
    },
    addType: 'auto',
  },
  {
    id: 6738282698,
    name: {
      hk: 'RCS - Real Combat Simulator',
    },
    addType: 'auto',
  },
  {
    id: 961227503,
    name: {
      mo: '燒杯 - BEAKER',
    },
    addType: 'auto',
  },
  {
    id: 645412785,
    name: {
      mo: '公式',
    },
    addType: 'auto',
  },
  {
    id: 814898894,
    name: {
      mo: '物理公式',
    },
    addType: 'auto',
  },
  {
    id: 1023154291,
    name: {
      mo: '練音符',
    },
    addType: 'auto',
  },
  {
    id: 1212201213,
    name: {
      mo: '鋤大d (豪華版)',
    },
    addType: 'auto',
  },
  {
    id: 1576148500,
    name: {
      mo: 'Meridian 157: Chapter 3',
    },
    addType: 'auto',
  },
  {
    id: 6497068802,
    name: {
      mo: '音符抽認卡：識譜',
    },
    addType: 'auto',
  },
  {
    id: 828444157,
    name: {
      mo: '最新英语口语8000句大全',
    },
    addType: 'auto',
  },
  {
    id: 1467728966,
    name: {
      mo: 'Photo Summary',
    },
    addType: 'auto',
  },
  {
    id: 1532666619,
    name: {
      mo: 'Clear Spaces',
    },
    addType: 'auto',
  },
  {
    id: 6742179746,
    name: {
      tw: '帕拉貝倫：傳奇圍城',
    },
    addType: 'auto',
  },
  {
    id: 944118456,
    name: {
      mo: 'Exif Viewer by Fluntro',
    },
    addType: 'auto',
  },
  {
    id: 1499001662,
    name: {
      mo: 'EvoCreo2: Monster Trainer Game',
    },
    addType: 'auto',
  },
  {
    id: 6753102795,
    name: {
      mo: 'Zero One Progrise',
    },
    addType: 'auto',
  },
  {
    id: 372731237,
    name: {
      mo: 'Fusion Calculator',
    },
    addType: 'auto',
  },
  {
    id: 1563156209,
    name: {
      mo: 'Legend of Mana',
    },
    addType: 'auto',
  },
  {
    id: 6443875944,
    name: {
      mo: 'Sands of Salzaar',
    },
    addType: 'auto',
  },
  {
    id: 348553940,
    name: {
      mo: 'Matthew Henry Commentary',
    },
    addType: 'auto',
  },
  {
    id: 6749698268,
    name: {
      mo: '小易决策-选择困难小救星',
    },
    addType: 'auto',
  },
  {
    id: 1492041417,
    name: {
      mo: 'FINAL FANTASY IV',
    },
    addType: 'auto',
  },
  {
    id: 6504041194,
    name: {
      mo: '空调遥控器-格力空调遥控器',
    },
    addType: 'auto',
  },
  {
    id: 911654012,
    name: {
      mo: 'Kanazawa Shogi 2',
    },
    addType: 'auto',
  },
  {
    id: 1551279815,
    name: {
      mo: '大家的日语中级1+2册',
    },
    addType: 'auto',
  },
  {
    id: 1288508230,
    name: {
      mo: 'XCOM 2 Collection',
    },
    addType: 'auto',
  },
  {
    id: 542397575,
    name: {
      mo: 'Space Agency',
    },
    addType: 'auto',
  },
  {
    id: 663068211,
    name: {
      mo: 'SimpleRockets',
    },
    addType: 'auto',
  },
  {
    id: 1588558691,
    name: {
      mo: 'Math Master | 數學遊戲 火柴拼圖 | 交叉数学',
    },
    addType: 'auto',
  },
  {
    id: 6738239220,
    name: {
      mo: '电工证考试题库-2024最新电工考试题库',
    },
    addType: 'auto',
  },
  {
    id: 391269557,
    name: {
      mo: 'Apnea Trainer',
    },
    addType: 'auto',
  },
  {
    id: 6749466141,
    name: {
      us: 'Red Dot - ICE Activity Alerts',
    },
    addType: 'auto',
  },
  {
    id: 495937600,
    name: {
      mo: 'The Tiny Bang Story',
    },
    addType: 'auto',
  },
  {
    id: 6753017460,
    name: {
      tw: 'TL Assistant',
    },
    addType: 'auto',
  },
  {
    id: 1278822051,
    name: {
      mo: '殺戮の天使',
    },
    addType: 'auto',
  },
  {
    id: 1335318686,
    name: {
      mo: 'IPSW Go',
    },
    addType: 'auto',
  },
  {
    id: 1437669537,
    name: {
      mo: 'Bendy and the Ink Machine',
    },
    addType: 'auto',
  },
  {
    id: 6633427774,
    name: {
      cn: '为了吾王-多人联机策略跑团',
    },
    addType: 'auto',
  },
  {
    id: 6472942395,
    name: {
      mo: 'Explorer for Sketchfab',
    },
    addType: 'auto',
  },
  {
    id: 1451559391,
    name: {
      mo: 'Phone Buddy Phone Lost Alert',
    },
    addType: 'auto',
  },
  {
    id: 1390595686,
    name: {
      mo: '蒼穹之歌',
    },
    addType: 'auto',
  },
  {
    id: 1070462618,
    name: {
      mo: 'Hero Emblems II',
    },
    addType: 'auto',
  },
  {
    id: 1104742864,
    name: {
      mo: '中醫診所系統',
    },
    addType: 'auto',
  },
  {
    id: 1452151266,
    name: {
      mo: '壓力單位轉換',
    },
    addType: 'auto',
  },
  {
    id: 6746137187,
    name: {
      mo: 'Poppy Playtime Chapter 4',
    },
    addType: 'auto',
  },
  {
    id: 1406253554,
    name: {
      mo: 'AirTycoon 5',
    },
    addType: 'auto',
  },
  {
    id: 6749045841,
    name: {
      cn: '王国保卫战5',
    },
    addType: 'auto',
  },
  {
    id: 1612913355,
    name: {
      mo: '修仙家族模拟器',
    },
    addType: 'auto',
  },
  {
    id: 1603239519,
    name: {
      mo: '反叛公司: 場景工房',
    },
    addType: 'auto',
  },
  {
    id: 1512282997,
    name: {
      mo: '子午线157: 第2章',
    },
    addType: 'auto',
  },
  {
    id: 735752897,
    name: {
      mo: 'Beat the Boss 3 (17+)',
    },
    addType: 'auto',
  },
  {
    id: 379869627,
    name: {
      hk: 'Living Earth - Clock & Weather',
      mo: 'Living Earth - Clock & Weather',
    },
    addType: 'auto',
  },
  {
    id: 1093924230,
    name: {
      mo: 'iAnnotate 4 — PDFs & more',
    },
    addType: 'auto',
  },
  {
    id: 1096461203,
    name: {
      mo: '南瓜先生大冒險HD',
    },
    addType: 'auto',
  },
  {
    id: 1371241818,
    name: {
      mo: 'Rain City',
    },
    addType: 'auto',
  },
  {
    id: 6748572801,
    name: {
      mo: '首爾驅魔人1111: Roguelite',
    },
    addType: 'auto',
  },
  {
    id: 1551546168,
    name: {
      mo: '中文認字遊戲(無廣告版）',
    },
    addType: 'auto',
  },
  {
    id: 6474672665,
    name: {
      mo: '開拓神秘島 DX',
    },
    addType: 'auto',
  },
  {
    id: 6744650366,
    name: {
      mo: 'MyScoreTracker – 計分器',
    },
    addType: 'auto',
  },
  {
    id: 513370441,
    name: {
      mo: 'ParseGreek - Greek Quizzing',
    },
    addType: 'auto',
  },
  {
    id: 6752503669,
    name: {
      hk: 'Solar Arc',
    },
    addType: 'auto',
  },
  {
    id: 1148617550,
    name: {
      mo: 'My Jump 2',
    },
    addType: 'auto',
  },
  {
    id: 973789555,
    name: {
      mo: '夢想商店街物語',
    },
    addType: 'auto',
  },
  {
    id: 1484024784,
    name: {
      mo: '子午線157: 第1章',
    },
    addType: 'auto',
  },
  {
    id: 1672085276,
    name: {
      mo: 'Aiko',
    },
    addType: 'auto',
  },
  {
    id: 1370362850,
    name: {
      mo: 'LAYOUT 拍立得相機 - 極簡時尚海報，照片美圖設計',
    },
    addType: 'auto',
  },
  {
    id: 6747307749,
    name: {
      hk: 'CHAKK - 스토리 꾸미는 재미, 챡!',
      mo: 'CHAKK - 스토리 꾸미는 재미, 챡!',
      tw: 'CHAKK - 스토리 꾸미는 재미, 챡!',
    },
    addType: 'auto',
  },
  {
    id: 1075462280,
    name: {
      mo: 'My Aurora Forecast Pro',
    },
    addType: 'auto',
  },
  {
    id: 1170448156,
    name: {
      mo: 'World Uncovered (Full)',
    },
    addType: 'auto',
  },
  {
    id: 6673892874,
    name: {
      mo: '常春藤-New TOEIC ® 挑戰片語',
    },
    addType: 'auto',
  },
  {
    id: 1234266367,
    name: {
      mo: 'Drum Tuner - iDrumTune Pro',
    },
    addType: 'auto',
  },
  {
    id: 1504024081,
    name: {
      mo: 'Fast Forward Videos -Boomerang',
    },
    addType: 'auto',
  },
  {
    id: 1581546143,
    name: {
      mo: '蓬莱镇',
    },
    addType: 'auto',
  },
  {
    id: 1546106967,
    name: {
      mo: 'Sokoban (Boxman) Classic',
    },
    addType: 'auto',
  },
  {
    id: 1475239344,
    name: {
      mo: 'Forgotten Hill Disillusion',
    },
    addType: 'auto',
  },
  {
    id: 574423763,
    name: {
      mo: '雅調 - 最專業十二平均律調音器，吉他，尤克里裡，小提琴校音',
    },
    addType: 'auto',
  },
  {
    id: 1566827448,
    name: {
      mo: 'Forgotten Hill: First Steps',
    },
    addType: 'auto',
  },
  {
    id: 6751425710,
    name: {
      mo: '愛的課程',
    },
    addType: 'auto',
  },
  {
    id: 1494197457,
    name: {
      mo: '白平衡计AI - KEV',
    },
    addType: 'auto',
  },
  {
    id: 1511788295,
    name: {
      mo: 'Crying Suns',
    },
    addType: 'auto',
  },
  {
    id: 1494621456,
    name: {
      mo: 'Buteyko Breathing Daily Log',
    },
    addType: 'auto',
  },
  {
    id: 1558052531,
    name: {
      mo: '風光攝影助手Pro:風光攝影計劃好幫手',
    },
    addType: 'auto',
  },
  {
    id: 1561658854,
    name: {
      mo: 'Battery Widget 2.0',
    },
    addType: 'auto',
  },
  {
    id: 1350599517,
    name: {
      mo: '吃貨人生 飲食紀錄App',
    },
    addType: 'auto',
  },
  {
    id: 1331393380,
    name: {
      mo: 'The House of Da Vinci 2',
    },
    addType: 'auto',
  },
  {
    id: 6749132733,
    name: {
      tw: '女王的遊戲：盛世天下',
    },
    addType: 'auto',
  },
  {
    id: 6743148949,
    name: {
      cn: '盛世天下：女王的游戏',
    },
    addType: 'auto',
  },
  {
    id: 6741892043,
    name: {
      mo: 'Road to Empress - 盛世天下',
    },
    addType: 'auto',
  },
  {
    id: 6740349855,
    name: {
      us: "Backyard Football '99",
    },
    addType: 'auto',
  },
  {
    id: 6743611124,
    name: {
      cn: '扫毒风暴',
    },
    addType: 'auto',
  },
  {
    id: 1458687087,
    name: {
      mo: '我的孩子: 生命之泉',
    },
    addType: 'auto',
  },
  {
    id: 6749298780,
    name: {
      mo: 'Lucky Hunter: Auto Battler',
    },
    addType: 'auto',
  },
  {
    id: 1292787392,
    name: {
      mo: "Papa's Hot Doggeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1530986797,
    name: {
      mo: 'Ultimate Tiger Simulator 2',
    },
    addType: 'auto',
  },
  {
    id: 509969070,
    name: {
      mo: '人教版初中7~9年级文言文翻译|背诵|练习大全',
    },
    addType: 'auto',
  },
  {
    id: 1474422612,
    name: {
      mo: 'TimeLine - Travel back in time',
    },
    addType: 'auto',
  },
  {
    id: 6751258224,
    name: {
      mo: '古诗学习助手',
    },
    addType: 'auto',
  },
  {
    id: 530090434,
    name: {
      mo: '7 Wonders',
    },
    addType: 'auto',
  },
  {
    id: 6748947135,
    name: {
      cn: '共鸣之心',
    },
    addType: 'auto',
  },
  {
    id: 304878580,
    name: {
      mo: 'Omar Sharif Bridge Card Game',
    },
    addType: 'auto',
  },
  {
    id: 571863178,
    name: {
      mo: 'AudioStretch',
    },
    addType: 'auto',
  },
  {
    id: 1254981556,
    name: {
      hk: 'Reverse Audio',
    },
    addType: 'auto',
  },
  {
    id: 1267751860,
    name: {
      mo: 'Mammoth Mini Golf AR',
    },
    addType: 'auto',
  },
  {
    id: 1661526326,
    name: {
      mo: 'PediaTools',
    },
    addType: 'auto',
  },
  {
    id: 6748683190,
    name: {
      mo: 'Eco Power Towns （生態小鎮電力計畫）',
    },
    addType: 'auto',
  },
  {
    id: 351058026,
    name: {
      mo: '通勝 300年版',
    },
    addType: 'auto',
  },
  {
    id: 1642139491,
    name: {
      hk: '東京電車',
    },
    addType: 'auto',
  },
  {
    id: 402405770,
    name: {
      mo: 'Massive Dev Chart Timer',
    },
    addType: 'auto',
  },
  {
    id: 445270462,
    name: {
      mo: '紫微斗數排盤',
    },
    addType: 'auto',
  },
  {
    id: 6469603539,
    name: {
      mo: 'All of You',
    },
    addType: 'auto',
  },
  {
    id: 1537782938,
    name: {
      cn: '墨墨记忆卡 | 考研考证外语学习Anki闪卡',
    },
    addType: 'auto',
  },
  {
    id: 446760220,
    name: {
      mo: 'FINAL FANTASY TACTICS :WotL',
    },
    addType: 'auto',
  },
  {
    id: 1067575393,
    name: {
      mo: '照片橡皮擦 - 去除水印雜物多余人物',
    },
    addType: 'auto',
  },
  {
    id: 311768443,
    name: {
      mo: 'Monkey Flight',
    },
    addType: 'auto',
  },
  {
    id: 453126527,
    name: {
      mo: '德比抽識卡 - 樂譜抽識卡！',
    },
    addType: 'auto',
  },
  {
    id: 1236657805,
    name: {
      mo: 'Cube CFOP',
    },
    addType: 'auto',
  },
  {
    id: 657638474,
    name: {
      mo: 'Lightbot : Programming Puzzles',
    },
    addType: 'auto',
  },
  {
    id: 465810912,
    name: {
      mo: 'Calculator HD+ Pro',
    },
    addType: 'auto',
  },
  {
    id: 6443943397,
    name: {
      mo: 'Wilderless 流浪荒野',
    },
    addType: 'auto',
  },
  {
    id: 1637438059,
    name: {
      hk: 'UnTrap for YouTube',
      mo: 'UnTrap for YouTube',
    },
    addType: 'auto',
  },
  {
    id: 6749845582,
    name: {
      mo: 'NPD知识普及',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 314306777,
    name: {
      mo: '慾經 - 隨身性愛姿勢指南及成人伴侶慾經遊戲 02',
    },
    addType: 'auto',
  },
  {
    id: 6749620111,
    name: {
      hk: '石器手機版Go！自由抓捕,寵物養成遊戲',
      tw: '石器手機版Go！自由抓捕,寵物養成遊戲',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 6746189288,
    name: {
      tw: '不/存在的你，和我',
    },
    addType: 'auto',
  },
  {
    id: 1411823462,
    name: {
      tw: '7Days : Backer',
    },
    addType: 'auto',
  },
  {
    id: 1435709869,
    name: {
      mo: 'CodeMatch',
    },
    addType: 'auto',
  },
  {
    id: 387910013,
    name: {
      mo: 'SSTV Slow Scan TV',
    },
    addType: 'auto',
  },
  {
    id: 1539778232,
    name: {
      us: 'Afterplace',
    },
    addType: 'auto',
  },
  {
    id: 6457201683,
    name: {
      mo: '紅薯AI',
    },
    addType: 'auto',
  },
  {
    id: 6504854196,
    name: {
      cn: '下一站江湖Ⅱ',
    },
    addType: 'auto',
  },
  {
    id: 6746649752,
    name: {
      hk: 'MagicKit Pro：AI智慧工具箱',
    },
    addType: 'auto',
  },
  {
    id: 976063866,
    name: {
      mo: 'Weaphones Antiques Firearm Sim',
    },
    addType: 'auto',
  },
  {
    id: 6749840287,
    name: {
      mo: 'Conduit: Open-WebUI Client',
    },
    addType: 'auto',
  },
  {
    id: 6744863722,
    name: {
      mo: 'neightn_remote',
    },
    addType: 'auto',
  },
  {
    id: 989733380,
    name: {
      mo: '航空大亨4',
    },
    addType: 'auto',
  },
  {
    id: 1557637265,
    name: {
      cn: '家园、异星与猎人',
    },
    addType: 'auto',
  },
  {
    id: 691121579,
    name: {
      mo: 'AdBlock',
    },
    addType: 'auto',
  },
  {
    id: 6744267787,
    name: {
      mo: '這是你的嗎？',
    },
    addType: 'auto',
  },
  {
    id: 1424977227,
    name: {
      tr: 'Titan Quest HD',
    },
    addType: 'auto',
  },
  {
    id: 1612050352,
    name: {
      tw: 'TLHelper',
    },
    addType: 'auto',
  },
  {
    id: 976920216,
    name: {
      mo: 'Skelly - Art Model',
    },
    addType: 'auto',
  },
  {
    id: 982102012,
    name: {
      mo: '三姑六婆 Pro - 親戚稱呼計算機',
    },
    addType: 'auto',
  },
  {
    id: 6747814605,
    name: {
      mo: 'Is This Seat Taken?',
    },
    addType: 'auto',
  },
  {
    id: 793232740,
    name: {
      mo: "Cadrage Director's Viewfinder",
    },
    addType: 'auto',
  },
  {
    id: 1269225754,
    name: {
      mo: 'Gorogoa',
    },
    addType: 'auto',
  },
  {
    id: 6745578435,
    name: {
      hk: '暗黑联盟之暴打传说',
      tw: '暗黑联盟之暴打传说',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 6504453094,
    name: {
      mo: 'Black Border 2',
    },
    addType: 'auto',
  },
  {
    id: 1198161469,
    name: {
      mo: '百萬樂曲物語',
    },
    addType: 'auto',
  },
  {
    id: 1558634102,
    name: {
      mo: '分貝計 (聲級計)',
    },
    addType: 'auto',
  },
  {
    id: 456976375,
    name: {
      mo: '衝刺！賽車物語',
    },
    addType: 'auto',
  },
  {
    id: 348759822,
    name: {
      mo: '新時代日漢辭典(發音版)',
    },
    addType: 'auto',
  },
  {
    id: 1047815745,
    name: {
      mo: 'Music With Grandma',
    },
    addType: 'auto',
  },
  {
    id: 1660616690,
    name: {
      mo: 'OneTap Stream - PC Game Stream',
    },
    addType: 'auto',
  },
  {
    id: 6746699177,
    name: {
      hk: 'Lysoniq',
    },
    addType: 'auto',
  },
  {
    id: 403977617,
    name: {
      mo: 'Alien Shooter - Survive',
    },
    addType: 'auto',
  },
  {
    id: 686923970,
    name: {
      mo: 'HRV4Training',
    },
    addType: 'auto',
  },
  {
    id: 6749533872,
    name: {
      hk: '石器狩獵勇士:原始人部落之戰',
      tw: '石器狩獵勇士:原始人部落之戰',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 6742139144,
    name: {
      tw: '貓娘樂園 Love Project Vol.1',
    },
    addType: 'auto',
  },
  {
    id: 1203306285,
    name: {
      mo: 'Piano Sight-Reading Trainer',
    },
    addType: 'auto',
  },
  {
    id: 1064060287,
    name: {
      mo: 'XP3Player',
    },
    addType: 'auto',
  },
  {
    id: 6747717070,
    name: {
      mo: 'VoidLink',
    },
    addType: 'auto',
  },
  {
    id: 1021566244,
    name: {
      mo: 'FINAL FANTASY VII',
    },
    addType: 'auto',
  },
  {
    id: 1586897675,
    name: {
      mo: '我的大学：当大学校长',
    },
    addType: 'auto',
  },
  {
    id: 6445906099,
    name: {
      mo: 'Garten of Banban 3',
    },
    addType: 'auto',
  },
  {
    id: 6747138769,
    name: {
      mo: 'Easy Text to Speech Reader Pro',
    },
    addType: 'auto',
  },
  {
    id: 945837394,
    name: {
      mo: 'Punch Kidd',
    },
    addType: 'auto',
  },
  {
    id: 1636423328,
    name: {
      mo: 'Cat Quest II',
    },
    addType: 'auto',
  },
  {
    id: 1619867109,
    name: {
      mo: '尋找天堂',
    },
    addType: 'auto',
  },
  {
    id: 1591192160,
    name: {
      mo: 'METAL SLUG 5 ACA NEOGEO',
    },
    addType: 'auto',
  },
  {
    id: 6748885060,
    name: {
      hk: 'Acgbg~動漫背景壁紙庫',
    },
    addType: 'auto',
  },
  {
    id: 6503046688,
    name: {
      mo: 'Official Car/Bike DTT-Ireland',
    },
    addType: 'auto',
  },
  {
    id: 1547424687,
    name: {
      mo: '我爱截图 - 微商营销做图工具',
    },
    addType: 'auto',
  },
  {
    id: 1140451547,
    name: {
      mo: 'Shot Tracer',
    },
    addType: 'auto',
  },
  {
    id: 764925064,
    name: {
      mo: 'Waterlogue: Photo to Painting',
    },
    addType: 'auto',
  },
  {
    id: 6743115658,
    name: {
      us: 'TABS Pocket Edition',
    },
    addType: 'auto',
  },
  {
    id: 6459581344,
    name: {
      mo: 'Art of Rally',
    },
    addType: 'auto',
  },
  {
    id: 1415709055,
    name: {
      mo: 'ABRSM Music Theory Trainer',
    },
    addType: 'auto',
  },
  {
    id: 6448106860,
    name: {
      mo: 'Private LLM - Local AI Chat',
    },
    addType: 'auto',
  },
  {
    id: 6746746394,
    name: {
      tr: 'Mayor Card: City Management',
    },
    addType: 'auto',
  },
  {
    id: 1499318054,
    name: {
      mo: '南瓜先生2：九龍城寨',
    },
    addType: 'auto',
  },
  {
    id: 1555184523,
    name: {
      mo: '波西亞時光',
    },
    addType: 'auto',
  },
  {
    id: 6612033628,
    name: {
      mo: '模擬山羊3：大鬧多元宇宙',
    },
    addType: 'auto',
  },
  {
    id: 1664728315,
    name: {
      mo: 'Mutropolis mobile',
    },
    addType: 'auto',
  },
  {
    id: 6463849203,
    name: {
      mo: '叫醒冰箱 - 吃新鮮的食物，過健康的生活',
    },
    addType: 'auto',
  },
  {
    id: 1455479739,
    name: {
      mo: 'Priori-四象限待辦清單',
    },
    addType: 'auto',
  },
  {
    id: 1524371466,
    name: {
      mo: 'Poly Bridge 2',
    },
    addType: 'auto',
  },
  {
    id: 6744608603,
    name: {
      tw: 'A Game About Digging A Hole™',
    },
    addType: 'auto',
  },
  {
    id: 6748949090,
    name: {
      tw: '石器抓寵版：重返原始部落',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1498367664,
    name: {
      mo: '充電助手專業版 - 高清充電動畫屏保充電提示音',
    },
    addType: 'auto',
  },
  {
    id: 6479699074,
    name: {
      hk: '戰律2：口袋版',
    },
    addType: 'auto',
  },
  {
    id: 6744878177,
    name: {
      hk: '探險異星飛行隊',
      tw: '探險異星飛行隊',
    },
    addType: 'auto',
  },
  {
    id: 1225810316,
    name: {
      mo: '博雅音频',
    },
    addType: 'auto',
  },
  {
    id: 6503427918,
    name: {
      mo: '前進！！英雄戰隊物語DX',
    },
    addType: 'auto',
  },
  {
    id: 1237186593,
    name: {
      mo: 'Biblia de Jerusalem Portoghese',
    },
    addType: 'auto',
  },
  {
    id: 6478255275,
    name: {
      mo: '小学英语四年级上下册 -新起点人教版',
    },
    addType: 'auto',
  },
  {
    id: 6478186205,
    name: {
      mo: '小学英语六年级上下册 -新标准外研版',
    },
    addType: 'auto',
  },
  {
    id: 6478163749,
    name: {
      mo: '小学英语五年级上下册 -新标准外研版',
    },
    addType: 'auto',
  },
  {
    id: 1504218030,
    name: {
      mo: 'WatchWave - Radio Signal Sync',
    },
    addType: 'auto',
  },
  {
    id: 1205826385,
    name: {
      mo: '愛傳送 - 極簡易用',
    },
    addType: 'auto',
  },
  {
    id: 485538133,
    name: {
      mo: 'Dot Line',
    },
    addType: 'auto',
  },
  {
    id: 527358348,
    name: {
      mo: 'Fieldrunners 2',
    },
    addType: 'auto',
  },
  {
    id: 530445196,
    name: {
      mo: '冒險村物語',
    },
    addType: 'auto',
  },
  {
    id: 321369231,
    name: {
      mo: 'WORMS',
    },
    addType: 'auto',
  },
  {
    id: 6748852099,
    name: {
      tr: 'Chain of Evidence',
    },
    addType: 'auto',
  },
  {
    id: 919429622,
    name: {
      mo: '金字塔王國物語',
    },
    addType: 'auto',
  },
  {
    id: 727466621,
    name: {
      mo: "THE KING OF FIGHTERS '97",
    },
    addType: 'auto',
  },
  {
    id: 1578669842,
    name: {
      mo: 'Road Movie Pro',
    },
    addType: 'auto',
  },
  {
    id: 1640679491,
    name: {
      mo: 'Road Movie Premium',
    },
    addType: 'auto',
  },
  {
    id: 6569254072,
    name: {
      mo: 'QuickNotes Flashcards Watch',
    },
    addType: 'auto',
  },
  {
    id: 6748376912,
    name: {
      tw: '石器大陸之獵龍時代',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1533979882,
    name: {
      mo: 'Northgard',
    },
    addType: 'auto',
  },
  {
    id: 1466088186,
    name: {
      tw: 'BA II Plus Calculator',
    },
    addType: 'auto',
  },
  {
    id: 6746136017,
    name: {
      tw: 'Astrea: Six-Sided Oracles',
    },
    addType: 'auto',
  },
  {
    id: 1247294026,
    name: {
      mo: '練節奏',
    },
    addType: 'auto',
  },
  {
    id: 491899548,
    name: {
      mo: '足球俱樂部物語',
    },
    addType: 'auto',
  },
  {
    id: 1435456830,
    name: {
      mo: 'Castlevania: SotN',
    },
    addType: 'auto',
  },
  {
    id: 459139659,
    name: {
      mo: 'International Snooker Career',
    },
    addType: 'auto',
  },
  {
    id: 407781177,
    name: {
      mo: '123 Games Playground for Kids',
    },
    addType: 'auto',
  },
  {
    id: 6748287593,
    name: {
      mo: 'Bother Bin',
    },
    addType: 'auto',
  },
  {
    id: 1573652748,
    name: {
      mo: 'shiftscreen 4X',
    },
    addType: 'auto',
  },
  {
    id: 6746825550,
    name: {
      cn: 'SnapCameraPro - 全新好用的相机',
    },
    addType: 'auto',
  },
  {
    id: 612392704,
    name: {
      mo: 'VerbForms Português',
    },
    addType: 'auto',
  },
  {
    id: 1659946589,
    name: {
      mo: 'Super Dark Deception',
    },
    addType: 'auto',
  },
  {
    id: 725234217,
    name: {
      mo: 'Rock Drum Machine',
    },
    addType: 'auto',
  },
  {
    id: 6572283606,
    name: {
      mo: '中医古籍名著大全（离线版）',
    },
    addType: 'auto',
  },
  {
    id: 6742472194,
    name: {
      hk: '鬼谷八荒 Tale of Immortal',
      mo: '鬼谷八荒 Tale of Immortal',
      tw: '鬼谷八荒 Tale of Immortal',
    },
    addType: 'auto',
  },
  {
    id: 834248867,
    name: {
      mo: 'SKRWT',
    },
    addType: 'auto',
  },
  {
    id: 507937883,
    name: {
      mo: 'THE KING OF FIGHTERS-i 2012',
    },
    addType: 'auto',
  },
  {
    id: 6747970208,
    name: {
      hk: 'Rush Hour Girlfriends',
      mo: 'Rush Hour Girlfriends',
      tw: 'Rush Hour Girlfriends',
    },
    addType: 'auto',
  },
  {
    id: 1212214417,
    name: {
      mo: '超級功夫全明星',
    },
    addType: 'auto',
  },
  {
    id: 539294580,
    name: {
      mo: 'ASE Rally Monitor',
    },
    addType: 'auto',
  },
  {
    id: 1160943124,
    name: {
      mo: 'Speech to Text : Voice to Text',
    },
    addType: 'auto',
  },
  {
    id: 6553989084,
    name: {
      mo: 'Lawgivers II',
    },
    addType: 'auto',
  },
  {
    id: 366195670,
    name: {
      mo: "The Photographer's Ephemeris",
    },
    addType: 'auto',
  },
  {
    id: 6478572512,
    name: {
      mo: '迷你空管：高級版',
    },
    addType: 'auto',
  },
  {
    id: 1579211407,
    name: {
      mo: '河马英文阅读器 (Hippo Reader)',
    },
    addType: 'auto',
  },
  {
    id: 491907493,
    name: {
      mo: 'ABRSM Aural Trainer Grades 1-5',
    },
    addType: 'auto',
  },
  {
    id: 1133083101,
    name: {
      mo: '國家天氣Pro-15日即時天氣預報&空氣品質',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1637940076,
    name: {
      mo: 'EarthBeat - Schumann Resonance',
    },
    addType: 'auto',
  },
  {
    id: 6740349587,
    name: {
      us: "Backyard Baseball '01",
    },
    addType: 'auto',
  },
  {
    id: 6478639011,
    name: {
      hk: 'Subnautica',
    },
    addType: 'auto',
  },
  {
    id: 1431466900,
    name: {
      mo: 'Word Root Dictionary',
    },
    addType: 'auto',
  },
  {
    id: 1519754224,
    name: {
      mo: 'Spanish Word Parts',
    },
    addType: 'auto',
  },
  {
    id: 1571643809,
    name: {
      mo: '地城謎蹤',
    },
    addType: 'auto',
  },
  {
    id: 890388924,
    name: {
      mo: 'Carrier Landings Pro',
    },
    addType: 'auto',
  },
  {
    id: 6478287619,
    name: {
      mo: 'Exploding Kittens® 2',
    },
    addType: 'auto',
  },
  {
    id: 1321340307,
    name: {
      mo: '夏日水上樂園物語',
    },
    addType: 'auto',
  },
  {
    id: 6443694525,
    name: {
      tw: '修仙掌門人',
    },
    addType: 'auto',
  },
  {
    id: 1168579372,
    name: {
      hk: '玄易八字',
    },
    addType: 'auto',
  },
  {
    id: 1368013995,
    name: {
      mo: 'Dicey Dungeons',
    },
    addType: 'auto',
  },
  {
    id: 1203896014,
    name: {
      mo: 'Freeways',
    },
    addType: 'auto',
  },
  {
    id: 6448201153,
    name: {
      mo: 'WOL — wake on lan',
    },
    addType: 'auto',
  },
  {
    id: 1575414319,
    name: {
      mo: 'Dune: Imperium',
    },
    addType: 'auto',
  },
  {
    id: 1566275194,
    name: {
      mo: '森林露營物語',
    },
    addType: 'auto',
  },
  {
    id: 6747758553,
    name: {
      hk: 'Grand Agent: It Call',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 509223426,
    name: {
      mo: 'Absolute RC Heli Simulator',
    },
    addType: 'auto',
  },
  {
    id: 389083586,
    name: {
      mo: 'MDict',
    },
    addType: 'auto',
  },
  {
    id: 627818916,
    name: {
      mo: '海鮮壽司物語',
    },
    addType: 'auto',
  },
  {
    id: 1086456790,
    name: {
      mo: 'SRR Counter for Dogs & Cats',
    },
    addType: 'auto',
  },
  {
    id: 6746355331,
    name: {
      hk: 'Stop&Get Away From Me! Defense',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1330451888,
    name: {
      mo: 'Pocket City',
    },
    addType: 'auto',
  },
  {
    id: 576443892,
    name: {
      hk: 'Logo Creator & Maker',
    },
    addType: 'auto',
  },
  {
    id: 1297430468,
    name: {
      mo: 'Florence',
    },
    addType: 'auto',
  },
  {
    id: 6740755738,
    name: {
      tw: '迷失幻途',
    },
    addType: 'auto',
  },
  {
    id: 823869162,
    name: {
      mo: 'SimplePlanes',
    },
    addType: 'auto',
  },
  {
    id: 6745006883,
    name: {
      mo: '健身模擬器',
    },
    addType: 'auto',
  },
  {
    id: 1437211990,
    name: {
      mo: '地下城與治療者 : Raid Manager',
    },
    addType: 'auto',
  },
  {
    id: 6747742701,
    name: {
      mo: '情感反捞模拟器-捞女游戏',
    },
    addType: 'auto',
  },
  {
    id: 6746683191,
    name: {
      tr: 'CASE No: 1937',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1507562429,
    name: {
      mo: '華夏人生',
    },
    addType: 'auto',
  },
  {
    id: 6745999173,
    name: {
      cn: '圆桌三国-三国休闲卡牌',
    },
    addType: 'auto',
  },
  {
    id: 6746633753,
    name: {
      tr: 'Yōkai Retreat SP Yin Yang-Sama',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1062515791,
    name: {
      mo: 'The House of Da Vinci',
    },
    addType: 'auto',
  },
  {
    id: 1631790409,
    name: {
      mo: 'Starri 星動旋律',
    },
    addType: 'auto',
  },
  {
    id: 6742321646,
    name: {
      mo: 'WSET 3 Trainer Pro',
    },
    addType: 'auto',
  },
  {
    id: 1448849222,
    name: {
      mo: 'The Bonfire 2 Uncharted Shores',
    },
    addType: 'auto',
  },
  {
    id: 550101894,
    name: {
      mo: '高吉占星 專業版Pro 星座占卜大師',
    },
    addType: 'auto',
  },
  {
    id: 1343590260,
    name: {
      mo: 'Neutral Density Calculator',
    },
    addType: 'auto',
  },
  {
    id: 504494723,
    name: {
      mo: '分數計算器 - PRO',
    },
    addType: 'auto',
  },
  {
    id: 852197796,
    name: {
      mo: 'Red Ball 4',
    },
    addType: 'auto',
  },
  {
    id: 1086452026,
    name: {
      mo: '临床医学检验技士题库 2024最新',
    },
    addType: 'auto',
  },
  {
    id: 1551273147,
    name: {
      mo: 'Otter - Diet Diary',
    },
    addType: 'auto',
  },
  {
    id: 1146269500,
    name: {
      mo: '英語日常用語-學習英語口語基本對話句型',
    },
    addType: 'auto',
  },
  {
    id: 474177077,
    name: {
      mo: '大江戶物語',
    },
    addType: 'auto',
  },
  {
    id: 6479684285,
    name: {
      mo: 'Never Night',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1039141908,
    name: {
      mo: 'LEGO® Ninjago™',
    },
    addType: 'auto',
  },
  {
    id: 547000247,
    name: {
      mo: 'LExp - Long Exposure Calcs',
    },
    addType: 'auto',
  },
  {
    id: 1332586660,
    name: {
      mo: '搜索 互聯網 文本 URL 瀏覽器',
    },
    addType: 'auto',
  },
  {
    id: 6449233549,
    name: {
      hk: 'Ark Nova',
    },
    addType: 'auto',
  },
  {
    id: 6745474000,
    name: {
      mo: '空气枪BiuGun',
    },
    addType: 'auto',
  },
  {
    id: 567533074,
    name: {
      mo: 'Sonic Jump™',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1661136258,
    name: {
      mo: 'Minifigures Tracker',
    },
    addType: 'auto',
  },
  {
    id: 344919689,
    name: {
      mo: 'HOOP i for Basketball Scores',
    },
    addType: 'auto',
  },
  {
    id: 928407252,
    name: {
      mo: '粵語字典專業版',
    },
    addType: 'auto',
  },
  {
    id: 1039733201,
    name: {
      mo: '生命 - LIFE',
    },
    addType: 'auto',
  },
  {
    id: 6472669484,
    name: {
      mo: 'Redirect',
    },
    addType: 'auto',
  },
  {
    id: 302679851,
    name: {
      mo: '童畫',
    },
    addType: 'auto',
  },
  {
    id: 1549544784,
    name: {
      mo: '倉頡打字2',
    },
    addType: 'auto',
  },
  {
    id: 6449096759,
    name: {
      mo: 'Necro-Smith',
    },
    addType: 'auto',
  },
  {
    id: 1191690597,
    name: {
      mo: '宮神星',
    },
    addType: 'auto',
  },
  {
    id: 454679700,
    name: {
      mo: '百貨公司物語',
    },
    addType: 'auto',
  },
  {
    id: 1581549121,
    name: {
      mo: '釀造物語 Hundred Days',
    },
    addType: 'auto',
  },
  {
    id: 1462058409,
    name: {
      mo: 'Another Flamenco Compás App',
    },
    addType: 'auto',
  },
  {
    id: 1287138671,
    name: {
      mo: 'Thumper：便攜版',
    },
    addType: 'auto',
  },
  {
    id: 6747207796,
    name: {
      us: "PeeWee Purpdrank's Soundboard",
    },
    addType: 'auto',
  },
  {
    id: 6449183990,
    name: {
      mo: '勇者鬥惡龍 怪物仙境3 魔族王子與艾爾芙的旅程',
    },
    addType: 'auto',
  },
  {
    id: 6667107639,
    name: {
      mo: 'HTML WYSIWYG',
    },
    addType: 'auto',
  },
  {
    id: 682170196,
    name: {
      mo: 'ChiWalking',
    },
    addType: 'auto',
  },
  {
    id: 1076450419,
    name: {
      mo: '漢語拼音字母表-學習中文普通話發音聲調拼讀基礎入門教程',
    },
    addType: 'auto',
  },
  {
    id: 1490431826,
    name: {
      mo: '图片对比',
    },
    addType: 'auto',
  },
  {
    id: 6747050164,
    name: {
      tr: 'BiR GüN DAHA',
    },
    addType: 'auto',
  },
  {
    id: 319295332,
    name: {
      mo: 'TuneIn Radio: Music & Sports',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 6740482160,
    name: {
      tw: '《最終前哨: 終極版》',
    },
    addType: 'auto',
  },
  {
    id: 1322446531,
    name: {
      mo: 'DAZZ FILM - Disposable Camera',
    },
    addType: 'auto',
  },
  {
    id: 1614740269,
    name: {
      mo: '答题王 - 百科知识问答题库',
    },
    addType: 'auto',
  },
  {
    id: 1497887150,
    name: {
      mo: 'Door Kickers: Action Squad',
    },
    addType: 'auto',
  },
  {
    id: 6474401925,
    name: {
      mo: '电工宝典',
    },
    addType: 'auto',
  },
  {
    id: 6612011484,
    name: {
      cn: '怪物乐土',
    },
    addType: 'auto',
  },
  {
    id: 396269166,
    name: {
      mo: 'The Shadow Sun',
    },
    addType: 'auto',
  },
  {
    id: 1442035374,
    name: {
      mo: '圍棋師傅',
    },
    addType: 'auto',
  },
  {
    id: 1492041611,
    name: {
      mo: 'FINAL FANTASY V',
    },
    addType: 'auto',
  },
  {
    id: 6745421021,
    name: {
      tw: 'ScanAgent',
    },
    addType: 'auto',
  },
  {
    id: 993483096,
    name: {
      mo: '拼音助手专业版 - 最好的普通話真人發聲字典',
    },
    addType: 'auto',
  },
  {
    id: 1596075354,
    name: {
      tw: '了不起的修仙模拟器',
    },
    addType: 'auto',
  },
  {
    id: 6501973975,
    name: {
      mo: '休息日',
    },
    addType: 'auto',
  },
  {
    id: 582527125,
    name: {
      mo: 'WikiCamps New Zealand',
    },
    addType: 'auto',
  },
  {
    id: 879953183,
    name: {
      mo: '視唱練習-学习阅读音乐导师',
    },
    addType: 'auto',
  },
  {
    id: 1327724550,
    name: {
      mo: '仙劍奇俠傳二',
    },
    addType: 'auto',
  },
  {
    id: 294379237,
    name: {
      mo: 'PokerCruncher - Advanced Odds',
    },
    addType: 'auto',
  },
  {
    id: 1601194499,
    name: {
      mo: '勇者鬥惡龍 創世小玩家',
    },
    addType: 'auto',
  },
  {
    id: 1465870866,
    name: {
      mo: '百貨公司物語2',
    },
    addType: 'auto',
  },
  {
    id: 1108356827,
    name: {
      mo: 'Vincelot：一款互動式騎士冒險遊戲',
    },
    addType: 'auto',
  },
  {
    id: 1256626606,
    name: {
      mo: 'iTHUMP/Toxic+',
    },
    addType: 'auto',
  },
  {
    id: 6664061289,
    name: {
      mo: '通勝 2025',
    },
    addType: 'auto',
  },
  {
    id: 1123436822,
    name: {
      mo: '五色學倉頡 (1500 字)',
    },
    addType: 'auto',
  },
  {
    id: 1576521142,
    name: {
      tw: 'SOULVARS',
    },
    addType: 'auto',
  },
  {
    id: 1207354572,
    name: {
      mo: '色卡 - 設計專業的配色工具',
    },
    addType: 'auto',
  },
  {
    id: 1319082167,
    name: {
      mo: 'Number Shield',
    },
    addType: 'auto',
  },
  {
    id: 1537057699,
    name: {
      mo: 'Solo - Fretboard Visualization',
    },
    addType: 'auto',
  },
  {
    id: 6740190367,
    name: {
      cn: 'Biu 空气手枪',
    },
    addType: 'auto',
  },
  {
    id: 6743826237,
    name: {
      mo: '墨轉 - AI文檔格式轉換',
    },
    addType: 'auto',
  },
  {
    id: 6742744417,
    name: {
      tw: '魔窟-無盡的地下城',
    },
    addType: 'auto',
  },
  {
    id: 1572719445,
    name: {
      mo: 'Hello Tower',
    },
    addType: 'auto',
  },
  {
    id: 6448971229,
    name: {
      mo: '記算工資',
    },
    addType: 'auto',
  },
  {
    id: 973113361,
    name: {
      mo: 'Rummikub®',
    },
    addType: 'auto',
  },
]

/**
 * 分组1：如果单个数组元素量级过大，
 * ts会报错：表达式生成的联合类型过于复杂，无法表示。 ts(2590)
 * 因此这里将整个应用列表拆分多个数组，然后合并成一个数组
 */
export const part1AppConfig: AppConfig[] = [
  {
    id: 549027629,
    name: {
      mo: 'Super Hexagon',
    },
    addType: 'auto',
  },
  {
    id: 6470196512,
    name: {
      mo: 'Oaken',
    },
    addType: 'auto',
  },
  {
    id: 1549693927,
    name: {
      mo: 'Star Stacker',
    },
    addType: 'auto',
  },
  {
    id: 6743135776,
    name: {
      mo: 'Getaway - Pong + Air Hockey',
    },
    addType: 'auto',
  },
  {
    id: 1462805796,
    name: {
      mo: 'Whipseey',
    },
    addType: 'auto',
  },
  {
    id: 6744710434,
    name: {
      tw: '口袋遊戲世界',
    },
    addType: 'auto',
  },
  {
    id: 1027403357,
    name: {
      mo: 'One Way: The Elevator',
    },
    addType: 'auto',
  },
  {
    id: 969924164,
    name: {
      mo: '航空大亨 Online 2',
    },
    addType: 'auto',
  },
  {
    id: 6504042502,
    name: {
      tw: '灣家寶典 (尊爵鉑金版)',
    },
    addType: 'auto',
  },
  {
    id: 1106940663,
    name: {
      tw: '灣家寶典 (榮耀黃金版)',
    },
    addType: 'auto',
  },
  {
    id: 1299784324,
    name: {
      hk: '怪獸迷你遊戲豪華版',
    },
    addType: 'auto',
  },
  {
    id: 308998718,
    name: {
      mo: 'Amazing Slow Downer',
    },
    addType: 'auto',
  },
  {
    id: 504001448,
    name: {
      mo: 'Muscles & Kinesiology',
    },
    addType: 'auto',
  },
  {
    id: 1659903900,
    name: {
      mo: 'Super Mega Lucky Box',
    },
    addType: 'auto',
  },
  {
    id: 981485539,
    name: {
      mo: 'Wise Pilgrim Camino del Norte',
    },
    addType: 'auto',
  },
  {
    id: 1077134281,
    name: {
      mo: '节拍器 : Smart Metronome & Tuner+',
    },
    addType: 'auto',
  },
  {
    id: 6478203259,
    name: {
      tw: '文字工廠',
    },
    addType: 'auto',
  },
  {
    id: 6499549945,
    name: {
      mo: 'Football Chairman Pro 2',
    },
    addType: 'auto',
  },
  {
    id: 675049147,
    name: {
      mo: 'SmallFish Chess for Stockfish',
    },
    addType: 'auto',
  },
  {
    id: 1121659254,
    name: {
      mo: '江湖风云录-超自由武侠剧情角色扮演手游',
    },
    addType: 'auto',
  },
  {
    id: 6612009107,
    name: {
      mo: 'PID控制器模擬',
    },
    addType: 'auto',
  },
  {
    id: 308296029,
    name: {
      mo: 'iStroboSoft',
    },
    addType: 'auto',
  },
  {
    id: 1435140819,
    name: {
      mo: 'Very Little Nightmares',
    },
    addType: 'auto',
  },
  {
    id: 828392046,
    name: {
      hk: 'Teach Your Monster to Read',
    },
    addType: 'auto',
  },
  {
    id: 393670998,
    name: {
      mo: '欧路词典 Eudic 增强版',
    },
    addType: 'auto',
  },
  {
    id: 1540482954,
    name: {
      mo: 'Jetting Vortex ROK GP Kart',
    },
    addType: 'auto',
  },
  {
    id: 1134126831,
    name: {
      mo: 'PhET 互動式模擬教材',
    },
    addType: 'auto',
  },
  {
    id: 1163105252,
    name: {
      mo: 'FRAMED 2 - 致命框架 2',
    },
    addType: 'auto',
  },
  {
    id: 1469235524,
    name: {
      mo: 'The House of Da Vinci 3',
    },
    addType: 'auto',
  },
  {
    id: 6471014445,
    name: {
      mo: 'Hop To It! A Piano Adventure',
    },
    addType: 'auto',
  },
  {
    id: 1481781647,
    name: {
      mo: 'KeePassium Pro (KeePass)',
    },
    addType: 'auto',
  },
  {
    id: 1072395467,
    name: {
      mo: '60 Seconds! Atomic Adventure',
    },
    addType: 'auto',
  },
  {
    id: 674064590,
    name: {
      mo: '表情符號 WeChat',
    },
    addType: 'auto',
  },
  {
    id: 1439886655,
    name: {
      mo: 'Cultist Simulator',
    },
    addType: 'auto',
  },
  {
    id: 1524418421,
    name: {
      mo: 'SessionBand Jazz Fusion',
    },
    addType: 'auto',
  },
  {
    id: 1534488108,
    name: {
      mo: 'SessionBand Jazz 4',
    },
    addType: 'auto',
  },
  {
    id: 1561849298,
    name: {
      mo: 'SessionBand Soul Jazz Funk 3',
    },
    addType: 'auto',
  },
  {
    id: 1261698956,
    name: {
      mo: 'Accurate鋼琴調音器',
    },
    addType: 'auto',
  },
  {
    id: 926177061,
    name: {
      mo: 'TinType - Hipstamatic',
    },
    addType: 'auto',
  },
  {
    id: 6743422824,
    name: {
      tw: 'Pixel Paws - Virtual Pet Toy',
    },
    addType: 'auto',
  },
  {
    id: 885792725,
    name: {
      mo: "THE KING OF FIGHTERS '98",
    },
    addType: 'auto',
  },
  {
    id: 1577752006,
    name: {
      mo: 'SoccerPlus-足球運動記錄和訓練',
    },
    addType: 'auto',
  },
  {
    id: 1632953327,
    name: {
      mo: 'Tivimax IPTV Player (Premium)',
    },
    addType: 'auto',
  },
  {
    id: 1523146826,
    name: {
      hk: '全民RPG：重啟',
    },
    addType: 'auto',
  },
  {
    id: 1609683141,
    name: {
      us: 'Dirt Trackin 3',
    },
    addType: 'auto',
  },
  {
    id: 1639509098,
    name: {
      tw: '帕夏星球：重生',
    },
    addType: 'auto',
  },
  {
    id: 6738923299,
    name: {
      hk: 'Spin Hero',
    },
    addType: 'auto',
  },
  {
    id: 299342927,
    name: {
      hk: 'PocketPhonics (basic edition)',
    },
    addType: 'auto',
  },
  {
    id: 6502399166,
    name: {
      mo: '卡路狸 - 轻运动记录',
    },
    addType: 'auto',
  },
  {
    id: 1435752659,
    name: {
      mo: '駕考王-摩托車、汽車、客車、貨車駕駛實習考試',
    },
    addType: 'auto',
  },
  {
    id: 6458733069,
    name: {
      mo: '養生鐘 - 解压小橙子 经络穴位图解',
    },
    addType: 'auto',
  },
  {
    id: 1216484605,
    name: {
      mo: 'Viewfinder Preview',
    },
    addType: 'auto',
  },
  {
    id: 440666387,
    name: {
      mo: '化學家 - CHEMIST',
    },
    addType: 'auto',
  },
  {
    id: 6480058345,
    name: {
      mo: '怪獸大進擊 2',
    },
    addType: 'auto',
  },
  {
    id: 6745711999,
    name: {
      cn: '青签助手',
    },
    addType: 'auto',
  },
  {
    id: 1060082362,
    name: {
      mo: 'OrthoFlow',
    },
    addType: 'auto',
  },
  {
    id: 486578707,
    name: {
      mo: 'Unofficial Minifigure Catalog',
    },
    addType: 'auto',
  },
  {
    id: 1083801827,
    name: {
      mo: 'Note Rush: Music Reading Game',
    },
    addType: 'auto',
  },
  {
    id: 378272803,
    name: {
      mo: 'DaF Wörterbuch Deutsch-Deutsch',
    },
    addType: 'auto',
  },
  {
    id: 6503088710,
    name: {
      hk: 'World of Goo 2',
    },
    addType: 'auto',
  },
  {
    id: 1659258538,
    name: {
      mo: 'Video Cacher',
    },
    addType: 'auto',
  },
  {
    id: 983143183,
    name: {
      mo: '夢幻怪獸',
    },
    addType: 'auto',
  },
  {
    id: 708196645,
    name: {
      mo: 'Oceanhorn ™',
    },
    addType: 'auto',
  },
  {
    id: 6503932402,
    name: {
      mo: '超声智学',
    },
    addType: 'auto',
  },
  {
    id: 325307477,
    name: {
      mo: 'AudioTools - dB, Sound & Audio',
    },
    addType: 'auto',
  },
  {
    id: 929618748,
    name: {
      mo: 'Squeezy Men',
    },
    addType: 'auto',
  },
  {
    id: 519561306,
    name: {
      mo: 'ATracker PRO - 每日時間管理',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1456212639,
    name: {
      mo: '返校',
    },
    addType: 'auto',
  },
  {
    id: 734464614,
    name: {
      mo: '生命密碼',
    },
    addType: 'auto',
  },
  {
    id: 941671702,
    name: {
      mo: 'GR Remote Viewer for GR2 & GR3',
    },
    addType: 'auto',
  },
  {
    id: 744851208,
    name: {
      mo: '賽馬牧場物語',
    },
    addType: 'auto',
  },
  {
    id: 1123652342,
    name: {
      mo: '侏羅紀GO - 恐龍抓拍歷險 - 發現並且抓拍可愛、有趣的恐龍',
    },
    addType: 'auto',
  },
  {
    id: 6742740688,
    name: {
      cn: '无声冲突',
    },
    addType: 'auto',
  },
  {
    id: 1369253556,
    name: {
      tr: 'Light | Long Exposure',
    },
    addType: 'auto',
  },
  {
    id: 6449251957,
    name: {
      mo: 'Motorsport Manager 4',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 968820626,
    name: {
      mo: 'Watch Tuner Lite',
    },
    addType: 'auto',
  },
  {
    id: 1065791514,
    name: {
      mo: '開羅拉麵店',
    },
    addType: 'auto',
  },
  {
    id: 1114127463,
    name: {
      mo: '王權 (Reigns)',
    },
    addType: 'auto',
  },
  {
    id: 1636439801,
    name: {
      mo: '軌道連結:Railbound',
    },
    addType: 'auto',
  },
  {
    id: 1479808939,
    name: {
      mo: '孙美琪',
    },
    addType: 'auto',
  },
  {
    id: 6451376191,
    name: {
      mo: 'DumbPhone: 簡約主畫面',
    },
    addType: 'auto',
  },
  {
    id: 6446912063,
    name: {
      mo: 'Disney Iwájú: Rising Chef',
    },
    addType: 'auto',
  },
  {
    id: 1611723264,
    name: {
      mo: '人類跌落夢境',
    },
    addType: 'auto',
  },
  {
    id: 409818349,
    name: {
      mo: 'Real Piano™ Classic',
    },
    addType: 'auto',
  },
  {
    id: 1141282192,
    name: {
      mo: 'Advanced Comprehension Therapy',
    },
    addType: 'auto',
  },
  {
    id: 6737434503,
    name: {
      tw: '將星三國',
    },
    addType: 'auto',
  },
  {
    id: 478289911,
    name: {
      mo: 'iMMIG 記帳小秘書',
    },
    addType: 'auto',
  },
  {
    id: 1269488509,
    name: {
      mo: '饥荒语音助手',
    },
    addType: 'auto',
  },
  {
    id: 426860241,
    name: {
      mo: 'Mini Motor Racing',
    },
    addType: 'auto',
  },
  {
    id: 531727127,
    name: {
      mo: 'CovertCam',
    },
    addType: 'auto',
  },
  {
    id: 1102750714,
    name: {
      mo: '地牢求生 - 無盡的迷宮',
    },
    addType: 'auto',
  },
  {
    id: 1387331406,
    name: {
      mo: 'Flamelet',
    },
    addType: 'auto',
  },
  {
    id: 1139588979,
    name: {
      mo: '位置偽裝器 - 模擬地圖目前位置,模擬GPS坐標',
    },
    addType: 'auto',
  },
  {
    id: 316491616,
    name: {
      mo: 'TowerMadness',
    },
    addType: 'auto',
  },
  {
    id: 332636983,
    name: {
      mo: 'Cry Translator',
    },
    addType: 'auto',
  },
  {
    id: 1419928720,
    name: {
      mo: '起點小說（專業版）',
    },
    addType: 'auto',
  },
  {
    id: 892542000,
    name: {
      mo: 'Board Game Stats',
    },
    addType: 'auto',
  },
  {
    id: 728401013,
    name: {
      mo: 'NoteWorks for iPhone',
    },
    addType: 'auto',
  },
  {
    id: 729067952,
    name: {
      mo: 'Purgatory',
    },
    addType: 'auto',
  },
  {
    id: 950012304,
    name: {
      mo: 'Cellular Info',
    },
    addType: 'auto',
  },
  {
    id: 1448241295,
    name: {
      mo: '小管家 - 短信拦截手机助手',
    },
    addType: 'auto',
  },
  {
    id: 378503081,
    name: {
      tr: 'Groundwire: VoIP SIP Softphone',
    },
    addType: 'auto',
  },
  {
    id: 535176909,
    name: {
      tw: 'BADLAND',
    },
    addType: 'auto',
  },
  {
    id: 601831815,
    name: {
      hk: 'Ridiculous Fishing - A Tale of Redemption',
    },
    addType: 'auto',
  },
  {
    id: 1614795077,
    name: {
      hk: "Otaku's Adventure",
    },
    addType: 'auto',
  },
  {
    id: 6744998205,
    name: {
      cn: '猜病猜盐-猜病小测验程序',
    },
    addType: 'auto',
  },
  {
    id: 6477745183,
    name: {
      tw: 'Echo Ways',
    },
    addType: 'auto',
  },
  {
    id: 557168861,
    name: {
      hk: '香港法例 Legislation HK',
    },
    addType: 'auto',
  },
  {
    id: 586604476,
    name: {
      hk: '易爻(實用)',
    },
    addType: 'auto',
  },
  {
    id: 597758149,
    name: {
      tw: '聽寫五十音專業版',
    },
    addType: 'auto',
  },
  {
    id: 625740630,
    name: {
      tw: 'Hairtechapp - Cutting Diagrams',
    },
    addType: 'auto',
  },
  {
    id: 808296431,
    name: {
      hk: 'Crashlands',
    },
    addType: 'auto',
  },
  {
    id: 1116905928,
    name: {
      tw: 'nPlayer',
    },
    addType: 'auto',
  },
  {
    id: 1292311498,
    name: {
      hk: 'International One Night',
    },
    addType: 'auto',
  },
  {
    id: 6473332700,
    name: {
      cn: '逐鹿 - 历史沙盘战棋',
    },
    addType: 'auto',
  },
  {
    id: 6742526717,
    name: {
      mo: 'WatchTube for YouTube',
    },
    addType: 'auto',
  },
  {
    id: 6478398981,
    name: {
      tr: 'IPTV Smart Pro - 4K Live TV',
    },
    addType: 'auto',
  },
  {
    id: 528181527,
    name: {
      tw: '行車記錄儀「TripREC」',
    },
    addType: 'auto',
  },
  {
    id: 545625741,
    name: {
      tr: 'King of Maths: Full Game',
    },
    addType: 'auto',
  },
  {
    id: 592398757,
    name: {
      hk: 'Perfect Tempo',
    },
    addType: 'auto',
  },
  {
    id: 669835030,
    name: {
      hk: 'WinZip完整版',
    },
    addType: 'auto',
  },
  {
    id: 672649451,
    name: {
      mo: 'Panecal Plus 科學計算器',
    },
    addType: 'auto',
  },
  {
    id: 682046579,
    name: {
      tw: 'Tinybop 人體探秘',
    },
    addType: 'auto',
  },
  {
    id: 787148904,
    name: {
      hk: 'R-TYPE II',
    },
    addType: 'auto',
  },
  {
    id: 933113994,
    name: {
      tw: 'DRAGON QUEST V',
    },
    addType: 'auto',
  },
  {
    id: 1056920931,
    name: {
      hk: 'Iron Marines',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1082806154,
    name: {
      hk: 'Age of Rivals',
    },
    addType: 'auto',
  },
  {
    id: 1354857517,
    name: {
      hk: 'NotePad++ - Pro',
    },
    addType: 'auto',
  },
  {
    id: 1463331841,
    name: {
      us: 'Oolimo Guitar Chords',
    },
    addType: 'auto',
  },
  {
    id: 1476509317,
    name: {
      cn: '每日英语 听力学习版',
    },
    addType: 'auto',
  },
  {
    id: 1599005073,
    name: {
      tw: 'KOF 2002 ACA NEOGEO',
    },
    addType: 'auto',
  },
  {
    id: 1623111026,
    name: {
      tw: '口袋學院物語3',
    },
    addType: 'auto',
  },
  {
    id: 1671475521,
    name: {
      tw: 'DNA Transform!',
    },
    addType: 'auto',
  },
  {
    id: 6479295005,
    name: {
      tw: '住宅夢物語 DX',
    },
    addType: 'auto',
  },
  {
    id: 6744569015,
    name: {
      us: 'Neon Labyrinth',
    },
    addType: 'auto',
  },
  {
    id: 6502905107,
    name: {
      tr: 'AListServer',
    },
    addType: 'auto',
  },
  {
    id: 400259071,
    name: {
      tw: '降雨警報器 Pro',
    },
    addType: 'auto',
  },
  {
    id: 1139986977,
    name: {
      tw: '軒轅劍參 雲和山的彼端 加強版',
    },
    addType: 'auto',
  },
  {
    id: 1197552569,
    name: {
      tw: 'Poly Bridge',
    },
    addType: 'auto',
  },
  {
    id: 1313164055,
    name: {
      tw: 'EE35 Film Camera',
    },
    addType: 'auto',
  },
  {
    id: 1553774029,
    name: {
      us: 'Taskmaster The App',
    },
    addType: 'auto',
  },
  {
    id: 6449433291,
    name: {
      tw: '常春藤108課綱基礎單字',
    },
    addType: 'auto',
  },
  {
    id: 1403183441,
    name: {
      tr: 'Ala Mobile GP',
    },
    addType: 'auto',
  },
  {
    id: 1538900393,
    name: {
      tw: '風雲拳擊物語',
    },
    addType: 'auto',
  },
  {
    id: 6476442028,
    name: {
      tr: 'Zelzele Türkiye',
    },
    addType: 'auto',
  },
  {
    id: 461659980,
    name: {
      hk: 'Phonics Genius',
    },
    addType: 'auto',
  },
  {
    id: 6458144503,
    name: {
      hk: 'Skul: The Hero Slayer',
    },
    addType: 'auto',
  },
  {
    id: 1552176109,
    name: {
      hk: 'Trials of Mana',
    },
    addType: 'auto',
  },
  {
    id: 1580067723,
    name: {
      tr: 'Wall of insanity',
    },
    addType: 'auto',
  },
  {
    id: 1621055260,
    name: {
      cn: '百分之一',
    },
    addType: 'auto',
  },
  {
    id: 840811083,
    name: {
      tr: 'Rules!',
    },
    addType: 'auto',
  },
  {
    id: 1473749002,
    name: {
      tr: 'Vergi Akademisi Pro',
    },
    addType: 'auto',
  },
  {
    id: 6508165149,
    name: {
      tr: 'Dungeon Clawler',
    },
    addType: 'auto',
  },
  {
    id: 537280156,
    name: {
      tw: 'Raiden Legacy',
    },
    addType: 'auto',
  },
  {
    id: 635644097,
    name: {
      tw: 'Tuner by Piascore',
    },
    addType: 'auto',
  },
  {
    id: 727544019,
    name: {
      hk: 'Street Kart #1 Go Kart Game',
    },
    addType: 'auto',
  },
  {
    id: 950812012,
    name: {
      tr: "Alto's Adventure",
    },
    addType: 'auto',
  },
  {
    id: 1001096601,
    name: {
      tr: '1941 Frozen Front Premium',
    },
    addType: 'auto',
  },
  {
    id: 1439889483,
    name: {
      tr: 'Construction Simulator 3',
    },
    addType: 'auto',
  },
  {
    id: 1562555975,
    name: {
      tw: 'D2助手(專業版) for 暗黑破壞神2重製版',
    },
    addType: 'auto',
  },
  {
    id: 1567658979,
    name: {
      hk: 'SkySafari 7 Pro',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 6467822375,
    name: {
      hk: 'Auto Redial App',
    },
    addType: 'auto',
  },
  {
    id: 329772936,
    name: {
      tr: 'iDeco Pro',
    },
    addType: 'auto',
  },
  {
    id: 394057299,
    name: {
      hk: 'Battleheart',
    },
    addType: 'auto',
  },
  {
    id: 499470113,
    name: {
      hk: 'FE File Explorer Pro',
    },
    addType: 'auto',
  },
  {
    id: 666508823,
    name: {
      hk: 'Battleheart Legacy',
    },
    addType: 'auto',
  },
  {
    id: 792638268,
    name: {
      hk: '合戰忍者村物語',
    },
    addType: 'auto',
  },
  {
    id: 1095883970,
    name: {
      tw: '芳香樂活',
    },
    addType: 'auto',
  },
  {
    id: 1232791258,
    name: {
      hk: 'Battleheart 2',
    },
    addType: 'auto',
  },
  {
    id: 1600925588,
    name: {
      hk: 'GR Linker - Image Sync',
    },
    addType: 'auto',
  },
  {
    id: 6474479684,
    name: {
      cn: "Spark - Ren'Py 小说们",
    },
    addType: 'auto',
  },
  {
    id: 6466296603,
    name: {
      hk: 'The Last Game',
    },
    addType: 'auto',
  },
  {
    id: 6670402289,
    name: {
      hk: 'Looking for Aliens',
    },
    addType: 'auto',
  },
  {
    id: 459947180,
    name: {
      mo: 'LectroRM',
    },
    addType: 'auto',
  },
  {
    id: 1491196899,
    name: {
      us: "Papa's Bakeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1559183447,
    name: {
      mo: 'PoPo日记 - 心情日记本,记录情绪手账和记事本',
    },
    addType: 'auto',
  },
  {
    id: 1041260001,
    name: {
      hk: 'FINAL FANTASY Ⅸ',
    },
    addType: 'auto',
  },
  {
    id: 1059218666,
    name: {
      tw: 'Litchi for DJI Drones',
    },
    addType: 'auto',
  },
  {
    id: 1059911569,
    name: {
      hk: 'Rusty Lake Hotel',
    },
    addType: 'auto',
  },
  {
    id: 1202650514,
    name: {
      hk: 'HealthFit',
    },
    addType: 'auto',
  },
  {
    id: 1230231705,
    name: {
      tw: 'The Witness',
    },
    addType: 'auto',
  },
  {
    id: 1441522083,
    name: {
      tw: 'Morphing LED Banner',
    },
    addType: 'auto',
  },
  {
    id: 1492041539,
    name: {
      tw: 'FINAL FANTASY VI',
    },
    addType: 'auto',
  },
  {
    id: 1498778559,
    name: {
      hk: 'MindPage',
    },
    addType: 'auto',
  },
  {
    id: 1533709428,
    name: {
      tr: 'Pocket City 2',
    },
    addType: 'auto',
  },
  {
    id: 1559871386,
    name: {
      tr: 'ehliyet Sınav Sorular 2022 PRO',
    },
    addType: 'auto',
  },
  {
    id: 1560779038,
    name: {
      hk: '伤寒论条阅',
    },
    addType: 'auto',
  },
  {
    id: 6450680262,
    name: {
      hk: 'CMSPlayer',
    },
    addType: 'auto',
  },
  {
    id: 6443750571,
    name: {
      hk: 'EmoGuard - 關鍵字攔截器',
    },
    addType: 'auto',
  },
  {
    id: 6466976437,
    name: {
      tw: 'OOTP Baseball 26 Go!',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 424591347,
    name: {
      hk: 'FINAL FANTASY III (3D REMAKE)',
    },
    addType: 'auto',
  },
  {
    id: 563082328,
    name: {
      us: 'Military Retirement',
    },
    addType: 'auto',
  },
  {
    id: 962291530,
    name: {
      tw: 'Analog Beijing',
    },
    addType: 'auto',
  },
  {
    id: 1003660287,
    name: {
      hk: 'Dwarf Fortress Remote',
    },
    addType: 'auto',
  },
  {
    id: 1035220162,
    name: {
      tw: 'Analog Budapest',
    },
    addType: 'auto',
  },
  {
    id: 1055650930,
    name: {
      us: 'Codenames',
    },
    addType: 'auto',
  },
  {
    id: 1073576068,
    name: {
      hk: '電波表對時',
    },
    addType: 'auto',
  },
  {
    id: 1106831630,
    name: {
      tr: 'ROME: Total War',
    },
    addType: 'auto',
  },
  {
    id: 1138248035,
    name: {
      tw: 'Analog Seoul',
    },
    addType: 'auto',
  },
  {
    id: 1373057849,
    name: {
      tw: '三國志漢末霸業',
    },
    addType: 'auto',
  },
  {
    id: 1458977921,
    name: {
      hk: '照片保險箱Pro - 密碼鎖加密隱藏隱私相片',
    },
    addType: 'auto',
  },
  {
    id: 1509252675,
    name: {
      tr: 'Lapse: A Forgotten Future',
    },
    addType: 'auto',
  },
  {
    id: 1554691584,
    name: {
      hk: 'Naturalisation en France',
    },
    addType: 'auto',
  },
  {
    id: 1574339556,
    name: {
      tr: 'Game Booster 4x',
    },
    addType: 'auto',
  },
  {
    id: 6453763474,
    name: {
      hk: 'Hidden Through Time 2: Magic',
    },
    addType: 'auto',
  },
  {
    id: 6477535804,
    name: {
      tw: '虛空穹牢',
    },
    addType: 'auto',
  },
  {
    id: 6730126160,
    name: {
      tw: '戲曲鑼鼓 - 傳統樂器新體驗',
    },
    addType: 'auto',
  },
  {
    id: 6449986941,
    name: {
      tw: '常春藤108課綱核心單字',
    },
    addType: 'auto',
  },
  {
    id: 1115520522,
    name: {
      cn: '姬魔恋战纪-单机剧情手游戏',
    },
    addType: 'auto',
  },
  {
    id: 1322877018,
    name: {
      tr: 'DataX Earthquake',
    },
    addType: 'auto',
  },
  {
    id: 379485721,
    name: {
      us: 'Blood Type Diet®',
    },
    addType: 'auto',
  },
  {
    id: 1537362903,
    name: {
      tr: 'Neighbours back From Hell',
    },
    addType: 'auto',
  },
  {
    id: 338893931,
    name: {
      us: 'Prepware Aviation Maintenance',
    },
    addType: 'auto',
  },
  {
    id: 596026805,
    name: {
      tw: 'PhotoPills',
    },
    addType: 'auto',
  },
  {
    id: 1448573670,
    name: {
      cn: '冒险与征服-暗黑单机RPG角色扮演挂机游戏',
    },
    addType: 'auto',
  },
  {
    id: 1619733202,
    name: {
      hk: '的士地方筆試 2024 Pro',
    },
    addType: 'auto',
  },
  {
    id: 6450058135,
    name: {
      tw: 'Unpacking',
    },
    addType: 'auto',
  },
  {
    id: 304731501,
    name: {
      hk: 'Tempo - Metronome 節拍器',
    },
    addType: 'auto',
  },
  {
    id: 954982733,
    name: {
      hk: 'Tuner T1 Pro',
    },
    addType: 'auto',
  },
  {
    id: 979048658,
    name: {
      tw: '新多益必考選擇題型1000',
    },
    addType: 'auto',
  },
  {
    id: 1050535507,
    name: {
      hk: 'Lanota - 動感節奏音樂遊戲',
    },
    addType: 'auto',
  },
  {
    id: 1078553162,
    name: {
      tw: '超級單字王Pro',
    },
    addType: 'auto',
  },
  {
    id: 1384164285,
    name: {
      mo: 'AR魯班尺',
    },
    addType: 'auto',
  },
  {
    id: 1586762439,
    name: {
      tr: 'Auto Translate for Safari',
    },
    addType: 'auto',
  },
  {
    id: 1598843625,
    name: {
      hk: 'DragonSpear-Ex',
    },
    addType: 'auto',
  },
  {
    id: 6445905944,
    name: {
      tr: 'Garten of Banban 2',
    },
    addType: 'auto',
  },
  {
    id: 6449941289,
    name: {
      tr: 'Spirit of the Island',
    },
    addType: 'auto',
  },
  {
    id: 384363262,
    name: {
      tw: '13:20:Sync',
    },
    addType: 'auto',
  },
  {
    id: 1561136737,
    name: {
      hk: 'Word Puzzle-Cambridge (NoAds)',
    },
    addType: 'auto',
  },
  {
    id: 6451224796,
    name: {
      hk: '藏武',
    },
    addType: 'auto',
  },
  {
    id: 6504192378,
    name: {
      tw: 'B.ROLL - 青春濾鏡相機',
    },
    addType: 'auto',
  },
  {
    id: 1462324486,
    name: {
      us: "Papa's Donuteria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 344844888,
    name: {
      hk: '天元烏兔萬年曆 - 十三行作品',
    },
    addType: 'auto',
  },
  {
    id: 349242632,
    name: {
      hk: '六爻裝卦',
    },
    addType: 'auto',
  },
  {
    id: 936694037,
    name: {
      hk: 'Voice Recorder - Audio Record',
    },
    addType: 'auto',
  },
  {
    id: 1101997011,
    name: {
      hk: '奇門(實用)',
    },
    addType: 'auto',
  },
  {
    id: 1147297267,
    name: {
      hk: "Don't Starve: Shipwrecked",
    },
    addType: 'auto',
  },
  {
    id: 1205486761,
    name: {
      tw: 'Beholder',
    },
    addType: 'auto',
  },
  {
    id: 1506620807,
    name: {
      hk: '麻雀AI小番 - 胡牌分析',
    },
    addType: 'auto',
  },
  {
    id: 1513506417,
    name: {
      cn: '轻历 - 清新日历',
    },
    addType: 'auto',
  },
  {
    id: 1563906582,
    name: {
      hk: 'Bus Simulator',
    },
    addType: 'auto',
  },
  {
    id: 1586437121,
    name: {
      hk: '吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本',
    },
    addType: 'auto',
  },
  {
    id: 1599393574,
    name: {
      tr: 'Peace, Death! 2',
    },
    addType: 'auto',
  },
  {
    id: 1642715290,
    name: {
      hk: 'Little Big Workshop',
    },
    addType: 'auto',
  },
  {
    id: 1672004303,
    name: {
      hk: '探險頑皮動物園',
    },
    addType: 'auto',
  },
  {
    id: 6463115144,
    name: {
      tw: '開拍！電視製作物語',
    },
    addType: 'auto',
  },
  {
    id: 6448530928,
    name: {
      tr: 'Total War™: EMPIRE',
    },
    addType: 'auto',
  },
  {
    id: 6502455111,
    name: {
      tr: 'Lara Croft: Guardian of Light',
    },
    addType: 'auto',
  },
  {
    id: 295462558,
    name: {
      hk: 'Toobz',
    },
    addType: 'auto',
  },
  {
    id: 329233299,
    name: {
      hk: 'Universe Splitter',
    },
    addType: 'auto',
  },
  {
    id: 329981776,
    name: {
      hk: 'Sudoku ″',
    },
    addType: 'auto',
  },
  {
    id: 363738376,
    name: {
      tw: 'forScore',
    },
    addType: 'auto',
  },
  {
    id: 479431697,
    name: {
      tw: 'CHRONO TRIGGER (Upgrade Ver.)',
    },
    addType: 'auto',
  },
  {
    id: 525176875,
    name: {
      tw: 'Sun Surveyor (太陽測量師)',
    },
    addType: 'auto',
  },
  {
    id: 922155038,
    name: {
      tr: 'aprs.fi',
    },
    addType: 'auto',
  },
  {
    id: 989630809,
    name: {
      tw: 'Malody',
    },
    addType: 'auto',
  },
  {
    id: 1001613037,
    name: {
      hk: 'ABRSM Aural Trainer Grades 6-8',
    },
    addType: 'auto',
  },
  {
    id: 1029588869,
    name: {
      tr: 'Brothers: A Tale of Two Sons',
    },
    addType: 'auto',
  },
  {
    id: 1043963852,
    name: {
      tw: 'Pipefitter',
    },
    addType: 'auto',
  },
  {
    id: 1086617993,
    name: {
      tw: '時間塊 - 快速記錄時間規劃日程安排',
    },
    addType: 'auto',
  },
  {
    id: 1104795347,
    name: {
      hk: 'iFiles 2',
    },
    addType: 'auto',
  },
  {
    id: 1184336299,
    name: {
      hk: 'NAS Detector',
    },
    addType: 'auto',
  },
  {
    id: 1270659758,
    name: {
      tw: '如果可以回家早一點',
    },
    addType: 'auto',
  },
  {
    id: 1308038634,
    name: {
      tw: '修真风云录',
    },
    addType: 'auto',
  },
  {
    id: 1486110292,
    name: {
      tw: 'Minitube for Youtube',
    },
    addType: 'auto',
  },
  {
    id: 1531068181,
    name: {
      hk: 'TimeGlance - 複雜功能',
    },
    addType: 'auto',
  },
  {
    id: 1551539091,
    name: {
      hk: 'NFC Business Card - Read Write',
    },
    addType: 'auto',
  },
  {
    id: 1552157188,
    name: {
      hk: '轉換字幕格式',
    },
    addType: 'auto',
  },
  {
    id: 1577762239,
    name: {
      hk: 'Invading Horde - TD',
    },
    addType: 'auto',
  },
  {
    id: 1613920866,
    name: {
      tw: '金價即時通',
    },
    addType: 'auto',
  },
  {
    id: 1617006551,
    name: {
      hk: '南國度假島物語',
      tw: '南國度假島物語',
    },
    addType: 'auto',
  },
  {
    id: 6447693393,
    name: {
      cn: '灵感卡片 - 笔记',
    },
    addType: 'auto',
  },
  {
    id: 6446021269,
    name: {
      hk: 'ROCKMAN X DiVE Offline',
    },
    addType: 'auto',
  },
  {
    id: 6446337236,
    name: {
      hk: '新概念英語--新概念英語全四册單詞聽力口語',
    },
    addType: 'auto',
  },
  {
    id: 6475892753,
    name: {
      hk: 'Listenify',
    },
    addType: 'auto',
  },
  {
    id: 6739755879,
    name: {
      hk: 'Oishii Map - Tabelog Top 100',
    },
    addType: 'auto',
  },
  {
    id: 6443849085,
    name: {
      hk: 'Terminal Madness - Awakening',
    },
    addType: 'auto',
  },
  {
    id: 6744893097,
    name: {
      hk: 'Easy Snap Finger',
    },
    addType: 'auto',
  },
  {
    id: 463295925,
    name: {
      hk: 'Official DVSA Theory Test Kit',
    },
    addType: 'auto',
  },
  {
    id: 1115022026,
    name: {
      hk: 'The Secret To Money',
    },
    addType: 'auto',
  },
  {
    id: 1442440203,
    name: {
      tw: '大家的日本語初級1-改訂版',
    },
    addType: 'auto',
  },
  {
    id: 1453820315,
    name: {
      hk: 'This Is the Police 2',
    },
    addType: 'auto',
  },
  {
    id: 1453875289,
    name: {
      tr: 'Hyper Light Drifter',
    },
    addType: 'auto',
  },
  {
    id: 1543161449,
    name: {
      tw: '冒險村物語2',
    },
    addType: 'auto',
  },
  {
    id: 1616652599,
    name: {
      hk: 'Kingdom Eighties',
    },
    addType: 'auto',
  },
  {
    id: 6444435974,
    name: {
      tw: 'VARIOUS DAYLIFE Mobile',
    },
    addType: 'auto',
  },
  {
    id: 755018884,
    name: {
      cn: '新概念英语专业版 - 英语美语全四册',
    },
    addType: 'auto',
  },
  {
    id: 1319618742,
    name: {
      hk: 'Getting Over It',
    },
    addType: 'auto',
  },
  {
    id: 1423115391,
    name: {
      tr: 'Führerschein 2025 GOLD',
    },
    addType: 'auto',
  },
  {
    id: 6474207287,
    name: {
      hk: 'Wagotabi（和語旅）：學習日語',
    },
    addType: 'auto',
  },
  {
    id: 497880658,
    name: {
      us: 'J23 - Release Dates & Restocks',
    },
    addType: 'auto',
  },
  {
    id: 1108935309,
    name: {
      hk: '20 Watch Games - Classic Pack',
    },
    addType: 'auto',
  },
  {
    id: 1410053842,
    name: {
      tw: '小漁輪班',
    },
    addType: 'auto',
  },
  {
    id: 1519508653,
    name: {
      hk: 'Nomad Sculpt - 3D雕刻建模',
    },
    addType: 'auto',
  },
  {
    id: 6446826650,
    name: {
      tw: '創造都市島物語',
    },
    addType: 'auto',
  },
  {
    id: 998437590,
    name: {
      cn: '西语背单词',
    },
    addType: 'auto',
  },
  {
    id: 430388524,
    name: {
      mo: 'Do! Spring Mint - To Do List',
    },
    addType: 'auto',
  },
  {
    id: 592155900,
    name: {
      tr: 'Wake up! Earthquake',
    },
    addType: 'auto',
  },
  {
    id: 625274950,
    name: {
      tw: '國語辭典',
    },
    addType: 'auto',
  },
  {
    id: 998834675,
    name: {
      tr: 'Clouds & Sheep 2 Premium',
    },
    addType: 'auto',
  },
  {
    id: 1232529101,
    name: {
      mo: '歸家異途',
    },
    addType: 'auto',
  },
  {
    id: 1573482724,
    name: {
      hk: 'Coffee Inc 2',
    },
    addType: 'auto',
  },
  {
    id: 1602772289,
    name: {
      hk: '7 Days to End with You',
    },
    addType: 'auto',
  },
  {
    id: 1613295180,
    name: {
      hk: '青春敘曲',
    },
    addType: 'auto',
  },
  {
    id: 1614666556,
    name: {
      tr: 'CNC VMC Simulator',
    },
    addType: 'auto',
  },
  {
    id: 1624777523,
    name: {
      mo: 'Guess Who? Meet the Crew',
    },
    addType: 'auto',
  },
  {
    id: 413943804,
    name: {
      mo: 'Real Piano™',
    },
    addType: 'auto',
  },
  {
    id: 508064644,
    name: {
      tr: 'Earthquakes Pro',
    },
    addType: 'auto',
  },
  {
    id: 1038014543,
    name: {
      tw: 'Day R Premium: last world war',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1084793426,
    name: {
      tr: 'Instant USGS Earthquake Pro',
    },
    addType: 'auto',
  },
  {
    id: 1596863467,
    name: {
      tw: 'LoveChoice 揀愛',
    },
    addType: 'auto',
  },
  {
    id: 1602403259,
    name: {
      tr: 'Webmail App',
    },
    addType: 'auto',
  },
  {
    id: 1622064157,
    name: {
      tr: 'Sismo: Vibration Meter & Alert',
    },
    addType: 'auto',
  },
  {
    id: 6447606411,
    name: {
      tw: '創意咖啡店物語',
    },
    addType: 'auto',
  },
  {
    id: 6449046261,
    name: {
      tw: '水晶戰爭2-精品生存Roguelike策略塔防單機獨立遊戲',
    },
    addType: 'auto',
  },
  {
    id: 336543029,
    name: {
      tw: "Grat's Film Slate/Clapboard",
    },
    addType: 'auto',
  },
  {
    id: 583922375,
    name: {
      hk: 'myLightMeter PRO',
    },
    addType: 'auto',
  },
  {
    id: 608540795,
    name: {
      hk: 'Tunable – Tuner & Metronome',
    },
    addType: 'auto',
  },
  {
    id: 975770717,
    name: {
      tr: 'My Earthquake Alerts Pro',
    },
    addType: 'auto',
  },
  {
    id: 1056698678,
    name: {
      tw: 'Live 2 Photos',
    },
    addType: 'auto',
  },
  {
    id: 1062022008,
    name: {
      tw: 'LumaFusion',
      tr: 'LumaFusion',
    },
    addType: 'auto',
  },
  {
    id: 1207867591,
    name: {
      us: "Papa's Taco Mia To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1326740784,
    name: {
      hk: 'FINAL FANTASY VIII Remastered',
    },
    addType: 'auto',
  },
  {
    id: 1372408358,
    name: {
      tr: 'ARGun2018',
    },
    addType: 'auto',
  },
  {
    id: 1438597800,
    name: {
      tw: 'OKNDrum: Optokinetic Drum',
    },
    addType: 'auto',
  },
  {
    id: 1448798374,
    name: {
      tw: 'CAR++',
    },
    addType: 'auto',
  },
  {
    id: 1450908177,
    name: {
      tr: 'Shadow Of Death: Premium Games',
    },
    addType: 'auto',
  },
  {
    id: 1509817154,
    name: {
      cn: '某某宗女修修炼手札',
    },
    addType: 'auto',
  },
  {
    id: 1513814705,
    name: {
      tw: '計算器鍵盤 - 快人一步',
    },
    addType: 'auto',
  },
  {
    id: 1543183092,
    name: {
      tr: 'YKS Konu, Deneme, Soru Takibi',
    },
    addType: 'auto',
  },
  {
    id: 6744311159,
    name: {
      cn: '魔王终局',
    },
    addType: 'auto',
  },
  {
    id: 6740014272,
    name: {
      cn: '水果合成 - 手表游戏',
    },
    addType: 'auto',
  },
  {
    id: 6742253703,
    name: {
      hk: 'Slime 3K: Rise Against Despot',
    },
    addType: 'auto',
  },
  {
    id: 6463440317,
    name: {
      tr: 'Online Kaza Tutanağı',
    },
    addType: 'auto',
  },
  {
    id: 6502287918,
    name: {
      tr: 'PPSSPP Gold - PSP emulator',
    },
    addType: 'auto',
  },
  {
    id: 400666114,
    name: {
      hk: 'Guitar Pro',
    },
    addType: 'auto',
  },
  {
    id: 562989701,
    name: {
      tr: 'Vector Classic',
    },
    addType: 'auto',
  },
  {
    id: 1127680609,
    name: {
      tw: 'Tortoise - Keep Recording',
    },
    addType: 'auto',
  },
  {
    id: 1171627280,
    name: {
      tw: '魔窟-無盡的地下城：暗黑世界',
    },
    addType: 'auto',
  },
  {
    id: 1179421849,
    name: {
      tw: 'GRID™ Autosport',
    },
    addType: 'auto',
  },
  {
    id: 1260311003,
    name: {
      hk: 'Notation Scanner - 五線譜樂譜圖像識別',
    },
    addType: 'auto',
  },
  {
    id: 1291427111,
    name: {
      hk: 'Evoland 2',
    },
    addType: 'auto',
  },
  {
    id: 1437715202,
    name: {
      hk: '倉頡詞典',
    },
    addType: 'auto',
  },
  {
    id: 1519571900,
    name: {
      tr: 'Luwian',
    },
    addType: 'auto',
  },
  {
    id: 1544947623,
    name: {
      tr: 'Kiosk - fullscreen browser',
    },
    addType: 'auto',
  },
  {
    id: 1575192531,
    name: {
      hk: '遊樂園夢物語',
    },
    addType: 'auto',
  },
  {
    id: 6742311454,
    name: {
      cn: '伏魔诀-阴阳秘术诡道修仙录',
    },
    addType: 'auto',
  },
  {
    id: 6444396120,
    name: {
      cn: '挺进地牢',
    },
    addType: 'auto',
  },
  {
    id: 6738590491,
    name: {
      hk: 'KennysGifs',
    },
    addType: 'auto',
  },
  {
    id: 6444311205,
    name: {
      hk: 'GRID™ Legends: Deluxe Edition',
    },
    addType: 'auto',
  },
  {
    id: 6477660875,
    name: {
      hk: '大海賊探險物語DX',
    },
    addType: 'auto',
  },
  {
    id: 6447090616,
    name: {
      hk: 'Whisper Notes - 離線 AI 語音輸入轉錄文字',
    },
    addType: 'auto',
  },
  {
    id: 414371107,
    name: {
      tw: 'Morse Elmer',
    },
    addType: 'auto',
  },
  {
    id: 510119487,
    name: {
      hk: 'AnatomyMapp',
    },
    addType: 'auto',
  },
  {
    id: 561396899,
    name: {
      hk: '皇帝養成計畫 - 經典歷史模擬遊戲',
    },
    addType: 'auto',
  },
  {
    id: 634158738,
    name: {
      us: 'e-Sword LT: Bible Study to Go',
    },
    addType: 'auto',
  },
  {
    id: 814977594,
    name: {
      tw: 'Surgeon Simulator',
    },
    addType: 'auto',
  },
  {
    id: 958889621,
    name: {
      hk: 'ADF Trainer - YOU Session Prep',
    },
    addType: 'auto',
  },
  {
    id: 1066366174,
    name: {
      hk: 'Concentration Grid',
    },
    addType: 'auto',
  },
  {
    id: 1397002811,
    name: {
      hk: 'Catholic Hymn',
    },
    addType: 'auto',
  },
  {
    id: 1447509164,
    name: {
      hk: 'Freya • Surge Timer',
    },
    addType: 'auto',
  },
  {
    id: 1456714022,
    name: {
      tw: 'RFECU Performance 2.0',
    },
    addType: 'auto',
  },
  {
    id: 1459520638,
    name: {
      us: 'Wingspan: The Board Game',
    },
    addType: 'auto',
  },
  {
    id: 1463480017,
    name: {
      tw: '韭菜投資公司',
    },
    addType: 'auto',
  },
  {
    id: 1466120520,
    name: {
      us: 'iVerify Basic',
    },
    addType: 'auto',
  },
  {
    id: 1499085878,
    name: {
      tr: 'CNC Lathe Simulator',
    },
    addType: 'auto',
  },
  {
    id: 1522425038,
    name: {
      tw: 'Alien10',
    },
    addType: 'auto',
  },
  {
    id: 1541290982,
    name: {
      tw: 'GPSPlus Pro',
    },
    addType: 'auto',
  },
  {
    id: 1551579024,
    name: {
      hk: '創意漢堡物語',
    },
    addType: 'auto',
  },
  {
    id: 1562608316,
    name: {
      hk: 'Kelvin: Light Panel',
    },
    addType: 'auto',
  },
  {
    id: 1601177112,
    name: {
      mo: '便利商店開業日記',
    },
    addType: 'auto',
  },
  {
    id: 1609059358,
    name: {
      hk: 'eVario2  - Variometer Pro',
    },
    addType: 'auto',
  },
  {
    id: 6702013134,
    name: {
      hk: 'Cat Flow - 貓計時器 & 專注番茄鐘',
    },
    addType: 'auto',
  },
  {
    id: 6740487579,
    name: {
      hk: 'Songs of Conquest Mobile',
    },
    addType: 'auto',
  },
  {
    id: 6451009326,
    name: {
      hk: 'LMP',
    },
    addType: 'auto',
  },
  {
    id: 6473789128,
    name: {
      tw: '星落湖傳說-魔法騎士團',
    },
    addType: 'auto',
  },
  {
    id: 299021909,
    name: {
      tw: '聖經工具(新標點和合本)',
    },
    addType: 'auto',
  },
  {
    id: 407078169,
    name: {
      hk: '⋆數獨+',
    },
    addType: 'auto',
  },
  {
    id: 418751595,
    name: {
      hk: 'GyrOSC',
    },
    addType: 'auto',
  },
  {
    id: 667362389,
    name: {
      tr: 'The Room Two',
    },
    addType: 'auto',
  },
  {
    id: 768379887,
    name: {
      tw: 'Eye Meter',
    },
    addType: 'auto',
  },
  {
    id: 814323051,
    name: {
      hk: '中世紀Bridge Constructor',
    },
    addType: 'auto',
  },
  {
    id: 911205290,
    name: {
      tw: 'DRAGON QUEST II',
    },
    addType: 'auto',
  },
  {
    id: 983145797,
    name: {
      tw: '超注音',
    },
    addType: 'auto',
  },
  {
    id: 1033342465,
    name: {
      hk: 'Just Press Record',
    },
    addType: 'auto',
  },
  {
    id: 1112850631,
    name: {
      tw: '樂秀專業版-影片編輯與影片剪輯',
    },
    addType: 'auto',
  },
  {
    id: 1126386264,
    name: {
      tr: 'AdGuard Pro — adblock',
    },
    addType: 'auto',
  },
  {
    id: 1182456409,
    name: {
      tw: '奧托的奧德賽',
    },
    addType: 'auto',
  },
  {
    id: 1238247658,
    name: {
      hk: 'Cluedo: Classic Edition',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1260271235,
    name: {
      hk: 'BoatSpeed: Course & Speed',
    },
    addType: 'auto',
  },
  {
    id: 1260967308,
    name: {
      tw: 'WhatCall',
    },
    addType: 'auto',
  },
  {
    id: 1423585518,
    name: {
      tw: 'ROMAN: 進食計畫、減肥、減脂一體化。體重管理。',
    },
    addType: 'auto',
  },
  {
    id: 1508108761,
    name: {
      hk: 'EasyQuit Pro - Stop Smoking',
    },
    addType: 'auto',
  },
  {
    id: 1550721625,
    name: {
      tw: 'JAMMATES',
    },
    addType: 'auto',
  },
  {
    id: 1582355047,
    name: {
      tr: 'Hacker Başlangıç',
    },
    addType: 'auto',
  },
  {
    id: 1610305853,
    name: {
      tw: 'SunOnTrack: Sun Path & Shadows',
    },
    addType: 'auto',
  },
  {
    id: 1616391834,
    name: {
      tw: '合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏',
    },
    addType: 'auto',
  },
  {
    id: 1668418644,
    name: {
      tw: '大事記帳 - 阻止你花過多的錢',
    },
    addType: 'auto',
  },
  {
    id: 6477756843,
    name: {
      hk: 'Final Girl Companion',
    },
    addType: 'auto',
  },
  {
    id: 6698876690,
    name: {
      tw: 'WristTube+ Player for YouTube',
    },
    addType: 'auto',
  },
  {
    id: 6742457882,
    name: {
      tw: 'Deco: Wallpaper Creator',
    },
    addType: 'auto',
  },
  {
    id: 6471914901,
    name: {
      tr: 'Lux: AdBlock + PiP for YouTube',
    },
    addType: 'auto',
  },
  {
    id: 300132735,
    name: {
      hk: '專業萬年曆 - 十三行作品',
    },
    addType: 'auto',
  },
  {
    id: 430234732,
    name: {
      us: 'Site Audit Pro',
    },
    addType: 'auto',
  },
  {
    id: 602990197,
    name: {
      mo: 'METAL SLUG X',
    },
    addType: 'auto',
  },
  {
    id: 898697688,
    name: {
      hk: '五十音輕鬆學：聯想記憶',
    },
    addType: 'auto',
  },
  {
    id: 1304822713,
    name: {
      mo: '無盡坦克大戰 - 八位元單機王者 完美模擬穿越舊經典電視手遊',
    },
    addType: 'auto',
  },
  {
    id: 1400579543,
    name: {
      us: 'imo video calls and chat HD',
    },
    addType: 'auto',
  },
  {
    id: 1435461053,
    name: {
      tr: 'This Is the Police',
    },
    addType: 'auto',
  },
  {
    id: 1471323296,
    name: {
      hk: '籃球熱潮物語',
    },
    addType: 'auto',
  },
  {
    id: 1472184189,
    name: {
      hk: 'The White Door',
      tw: 'The White Door',
    },
    addType: 'auto',
  },
  {
    id: 1478611992,
    name: {
      tr: 'Farming Simulator 20',
    },
    addType: 'auto',
  },
  {
    id: 1498550832,
    name: {
      us: 'ASCCP Management Guidelines',
    },
    addType: 'auto',
  },
  {
    id: 6739975257,
    name: {
      hk: '樂橋',
    },
    addType: 'auto',
  },
  {
    id: 6670190133,
    name: {
      hk: '哆啦A夢的銅鑼燒店物語',
    },
    addType: 'auto',
  },
  {
    id: 6744862281,
    name: {
      mo: 'iPlayer - Offline Music  Pro',
    },
    addType: 'auto',
  },
  {
    id: 6473001577,
    name: {
      tr: 'Aerofly FS Global',
    },
    addType: 'auto',
  },
  {
    id: 327963391,
    name: {
      us: 'Pedi STAT',
    },
    addType: 'auto',
  },
  {
    id: 398463868,
    name: {
      mo: '詰将棋',
    },
    addType: 'auto',
  },
  {
    id: 419606496,
    name: {
      hk: 'Baby Shusher Sleep Miracle App',
    },
    addType: 'auto',
  },
  {
    id: 435871950,
    name: {
      us: 'HappyCow - Vegan Food Near You',
    },
    addType: 'auto',
  },
  {
    id: 459189186,
    name: {
      tr: 'Machinarium',
    },
    addType: 'auto',
  },
  {
    id: 580008932,
    name: {
      mo: 'Real Badminton',
    },
    addType: 'auto',
  },
  {
    id: 1253855339,
    name: {
      tw: 'Rusty Lake Paradise',
    },
    addType: 'auto',
  },
  {
    id: 1330055286,
    name: {
      mo: '比手划脚 - 你比我猜合家欢猜词工具',
    },
    addType: 'auto',
  },
  {
    id: 1453117329,
    name: {
      mo: 'Yume Nikki',
    },
    addType: 'auto',
  },
  {
    id: 1456547302,
    name: {
      hk: 'A Dance of Fire and Ice',
    },
    addType: 'auto',
  },
  {
    id: 1457316711,
    name: {
      tr: 'DRAW CHILLY',
    },
    addType: 'auto',
  },
  {
    id: 1481181827,
    name: {
      tr: 'Aces of the Luftwaffe Squadron',
    },
    addType: 'auto',
  },
  {
    id: 1505174740,
    name: {
      hk: 'VFUN - 你的興趣社區',
    },
    addType: 'auto',
  },
  {
    id: 1517281147,
    name: {
      hk: '行星小時',
    },
    addType: 'auto',
  },
  {
    id: 1530149693,
    name: {
      cn: '心岛日记-难过的人不孤独',
    },
    addType: 'auto',
  },
  {
    id: 1548281314,
    name: {
      mo: '倉頡打字2V',
    },
    addType: 'auto',
  },
  {
    id: 1607511516,
    name: {
      tr: 'Construction Simulator 4',
    },
    addType: 'auto',
  },
  {
    id: 1612615618,
    name: {
      tw: '腕上txt小说阅读器',
    },
    addType: 'auto',
  },
  {
    id: 1617390109,
    name: {
      hk: '我们的大航海',
    },
    addType: 'auto',
  },
  {
    id: 1621065119,
    name: {
      hk: '逆轉裁判123成步堂精選集',
    },
    addType: 'auto',
  },
  {
    id: 1626320298,
    name: {
      cn: '极速变色龙',
    },
    addType: 'auto',
  },
  {
    id: 6738272916,
    name: {
      hk: '全球電視 - 國際電視直播',
    },
    addType: 'auto',
  },
  {
    id: 6446178861,
    name: {
      hk: 'PlayNav - 影片內無廣告！',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 363385252,
    name: {
      tr: 'DTMFdec',
    },
    addType: 'auto',
  },
  {
    id: 430270438,
    name: {
      tw: 'Astro Gold',
    },
    addType: 'auto',
  },
  {
    id: 679454835,
    name: {
      hk: 'Rarevision VHS - Retro 80s Cam',
    },
    addType: 'auto',
  },
  {
    id: 911201894,
    name: {
      tw: 'DRAGON QUEST',
    },
    addType: 'auto',
  },
  {
    id: 921954809,
    name: {
      us: 'Craft The World-Pocket Edition',
    },
    addType: 'auto',
  },
  {
    id: 1093859891,
    name: {
      tw: 'djembeföla!',
    },
    addType: 'auto',
  },
  {
    id: 1232097854,
    name: {
      tw: '棒球學院物語',
    },
    addType: 'auto',
  },
  {
    id: 1261834568,
    name: {
      tr: 'Shadow Fight 2 Special Edition',
    },
    addType: 'auto',
  },
  {
    id: 1555459868,
    name: {
      hk: 'Dawncaster: Deckbuilding RPG',
    },
    addType: 'auto',
  },
  {
    id: 1563121109,
    name: {
      hk: 'Shattered Pixel Dungeon',
    },
    addType: 'auto',
  },
  {
    id: 6744629398,
    name: {
      cn: '汉界',
    },
    addType: 'auto',
  },
  {
    id: 6738784151,
    name: {
      hk: 'A Little to the Left: Stars',
    },
    addType: 'auto',
  },
  {
    id: 6470642337,
    name: {
      tw: '來自星塵',
    },
    addType: 'auto',
  },
  {
    id: 6483862844,
    name: {
      tw: '光遇樂隊',
    },
    addType: 'auto',
  },
  {
    id: 314192799,
    name: {
      tr: 'Acrobits Softphone',
    },
    addType: 'auto',
  },
  {
    id: 466388978,
    name: {
      tr: 'My Contacts Backup Pro',
    },
    addType: 'auto',
  },
  {
    id: 512142109,
    name: {
      tr: 'Max Payne Mobile',
    },
    addType: 'auto',
  },
  {
    id: 904737816,
    name: {
      hk: '王國保衛戰：起源 Kingdom Rush Origins',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 952625011,
    name: {
      hk: '每日精選-國家地理每日精選',
    },
    addType: 'auto',
  },
  {
    id: 958202096,
    name: {
      tr: 'Dukan Diet Classic',
    },
    addType: 'auto',
  },
  {
    id: 1085978097,
    name: {
      mo: 'Pythonista 3',
      tr: 'Pythonista 3',
    },
    addType: 'auto',
  },
  {
    id: 1148321705,
    name: {
      tr: 'Bully: Anniversary Edition',
    },
    addType: 'auto',
  },
  {
    id: 1286255182,
    name: {
      tw: 'Filmlike Camera',
    },
    addType: 'auto',
  },
  {
    id: 1449584007,
    name: {
      tw: 'Koala Sampler',
    },
    addType: 'auto',
  },
  {
    id: 1523025509,
    name: {
      hk: 'PANTHEON - Official',
    },
    addType: 'auto',
  },
  {
    id: 1536419933,
    name: {
      hk: 'Break Pile - Brick Breaker',
    },
    addType: 'auto',
  },
  {
    id: 1574175808,
    name: {
      tr: 'Specimen Zero - Horror',
    },
    addType: 'auto',
  },
  {
    id: 1622935612,
    name: {
      hk: 'DYSMANTLE',
    },
    addType: 'auto',
  },
  {
    id: 1633879571,
    name: {
      tr: 'Poppy Playtime Chapter 2',
    },
    addType: 'auto',
  },
  {
    id: 6504841512,
    name: {
      hk: 'Halls of Torment: Premium',
    },
    addType: 'auto',
  },
  {
    id: 6476902290,
    name: {
      hk: 'Handy Guitar Lab for MS-70CDR+',
    },
    addType: 'auto',
  },
  {
    id: 6479512734,
    name: {
      tw: 'NARUTO: Ultimate Ninja STORM',
    },
    addType: 'auto',
  },
  {
    id: 6740051873,
    name: {
      tr: 'Classic Number Games for Watch',
    },
    addType: 'auto',
  },
  {
    id: 6444109272,
    name: {
      tr: 'Kübaj - Hacim Hesaplama',
    },
    addType: 'auto',
  },
  {
    id: 318639200,
    name: {
      hk: 'Crush the Castle',
    },
    addType: 'auto',
  },
  {
    id: 325915322,
    name: {
      hk: 'BatteryFull + (Alarm)',
    },
    addType: 'auto',
  },
  {
    id: 365729342,
    name: {
      hk: 'RacquetTune - String Tension',
    },
    addType: 'auto',
  },
  {
    id: 414469628,
    name: {
      tr: 'Face & Body Photo editor',
    },
    addType: 'auto',
  },
  {
    id: 459313476,
    name: {
      tr: 'Tenuto',
    },
    addType: 'auto',
  },
  {
    id: 478126577,
    name: {
      mo: 'Merriam-Webster Dictionary+',
    },
    addType: 'auto',
  },
  {
    id: 493493802,
    name: {
      hk: 'RhymeZone',
    },
    addType: 'auto',
  },
  {
    id: 555612465,
    name: {
      tw: '存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro',
    },
    addType: 'auto',
  },
  {
    id: 564730202,
    name: {
      hk: 'Money Manager (Remove Ads)',
    },
    addType: 'auto',
  },
  {
    id: 582584117,
    name: {
      tr: 'Solocator - GPS Field Camera',
    },
    addType: 'auto',
  },
  {
    id: 633600716,
    name: {
      hk: '432 Player',
    },
    addType: 'auto',
  },
  {
    id: 683353582,
    name: {
      hk: 'Hong Kong Taxi Cards',
    },
    addType: 'auto',
  },
  {
    id: 777310222,
    name: {
      hk: 'GoodReader PDF Editor & Viewer',
    },
    addType: 'auto',
  },
  {
    id: 887877435,
    name: {
      hk: 'f8 镜头大师',
    },
    addType: 'auto',
  },
  {
    id: 908905093,
    name: {
      cn: 'Lumy - 太阳追踪器与黄金时刻',
    },
    addType: 'auto',
  },
  {
    id: 961339405,
    name: {
      tw: '監獄人生 RPG',
    },
    addType: 'auto',
  },
  {
    id: 994157520,
    name: {
      tr: '1942 Pacific Front Premium',
    },
    addType: 'auto',
  },
  {
    id: 1048509287,
    name: {
      hk: '龍紀冒險棋',
    },
    addType: 'auto',
  },
  {
    id: 1087099916,
    name: {
      hk: '鉛筆素描 高清版',
    },
    addType: 'auto',
  },
  {
    id: 1107320261,
    name: {
      hk: 'Splitter Critters',
    },
    addType: 'auto',
  },
  {
    id: 1241909999,
    name: {
      tw: 'WorkOutDoors',
    },
    addType: 'auto',
  },
  {
    id: 1293681293,
    name: {
      us: 'Pocket Build',
    },
    addType: 'auto',
  },
  {
    id: 1330717186,
    name: {
      us: 'The Golf Tracer',
    },
    addType: 'auto',
  },
  {
    id: 1357651989,
    name: {
      hk: 'Tick Tock: A Tale for Two',
    },
    addType: 'auto',
  },
  {
    id: 1385258906,
    name: {
      tw: 'Mindustry',
    },
    addType: 'auto',
  },
  {
    id: 1402080820,
    name: {
      tw: 'This War of Mine: Stories',
    },
    addType: 'auto',
  },
  {
    id: 1439262206,
    name: {
      hk: 'Root Board Game',
    },
    addType: 'auto',
  },
  {
    id: 1450194251,
    name: {
      tr: 'Weight Loss in 28 Days',
    },
    addType: 'auto',
  },
  {
    id: 1477229754,
    name: {
      tr: "Papa's Cheeseria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1514329124,
    name: {
      tw: 'Rusted Warfare - RTS',
    },
    addType: 'auto',
  },
  {
    id: 1553055273,
    name: {
      tr: 'Chairgun Elite Ballistic Tool',
    },
    addType: 'auto',
  },
  {
    id: 1573220858,
    name: {
      hk: '環球酒店大亨',
    },
    addType: 'auto',
  },
  {
    id: 1580509302,
    name: {
      hk: '伊格利亞戰記',
    },
    addType: 'auto',
  },
  {
    id: 1614771445,
    name: {
      hk: 'Rotaeno - 旋轉音律',
    },
    addType: 'auto',
  },
  {
    id: 6742396803,
    name: {
      cn: 'DaDaDaDa - 空气枪',
    },
    addType: 'auto',
  },
  {
    id: 6740943002,
    name: {
      cn: 'BaMai',
    },
    addType: 'auto',
  },
  {
    id: 6743459503,
    name: {
      hk: '逐鹿',
    },
    addType: 'auto',
  },
  {
    id: 6480251529,
    name: {
      hk: '體育集換卡製作專業版',
    },
    addType: 'auto',
  },
  {
    id: 6739179322,
    name: {
      hk: 'WristShorts for YouTube',
    },
    addType: 'auto',
  },
  {
    id: 6744837914,
    name: {
      tw: '塊塊愛消除-手錶遊戲經典快樂休閒益智',
    },
    addType: 'auto',
  },
  {
    id: 6502623166,
    name: {
      tw: '金武江湖',
    },
    addType: 'auto',
  },
  {
    id: 6468033830,
    name: {
      tw: '憶我: 一個性格測試遊戲',
    },
    addType: 'auto',
  },
  {
    id: 6738138603,
    name: {
      tw: '偶像之路终极版UltimateEdition',
    },
    addType: 'auto',
  },
  {
    id: 6739185971,
    name: {
      us: 'Earnifi: Rent, Early Pay, Cash',
    },
    addType: 'auto',
  },
  {
    id: 284972998,
    name: {
      mo: 'SoundHound∞ 音樂識別搜尋器及播放器',
    },
    addType: 'auto',
  },
  {
    id: 288419283,
    name: {
      us: 'RadarScope',
    },
    addType: 'auto',
  },
  {
    id: 292421271,
    name: {
      mo: 'Fieldrunners',
    },
    addType: 'auto',
  },
  {
    id: 294934058,
    name: {
      us: 'HotSchedules',
    },
    addType: 'auto',
  },
  {
    id: 298206806,
    name: {
      us: 'iReal Pro',
    },
    addType: 'auto',
  },
  {
    id: 299117180,
    name: {
      tr: 'Airports',
    },
    addType: 'auto',
  },
  {
    id: 301387274,
    name: {
      us: 'Pocket God',
    },
    addType: 'auto',
  },
  {
    id: 305557780,
    name: {
      mo: 'iSwap Faces Pro',
    },
    addType: 'auto',
  },
  {
    id: 306938028,
    name: {
      mo: 'Photo Sticker',
    },
    addType: 'auto',
  },
  {
    id: 307132353,
    name: {
      mo: "Sally's Spa",
    },
    addType: 'auto',
  },
  {
    id: 307727765,
    name: {
      mo: 'Doodle Jump',
    },
    addType: 'auto',
  },
  {
    id: 307751675,
    name: {
      mo: 'PopStar!-stars crush',
    },
    addType: 'auto',
  },
  {
    id: 315021242,
    name: {
      mo: 'Unblock Me Premium',
    },
    addType: 'auto',
  },
  {
    id: 315514944,
    name: {
      mo: '实用家常菜谱大全',
    },
    addType: 'auto',
  },
  {
    id: 317809458,
    name: {
      hk: 'LiveATC Air Radio',
      mo: 'LiveATC Air Radio',
      us: 'LiveATC Air Radio',
    },
    addType: 'auto',
  },
  {
    id: 323048611,
    name: {
      mo: 'Dr.eye譯典通',
    },
    addType: 'auto',
  },
  {
    id: 329670577,
    name: {
      mo: 'Camera+傳統',
    },
    addType: 'auto',
  },
  {
    id: 332424440,
    name: {
      mo: 'MILLIONAIRE TYCOON™',
    },
    addType: 'auto',
  },
  {
    id: 333212604,
    name: {
      tw: '蒙恬名片王Mobile',
    },
    addType: 'auto',
  },
  {
    id: 335029050,
    name: {
      us: 'Catan Classic',
    },
    addType: 'auto',
  },
  {
    id: 335709058,
    name: {
      us: 'Stylebook',
    },
    addType: 'auto',
  },
  {
    id: 335862325,
    name: {
      tr: 'Blower',
    },
    addType: 'auto',
  },
  {
    id: 342115564,
    name: {
      mo: 'Hipstamatic 相機',
    },
    addType: 'auto',
  },
  {
    id: 344784375,
    name: {
      mo: 'OPlayer - video player',
    },
    addType: 'auto',
  },
  {
    id: 351850196,
    name: {
      mo: '紫白飛星萬年曆 - 十三行作品',
    },
    addType: 'auto',
  },
  {
    id: 352247139,
    name: {
      us: 'Calorie Counter PRO MyNetDiary',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 355281169,
    name: {
      mo: '遠流字典通 (豪華版)',
    },
    addType: 'auto',
  },
  {
    id: 357404131,
    name: {
      hk: '慢快門相機 (Slow Shutter Cam)',
      mo: '慢快門相機 (Slow Shutter Cam)',
      tw: '慢快門相機 (Slow Shutter Cam)',
    },
    addType: 'auto',
  },
  {
    id: 357421934,
    name: {
      us: 'PeakFinder',
    },
    addType: 'auto',
  },
  {
    id: 367327563,
    name: {
      mo: 'Secret Photo+Folder',
    },
    addType: 'auto',
  },
  {
    id: 373493387,
    name: {
      hk: 'AnkiMobile Flashcards',
      tw: 'AnkiMobile Flashcards',
      us: 'AnkiMobile Flashcards',
      tr: 'AnkiMobile Flashcards',
    },
    addType: 'auto',
  },
  {
    id: 388130466,
    name: {
      mo: 'iSlash',
    },
    addType: 'auto',
  },
  {
    id: 388857410,
    name: {
      us: 'Blackjack & Card Counting Pro',
    },
    addType: 'auto',
  },
  {
    id: 392531952,
    name: {
      mo: '倉頡解碼',
    },
    addType: 'auto',
  },
  {
    id: 395680819,
    name: {
      mo: 'AVPlayer',
    },
    addType: 'auto',
  },
  {
    id: 396085661,
    name: {
      mo: '遊戲發展國++',
    },
    addType: 'auto',
  },
  {
    id: 402012828,
    name: {
      mo: 'iSafe Pro',
    },
    addType: 'auto',
  },
  {
    id: 402656416,
    name: {
      mo: 'IP Cam Viewer Pro',
    },
    addType: 'auto',
  },
  {
    id: 403684733,
    name: {
      tr: 'Badoo Premium',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 404990064,
    name: {
      us: 'SkyView®',
    },
    addType: 'auto',
  },
  {
    id: 405835358,
    name: {
      us: 'MilGPS',
      tr: 'MilGPS',
    },
    addType: 'auto',
  },
  {
    id: 406239138,
    name: {
      mo: 'Puffin Cloud Browser',
    },
    addType: 'auto',
  },
  {
    id: 406541444,
    name: {
      mo: '8mm Vintage Camera',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 407933070,
    name: {
      mo: '懷舊日曆 - 十三行作品',
    },
    addType: 'auto',
  },
  {
    id: 408697793,
    name: {
      mo: 'King of Opera',
    },
    addType: 'auto',
  },
  {
    id: 408854559,
    name: {
      mo: '溫泉物語',
    },
    addType: 'auto',
  },
  {
    id: 417817520,
    name: {
      mo: 'Tiny Wings',
      us: 'Tiny Wings',
    },
    addType: 'auto',
  },
  {
    id: 424403441,
    name: {
      mo: 'Pimple Eraser',
    },
    addType: 'auto',
  },
  {
    id: 430163724,
    name: {
      hk: '智能風水羅庚-專業版',
    },
    addType: 'auto',
  },
  {
    id: 432850619,
    name: {
      us: 'FL Studio Mobile',
    },
    addType: 'auto',
  },
  {
    id: 433596395,
    name: {
      mo: 'ZOOKEEPER DX',
    },
    addType: 'auto',
  },
  {
    id: 449735650,
    name: {
      hk: '鱷魚小頑皮愛洗澡',
      mo: '鱷魚小頑皮愛洗澡',
      us: "Where's My Water?",
    },
    addType: 'auto',
  },
  {
    id: 450542233,
    name: {
      mo: 'Cut the Rope: Experiments GOLD',
    },
    addType: 'auto',
  },
  {
    id: 452990487,
    name: {
      mo: 'RushPlayer',
    },
    addType: 'auto',
  },
  {
    id: 454086751,
    name: {
      us: 'Flick Home Run !',
    },
    addType: 'auto',
  },
  {
    id: 469343554,
    name: {
      mo: '洛克人X',
    },
    addType: 'auto',
  },
  {
    id: 479516143,
    name: {
      hk: 'Minecraft',
      mo: 'Minecraft',
      tw: 'Minecraft',
      us: 'Minecraft: Dream it, Build it!',
      tr: 'Minecraft: Dream it, Build it!',
    },
    addType: 'auto',
  },
  {
    id: 479662730,
    name: {
      mo: 'Grand Theft Auto III',
    },
    addType: 'auto',
  },
  {
    id: 482303584,
    name: {
      us: 'PDG PROmote 2025+',
    },
    addType: 'auto',
  },
  {
    id: 485246824,
    name: {
      mo: 'Cytus',
      tw: 'Cytus',
    },
    addType: 'auto',
  },
  {
    id: 491231653,
    name: {
      mo: '大富翁 4 Fun',
      tw: '大富翁 4 Fun',
    },
    addType: 'auto',
  },
  {
    id: 497716362,
    name: {
      us: 'TonalEnergy Tuner & Metronome',
    },
    addType: 'auto',
  },
  {
    id: 498732510,
    name: {
      tr: 'Blitzer.de PRO',
    },
    addType: 'auto',
  },
  {
    id: 501695715,
    name: {
      mo: '兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞',
    },
    addType: 'auto',
  },
  {
    id: 503190232,
    name: {
      tw: 'Bridge Constructor',
      tr: 'Bridge Constructor',
    },
    addType: 'auto',
  },
  {
    id: 504176984,
    name: {
      hk: '論八字(實用)',
      tw: '論八字(實用)',
    },
    addType: 'auto',
  },
  {
    id: 504300412,
    name: {
      hk: '歐陸戰爭3',
    },
    addType: 'auto',
  },
  {
    id: 505367096,
    name: {
      tw: '世界迷霧',
    },
    addType: 'auto',
  },
  {
    id: 519411018,
    name: {
      cn: 'iGuzheng - 爱古筝',
    },
    addType: 'auto',
  },
  {
    id: 520231936,
    name: {
      tr: 'eDrawings',
    },
    addType: 'auto',
  },
  {
    id: 524387892,
    name: {
      us: 'The Official KSIOlajidebt Soundboard - KSI Sounds',
    },
    addType: 'auto',
  },
  {
    id: 525818839,
    name: {
      hk: 'Plague Inc. (瘟疫公司)',
      mo: 'Plague Inc. (瘟疫公司)',
      tw: 'Plague Inc. (瘟疫公司)',
      us: 'Plague Inc.',
      tr: 'Plague Inc.',
    },
    addType: 'auto',
  },
  {
    id: 530425820,
    name: {
      cn: '东方财富领先版-财经资讯&股票开户',
    },
    addType: 'auto',
  },
  {
    id: 540925500,
    name: {
      tr: 'Need for Speed™ Most Wanted',
    },
    addType: 'auto',
  },
  {
    id: 549105915,
    name: {
      us: 'True Skate',
      tr: 'True Skate',
    },
    addType: 'auto',
  },
  {
    id: 549432607,
    name: {
      tr: 'Townsmen Premium',
    },
    addType: 'auto',
  },
  {
    id: 554937499,
    name: {
      tr: 'Earn to Die',
    },
    addType: 'auto',
  },
  {
    id: 555642577,
    name: {
      tw: '晉碩萬年曆',
    },
    addType: 'auto',
  },
  {
    id: 563718995,
    name: {
      us: 'Bloons TD 5',
    },
    addType: 'auto',
  },
  {
    id: 575154654,
    name: {
      us: 'Pou',
      tr: 'Pou',
    },
    addType: 'auto',
  },
  {
    id: 577628510,
    name: {
      tr: 'TeamSpeak 3',
    },
    addType: 'auto',
  },
  {
    id: 578448682,
    name: {
      tr: 'Grand Theft Auto: Vice City',
    },
    addType: 'auto',
  },
  {
    id: 586149216,
    name: {
      us: 'Monash FODMAP Diet',
    },
    addType: 'auto',
  },
  {
    id: 594117733,
    name: {
      mo: '仙劍奇俠傳1 DOS懷舊版',
    },
    addType: 'auto',
  },
  {
    id: 600626116,
    name: {
      us: "Papa's Burgeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 623592465,
    name: {
      hk: 'Heads Up!',
      us: 'Heads Up!',
    },
    addType: 'auto',
  },
  {
    id: 625334537,
    name: {
      hk: 'Geometry Dash',
      mo: 'Geometry Dash',
      us: 'Geometry Dash',
      tr: 'Geometry Dash',
    },
    addType: 'auto',
  },
  {
    id: 634235735,
    name: {
      tr: 'Duet Game',
    },
    addType: 'auto',
  },
  {
    id: 640364616,
    name: {
      us: 'Terraria',
      tr: 'Terraria',
    },
    addType: 'auto',
  },
  {
    id: 646256209,
    name: {
      mo: '照片橡皮擦',
    },
    addType: 'auto',
  },
  {
    id: 657016140,
    name: {
      mo: 'Good Maps - Google地圖,3D,離線,全球街景,公交,地鐵,導航',
    },
    addType: 'auto',
  },
  {
    id: 679044544,
    name: {
      mo: '理財幫手 AndroMoney',
      tw: '理財幫手 AndroMoney',
    },
    addType: 'auto',
  },
  {
    id: 687236545,
    name: {
      tw: '劍橋高階英漢雙解詞典：英語— 繁體中文',
    },
    addType: 'auto',
  },
  {
    id: 697885605,
    name: {
      tw: '常春藤基礎英文字彙',
    },
    addType: 'auto',
  },
  {
    id: 700637744,
    name: {
      mo: 'DEEMO',
    },
    addType: 'auto',
  },
  {
    id: 736683061,
    name: {
      tr: 'A Dark Room',
    },
    addType: 'auto',
  },
  {
    id: 741990930,
    name: {
      us: 'Walkout Song DJ',
    },
    addType: 'auto',
  },
  {
    id: 763692274,
    name: {
      hk: 'Grand Theft Auto: San Andreas',
      mo: 'Grand Theft Auto: San Andreas',
      tw: 'Grand Theft Auto: San Andreas',
      us: 'Grand Theft Auto: San Andreas',
      tr: 'Grand Theft Auto: San Andreas',
    },
    addType: 'auto',
  },
  {
    id: 784373321,
    name: {
      mo: '軒轅劍參外傳 天之痕',
    },
    addType: 'auto',
  },
  {
    id: 807317212,
    name: {
      cn: '每日精选-天文地理人文照片之美&壁纸',
    },
    addType: 'auto',
  },
  {
    id: 824305459,
    name: {
      us: "Papa's Freezeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 829581836,
    name: {
      hk: 'Driving Theory Test 4 in 1 Kit',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 837860959,
    name: {
      hk: '迷你地鐵',
      mo: '迷你地鐵',
      us: 'Mini Metro',
    },
    addType: 'auto',
  },
  {
    id: 860809977,
    name: {
      hk: 'Fongo World Edition',
    },
    addType: 'auto',
  },
  {
    id: 870322730,
    name: {
      mo: 'Implosion 聚爆',
    },
    addType: 'auto',
  },
  {
    id: 890791581,
    name: {
      tw: '樂客導航王全3D Pro',
    },
    addType: 'auto',
  },
  {
    id: 891194610,
    name: {
      hk: '戰車撞殭屍2 (Earn to Die 2)',
      us: 'Earn to Die 2',
      tr: 'Earn to Die 2',
    },
    addType: 'auto',
  },
  {
    id: 901738789,
    name: {
      cn: '地下城堡: 炼金术师的魔幻之旅',
    },
    addType: 'auto',
  },
  {
    id: 904278510,
    name: {
      hk: '刺客任務：狙擊 (Hitman Sniper)',
      mo: '刺客任務：狙擊 (Hitman Sniper)',
      tr: 'Hitman Sniper',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 912536422,
    name: {
      us: "Five Nights at Freddy's",
      tr: "Five Nights at Freddy's",
    },
    addType: 'auto',
  },
  {
    id: 916976066,
    name: {
      tw: '短語鍵盤',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 918609651,
    name: {
      mo: 'Money Pro: 個人財務',
      tw: 'Money Pro: 個人財務',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 924695435,
    name: {
      mo: 'Pixelmator',
    },
    addType: 'auto',
  },
  {
    id: 925494667,
    name: {
      us: "Papa's Pizzeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 926015463,
    name: {
      tw: 'Timestamp Photo and Video pro',
    },
    addType: 'auto',
  },
  {
    id: 926076608,
    name: {
      mo: '秒速記帳 1SecMoney',
    },
    addType: 'auto',
  },
  {
    id: 927098908,
    name: {
      us: 'Pro Camera by Moment',
    },
    addType: 'auto',
  },
  {
    id: 932389062,
    name: {
      tw: '永不言棄！！ - 不可能的節奏跳躍 & 黑色小球翻滾',
    },
    addType: 'auto',
  },
  {
    id: 935216956,
    name: {
      us: 'Papers, Please',
    },
    addType: 'auto',
  },
  {
    id: 935528099,
    name: {
      cn: '同步音律',
    },
    addType: 'auto',
  },
  {
    id: 941143328,
    name: {
      us: "Five Nights at Freddy's 2",
      tr: "Five Nights at Freddy's 2",
    },
    addType: 'auto',
  },
  {
    id: 945322477,
    name: {
      mo: '新仙劍奇俠傳(正版單機)',
    },
    addType: 'auto',
  },
  {
    id: 946477821,
    name: {
      hk: 'Evoland',
    },
    addType: 'auto',
  },
  {
    id: 948944368,
    name: {
      hk: 'iBrowser- Full Screen Browser',
    },
    addType: 'auto',
  },
  {
    id: 954724812,
    name: {
      cn: '同花顺至尊版-股票软件',
    },
    addType: 'auto',
  },
  {
    id: 955687901,
    name: {
      mo: 'kirakira+',
    },
    addType: 'auto',
  },
  {
    id: 961932335,
    name: {
      mo: 'Analog Tokyo',
    },
    addType: 'auto',
  },
  {
    id: 963034692,
    name: {
      us: 'Streaks',
    },
    addType: 'auto',
  },
  {
    id: 964708975,
    name: {
      cn: '古诗文网',
    },
    addType: 'auto',
  },
  {
    id: 973482987,
    name: {
      us: "Five Nights at Freddy's 3",
    },
    addType: 'auto',
  },
  {
    id: 975683986,
    name: {
      tw: 'Door Kickers',
    },
    addType: 'auto',
  },
  {
    id: 982175678,
    name: {
      hk: 'This War of Mine',
      mo: 'This War of Mine',
      tw: 'This War of Mine',
      tr: 'This War of Mine',
    },
    addType: 'auto',
  },
  {
    id: 982227026,
    name: {
      cn: '聚爆Implosion',
    },
    addType: 'auto',
  },
  {
    id: 992047786,
    name: {
      mo: 'Analog Wedding',
    },
    addType: 'auto',
  },
  {
    id: 998437582,
    name: {
      cn: '法语背单词 - 法语单词记忆工具',
    },
    addType: 'auto',
  },
  {
    id: 1010311475,
    name: {
      us: 'QuickBend: Conduit Bending',
    },
    addType: 'auto',
  },
  {
    id: 1012298403,
    name: {
      hk: "Don't Starve: Pocket Edition",
      mo: "Don't Starve: Pocket Edition",
    },
    addType: 'auto',
  },
  {
    id: 1023146677,
    name: {
      us: "Five Nights at Freddy's 4",
    },
    addType: 'auto',
  },
  {
    id: 1028950091,
    name: {
      cn: '贪婪洞窟：猿神降临',
      mo: '貪婪洞窟：猿神降临',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1029932207,
    name: {
      us: "Papa's Cupcakeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1035219553,
    name: {
      mo: 'Analog London',
    },
    addType: 'auto',
  },
  {
    id: 1035219562,
    name: {
      mo: 'Analog Paris',
    },
    addType: 'auto',
  },
  {
    id: 1065360416,
    name: {
      us: 'BimmerLink for BMW and MINI',
    },
    addType: 'auto',
  },
  {
    id: 1065599938,
    name: {
      mo: 'HARVEST MOON: Seeds Of Memories',
    },
    addType: 'auto',
  },
  {
    id: 1077639630,
    name: {
      cn: '说剑The Swords',
    },
    addType: 'auto',
  },
  {
    id: 1093131935,
    name: {
      us: 'Incredibox',
      tr: 'Incredibox',
    },
    addType: 'auto',
  },
  {
    id: 1094038347,
    name: {
      hk: 'Only You Are Here',
      tw: 'Only You Are Here',
    },
    addType: 'auto',
  },
  {
    id: 1095903651,
    name: {
      cn: '【约吗】-约会附近的人，同城陌生人交友陪玩聊天软件',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1099088440,
    name: {
      cn: '火柴人联盟2',
    },
    addType: 'auto',
  },
  {
    id: 1108479411,
    name: {
      hk: 'Driving Zone 2: Car Racing',
    },
    addType: 'auto',
  },
  {
    id: 1110646984,
    name: {
      cn: '地下城堡2: 黑暗觉醒',
    },
    addType: 'auto',
  },
  {
    id: 1111420122,
    name: {
      us: 'Hear My Baby Heartbeat Monitor',
    },
    addType: 'auto',
  },
  {
    id: 1112429079,
    name: {
      cn: '物种起源',
    },
    addType: 'auto',
  },
  {
    id: 1113736426,
    name: {
      mo: 'RollerCoaster Tycoon® Classic',
      us: 'RollerCoaster Tycoon® Classic',
    },
    addType: 'auto',
  },
  {
    id: 1118115766,
    name: {
      hk: 'Bloons TD 6',
      us: 'Bloons TD 6',
      tr: 'Bloons TD 6',
    },
    addType: 'auto',
  },
  {
    id: 1121484538,
    name: {
      hk: '箱庭鐵道物語',
    },
    addType: 'auto',
  },
  {
    id: 1128464707,
    name: {
      hk: 'Death Road to Canada',
    },
    addType: 'auto',
  },
  {
    id: 1129429340,
    name: {
      hk: 'RaceChrono Pro',
    },
    addType: 'auto',
  },
  {
    id: 1134805859,
    name: {
      cn: '迷失岛',
    },
    addType: 'auto',
  },
  {
    id: 1137257203,
    name: {
      tr: 'Muslim Prayer Times Pro, Adhan',
    },
    addType: 'auto',
  },
  {
    id: 1142016085,
    name: {
      tw: 'Rusty Lake: Roots',
    },
    addType: 'auto',
  },
  {
    id: 1160608318,
    name: {
      mo: 'Air Traffic Control - Live ATC',
    },
    addType: 'auto',
  },
  {
    id: 1166143148,
    name: {
      hk: '暴力街區2',
    },
    addType: 'auto',
  },
  {
    id: 1169282239,
    name: {
      cn: '活下去-丧尸题材末日生存冒险游戏',
    },
    addType: 'auto',
  },
  {
    id: 1184204602,
    name: {
      cn: 'ProMovie + 专业摄像机',
    },
    addType: 'auto',
  },
  {
    id: 1187265767,
    name: {
      mo: 'Monument Valley 2',
    },
    addType: 'auto',
  },
  {
    id: 1189781891,
    name: {
      us: "Five Nights at Freddy's: SL",
    },
    addType: 'auto',
  },
  {
    id: 1195035357,
    name: {
      tw: '地牢防禦 : 勇士的侵入',
    },
    addType: 'auto',
  },
  {
    id: 1217732174,
    name: {
      cn: 'TA - 一对一聊天，遇见对的人',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1237692856,
    name: {
      mo: 'Gudak Cam',
    },
    addType: 'auto',
  },
  {
    id: 1239299402,
    name: {
      hk: 'Street Fighter IV CE',
    },
    addType: 'auto',
  },
  {
    id: 1241383990,
    name: {
      hk: 'Baby Sensory Signbook',
    },
    addType: 'auto',
  },
  {
    id: 1247397901,
    name: {
      hk: '奧德瑪',
    },
    addType: 'auto',
  },
  {
    id: 1248033433,
    name: {
      hk: '王國保衛戰：復仇',
    },
    addType: 'auto',
  },
  {
    id: 1249864455,
    name: {
      tr: 'Peace, Death!',
    },
    addType: 'auto',
  },
  {
    id: 1250144822,
    name: {
      mo: '玄空飛星羅經 - 專業風水羅盤',
    },
    addType: 'auto',
  },
  {
    id: 1259067036,
    name: {
      mo: '發現動物公園',
    },
    addType: 'auto',
  },
  {
    id: 1262474519,
    name: {
      tw: 'Monoposto',
      tr: 'Monoposto',
    },
    addType: 'auto',
  },
  {
    id: 1264608487,
    name: {
      tr: 'Driving Zone: Germany Pro',
    },
    addType: 'auto',
  },
  {
    id: 1290687550,
    name: {
      tw: 'Cytus II',
    },
    addType: 'auto',
  },
  {
    id: 1291429551,
    name: {
      tr: '60 Parsecs!',
    },
    addType: 'auto',
  },
  {
    id: 1291730054,
    name: {
      us: 'Lowriders Comeback 2: Cruising',
    },
    addType: 'auto',
  },
  {
    id: 1296085645,
    name: {
      tw: 'aRacerSmart',
    },
    addType: 'auto',
  },
  {
    id: 1298544927,
    name: {
      tr: 'My Child Lebensborn',
    },
    addType: 'auto',
  },
  {
    id: 1303222868,
    name: {
      us: 'Paprika Recipe Manager 3',
    },
    addType: 'auto',
  },
  {
    id: 1312534841,
    name: {
      cn: 'MyText Widget',
    },
    addType: 'auto',
  },
  {
    id: 1329434099,
    name: {
      cn: '乱斗堂3',
    },
    addType: 'auto',
  },
  {
    id: 1330314351,
    name: {
      tr: 'Videdit - Handy Video Editor',
    },
    addType: 'auto',
  },
  {
    id: 1336793944,
    name: {
      tw: '勇敢的哈克',
    },
    addType: 'auto',
  },
  {
    id: 1339516665,
    name: {
      cn: '奥特曼传奇英雄VIP版',
    },
    addType: 'auto',
  },
  {
    id: 1351652600,
    name: {
      tr: 'Boolean!',
    },
    addType: 'auto',
  },
  {
    id: 1359107338,
    name: {
      us: 'Catch the Easter Bunny',
    },
    addType: 'auto',
  },
  {
    id: 1359652100,
    name: {
      hk: 'DungeonMaker',
      mo: 'DungeonMaker',
    },
    addType: 'auto',
  },
  {
    id: 1391339323,
    name: {
      tr: 'Zaptiye',
    },
    addType: 'auto',
  },
  {
    id: 1392608717,
    name: {
      us: "Papa's Scooperia To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1406710800,
    name: {
      hk: 'Stardew Valley',
      mo: 'Stardew Valley',
      tw: 'Stardew Valley',
      us: 'Stardew Valley',
      tr: 'Stardew Valley',
    },
    addType: 'auto',
  },
  {
    id: 1435004182,
    name: {
      tr: 'Hermes: KAYIP',
    },
    addType: 'auto',
  },
  {
    id: 1436429074,
    name: {
      mo: 'FILCA - SLR Film Camera',
      tw: 'FILCA - SLR Film Camera',
      tr: 'FILCA - SLR Film Camera',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1437096541,
    name: {
      hk: 'Rush Rally 3',
    },
    addType: 'auto',
  },
  {
    id: 1438245901,
    name: {
      us: "Papa's Pancakeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1439187947,
    name: {
      hk: 'Rebel Inc. (反叛公司)',
      mo: 'Rebel Inc. (反叛公司)',
      tw: 'Rebel Inc. (反叛公司)',
      us: 'Rebel Inc.',
      tr: 'Rebel Inc.',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1439881811,
    name: {
      us: 'RadarOmega',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1441969889,
    name: {
      tr: 'Z.O.N.A Shadow of Lemansk',
    },
    addType: 'auto',
  },
  {
    id: 1442776789,
    name: {
      tw: '槍與香蕉 - Pirates Outlaws',
    },
    addType: 'auto',
  },
  {
    id: 1444761746,
    name: {
      hk: 'RFS - Real Flight Simulator',
      tw: 'RFS - Real Flight Simulator',
      us: 'RFS - Real Flight Simulator',
      tr: 'RFS - Real Flight Simulator',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1449893235,
    name: {
      tr: 'Earthquake Network',
    },
    addType: 'auto',
  },
  {
    id: 1450064785,
    name: {
      tw: '山林日誌',
    },
    addType: 'auto',
  },
  {
    id: 1450144092,
    name: {
      hk: '三國志天下布武 - 單機戰棋策略遊戲',
      mo: '三國志天下布武 - 單機戰棋策略遊戲',
      tw: '三國志天下布武 - 單機戰棋策略遊戲',
    },
    addType: 'auto',
  },
  {
    id: 1451873044,
    name: {
      us: "Papa's Wingeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1453838527,
    name: {
      tr: 'Age of History II',
    },
    addType: 'auto',
  },
  {
    id: 1455781522,
    name: {
      us: 'FNaF 6: Pizzeria Simulator',
    },
    addType: 'auto',
  },
  {
    id: 1459749978,
    name: {
      cn: 'List背单词',
    },
    addType: 'auto',
  },
  {
    id: 1461751938,
    name: {
      us: 'Purple Place - Classic Games',
      tr: 'Purple Place - Classic Games',
    },
    addType: 'auto',
  },
  {
    id: 1464850921,
    name: {
      cn: '每日英语阅读',
    },
    addType: 'auto',
  },
  {
    id: 1474716211,
    name: {
      us: '60 Seconds! Reatomized',
      tr: '60 Seconds! Reatomized',
    },
    addType: 'auto',
  },
  {
    id: 1477203766,
    name: {
      tr: 'Total War: MEDIEVAL II',
    },
    addType: 'auto',
  },
  {
    id: 1477854253,
    name: {
      hk: '大家的日本語 初級 第二版',
    },
    addType: 'auto',
  },
  {
    id: 1477966166,
    name: {
      mo: 'MONOPOLY: The Board Game',
      us: 'MONOPOLY: The Board Game',
      tr: 'MONOPOLY: The Board Game',
    },
    addType: 'auto',
  },
  {
    id: 1477991646,
    name: {
      hk: '王國：兩個皇冠',
    },
    addType: 'auto',
  },
  {
    id: 1479608271,
    name: {
      us: 'Arcadia - Watch Games',
    },
    addType: 'auto',
  },
  {
    id: 1480844881,
    name: {
      tr: 'Mini Chess on Watch',
    },
    addType: 'auto',
  },
  {
    id: 1481006495,
    name: {
      tr: 'Countdown App',
    },
    addType: 'auto',
  },
  {
    id: 1482339363,
    name: {
      us: 'iScore5 APHG',
    },
    addType: 'auto',
  },
  {
    id: 1484622401,
    name: {
      tw: 'Religion inc.上帝模擬器',
      tr: 'Religion inc. God Simulator',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1485875855,
    name: {
      tr: 'Başkanlar',
    },
    addType: 'auto',
  },
  {
    id: 1491530147,
    name: {
      tw: 'Slay the Spire',
      us: 'Slay the Spire',
    },
    addType: 'auto',
  },
  {
    id: 1497120981,
    name: {
      tr: 'LUCH: Photo Effects & Presets',
    },
    addType: 'auto',
  },
  {
    id: 1499849161,
    name: {
      us: 'Ultimate Custom Night',
    },
    addType: 'auto',
  },
  {
    id: 1500098830,
    name: {
      tr: 'Video Master Pro',
    },
    addType: 'auto',
  },
  {
    id: 1503486239,
    name: {
      tw: '大富翁10',
    },
    addType: 'auto',
  },
  {
    id: 1504662191,
    name: {
      tr: 'Monarşi',
    },
    addType: 'auto',
  },
  {
    id: 1504760106,
    name: {
      tr: 'Eco inc.',
    },
    addType: 'auto',
  },
  {
    id: 1504952058,
    name: {
      us: "Papa's Sushiria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1505636751,
    name: {
      us: 'TeleGuard',
      tr: 'TeleGuard',
    },
    addType: 'auto',
  },
  {
    id: 1509344823,
    name: {
      tr: 'Ezberle',
    },
    addType: 'auto',
  },
  {
    id: 1512751689,
    name: {
      us: 'The Game of Life 2',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1515215584,
    name: {
      cn: 'RakugakiAR',
      hk: 'RakugakiAR',
      mo: 'RakugakiAR',
    },
    addType: 'auto',
  },
  {
    id: 1515382132,
    name: {
      mo: 'Axis & Allies 1942 Online',
    },
    addType: 'auto',
  },
  {
    id: 1516531425,
    name: {
      tr: 'JSPS APP',
    },
    addType: 'auto',
  },
  {
    id: 1517349382,
    name: {
      cn: '群雄时代 - 单机三国战棋策略游戏',
    },
    addType: 'auto',
  },
  {
    id: 1518841947,
    name: {
      tr: 'ATSU',
    },
    addType: 'auto',
  },
  {
    id: 1519386476,
    name: {
      tw: 'MiniGames - 觀看遊戲街機',
    },
    addType: 'auto',
  },
  {
    id: 1523633394,
    name: {
      tr: 'SpongeBob SquarePants: BfBB',
    },
    addType: 'auto',
  },
  {
    id: 1525735418,
    name: {
      tr: 'Mesih',
    },
    addType: 'auto',
  },
  {
    id: 1528199331,
    name: {
      hk: '崩潰大陸 2',
      tw: '崩潰大陸 2',
      us: 'Crashlands 2',
    },
    addType: 'auto',
  },
  {
    id: 1531462734,
    name: {
      cn: '桂林字牌手机版',
    },
    addType: 'auto',
  },
  {
    id: 1531654315,
    name: {
      hk: '画師牆紙',
      tw: '画師牆紙',
    },
    addType: 'auto',
  },
  {
    id: 1536762482,
    name: {
      us: 'Spirit Talker ®',
    },
    addType: 'auto',
  },
  {
    id: 1544190466,
    name: {
      cn: '避难所：生存',
    },
    addType: 'auto',
  },
  {
    id: 1544412558,
    name: {
      cn: '航海奇闻',
    },
    addType: 'auto',
  },
  {
    id: 1544722749,
    name: {
      cn: '拣爱',
    },
    addType: 'auto',
  },
  {
    id: 1548185534,
    name: {
      tr: 'Musical Maze',
    },
    addType: 'auto',
  },
  {
    id: 1551207253,
    name: {
      us: "Papa's Mocharia To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1551263854,
    name: {
      cn: '打金传奇:官方正版 搬砖回收永不关服超爆加强版，传奇王者霸业',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1555857229,
    name: {
      cn: '2048 for watch',
    },
    addType: 'auto',
  },
  {
    id: 1556671822,
    name: {
      us: 'Merge Watermelon for watch',
    },
    addType: 'auto',
  },
  {
    id: 1559869450,
    name: {
      mo: '新槍彈辯駁V3 大家的自相殘殺新學期 Anniversary',
    },
    addType: 'auto',
  },
  {
    id: 1562560561,
    name: {
      tr: 'Tevekkülvakti Pro',
    },
    addType: 'auto',
  },
  {
    id: 1563932741,
    name: {
      tr: 'Taboo - Official Party Game',
    },
    addType: 'auto',
  },
  {
    id: 1569963107,
    name: {
      tr: 'Aylık Distopya',
    },
    addType: 'auto',
  },
  {
    id: 1576329230,
    name: {
      cn: '传奇1.76官方正版盛大首发(重置版)今日开服送点卡迷失传说',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1576763082,
    name: {
      cn: '女帝的日常',
    },
    addType: 'auto',
  },
  {
    id: 1577392165,
    name: {
      hk: 'Monster Train',
    },
    addType: 'auto',
  },
  {
    id: 1578203914,
    name: {
      cn: '电子宠物机',
    },
    addType: 'auto',
  },
  {
    id: 1581640677,
    name: {
      tr: 'Football Referee Simulator',
    },
    addType: 'auto',
  },
  {
    id: 1587674627,
    name: {
      tw: '愛琳詩篇:少女養成系 休閒放置二次元卡牌手遊',
    },
    addType: 'auto',
  },
  {
    id: 1590622755,
    name: {
      us: 'µBrowser: Watch Web Browser',
    },
    addType: 'auto',
  },
  {
    id: 1591627945,
    name: {
      us: "Papa's Cluckeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1592505377,
    name: {
      tr: 'Wreckfest',
    },
    addType: 'auto',
  },
  {
    id: 1592660274,
    name: {
      tw: '天際牧場物語-模擬經營自己的牧場',
    },
    addType: 'auto',
  },
  {
    id: 1595739885,
    name: {
      tr: 'Shadow Hunter: Special Edition',
    },
    addType: 'auto',
  },
  {
    id: 1596736236,
    name: {
      mo: 'Rovio Classics: Angry Birds',
      tw: 'Rovio Classics: Angry Birds',
      us: "Red's First Flight",
      tr: "Red's First Flight",
    },
    addType: 'auto',
  },
  {
    id: 1600307023,
    name: {
      tr: "Dealer's Life 2",
    },
    addType: 'auto',
  },
  {
    id: 1603421749,
    name: {
      cn: '传奇高爆99999% 攻速9999倍PC同款三职业:战无不胜',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1603553413,
    name: {
      cn: '手表浏览器',
    },
    addType: 'auto',
  },
  {
    id: 1606405358,
    name: {
      tr: "Dealer's Life",
    },
    addType: 'auto',
  },
  {
    id: 1609910024,
    name: {
      hk: '泰拉瑞亞',
      mo: '泰拉瑞亞',
      tw: '泰拉瑞亞',
    },
    addType: 'auto',
  },
  {
    id: 1610947489,
    name: {
      tr: 'Poppy Playtime Chapter 1',
    },
    addType: 'auto',
  },
  {
    id: 1612952507,
    name: {
      hk: 'AeroPads - Pads & Soundscapes',
    },
    addType: 'auto',
  },
  {
    id: 1614200925,
    name: {
      cn: '部落与弯刀',
    },
    addType: 'auto',
  },
  {
    id: 1622869542,
    name: {
      hk: 'Kingdom Rush 5: Alliance TD',
      tw: 'Kingdom Rush 5: Alliance TD',
      us: 'Kingdom Rush 5: Alliance TD',
      tr: 'Kingdom Rush 5: Alliance TD',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1624326561,
    name: {
      mo: '真武三国  英雄集结',
    },
    addType: 'auto',
  },
  {
    id: 1631859420,
    name: {
      hk: 'After Inc.',
      tw: 'After Inc.',
      us: 'After Inc.',
    },
    addType: 'auto',
  },
  {
    id: 1631867592,
    name: {
      mo: '珍寶機場物語',
    },
    addType: 'auto',
  },
  {
    id: 1633243177,
    name: {
      us: 'Ableton Note',
    },
    addType: 'auto',
  },
  {
    id: 1633253544,
    name: {
      cn: '消除星星 - 益智的星星消消乐经典手表游戏',
      hk: '消除星星-益智的星星消消樂經典手錶消除遊戲',
    },
    addType: 'auto',
  },
  {
    id: 1636342413,
    name: {
      tr: 'SSH Term Pro',
    },
    addType: 'auto',
  },
  {
    id: 1642601792,
    name: {
      tw: 'The Past Within',
      tr: 'The Past Within',
    },
    addType: 'auto',
  },
  {
    id: 1642733080,
    name: {
      hk: 'DungeonSquad',
      mo: 'DungeonSquad',
      tw: 'DungeonSquad',
    },
    addType: 'auto',
  },
  {
    id: 1643199620,
    name: {
      hk: 'Any Text · Widgets',
    },
    addType: 'auto',
  },
  {
    id: 1659271912,
    name: {
      hk: '東京電車２',
    },
    addType: 'auto',
  },
  {
    id: 1659316190,
    name: {
      cn: '钢铁战队(R)',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1662217862,
    name: {
      tw: 'Wipr 2',
      us: 'Wipr 2',
    },
    addType: 'auto',
  },
  {
    id: 1665706687,
    name: {
      tw: 'Underground Blossom',
    },
    addType: 'auto',
  },
  {
    id: 1668755109,
    name: {
      hk: 'Brotato:Premium',
      tw: 'Brotato:Premium',
    },
    addType: 'auto',
  },
  {
    id: 1669877091,
    name: {
      cn: '光明记忆：无限',
    },
    addType: 'auto',
  },
  {
    id: 1671505630,
    name: {
      cn: '迷失岛外传南瓜镇',
    },
    addType: 'auto',
  },
  {
    id: 6737795387,
    name: {
      cn: '鬼谷八荒',
    },
    addType: 'auto',
  },
  {
    id: 6448477521,
    name: {
      cn: 'BiuBiuBiu - 空气枪',
      hk: 'PewPewPew - Fingergun',
    },
    addType: 'auto',
  },
  {
    id: 6472380172,
    name: {
      cn: 'Kino - Pro Video Camera',
      hk: 'Kino - Pro Video Camera',
      tw: 'Kino - Pro Video Camera',
    },
    addType: 'auto',
  },
  {
    id: 6443786927,
    name: {
      cn: '全面憨憨战争模拟器',
    },
    addType: 'auto',
  },
  {
    id: 6502489827,
    name: {
      cn: '大侠立志传',
    },
    addType: 'auto',
  },
  {
    id: 6742129099,
    name: {
      cn: '群英打三国-超休闲国风放置卡牌巅峰巨作',
    },
    addType: 'auto',
  },
  {
    id: 6443916065,
    name: {
      cn: 'WiFi万能钥匙专业版-无线热点密码安全万能wi-fi管家',
    },
    addType: 'auto',
  },
  {
    id: 6737512463,
    name: {
      cn: '怦然心动的瞬间-轻科幻真人互动恋爱影游',
    },
    addType: 'auto',
  },
  {
    id: 6462190343,
    name: {
      cn: '药王谷女修修炼手札',
      tw: '药王谷女修修炼手札',
    },
    addType: 'auto',
  },
  {
    id: 6444782083,
    name: {
      cn: '王国保卫战4',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 6450148077,
    name: {
      cn: '干中学！偷偷',
    },
    addType: 'auto',
  },
  {
    id: 6449766387,
    name: {
      cn: '合成大西瓜 : 专为手表设计的合成类休闲解压小游戏',
    },
    addType: 'auto',
  },
  {
    id: 6740246950,
    name: {
      cn: '花皮 - 无面具素颜社区/解压/释放/正念',
    },
    addType: 'auto',
  },
  {
    id: 6550914957,
    name: {
      cn: '打造世界-经典沙盒建造',
    },
    addType: 'auto',
  },
  {
    id: 6742537442,
    name: {
      cn: '努力活着 - 自由人生重开模拟器',
    },
    addType: 'auto',
  },
  {
    id: 6741474933,
    name: {
      cn: 'Berryfilm',
      hk: 'Berryfilm',
      tw: 'Berryfilm',
    },
    addType: 'auto',
  },
  {
    id: 6742221550,
    name: {
      cn: '魔卡棋旅',
    },
    addType: 'auto',
  },
  {
    id: 6738767315,
    name: {
      cn: '便利店开业日记',
    },
    addType: 'auto',
  },
  {
    id: 6737987084,
    name: {
      cn: '小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者',
    },
    addType: 'auto',
  },
  {
    id: 6446607609,
    name: {
      cn: '佛系传奇:君王天下',
    },
    addType: 'auto',
  },
  {
    id: 6499512726,
    name: {
      cn: '浮岛冒险',
    },
    addType: 'auto',
  },
  {
    id: 6483210281,
    name: {
      cn: '生物原型',
    },
    addType: 'auto',
  },
  {
    id: 6738767322,
    name: {
      cn: '森丘露营地',
    },
    addType: 'auto',
  },
  {
    id: 6737434454,
    name: {
      cn: '暗夜地城 - 单机暗黑刷装备挂机游戏',
    },
    addType: 'auto',
  },
  {
    id: 6743117370,
    name: {
      cn: 'Clash X Pro : Network Analyzer',
    },
    addType: 'auto',
  },
  {
    id: 6740705851,
    name: {
      cn: '手表变身器：时空驱动器 - iWatch发声器',
    },
    addType: 'auto',
  },
  {
    id: 6743487416,
    name: {
      cn: '黄金矿工 for Watch - 经典复刻',
    },
    addType: 'auto',
  },
  {
    id: 6478843819,
    name: {
      hk: '家園、異星與獵人',
      tw: '家園、異星與獵人',
    },
    addType: 'auto',
  },
  {
    id: 6502453075,
    name: {
      hk: 'Balatro',
      mo: 'Balatro',
      tw: 'Balatro',
      us: 'Balatro',
      tr: 'Balatro',
    },
    addType: 'auto',
  },
  {
    id: 6670749900,
    name: {
      hk: '再戰江湖之傲視蒼龍',
      tw: '再戰江湖之傲視蒼龍',
    },
    addType: 'auto',
  },
  {
    id: 6711347049,
    name: {
      hk: '大俠立志傳',
      tw: '大俠立志傳',
    },
    addType: 'auto',
  },
  {
    id: 6547834967,
    name: {
      hk: '動物森友會 口袋露營廣場 集合版',
      tw: '動物森友會 口袋露營廣場 集合版',
      us: 'Animal Crossing: Pocket Camp C',
    },
    addType: 'auto',
  },
  {
    id: 6452276410,
    name: {
      hk: '遊戲開發者：全能製作人',
      tw: '遊戲開發者：全能製作人',
    },
    addType: 'auto',
  },
  {
    id: 6471479898,
    name: {
      hk: 'Cat Calendar：日曆 & 行事曆 & 時間管理',
    },
    addType: 'auto',
  },
  {
    id: 6738371720,
    name: {
      hk: '銀盤滑冰場物語',
      tw: '銀盤滑冰場物語',
    },
    addType: 'auto',
  },
  {
    id: 6456751953,
    name: {
      hk: 'ChatTan - AI Bot',
    },
    addType: 'auto',
  },
  {
    id: 6469114836,
    name: {
      hk: 'スイカゲーム-Aladdin X',
      tw: 'スイカゲーム-Aladdin X',
    },
    addType: 'auto',
  },
  {
    id: 6743648252,
    name: {
      hk: '終焉車站',
      mo: '終焉車站',
    },
    addType: 'auto',
  },
  {
    id: 6738636631,
    name: {
      hk: '烈焰同盟',
      tw: '烈焰同盟',
    },
    addType: 'auto',
  },
  {
    id: 6480082872,
    name: {
      hk: 'Dumbify',
    },
    addType: 'auto',
  },
  {
    id: 6738769251,
    name: {
      hk: 'METRO QUESTER - Hack & Slash',
    },
    addType: 'auto',
  },
  {
    id: 6621207768,
    name: {
      hk: '聖劍同盟',
      tw: '聖劍同盟',
    },
    addType: 'auto',
  },
  {
    id: 6743420230,
    name: {
      hk: '夢魘騎士團',
      tw: '夢魘騎士團',
    },
    addType: 'auto',
  },
  {
    id: 6736642117,
    name: {
      hk: '櫻花最前線 - 2025年預測',
      tw: '櫻花最前線 - 2025年預測',
    },
    addType: 'auto',
  },
  {
    id: 6498879077,
    name: {
      hk: '平安古都物語',
    },
    addType: 'auto',
  },
  {
    id: 6738636602,
    name: {
      hk: '光輝同盟',
      tw: '光輝同盟',
    },
    addType: 'auto',
  },
  {
    id: 6504323939,
    name: {
      hk: '勇者鬥惡龍X　覺醒的五種族　OFFLINE',
    },
    addType: 'auto',
  },
  {
    id: 6505046490,
    name: {
      hk: '摔角擂臺物語',
    },
    addType: 'auto',
  },
  {
    id: 6443723657,
    name: {
      hk: 'filmhwa (필름화) - 화민 필터',
      tw: 'filmhwa (필름화) - 화민 필터',
      us: "filmhwa - @hwa.min's filter",
    },
    addType: 'auto',
  },
  {
    id: 6743342476,
    name: {
      hk: '中药方剂速查 -【专业版】中医药查询宝典',
    },
    addType: 'auto',
  },
  {
    id: 6742773178,
    name: {
      hk: '经络穴位养生 - 中医穴位自我按摩治愈',
    },
    addType: 'auto',
  },
  {
    id: 6476663854,
    name: {
      hk: 'Solo Mini Golf',
      tw: 'Solo Mini Golf',
    },
    addType: 'auto',
  },
  {
    id: 6670469064,
    name: {
      hk: '8號出口',
      tw: '8號出口',
    },
    addType: 'auto',
  },
  {
    id: 6447508479,
    name: {
      hk: '暖雪',
    },
    addType: 'auto',
  },
  {
    id: 6470958985,
    name: {
      hk: '完美的一天 - 無限流劇情向解謎游戲',
    },
    addType: 'auto',
  },
  {
    id: 6445875391,
    name: {
      hk: '叶分贝-噪音分贝检测',
    },
    addType: 'auto',
  },
  {
    id: 6443923265,
    name: {
      mo: 'GSE SMART IPTV PRO',
      tr: 'GSE SMART IPTV PRO',
    },
    addType: 'auto',
  },
  {
    id: 6739839815,
    name: {
      tw: 'RogueVana',
    },
    addType: 'auto',
  },
  {
    id: 6505052301,
    name: {
      tw: '碧海蒼雲錄',
    },
    addType: 'auto',
  },
  {
    id: 6642649684,
    name: {
      tw: '韭菜投資公司2',
    },
    addType: 'auto',
  },
  {
    id: 6738784092,
    name: {
      tw: 'A Little to the Left: Drawers',
    },
    addType: 'auto',
  },
  {
    id: 6450724928,
    name: {
      tw: '租戶賭財運',
    },
    addType: 'auto',
  },
  {
    id: 6740814979,
    name: {
      tw: 'Follow the meaning',
    },
    addType: 'auto',
  },
  {
    id: 6456886656,
    name: {
      tw: 'Layla',
    },
    addType: 'auto',
  },
  {
    id: 6498623389,
    name: {
      tw: 'Folium',
      us: 'Folium',
    },
    addType: 'auto',
  },
  {
    id: 6738342400,
    name: {
      tw: 'Tampermonkey',
    },
    addType: 'auto',
  },
  {
    id: 6744355637,
    name: {
      tw: 'Schedule I Drug Dealer',
      us: 'Schedule I Drug Dealer',
      tr: 'Schedule I Drug Dealer',
    },
    addType: 'auto',
  },
  {
    id: 6476064417,
    name: {
      tw: 'Knight & Dragon III',
    },
    addType: 'auto',
  },
  {
    id: 6463710522,
    name: {
      tw: '勇者的傳奇',
    },
    addType: 'auto',
  },
  {
    id: 6468572535,
    name: {
      tw: '洞窟冒險團物語',
    },
    addType: 'auto',
  },
  {
    id: 6471947612,
    name: {
      tw: '召喚騎士團',
    },
    addType: 'auto',
  },
  {
    id: 6480501528,
    name: {
      tw: 'Cat Todo - 備忘錄 & 待辦事項 & 記事本',
    },
    addType: 'auto',
  },
  {
    id: 6714479204,
    name: {
      us: 'Lowriders Comeback: Boulevard',
    },
    addType: 'auto',
  },
  {
    id: 6740349666,
    name: {
      us: "Backyard Baseball '97",
    },
    addType: 'auto',
  },
  {
    id: 6473097811,
    name: {
      us: 'Doodle Baseball Game',
    },
    addType: 'auto',
  },
  {
    id: 6463616555,
    name: {
      us: 'Ticket to Ride® The Board Game',
    },
    addType: 'auto',
  },
  {
    id: 6477835115,
    name: {
      us: "Papa's Paleteria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 6449003064,
    name: {
      us: 'Goblin Tools',
    },
    addType: 'auto',
  },
  {
    id: 6670199903,
    name: {
      tr: 'StreetPro Racing',
    },
    addType: 'auto',
  },
  {
    id: 6505058041,
    name: {
      tr: 'QUAKELINE',
    },
    addType: 'auto',
  },
  {
    id: 6744445187,
    name: {
      tr: 'The Platform - Survive',
    },
    addType: 'auto',
  },
  {
    id: 6469419567,
    name: {
      tr: 'Overwinter Survival',
    },
    addType: 'auto',
  },
  {
    id: 6444400410,
    name: {
      tr: 'Farming Simulator 23 Mobile',
    },
    addType: 'auto',
  },
  {
    id: 6474616013,
    name: {
      tr: 'Trump Is Back',
    },
    addType: 'auto',
  },
  {
    id: 6471594918,
    name: {
      tr: 'Just a Simple Image Converter',
    },
    addType: 'auto',
  },
  {
    id: 6686394372,
    name: {
      tr: 'Age of History 3',
    },
    addType: 'auto',
  },
  {
    id: 6740471827,
    name: {
      tr: 'Classic Maze Game for Watch',
    },
    addType: 'auto',
    allowNotification: false,
  }
]

export const part2AppConfig: AppConfig[] = [
  { id: 1481853033, name: 'Strongbox Pro' },
  { id: 1581140954, name: ['Noir – Dark Mode for Safari', { cn: 'Noir - 为Safari添加深色模式' }] },
  { id: 1592917505, name: ['Noir – Dark Mode for Safari', { cn: 'Noir – 为Safari添加深色模式' }] },
  { id: 1591620171, name: ['Stay for Safari', { cn: 'Stay for Safari - 浏览器伴侣' }] },
  { id: 1438243180, name: `Dark Reader for Safari` },
  { id: 625206080,  name: `Tomb Raider` },
  { id: 1108032375, name: `Rise of the Tomb Raider™` },
  { id: 1439569401, name: `Shadow of the Tomb Raider` },
  { id: 6459738231, name: `Lies of P` },
  { id: 1441532941, name: ['神界：原罪2', { us: 'Divinity: Original Sin 2' }] },
  { id: 6449748961, name: `DEATH STRANDING DIRECTOR'S CUT` },
  { id: 6499559693, name: 'iStat Menus 7' },
  { id: 6475002485, name: 'Reeder.' },
  { id: 904280696,  name: 'Things 3' },
  { id: 1208145167, name: 'Picsew', },
  { id: 1444636541, name: 'Photomator' },
  { id: 1461652639, name: ['TCP UDP Ping Socket 网络 调试 工具', { us: 'TCP UDP Debugger' }] },
  { id: 6499198824, name: ['蜂软扫描 - 全能扫描仪', { us: 'ScanGo:Scanner App free of ads' }] },
  { id: 1538124245, name: ['哪里哪里', { us: 'where I put it' }] },
  { id: 6446469093, name: ['口袋时钟 - StandBy待机Widget桌面翻页创意时钟', { us: 'Clock Pocket:standby widget' }] },
  { id: 1175912897, name: ['EverMemo印象便签', { us: 'EverMemo - Fastest Note' }] },
  { id: 6504433140, name: 'LaxtTime' },
  { id: 920133658,  name: ['解剖和生理学', { us: 'Anatomy & Physiology' }] },
  { id: 6463851696, name: ['功德++ : 锁屏，Standby，桌面小组件都可以敲的木鱼', { us: 'Zen++' }] },
  { id: 1358237203, name: '时间胶囊-寄往未来的信' },
  { id: 1316883372, name: '音乐世界赛特斯2' },
  { id: 956086985,  name: ['美元折纸', { us: 'Dollar Bill Origami' }] },
  { id: 1436481293, name: ['迷失岛3宇宙的尘埃', { us: 'ISOLAND 3 Dust of the Universe' }] },
  { id: 1422480068, name: ['Notes Writer Pro: 笔记和 PDF 标注', { us: 'Notes Writer Pro 2024' }] },
  { id: 6443915320, name: '发条日签-好心情制造机' },
  { id: 884153085,  name: 'Remote, Mouse & Keyboard Pro' },
  { id: 1065802380, name: 'Stream Music Player' },
  { id: 1493379610, name: ['时光进度 - 进度管理&待办计划', { us: 'bProgress - Manage Daily Tasks' }] },
  { id: 1255627901, name: ['方便面 - 朋友圈图文排版好帮手', { us: 'Instant Noodles: Original' }] },
  { id: 1449020025, name: '不玩手机-自律习惯养成记' },
  { id: 1576004936, name: ['化学 - 元素周期表 2024', { us: 'Chemistry Periodic Table 2024' }] },
  { id: 827740598,  name: ['小牛计算器(高级版)', { us: 'Xmart Calculator Pro' }] },
  { id: 355460798,  name: 'Inspire Pro' },
  { id: 1595313870, name: ['瓦尔登 - 日程管理，一个就够', { us: 'Walden - Calendar/ToDo/Notes' }] },
  { id: 6449383791, name: ['GIF录制助手-录屏、裁剪、优化、生成一站式便捷体验', { us: 'GIF Recorder-ImproveEfficiency' }] },
  { id: 1587301632, name: ['全能记(录音,备忘,流水)', { us: 'All In One Memo' }] },
  { id: 1464666446, name: ['我的足迹: GPS记录仪', { us: 'MyTracks: GPS Recorder' }] },
  { id: 1665759338, name: '坐在罐子里的人' },
  { id: 953426154,  name: 'Be Focused Pro - Focus Timer' },
  { id: 1238778050, name: '纪念碑谷2' },
  { id: 1020541183, name: ['电影精灵 - 专业视频编辑和电影制作', { us: 'MovieSpirit - Movie Maker Pro' }] },
  { id: 576718804,  name: ['aTimeLogger - 时间记录工具', { us: 'aTimeLogger Time Tracker' }] },
  { id: 670400597,  name: ['梁的挠度', { us: 'Deflection' }] },
  { id: 1400652313, name: '冰钓大师' },
  { id: 1551596643, name: '模拟地铁' },
  { id: 1437479513, name: '逃脱者：困境突围' },
  { id: 1314212521, name: ['PPHub For GitHub - 开发者必备', { us: 'PPHub For GitHub - Developer' }] },
  { id: 1564383045, name: ['算法导论.助手', { us: 'CLRS.Helper' }] },
  { id: 1380582804, name: ['手机帝国', { us: 'Mobile Empire' }] },
  { id: 6466390901, name: '旋转音律 Rotaeno' },
  { id: 1596406400, name: '黄鸭证件照-最美求职考试证照制作神器' },
  { id: 598581396,  name: ['Kingdom Rush Frontiers 塔防史诗冒险', { us: 'Kingdom Rush Frontiers TD' }] },
  { id: 1157863540, name: '泰拉瑞亚', },
  { id: 1630541373, name: ['隐私相册-私密记忆，安心记录，安全保障隐藏秘密PRAM', { us: 'Private Album - PRAM' }] },
  { id: 1512838461, name: ['DayCircle - 倒数', { us: 'DayCircle - Day counter' }] },
  { id: 1400032769, name: 'Card.Note - 多彩卡片笔记' },
  { id: 1159266744, name: '双子 Gemini' },
  { id: 1453808408, name: ['恶果之地', { us: 'Juicy Realm' }] },
  { id: 1458460469, name: '人类跌落梦境' },
  { id: 1481100296, name: 'BreatheIn: Calm Breathing' },
  { id: 1309638846, name: ['Goodak 复古胶片相机 - 拍立得旅行摄影，拍照水印滤镜', { us: 'Vintage Camera - Goodak' }] },
  { id: 1618180398, name: ['照片同步-导出备份相册照片视频', { us: 'PhotoSync-Backup your photos' }] },
  { id: 931188326,  name: ['DayCost', { us: 'Wafari - Watch Browser' }] },
  { id: 6449930220, name: ['手表浏览器 Wafari', { us: 'Wafari - Watch Browser' }] },
  { id: 1391571907, name: ['Fine修图', { us: 'Fine - Photo Edito' }] },
  { id: 6499125531, name: '完蛋！我被美女包围了！' },
  { id: 1485101937, name: 'Juice Watch', allowNotification: false },
  { id: 703265535,  name: ['FocusDots · Focus What Matters', { cn: 'FocusDots · 专注于当下' }] },
  { id: 6479307181, name: ['Ghostly Detector', { cn: '灵体侦测器' }] },
  { id: 1636719674, name: ['锁屏启动 - 万能桌面小组件&灵动岛一键快捷指令手机捷径布局', { us: 'Lock Launcher - Screen Widgets' }] },
  { id: 1543163106, name: '末剑二' },
  { id: 6443812780, name: '我的水世界求生' },
  { id: 1344655035, name: '蜡烛人' },
  { id: 6446614518, name: '画中世界' },
  { id: 1159700098, name: ['去月球-To the Moon', { us: 'To the Moon' }] },
  { id: 1271620263, name: ['艾希 - ICEY', { us: 'ICEY' }] },
  { id: 6476010032, name: '拦截猫-垃圾短信电话拦截' },
  { id: 510249014,  name: ['水平仪 HD', { us: 'Level HD.' }] },
  { id: 904237743,  name: 'Things 3' },
  { id: 1622341132, name: ['iSleeper - 梦话鼾声记录与睡眠监测', { us: 'iSleeper: Sleep Tracker' }] },
  { id: 900833042,  name: 'Fliqlo' },
  { id: 1467880680, name: 'LEDot' },
  { id: 1455055663, name: '皮皮虾专业版' },
  { id: 1595901138, name: ['NES 模拟器', { us: 'Handheld Game - NES Emulator' }] },
  { id: 1163515895, name: '鲨鱼记账本Pro-管家理财必备工具' },
  { id: 754105884,  name: ['NightCap Camera', { cn: 'NightCap相机' }] },
  { id: 1642364007, name: ['海拔指南针', { us: 'Altitude Compass' }] },
  { id: 1522215205, name: '拒之-骚扰电话批量拦截助手' },
  { id: 1484181693, name: '截图超人 - 微商专用的营销助手截图神器' },
  { id: 1117998129, name: ['Human Anatomy Atlas 2025', { cn: '2025人体解剖学图谱' }] },
  { id: 6444824570, name: 'ClashX - 服务监控面板' },
  { id: 469338840,  name: '飞常准Pro-全球航班查询机票酒店预订' },
  { id: 1197275827, name: '金十数据(专业版)-为交易而生' },
  { id: 578665578,  name: ['Threema. The Secure Messenger', { cn: 'Threema。安全的通讯工具' }] },
  { id: 1547418803, name: 'Incredibox - 好玩的音乐盒' },
  { id: 1210251567, name: ['SleepTown', { cn: 'SleepTown 睡眠小镇' }] },
  { id: 1080235640, name: 'CNU - 顶尖视觉精选' },
  { id: 1658579911, name: ['小特钥匙 - 手表隐私蓝牙钥匙', { us: 'XIAOTE Watch key' }] },
  { id: 1152396902, name: '凤凰新闻(专业版)-头条新闻阅读平台' },
  { id: 1633366918, name: 'Instant Lines' },
  { id: 6480159520, name: ['转录大师 - 录音转文字、实时离线转录', { us: 'Whisper Pen - Speech to Text' }] },
  { id: 966489322,  name: '生辰 — 桌面时间小组件' },
  { id: 898876435,  name: ['Planit巧摄专业版：风光摄影计划神器', { us: 'Planit Pro: Photo Planner' }] },
  { id: 1062745479, name: ['HeartWatch: Heart Rate Tracker', { cn: 'HeartWatch: 心脏和活动监测器' }] },
  { id: 6476963352, name: '万能生成器' },
  { id: 1459076631, name: '隐形守护者' },
  { id: 1660014964, name: '飞越13号房' },
  { id: 730712409,  name: ['ProCam - Pro Camera', { cn: 'ProCam - 专业相机' }] },
  { id: 6451239549, name: '全网短剧大全-热门短剧抢先看' },
  { id: 1633865171, name: '獬豸 · 民法典' },
  { id: 1492395549, name: '爱美剧-人人美剧天堂社区' },
  { id: 1661419573, name: 'atvTools' },
  { id: 6479683928, name: 'AMood' },
  { id: 6443798663, name: ['敲木鱼 - 打节拍敲音效解压神器', { us: 'MuYu' }] },
  { id: 373454750,  name: '随手记Pro', allowNotification: false },
  { id: 916366645,  name: 'Procreate Pocket' },
  { id: 1164801111, name: ['AutoSleep Track Sleep on Watch', { cn: 'AutoSleep - 通过手表自动追踪睡眠' }] },
  { id: 1625289361, name: ['空气投篮', { us: 'AirShot - AuditoryAR' }] },
  { id: 1261944766, name: ['Alook浏览器 - 8倍速', { us: 'Alook Browser - 8x Speed' }] },
  { id: 1600873673, name: '炭炭背单词｜四六级考研等英语单词学习' },
  { id: 768160271,  name: '航旅纵横PRO' },
  { id: 1439723850, name: ['时间规划局 - 倒计时与提醒事项', { us: 'Countdown! Reminders and Timer' }] },
  { id: 6447023668, name: '爱韩剧 - 韩剧TV大全' },
  { id: 6468843723, name: 'GTA III – Definitive' },
  { id: 6468845173, name: 'GTA: Vice City – Definitive' },
  { id: 6468845068, name: 'GTA: San Andreas – Definitive' },
  { id: 1631331207, name: 'Hitman: Blood Money — Reprisal' },
  { id: 1598130789, name: 'Company of Heroes Collection' },
  { id: 1085114709, name: 'Parallels Desktop' },
  { id: 6450262949, name: ['Longshot - 截图 & OCR文字识别', { us: 'Longshot - Screenshot & OCR' }]},
  { id: 6451498949, name: 'Stray' },
  { id: 1630403500, name: 'APTV' },
  { id: 1552536109, name: ['PasteNow - 剪贴板工具', { us: 'PasteNow - Instant Clipboard' }] },
  { id: 1558391784, name: 'Fileball' },
  { id: 1548711022, name: ['Barbee - 清理您的菜单栏图标', { us: 'Barbee - Hide Menu Bar Items' }]},
  { id: 1575588022, name: ['MenubarX - 强大的菜单栏浏览器', { us: 'MenubarX - Floating Browser' }]},
  { id: 1630034110, name: 'Bob - 翻译和 OCR 工具' },
  { id: 1009747025, name: ['zFuse - Video Player', { cn: 'zFuse - 影音播放器' }] },
  { id: 1054505347, name: ['zFuse - Media Player', { cn: 'zFuse - 视频播放器' }] },
  { id: 1136220934, name: ['Infuse • Video Player', { cn: 'Infuse - 智能视频播放器' }] },
  { id: 1476649036, name: ['帕斯卡契约', { us: `Pascal's Wager` }] },
  { id: 1635315427, name: '暖雪' },
  { id: 1523446532, name: '重生细胞' },
  { id: 1389752090, name: 'Dead Cells' },
  { id: 1640627334, name: 'Resident Evil Village' }, // Mac
  { id: 6450980545, name: 'Resident Evil Village' }, // iPhone/iPad
  { id: 6462360082, name: 'Resident Evil 4' },
  { id: 1620883955, name: 'Little Nightmares' },
  { id: 1606703078, name: ['枪火重生', { us: 'Gunfire Reborn' }] },
  { id: 1373575045, name: 'The Gardens Between' }, // Mac
  { id: 1371965583, name: 'The Gardens Between' }, // iPhone/iPad
  { id: 6450877530, name: '花园之间' },
  { id: 1601446687, name: 'Streets of Rage 4' },
  { id: 1587860402, name: ['笼中窥梦', { us: 'Moncage' }] },
  { id: 1584313012, name: '笼中窥梦' },
  { id: 1465779286, name: 'GRIS' }, // Mac
  { id: 1445379072, name: 'GRIS' }, // iPhone/iPad
  { id: 1521190840, name: '格莉斯的旅程' },
  { id: 728293409,  name: 'Monument Valley' },
  { id: 1582832845, name: '纪念碑谷' },
  { id: 1644917705, name: ['无处遁形：全网公敌', { us: `Cyber Manhunt` }] },
  { id: 1369179088, name: `Grimvalor` },
  { id: 1669723530, name: `原界之罪` },
  { id: 481629890,  name: `Playdead's LIMBO` }, // Mac
  { id: 656951157,  name: `Playdead's LIMBO` }, // iPhone/iPad
  { id: 886561127,  name: `Playdead's INSIDE` }, // Mac
  { id: 1201642309, name: `Playdead's INSIDE` }, // iPhone/iPad/Apple TV
  { id: 1529448980, name: 'Reeder 5' }, // Mac
  { id: 1529445840, name: 'Reeder 5' }, // iPhone/iPad
  { id: 1596063349, name: 'Stash' },
  { id: 6444029612, name: 'Loon Lite' },
  { id: 1373567447, name: 'Loon' },
  { id: 1442620678, name: 'Surge 5' },
  { id: 1443988620, name: 'Quantumult X' },
  { id: 932747118,  name: 'Shadowrocket' },
  { id: 1642682818, name: '熊猫吃短信2 - 垃圾短信拦截' },
  { id: 1319191852, name: '熊猫吃短信 - 垃圾短信过滤' },
  { id: 1067198688, name: '彩云天气pro' },
  { id: 6737513240, name: 'Hitman: Absolution' },
  { id: 1705456062, name: 'Ultimate Board Game Collection: MONOPOLY, Cluedo, The Game of Life 2, & BATTLESHIP' },
  { id: 1040227414, name: 'Exploding Kittens®' },
  { id: 1659622164, name: ['VidHub - 高清影片视频播放器，快速播放云盘网盘', { us: 'VidHub -Video Library & Player' }], ...denyNotification },
  { id: 388624839,  name: ['扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别', { us: 'CamScanner + | OCR Scanner' }], ...denyNotification },
  { id: 866450515,  name: ['Forest: Focus for Productivity', { cn: 'Forest 专注森林 - 番茄钟学习计时器' }], ...denyNotification },
  { id: 1361473095, name: ['Muse Dash 喵斯快跑', { us: 'Muse Dash' }], ...denyNotification },
  { id: 488674899,  name: ['RAIN RADAR °- sky weather NOAA', { cn: '雨雷達-實時天氣圖。 亞洲和中國。°' }], ...denyNotification },
  { id: 818394449,  name: ['时间轴-全球历史', { us: 'Timeline - World history' }], ...denyNotification },
  { id: 1453318714, name: ['Vostok — 创建美丽快拍页面', { us: 'Vostok — Story Make' }], ...denyNotification },
  { id: 456637671,  name: ['安全监控照片+视频Pro', { us: 'Safety Photo+Video Pro' }], ...denyNotification },
  { id: 431033044,  name: ['Phone Drive - 云储存管理和文件共享', { us: 'Phone Drive: File Storage Sync' }], ...denyNotification },
  { id: 1527841661, name: ['沙盒星球', { us: 'Sandbox Planet' }], ...denyNotification },
  { id: 505904421,  name: 'AirDisk Pro', ...denyNotification },
  { id: 460661291,  name: ['安全笔记+ Pro', { us: 'Safety Note+ Pro' }], ...denyNotification },
  { id: 533055404,  name: ['夜星 (Night Stars)', { us: 'Night Stars' }], ...denyNotification },
  { id: 1610668825, name: ['FyTube - 没有广告的 YouTube', { us: 'FyTube - YouTube Without Ads' }], ...denyNotification },
  { id: 1473785373, name: ['钱迹记账-无广告随手记账本', { us: '钱迹-存钱记账小能手' }], ...denyNotification },
  { id: 1444383602, name: 'Goodnotes 6', ...denyNotification },
  { id: 1055511498, name: 'Day One', ...denyNotification },
  { id: 1198176727, name: 'Controller for HomeKit', ...denyNotification }
]

/**
 * 合并多个分组的应用
 */
export const appConfig: AppConfig[] = [
  ...latestAppConfig, // 最新
  ...part1AppConfig, // 分组1
  ...part2AppConfig, // 分组2
]
