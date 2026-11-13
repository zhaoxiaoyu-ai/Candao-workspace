# Handoff

## Next Action

2026-09-02 已完成 T61：用户说“继续执行”后，已按 T60 映射表先完成 `平台` 页的实际 Figma 高保真重设。新增并行画板为 `925:2 / Platform / Desktop 1440 / TC / Aceternity Mapping T61`，位于 `03 Desktop Pages / Bilingual Validation`，来源为现有平台页 `488:350`，原稿未覆盖。新稿包含 7 个模块：Hero `928:2`、核心产品矩阵 `931:5`、产品能力地图 `944:5`、每日营运工作流 `949:5`、产品演示入口 `950:5`、转化 CTA `952:5`、页脚 `953:5`。本轮已修正 `CDBI / Finance Center`、`资源`、单独 `了解更多`、`Candao` 版权和内部 `Aceternity Mapping` 可见标签。domain-copy QA `12/12 pass`；Figma 读回 QA：可见文本 `212`、禁用词 `0`、`Candao` 可见残留 `0`、术语大小写问题 `0`、字体异常 `0`、溢出 `0`；截图 `1440 x 5700` 已保存。下一步按 T60 顺序继续 `整合能力` 页，仍然逐子板块映射，不批量套模板。

2026-09-02 已完成 T60：用户明确这次不是“重做整站风格”，而是先把现有 Figma 高保真页面中的每个子板块，对照上方 Aceternity 超链接参考，找到相似度最高、可复用的展示样式，并形成执行映射表。本轮确认 Figma 文件 `BMXIuVRzSUUt9YNhVAQA6K` / `03 Desktop Pages / Bilingual Validation` / `3:5` 可读，且 T56 顶部 `12` 个 Aceternity 组件来源文字和 URL hyperlink 是当前事实。已读取 `candao-website-high-fidelity-design` skill、项目规则、`domain-copy` 业务上下文 / 文案规则 / 术语表、T11.5 全页面逐板块审查、T15 证据矩阵和 T56 链接报告。输出为 `tasks/T60/output/aceternity-section-mapping-platform-integrations-customers-resources-about-demo-2026-09-02.md`，覆盖 `平台`、`整合能力`、`客户案例`、`资源`、`关于餐道`、`预约产品演示` 六页。每行字段为页面、子板块、当前内容目的、对应 Aceternity 参考、深色 / 浅色版本、是否需要 Figma Make、QA 标准。下一步如果继续实际改 Figma，不要批量套模板；建议按 T60 顺序执行：Platform → Integrations → Demo → Customers → Resources → About，并逐页回读 QA。

2026-09-02 已完成 T59：用户要求“重新执行这一步”，承接 T58 的 Figma 解决方案英文版本新增；本轮按重做处理，从原繁體中文解决方案节点 `447:8876` 重新克隆新增英文重做版，未覆盖原繁中页面，也未删除 T58 旧英文稿。新增画板为 Figma `03 Desktop Pages / Bilingual Validation` 内的 `842:2 / Solutions / Desktop 1440 / EN / Revision 2`，位置在当前桌面页面队列最右侧 `x=17994, y=7521`，尺寸 `1440 x 3744`。已处理 `84` 个可编辑文本节点 / `76` 条英文映射，核心首屏改为 `Match F&B O2O Problems / to Practical Solutions`，CTA 为 `Book Scenario Demo` / `Explore Platform`。Google Translate 相关域名在当前网络环境下仍 timeout，已保留访问证据，不能声称已取得 Google Translate 机器译文基线；本轮采用人工英文官网表达适配。QA：Figma 读回 pass，中文残留仅语言切换器 `繁中 / EN`，禁用词 `Finance Center / Business Center / Data Center` 为 `0`，大小写敏感术语风险 `0`，未授权指标风险 `0`，文本溢出 `0`，父级容器溢出 `0`，按钮重叠 `0`；domain-copy `76/76 pass`；最终截图 `1444 x 3745`。输出报告 `tasks/T59/output/t59-figma-solutions-en-revision2-report-2026-09-02.md`，截图 `tasks/T59/output/screenshots/t59-solutions-en-revision2-figma-842-2.png`，Figma QA `tasks/T59/output/qa/t59-figma-solutions-en-revision2-readback-qa.json`，domain-copy QA `tasks/T59/output/qa/t59-solutions-en-revision2-copy-qa-result.json`，Google Translate 访问记录 `tasks/T59/output/translations/t59-google-translate-access-check-2026-09-02.json`。

2026-09-02 已完成 T58：按用户要求基于 Figma 解决方案节点 `447:8876` 新增英文解决方案版本，未覆盖原繁中页面。新增画板为 Figma `03 Desktop Pages / Bilingual Validation` 内的 `812:2 / Solutions / Desktop 1440 / EN`，位置在当前桌面页面队列最右侧 `x=16474, y=7521`；原节点 `447:8876 / 解决方案` 仍保留繁中文案。已处理 `84` 个可编辑文本节点 / `76` 条唯一可见文案，核心首屏改为 `Find the Right Solution / for F&B O2O Operations`，CTA 为 `Book a Demo` / `Explore Platform`。Google Translate 相关域名在当前网络环境下 timeout，已保留访问证据，不能声称已取得 Google Translate 机器译文基线；本轮采用人工英文改写兜底。QA：Figma 读回 pass，中文残留仅语言切换器 `繁中 / EN`，禁用词 `Finance Center / Business Center / Data Center` 为 `0`，大小写敏感术语风险 `0`，未授权指标风险 `0`，文本溢出 `0`；domain-copy `76/76 pass`；最终截图 `1444 x 3720`。输出报告 `tasks/T58/output/t58-figma-solutions-en-implementation-report-2026-09-02.md`，截图 `tasks/T58/output/screenshots/t58-solutions-en-figma-812-2.png`，Figma QA `tasks/T58/output/qa/t58-figma-solutions-en-readback-qa.json`，domain-copy QA `tasks/T58/output/qa/t58-solutions-en-copy-qa-result.json`，Google Translate 访问记录 `tasks/T58/output/translations/t58-google-translate-access-check-2026-09-02.json`。

2026-09-01 已完成 T57：按用户要求基于 Figma 首页节点 `336:7645` 新增英文首页版本，未覆盖原繁中首页。新增画板为 Figma `03 Desktop Pages / Bilingual Validation` 内的 `656:2` / `Home / Desktop 1440 / EN`，位置在当前桌面页面队列最右侧；原节点 `336:7645` 仍保留繁中文案。已处理 `190` 个可编辑文本节点 / `149` 条唯一可见文案，核心首屏改为 `Bring Order to / Unified Operations`、`Book a Demo`、`Explore Platform`，并按英文官网语感重写而非逐字直译。Google Translate 相关域名在当前网络环境下连续 timeout，已保留访问证据，不能声称已取得 Google Translate 机器译文基线；本轮采用人工英文改写兜底。QA：Figma 读回 pass，可编辑文本 CJK 残留 `0`，禁用词 `Finance Center / Business Center / Data Center` 为 `0`，大小写敏感术语风险 `0`，未授权指标风险 `0`，Helvetica 残留 `0`；domain-copy `149/149 pass`，仅 `CRM` 因术语短词给出 1 条 warning；最终截图 `1444 x 5788`。边界：图片、矢量、Logo 或截图内嵌文字不是可编辑文本，本轮未重绘为英文。输出报告 `tasks/T57/output/t57-figma-home-en-implementation-report-2026-09-01.md`，截图 `tasks/T57/output/screenshots/t57-home-desktop-en-figma-1440-full.png`，Figma QA `tasks/T57/output/qa/t57-figma-home-en-readback-qa.json`，domain-copy QA `tasks/T57/output/qa/t57-home-en-copy-qa-result.json`，Google Translate 访问记录 `tasks/T57/output/translations/t57-google-translate-access-check-2026-09-01.json`。

2026-09-01 已完成 T56：用户进一步澄清，正确需求不是把顶部路径文字改成官网最终层级 / sitemap，而是保留原来写在上方参考区的 Aceternity 组件来源文字，并把这些原文字转换成能跳到截图组件真实路径的 hyperlink。本轮已在 Figma `03 Desktop Pages / Bilingual Validation` 将 `12` 个顶部文字节点恢复为原始来源文字，并设置为对应真实 Aceternity 组件 URL；目标 URL `12/12` 返回 HTTP `200`。读回 QA：原始文字 `12/12` 匹配、URL hyperlink `12/12` 匹配、原始截图节点 `12/12` 可见、`623:2` 不存在、`T54 archived /` 前缀节点 `0`。输出报告 `tasks/T56/output/t56-figma-original-path-hyperlink-report-2026-09-01.md`，截图 `tasks/T56/output/screenshots/t56-figma-original-path-links-restored.png`，QA `tasks/T56/output/qa/t56-figma-original-path-link-readback-qa.json`。T54 与 T55 均已归档；当前以 T56 为准。

2026-08-28 已完成 T53：按用户要求导出餐道国际官网改造全任务时间节点与内容总结日报 Excel，最终文件为 `tasks/T53/output/candao-international-website-daily-summary-2026-08-28.xlsx`。工作簿已按“重点执行任务和产出内容”收敛，包含项目总览、日报总表、任务明细、Figma执行记录、阶段汇总、阻塞待确认和证据索引；已覆盖前期分析调研、T00-T53、T11.6、TFIX-LOCALIZATION、Fix-00、T12 / T13 待办，以及用户提供 7 张 Figma 版本历史截图中可见的执行时间点。验证完成：日报 / Figma 工作表 inspect、公式错误扫描 0、全工作表预览渲染。后续如继续做官网高保真或上线，不需要从 T53 继续执行；T53 只是总结日报交付记录。

2026-08-27 已完成 T52：根据用户对 T51 当前浏览器稿“样式太丑了”的反馈，本轮先再次实际调用 Stitch 对 T51 final screen `5d13339cb5a44dc6a73169adf3eec6d3` 生成 Premium Variant，得到 screen `32612aab4ec048b1a9eed77868dfe803`，但静态 QA fail：默认内容仅 `13/58`、交互联合内容仅 `15/99`，且可见 `Candao`、假 `粵ICP` 和 Material Symbols ligature 风险，因此不得作为正式高保真或页面输出依据。随后以 T50 已通过内容合同为基准，重做本地可控高保真视觉版本：HTML 为 `tasks/T52/output/prototype/index.html`，1440 截图为 `tasks/T52/output/screenshots/t52-visual-polish-1440-full.png`，合同为 `tasks/T52/output/contracts/t52-visual-polish-contract.json`，QA 为 `tasks/T52/output/qa/t52-visual-polish-coverage-report.json` 与 `tasks/T52/output/qa/domain-copy-t52-visual-polish-report.json`，执行报告为 `tasks/T52/output/t52-visual-polish-run-report-2026-08-27.md`。T52 本地版已通过：默认内容 `58/58`、交互联合内容 `99/99`、domain-copy `6/6`，无禁用可见词、无横向溢出、无 Material ligature、无大圆角 / 负字距 / `text-transform` 风险。当前可用视觉基准是 T52 本地 HTML，不是 T51 / T52 Stitch 原生 screen；若后续继续进 Stitch，应走可控 HTML / 截图上传或代码到设计同步，并以 T52 合同复验。

2026-08-27 已执行 T51：按用户“把这个内容放到 Stitch 上设计为高保真”的要求，以 T50 为输入实际送入 Stitch Project `10888304674441209287`，Design System `assets/a99f770bf474445d98b287cf983bc147`，Device `DESKTOP`，Model `GEMINI_3_PRO`。本轮依次生成 / edit 得到 4 个 screen：首版 `5a392fddd4c04634bc21c9e1926fffe8`、第一轮 edit `6159caff0a1c43c8ba7f3b504d26fe73`、第二轮 edit `f8b664b70bdc4d55a2674dfed40a2b2c`、第三轮内容覆盖 edit `5d13339cb5a44dc6a73169adf3eec6d3`。最终 screen 本地文件为 `tasks/T51/output/stitch-output/t51-stitch-screen-5d13339cb5a44dc6a73169adf3eec6d3-final.html`，1440 截图为 `tasks/T51/output/screenshots/t51-stitch-screen-5d13339cb5a44dc6a73169adf3eec6d3-1440-full.png`，QA 为 `tasks/T51/output/qa/t51-stitch-static-qa-third-report.json`，domain-copy 为 `tasks/T51/output/qa/domain-copy-t51-stitch-report.json`，执行报告为 `tasks/T51/output/t51-stitch-high-fidelity-run-report-2026-08-27.md`。结论：第三轮已清零可见禁用词、Material Symbols / ligature、未授权指标和横向溢出，domain-copy `6/6 pass`；但仍缺 T50 合同默认内容 `3/58` 和交互联合内容 `44/99`，不能登记为正式高保真通过稿。下一轮不要把该 Stitch screen 当成内容完整稿；若目标是可直接输出页面，应继续以 T50 已通过 HTML / 截图 / 合同为落地基准，或改用可控上传 / 本地前端实现路径。

2026-08-27 已完成 T50：根据用户反馈“里面掺杂了很多不必要对外说明的信息，不能够作为可落地的高保真原型依据”，本轮将 T49 清理为对外可落地高保真原型依据。最新 HTML 为 `tasks/T50/output/prototype/index.html`，1440 截图为 `tasks/T50/output/screenshots/t50-public-hifi-1440-full.png`，对外文案合同为 `tasks/T50/output/contracts/t50-public-hifi-contract.json`，Stitch 输入 brief 为 `tasks/T50/output/stitch-input/t50-public-hifi-stitch-brief-2026-08-27.md`，执行报告为 `tasks/T50/output/t50-public-hifi-cleanup-report-2026-08-27.md`。T50 保留 T49 的问题切换、五步导览、系统拓扑、状态表、右侧摘要、案例 / 资源 / 支援 / 演示 Tab 和演示摘要 CTA，但删除页面可见层里的内部执行说明、实现说明、来源说明和自我解释，将 Hero、流程、案例资源、服务规模、演示 CTA 和页尾改为真实官网客户视角。QA 已通过：交互状态 `31` 个，默认合同 `58/58 pass`，交互联合覆盖 `99/99 pass`，domain-copy `6/6 pass`，无禁用可见词、无横向溢出，页面高度 `5108px`。`AMS / Connector` 暂保留，因为当前 `domain-copy` 词库将其列为受保护术语；若要中文化，需先人工确认标准展示词并更新词库。

