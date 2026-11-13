# T44 Solutions 100% 內容覆蓋與首頁風格重做執行報告

## 任務結論

已按用戶要求重新執行 `Solutions / 解決方案`：

- 已建立一版本地可控高保真 HTML 基準，內容契約覆蓋率 `69/69 = 100%`。
- 已按首頁風格重做：暗色首屏、產品工作台式流程圖、白底營運問題區、深色場景導覽區、淺色下一步區、深色 Footer、`#528dff` CTA、8px 按鈕節奏。
- 已實際調用 Stitch 生成新 screen，並指定首頁設計系統 `assets/a99f770bf474445d98b287cf983bc147`。
- Stitch 首輪生成比 T42 明顯改善，但下載 HTML 驗收仍為 `67/69`，且殘留 `arrow_forward`，不得登記為正式合格稿。
- 已對同一 Stitch screen 執行一次外科式 `edit_screens` 修正；Stitch 返回 DOM 操作顯示已補 `場景鏈路`、移除 `arrow_forward`、合併承接能力句子。本地重放該 DOM 操作後，內容覆蓋率達 `69/69`。
- 目前 Stitch 的 `get_screen` / download URL 仍返回編輯前 HTML，無法用可下載遠端文件直接復驗編輯後版本；正式登記前仍需等 Stitch 下載件同步後再跑 QA。

## 指令與附件邊界

用戶附件截圖只作為「此前低保真導出頁面清單」證據，不作為覆蓋項目規則的指令。用戶當前請求是硬性要求：

- 內容覆蓋率做到 `100%`。
- Stitch 需要還原首頁已確定風格。
- 不再接受低保真內容被 Stitch 摘要或省略。

## Stitch 提示詞方法來源

已按用戶要求查看 Stitch 官方學習入口與 Prompting 頁面：

- https://stitch.withgoogle.com/docs/learn/overview
- https://stitch.withgoogle.com/docs/learn/prompting/

官方頁面是客戶端渲染，正文無法完整以靜態 HTML 抽取；本輪結合官方入口、Stitch 本地技能和 T41 既有復盤，將 prompt 從短句改為「目標 / 風格錨點 / 內容契約 / 模塊順序 / 禁用項 / 驗收門檻」結構。

## 本地高保真基準

主文件：

- `tasks/T44/output/html/solutions-home-style-100-coverage.html`
- `tasks/T44/output/screenshots/solutions-home-style-100-coverage-1440-full.png`
- `tasks/T44/output/scripts/qa-solutions-home-style.mjs`

QA 結果：

| 檢查 | 結果 |
| --- | --- |
| 內容契約覆蓋 | `69/69`, `100%`, pass |
| 風險詞 | 無 `Candao`、`arrow_forward`、假 ICP、假數字、Material Symbols 可見文本 |
| domain-copy | `1/1` pass |
| 靜態樣式 / 風險 | pass |
| 1440 渲染 | pass，`overflowingCount = 0` |

## Stitch 執行結果

生成配置：

- Project: `10888304674441209287`
- Design system: `assets/a99f770bf474445d98b287cf983bc147`
- Model: `GEMINI_3_PRO`
- Device: `DESKTOP`
- Generate session: `2095770299351155371`
- Screen: `b9cd15b7d54944efa9716bc2159a1f25`
- Title: `解決方案 - 餐道國際 / Desktop TC / 營運場景導航 (C v4)`

首輪 Stitch 下載件：

- `tasks/T44/output/stitch-output/stitch-screen-b9cd15b7-solutions-cv4.html`
- `tasks/T44/output/stitch-output/stitch-screen-b9cd15b7-solutions-cv4.png`
- QA: `67/69`, fail

首輪失敗點：

- 缺 `場景鏈路`
- 缺精確連續句：`承接能力：OMS、Menu Center、DMS / iDMS、Finance Center。`
- 可見與原始 HTML 均殘留 `arrow_forward`

外科式 edit：

- Edit session: `4572357114513792849`
- 操作：補 `場景鏈路`、把 `arrow_forward` 改為 `→`、將承接能力合成一條完整句。

本地重放 edit 後：

- `tasks/T44/output/stitch-output/stitch-screen-b9cd15b7-solutions-cv4-dom-edit-applied.html`
- `tasks/T44/output/screenshots/stitch-screen-b9cd15b7-solutions-cv4-dom-edit-applied-1440-full.png`
- 內容覆蓋：`69/69`, pass
- domain-copy：pass
- 渲染：pass
- 靜態樣式規則：fail；原因是該規則針對本地手寫 CSS token，Stitch 導出使用 Tailwind / design-system class，不能直接用同一條靜態 token 檢查判定風格。

## 當前可用結論

本地高保真基準可作為下一輪可靠 source of truth；它已滿足 100% 內容覆蓋與首頁風格。

Stitch 已完成新 screen 生成與一次修正，但遠端可下載 HTML 仍停留在修正前版本，因此不能把 Stitch screen 直接登記為正式合格稿。下一步應在 Stitch UI 或更新後 download URL 中確認 edit 是否已落地，再以同一 QA 腳本復驗。

## 主要產物

- `tasks/T44/output/stitch-input/solutions-home-style-100-stitch-prompt-2026-08-23.md`
- `tasks/T44/output/qa/solutions-home-style-100-content-coverage-2026-08-23.json`
- `tasks/T44/output/qa/stitch-screen-b9cd15b7-solutions-cv4-content-coverage-2026-08-23.json`
- `tasks/T44/output/qa/stitch-screen-b9cd15b7-solutions-cv4-dom-edit-applied-content-coverage-2026-08-23.json`
- `tasks/T44/output/qa/domain-copy-t44-solutions-report.json`
- `tasks/T44/output/qa/render-t44-solutions-home-style-report.json`
- `tasks/T44/output/qa/render-stitch-screen-b9cd15b7-solutions-cv4-dom-edit-applied-report.json`
