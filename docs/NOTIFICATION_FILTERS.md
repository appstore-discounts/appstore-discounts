# 通知筛选 / Notification filters

## 中文

运行项目的人可以编辑仓库根目录的 `notifications.config.json`，控制此实例向 Telegram 和钉钉发送哪些优惠。配置影响机器人或频道的全部接收者，不是每个订阅者的个人偏好。

默认配置为 `{}`，保持原有通知范围。以下示例只发送中国大陆、美国地区中指定三个 App 的优惠：

```json
{
  "regions": ["cn", "us"],
  "appIds": [6737783441, 1549615527, 6757261839]
}
```

| 字段      | 含义                                                                                   |
| --------- | -------------------------------------------------------------------------------------- |
| `regions` | 可选的国家或地区白名单：`cn`、`hk`、`mo`、`tw`、`us`、`tr`、`pt`                       |
| `appIds`  | 可选的 App ID 白名单，使用正整数；可从 `apps.json` 或 App Store 链接中的 `id数字` 获取 |

- 未填写某字段或设为 `[]`：没有筛选条件，该维度不限。例如 `{"regions":["cn"],"appIds":[]}` 发送中国大陆所有已追踪 App 的优惠。
- 填具体国家或 App：缩小通知范围。
- 两项都有值：同时满足国家和 App 条件才发送。
- 配置错误：报错并在抓取前停止，不能悄悄按“不限”处理。
- 筛选仅作用于消息推送，不改变抓取、价格历史、RSS、网站数据或自动应用管理。`appIds` 中的 App 必须已在 `apps.json` 收录且 `allowNotification` 不为 `false`；未追踪的 App 需要先加入追踪列表。
- 提交配置后，在下一次工作流执行时生效。不要将机器人凭证写入此文件，继续使用环境变量或仓库 Secrets。

该文件独立于自动更新的 `apps.json`，不会被应用列表更新覆盖。验证筛选逻辑可以运行 `npm run test:notifications`，不会访问 App Store 或发送消息。

### 配置错误提示

配置错误使用普通 `Error` 报错，提示为英文。中文含义如下：

| 情况 / 中文含义                                           | 英文提示                                       |
| --------------------------------------------------------- | ---------------------------------------------- |
| 格式错误：JSON 格式错误、最外层不是对象，或字段类型不正确 | Invalid notification configuration format.     |
| 字段名不合法：存在 `regions`、`appIds` 以外的字段         | Invalid notification configuration field name. |
| regions 未收录：国家代码不支持                            | Unsupported notification region.               |
| AppID 未收录：App ID 未追踪，包括已禁止追踪的 App         | App ID is not tracked.                         |

## English

Edit `notifications.config.json` at the repository root to select the discounts this instance sends to Telegram and DingTalk. The setting applies to everyone receiving its bot or channel messages, rather than individual subscribers.

The default `{}` preserves existing notifications. The example above selects three App IDs in mainland China and the United States.

- `regions`: optional allowlist of `cn`, `hk`, `mo`, `tw`, `us`, `tr`, and `pt`.
- `appIds`: optional allowlist of positive integer App IDs, available in `apps.json` or the `id` portion of an App Store URL.
- An omitted field or an empty array imposes no restriction on that dimension. A nonempty list narrows the notification scope. Two nonempty lists select their intersection.
- Configuration is read at the start of every run. Invalid configuration fails before scraping rather than silently removing restrictions.
- Scraping, price history, RSS, website data, and automatic app management retain their existing behavior. Selected App IDs must already be in `apps.json` with `allowNotification` not set to `false`; add untracked apps to the tracking list first.
- Changes take effect on the next workflow run. Keep bot credentials in environment variables or repository Secrets.

The configuration is separate from the automatically rewritten `apps.json`. Run `npm run test:notifications` to check the filtering logic without scraping or sending messages.

### Configuration errors

Invalid configuration throws an ordinary `Error` with an English message.

| Message                                        | Cause                                                          |
| ---------------------------------------------- | -------------------------------------------------------------- |
| Invalid notification configuration format.     | Invalid JSON, non-object configuration, or invalid field types |
| Invalid notification configuration field name. | Unknown field names                                            |
| Unsupported notification region.               | Unsupported region codes                                       |
| App ID is not tracked.                         | Untracked or disabled App IDs                                  |