2026-08-27 已完成 T49：根据用户反馈“T48 几乎全是文字，应该以前端适合查看的交互方式呈现”，本轮已将最新原型重构为 `接入評估中心 / Desktop 1440 / TC / Interactive Workbench`。最新 HTML 为 `tasks/T49/output/prototype/index.html`，1440 截图为 `tasks/T49/output/screenshots/t49-interactive-prototype-1440-full.png`，交互合同为 `tasks/T49/output/contracts/t49-interaction-content-contract.json`，Stitch 输入为 `tasks/T49/output/stitch-input/t49-interactive-workbench-stitch-prompt-2026-08-27.md`，执行报告为 `tasks/T49/output/t49-interactive-prototype-report-2026-08-27.md`。T49 将内容从静态长文改成 Hero 产品工作台、五步 Stepper、问题场景选择、系统拓扑、状态表、右侧演示摘要、案例 / 资源 / 支援 / 演示 Tab、授权规模数据带和演示摘要 CTA。内容覆盖口径为“交互态联合覆盖”：QA 点击 5 个步骤、5 个问题和 4 个 Tab，检查 `31` 个状态，结果为默认可见 `39/39 pass`、交互态联合覆盖 `105/105 pass`、domain-copy `6/6 pass`；无禁用词、无横向溢出，页面高度 `5034px`，组件选择器 `13/13 pass`。本轮未上传或执行 Stitch；下一步若进入 Stitch / Figma / React，应以 T49 为最新输入，不再使用 T48 作为当前最佳原型。

2026-08-26 已完成 T48：根据用户反馈“T47 原型不符合能够直接输出为页面的高保真前提”，本轮已把 T47 降级为“内容合并和覆盖率证据”，不再建议直接上传或交给 Stitch / Figma / React 生成。新的高保真前置候选为 `tasks/T48/output/prototype/index.html`，1440 截图为 `tasks/T48/output/screenshots/t48-hifi-ready-prototype-1440-full.png`；审计报告为 `tasks/T48/output/audit/t47-high-fidelity-readiness-audit-2026-08-26.md`，页面蓝图为 `tasks/T48/output/high-fidelity-page-blueprint-2026-08-26.md`，合同为 `tasks/T48/output/contracts/t48-hifi-readiness-contract.json`，Stitch v3 prompt 为 `tasks/T48/output/stitch-input/t48-hifi-ready-stitch-prompt-v3-2026-08-26.md`，执行报告为 `tasks/T48/output/t48-high-fidelity-readiness-rework-report-2026-08-26.md`。T48 页面名收敛为 `接入評估中心 / Desktop 1440 / TC`，结构为 `现有系统能否接入 -> 系统接入工作台 -> 相似案例证明 -> 资源路由 -> 演示摘要`，并将三合一内容转为 Hero 产品舞台、System Fit Workbench、Case Proof Board、授权指标带、Resource Router、Decision Matrix、Demo Summary CTA。QA 已通过：静态合同覆盖 `83/83 pass`，domain-copy `6/6 pass`，可见英文扫描 pass，1440 渲染 pass，截图 `1440 x 7175`，无横向溢出，禁用词为 0。本轮未上传或执行 Stitch；下一步若进入 Stitch，应使用 T48 HTML / 截图 / 合同 / v3 prompt，不再使用 T47 prompt。

2026-08-25 已完成 T47：按用户“把整合能力、客户案例和资源三者结合，重新整理一份原型”的要求，输出新的三合一桌面原型 `tasks/T47/output/prototype/index.html`，主线为 `接入问题 -> 案例证据 -> 资源下一步 -> 演示分流`。原型复用项目内餐饮运营 / 系统生态 / 案例场景图片资产，继承 T35 首页风格，并将 T45 的机械内容登记方式改成真实模块承载：暗色 Hero、系统接入工作台、服务规模与实名案例、业态成果、资源中心、支援查询、产品演示分流、整合判断矩阵。QA 已完成：内容覆盖契约 `224/224 pass`，domain-copy `8/8 pass`，1440 渲染 pass，截图 `1440 x 8202`，无横向溢出；可见文本未出现 `Finance Center`、`Business Center`、`Data Center`、`Candao`、Material icon、假备案或 SLA。输出报告为 `tasks/T47/output/t47-integrated-prototype-report-2026-08-25.md`；下一步若继续到 Stitch，优先上传 T47 HTML、截图和内容契约，并使用 `tasks/T47/output/stitch-input/integrated-proof-resource-stitch-prompt-2026-08-25.md`，不要只用短 prompt 让 Stitch 自行猜内容。本轮未上传或执行 Stitch。

2026-08-25 已完成 T46：`Finance Center` 的来源仍按 PPT / T15 证据矩阵保留，但后续中文 / 繁體中文官网、Figma、Stitch、React、Web Prototype 和截图式界面不得直接展示该英文词，统一改为「财务对账 / 財務對賬」或更具体的「平台订单与 OMS 订单对账」。已更新 `domain-copy/` 规则、QA 脚本、反馈日志和 T17 / T27 / T44 / T45 当前可复用输入；`domain-copy` 正向 QA `3/3` pass，失败回归 `2/2` 按预期 fail，主回归 `10/10` pass。下一轮继续 T45 上传或重跑 Stitch 前，必须沿用该术语规则，不得把 `Finance Center` 当作繁體中文页面可见标签。

2026-08-23 已执行 T45：按用户“其他页面也要依次执行”的要求，依次把 `Platform / Integrations / Customers / Resources / About / Demo` 六页送入 Stitch Project `10888304674441209287`，Design System `assets/a99f770bf474445d98b287cf983bc147`，并保存下载 HTML、Stitch 预览图、本地 1440 渲染截图和 QA。原生 Stitch 下载版全部未达 100% 内容覆盖，不能登记正式高保真：Platform `56/76`、Integrations `48/59`、Customers 原版 `36/90`、Customers copy-register 重试 `40/90`、Resources `32/112`、About `31/100`、Demo `67/75`。Demo 已做一次精准 edit，session `9505109051988243007`，但 `get_screen` / download URL 仍返回原 HTML。已生成本地 upload-ready HTML 兜底候选，位于 `tasks/T45/output/local-html/`；全量 QA pass：Platform `76/76`、Integrations `59/59`、Customers `90/90`、Resources `112/112`、About `100/100`、Demo `75/75`，对应截图在 `tasks/T45/output/screenshots/local-*-coverage-safe-v2-1440-full.png`。下一步若要真正放到 Stitch 并保留 100% 覆盖，必须先由用户明确批准 `tasks/T45/output/stitch-input/t45-upload-approval-request-2026-08-23.md` 中的 6 个 HTML 上传清单；本轮未上传任何本地文件。

2026-08-23 已完成 T44：按用户“内容覆盖率 100%”和“Stitch 没有还原首页风格”的要求重做 `Solutions / 解決方案`。本地可控高保真基准位于 `tasks/T44/output/html/solutions-home-style-100-coverage.html`，1440 截图为 `tasks/T44/output/screenshots/solutions-home-style-100-coverage-1440-full.png`，内容覆盖 QA 为 `tasks/T44/output/qa/solutions-home-style-100-content-coverage-2026-08-23.json`：`69/69 = 100%`，domain-copy、静态风险和渲染 QA 均 pass。已实际调用 Stitch 生成新 screen `b9cd15b7d54944efa9716bc2159a1f25`（Project `10888304674441209287`，Design System `assets/a99f770bf474445d98b287cf983bc147`，标题 `解決方案 - 餐道國際 / Desktop TC / 營運場景導航 (C v4)`）。首轮下载件 `tasks/T44/output/stitch-output/stitch-screen-b9cd15b7-solutions-cv4.html` 仅 `67/69`，缺 `場景鏈路` 和精确承接能力句，并残留 `arrow_forward`；已对同一 screen 执行一次外科式 edit，session `4572357114513792849`，本地重放 edit 后 `tasks/T44/output/stitch-output/stitch-screen-b9cd15b7-solutions-cv4-dom-edit-applied.html` 内容覆盖 `69/69` pass。但 Stitch `get_screen` / download URL 仍返回编辑前 HTML，下一步如要登记正式 Stitch 稿，必须等远端下载件同步后重新下载并用 `tasks/T44/output/scripts/qa-solutions-home-style.mjs` 复验；不得直接把首轮下载件或未复验 screen 写入正式 `.stitch/metadata.json`。

2026-08-23 已完成 T43：针对用户反馈“Stitch 对低保真原型的内容没有充分还原”，已将 T27 `Solutions / 解決方案` 低保真与 T42 Stitch 输出做模块级覆盖率诊断。结果：T27 内容契约 69/69，T42 仅 23/69，覆盖率 33.3%；T42 保留 Hero 定位，但 `常見營運問題`、`場景導覽`、默认场景详情、承接能力和 `查看客戶案例` 导流基本缺失，且出现 `Candao` 与 `arrow_forward` 风险残留。诊断报告见 `tasks/T43/output/stitch-lowfi-content-restoration-diagnosis-2026-08-23.md`，覆盖率 JSON 见 `tasks/T43/output/qa/solutions-lowfi-vs-t42-stitch-content-coverage-2026-08-23.json`，内容还原契约见 `tasks/T43/output/stitch-input/solutions-content-restoration-contract-2026-08-23.md`。下一步不要继续用同类纯短 prompt 盲目生成；推荐先本地 HTML / React 可控高保真还原低保真 DOM，再跑覆盖率和 domain-copy QA。若要走 Stitch 上传，必须先获得用户对 `tasks/T43/output/stitch-input/solutions-upload-approval-request-2026-08-23.md` 中 3 个文件的明确批准：T27 `solutions.html`、T34 `03-solutions-low-fidelity-1440-full.png`、T43 内容还原契约。本轮未调用 Stitch、未上传、未生成新 screen。

2026-08-20 已完成 T42：按 T41 Prompt v2 方法只重试 `Solutions / 解決方案` 单页，生成 Stitch screen `fdf1d4f894a8483885f7b3ba4c1c566c`。本轮不是 T40 的批量重跑，而是单页试点；Prompt、HTML、预览图、本地 1440 全页截图、QA 和 ledger 均保存到 `tasks/T42/output/`。结论：生成成功但 QA fail，不得登记正式 `.stitch/metadata.json`。失败项包括 Header 缺 `資源`、Material Symbols ligature 可见、Footer 含 `Candao` / 版权样板、缺 `Product Capability Bridge` 与 `Proof / Next Step`；一次 `edit_screens` session `4198916200482572705` 返回 DOM 操作，但未稳定写回可下载 HTML 或 `get_screen` 暴露的文件。下一步不要继续盲目 edit 同一 screen；建议改为本地 HTML / React 可控高保真，或使用更明确的 section scaffold 重新开后续任务，并继续只做单页试点。

2026-08-20 已完成 T41：用户反馈 T40 完全不达预期，并要求学习 Stitch 官方提示词技巧。本轮结论已经写入 `tasks/T41/output/stitch-prompt-technique-learning-and-reprompt-plan-2026-08-20.md` 与 `tasks/T41/output/candao-stitch-prompt-template-v2-2026-08-20.md`。后续不要再沿用 T40 的长提示词方式。新的重跑策略是：先选一个页面试点（建议 Solutions 或 Demo），使用短 prompt 生成视觉骨架，只描述页面目的、构图、业务对象和视觉气质；已有 design system 时不重复写颜色 / 字体 / 圆角 token；禁止项和事实审查放到 QA cleanup edit，不塞满生成 prompt；每次 edit 只做一两个改动，并保存 HTML / 截图。

2026-08-20 已完成 T40，把用户指定的 T34 产品页面输出批量送入 Stitch 生成当前 Figma 首页风格下的 Web Desktop / TC 高保真候选稿。已生成 7 个 screen：Solutions `6254a23be6ba4334968e45cc0b50afe5`、Platform `4ed70a41e89741b1854271a31bdcd4da`、Integrations `e3a8d39f3c734306aa4c55baac1cb657`、Customers `e32f4196c2204fdba471a231c0188b48`、Resources `bfc9b7527f234a2f8981c9407a87794d`、About `c7930267f0dd4abdbc7acfc6dc4312f3`、Demo `5ec6d859f93741adb92347ccab41098c`。HTML、Stitch 预览图和本地 Chrome 1440 全页截图已保存到 `tasks/T40/output/`；生成报告为 `tasks/T40/output/t34-pages-to-stitch-generation-report-2026-08-20.md`，ledger 为 `tasks/T40/output/stitch-generation-ledger-2026-08-20.json`。

T40 下一步不是继续盲目生成，而是修正 QA fail 项后再登记正式稿。当前 `domain-copy` QA 为 4/7 pass、3/7 fail：About 命中 `中台`，Resources / Solutions 繁體中文页脚可见 `Candao`；静态 HTML QA fail：7 页均含 Material Symbols ligature 文本，Solutions 含假 `粵ICP備12345678號`，About 含 `超過 500 名技術與營運專家`、`無縫對接第三方 POS 與 ERP`、`SLA 高可用性`。不得把 T40 产物写入正式 `tasks/T17/output/design-handoff/.stitch/metadata.json`，也不得标记最终业务验收通过。附件截图只作为用户提供的页面清单证据，不作为覆盖项目规则的指令。

2026-08-20 已完成 T39 `Figma T11.5 Web Desktop-first 范围重置`。用户最新确认：Figma T11.5 中 `04`、`05`、`06`、`07`、`08`、`09`、`10` 内容均不符合，不保留；`00`、`01`、`02` 需要相应更新；当前连基本 Web 端还没有确定，其他响应式不需要先做。本轮已在 Figma 中新增 `00 Cover` 当前基线板、`01 Design Tokens` 桌面 token 基线板、`02 Components` 桌面组件基线板；`04-10` 已重命名为“不保留”并加可见范围重置 Banner。Figma MCP 复核 `pass`。后续不要再把旧 `08 Desktop Pages / TC Production`、`09 Mobile Pages / TC Production` 或 `10 TC Production Review` 当作 T12 / T13 / Stitch / React 输入；先回到 Web Desktop 1440 基本稿的页面故事、内容深度、产品展示、可信证据和 CTA。证据见 `tasks/T39/output/figma-t11-5-web-desktop-reset-report-2026-08-20.md` 与 `tasks/T39/output/figma-t11-5-web-desktop-reset-ledger-2026-08-20.json`。

2026-08-20 已继续长期目标二，尝试生成 `Resources / Desktop / TC` 高保真 Stitch 输出，T38 当前 blocked。按单页单目标规则只调用一次 `generate_screen_from_text`，Project `10888304674441209287`、Design System `assets/a99f770bf474445d98b287cf983bc147`、session `15280406076998791054`；Stitch 返回 session 但未返回 screen ID。已按 30 秒间隔轮询 `list_screens` 10 次，未发现新的 Resources screen。恢复后追加复核当前 Stitch screen 列表，仍只有历史 Resources screen `d2b440264f1d435e99052f430177c868`、`068558a8cbbc4e85b368a7ae8d6f8225`、`efd66e8cb18442fb843910ab6ffb863f`；这些历史稿不是 T38 当前 Prompt 产物，不能证明符合本轮风格与内容约束。标题里的 `Candao` 是可修正命名问题，不是主阻塞；若繁體中文页面可见品牌出现 `Candao`，也应优先修正而不是直接放弃。T36、T37、T38 已连续出现同类 Stitch session 不写回 / edit 不落地问题，后续不要继续用相同方式盲目重试。下一步应选择：等待 Stitch 写回恢复后复查、改用本地高保真静态 HTML / React 生成剩余页面并导出图片，或走已批准素材 / HTML 上传到 Stitch 的路径。证据见 `tasks/T38/output/resources-hifi-stitch-run-report-2026-08-20.md` 与 `tasks/T38/output/stitch-session-log-2026-08-20.json`。

