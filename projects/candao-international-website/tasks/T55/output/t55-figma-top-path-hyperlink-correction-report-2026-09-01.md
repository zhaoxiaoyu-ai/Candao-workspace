# T55 Figma 顶部路径超链接纠偏报告

日期：2026-09-01  
Figma 文件：`BMXIuVRzSUUt9YNhVAQA6K`  
页面：`03 Desktop Pages / Bilingual Validation`（`3:5`）

归档说明：T55 已被 T56 取代。T55 正确回退了 T54 替换式面板并恢复原截图，但仍误将顶部原始 Aceternity 组件来源文字改成官网最终层级 / sitemap 文案。当前正确结果见 `tasks/T56/output/t56-figma-original-path-hyperlink-report-2026-09-01.md`。

## 用户纠偏

用户指出 T54 执行错误：这里不是要替换上方区域，也不是删除或隐藏原来的截图；正确要求是“只把最上方的路径直接改成超链接，不要删掉原来的截图”。

## 本轮执行

- 已删除 T54 新增面板 `最終層級超連結 / Web Desktop 1440`（Node `623:2`）。
- 已恢复 T54 隐藏归档的原始上方参考节点，移除 `T54 archived /` 前缀并设为可见。
- 原始截图节点未删除、未替换、未移动；本轮共检查 `12` 张原始截图节点，读回均为可见。
- 仅修改原上方路径文字：将 `12` 个路径文字节点改为最终层级路径表达，并给整段文字设置 hyperlink。

## 链接范围

| 文本节点 | 当前文字 | 链接目标 |
| --- | --- | --- |
| `93:4676` | `首頁 /` | `336:7645` |
| `93:4681` | `首頁 /` | `336:7645` |
| `93:4683` | `解決方案 /solutions` | `447:8876` |
| `94:4687` | `平台能力 /platform` | `488:350` |
| `94:4691` | `預約產品演示 /book-a-demo` | `488:2401` |
| `94:4695` | `資源與支援 /resources` | `488:1413` |
| `95:4699` | `整合能力 /integrations` | `488:668` |
| `95:4703` | `頁腳法務 /privacy-policy` | `https://www.can-dao.com.hk/privacy-policy` |
| `95:4707` | `聯絡與預約 /contact` | `488:2401` |
| `95:4714` | `資源 /resources` | `488:1413` |
| `95:4718` | `常見問題 /resources/faq` | `https://www.can-dao.com.hk/resources/faq` |
| `95:4722` | `客戶案例 /customers` | `488:1138` |

## 读回验证

- T54 新增面板 `623:2`：不存在。
- `T54 archived /` 前缀节点：`0`。
- 原始截图节点检查：`12/12` 可见。
- 顶部路径文字 hyperlink：`12/12`。
- 页面正文：未修改。
- 业务事实：未新增。

## 输出文件

- Figma 读回 QA：`tasks/T55/output/qa/t55-figma-rollback-link-readback-qa.json`
- 回退后全页截图：`tasks/T55/output/screenshots/t55-figma-top-path-links-after-rollback.png`

## 后续注意

T54 的替换式面板方案已被本轮回退，不应再作为当前 Figma 页面事实使用。当前事实以 T55 为准：原截图保留，只有顶部路径文字被改为最终层级 hyperlink。
