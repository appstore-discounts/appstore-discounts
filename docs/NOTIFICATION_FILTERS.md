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

- 未填写某字段：该维度不限制。例如 `{"regions":["cn"]}` 发送中国大陆所有已追踪 App 的优惠。
- 两项都填写：同时满足国家和 App 条件才发送。
- 任意字段设为 `[]`：不发送通知。
- 配置会在每次运行开始时读取；JSON 格式错误、未知字段、无效国家或 App ID 会让任务在抓取前失败，以免误发通知。
- 筛选仅作用于消息推送，不改变抓取、价格历史、RSS、网站数据或自动应用管理。未追踪的 App 不会因为加入 `appIds` 而自动收录；仍需加入 `apps.json`，且应用须允许追踪。
- 提交配置后，在下一次工作流执行时生效。不要将机器人凭证写入此文件，继续使用环境变量或仓库 Secrets。

该文件独立于自动更新的 `apps.json`，不会被应用列表更新覆盖。验证筛选逻辑可以运行 `npm run test:notifications`，不会访问 App Store 或发送消息。

## English

Edit `notifications.config.json` at the repository root to select the discounts this instance sends to Telegram and DingTalk. The setting applies to everyone receiving its bot or channel messages, rather than individual subscribers.

The default `{}` preserves existing notifications. The example above selects three App IDs in mainland China and the United States.

- `regions`: optional allowlist of `cn`, `hk`, `mo`, `tw`, `us`, `tr`, and `pt`.
- `appIds`: optional allowlist of positive integer App IDs, available in `apps.json` or the `id` portion of an App Store URL.
- An omitted field imposes no restriction on that dimension. Both fields together select their intersection. An empty array disables notifications.
- Configuration is read at the start of every run. Invalid JSON, unknown fields, or invalid values fail before scraping, preventing accidental unfiltered notifications.
- Scraping, price history, RSS, website data, and automatic app management retain their existing behavior. Selecting an untracked App ID does not start tracking it; add it to `apps.json` and ensure tracking is allowed.
- Changes take effect on the next workflow run. Keep bot credentials in environment variables or repository Secrets.

The configuration is separate from the automatically rewritten `apps.json`. Run `npm run test:notifications` to check the filtering logic without scraping or sending messages.