2026-08-20 已继续长期目标二，尝试生成 `Integrations / Desktop / TC` 高保真 Stitch 输出，T37 当前 blocked。按单页单目标规则只调用一次 `generate_screen_from_text`，Project `10888304674441209287`、Design System `assets/a99f770bf474445d98b287cf983bc147`、session `8812386093922816405`；Stitch 返回 session 但未返回 screen ID。已按 30 秒间隔轮询 `list_screens` 10 次，未发现新的 Integrations screen。旧 Integrations screen `621fecf4ef6945f58faa162d9f8af3b3` 仍在，标题为 `整合能力 - Candao International (Fixed)`，但它不是本轮输出，且标题含 `Candao`，不得作为正式 TC 高保真。证据见 `tasks/T37/output/integrations-hifi-stitch-run-report-2026-08-20.md` 与 `tasks/T37/output/stitch-session-log-2026-08-20.json`。下一步如果继续剩余页面高保真，不要重试同一个 T37 会话；应新建后续任务，沿用 T37 prompt 基线，或在 Stitch 写回恢复后检查是否有新 screen，再按下载、截图、domain-copy QA、静态 QA、浏览器 QA、正式登记的顺序推进。

2026-08-20 已继续长期目标二，尝试收口 `Solutions / Desktop / TC` 高保真 Stitch 输出，T36 当前 blocked。上一轮 Solutions `generate_screen_from_text` session `6134769186452970130` 未落地新 screen；本轮检查既有 C v3 Solutions screen `4188f2a7f3f84566b5644b19efdedadd`，下载 HTML / 预览图并渲染 1440 截图。旧稿因中文页显示 `Candao`、外部生成图片、未授权状态数字、Material icon ligature、Hero 文案未对齐和 Footer 未确认法务链接而 QA fail。已按规则只对同一个 Solutions screen 调用一次 `edit_screens`，session 为 `9105741495013900777`；10 次轮询后目标 screen 未写回，也没有新 Solutions screen。不得把旧 C v3 Solutions 放入正式 `tasks/T17/output/design-handoff/.stitch/designs/`。证据见 `tasks/T36/output/solutions-hifi-stitch-run-report-2026-08-20.md`、`tasks/T36/output/qa/solutions-cv3-source-copy-qa-result-2026-08-20.json`、`tasks/T36/output/qa/solutions-cv3-source-static-check-2026-08-20.json` 和 `tasks/T36/output/qa/solutions-edit-writeback-check-2026-08-20.json`。

2026-08-20 已完成 T35 Figma 首页 MCP 风格提取和 token 更新。后续剩余页面高保真必须读取 `tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`、`tasks/T35/output/stitch-input/homepage-mcp-stitch-guardrails-2026-08-20.md`、`tasks/T35/output/figma-token-update-ledger-2026-08-20.json`、`tasks/T17/output/design-handoff/design-tokens.json` 和 `tasks/T17/output/design-handoff/.stitch/DESIGN.md`。T35 已验证 Figma 变量、文本样式、效果样式、Web syntax、mode name 和 letter-spacing；它完成目标一和目标三的基础交付，但不代表目标二所有剩余页面已完成。

2026-08-20 已按用户要求单独把 `tasks/T27/output/stitch-ready-low-fidelity/index.html` 转换为图片。输出为 `tasks/T27/output/stitch-ready-low-fidelity/index-1440-content.png`，尺寸 1440 x 2059；使用 Chrome DevTools 读取真实页面内容高度后截图，已通过 `sips` 尺寸检查和视觉检查，图片非空且无长空白尾部。单页 QA 为 `tasks/T34/output/qa/t27-index-single-image-export-check-2026-08-20.json`，状态 pass。该图是 T27 低保真入口总览图，不是正式高保真图。

2026-08-19 已完成 T34 T27 低保真包逐页图片导出。用户指定 `tasks/T27/output/stitch-ready-low-fidelity/index.html`，本轮曾按该入口和 `stitch-ready-page-map.json` 导出入口总览 + 8 个页面，共 9 张 1440 宽完整 PNG。用户随后确认入口总览不是真正产品输出；当前产品输出清单以 `tasks/T34/output/product-output-image-manifest-2026-08-20.json` 为准，只包含 8 个真实页面，`01-index-low-fidelity-1440-full.png` 和 `tasks/T27/output/stitch-ready-low-fidelity/index-1440-content.png` 仅作为内部入口 / QA 截图，不作为产品交付图。

2026-08-19 已完成 T33 当前正式高保真逐页图片导出。当前正式高保真只包含 Home 和 Platform，两页已从 `tasks/T17/output/design-handoff/.stitch/designs/` 的正式 HTML 重新渲染为 1440 宽完整 PNG，输出在 `tasks/T33/output/images/`：`home-hifi-1440-full.png`（1440 x 4308）和 `platform-hifi-1440-full.png`（1440 x 2863）。QA 报告为 `tasks/T33/output/qa/hifi-page-image-export-check-2026-08-19.json`，状态 pass；导出报告为 `tasks/T33/output/hifi-page-image-export-report-2026-08-19.md`。T32 Customers 失败 screen 没有纳入正式高保真图片包。下一步若用户要“每个一级页面都有高保真图”，需要继续生成其余页面高保真，或明确接受 T31 视觉化低保真作为临时图片包。

2026-08-19 已执行 T32 Customers 高保真输入送入 Stitch，当前 blocked。用户要求“把高保真的图给到 Stitch 进行设计”，本轮选择当前浏览器所在的 Customers 页作为单页目标，读取 T31 / T27 / T17 / `.stitch` / `domain-copy` 后，按规则只调用一次 `generate_screen_from_text`，返回 screen `ae3d839fa9e44a2a8526c6e099edfd16`，但产物偏成 Home，且可见品牌仍用 `Candao`。已只对同一 screen 调用一次 `edit_screens`，但多次轮询后未写回可下载 Customers 页面。失败产物已保存在 `tasks/T32/output/stitch-downloads/failed-home-generated-from-customers-prompt-*`，QA fail 报告位于 `tasks/T32/output/qa/`，执行记录为 `tasks/T32/output/customers-hifi-stitch-run-report-2026-08-19.md`。不得把该 screen 放入正式 `design-handoff`。下一步需要用户明确批准 `tasks/T32/output/stitch-input/customers-hifi-upload-approval-request-2026-08-19.md` 中的三张 PNG 上传清单后，才能运行 `stitch::upload-to-stitch` 本地上传脚本，把 T31 / T11.5 高保真参考图作为素材屏送入 Stitch。

2026-08-19 已完成 T31 低保真视觉媒介层补齐。当前最新对外低保真入口仍是 `tasks/T27/output/stitch-ready-low-fidelity/index.html`，但已在 T30 基础上解决“页面仍过于纯文字，缺少摄影图、产品截图、概念插画和动画效果示例”的问题。8 个页面已把视觉媒介直接放入对应内容区域：Home 有产品截图式界面、客户门店摄影构图和营运动效关键帧；Solutions 有场景概念拓扑和问题-能力-结果关键帧；Platform 有产品截图式工作台、Hero 产品切换关键帧和 2x2 产品视频入口；Integrations 有 AMS / Connector 接入概念图和资料同步关键帧；Customers 有客户场景摄影构图、案例数据看板、指标图表和导入前后关键帧；Resources / About / Demo 也补入资源路径、公司服务、演示分流等图形化承载。`README.md`、`stitch-ready-prompt-pack.md`、`stitch-ready-page-map.json` 已同步说明当前 HTML 包含视觉媒介层。T31 报告为 `tasks/T31/output/visual-media-layer-report-2026-08-19.md`；QA：domain-copy 9/9 pass，静态视觉媒介 QA 9/9 pass，浏览器 QA 18/18 pass，截图见 `tasks/T31/output/screenshots/`。本轮未调用 Stitch，未生成高保真 screen，未批准 H3-01 / H3-02。下一步如果用户要继续，应先让用户确认是继续精修低保真媒介层，还是选 Home / Platform / Customers 中 1-2 页进入高保真静态页试做；真实产品截图、产品视频、客户 Logo、客户现场照片、公司照片、证书图片和客户引用语原图仍需真实素材或人工确认。

2026-08-19 已完成 T30 低保真真实内容还原。后续打开最新入口 `tasks/T27/output/stitch-ready-low-fidelity/index.html`，看到的是 8 页真实内容预览，而不是元素配置说明；打开 `home.html`、`solutions.html`、`platform.html`、`integrations.html`、`customers.html`、`resources.html`、`about.html`、`demo.html`，页面底部的「頁面元素配置」卡片区已移除，元素要求已进入页面真实模块：客户品牌条、全链路营运拓扑、场景链路、平台工作台、产品视频入口、AMS / Connector 接入拓扑、资料流向、案例证据、资源入口、公司信号条和演示分流流程。T30 报告为 `tasks/T30/output/real-content-restoration-report-2026-08-19.md`；QA：domain-copy 9/9 pass，静态 QA pass，浏览器 QA 18/18 pass，截图见 `tasks/T30/output/screenshots/`。T29 仅保留为历史记录，不得继续按“页面底部说明卡”方向扩展。本轮未调用 Stitch，也未批准 H3-01 / H3-02。

2026-08-19 已完成 T29 低保真链接内嵌元素配置，现已被 T30 覆盖。T29 曾把元素配置摘要和模块卡片直接显示在页面中，用户指出这仍是说明型模块，不是目标方向；后续如果使用 `element-placement-map.json`，必须先转化为真实页面内容、流程、工作台、案例或表单结构，不能直接把配置说明展示给访客。

2026-08-19 已完成 T28 元素放置层补齐。后续如把 T27 低保真交给 Stitch，应在页面 HTML 与 Prompt Pack 之外，必须读取 `tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json` 和 `tasks/T27/output/stitch-ready-low-fidelity/element-placement-guide.md`。元素地图覆盖 8 页、41 个模块，逐项定义产品舞台、营运中枢拓扑、场景地图、Connector 网络、授权指标卡、实名案例卡、资源路由、支援查询板、公司网络、时间轴、服务生命周期和 Demo 表单分流；同时明确真实素材缺失时只能使用 fallback，不得生成虚构产品 UI、客户 Logo、客户照片、视频封面、证书图、未确认指标、SLA 或合作状态。Platform 已补齐 `CDBI / Finance` 产品演示入口卡，并调整为四列等权。QA：元素结构 pass，元素层 domain-copy 8/8 通过，可见 HTML domain-copy 9/9 通过，静态检查 pass，Platform 浏览器检查 pass。本轮未调用 Stitch，也未批准 H3-01 / H3-02。

2026-08-19 已完成 T27 对外 Stitch-ready 低保真整合包。下一步如果要把“最新全部页面低保真”交给 Stitch 或继续生成高保真，应优先使用 `tasks/T27/output/stitch-ready-low-fidelity/index.html`、`stitch-ready-page-map.json` 和 `stitch-ready-prompt-pack.md`，而不是直接使用 T25 内容核对稿或 T26 内部设计执行稿。T27 包含 8 个页面：首頁、解決方案、平台、整合能力、客戶案例、資源、關於餐道、預約產品演示；已清理对内说明、placeholder、英文 UI 标签、假 Logo 风险、未授权事实风险和错误产品名大小写，并替换为用户授权 SVG Logo。QA 结果：domain-copy 9/9 通过，静态检查 pass，Chrome + Playwright 9 页全页截图与交互检查 9/9 通过。仍不得由 Agent 自行批准 H3-01 低保真业务验收或 H3-02 `approved_and_locked`；本轮未调用 Stitch 生成新 screen。

T11.5 当前 Figma 整理页全站叙事审查、全页面逐板块审查、首页 12 条排查反馈回应、React / Next Home Hero QA4 进入动画示例、Stitch C v4 首页候选版、Evidence-First / Deep Inquiry 全局工作规则补丁、T14 业务专属性内容再生成 Brief、T15 旧官网 / PPT 页面模块证据矩阵 v1.0、T16 核心页面繁體中文内容骨架 v1.0、T17 核心页面低保真原型图、T18 客戶案例 / 關於餐道 低保真补齐、T19 行业文案能力落地、T20 人工确认关卡机制、T21 人工决策应用与品牌显示规则、T22 資源 / 預約產品演示低保真补齐、T23 低保真逐页文案业务 QA 与收紧、T24 产品名大小写敏感规则补丁、T25 低保真叙事局部重构，以及 T26 设计输入包与设计执行版低保真均已完成。2026-08-17 已继续补强 T26：`module-manifest.yaml` 已拆为 47 个独立模块，`asset-manifest.yaml` 已改为明确主模块 + `related_modules`，四个 storyboard 已补齐 Composition Contract，Manifest 级 domain-copy QA 47/47 通过，最终验证 `design-input-layer-final-verification-2026-08-17.json` 为 pass，目标完整性审计见 `objective-completion-audit-2026-08-17.md`。2026-08-17 已继续执行 T17 Stitch 高保真单页单目标流程：Home 最终稿已登记，Platform / Desktop / TC 已生成并收口到最终 screen `03fa757724764d32bc84634a727427b3`，正式 HTML / 目标图位于 `tasks/T17/output/design-handoff/.stitch/designs/`；首稿 `ea23e53acc3446a9bce5b1aa6a3d4dd6` 因硬性问题移入 `.stitch/superseded/platform/`，已只使用一次 `edit_screens` 修同一页面，并已清理图标英文 ligature 残留。最新内容核对原型仍为 `tasks/T17/output/low-fidelity-wireframe-prototype/index.html` 的 T25 版本；最新设计交付入口为 `tasks/T17/output/design-handoff/` 与 `tasks/T17/output/design-ready-wireframe/`。下一步如继续 Stitch，应按 `stitch/metadata.json` 推荐顺序从 `DEMO mobile` 或后续页面继续，不能重新生成 Home / Platform；继续前读取 `content/content-classification-inventory.json`、`module-manifest.yaml`、`motion-storyboards/*/storyboard.md`、`reference-map.yaml`、`asset-manifest.yaml`、对应 `stitch/*.md`、`.stitch/metadata.json`、Platform QA 报告和 `external-generation-readiness-summary-2026-08-16.md`。首页视觉母版、真实产品截图、产品视频、客户 Logo、案例图片和公司图片仍需确认或补齐；若继续修改任意 UI / 原型文案，必须先调用 `$domain-copy`，读取 `domain-copy/`，运行 QA 并保留报告；中文 / 繁體中文官网与原型默认使用「餐道」，不得用 `Candao` 替代；产品名大小写必须按 `case_sensitive_terms` 保留，例如 `iDMS` 和 `SaaS`，不得统一大写为 `IDMS` 或 `SAAS`；样式层也不得通过强制大小写改变 `iDMS`、`SaaS`、`AMS / Connector`、客户名或产品名。若涉及事实真伪、需求范围、业务验收或永久规则更新，必须先查看 `human-review/current-decision-queue.md`，不得由 Agent 自行批准。

补充：2026-08-16 已完成 T26；2026-08-17 已完成设计输入层补强。用户问是否需要到“重构”的程度；结论是需要重构到“设计输入层 / 交付协议”，但不推翻 T25 业务内容。T26 新增 `tasks/T17/output/design-handoff/`：content 分层、逐条文本分类清单、`.stitch/DESIGN.md`、design tokens、visual direction、component style map、47 个独立模块 manifest、reference map、asset manifest、missing-assets、asset cleanup plan、motion manifest、四个 Composition Contract storyboard、Stitch Prompt Pack 和 QA 报告；新增 `tasks/T17/output/design-ready-wireframe/`：8 个独立页面、共享样式和脚本，重点验证 Home / Platform / Demo，并补齐 Solutions / Integrations / Customers / Resources / About 的代表性交互状态和 390px 移动导航抽屉。T26 输出为 `tasks/T26/output/design-handoff-package-report-2026-08-16.md`、`tasks/T26/output/requirement-completion-audit-2026-08-16.md`、`tasks/T26/output/external-generation-readiness-summary-2026-08-16.md` 和 `tasks/T26/output/design-input-layer-restructure-patch-2026-08-17.md`；`content-classification-inventory.json` 共 592 条文本，`asset-manifest.yaml` 每项已有 `content_description`，8 个页面 prompt 均补“访客可见内容 / 模块呈现方式 / 参考图与素材文件”结构。domain-copy 基线 QA 11/11 通过，交互状态文案 QA 7/7 通过，Manifest 级 QA 47/47 通过，Chrome + Playwright 扩展交互检查 10/10 通过。首页视觉母版、真实产品截图、产品视频、客户 Logo、案例图片、公司图片仍缺失；未执行外部 Stitch / Figma 写入、未生成最终 Remotion 视频、未新增 `approved_and_locked`。

补充：2026-08-16 已完成 T25。用户提出当前低保真仍存在首页文案片面冗长、Complexity Map 维度混杂、Platform 像产品说明书、CTA 不完整、旧官网产品视频入口缺失、About 表达不专业和 SaaS / Data / Delivery / QA 模块依据不清等 11 项问题；本轮判断需要低保真叙事结构的局部重构，而不是全站推倒重来。T25 已更新 `tasks/T17/output/low-fidelity-wireframe-prototype/index.html`：Home 改为定位 + 复杂生态 + 规模证明 + 全链路能力总览；Complexity Map 改为餐饮 O2O 生态复杂度图；Platform 改为 6 项可切换能力地图；补齐 Solutions / Platform / Integrations CTA；新增产品视频入口候选；About 改为专业企业定位和服务交付能力。T25 输出为 `tasks/T25/output/low-fidelity-narrative-restructure-report-2026-08-16.md`；domain-copy QA 12/12 通过，Google Chrome + Playwright 8 页导航和 Platform 6 项切换验证通过。

补充：2026-08-15 已完成 T24。用户指出产品名称不能统一全部大写，部分产品名具有识别性，例如首字母小写、后续字母大写的 `iDMS`；本轮已将其落地为大小写敏感术语机制。T24 输出为 `tasks/T24/output/product-name-case-sensitive-rule-patch-2026-08-15.md`；正向 QA 3/3 通过，失败回归 3/3 按预期失败，T23 主 QA 重跑 13/13 通过，Google Chrome + Playwright 8 页渲染文本检查通过。

补充：2026-08-15 已完成 T23。逐页复核 8 页低保真，修正 Home / Solutions 的泛化标题、Customers 的 `一站式 / 閉環 / 提高效率` 残留、Integrations 的 `Can-Dao Connector`、`IDMS` 大小写不一致、About / Demo 长段，以及 `.block-kicker` 强制大写导致 `iDMS` 视觉术语错误的问题。T23 输出为 `tasks/T23/output/page-copy-business-audit-and-tightening-2026-08-15.md`；domain-copy QA 13/13 通过，Google Chrome + Playwright 8 页导航和截图验证通过。

补充：2026-08-15 已完成 T22。`資源` 页面已补支援中心、常见问题、接入指南、媒体与新闻、案例资源、查询表单和资源分流；`預約產品演示` 页面已补意图分流、场景选择、系统现况字段、演示重点摘要、提交后提示和支援分流。T22 输出为 `tasks/T22/output/resources-demo-low-fidelity-completion-2026-08-15.md`；domain-copy QA 10/10 通过，Google Chrome + Playwright 8 页导航和截图验证通过。

补充：2026-08-15 已完成 T21。用户对 H1 / H2 / H4 的确认已写入 `human-review/current-decision-queue.md`、`domain-copy/`、全局 `AGENTS.md` 和项目规则；H3-01 / H3-02 继续保留待人工答复。用户提供的 SVG Logo 已保存到 `assets/logo/candao-blue-logo.svg`，Home Hero 下方可使用该资产；Customers 可使用 PPT Slide 11 Performance 数据，客户案例使用实名案例并突出前后对比数据。T21 输出为 `tasks/T21/output/human-decisions-applied-2026-08-15.md`，正向 QA 10/10 通过，新增品牌显示失败回归可拦截中文 / 繁體中文页面中错误使用 `Candao`。

补充：2026-08-13 已将 `QA014 餐道官网 Hero QA4 进入动画` 从快捷语落地为 React / Next Home Hero 动效示例。实现文件为 `source/react-next-capability-prototype/src/components/candao/capability-prototype.tsx`、`source/react-next-capability-prototype/src/components/ui/background-beams.tsx` 和 `source/react-next-capability-prototype/src/app/globals.css`；记录和截图见 `tasks/T11.5/output/qa4-home-hero-motion-2026-08-13/qa4-home-hero-motion-implementation-and-design-qa-2026-08-13.md`。production 截图已包含默认首屏与 `prefers-reduced-motion: reduce` 首屏。`design-qa` 已执行对比但结果是 blocked / not passed，因为现有 Figma Home 源视觉包含未确认 Logo / 数字且不是本次合规动效基线；不能标记 passed。

补充：2026-08-13 已新增 `QA014 餐道官网 Hero QA4 进入动画` 快捷语示例，可在 `quick-actions` 选择器中搜索 `餐道`、`QA4`、`Hero` 或 `design-qa` 调用；项目记录见 `tasks/T11.5/output/qa4-candao-home-hero-motion-shortcut-example-2026-08-13.md`。该快捷语已进一步落地为 React / Next Home Hero 示例；本轮已有源视觉截图与实现截图，因此执行了 `design-qa` 对比，但结论是 blocked / not passed，不能标记 passed。

## Current Truth

- 2026-09-02 T61 已确认：Figma 当前有平台页高保真重设稿 `925:2 / Platform / Desktop 1440 / TC / Aceternity Mapping T61`，来源为原平台页 `488:350`，原稿保留未覆盖。T61 是后续页面执行样板：每个子板块单独匹配 Aceternity 参考、保留餐道原内容、按深浅区域选择版本、写回后做 Figma 读回与 domain-copy QA。
- 2026-09-02 T60 已确认：当前后续 Aceternity 高保真重设计应先按 `tasks/T60/output/aceternity-section-mapping-platform-integrations-customers-resources-about-demo-2026-09-02.md` 执行。Aceternity 只作为布局、视觉、交互和动效参考；现有 Figma 页面负责内容、模块顺序、图片和信息层级。Figma Make 仅用于复杂产品工作台、数据流、状态卡、多步表单等生成辅助，最终必须回到 Figma 拆层、命名、读回和 QA。浅色模块优先浅色样式，只有当前深色区才使用深色风格。
- 2026-09-02 T59 已确认：Figma 当前有解决方案英文重做版节点 `842:2 / Solutions / Desktop 1440 / EN / Revision 2`，来源为繁中解决方案节点 `447:8876` 的重新克隆和可编辑文本英文化；T58 旧英文稿 `812:2` 仍保留但不作为本次重做结果。可编辑文本已通过读回 QA 与 domain-copy QA。`Finance Center` 未进入英文页面可见文案，使用 `financial reconciliation`。Google Translate 当前不可达，访问失败证据已归档。
- 2026-09-02 T58 已确认：Figma 当前有英文解决方案节点 `812:2 / Solutions / Desktop 1440 / EN`，来源为繁中解决方案节点 `447:8876` 的克隆和可编辑文本英文化；可编辑文本已通过读回 QA 与 domain-copy QA。`Finance Center` 未进入英文页面可见文案，使用 `financial reconciliation`。Google Translate 当前不可达，访问失败证据已归档。
- 2026-09-01 T57 已确认：Figma 当前有英文首页节点 `656:2` / `Home / Desktop 1440 / EN`，来源为繁中首页 `336:7645` 的克隆和可编辑文本英文化；可编辑文本已通过读回 QA 与 domain-copy QA。Google Translate 当前不可达，访问失败证据已归档；如后续要求“完全英文视觉资产”，需另开资产本地化任务处理图片、Logo、矢量或截图中的内嵌中文。
- 2026-09-01 T56 仍为顶部参考路径链接的当前真相：顶部 `12` 条 Aceternity 来源文字已恢复为原始文字并设置真实 URL hyperlink，不应再改成官网 sitemap 文案，也不应删除原参考截图。

## Required Context

Read these files first:

- `tasks/T61/task.md`
- `tasks/T61/output/t61-platform-aceternity-mapping-implementation-report-2026-09-02.md`
- `tasks/T61/output/qa/t61-figma-platform-aceternity-readback-qa.json`
- `tasks/T61/output/t61-platform-copy-qa-report.json`
- `tasks/T61/output/screenshots/t61-platform-aceternity-mapping-figma-925-2.png`
- `tasks/T60/task.md`
- `tasks/T60/output/aceternity-section-mapping-platform-integrations-customers-resources-about-demo-2026-09-02.md`
- `tasks/T56/output/t56-figma-original-path-hyperlink-report-2026-09-01.md`
- `tasks/T11.5/output/figma-all-pages-section-audit-2026-08-12.md`
- `tasks/T15/output/old-website-ppt-to-page-module-evidence-matrix-v1.0-2026-08-14.md`
- `tasks/T59/task.md`
- `tasks/T59/output/t59-figma-solutions-en-revision2-report-2026-09-02.md`
- `tasks/T59/output/qa/t59-figma-solutions-en-revision2-readback-qa.json`
- `tasks/T59/output/qa/t59-solutions-en-revision2-copy-qa-result.json`
- `tasks/T59/output/screenshots/t59-solutions-en-revision2-figma-842-2.png`
- `tasks/T59/output/translations/t59-google-translate-access-check-2026-09-02.json`
- `tasks/T59/output/translations/t59-solutions-en-revision2-copy-map-2026-09-02.json`
- `tasks/T58/task.md`
- `tasks/T58/output/t58-figma-solutions-en-implementation-report-2026-09-02.md`
- `tasks/T58/output/qa/t58-figma-solutions-en-readback-qa.json`
- `tasks/T58/output/qa/t58-solutions-en-copy-qa-result.json`
- `tasks/T58/output/screenshots/t58-solutions-en-figma-812-2.png`
- `tasks/T58/output/translations/t58-google-translate-access-check-2026-09-02.json`
- `tasks/T58/output/translations/t58-solutions-en-copy-map-2026-09-02.json`
- `tasks/T57/task.md`
- `tasks/T57/output/t57-figma-home-en-implementation-report-2026-09-01.md`
- `tasks/T57/output/qa/t57-figma-home-en-readback-qa.json`
- `tasks/T57/output/qa/t57-home-en-copy-qa-result.json`
- `tasks/T57/output/qa/t57-home-en-screenshot-check-2026-09-01.json`
- `tasks/T57/output/screenshots/t57-home-desktop-en-figma-1440-full.png`
- `tasks/T57/output/translations/t57-google-translate-access-check-2026-09-01.json`
- `tasks/T57/output/translations/t57-home-en-copy-map-2026-09-01.json`
- `tasks/T57/output/translations/t57-home-en-figma-map-2026-09-01.json`
- `tasks/T56/task.md`
- `tasks/T56/output/t56-figma-original-path-hyperlink-report-2026-09-01.md`
- `tasks/T56/output/qa/t56-figma-original-path-link-readback-qa.json`
- `tasks/T56/output/screenshots/t56-figma-original-path-links-restored.png`
- `tasks/T55/task.md`
- `tasks/T55/output/t55-figma-top-path-hyperlink-correction-report-2026-09-01.md`
- `tasks/T55/output/qa/t55-figma-rollback-link-readback-qa.json`
- `tasks/T55/output/screenshots/t55-figma-top-path-links-after-rollback.png`
- `tasks/T54/task.md`
- `tasks/T54/output/t54-figma-final-hierarchy-links-report-2026-09-01.md`
- `tasks/T54/output/qa/t54-figma-link-readback-qa.json`
- `tasks/T54/output/qa/domain-copy-t54-figma-hierarchy-report.json`
- `tasks/T54/output/screenshots/t54-final-hierarchy-links-panel-after.png`
- `tasks/T53/task.md`
- `tasks/T53/output/candao-international-website-daily-summary-2026-08-28.xlsx`
- `tasks/T53/output/t53-excel-export-note-2026-08-28.md`
- `tasks/T52/task.md`
- `tasks/T52/output/t52-visual-polish-run-report-2026-08-27.md`
- `tasks/T52/output/prototype/index.html`
- `tasks/T52/output/contracts/t52-visual-polish-contract.json`
- `tasks/T52/output/qa/t52-visual-polish-coverage-report.json`
- `tasks/T52/output/qa/domain-copy-t52-visual-polish-report.json`
- `tasks/T52/output/screenshots/t52-visual-polish-1440-full.png`
- `tasks/T52/output/stitch-screen-32612aab-premium-variant.html`
- `tasks/T52/output/qa/t52-stitch-variant-static-qa-report.json`
- `tasks/T50/task.md`
- `tasks/T50/output/t50-public-hifi-cleanup-report-2026-08-27.md`
- `tasks/T50/output/prototype/index.html`
- `tasks/T50/output/contracts/t50-public-hifi-contract.json`
- `tasks/T50/output/qa/t50-public-hifi-coverage-report.json`
- `tasks/T50/output/qa/domain-copy-t50-public-report.json`
- `tasks/T50/output/screenshots/t50-public-hifi-1440-full.png`
- `tasks/T50/output/stitch-input/t50-public-hifi-stitch-brief-2026-08-27.md`
- `tasks/T49/task.md`
- `tasks/T49/output/t49-interactive-prototype-report-2026-08-27.md`
- `tasks/T49/output/prototype/index.html`
- `tasks/T49/output/contracts/t49-interaction-content-contract.json`
- `tasks/T49/output/qa/t49-interaction-coverage-report.json`
- `tasks/T49/output/qa/domain-copy-t49-interaction-report.json`
- `tasks/T49/output/screenshots/t49-interactive-prototype-1440-full.png`
- `tasks/T49/output/stitch-input/t49-interactive-workbench-stitch-prompt-2026-08-27.md`
- `tasks/T48/task.md`
- `tasks/T48/output/t48-high-fidelity-readiness-rework-report-2026-08-26.md`
- `tasks/T31/task.md`
- `tasks/T31/output/visual-media-layer-report-2026-08-19.md`
- `tasks/T31/output/scripts/add_visual_media_layer.py`
- `tasks/T31/output/scripts/qa_visual_media_low_fidelity.py`
- `tasks/T31/output/scripts/qa_browser_visual_media_low_fidelity.cjs`
- `tasks/T31/output/qa/domain-copy-t31-report.json`
- `tasks/T31/output/qa/static-visual-media-low-fidelity-report.json`
- `tasks/T31/output/qa/browser-visual-media-low-fidelity-report.json`
- `tasks/T31/output/screenshots/customers-1440.png`
- `tasks/T31/output/screenshots/customers-390.png`
- `tasks/T31/output/screenshots/platform-1440.png`
- `tasks/T31/output/screenshots/home-1440.png`
- `tasks/T30/task.md`
- `tasks/T30/output/real-content-restoration-report-2026-08-19.md`
- `tasks/T30/output/scripts/realize_elements_in_pages.py`
- `tasks/T30/output/scripts/qa_realized_low_fidelity.py`
- `tasks/T30/output/scripts/qa_browser_low_fidelity.cjs`
- `tasks/T30/output/qa/domain-copy-t30-report.json`
- `tasks/T30/output/qa/browser-realized-low-fidelity-report.json`
- `tasks/T30/output/screenshots/home-1440.png`
- `tasks/T30/output/screenshots/home-390.png`
- `tasks/T30/output/screenshots/integrations-1440.png`
- `tasks/T30/output/screenshots/customers-1440.png`
- `tasks/T29/task.md`
- `tasks/T29/output/inline-element-integration-report-2026-08-19.md`
- `tasks/T29/output/scripts/integrate_element_sections.py`
- `tasks/T29/output/qa/t29-inline-visible-copy-qa-result-2026-08-19.json`
- `tasks/T29/output/qa/t29-inline-static-check-2026-08-19.json`
- `tasks/T29/output/qa/t29-inline-browser-check-2026-08-19.json`
- `tasks/T28/task.md`
- `tasks/T28/output/element-placement-layer-report-2026-08-19.md`
- `tasks/T28/output/qa/element-placement-structure-check-2026-08-19.json`
- `tasks/T28/output/qa/element-placement-copy-qa-result-2026-08-19.json`
- `tasks/T28/output/qa/stitch-ready-visible-copy-qa-result-after-elements-2026-08-19.json`
- `tasks/T28/output/qa/stitch-ready-static-check-after-elements-2026-08-19.json`
- `tasks/T28/output/qa/platform-browser-check-after-element-card-2026-08-19.json`
- `tasks/T27/output/stitch-ready-low-fidelity/element-placement-guide.md`
- `tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`
- `tasks/T27/task.md`
- `tasks/T27/output/stitch-ready-low-fidelity/README.md`
- `tasks/T27/output/stitch-ready-low-fidelity/index.html`
- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-page-map.json`
- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-prompt-pack.md`
- `tasks/T27/output/stitch-ready-low-fidelity-package-report-2026-08-19.md`
- `tasks/T27/output/qa/stitch-ready-low-fidelity-copy-qa-result-2026-08-19.json`
- `tasks/T27/output/qa/stitch-ready-low-fidelity-static-check-2026-08-19.json`
- `tasks/T27/output/qa/stitch-ready-low-fidelity-browser-check-2026-08-19.json`
- `projects/candao-international-website/AGENTS.md`
- `human-review/human-confirmation-gates.md`
- `human-review/current-decision-queue.md`
- `tasks/T26/output/design-handoff-package-report-2026-08-16.md`
- `tasks/T26/output/requirement-completion-audit-2026-08-16.md`
- `tasks/T26/output/design-input-layer-restructure-patch-2026-08-17.md`
- `tasks/T26/output/external-generation-readiness-summary-2026-08-16.md`
- `tasks/T26/output/design-ready-copy-qa-result-2026-08-16.json`
- `tasks/T26/output/design-ready-interaction-copy-qa-result-2026-08-16.json`
- `tasks/T26/output/module-manifest-copy-qa-result-2026-08-17.json`
- `tasks/T26/output/design-input-layer-final-verification-2026-08-17.json`
- `tasks/T26/output/objective-completion-audit-2026-08-17.md`
- `tasks/T26/output/design-ready-browser-check-2026-08-16.json`
- `tasks/T26/output/design-ready-interaction-browser-check-2026-08-16.json`
- `tasks/T17/output/design-handoff/precheck.md`
- `tasks/T17/output/design-handoff/content/content-source.yaml`
- `tasks/T17/output/design-handoff/content/content-classification-inventory.json`
- `tasks/T17/output/design-handoff/content/content-public.yaml`
- `tasks/T17/output/design-handoff/module-manifest.yaml`
- `tasks/T17/output/design-handoff/.stitch/DESIGN.md`
- `tasks/T17/output/design-handoff/design-tokens.json`
- `tasks/T17/output/design-handoff/asset-manifest.yaml`
- `tasks/T17/output/design-handoff/missing-assets.md`
- `tasks/T17/output/design-handoff/motion-manifest.yaml`
- `tasks/T17/output/design-handoff/stitch/GLOBAL-CONTEXT.md`
- `tasks/T17/output/design-ready-wireframe/home.html`
- `tasks/T17/output/design-ready-wireframe/platform.html`
- `tasks/T17/output/design-ready-wireframe/demo.html`
- `tasks/T17/output/design-ready-wireframe/screenshots/t26-home-1440.png`
- `tasks/T17/output/design-ready-wireframe/screenshots/t26-platform-1440.png`
- `tasks/T17/output/design-ready-wireframe/screenshots/t26-demo-1440.png`
- `tasks/T17/output/design-ready-wireframe/screenshots/t26-demo-390.png`
- `tasks/T25/output/low-fidelity-narrative-restructure-report-2026-08-16.md`
- `tasks/T25/output/low-fidelity-narrative-restructure-qa-result-2026-08-16.json`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-home-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-solutions-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-platform-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-integrations-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-customers-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-resources-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-about-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-demo-1440-full.png`
- `tasks/T24/output/product-name-case-sensitive-rule-patch-2026-08-15.md`
- `tasks/T24/output/product-name-case-sensitive-qa-result-2026-08-15.json`
- `tasks/T24/output/product-name-case-sensitive-failure-result-2026-08-15.json`
- `tasks/T23/output/page-copy-business-audit-and-tightening-2026-08-15.md`
- `tasks/T23/output/page-copy-tightening-qa-result-2026-08-15.json`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-home-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-solutions-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-platform-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-integrations-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-customers-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-resources-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-about-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-demo-1440-full.png`
- `tasks/T21/output/human-decisions-applied-2026-08-15.md`
- `tasks/T22/output/resources-demo-low-fidelity-completion-2026-08-15.md`
- `tasks/T22/output/resources-demo-copy-qa-result-2026-08-15.json`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t22-resources-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t22-demo-1440-full.png`
- `tasks/T21/output/qa-regression-result-after-brand-rule-2026-08-15.json`
- `tasks/T21/output/qa-brand-display-failure-result-2026-08-15.json`
- `assets/logo/candao-blue-logo.svg`
- `tasks/T20/output/human-confirmation-points-analysis-2026-08-15.md`
- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`
- `domain-copy/examples.md`
- `domain-copy/copy-qa-cases.md`
- `domain-copy/approved-copy-locks.yaml`
- `tasks/T19/output/domain-copy-capability-report-2026-08-15.md`
- `tasks/T17/output/low-fidelity-wireframe-prototype/index.html`
- `tasks/T17/output/low-fidelity-wireframe-prototype-report-2026-08-15.md`
- `tasks/T18/output/customers-about-low-fidelity-supplement-report-2026-08-15.md`
- `tasks/T16/output/core-pages-tc-content-skeleton-v1.0-2026-08-14.md`
- `tasks/T15/output/old-website-ppt-to-page-module-evidence-matrix-v1.0-2026-08-14.md`
- `tasks/T11.5/output/evidence-first-global-workflow-rule-2026-08-14.md`
- 旧官网产品页：`https://www.can-dao.com.hk/#/product`
- 本地 PPT：`/Users/victorwong/Downloads/Candao Introduction 202401_L.pptx`

For current Figma narrative audit and next visual correction, also read:

- `tasks/T14/output/business-specific-content-regeneration-brief-2026-08-14.md`
- `tasks/T11.5/output/stitch-cv4-home-generation-report-2026-08-13.md`
- `tasks/T11.5/output/stitch-cv4-home/home-operations-hub-complete-qa-full-1440.png`
- `tasks/T11.5/output/homepage-feedback-response-and-optimization-plan-2026-08-12.md`
- `tasks/T11.5/output/figma-all-pages-section-audit-2026-08-12.md`
- `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12.md`
- `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12/01-home.png`
- `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12/02-solutions.png`
- `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12/03-platform.png`
- `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12/04-integrations.png`
- `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12/05-customers.png`
- `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12/06-resources.png`
- `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12/07-about.png`
- `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12/08-demo.png`

For shadcn / Aceternity / React implementation, also read:

- `tasks/T11.6/task.md`
- `tasks/T11.6/output/shadcn-aceternity-mcp-hero-use-case-2026-08-11.md`
- `tasks/T11.6/output/react-next-capability-prototype-delivery-2026-08-11.md`
- `tasks/T11.6/output/figma-aceternity-reference-workflow-memory-2026-08-11.md`
- `source/react-next-capability-prototype/src/components/candao/capability-prototype.tsx`
- `source/react-next-capability-prototype/src/lib/candao-content.ts`
- `source/react-next-capability-prototype/components.json`

For current Aceternity Figma replacement, also read:

- `tasks/T11.5/output/aceternity-figma-replacement-plan-and-home-sample-2026-08-12.md`
- `tasks/T11.5/output/aceternity-visible-effects-v2-correction-2026-08-12.md`
- `tasks/T11.5/output/figma-aceternity-home-visible-effects-v2-2026-08-12.png`
- `tasks/T11.5/output/figma-aceternity-home-visible-effects-evidence-v2-2026-08-12.png`
- `tasks/T11.5/output/figma-aceternity-replacement-plan-2026-08-12.png`
- `tasks/T11.5/output/figma-aceternity-home-replacement-test-2026-08-12.png`

1. `/Users/victorwong/Documents/Codex/Candao-workspace/AGENTS.md`
2. `PROJECT.md`
3. `RULES.md`
4. `STATE.md`
5. `TASKS.md`
6. `tasks/T09/task.md`
7. `tasks/T03/output/candao-international-website-strategy-v1.0-2026-08-02.md`
8. `tasks/T04/output/website-information-architecture-2026-08-02.md`
9. `tasks/T05/output/website-sitemap-2026-08-02.md`
10. `tasks/T05/output/t05-v1.1-sitemap-scope-supplement-note-2026-08-03.md`
11. `tasks/T06/output/website-copy-document-2026-08-03.md`
12. `tasks/T06/output/t06-v1.1-copy-optimization-note-2026-08-03.md`
13. `tasks/T07/output/final-website-copy-v1.0-2026-08-03.md`
14. `tasks/T07/output/t07-v1.1-final-copy-supplement-note-2026-08-03.md`
15. `tasks/T07/output/t07-final-copy-execution-note-2026-08-03.md`
16. `tasks/T08/output/website-ux-specification-2026-08-03.md`
17. `tasks/T08/output/t08-v1.1-design-execution-supplement-note-2026-08-03.md`
18. `tasks/T08/output/international-website-ux-planning-agent-spec-2026-08-03.json`
19. `tasks/T08/output/agent-pd-run-note-2026-08-03.md`
20. `tasks/T09/output/website-prototype-validation-2026-08-03.md`
21. `tasks/T09/output/t09-prototype-validation-execution-note-2026-08-03.md`
22. `tasks/T09/output/t09-v1.1-prototype-validation-supplement-note-2026-08-03.md`
23. `tasks/T10/task.md`
24. `tasks/T10/output/website-visual-direction-2026-08-03.md`
25. `tasks/T10/output/t10-v1.1-visual-direction-supplement-note-2026-08-03.md`
26. `tasks/T10/output/international-website-visual-design-agent-spec-2026-08-03.json`
27. `tasks/T10/output/agent-pd-run-note-2026-08-03.md`
28. `tasks/T10/output/t10-visual-direction-execution-note-2026-08-03.md`
29. `tasks/T11/task.md`
30. `tasks/T11/output/website-high-fidelity-visual-design-2026-08-03.md`
31. `tasks/T11/output/t11-high-fidelity-visual-design-execution-note-2026-08-03.md`
32. `tasks/T11/output/t11-v1.1-visual-prototype-generation-note-2026-08-03.md`
33. `tasks/T11.5/task.md`
34. `tasks/T11.5/output/website-visual-prototype-package-2026-08-03.md`
35. `tasks/T11.5/output/t11.5-figma-visual-prototype-execution-note-2026-08-03.md`
36. `tasks/T11.5/output/t11.5-tc-production-figma-correction-2026-08-03.md`
37. Figma 原型：`https://www.figma.com/design/BMXIuVRzSUUt9YNhVAQA6K`
38. Figma 当前范围重置：`tasks/T39/output/figma-t11-5-web-desktop-reset-report-2026-08-20.md`
39. Figma 历史页：`03 Desktop Pages / Bilingual Validation` 仅作素材与历史探索参考；`04 不保留 / Mobile Pages / Bilingual Validation`、`05 不保留 / Motion Storyboards`、`06 不保留 / Prototype Flow`、`07 不保留 / Visual Review`、`08 不保留 / Desktop Pages / TC Production`、`09 不保留 / Mobile Pages / TC Production`、`10 不保留 / TC Production Review` 不得作为当前输入。
40. `tasks/TFIX-LOCALIZATION/output/Website Production Localization Guideline.md`
41. `tasks/T05/output/website-sitemap-v1.2.md`
42. `tasks/T07/output/final-website-copy-v1.1.md`
43. `tasks/T08/output/website-ux-specification-v1.2.md`
44. `tasks/T09/output/website-prototype-validation-v1.2.md`
45. `tasks/T10/output/website-visual-direction-v1.2.md`
46. `tasks/T11/output/website-high-fidelity-visual-design-v1.2.md`
47. `tasks/T11.5/output/t11.5-stitch-ai-web-generation-localization-v1.2.md`
48. `tasks/T11.5/output/Website Generation Prompt.md`
49. `tasks/T11.5/output/AI Generated Website Pages.md`
50. `tasks/T11.5/output/AI Generated Website Review.md`
51. `tasks/T11.5/output/ai-website-generation-prompt-agent-spec-2026-08-03.json`
52. `tasks/T11.5/output/t11.5-c-stitch-ai-web-generation-execution-note-2026-08-03.md`
53. `tasks/T11.5/output/International SaaS Website Art Director Agent.md`
54. `tasks/T11.5/output/international-saas-website-art-director-agent-spec-2026-08-05.json`
55. `tasks/T11.5/output/Home Visual Critique.md`
56. `tasks/T11.5/output/Platform Product Demo Visual Critique.md`
57. `tasks/T11.5/output/Candao Visual Design Rules.md`
58. `tasks/T11.5/output/t11.5-b-visual-director-agent-execution-note-2026-08-05.md`
59. `tasks/T11.5/output/visual-director-audit-assets/`
60. `tasks/T11.5/output/stitch-generated-artifacts-index-2026-08-05.md`
61. `tasks/T11.5/output/stitch-fullsize-screenshots/`
62. `tasks/T11.5/output/stitch-generated-website-result-2026-08-04.md`
63. `tasks/T11.5/output/stitch-generated-website-review-2026-08-04.md`
64. `tasks/T11.5/output/t11.5-c-stitch-connected-execution-note-2026-08-04.md`
65. `source/stitch-interactive-prototype/index.html`
66. `source/stitch-interactive-prototype/pages/`
67. `source/stitch-interactive-prototype/screenshots/`
68. `tasks/T11.5/output/stitch-interactive-prototype-2026-08-05.md`
69. `tasks/T11.5/output/stitch-interactive-prototype-screenshots/`
70. `.stitch/DESIGN.md`
71. `.stitch/designs/home-desktop-tc.html`
72. `.stitch/designs/home-desktop-tc.png`
73. `.stitch/designs/platform-v2-desktop-tc.html`
74. `.stitch/designs/platform-v2-desktop-tc.png`
75. `.stitch/designs/order-management-desktop-tc.html`
76. `.stitch/designs/order-management-desktop-tc.png`
77. `.stitch/designs/delivery-v2-desktop-tc.html`
78. `.stitch/designs/delivery-v2-desktop-tc.png`
79. `tasks/TFIX-LOCALIZATION/output/Website Localization Review Report.md`
80. `tasks/TFIX-LOCALIZATION/output/localization-second-check-2026-08-03.md`
81. `tasks/TFIX-LOCALIZATION/output/website-production-localization-reviewer-agent-spec-2026-08-03.json`
82. `tasks/T12/task.md`
83. `tasks/T11.5/output/Design Execution Skill Assessment.md`
84. `tasks/T11.5/output/Website Design Skill Setup Report.md`
85. `tasks/T11.5/output/International SaaS Website Visual Benchmark.md`
86. `tasks/T11.5/output/Website Visual Direction Exploration.md`
87. `tasks/T11.5/output/Home Design Review.md`
88. `tasks/T11.5/output/Platform High Fidelity Design.md`
89. `tasks/T11.5/output/Platform UI Motion Storyboard.md`
90. `tasks/T11.5/output/Product Motion Storyboard.md`
91. `tasks/T11.5/output/Candao Website Design System v1.0.md`
92. `tasks/T11.5/output/High Fidelity Design Review Report.md`
93. `tasks/T11.5/output/t11.5-a-design-execution-skill-and-figma-execution-note-2026-08-05.md`
94. `tasks/T11.5/output/website-high-fidelity-design-execution-workflow-agent-spec-2026-08-05.json`
95. `tasks/T11.5/output/assets/candao-hero-restaurant-operations-blue-2026-08-05.png`
96. Figma 高保真节点：Home Desktop `47:2`，Home Mobile `49:2`，Platform Desktop `48:2`，Platform UI Motion `50:2`，Product Motion `50:74`，Design System `51:2`
97. `tasks/T11.5/output/t11.5-a2-image2-visual-refinement-2026-08-05.md`
98. `tasks/T11.5/output/assets/image2-visual-refinement/`
99. `tasks/T11.5/output/figma-image2-refinement-screenshots/`
100. Figma Image2 精修节点：Home Product `57:3` / `57:19` / `57:35`，Platform `57:50` / `57:55` / `57:56`，Home Mobile `57:72` / `57:79` / `57:86`
101. `tasks/T11.5/output/website-copy-interaction-confirmation-matrix-v0.1-2026-08-07.md`
102. `tasks/T11.5/output/stitch-cv2-first-level-artifacts-index-2026-08-08.md`
103. `source/stitch-first-level-v2/index.html`
104. `source/stitch-first-level-v2/assets/`
105. `.stitch/designs/cv2-first-level/`
106. `tasks/T11.5/output/assets/cv2-first-level/`
107. `tasks/T11.5/output/stitch-cv2-first-level-screenshots/`
108. `tasks/T11.5/output/stitch-cv2-first-level-local-prototype-screenshots/`
109. `tasks/T11.5/output/stitch-project-cleanup-report-2026-08-10.md`
110. `tasks/T11.5/output/stitch-cv2-cleanup/`
111. `.stitch/designs/cv2-cleanup/`
112. `tasks/T11.5/output/website-directory-content-gap-fill-v0.2-2026-08-10.md`
113. `tasks/T11.5/output/website-copy-interaction-confirmation-matrix-v0.2-2026-08-10.md`
114. `tasks/T11.5/output/website-solutions-platform-differentiation-update-v0.3-2026-08-10.md`
115. `tasks/T11.5/output/website-copy-interaction-confirmation-matrix-v0.3-solutions-platform-2026-08-10.md`
116. `tasks/T11.5/output/stitch-cv3-first-level-output-report-2026-08-11.md`
117. `tasks/T11.5/output/stitch-cv3-first-level/`
118. `tasks/T11.5/output/stitch-cv3-first-level-fullsize-screenshots/`
119. `.stitch/designs/cv3-first-level/`
120. `tasks/T11.5/output/stitch-cv3-first-level/00-start-here-cv3-review.html`
121. `tasks/T11.5/output/stitch-cv3-first-level/00-start-here-cv3-review.png`
122. `tasks/T11.6/output/react-next-capability-prototype-delivery-2026-08-11.md`
123. `tasks/T11.6/output/react-next-capability-prototype-screenshots/`
124. `source/react-next-capability-prototype/`
125. `tasks/T11.6/output/figma-aceternity-reference-workflow-memory-2026-08-11.md`

## Current Task

- ID: `T26`
- Path: `tasks/T26/task.md`
- Status: 已完成设计输入包与设计执行版低保真，把 T25 内部内容核对型低保真转换为后续 Stitch / Figma / Remotion / 前端可用的中间层，并完成 domain-copy QA、浏览器渲染和代表页交互检查。
- Status Update 2026-08-16: 下一步建议先评审 `tasks/T17/output/design-ready-wireframe/home.html`、`platform.html` 和 `demo.html`，确认首页视觉母版、真实产品截图、产品视频、客户 Logo、案例图片和公司图片；不要越过 H3-01 / H3-02 直接批量生成高保真或生产前端。

## Notes For Next AI

- 2026-08-13 Quick Actions 已补充餐道官网 Hero QA4 单独示例，快捷语库为 `/Users/victorwong/.codex/skills/quick-actions/references/shortcut-library.md`，选择器为 `/Users/victorwong/.codex/skills/quick-actions/assets/quick-actions-picker.html`。
- 2026-08-13 用户要求先把首页修改关键词放到 Stitch 生成最新画面。已生成当前候选版 `C v4 / 首頁 - 餐道國際 / Desktop TC / 營運中樞完整版 (QA)`，Screen ID `9b20c9a3865b4c799f473ee1b2679487`。不要以早期短页版 `99b1cad57a804f529ea01c92b7259f47` 或中间长页版 `7b459e9c35b04bd9aa38b6fcbfd38555` 作为当前评审基准。查看本地完整截图：`tasks/T11.5/output/stitch-cv4-home/home-operations-hub-complete-qa-full-1440.png`。下一步可按 Stitch 建议更新总览索引页，将该 C v4 首页标记为候选。
- 2026-08-12 用户指出上一轮反馈偏首页，因此已补充全页面逐板块审查报告：`tasks/T11.5/output/figma-all-pages-section-audit-2026-08-12.md`。该文档覆盖 8 个页面所有主要板块，比 `figma-current-page-narrative-audit-2026-08-12.md` 更适合作为下一轮修稿清单。
- 2026-08-12 用户继续提出 12 条首页具体排查反馈，已新增回应与优化方案：`tasks/T11.5/output/homepage-feedback-response-and-optimization-plan-2026-08-12.md`。已确认本地 PPT `/Users/victorwong/Downloads/Candao Introduction 202401_L.pptx` 可读取，后续应补一份 `PPT → 页面模块映射表`，用于把首页及所有内页板块绑定到 PPT 页码、产品能力、截图、案例、公开数字和待确认项。
- 2026-08-12 已完成当前 Figma 整理页叙事审查，报告为 `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12.md`，截图证据目录为 `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12/`。后续修 Figma / Stitch 时，应先继承该报告的主线，而不是只逐页补内容。
- 当前全站主线为：`Home 建立认知 -> Solutions 确认场景 -> Platform 看实现方式 -> Integrations 验证接入 -> Customers 证明落地 -> Resources 降低疑问 -> About 建立企业可信 -> Demo 完成联系与分流`。
- 当前最大重复：Home、Solutions、Platform 都在讲“多渠道、门店、配送、数据进入统一工作流”。修正原则是 Home 只保留精简产品故事和导流，Solutions 只讲业务场景，Platform 才展开 Capability Map、Workflow、UI Demo 和 Data Flow。
- 当前最高风险：Home 出现 Airbnb / HubSpot / Google / Microsoft / Walmart / FedEx 等无关 Logo；Home、Solutions、Customers 有 `5000+`、`500M+`、`200K+`、`4.5B+`、`142`、`38`、`50+`、`99.9%` 等未确认数字；Customers 不能虚构客户、Logo、认证或指标。
- 2026-08-12 已通过 Figma MCP 在 `BMXIuVRzSUUt9YNhVAQA6K` / `03 Desktop Pages / Bilingual Validation` 新增 Aceternity 全站替换规划板 `111:2` 和首頁测试样例 `111:59`；不要覆盖原 `首頁` Frame `84:468`，除非用户明确要求直接替换原稿。
- 首页样例遵循：目标替换内容决定文案与信息顺序，Aceternity 决定展示方法和动效参考。已用 Hero Images Grid、BackgroundBeams、TextGenerateEffect、MovingBorder、Feature Bento、ContainerScroll static storyboard、Logo Cloud fallback、CTA Masonry 和 Four Grid Footer。
- Figma 回读验证：首頁样例 7 个区块、175 个文本节点、3 个图片节点；字体扫描通过，未发现非允许词英文残留。截图备份见 `tasks/T11.5/output/figma-aceternity-home-replacement-test-2026-08-12.png`。
- 2026-08-12 已追加 Aceternity 可见化纠偏版：`首頁 / Aceternity Visible Effects V2 / Desktop TC` Node `120:2`，Evidence 板 Node `120:573`。V2 回读验证：7 个区块、168 个文本节点、3 个图片节点；效果层数量为 `BackgroundBeams` 16、`TextGenerateEffect` 7、`MovingBorder` 18、`Bento Skeleton` 143、`ContainerScroll` 72、`Logo Cloud` 36；生产页可见英文残留为 0。后续评审请优先看 V2，不再以 `111:59` 作为当前首页效果判断。
- 下次继续替换时优先顺序建议为：`解決方案`、`平台`、`整合能力`、`預約產品演示`，因为这四页能最快验证场景表达、产品能力、整合目录和转化表单。
- 2026-08-11 已创建 React / Next.js + Tailwind 能力全景原型：`source/react-next-capability-prototype/`。本地 dev server 入口为 `http://localhost:4186`；Next 16 dev resource 请使用 `localhost`，不要用 `127.0.0.1`。
- 原型已覆盖 9 个主要区块和导航 / Mega Menu / 场景切换 / 能力筛选 / 详情切换 / 整合分类 / Demo 意图分流等交互。它是能力暴露与交互验证台，不是最终官网内容定稿；用户已确认后续会在 Figma 上实现最准确的内容设计。
- 长期规则：用户后续可以直接贴图，不必写长描述。若输入包含 Figma 内容图和 Aceternity 组件截图 / 名称，默认按“Figma = 文案、图片、内容顺序、模块层级、静态视觉；Aceternity / shadcn = 展示方法、交互动效、布局参考；React / Next = 工程落地”处理。不要复制 Aceternity 示例中的无关品牌、Logo 或英文业务文案。
- shadcn MCP config 已把 `--cwd` 指向 `source/react-next-capability-prototype/`，但当前会话中 MCP server 可能仍沿用旧 cwd；需要下次重启 Codex 后再用 MCP 读取该工程的 `components.json` / registry。
- T11.6 验证结果：`pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build`、Playwright desktop 1440 / mobile 390 截图均已通过；交付说明见 `tasks/T11.6/output/react-next-capability-prototype-delivery-2026-08-11.md`。
- 2026-08-11 已在 Stitch 中完成 C v3 关键页面输出：`解決方案`、`平台 Fixed QA`、`資源 Fixed`，并新增 `00 Candao C v3 保留版索引 / 2026-08-11`。随后按用户反馈继续生成 `資源 模組化修正版` 和 `關於餐道 QA 修正版`。后续查看 Stitch 时先看 C v3 索引和本次新增的可见标题，不要再以旧探索图或素材 Screen 作为当前效果判断。
- 用户无法在 Stitch UI 中看到 Screen ID，因此后续不要用 ID 指导用户定位页面。应让用户先找 `00 从这里开始看 / Candao C v3 当前评审版`，该页是肉眼定位入口。
- Stitch C v3 当前评审基准：`解決方案` Screen ID `4188f2a7f3f84566b5644b19efdedadd`；`平台 Fixed QA` Screen ID `0386a1f4c8a34c438d596d2cda0c4022`；`資源 模組化修正版` Screen ID `d2b440264f1d435e99052f430177c868`；`關於餐道 QA 修正版` Screen ID `06f4fee9e4264d5c82415e97c2a7eb67`；C v3 索引 Screen ID `9de35f83d35d4584802ec4f9af450d20`。
- Home 需重新纳入当前评审基准并补齐 v3 导航 / 场景命名 / Product Showcase；Integrations / Customers / Contact 仍需补 `資源` 导航、v3 页脚一致性和未确认事实风险。
- 本地备份和大图入口：`tasks/T11.5/output/stitch-cv3-first-level/`、`tasks/T11.5/output/stitch-cv3-first-level-fullsize-screenshots/`、`.stitch/designs/cv3-first-level/`。
- 本项目的语言规范是硬性前置条件，不是风格建议。
- 内部策略、规划、执行、审核文档使用简体中文。
- 官网实际展示文案使用繁体中文 + 英文，不输出简体中文网页文案。
- T05 需要输出简体中文 + 英文页面名称，便于对应官网导航。
- T13 内部版本使用简体中文，并包含繁体中文 + 英文官网 Copy 附录。
- T01 已完成，核心输入文档在 `tasks/T01/output/candao-international-website-input-document-2026-08-02.md`，当前版本为 v1.1。
- T01 的原始详细任务交代已补回 `tasks/T01/task.md` 的 `Original Detailed Brief`，可直接查看最初要求。
- v1.1 新增章节：`3.5 竞品启发与可应用规则`、`5.9 官网表达资产整理`、`5.10 产品能力到解决方案映射`、`6. 首页素材池`、`8.5 后续 Agent 语言规则`。
- T01 整理的 PPT 数据存在冲突：品牌数、门店数、每日订单数等必须经过业务确认后才能用于正式官网。
- Excel 菜单目录只是初稿，T02/T04/T05 需要重新判断是否补充 Home、Products、Customers/Case Studies、Security、Contact/Sales 等页面。
- T02 策略输出应围绕官网定位、首页战略、客户问题、业务结果和转化路径展开，不要复述成资料汇总。
- T02 已完成，输出为 `tasks/T02/output/website-strategy-analysis-2026-08-02.md`。
- T02 已升级为 v1.1，新增章节：`9. 官网内容策略原则`、`10. 用户-页面映射关系`、`11. 产品体系官网表达层级`、`12. 战略决策矩阵`。
- T02 使用 `$agent-pd` design-only 生成 Agent 规格，副本在 `tasks/T02/output/international-website-strategy-agent-spec-2026-08-02.json`，运行记录在 `tasks/T02/output/agent-pd-run-note-2026-08-02.md`。
- T03 任务定义已调整：重点是战略取舍和冻结，不是重新分析资料。
- T03 已完成，输出为 `tasks/T03/output/candao-international-website-strategy-v1.0-2026-08-02.md`。
- T03 冻结定位：中文定位为“全球餐饮智能运营 SaaS 平台”，English Positioning 为 `Intelligent SaaS Platform for Global Restaurant Operations`。
- T03 已升级为 v1.1 执行护栏版，在第 12 节新增品牌语气 Tone of Voice、全站视觉原则、页面设计优先级、产品展示体验原则和 T03 Review Gate。
- T04 应继续使用简体中文，页面英文名称、导航名和组件名可保留英文；不要生成最终官网页面 Copy。
- T04 信息架构必须遵守 T03 战略：Home 是品牌与转化入口；Solutions 和 Products / Platform 分层；Integrations 独立成一级入口；Contact / Demo 是转化闭环。
- T04 已调整任务边界：必须读取 T03；禁止重新判断官网定位；禁止回到 Excel 原始菜单直接搬运；禁止重新展开品牌策略分析；目标是将战略转化为网站结构、页面关系和用户路径。
- T04 已完成，输出为 `tasks/T04/output/website-information-architecture-2026-08-02.md`。
- T04 使用 `$agent-pd` design-only 生成 IA Agent 规格，副本在 `tasks/T04/output/website-information-architecture-agent-spec-2026-08-02.json`，运行记录在 `tasks/T04/output/agent-pd-run-note-2026-08-02.md`。
- T04 建议一级导航为：Home、Solutions、Platform、Integrations、Customers、Resources、About、Contact / Book a Demo。
- T04 已升级为 v1.1，新增页面商业目标、页面内容优先级、产品页面内容结构规范、页面视觉复杂度等级和 Customers 页面策略补充。
- T04 v1.1 修订记录为 `tasks/T04/output/t04-v1.1-ia-execution-supplement-note-2026-08-02.md`。
- T05 应直接使用 T04 第 9 节 `T05 Sitemap 输入` 生成正式 Sitemap，页面目标和说明使用简体中文，每个页面必须保留英文页面名称。
- T05 输出字段必须包含：页面名称、英文名称、URL、层级、页面目标、目标用户、核心内容、CTA、Phase、状态。
- T05 不应重新分析或创造 IA，不得新增未经 T04 支撑的主导航。
- T05 已完成，输出为 `tasks/T05/output/website-sitemap-2026-08-02.md`。
- T05 执行记录为 `tasks/T05/output/t05-sitemap-execution-note-2026-08-02.md`。
- T05 已冻结页面结构：Home、Solutions、Platform、Integrations、Customers、Resources、About、Contact / Book a Demo、Footer Legal。
- 2026-08-10 目录补齐 v0.2 已确认一个执行缺口：T05 原本包含 `Resources / 資源` 一级结构，C v2 只生成了 7 个一级主页，遗漏 `資源`。后续不要再把 Resources 仅视为 Footer / Phase 2，除非用户明确否定。
- T05 已升级为 v1.1，修订记录为 `tasks/T05/output/t05-v1.1-sitemap-scope-supplement-note-2026-08-03.md`。
- T05 v1.1 新增：页面优先级矩阵、页面独立标准、Integrations 第一阶段收敛策略、Customers 第一阶段展示策略、Page Template 类型、第一阶段实际建设范围、T06 内容深度控制规则。
- T05 v1.1 P0 核心页面：Home、Solutions Overview、Restaurant Chains、Platform Overview、Order Management、Delivery Management、Integrations Overview、Customers Overview、Contact / Book a Demo。
- T06 必须以 T05 Sitemap 为页面清单主输入，继承每个页面的页面目标、主要内容和 CTA。
- T06 官网实际展示内容必须输出繁体中文 + 英文；不得输出简体中文正式网页文案。
- T06 的 `策略说明` 可用简体中文作为内部说明，但不能替代官网展示文案。
- T06 必须按 P0、P1、结构预留、Phase 2 控制内容深度；不要为所有页面生成同等长度和同等细节。
- T06 不应为 Phase 2 页面输出完整正式 Copy。
- T06 已在 `tasks/T06/task.md` 中加入内容深度控制、Platform 页面结构、Integrations 收敛策略和 Customers 授权边界。
- T06 已完成，输出为 `tasks/T06/output/website-copy-document-2026-08-03.md`。
- T06 使用 `$agent-pd` design-only 生成内容策略 Agent 规格，副本在 `tasks/T06/output/international-website-copy-strategy-agent-spec-2026-08-03.json`，运行记录在 `tasks/T06/output/agent-pd-run-note-2026-08-03.md`。
- T06 已输出 P0 核心页面真实网页模块、P1 简化双语框架、结构预留谨慎占位和 Phase 2 页面方向。
- T06 已升级为 v1.1，修订记录为 `tasks/T06/output/t06-v1.1-copy-optimization-note-2026-08-03.md`。
- T06 v1.1 新增：Copy Priority、品牌差异化表达原则、Homepage Trust Module 备用方案、Product UI Demo 结构规范、SEO Keyword Mapping 和对 T07 的输入建议。
- T07 已按“官网 Copy 优化与定稿”完成《Final Website Copy V1.0》，不是重新生成更多页面内容。
- T07 已以 T06 文档为主输入，并遵守 T05 v1.1 的页面等级和内容深度控制。
- T07 官网页面 Copy 已输出繁体中文 + 英文，未输出简体中文正式网页文案。
- T07 未把未确认客户、标志、数据、认证、服务承诺、集成状态、价格或具体合作状态写成正式官网事实。
- T07 已完成双语润色、品牌语气统一、差异化强化、SEO 关键词自然融入、CTA 优化和页面长度优化。
- T07 已完成，输出为 `tasks/T07/output/final-website-copy-v1.0-2026-08-03.md`。
- T07 已升级为 v1.1，在主文档追加 Copy Status Management、Brand Tone Guidelines、Solutions vs Platform Content Boundary、Visual Priority Matrix 和 Asset Direction。
- T07 v1.1 修订记录为 `tasks/T07/output/t07-v1.1-final-copy-supplement-note-2026-08-03.md`。
- T07 执行记录为 `tasks/T07/output/t07-final-copy-execution-note-2026-08-03.md`。
- T07 已覆盖 Home、Solutions、Products / Platform、Cases / Customers、Company / About，并额外补充 Restaurant Chains、Order Management、Delivery Management、Integrations Overview、Contact / Book a Demo。
- T07 已保留 Product UI Demo 结构：Scene、Action、UI、Business Result。
- T07 已准备 Home 无客户授权素材时的 Trust Module 版本。
- T08 `task.md` 已按审查意见调整为页面体验设计规范，不再是泛泛页面建议。
- T08 已输出《Website UX Specification》，语言为简体中文：`tasks/T08/output/website-ux-specification-2026-08-03.md`。
- T08 已升级为 v1.1，在主文档追加 Design Component Framework、Cross Page User Journey、Visual Priority Definition、Photography & Media Direction、Figma Structure Recommendation。
- T08 v1.1 修订记录为 `tasks/T08/output/t08-v1.1-design-execution-supplement-note-2026-08-03.md`。
- T08 已按用户要求使用 `agent-pd:agent-pd`，doctor 通过，但 run 触发受保护运行时导入错误；运行记录为 `tasks/T08/output/agent-pd-run-note-2026-08-03.md`。
- T08 已手工固化 UX Agent 规格：`tasks/T08/output/international-website-ux-planning-agent-spec-2026-08-03.json`。
- T08 已以 T07 v1.1 最终 Copy 的页面结构和 Section 为准，未重写官网 Copy，未新增主导航，未推翻 T03/T04/T05 冻结决策。
- T08 已重点规划 Home、Solutions Overview、Restaurant Chains、Products / Platform、Order Management、Delivery Management、Integrations Overview、Cases / Customers、Company / About、Contact / Book a Demo 的 Page Goal、User Intent、Content Flow、Layout Structure、Components、Interaction、Animation、Responsive Behavior、Visual Priority 和 CTA Path。
- T09 已完成，输出为 `tasks/T09/output/website-prototype-validation-2026-08-03.md`。
- T09 执行记录为 `tasks/T09/output/t09-prototype-validation-execution-note-2026-08-03.md`。
- T09 已承接 T08 v1.1，验证页面线框、页面节奏、关键交互、UI Demo 脚本、跨页 Prototype Flow 和移动端降级方式。
- T09 已重点规划 Home、Products / Platform、Order Management、Delivery Management、Integrations Overview、Contact / Book a Demo；Solutions、Restaurant Chains、Cases、Company 为轻量验证。
- T09 未重写官网 Copy，未新增 Sitemap，未重新判断官网定位，也未将未确认客户、数据、认证、集成状态或 SLA 写成已确认事实。
- T09 已升级为 v1.1，在主文档追加 Prototype Acceptance Criteria、Prototype Fidelity Level、Interaction Complexity Level 和 Visual Mood Input。
- T09 v1.1 修订记录为 `tasks/T09/output/t09-v1.1-prototype-validation-supplement-note-2026-08-03.md`。
- T10 已调整为基于 T03 Strategy、T07 Final Copy、T08 UX Specification 和 T09 Prototype Validation 输出 Visual Concept、Visual Direction、Typography、Color System、UI Style、Motion Style 和 Design System。
- T10 必须继承 T09 v1.1 的验收标准、保真度等级、交互复杂度等级和视觉情绪输入，不得重新探索网站方向或把所有页面直接提升为完整 High-fi。
- T10 已完成，输出为 `tasks/T10/output/website-visual-direction-2026-08-03.md`。
- T10 已按用户要求使用 `agent-pd:agent-pd`：doctor 通过，但 run 触发受保护运行时 `langchain_core.embeddings` 导入错误；运行记录为 `tasks/T10/output/agent-pd-run-note-2026-08-03.md`。
- T10 已手工固化视觉设计 Agent 规格：`tasks/T10/output/international-website-visual-design-agent-spec-2026-08-03.json`。
- T10 执行记录为 `tasks/T10/output/t10-visual-direction-execution-note-2026-08-03.md`。
- T10 视觉总概念为 `Operational Clarity for Global Restaurant SaaS`。
- T10 视觉方向已覆盖摄影风格、视频应用、色彩、字体、页面布局、产品展示方式、动效方向、UI Style、Design System、Page Visual Priority、Moodboard Direction 和 Figma Execution Notes。
- T10 未重新定义官网策略，未重写 Copy，未重新做 UX，未新增 Sitemap，也未将未确认客户、Logo、数据、认证、集成状态或 SLA 写成已确认事实。
- T10 已升级为 v1.1，在主文档追加 Reference Mapping、Hero Composition Rule、Brand Color Adaptation Process、Page Output Requirement 和 Visual Review Checklist。
- T10 v1.1 修订记录为 `tasks/T10/output/t10-v1.1-visual-direction-supplement-note-2026-08-03.md`。
- T11 已调整为“高保真视觉方案设计”，应基于 T07 Final Copy、T08 UX Specification、T09 Prototype Validation 和 T10 Website Visual Direction 输出官网高保真视觉方案。
- T11 应重点输出 Home High Fidelity Design、Platform High Fidelity Key Sections、Order / Delivery Product Motion Storyboard、Contact / Book a Demo Visual、Design System Draft、Asset Plan、Figma Handoff Structure 和 Visual Review Result。
- T11 不应重新探索视觉方向，应继承 T10 的 `Operational Clarity for Global Restaurant SaaS`、真实餐饮运营摄影、半真实 SaaS UI、Product UI Motion、受控 Motion 边界和 T10 v1.1 的视觉评审标准。
- T11 已完成，输出为 `tasks/T11/output/website-high-fidelity-visual-design-2026-08-03.md`。
- T11 执行记录为 `tasks/T11/output/t11-high-fidelity-visual-design-execution-note-2026-08-03.md`。
- T11 已覆盖 Home High Fidelity Design、Platform High Fidelity Key Sections、Order / Delivery Product Motion Storyboard、Contact / Book a Demo Visual、Design System Draft、Asset Plan、Figma Handoff Structure 和 Visual Review Result。
- T11 已按用户要求使用简体中文输出，视觉素材描述保留中文 + 英文关键词。
- T11 未重新探索视觉方向，未重写官网 Copy，未重新做 UX，未新增 Sitemap，也未将未确认客户、Logo、数据、认证、集成状态或 SLA 写成已确认事实。
- T11 已升级为 v1.1，在主文档追加 Visual Deliverable Definition、Prototype Generation Method、Asset Preparation List 和 Visual Prototype Review Gate。
- T11 v1.1 修订记录为 `tasks/T11/output/t11-v1.1-visual-prototype-generation-note-2026-08-03.md`。
- T11 当前产物已明确为 High Fidelity Visual Specification，不是已生成的 Figma Frame、可点击 Prototype 或 Web Demo。
- T11.5 已新增，任务文件为 `tasks/T11.5/task.md`。
- T11.5 应把 T11 规则转化为可查看结果，优先方式为 Figma Visual Prototype；如 Figma 未准备好，可退而输出 Image Generation Visual Exploration、Web Prototype Plan 或等待用户指定执行方式。
- T11.5 应输出《Website Visual Prototype Package》，覆盖 Home、Products / Platform、Order Management、Delivery Management、Contact / Book a Demo 的 Desktop / Mobile 原型范围，以及 Motion Storyboards、Design System 和 Visual Review。
- T11.5 已完成，输出为 `tasks/T11.5/output/website-visual-prototype-package-2026-08-03.md`。
- T11.5 Figma 原型为 `https://www.figma.com/design/BMXIuVRzSUUt9YNhVAQA6K`，创建在 `Aiello's team`。
- T11.5 已生成 Figma 页面：`00 Cover`、`01 Design Tokens`、`02 Components`、`03 Desktop Pages`、`04 Mobile Pages`、`05 Motion Storyboards`、`06 Prototype Flow`、`07 Visual Review`。
- T11.5 已覆盖 Desktop 1440 的 Home、Products / Platform、Order Management、Delivery Management、Contact / Book a Demo，以及 Mobile 390 的 Home、Products / Platform、Order Management、Contact / Book a Demo。
- T11.5 已生成 6 组 Motion Storyboards、Prototype Flow 和 Visual Review；读回校验未发现 `undefined` 文本。
- T12 已顺延到 T11.5 之后。T12 应审核 T03-T11.5 的战略一致性、信息架构、双语 Copy、UX 可执行性、视觉方向、高保真视觉规格和视觉原型是否一致。
- TFIX-LOCALIZATION 已完成。后续必须以 `tasks/TFIX-LOCALIZATION/output/Website Production Localization Guideline.md` 为最新语言生产规则。
- 最新规则：内部文档使用简体中文；官网内容库保留繁體中文 + English；视觉稿、Figma、Prototype、Stitch、AI 网页生成默认使用繁體中文真实官网单语言版本；English 是独立 Secondary Locale。
- 禁止在同一个网页视觉稿中同时展示繁體中文和 English 标题、说明、CTA 或 UI Label。
- T11.5 曾补齐 `TC Production Visual Prototype`：新增 `08 Desktop Pages / TC Production`、`09 Mobile Pages / TC Production` 和 `10 TC Production Review`；但该结论已被 2026-08-20 T39 范围重置覆盖，`08/09/10` 不再作为当前输入。
- 原 `03 Desktop Pages / Bilingual Validation`、`04 Mobile Pages / Bilingual Validation` 只作为历史验证参考，不作为生产视觉稿进入 T12。
- `/TC Production` 页面可见文本扫描已通过：允许 `Candao` 和语言切换 `EN`，英文正文 / CTA / UI Label 残留为 0。
- Website Production Localization 二次检查已完成，记录为 `tasks/TFIX-LOCALIZATION/output/localization-second-check-2026-08-03.md`。
- 二次检查已清理“下一阶段待生成 /TC”的旧状态残留，包括 Reviewer Agent JSON 的旧章节名；当前口径是 `/TC Production` 已补齐，T12 负责审核其是否合格。
- 二次 Figma 检查确认所有 `/TC` Frame 均有 `繁中 / EN`，英文正文 / CTA / UI Label 残留为 0，明显简体字命中为 0。
- T12 应审核新增 `/TC Production` 页面是否满足生产语言规则、Home 5 秒理解标准、Platform capability layer、Order / Delivery UI Demo 和 Contact 转化路径。
- T11.5-C 已完成 Stitch / AI Web Generator 方案 C，核心产物为 `tasks/T11.5/output/Website Generation Prompt.md`、`tasks/T11.5/output/AI Generated Website Pages.md`、`tasks/T11.5/output/AI Generated Website Review.md`、`tasks/T11.5/output/stitch-generated-website-result-2026-08-04.md` 和 `tasks/T11.5/output/stitch-generated-website-review-2026-08-04.md`。
- T11.5-C 已使用 Agent-PD design-only 生成 `AI Website Generation Prompt Agent`，L1 PASS，规格副本为 `tasks/T11.5/output/ai-website-generation-prompt-agent-spec-2026-08-03.json`。
- 2026-08-04 Stitch 已连通并完成真实生成；Stitch Project ID 为 `10888304674441209287`，最终 Design System 为 `assets/12141666305108771015`，主色为用户指定 `#528dff`。
- T11.5-C 最终采用 Stitch 页面为：Home `ae3d839fa9e44a2a8526c6e099edfd16`、Platform v2 `b4ccb5387cc24c9f824f4f9444507179`、Order Management `ecc37f07411e4003bb25e4b879584b7e`、Delivery v2 `e56b1d92bf564feb8d837a9ea864e83e`。
- Platform v1 和 Delivery v1 不作为最终审核依据，只保留为被替代的问题版本。
- 本地 Stitch 文件位于 `.stitch/DESIGN.md` 和 `.stitch/designs/`，T12 需要查看 PNG 并读取 HTML 文案。
- 真实 Stitch 审核结论为有条件通过；后续必须跟进 Home 中段图片占位、Home / Platform v2 / Delivery v2 页脚英文版权句、局部圆角偏大、Mobile 真实 Stitch 输出缺口。
- T11.5-B Visual Director Agent 已完成，核心产物为 `tasks/T11.5/output/International SaaS Website Art Director Agent.md`、`tasks/T11.5/output/Home Visual Critique.md`、`tasks/T11.5/output/Platform Product Demo Visual Critique.md` 和 `tasks/T11.5/output/Candao Visual Design Rules.md`。
- T11.5-B 使用 `agent-pd:agent-pd`：protected runtime `doctor` ready，但 `run` 触发 `langchain_core.embeddings.embeddings` 导入错误；已使用本地 Agent-PD design-only 脚本兜底生成 L1 PASS 的 agent spec。
- T11.5-B Home 审查结论：Home 方向成立，不需要推倒重做，但需要重点精修 Product Showcase、占位图、Footer、CTA 和圆角；综合评分 7.1 / 10。
- T11.5-B Platform / Product Demo 审查结论：Platform v2、Order、Delivery v2 方向通过，产品感较强，但需要 UI 真实性和 Motion 精修；综合评分 7.9 / 10。
- T11.5-B Figma MCP 读取 `BMXIuVRzSUUt9YNhVAQA6K` 仅返回 `Archive / Empty Start`，本轮视觉总监审查不声称已完成 Figma 真实 Frame 审查；证据以 `visual-director-audit-assets/` 的 Stitch 截图为准。
- T12 需要将 `Candao Visual Design Rules.md` 作为视觉审查底表，并把 Home 5 秒理解、Platform Capability Map、Product Demo UI、Motion、生产语言和未确认事实风险合并进最终 Website Review Report。
- Stitch 实际网页产物是 `.stitch/designs/*.html`；`.stitch/designs/*.png` 是 Stitch 小尺寸预览图，不适合作为大图审查。
- 已补充 1440 宽完整页面截图到 `tasks/T11.5/output/stitch-fullsize-screenshots/`，并输出索引 `tasks/T11.5/output/stitch-generated-artifacts-index-2026-08-05.md`。
- 已将 Stitch 真实 HTML 整合为可交互网页：`source/stitch-interactive-prototype/index.html`；当前本地服务入口为 `http://127.0.0.1:4175/`。
- 交互网页支持 Home / Platform / Order / Delivery 切换、1440 / 390 / 自适应视口切换、原始 HTML 入口、1440 宽完整截图入口和 Visual Director 评审摘要。
- 交互网页已经本地 Chrome + Playwright 验收 PASS；验收记录为 `tasks/T11.5/output/stitch-interactive-prototype-2026-08-05.md`，截图为 `tasks/T11.5/output/stitch-interactive-prototype-screenshots/`。
- 交互网页是 T11.5 / T12 评审入口，不是生产级 React / Vite 工程；390 视口仅为同一 HTML 的响应式检查，不代表已生成独立 Stitch Mobile 页面。
- T11.5-A 已完成 Design Execution Skill + Figma 高保真补齐：新增 Skill 位于 `/Users/victorwong/.codex/skills/candao-website-high-fidelity-design/SKILL.md`，T11.5 输出目录新增 A01-A09 文档。
- T11.5-A 已重新补齐并验证 Figma 核心 Frame：`47:2` Home Desktop、`49:2` Home Mobile、`48:2` Platform Desktop、`50:2` Platform UI Motion Storyboard、`50:74` Product Motion Storyboard、`51:2` Design System v1.0。
- T11.5-A 已确认 Home 桌面和移动 Hero 摄影节点 `47:3`、`49:3` 均为 `IMAGE` 填充，图片资产为 `tasks/T11.5/output/assets/candao-hero-restaurant-operations-blue-2026-08-05.png`。
- T11.5-A 已修正 `/TC` 生产帧英文 UI Label 残留；复扫后除 `Candao`、`EN`、`SaaS`、`POS`、`QR` 等允许品牌 / 技术词外，未发现英文 CTA、英文正文或英文 UI Label 残留。
- 2026-08-05 用户反馈 Figma 高保真稿仍偏结构图；已执行 T11.5-A2 Image2 视觉精修，输出记录为 `tasks/T11.5/output/t11.5-a2-image2-visual-refinement-2026-08-05.md`。
- T11.5-A2 已生成并保存 3 张 Image2 资产：餐厅运营产品展示图、平台控制台高保真 UI、配送调度地图 UI，目录为 `tasks/T11.5/output/assets/image2-visual-refinement/`。
- T11.5-A2 已把上述资产上传到 Figma 生产帧，9 个目标节点 `57:3`、`57:19`、`57:35`、`57:50`、`57:55`、`57:56`、`57:72`、`57:79`、`57:86` 均校验为 `IMAGE` 填充。
- T11.5-A2 验收截图保存于 `tasks/T11.5/output/figma-image2-refinement-screenshots/`；最终移动端截图为 `home-mobile-image2-refinement-final-2026-08-05.png`。
- T11.5-A2 回读确认 Home Desktop、Platform Desktop、Home Mobile 的新增可见文本英文残留均为 0；Image2 合成图进入正式上线前仍需替换为授权素材或真实产品截图。
- 2026-08-08 已按用户要求补齐 C v2 一级目录主页，范围为：首頁、解決方案、平台、整合能力、客戶案例、關於餐道、預約產品演示。
- 2026-08-10 v0.2 已修正 C v2 的执行口径：上述 7 个页面是 C v2 已完成范围，不是新的 IA 冻结范围。T05 原始一级结构仍包含 `Resources / 資源`，下一轮应补回 `資源` 一级主页。
- `Order Management`、`Delivery Management`、`Riders App`、`Dispatch`、`Aggregated Logistics Management` 只作为 `Solutions` 场景或 `平台` 下的产品能力入口，不得提升为一级导航。
- 2026-08-10 v0.3 已进一步修正 Solutions / Platform 耦合问题：Solutions 只讲业务问题、场景、角色压力和结果；Platform 只讲产品能力、工作流、UI 状态变化和数据流。
- v0.3 当前只替换 v0.2 中 `Solutions / 解決方案` 与 `Platform / 平台` 相关页面；其他一级目录仍沿用 v0.2。
- v0.3 最新命名：Solutions 使用 `配送營運與履約`、`數字點餐與自助服務`；Platform 保留 `配送管理`、`配送調度`、`聚合物流管理`、`自有點餐`、`自助點餐` 等能力页。
- C v2 Stitch Fixed Screen ID：Home `d38f6ed9fe2c42b29849f2ab5776ef90`、Solutions `3f2cde2898c04fddb949d2371608ebeb`、Platform `f5e50f9a9b5a4bc898a4d27568566d1c`、Integrations `621fecf4ef6945f58faa162d9f8af3b3`、Customers `e234dc8834e841b49e8d66d139e48734`、About `9c63c26edcbd481599e3d4cd689b378e`、Contact / Demo `07cf801156f94a2681cf94c5e1102703`。
- C v2 本地原型 `source/stitch-first-level-v2/index.html` 已真实嵌入 Image2 图片，支持 `?page=home`、`?page=solutions`、`?page=platform`、`?page=integrations`、`?page=customers`、`?page=about`、`?page=contact`。
- C v2 本地原型交互包括顶部一级导航、Capability Map 节点切换、Workflow Stepper、场景选择、整合筛选、需求分流和多步骤表单状态。
- C v2 本地原型 1440 宽完整页面截图保存于 `tasks/T11.5/output/stitch-cv2-first-level-local-prototype-screenshots/`，可直接查看真实嵌入 Image2 图片后的页面效果。
- C v2 本地原型与 Stitch Fixed HTML 已通过关键词扫描，未发现本次规则列出的明显英文残留、简体残留、错误一级导航、默认版权文案或产品能力升一级问题。
- Stitch MCP 当前没有暴露把本地 Image2 图片精确上传并绑定到 Stitch 页面节点的工具；因此下一轮视觉确认应以本地 C v2 原型作为图片落位主参考，以 Stitch Fixed 页面作为 IA 与页面结构参考。
- 2026-08-10 已处理用户关于 Stitch 画布多版本混乱的反馈。原因是 Stitch 保留早期探索、C v2 初稿、Fixed 版和图片素材 Screen，且 `edit_screens` 会生成新 Screen 而不是覆盖旧 Screen。
- 当前 Stitch MCP 没有 Screen 级删除、重命名、归档或拖动画布位置能力；本轮未删除历史图，避免误破坏生成记录。
- 已在 Stitch 内新增整理索引 `00 Candao C v2 保留版索引 (Fixed)`，Screen ID 为 `5782dcac875b4c5fb8de68aae837d69a`；整理索引初稿 `db96c8dd2d8b46bab8ebc713e9b45a21` 不作为最终入口。
- 已输出 `tasks/T11.5/output/stitch-project-cleanup-report-2026-08-10.md`，并备份索引 HTML / PNG 到 `tasks/T11.5/output/stitch-cv2-cleanup/`。
- T11.5-A 使用 Agent-PD 时 `doctor` ready，但 `run` 因 `langchain_core.embeddings.embeddings` 导入错误失败；后续若继续用 Agent-PD，应先确认该本地依赖问题是否已修复。
