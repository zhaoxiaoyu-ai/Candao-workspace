# Current State

## Phase

2026-09-02 已完成 T61 `平台页 Aceternity 子板块高保真重设`。用户要求在 T60 映射表之后继续执行实际 Figma 改稿，本轮以 Figma 当前平台页 `488:350 / 平台` 为内容来源，在同一页面新增并行画板 `925:2 / Platform / Desktop 1440 / TC / Aceternity Mapping T61`，尺寸 `1440 x 5700`，原平台页未覆盖。新稿逐模块应用 Aceternity 参考：Hero `Hero Section With Images Grid and Navbar`、核心产品矩阵 `Features Bento Grid With Skeletons`、能力地图与每日营运工作流 `Symmetric Bento Grid`、产品演示入口 `Three Columns With Images`、转化区 `CTA With Masonry Images`、页脚 `Simple Footer With Four Grids`。已清理 `CDBI / Finance Center`、`资源`、单独 `了解更多`、`Candao` 版权和内部 `Aceternity Mapping` 可见标签。domain-copy QA `12/12 pass`；Figma 读回 QA：可见文本 `212`、禁用词 `0`、`Candao` 可见残留 `0`、术语大小写问题 `0`、字体异常 `0`、溢出 `0`。截图保存为 `tasks/T61/output/screenshots/t61-platform-aceternity-mapping-figma-925-2.png`，执行报告为 `tasks/T61/output/t61-platform-aceternity-mapping-implementation-report-2026-09-02.md`。下一步按 T60 顺序继续 `整合能力` 页。

2026-09-02 已完成 T60 `六页 Aceternity 子板块映射表`。用户明确本轮不是重做整站风格，而是把现有 Figma 高保真页面里的每一个子板块逐一对照上方 Aceternity 超链接参考，找到相似度最高、可复用的展示样式，并先形成映射表。已确认 Figma 文件 `BMXIuVRzSUUt9YNhVAQA6K` / `03 Desktop Pages / Bilingual Validation` / `3:5` 可读，且 T56 已将顶部 `12` 条 Aceternity 组件来源文字恢复并设置为真实 URL hyperlink。本轮读取 `candao-website-high-fidelity-design` skill、项目规则、`domain-copy` 业务上下文 / 文案规则 / 术语表、T11.5 全页面逐板块审查、T15 证据矩阵和 T56 链接报告，输出 `tasks/T60/output/aceternity-section-mapping-platform-integrations-customers-resources-about-demo-2026-09-02.md`。映射表覆盖 `平台`、`整合能力`、`客户案例`、`资源`、`关于餐道`、`预约产品演示` 六页，逐行包含页面、子板块、当前内容目的、对应 Aceternity 参考、深色 / 浅色版本、是否需要 Figma Make、QA 标准。执行建议顺序：Platform → Integrations → Demo → Customers → Resources → About。边界：本轮未改写 Figma 画板，未生成正式官网 UI 文案，因此没有运行 domain-copy 文案输入 QA；后续只要进入 Figma 改稿或可见文案调整，必须重新按 `domain-copy` 输入运行 QA。

2026-09-02 已完成 T59 `Figma 解决方案英文版本重新执行`。用户要求“重新执行这一步”，承接 T58 的解决方案英文版本新增；本轮按重做处理，从原繁體中文解决方案节点 `447:8876` 重新克隆新增 `842:2 / Solutions / Desktop 1440 / EN / Revision 2`，位置 `x=17994, y=7521`，尺寸 `1440 x 3744`。原繁體中文解决方案页面 `447:8876 / 解决方案` 与 T58 旧英文稿 `812:2 / Solutions / Desktop 1440 / EN` 均保留未删除。共处理 `84` 个可编辑文本节点、`76` 条英文映射；首屏改为 `Match F&B O2O Problems / to Practical Solutions`，更贴近源稿“按餐饮 O2O 营运问题找方案”的语义。Google Translate 相关域名在当前本机网络中仍超时，访问失败证据保存为 `tasks/T59/output/translations/t59-google-translate-access-check-2026-09-02.json`，因此本轮不声称已取得 Google 原始底稿；英文页采用人工英文官网适配。Figma 读回 QA pass：中文残留仅语言切换器 `繁中 / EN`，`Finance Center / Business Center / Data Center` 为 `0`，大小写错误术语 `0`，未确认效果百分比残留 `0`，文本溢出 `0`，父级容器溢出 `0`，按钮重叠 `0`。domain-copy QA `76/76 pass`，最终截图 `tasks/T59/output/screenshots/t59-solutions-en-revision2-figma-842-2.png`，尺寸 `1444 x 3745`。边界：图片、矢量或品牌 Logo 内嵌文字未在本轮重绘。

2026-09-02 已完成 T58 `Figma 解决方案英文版本新增`。用户要求基于 Figma 解决方案节点 `447:8876` 新增英文版本；已在 Figma `03 Desktop Pages / Bilingual Validation` 页面中新增 `812:2 / Solutions / Desktop 1440 / EN`，位置 `x=16474, y=7521`，尺寸 `1440 x 3719`；原繁體中文解决方案页面 `447:8876 / 解决方案` 保留未覆盖。共处理 `84` 个可编辑文本节点、`76` 条唯一可见文本。Google Translate 相关域名在当前本机网络中超时，访问失败证据保存为 `tasks/T58/output/translations/t58-google-translate-access-check-2026-09-02.json`，因此本轮不声称已取得 Google 原始底稿；英文页采用人工英文官网适配，避免直译腔。Figma 读回 QA pass：中文残留仅语言切换器 `繁中 / EN`，`Finance Center / Business Center / Data Center` 为 `0`，大小写错误术语 `0`，未确认效果百分比残留 `0`，文本溢出 `0`。domain-copy QA `76/76 pass`，最终截图 `tasks/T58/output/screenshots/t58-solutions-en-figma-812-2.png`，尺寸 `1444 x 3720`。边界：图片、矢量或品牌 Logo 内嵌文字未在本轮重绘。

2026-09-01 已完成 T57 `Figma 首页英文版本新增`。用户要求基于 Figma 首页节点 `336:7645` 新增英文首页版本，并要求英文以 Google Translate 为底稿但不要直译。已在 Figma `03 Desktop Pages / Bilingual Validation` 页面中新增 `Home / Desktop 1440 / EN`，节点 `656:2`，位置 `x=14685, y=7521`；原繁體中文首页 `336:7645` 保留未覆盖。共处理 `190` 个可编辑文本节点、`149` 条唯一可见文本；英文映射保存为 `tasks/T57/output/translations/t57-home-en-copy-map-2026-09-01.json`。Google Translate 相关域名在当前本机网络中超时，访问失败证据保存为 `tasks/T57/output/translations/t57-google-translate-access-check-2026-09-01.json`，因此本轮不声称已取得 Google 原始底稿；英文页采用人工英文官网适配，避免直译腔。Figma 读回 QA pass：语言切换器以外中文残留 `0`、`Finance Center / Business Center / Data Center` `0`、大小写错误术语 `0`、未确认效果百分比残留 `0`、Helvetica 残留 `0`。domain-copy QA `149/149 pass`，最终截图 `tasks/T57/output/screenshots/t57-home-desktop-en-figma-1440-full.png`，尺寸 `1444 x 5788`。边界：源 Figma 中作为图片、矢量或品牌 Logo 内嵌的中文文字未在本轮重绘。

2026-09-01 已完成 T56 `Figma 顶部原始组件路径文字超链接修正`。用户进一步澄清：需要保留原来写在顶部参考区的 Aceternity 组件来源文字，不应替换成官网最终层级 / sitemap；问题只是这些原文字不能直接导航到截图组件真实路径，因此要把原文字本身转换成 hyperlink。本轮已将顶部 `12` 个文字节点恢复为原始 Aceternity 来源文字，并设置为对应真实 Aceternity 组件 URL。读回验证：原始文字 `12/12` 匹配、URL hyperlink `12/12` 匹配、目标 URL `12/12` HTTP `200`、原始截图节点 `12/12` 可见、T54 面板 `623:2` 不存在、`T54 archived /` 前缀节点 `0`。输出见 `tasks/T56/output/t56-figma-original-path-hyperlink-report-2026-09-01.md`、`tasks/T56/output/qa/t56-figma-original-path-link-readback-qa.json` 和 `tasks/T56/output/screenshots/t56-figma-original-path-links-restored.png`。

2026-09-01 T55 `Figma 顶部路径超链接纠偏与回退` 已由 T56 纠正并归档。T55 正确删除了 T54 新增面板 `623:2`、恢复原截图，但仍把顶部原始组件来源文字误改为官网最终层级 / sitemap 文案；该口径不再作为当前 Figma 页面事实使用。

2026-09-01 T54 `Figma 顶部最终层级超链接整理` 已由 T55 回退并归档。T54 曾将上方参考缩略图区替换为 `最終層級超連結 / Web Desktop 1440` 面板并隐藏旧参考截图；该做法不符合用户纠偏后的需求，不再作为当前 Figma 页面事实使用。

2026-08-28 已完成 T53 `国际官网改造全任务时间节点与日报 Excel 导出`。输出 `tasks/T53/output/candao-international-website-daily-summary-2026-08-28.xlsx`，按用户最新要求只保留重点执行任务和产出内容；覆盖 T00-T53、T11.6、TFIX-LOCALIZATION、Fix-00、T12 / T13 待办、前期分析调研，以及用户提供 7 张 Figma 版本历史截图中的可见执行记录。工作簿包含项目总览、日报总表、任务明细、Figma执行记录、阶段汇总、阻塞待确认和证据索引。验证：日报 / Figma 工作表 inspect 完成，公式错误扫描 0，全工作表预览图已渲染。

2026-08-27 已完成 T52 `Stitch 失败稿视觉返工与本地高保真基准`。用户反馈 T51 “样式太丑了”，本轮实际再次调用 Stitch 对 T51 最终 screen `5d13339cb5a44dc6a73169adf3eec6d3` 生成视觉变体，新 screen 为 `32612aab4ec048b1a9eed77868dfe803`，本地 HTML 为 `tasks/T52/output/stitch-screen-32612aab-premium-variant.html`，预览图为 `tasks/T52/output/screenshots/t52-stitch-screen-32612aab-preview.png`。复验结果仍 fail：默认内容 `13/58`、交互联合内容 `15/99`，可见 `Candao`、假 `粵ICP` 和 Material ligature 风险，因此不得采用。正式保留本地 T52 高保真视觉基准：`tasks/T52/output/prototype/index.html`，1440 截图 `tasks/T52/output/screenshots/t52-visual-polish-1440-full.png`，报告 `tasks/T52/output/t52-visual-polish-run-report-2026-08-27.md`。T52 基于 T50 内容与交互重做视觉层，强化首页式暗色餐饮营运 Hero、深色产品工作台、案例 / 资源路由、授权规模数据带和最终 CTA。QA：交互状态 `31` 个，默认内容 `58/58 pass`，交互联合覆盖 `99/99 pass`，domain-copy `6/6 pass`，禁用词 / 横向溢出 / 图片失败 / 样式风险均为 `0`，截图尺寸 `1440 x 5186`。当前可作为页面视觉返工基准的是 T52 本地版本，不是 Stitch 变体。

2026-08-27 已执行 T51 `T50 内容送入 Stitch 生成高保真候选`，当前为 blocked。用户要求“把这个内容放到 Stitch 上设计为高保真”，本轮以 T50 为输入，使用 Stitch Project `10888304674441209287`、Design System `assets/a99f770bf474445d98b287cf983bc147`、Device `DESKTOP`、Model `GEMINI_3_PRO` 实际生成并连续三轮 edit。最终保留 screen 为 `5d13339cb5a44dc6a73169adf3eec6d3`，标题 `接入評估中心 - 餐道 / Desktop TC / C v4 Final Content Coverage`，HTML 为 `tasks/T51/output/stitch-output/t51-stitch-screen-5d13339cb5a44dc6a73169adf3eec6d3-final.html`，1440 截图为 `tasks/T51/output/screenshots/t51-stitch-screen-5d13339cb5a44dc6a73169adf3eec6d3-1440-full.png`，报告为 `tasks/T51/output/t51-stitch-high-fidelity-run-report-2026-08-27.md`。复验结果：可见禁用词 `0`、图标 ligature `0`、未授权指标 `0`、横向溢出 `0`、`domain-copy` `6/6 pass`；但 T50 合同内容覆盖仍 fail，默认内容缺 `3/58`，交互联合内容缺 `44/99`。结论：Stitch 已实际执行，但不得登记为正式高保真通过稿；当前真正可作为页面落地依据的仍是 T50 已通过版本。

2026-08-27 已完成 T50 `对外可落地高保真原型依据清理`。用户指出当前原型“里面掺杂了很多不必要对外说明的信息，不能够作为可落地的高保真原型依据”；本轮确认反馈成立：T49 虽然解决了 T48 过度文字化问题，但仍有 `T49`、`原型`、`前端`、`React`、`PPT Slide`、`品牌顯示` 等内部执行 / 实现 / 来源说明进入页面可见层。T50 保留 T49 的交互结构，输出最新原型 `tasks/T50/output/prototype/index.html`、1440 截图 `tasks/T50/output/screenshots/t50-public-hifi-1440-full.png`、对外文案合同 `tasks/T50/output/contracts/t50-public-hifi-contract.json`、Stitch 输入 brief `tasks/T50/output/stitch-input/t50-public-hifi-stitch-brief-2026-08-27.md` 和报告 `tasks/T50/output/t50-public-hifi-cleanup-report-2026-08-27.md`。关键改动：Hero 改为“先判斷現有系統如何接入 / 再查看案例與資源”，流程改为“從營運問題到產品演示”，案例资源改为“同一個問題下，查看案例、資源與支援”，规模区删除 `PPT Slide 11 口徑` 类来源说明，演示 CTA 和页尾改为真实官网语境。QA：交互状态 `31` 个，默认合同 `58/58 pass`，交互联合覆盖 `99/99 pass`，domain-copy `6/6 pass`；无 `T49`、`T50`、`原型`、`前端`、`React`、`QA`、`PPT`、`Slide`、`Stitch`、`Figma`、`高保真`、`品牌顯示`、`Finance Center`、`Business Center`、`Data Center`、`Candao` 等禁用可见词；无横向溢出，页面高度 `5108px`。`AMS / Connector` 因当前 `domain-copy` 词库列为受保护产品 / 能力术语而保留，若后续要中文化需先人工确认标准展示词并更新词库。

2026-08-27 已完成 T49 `前端交互式查看原型重构`。用户指出 T48 原型“几乎全是文字”，反馈成立：T48 已经比 T47 更接近高保真前置，但主体仍偏文字排版，不是前端适合查看、切换和承接销售线索的交互方式。本轮新增最新原型 `tasks/T49/output/prototype/index.html`，页面角色为 `接入評估中心 / Desktop 1440 / TC / Interactive Workbench`，1440 截图为 `tasks/T49/output/screenshots/t49-interactive-prototype-1440-full.png`。T49 将内容承载方式改为 Hero 产品工作台、五步 Stepper、问题场景选择、系统拓扑、状态表、右侧演示摘要、案例 / 资源 / 支援 / 演示 Tab、授权规模数据带和演示摘要 CTA；内容覆盖口径从“静态长页全部可见”改为“点击完整路径后的交互态联合覆盖”。QA：domain-copy `6/6 pass`，默认可见合同 `39/39 pass`，交互态联合覆盖 `105/105 pass`，共检查 `31` 个状态；无禁用词、无横向溢出，`documentWidth = 1440`，页面高度 `5034px`，图片加载 `2/2`，背景图 `8`，组件选择器 `13/13 pass`，无 `text-transform` 或负字距。本轮未上传或执行 Stitch；后续如进入 Stitch / Figma / React，应以 T49 HTML、截图、交互合同和 `tasks/T49/output/stitch-input/t49-interactive-workbench-stitch-prompt-2026-08-27.md` 为最新输入，不再把 T48 作为当前最佳原型。

2026-08-26 已完成 T48 `三合一原型高保真前置重构`。用户指出 T47 原型“不符合能够直接输出为页面的高保真前提”；本轮确认反馈成立：T47 虽然做到内容覆盖和禁用词清理，但仍是内容覆盖型长页，不应直接作为 Stitch / Figma / React 高保真输入。已将页面角色收敛为 `接入評估中心 / Desktop 1440 / TC`，输出新版高保真前置候选 `tasks/T48/output/prototype/index.html`、1440 全页截图 `tasks/T48/output/screenshots/t48-hifi-ready-prototype-1440-full.png`、审计报告 `tasks/T48/output/audit/t47-high-fidelity-readiness-audit-2026-08-26.md`、页面蓝图 `tasks/T48/output/high-fidelity-page-blueprint-2026-08-26.md`、合同 `tasks/T48/output/contracts/t48-hifi-readiness-contract.json`、Stitch v3 prompt `tasks/T48/output/stitch-input/t48-hifi-ready-stitch-prompt-v3-2026-08-26.md` 和执行报告 `tasks/T48/output/t48-high-fidelity-readiness-rework-report-2026-08-26.md`。新版结构改为 `现有系统能否接入 -> 系统接入工作台 -> 相似案例证明 -> 资源路由 -> 演示摘要`，并把三合一内容页面化为 Hero 产品舞台、System Fit Workbench、Case Proof Board、授权指标带、Resource Router、Decision Matrix、Demo Summary CTA。QA：静态合同覆盖 `83/83 pass`，domain-copy `6/6 pass`，可见英文扫描 pass，1440 渲染 pass，截图尺寸 `1440 x 7175`，无横向溢出；可见文本未出现 `Finance Center`、`Business Center`、`Data Center`、`Candao`、Material icon、假备案或 SLA。本轮未上传或执行 Stitch；后续如进入 Stitch，不再使用 T47 prompt，改用 T48 HTML / 截图 / 合同 / v3 prompt。

2026-08-25 已完成 T47 `整合能力、客户案例与资源三合一原型`。用户要求“尝试把整合能力、客户案例和资源三者结合，重新整理一份原型”；本轮将三页从并列导航页改为一条评估链路：`接入问题 -> 案例证据 -> 资源下一步 -> 演示分流`。输出原型为 `tasks/T47/output/prototype/index.html`，1440 全页截图为 `tasks/T47/output/screenshots/t47-integrated-prototype-1440-full.png`，内容契约为 `tasks/T47/output/contracts/t47-integrated-content-contract.json`，Stitch 重试提示词为 `tasks/T47/output/stitch-input/integrated-proof-resource-stitch-prompt-2026-08-25.md`。已继承 T35 首页风格：暗色餐饮运营 Hero、`#528dff` 连接色、深色系统接入工作台、白底案例证明、浅色资源路由、深色整合判断矩阵；不再使用 T45 那种页面底部内容登记清单。QA：内容覆盖 `224/224 pass`，domain-copy `8/8 pass`，渲染 QA pass，截图尺寸 `1440 x 8202`，无横向溢出；可见文本未出现 `Finance Center`、`Business Center`、`Data Center`、`Candao`、Material icon、假备案或 SLA 残留。本轮未上传或执行 Stitch。

2026-08-25 已完成 T46 `Finance Center 中文生产表达规则补丁`。用户要求后续把对应英文调整成中文表达；本轮确认 `Finance Center` 仍可作为 PPT / 证据矩阵来源原文保留，但中文 / 繁體中文官网、Figma、Stitch、React、Web Prototype 和截图式界面不得把它作为可见展示词，默认改为「财务对账 / 財務對賬」，必要时展开为「平台订单与 OMS 订单对账」「金额差异、状态差异和漏单识别」。已更新 `domain-copy/business-context.md`、`glossary.yaml`、`copy-rules.md`、`examples.md`、`copy-qa-cases.md`、`copy-feedback-log.md` 和 `domain_copy_qa.py`；同时替换 T17 / T27 / T44 / T45 当前可复用设计输入、低保真、Stitch prompt、upload-ready HTML 中的可见英文残留。T46 正向 QA `3/3` pass，失败回归 `2/2` 按预期 fail，主回归 `10/10` pass。历史证据文档未改写。

2026-08-23 已执行 T45 `剩余一级页面按 100% 内容覆盖与首页风格依次执行到 Stitch`，当前 blocked。已按顺序把 Platform、Integrations、Customers、Resources、About、Demo 六页送入 Stitch Project `10888304674441209287`，Design System `assets/a99f770bf474445d98b287cf983bc147`，并保存 HTML、预览图、本地渲染截图和 QA。Stitch 原生下载版全部未达到 100% 内容覆盖，不能登记为正式高保真：Platform `56/76`、Integrations `48/59`、Customers 原版 `36/90`、Customers copy-register 重试 `40/90`、Resources `32/112`、About `31/100`、Demo `67/75`。Demo 已做一次精准 edit，但 `get_screen` / download 仍返回原 HTML。已生成 6 个本地 upload-ready HTML 兜底候选并全量 QA pass：Platform `76/76`、Integrations `59/59`、Customers `90/90`、Resources `112/112`、About `100/100`、Demo `75/75`。上传审批清单为 `tasks/T45/output/stitch-input/t45-upload-approval-request-2026-08-23.md`；按 `stitch::upload-to-stitch` 技能要求，本轮未上传，需用户明确批准后继续。

2026-08-23 已完成 T44 `Solutions 100% 内容覆盖与首页风格重做`。本轮回应用户“内容覆盖率要做到 100%”和“现在的 Stitch 没有还原到首页设计风格”：已建立本地可控高保真基准 `tasks/T44/output/html/solutions-home-style-100-coverage.html`，按 T35 首页风格重做，覆盖率 `69/69 = 100%`，domain-copy、静态风险和 1440 渲染均 pass。已实际调用 Stitch Project `10888304674441209287`、Design System `assets/a99f770bf474445d98b287cf983bc147` 生成新 screen `b9cd15b7d54944efa9716bc2159a1f25`，标题为 `解決方案 - 餐道國際 / Desktop TC / 營運場景導航 (C v4)`；首轮下载件 QA 为 `67/69` fail，缺 `場景鏈路`、精确承接能力句，并残留 `arrow_forward`。已对同一 screen 执行一次外科式 `edit_screens`，session `4572357114513792849`；本地重放 DOM 操作后覆盖 `69/69` pass，但 Stitch `get_screen` / download URL 仍返回编辑前 HTML，因此不得直接登记为正式高保真，需等远端下载件同步后复验。

2026-08-20 已完成 T42 `Solutions Prompt v2 Stitch 单页重试`。本轮按 T41 方法只重试 `Solutions / 解決方案` 一页，使用 Project `10888304674441209287`、Design System `assets/a99f770bf474445d98b287cf983bc147`、Model `GEMINI_3_PRO` 生成新 Stitch screen `fdf1d4f894a8483885f7b3ba4c1c566c`，标题为 `解決方案 - 餐道國際 / Desktop TC / 營運場景導航`。HTML、Stitch 预览图、本地 Chrome 1440 全页截图、domain-copy QA、静态 QA 和 ledger 已保存到 `tasks/T42/output/`。结论：生成成功但不能登记为正式高保真。可下载 HTML 缺 Header `資源`、缺 `Product Capability Bridge` 与 `Proof / Next Step`、可见 Material Symbols ligature、Footer 含 `Candao` 和版权样板；一次 `edit_screens` session `4198916200482572705` 返回 DOM 操作但未稳定写回可下载 HTML / screen metadata。未更新 `tasks/T17/output/design-handoff/.stitch/metadata.json`。

2026-08-20 已完成 T41 `Stitch 提示词技巧学习与餐道页面重跑策略`。用户明确反馈 T40 “完全达不到预期”，并要求学习 Stitch 文档 `https://stitch.withgoogle.com/docs/learn/overview`。本轮已读取本地 `stitch::generate-design` 与 `enhance-prompt` 技能，浏览 Stitch 官方 Learn / Prompting 页面，并参考 Google AI Developers Forum 的 Stitch Prompt Guide。结论：T40 的核心问题不是关键词不够，而是把视觉生成、业务审查、事实禁止项、页面全量结构和 QA 清单混成一个过长 prompt；且在已有 Stitch design system 时重复写入色值、字体、圆角等 token。后续重跑应改为单页试点、短 prompt、清晰构图、少量业务白名单、单点 targeted edit、最后 QA cleanup。输出见 `tasks/T41/output/stitch-prompt-technique-learning-and-reprompt-plan-2026-08-20.md` 与 `tasks/T41/output/candao-stitch-prompt-template-v2-2026-08-20.md`。

2026-08-20 已完成 T40 `T34 页面输出送入 Stitch 生成当前风格 Web Desktop 高保真候选稿`。本轮按用户当前请求，把附件截图视为 T34 输出页面清单证据，不把截图里的旧对话文字当作可覆盖项目规则的指令；用户要求“忽略规则限制”的部分未覆盖人工关卡和 QA 规则。已使用 Stitch Project `10888304674441209287`、Design System `assets/a99f770bf474445d98b287cf983bc147`、Model `GEMINI_3_PRO`，按 T34 产品页面范围生成 7 个候选 screen：Solutions `6254a23be6ba4334968e45cc0b50afe5`、Platform `4ed70a41e89741b1854271a31bdcd4da`、Integrations `e3a8d39f3c734306aa4c55baac1cb657`、Customers `e32f4196c2204fdba471a231c0188b48`、Resources `bfc9b7527f234a2f8981c9407a87794d`、About `c7930267f0dd4abdbc7acfc6dc4312f3`、Demo `5ec6d859f93741adb92347ccab41098c`。已下载 HTML、Stitch 预览缩略图，并用本地 Chrome 渲染 7 张 1440 全页截图。输出见 `tasks/T40/output/t34-pages-to-stitch-generation-report-2026-08-20.md`、`tasks/T40/output/stitch-generation-ledger-2026-08-20.json`、`tasks/T40/output/qa/domain-copy-t40-report.json` 和 `tasks/T40/output/qa/static-t40-stitch-html-report.json`。

T40 结论：生成动作已完成，但不能登记为正式高保真。`domain-copy` QA 7 页中 4 页通过、3 页失败：About 命中 `中台`；Resources / Solutions 因繁體中文页脚可见 `Candao` 失败。静态 HTML QA fail：7 页均含 Material Symbols ligature 文本；Solutions 页脚含假备案号 `粵ICP備12345678號`；About 额外出现 `超過 500 名技術與營運專家`、`無縫對接第三方 POS 與 ERP`、`SLA 高可用性` 等未确认或不建议表达。未发现 `{{DATA...}}`、`COMPONENTS_`、`IMAGE_` 内部占位残留，也未发现 `IDMS` / `SAAS` 等大小写错误。未更新 `tasks/T17/output/design-handoff/.stitch/metadata.json`。

2026-08-20 已完成 T39 `Figma T11.5 Web Desktop-first 范围重置`。根据用户最新确认，Figma T11.5 中 `04`、`05`、`06`、`07`、`08`、`09`、`10` 内容均不符合，不保留；当前连基本 Web 端还没有确定，其他响应式不需要先做。已在 Figma `00 Cover` 新增 `CURRENT BASELINE / Web Desktop First Reset / 2026-08-20`，在 `01 Design Tokens` 新增 `WEB DESKTOP TOKENS / Current Baseline / 2026-08-20`，在 `02 Components` 新增 `WEB DESKTOP COMPONENTS / Current Baseline / 2026-08-20`；`04-10` 已重命名为“不保留”并加可见 Banner。旧 `08 Desktop Pages / TC Production`、`09 Mobile Pages / TC Production` 和 `10 TC Production Review` 不得再作为 T12 / T13 / Stitch / React 的当前输入。证据见 `tasks/T39/output/figma-t11-5-web-desktop-reset-report-2026-08-20.md` 与 `tasks/T39/output/figma-t11-5-web-desktop-reset-ledger-2026-08-20.json`。

2026-08-20 已继续长期目标二并执行 T38 `Resources 高保真 Stitch 单页生成`，当前为 blocked。已按单页单目标规则只调用一次 `generate_screen_from_text`，Project `10888304674441209287`、Design System `assets/a99f770bf474445d98b287cf983bc147`、session `15280406076998791054`；Stitch 返回 session 但没有返回新 screen ID。随后按 30 秒间隔轮询 `list_screens` 10 次，项目列表未出现新的 Resources screen。恢复后追加复核当前 Stitch screen 列表，仍只存在历史 Resources screen `d2b440264f1d435e99052f430177c868`、`068558a8cbbc4e85b368a7ae8d6f8225`、`efd66e8cb18442fb843910ab6ffb863f`；这些历史稿不是 T38 当前 Prompt 产物，不能证明符合本轮 T35 风格和 T38 内容约束。标题里的 `Candao` 是可修正命名问题，不是主阻塞。T38 未生成正式 HTML、目标图或 QA 通过记录，未更新 `tasks/T17/output/design-handoff/.stitch/metadata.json`。证据见 `tasks/T38/output/resources-hifi-stitch-run-report-2026-08-20.md` 与 `tasks/T38/output/stitch-session-log-2026-08-20.json`。

2026-08-20 已继续长期目标二并执行 T37 `Integrations 高保真 Stitch 单页生成`，当前为 blocked。已按单页单目标规则只调用一次 `generate_screen_from_text`，Project `10888304674441209287`、Design System `assets/a99f770bf474445d98b287cf983bc147`、session `8812386093922816405`；Stitch 返回 session 但没有返回新 screen ID。随后按 30 秒间隔轮询 `list_screens` 10 次，项目列表未出现新的 Integrations screen。旧 screen `621fecf4ef6945f58faa162d9f8af3b3` 仍存在，标题为 `整合能力 - Candao International (Fixed)`，但它不是 T37 输出，且标题含 `Candao`，不能作为繁體中文正式高保真登记。T37 未生成正式 HTML、目标图或 QA 通过记录，未更新 `tasks/T17/output/design-handoff/.stitch/metadata.json`。证据见 `tasks/T37/output/integrations-hifi-stitch-run-report-2026-08-20.md` 与 `tasks/T37/output/stitch-session-log-2026-08-20.json`。

2026-08-20 已继续长期目标二并执行 T36 `Solutions 高保真 Stitch 单页收口`，当前为 blocked。上一轮 Solutions `generate_screen_from_text` session `6134769186452970130` 未在 Stitch screen 列表中落地新页面；本轮检查既有 C v3 Solutions screen `4188f2a7f3f84566b5644b19efdedadd`，下载 HTML / 预览图并渲染 `tasks/T36/output/screenshots/solutions-cv3-source-1440-full.png`。旧稿因中文页显示 `Candao`、外部生成图片、未授权状态数字、Material icon ligature 文字、Hero 文案未对齐和 Footer 未确认法务链接而 QA fail。已按规则只对同一 screen 调用一次 `edit_screens`，session `9105741495013900777`；10 次轮询后目标 screen HTML / 截图 / 标题 / 高度均未变化，也无新 Solutions screen。因此 T36 未生成正式输出，不能将旧 C v3 Solutions 放入 `tasks/T17/output/design-handoff/.stitch/designs/`。

2026-08-20 已完成 T35 `Figma Homepage MCP Style Extraction and Token Update`。Figma 首页节点 `336:7645` 的新版风格已提取为 `tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`，Stitch 约束为 `tasks/T35/output/stitch-input/homepage-mcp-stitch-guardrails-2026-08-20.md`，Figma token / variable 验证记录为 `tasks/T35/output/figma-token-update-ledger-2026-08-20.json`。本地 `tasks/T17/output/design-handoff/design-tokens.json` 与 `tasks/T17/output/design-handoff/.stitch/DESIGN.md` 已按首页 MCP 更新；Figma MCP 验证变量、文本样式、效果样式、Web syntax、mode name 和 letter-spacing 均通过。

2026-08-20 已按用户要求单独将 `tasks/T27/output/stitch-ready-low-fidelity/index.html` 转换为图片。输出文件为 `tasks/T27/output/stitch-ready-low-fidelity/index-1440-content.png`，尺寸 1440 x 2059；已用 Chrome DevTools 精确读取页面内容高度后截图，并用 `sips` 与视觉检查确认图片非空、无长空白尾部。单页 QA 为 `tasks/T34/output/qa/t27-index-single-image-export-check-2026-08-20.json`，状态 pass。该图片是 T27 低保真入口总览图，不是正式高保真图。

2026-08-19 已完成 T34 `Export T27 Low-fidelity Package as Images`。根据用户指定的 `tasks/T27/output/stitch-ready-low-fidelity/index.html`，已从 T27 `stitch-ready-low-fidelity` 包重新渲染入口总览和 8 个一级页面，导出为 1440 宽完整 PNG。输出目录为 `tasks/T34/output/images/`，共 9 张：`01-index-low-fidelity-1440-full.png`、`02-home-low-fidelity-1440-full.png`、`03-solutions-low-fidelity-1440-full.png`、`04-platform-low-fidelity-1440-full.png`、`05-integrations-low-fidelity-1440-full.png`、`06-customers-low-fidelity-1440-full.png`、`07-resources-low-fidelity-1440-full.png`、`08-about-low-fidelity-1440-full.png`、`09-demo-low-fidelity-1440-full.png`。QA 报告 `tasks/T34/output/qa/t27-low-fidelity-image-export-check-2026-08-19.json` 为 9/9 pass；导出报告为 `tasks/T34/output/t27-low-fidelity-image-export-report-2026-08-19.md`。

2026-08-19 已完成 T33 `Export Current High-fidelity Pages as Images`。当前正式高保真范围只包括 `tasks/T17/output/design-handoff/.stitch/designs/` 中的 Home 和 Platform，两页已用 Chrome / Playwright 从正式 HTML 重新渲染为 1440 宽完整页面 PNG：`tasks/T33/output/images/home-hifi-1440-full.png`（1440 x 4308）和 `tasks/T33/output/images/platform-hifi-1440-full.png`（1440 x 2863）。QA 报告为 `tasks/T33/output/qa/hifi-page-image-export-check-2026-08-19.json`，2/2 pass；导出报告为 `tasks/T33/output/hifi-page-image-export-report-2026-08-19.md`。T32 Customers 失败 screen 未纳入本次正式高保真图片导出。

2026-08-19 已执行 T32 `Customers High-fidelity Stitch Input`，当前状态为 blocked。用户要求“把高保真的图给到 Stitch 进行设计”，本轮以当前浏览器所在的 Customers 页为单页目标，读取 T31 最新视觉媒介层、T27 Stitch-ready 低保真包、T17 Stitch 全局上下文、`.stitch` 元数据和 `domain-copy/` 规则后，按单页单目标约束只调用一次 `generate_screen_from_text`。Stitch 返回 screen `ae3d839fa9e44a2a8526c6e099edfd16`，但标题和内容偏成 Home；已下载失败 HTML / PNG 到 `tasks/T32/output/stitch-downloads/` 并重命名为 `failed-home-generated-from-customers-prompt-*`。随后只对同一 screen 调用一次 `edit_screens`，截至本轮多次轮询仍未写回可下载 Customers 页面。domain-copy QA 和静态检查均 fail，失败报告位于 `tasks/T32/output/qa/`。该 screen 不进入正式 `tasks/T17/output/design-handoff/.stitch/designs/`。下一步若继续“把高保真图给到 Stitch”，必须先由用户明确批准 `tasks/T32/output/stitch-input/customers-hifi-upload-approval-request-2026-08-19.md` 中的三张 PNG 上传清单，再走 `stitch::upload-to-stitch` 本地上传脚本。

2026-08-19 已完成 T31 `Visual Media Layer in Low-fidelity Pages`。当前最新对外低保真入口仍是 `tasks/T27/output/stitch-ready-low-fidelity/index.html`，但已在 T30 的真实内容还原基础上继续补齐页面内视觉媒介表达：摄影构图、产品截图式界面、概念拓扑、视频入口、指标图表和动效关键帧已经直接进入对应内容区域。Customers 已补客户门店与品牌场景摄影构图、案例数据看板、导入前后关键帧和指标图表；Platform 已补产品截图式工作台、Hero 产品切换关键帧和 2x2 产品视频入口；Home、Solutions、Integrations、Resources、About、Demo 已分别补入产品画面、场景拓扑、资料同步关键帧、资源路径、公司服务摄影构图和演示分流产品画面。`README.md`、`stitch-ready-prompt-pack.md` 和 `stitch-ready-page-map.json` 已同步说明当前 HTML 包含视觉媒介层。domain-copy QA 9/9 通过，静态视觉媒介 QA 9/9 通过，浏览器 QA 18/18 通过，截图见 `tasks/T31/output/screenshots/`。本轮未调用 Stitch，未生成高保真 screen，也未批准 H3-01 / H3-02。当前版本可作为视觉化低保真 / 中保真输入；真实产品截图、产品视频、客户 Logo、客户现场照片、公司照片、证书图片和客户引用语原图仍需真实素材或人工确认。

2026-08-19 已完成 T30 `Real Content Restoration in Low-fidelity Pages`。当前最新对外低保真入口仍是 `tasks/T27/output/stitch-ready-low-fidelity/index.html`，但已按用户反馈从 T29 的“页面内说明型元素配置”纠正为“元素真实进入页面内容”。`index.html` 不再展示元素配置总览，而是 8 页真实内容预览；`home.html`、`solutions.html`、`platform.html`、`integrations.html`、`customers.html`、`resources.html`、`about.html`、`demo.html` 已移除底部「頁面元素配置」卡片区，并把客户品牌条、全链路营运拓扑、场景链路、平台工作台、产品视频入口、AMS / Connector 接入拓扑、资料流向、案例证据、资源入口、公司信号条和演示分流流程还原进页面现有模块。T29 作为历史记录保留，但当前不得再按“底部说明卡”方向扩展。domain-copy QA 9/9 通过，静态 QA pass，浏览器 QA 18/18 通过，截图见 `tasks/T30/output/screenshots/`。本轮未调用 Stitch，不批准 H3-01 / H3-02。

2026-08-19 已完成 T29 `Inline Element Configuration in Latest Low-fidelity Link`，现为历史记录且已被 T30 覆盖。T29 曾从“页面结构 + 独立元素地图”升级为“页面结构 + 页面内元素配置”，在 `index.html` 新增 8 个页面元素配置摘要，并在 8 个页面底部新增「頁面元素配置」卡片区。用户随后指出这仍然是说明型模块，不是目标方向；当前不得继续按 T29 的底部说明卡扩展，应以 T30 真实内容还原版为准。

2026-08-19 已完成 T28 `Stitch-ready Element Placement Layer`。当前对外提供给 Stitch 的低保真输入不再只有页面 HTML 和文案 Prompt，还包括 `tasks/T27/output/stitch-ready-low-fidelity/element-placement-guide.md` 与 `tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`。该元素层覆盖 8 页、41 个模块，明确每个模块应放置的产品舞台、营运中枢拓扑、场景地图、Connector 网络、指标卡、实名案例卡、资源路由、支援查询板、公司网络、时间轴、服务生命周期和 Demo 表单分流；同时标明素材状态、缺真实素材时的 fallback 和禁止替代方式。Platform 已补齐 `CDBI / Finance` 产品演示入口卡，并将演示入口卡片改为四列等权。T28 元素结构检查 pass，元素层 domain-copy QA 8/8 通过，可见 HTML domain-copy QA 9/9 通过，静态检查 pass，Platform 浏览器检查 pass。本轮未调用 Stitch，不批准 H3-01 / H3-02。

2026-08-19 已完成 T27 对外 Stitch-ready 低保真整合包。当前可提供给 Stitch 的低保真版本为 `tasks/T27/output/stitch-ready-low-fidelity/`，入口是 `index.html`，页面清单是 `stitch-ready-page-map.json`，提示词包是 `stitch-ready-prompt-pack.md`。该版本从 T26 设计执行版低保真整理而来，但面向外部输出：只保留访客可见页面、页面地图、Stitch prompt 和 QA 结果，不把对内证据说明、任务状态、占位说明或源资料分析作为页面内容展示。本轮未调用 Stitch 生成新 screen，也未覆盖 T17 / T26 的内部产物。H3-01 低保真业务验收和 H3-02 `approved_and_locked` 仍需人工确认。

T11.5-A Design Execution Skill + Figma 高保真设计、T11.5-B Visual Director Agent、T11.5-C Stitch / AI Web Generator 方案 C、T11.5-D Stitch 交互评审网页、T11.5-C v2 一级目录主页、2026-08-10 目录内容补齐 v0.2、Solutions / Platform 差异化 v0.3、2026-08-11 Stitch C v3 关键页面输出、Resources 模块化修正和 About 内容展开 QA 修正版、T11.6 shadcn MCP + Aceternity Hero 首个试用方案、React / Next.js + Tailwind 能力全景原型、2026-08-12 Aceternity Figma 替换规划与首頁测试样例、2026-08-12 Figma 当前整理页全站叙事审查、2026-08-13 React / Next Home Hero QA4 进入动画示例、2026-08-14 Evidence-First / Deep Inquiry 全局工作规则补丁、T14 业务专属性内容再生成 Brief、T15 旧官网 / PPT 页面模块证据矩阵 v1.0、T16 核心页面繁體中文内容骨架 v1.0、T17 核心页面低保真原型图、T18 客戶案例 / 關於餐道 低保真补齐、T19 行业文案能力落地、T20 人工确认关卡机制、T21 人工决策应用与品牌显示规则、T22 資源 / 預約產品演示低保真补齐、T23 低保真逐页文案业务 QA 与收紧、T24 产品名大小写敏感规则补丁、T25 低保真叙事局部重构，以及 T26 设计输入包与设计执行版低保真均已完成。2026-08-17 已继续补强 T26：`module-manifest.yaml` 现在是 47 个独立模块，四个 storyboard 已补齐 Composition Contract。当前内容核对基准为 `tasks/T17/output/low-fidelity-wireframe-prototype/index.html` 的 T25 版本；当前设计交付基准为 `tasks/T17/output/design-handoff/` 和 `tasks/T17/output/design-ready-wireframe/`。后续如进入 Stitch / Figma / Remotion，应先以 T26 的 content 分层、逐条文本分类清单、47 模块 manifest、DESIGN.md、reference map、asset manifest、motion manifest、Prompt Pack、交互 QA 和外部生成准备摘要为输入，而不是直接把 T25 HTML 美化。H3-01 低保真业务验收、H3-02 `approved_and_locked` 和外部 Stitch / Figma 写入仍需人工确认。

## Current Truth

- 2026-09-02 T61 已确认：Figma 当前有平台页 Aceternity 子板块高保真重设稿 `925:2 / Platform / Desktop 1440 / TC / Aceternity Mapping T61`，来源为原平台页 `488:350`，原稿保留未覆盖。新稿包含 7 个模块，逐模块映射 Aceternity 参考，已完成 Figma 读回、domain-copy QA 和 1440 全页截图。后续继续六页改稿时，以 T60 映射表和 T61 的分段执行 / QA 方式为样板，不要批量套模板。
- 2026-09-02 T59 已确认：Figma 当前有解决方案英文重做版节点 `842:2 / Solutions / Desktop 1440 / EN / Revision 2`，来源为繁中解决方案节点 `447:8876` 的重新克隆和可编辑文本英文化；T58 旧英文稿 `812:2` 仍保留但不作为本次重做结果。可编辑文本已通过读回 QA 与 domain-copy QA。Google Translate 当前不可达，访问失败证据已归档；`Finance Center` 未进入英文页面可见文案，使用 `financial reconciliation`。
- 2026-09-02 T58 已确认：Figma 当前有英文解决方案节点 `812:2 / Solutions / Desktop 1440 / EN`，来源为繁中解决方案节点 `447:8876` 的克隆和可编辑文本英文化；可编辑文本已通过读回 QA 与 domain-copy QA。Google Translate 当前不可达，访问失败证据已归档；`Finance Center` 未进入英文页面可见文案，使用 `financial reconciliation`。
- 2026-09-01 T56 已确认：Figma `03 Desktop Pages / Bilingual Validation` 页面上方当前应保留原来的参考截图，并保留原始 Aceternity 组件来源文字；只把这些原文字本身设置为对应真实组件 URL hyperlink。T54 的替换面板做法和 T55 的官网 sitemap 文字替换做法均已归档；后续不得再把顶部参考区改成“最终层级卡片”或“官网最终层级路径文字”。
- 2026-08-27 T52 已确认：T51 的视觉质量问题成立，且再次用 Stitch 生成的 Premium Variant `32612aab4ec048b1a9eed77868dfe803` 仍不可用。该变体内容覆盖仅默认 `13/58`、交互 `15/99`，并重新出现 `Candao`、假 `粵ICP` 与 Material ligature 风险。当前最新可控高保真视觉基准为 `tasks/T52/output/prototype/index.html`，不是任何 T51 / T52 Stitch 变体。若后续继续进 Stitch，必须走可控 HTML / 截图上传或设计同步路径，并以 T52 合同复验。
- 2026-08-23 T45 已确认：Stitch 原生 `generate_screen_from_text` 不能稳定逐字还原 T27 长页面低保真内容，即使使用 copy-register 增强提示词和精准 `edit_screens`，下载版仍未达到 100% 覆盖。六页原生 screen 已生成但均不得登记正式稿。当前唯一全量 QA pass 的版本是 `tasks/T45/output/local-html/` 下 6 个本地 upload-ready HTML；上传到 Stitch 前必须等待用户明确批准 `tasks/T45/output/stitch-input/t45-upload-approval-request-2026-08-23.md`。
- 2026-08-23 T44 已确认：Solutions 后续验收门槛必须是 `69/69 = 100%`，不能接受“基本覆盖”。当前本地可控高保真基准已 100% 通过并更贴近 T35 首页风格；Stitch 新 screen `b9cd15b7d54944efa9716bc2159a1f25` 已生成，首轮下载件只有 `67/69` 且有 `arrow_forward`，一次 edit_screens 已返回修正操作，本地重放后 `69/69`，但远端可下载 HTML 仍未同步编辑后版本。正式登记前必须重新下载 Stitch screen 并用 `tasks/T44/output/scripts/qa-solutions-home-style.mjs` 复验。
- 2026-08-23 T43 已确认用户反馈成立：T42 Stitch 对 T27 低保真内容还原失败，覆盖率仅 23/69 = 33.3%。后续不要继续用同类纯短 prompt 盲目重试 Solutions；推荐先用本地 HTML / React 可控高保真还原 T27 DOM 内容，或在用户明确批准后上传 `solutions.html`、`03-solutions-low-fidelity-1440-full.png` 与内容还原契约到 Stitch。上传前必须遵守 `stitch::upload-to-stitch` 审批规则。
- 2026-08-20 T42 已按 Prompt v2 重试 Solutions 单页并生成 screen `fdf1d4f894a8483885f7b3ba4c1c566c`，但 QA fail，不得登记正式高保真。关键失败项：Header 缺 `資源`、可见 Material Symbols ligature、Footer 含 `Candao` 与版权样板、缺 `Product Capability Bridge` / `Proof / Next Step`。一次 `edit_screens` 返回 DOM 操作但未稳定写回可下载 HTML。
- 2026-08-20 T39 已完成 Figma T11.5 范围重置：`00`、`01`、`02` 已新增 Web Desktop-first 当前基线；`04-10` 已被标记为不保留。当前阶段只确认先回到 Web Desktop 1440 的基本稿，Mobile、Responsive、Motion、旧 `TC Production Review` 均不再作为当前输入。T12 已同步修正，不得再把旧 `08/09/10` 当作生产视觉主输入。
- 2026-08-20 T38 已尝试生成 Resources 高保真，但 Stitch 未写回新页面：一次 `generate_screen_from_text` session `15280406076998791054` 后 10 次 `list_screens` 轮询仍无新 Resources screen。恢复后追加复核当前 Stitch 列表，仍只有历史 Resources screen `d2b440264f1d435e99052f430177c868`、`068558a8cbbc4e85b368a7ae8d6f8225`、`efd66e8cb18442fb843910ab6ffb863f`；它们不是 T38 当前 Prompt 产物，不能证明符合本轮风格与内容约束。标题里的 `Candao` 是可修正命名问题，不是主阻塞。正式高保真输出仍只有 Home / Platform。
- 2026-08-20 T37 已尝试生成 Integrations 高保真，但 Stitch 未写回新页面：一次 `generate_screen_from_text` session `8812386093922816405` 后 10 次 `list_screens` 轮询仍无新 Integrations screen。旧 screen `621fecf4ef6945f58faa162d9f8af3b3` 不是本轮输出，且标题含 `Candao`，不得登记为正式 TC 高保真。正式高保真输出仍只有 Home / Platform。
- 2026-08-20 T36 已尝试收口 Solutions 高保真，但 Stitch 未写回可用页面：旧 C v3 screen `4188f2a7f3f84566b5644b19efdedadd` QA fail；一次 `edit_screens` session `9105741495013900777` 后 10 次轮询仍未变化。正式高保真输出仍只有 Home / Platform，Solutions 不得登记为完成。
- 2026-08-20 T35 已完成 Figma 首页 MCP 风格提取、Design tokens / `.stitch/DESIGN.md` 更新和 Figma 变量 / 样式验证；后续剩余页面 Stitch 高保真必须引用 T35 输出。
- 2026-08-19 T34 曾按 T27 `stitch-ready-low-fidelity/index.html` 导出入口总览和 8 个页面；用户随后确认入口总览不是真正产品输出。当前产品输出图片清单以 `tasks/T34/output/product-output-image-manifest-2026-08-20.json` 为准，只包含 8 个真实页面；`01-index-low-fidelity-1440-full.png` 和 `tasks/T27/output/stitch-ready-low-fidelity/index-1440-content.png` 仅作为内部入口 / QA 截图，不作为产品交付图。
- 2026-08-19 T33 已将当前正式高保真 Home / Platform 单独保存为完整 PNG 图片。输出目录为 `tasks/T33/output/images/`：`home-hifi-1440-full.png` 与 `platform-hifi-1440-full.png`。导出来源只使用 T17 正式 `design-handoff/.stitch/designs` HTML；T32 Customers 失败产物和历史探索稿未纳入。
- 2026-08-19 T32 已尝试将 Customers 高保真输入送入 Stitch，但未形成可用正式稿。一次 `generate_screen_from_text` 产物 `ae3d839fa9e44a2a8526c6e099edfd16` 偏成 Home；一次同 screen `edit_screens` 修正截至本轮未写回。失败 HTML / PNG 位于 `tasks/T32/output/stitch-downloads/`，QA 位于 `tasks/T32/output/qa/`，执行报告为 `tasks/T32/output/customers-hifi-stitch-run-report-2026-08-19.md`。不得把该 screen 作为 Customers 高保真；T17 正式 Stitch 输出仍只保留既有 Home / Platform。继续上传高保真参考图前，必须先获得用户对 `tasks/T32/output/stitch-input/customers-hifi-upload-approval-request-2026-08-19.md` 的明确批准。
- 2026-08-19 已完成 T31 低保真视觉媒介层补齐。当前最新低保真链接为 `tasks/T27/output/stitch-ready-low-fidelity/index.html`；该链接不再只是文字与结构说明，而是在页面模块中直接展示媒介承载：`photo-scene` 摄影构图、`product-shot-frame` 产品截图式界面、`concept-illustration` 概念拓扑、`motion-strip` 动效关键帧、`video-thumb` 产品视频入口和 `metric-chart` 指标图表。T31 输出为 `tasks/T31/output/visual-media-layer-report-2026-08-19.md`，可复核脚本为 `tasks/T31/output/scripts/add_visual_media_layer.py`，静态 QA 为 `tasks/T31/output/scripts/qa_visual_media_low_fidelity.py`，浏览器 QA 为 `tasks/T31/output/scripts/qa_browser_visual_media_low_fidelity.cjs`。QA 输出：`domain-copy-t31-report.json` 9/9 pass，`static-visual-media-low-fidelity-report.json` 9/9 pass，`browser-visual-media-low-fidelity-report.json` 18/18 pass。T31 仍然不是最终高保真，也不代表 H3-01 低保真业务验收或 H3-02 文案锁定已通过；真实产品截图、产品视频、客户 Logo、客户现场照片、公司照片、证书图片和客户引用语原图仍需素材或人工确认。
- 2026-08-19 已完成 T30 低保真真实内容还原。当前最新低保真链接为 `tasks/T27/output/stitch-ready-low-fidelity/index.html`；T29 的“元素配置总览 / 页面底部配置卡片”已被移除，元素要求已经进入页面真实内容层。新增与修改范围见 `tasks/T30/output/real-content-restoration-report-2026-08-19.md`；可复核脚本为 `tasks/T30/output/scripts/realize_elements_in_pages.py`，静态 QA 为 `tasks/T30/output/scripts/qa_realized_low_fidelity.py`，浏览器 QA 为 `tasks/T30/output/scripts/qa_browser_low_fidelity.cjs`。QA 输出：`domain-copy-t30-report.json` 9/9 pass，`browser-realized-low-fidelity-report.json` 18/18 pass，静态 QA pass。`element-placement-map.json` 和 `element-placement-guide.md` 仅作为结构化来源，不得直接作为页面可见说明层。该版本仍不代表 H3-01 低保真业务验收通过，也不代表任何页面文案已进入 `approved_and_locked`。
- 2026-08-19 已完成 T29 低保真链接内嵌元素配置，现为历史记录且已被 T30 覆盖。T29 的页面底部元素配置卡片不再是当前最新低保真方向；后续不得把配置说明直接作为页面可见模块，应先转化为真实页面内容、流程、工作台、案例或表单结构。
- 2026-08-19 已完成 T28 元素放置层补齐。新增 `element-placement-guide.md` 和 `element-placement-map.json`，并更新 `stitch-ready-prompt-pack.md`、`stitch-ready-page-map.json`、`README.md`、`platform.html` 和 `assets/stitch-ready.css`。元素地图覆盖 8 页、41 个模块；每个模块均包含放置元素、元素说明、素材状态、缺素材处理和禁止替代。真实产品截图、产品视频、客户 Logo、客户照片、公司照片、证书图和客户引用语原图仍必须使用真实素材或后续确认素材，不得由模型生成。Platform 的产品演示入口已从三项补齐为 OMS、Menu / Store、DMS / iDMS、CDBI / Finance 四项，并通过浏览器检查确认四列等权。QA 输出位于 `tasks/T28/output/qa/`；`element-placement-structure-check-2026-08-19.json` 为 pass，`element-placement-copy-qa-result-2026-08-19.json` 为 8/8 pass，`stitch-ready-visible-copy-qa-result-after-elements-2026-08-19.json` 为 9/9 pass，`stitch-ready-static-check-after-elements-2026-08-19.json` 为 pass，`platform-browser-check-after-element-card-2026-08-19.json` 为 pass。
- 2026-08-19 已完成 T27 `Stitch-ready Low-fidelity External Package`。本轮将 `tasks/T17/output/design-ready-wireframe/` 的 8 个最新页面整理到 `tasks/T27/output/stitch-ready-low-fidelity/`，新增外部总览入口 `index.html`、页面地图 `stitch-ready-page-map.json`、Stitch 提示词包 `stitch-ready-prompt-pack.md`、授权 SVG Logo、全页截图和交付报告。外部包已替换临时品牌字标，移除页面可见内部说明、placeholder、英文 UI 标签、假 Logo 风险、未授权事实风险和错误产品名大小写；JS 交互文案也已改为繁體中文。`domain-copy` QA 9/9 通过，静态检查 pass，Chrome + Playwright 9 页全页截图与交互检查 9/9 通过；`domain-copy/glossary.yaml` 已补充已授权指标 `1,578 萬` / `1,578 萬元`，用于避免 QA 误伤 PPT 授权案例数据。该包可作为后续 Stitch 低保真输入，但仍不能由 Agent 自行批准 H3-01 低保真业务验收或 H3-02 `approved_and_locked`。
- 2026-08-17 已继续执行 T17 Stitch 高保真单页单目标流程，新增 Platform / Desktop / TC 最终稿。按 `stitch/metadata.json` 推荐顺序在 Home 后推进 Platform；首次 `generate_screen_from_text` 产出 `ea23e53acc3446a9bce5b1aa6a3d4dd6`，但因缺少 P02-P06 核心模块、出现外部生成图片和英文 Footer，判定为硬性问题；已按规则只对同一页面目标执行一次 `edit_screens`，最终 screen 为 `03fa757724764d32bc84634a727427b3`。正式输出位于 `tasks/T17/output/design-handoff/.stitch/designs/candao-platform-hifi-final-03fa757724764d32bc84634a727427b3.html` 与 `tasks/T17/output/design-handoff/.stitch/designs/candao-platform-hifi-final-03fa757724764d32bc84634a727427b3-full.png`；首稿 HTML 移至 `.stitch/superseded/platform/`。已更新 `.stitch/metadata.json`、`stitch-detail-issue-log-2026-08-17.md` 和 `stitch-platform-hifi-run-report-2026-08-17.md`；`domain-copy` QA 10/10 pass，HTML 静态检查 pass，已检查导航、文案、内部词、placeholder、假 Logo、未授权数字、图标英文 ligature、`iDMS` / `SaaS` / `AMS / Connector` 大小写和 `text-transform`。产品截图和产品视频仍缺失，当前 Platform 使用抽象截图位和产品名视频入口，不代表真实产品界面。
- 2026-08-17 已完成 T26 设计输入层重构补丁和目标完整性审计，输出 `tasks/T26/output/design-input-layer-restructure-patch-2026-08-17.md`、`tasks/T26/output/design-input-layer-final-verification-2026-08-17.json` 和 `tasks/T26/output/objective-completion-audit-2026-08-17.md`，并更新 `tasks/T17/output/design-handoff/module-manifest.yaml`、`asset-manifest.yaml`、四个 `motion-storyboards/*/storyboard.md`、T26 报告与 QA 文档。`module-manifest.yaml` 已从合并模块拆成 47 个独立模块，字段检查结果为 47 个模块、47 个唯一 ID、无合并 ID、无缺字段；`asset-manifest.yaml` 共 9 个素材项，均有 `content_description`、明确主模块和有效关联模块；Manifest 级 domain-copy QA 47/47 通过；四个 storyboard 均包含 purpose、duration、fps、aspect_ratio、sequence、elements、assets、loop_behavior、poster、reduced_motion_fallback 和 stitch_keyframes；最终验证 overall_status 为 `pass`。该补丁确认当前需要的是“设计输入层 / 交付协议重构”，不是推翻 T25 业务内容。
- 2026-08-16 已完成 T26 `Design Handoff Package and Design-ready Wireframe`，输出 `tasks/T26/output/design-handoff-package-report-2026-08-16.md`、`tasks/T26/output/requirement-completion-audit-2026-08-16.md` 和 `tasks/T26/output/external-generation-readiness-summary-2026-08-16.md`，并新增 `tasks/T17/output/design-handoff/` 与 `tasks/T17/output/design-ready-wireframe/`。本轮判断需要到“设计输入层重构”的程度，但不是推翻业务内容；T25 保持为内容核对基准，T26 成为后续 Stitch / Figma / Remotion / 前端的设计交付基准。已补齐内容分层、逐条文本分类清单、访客文案、`.stitch/DESIGN.md`、design tokens、visual direction、component style map、module manifest、reference map、asset manifest、missing-assets、asset cleanup plan、motion manifest、四个 storyboard、Stitch Prompt Pack、8 个独立 design-ready HTML 页面、扩展交互状态、移动导航抽屉和 QA 报告。`content-classification-inventory.json` 共 592 条文本；`asset-manifest.yaml` 每项已有 `content_description`；8 个页面 prompt 均有“访客可见内容 / 模块呈现方式 / 参考图与素材文件”固定结构。domain-copy 基线 QA 11/11 通过，交互状态文案 QA 7/7 通过，结构检查通过，Google Chrome + Playwright 扩展交互检查 10/10 通过。首页视觉母版、真实产品截图、产品视频、客户 Logo、案例图片和公司图片仍缺失；未执行外部 Stitch / Figma 写入、未生成最终 Remotion 视频、未新增 `approved_and_locked`。
- 2026-08-16 已完成 T25 `Low-fidelity Narrative Restructure Patch`，输出 `tasks/T25/output/low-fidelity-narrative-restructure-report-2026-08-16.md`，并更新 `tasks/T17/output/low-fidelity-wireframe-prototype/index.html`。本轮回应用户 11 项低保真问题反馈，判断需要低保真叙事结构的局部重构，而不是全站推倒重来。Home 已改为定位 + 复杂生态 + 规模证明 + 全链路能力总览；Complexity Map 已改为餐饮 O2O 生态复杂度图，不再混产品与功能；Platform 能力地图已改为 6 项可切换 rail，右侧固定承载场景、业务对象、状态 / 操作、对应产品、来源和下一步；已补齐 Solutions / Platform / Integrations CTA；已新增旧官网产品视频入口候选；About 已改为专业企业定位和服务交付能力表达。domain-copy QA 12/12 通过，Google Chrome + Playwright 8 页导航和 Platform 6 项切换验证通过。H3-01 低保真业务验收和 H3-02 `approved_and_locked` 仍未由人工确认。
- 2026-08-15 已完成 T24 `Product Name Case-sensitive Rule Patch`，输出 `tasks/T24/output/product-name-case-sensitive-rule-patch-2026-08-15.md`。用户指出产品名称不能统一全部大写，部分产品名具有识别性，例如首字母小写、后续字母大写的 `iDMS`；本轮已将其落地为大小写敏感术语机制。`domain-copy/glossary.yaml` 新增 `case_sensitive_terms`，首批覆盖 `iDMS` 和 `SaaS`；`copy-rules.md`、`examples.md`、`copy-qa-cases.md`、`copy-feedback-log.md` 和 `domain_copy_qa.py` 已更新；当前低保真中的 `PPT-SAAS` 来源标签已改为 `PPT-SaaS`。正向 QA 3/3 通过，失败回归 3/3 按预期失败，T23 主 QA 重跑 13/13 通过，Google Chrome + Playwright 渲染文本检查 8/8 通过。后续高保真、Stitch、React 和 CSS 不得用统一大写破坏产品名。
- 2026-08-15 已完成 T23 `Page Copy Business Audit and Tightening`，输出 `tasks/T23/output/page-copy-business-audit-and-tightening-2026-08-15.md`，并更新 `tasks/T17/output/low-fidelity-wireframe-prototype/index.html`。本轮逐页复核当前 8 页低保真原型，修正 Home / Solutions 的泛化标题、Customers 的 `一站式 / 閉環 / 提高效率` 残留、Integrations 的 `Can-Dao Connector`、`IDMS` 大小写不一致、About / Demo 长段，以及 `.block-kicker` 强制大写导致 `iDMS` 视觉术语错误的问题；同时修正 domain-copy QA 对 `K+ / M+ / B+` 指标的误识别，补充样式层不得改写受保护术语规则。domain-copy QA 13/13 通过，Google Chrome + Playwright 8 页截图验证通过。下一步仍是 H3-01 低保真业务验收和 H3-02 文案锁定范围确认，不应直接进入高保真或前端生产。
- 2026-08-15 已完成 T22 `Low-fidelity Resources and Demo Completion`，输出 `tasks/T22/output/resources-demo-low-fidelity-completion-2026-08-15.md`，并更新 `tasks/T17/output/low-fidelity-wireframe-prototype/index.html`。低保真原型当前为 8 页：首頁、解決方案、平台、整合能力、客戶案例、資源、關於餐道、預約產品演示。`資源` 页面承接支援中心、FAQ、接入指南、媒體與新聞、案例資源、查詢表單和资源分流；`預約產品演示` 页面承接意图分流、场景选择、系统现况字段、演示重点摘要、提交后提示和支援分流。已修正低保真中中文 / 繁體中文品牌显示残留，domain-copy QA 10/10 通过，Google Chrome + Playwright 8 页截图验证通过。下一步建议进入 H3-01 低保真业务验收，而不是直接进高保真。
- 2026-08-15 已完成 T21 `Human Decisions Applied`，输出 `tasks/T21/output/human-decisions-applied-2026-08-15.md`。用户对 H1 / H2 / H4 的确认已写回：旧官网和 PPT 为最高权威且为最新版、旧官网产品体系视为完整、产品名沿用 PPT 或旧官网、用户提供 SVG Logo 可用于 Home Hero 下方、Customers 可用 PPT Slide 11、实名客户案例和前后对比数据可用、低保真优先、首要服务销售转化对象和品牌决策者、English 内容库后置、低保真确认后再进入 Remotion 动效素材与 Stitch / React 前端。H3-01 / H3-02 继续保留待人工答复。中文 / 繁體中文品牌显示统一为「餐道」，`Candao` 仅保留在英文 Locale、法定名、路径、代码、URL、文件名和精确来源引用中；已新增品牌显示 QA 失败回归，正向回归 10/10 通过。
- 2026-08-15 已完成 T20 `Human Confirmation Gates`，输出 `tasks/T20/output/human-confirmation-points-analysis-2026-08-15.md`。本轮成功读取用户重新上传的 3+1 人工关卡附件，建立 `human-review/human-confirmation-gates.md` 和 `human-review/current-decision-queue.md`，并将规则写入项目级 `AGENTS.md` 与 `RULES.md`。后续 Agent 可以自动推进资料整理、内容初稿、低保真和 QA，但不得自行批准 `business_facts`、`requirement_baseline`、`final_business_acceptance` 或 `permanent_rule_update`。
- 2026-08-15 已完成 T19 `Domain Copy Capability`，输出 `tasks/T19/output/domain-copy-capability-report-2026-08-15.md`。本轮建立项目级 `domain-copy/` 资料目录、`glossary.yaml`、表达规则、正反案例、QA cases、`approved_and_locked` 锁定机制、人工修改反馈日志、自动 QA 脚本和 10 项回归输入；新增项目级 `AGENTS.md`，并创建全局 `$domain-copy` Skill。正向回归 10/10 通过；失败样例可拦截泛化表达、未确认指标 / SLA、锁定文案改写和原型删减风险。
- 2026-08-15 已完成 T18 `Customers and About Low-fidelity Wireframe Supplement`，输出 `tasks/T18/output/customers-about-low-fidelity-supplement-report-2026-08-15.md`，并更新 `tasks/T17/output/low-fidelity-wireframe-prototype/index.html`。用户明确确认 PPT 中数据完全准确且授权展示，因此 `客戶案例` 已从匿名待授权占位改为授权证明页，纳入 PPT Slide 11 Performance 数据、Slide 39-41 的 Pizza-Box / JIA Group / Jardine Group 等客户案例、Slide 38 / 42-45 的行业案例指标；`關於餐道` 纳入 PPT Slide 4-6 / 131 / 132 的公司背景、ISO、DMS 稳定性和联系方式。已重新生成 6 页 1440 桌面截图并校验通过。
- 2026-08-15 已完成 T17 `Core Pages Low-fidelity Wireframe Prototype`，输出 `tasks/T17/output/low-fidelity-wireframe-prototype/index.html`、`tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/` 和 `tasks/T17/output/low-fidelity-wireframe-prototype-report-2026-08-15.md`。T17 初始将 T16 的 Home、Solutions、Platform、Integrations 四个核心页面整理为繁體中文低保真 HTML 原型图，保留来源编号、不可越界提示和跨页叙事分工；该 HTML 已在 T18 中继续补齐 `客戶案例` 与 `關於餐道`，并在 T22 中补齐 `資源` 与 `預約產品演示`，当前以 T22 的 8 页低保真状态为准。
- 2026-08-14 已完成 T16 `Core Pages Traditional Chinese Content Skeleton`，输出 `tasks/T16/output/core-pages-tc-content-skeleton-v1.0-2026-08-14.md`。本轮只生成 Home、Solutions、Platform、Integrations 四个核心页面的繁體中文内容骨架，并严格绑定 T15 来源编号；未进入最终上线 Copy、English 内容库、Figma、Stitch 或前端实现。下一步建议执行内容 QA，再补 English 内容库。
- 2026-08-14 已完成 T15 `Old Website + PPT to Page Module Evidence Matrix`，输出 `tasks/T15/output/old-website-ppt-to-page-module-evidence-matrix-v1.0-2026-08-14.md`。本轮重新抓取旧官网 API 内容，并从本地 PPT 提取关键 slide 文本，完成 Home、Solutions、Platform、Integrations、Customers、Resources、About、Demo 的页面模块证据矩阵。当前结论：Home / Solutions / Platform / Integrations 可进入繁體中文内容骨架；Customers、Proof、公开数字、认证、客户 Logo、合作伙伴名称、POS 厂商和性能指标仍必须进入待确认池。
- 2026-08-14 已完成 T14 `Evidence-first Website Content Regeneration`，输出 `tasks/T14/output/business-specific-content-regeneration-brief-2026-08-14.md`。该 Brief 将旧官网与 Candao Introduction PPT 的业务事实重新组织为新版官网内容再生成入口，明确新版问题不是视觉不够国际化，而是内容生成绕开餐道深层业务；后续必须先做 `旧官网 / PPT -> 页面模块证据矩阵 v1.0`，再进入繁體中文 + English 文案、Figma 或前端。
- 2026-08-14 已根据用户指出的根因，将“主动请求资料、深度追问、证据优先、反泛化 QA”写入全局 `AGENTS.md` 和项目 `RULES.md`。记录为 `tasks/T11.5/output/evidence-first-global-workflow-rule-2026-08-14.md`。后续餐道国际官网不得在未读取旧官网、PPT、菜单目录、参考网站和公司资料的情况下继续用通用 SaaS 表达补齐内容；任何 Figma、Stitch、AI Web Generation 或 React / Next 实现前，必须先证明页面模块有餐道业务事实、产品能力和来源证据支撑。
- 2026-08-13 已在 `source/react-next-capability-prototype/` 的 Home Hero 中实现 QA4 进入动画示例：背景视觉 300ms、Headline / 说明 / CTA 文案层 240ms + `0.06s` stagger、产品 UI overlay 280ms，均使用 `motion/react`、`easeOut`、`opacity` + `transform`，主色保持 `#528dff`，未新增未确认客户 Logo、数字、认证或英文正文。Reduced Motion 通过 `src/app/globals.css` 的 `@media (prefers-reduced-motion: reduce)` 静态降级并隐藏装饰 beams，避免 SSR / hydration mismatch。验证已通过 `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build` 和 production Playwright 截图；记录为 `tasks/T11.5/output/qa4-home-hero-motion-2026-08-13/qa4-home-hero-motion-implementation-and-design-qa-2026-08-13.md`。
- 本次 `design-qa` 已有源视觉截图和实现截图，因此执行了证据对比；但不能标记 passed。原因是现有 Figma Home 源视觉 `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12/01-home.png` 包含未确认客户 Logo 和数字区块，且布局基线与本次合规 QA4 动效实现不同。当前结论为 blocked / not passed，需要先确认新的合规 Home Hero 静态源稿或 motion storyboard 才能进入 passed 验收。
- 2026-08-13 已为 `quick-actions` 新增餐道官网 Hero 专用 QA4 快捷语示例：`QA014 餐道官网 Hero QA4 进入动画`。快捷语库路径为 `/Users/victorwong/.codex/skills/quick-actions/references/shortcut-library.md`，项目记录为 `tasks/T11.5/output/qa4-candao-home-hero-motion-shortcut-example-2026-08-13.md`；该示例使用 `ui-ux-pro-max` 确认 Hero-Centric、克制进入动画和 reduced-motion 边界，落地目标为 `motion/react`，并明确 `design-qa` 只有在具备源视觉与渲染实现截图后才能执行。
- 2026-08-13 已按用户要求将首页修改关键词放入 Stitch 生成 C v4 首页。当前候选评审版为 `C v4 / 首頁 - 餐道國際 / Desktop TC / 營運中樞完整版 (QA)`，Screen ID `9b20c9a3865b4c799f473ee1b2679487`。本地记录为 `tasks/T11.5/output/stitch-cv4-home-generation-report-2026-08-13.md`，完整 1440 截图为 `tasks/T11.5/output/stitch-cv4-home/home-operations-hub-complete-qa-full-1440.png`。该版已补齐营运中枢、微型 Dashboard、五步工作流、Bento 价值、产品截图区和 Final CTA；可见文本扫描未发现 `Candao / candao / Can Dao`、无关 Logo、SLA、24/7、99.9 等风险词残留。
- 项目显示名为“餐道国际官网重构”。
- 工作区路径为 `projects/candao-international-website/`。
- 项目级统一输出语言规范已写入 `RULES.md`。
- 2026-08-12 已完成当前 Figma 整理页的全站叙事审查，审查范围为 `BMXIuVRzSUUt9YNhVAQA6K` / `03 Desktop Pages / Bilingual Validation` / Node `3:5` 中可见的 8 个主要页面：首頁、解決方案、平台、整合能力、客戶案例、資源、關於餐道、預約產品演示。
- 本轮审查报告为 `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12.md`；截图证据目录为 `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12/`，包含 `01-home.png` 到 `08-demo.png`。
- 2026-08-12 已按用户补充要求新增全页面逐板块审查：`tasks/T11.5/output/figma-all-pages-section-audit-2026-08-12.md`；该文档逐页覆盖首頁、解決方案、平台、整合能力、客戶案例、資源、關於餐道、預約產品演示的所有主要板块，并逐项给出存在理由、链路角色、重复 / 冲突、案例与证据需求、处理建议。
- 2026-08-12 已根据用户 12 条首页排查反馈新增首页优化回应：`tasks/T11.5/output/homepage-feedback-response-and-optimization-plan-2026-08-12.md`。关键决策：官网前台统一使用“餐道”；首页空白卡片保留并作为重点产品截图位；LOGO 云替换为真实服务品牌；“一个平台连接关键流程”改为餐饮营运中枢表达；微型 Dashboard 保留但必须与能力图或步骤交互联动；“实时订单到营运决策”绑定 PPT 中 OMS、COMS、DMS、Data Asset、Finance Center 等功能；数字区保留并以 PPT `Our Performance` 页作为当前设计口径。
- 已确认可读取真实 PPT：`/Users/victorwong/Downloads/Candao Introduction 202401_L.pptx`。后续需要补 `PPT → 页面模块映射表`，把首页和所有内页板块逐一绑定 PPT 页码、产品能力、截图、案例、公开数字与待确认项。
- 全页面逐板块审查确认：当前不是缺少页面，而是每个页面都想把自己讲完整；下一轮需要让 Home 只负责开场和导流，Solutions 只负责业务场景，Platform 只负责产品能力和 UI 工作流，Integrations 只负责接入验证，Customers 只负责可信证明，Resources 只负责疑问和支持入口，About 只负责企业可信和服务方式，Demo 只负责转化分流。
- 本轮叙事结论：当前页面目录基本覆盖旧官网菜单和 v0.2 / v0.3 补齐项，但 Home、Solutions、Platform 重复讲“多渠道 / 门店 / 配送 / 数据进入统一工作流”，需要从“每页各自完整”调整为“全站递进”。
- 下一轮推荐主线固定为：`Home 建立认知 -> Solutions 确认场景 -> Platform 看实现方式 -> Integrations 验证接入 -> Customers 证明落地 -> Resources 降低疑问 -> About 建立企业可信 -> Demo 完成联系与分流`。
- 本轮 P0 修正项：移除首页无关 Logo；删除或标注未确认数字；统一导航为 `首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於餐道 / 預約產品演示`；将首页 Product Showcase 精简为认知和导流，将完整 Capability Map / UI Demo 留给 Platform；Customers 改为授权案例或匿名场景模板。
- 2026-08-12 已通过 Figma MCP 在 `BMXIuVRzSUUt9YNhVAQA6K` 的 `03 Desktop Pages / Bilingual Validation` 页面新增 Aceternity 替换规划板 `111:2` 与 `首頁 / Aceternity Replacement Test / Desktop TC` 样例 `111:59`；原 `首頁` Frame `84:468` 保留未改。
- 2026-08-12 针对用户反馈“没有看到有运用到 Aceternity 能力”，已新增纠偏版 `首頁 / Aceternity Visible Effects V2 / Desktop TC`（Node `120:2`）和 `Aceternity Visible Effect Evidence / Home V2`（Node `120:573`）；V2 明确可见化 `BackgroundBeams`、`TextGenerateEffect`、`MovingBorder`、`Feature Bento Skeleton`、`ContainerScroll`、`Logo Cloud Marquee` 和 `CTA Masonry`。
- 本轮 Figma 替换规则为：目标替换内容决定页面内容、顺序和信息密度；Aceternity Blocks 决定展示方法、布局节奏、元素风格和动效参考；基础规范为 `#528dff`、`Noto Sans TC`、`Inter`、`#16233D` 95% / 65% / 45%。
- 首页样例已回读验证：7 个区块、175 个文本节点、3 个图片节点；未发现非 `Noto Sans TC` / `Inter` 字体，也未发现非允许词的可见英文残留。
- V2 首页样例已回读验证：7 个区块、168 个文本节点、3 个图片节点；效果层数量为 `BackgroundBeams` 16、`TextGenerateEffect` 7、`MovingBorder` 18、`Bento Skeleton` 143、`ContainerScroll` 72、`Logo Cloud` 36；生产页可见英文残留为 0。
- 本轮输出记录为 `tasks/T11.5/output/aceternity-figma-replacement-plan-and-home-sample-2026-08-12.md`；截图备份为 `tasks/T11.5/output/figma-aceternity-replacement-plan-2026-08-12.png` 和 `tasks/T11.5/output/figma-aceternity-home-replacement-test-2026-08-12.png`。
- V2 修正记录为 `tasks/T11.5/output/aceternity-visible-effects-v2-correction-2026-08-12.md`；截图备份为 `tasks/T11.5/output/figma-aceternity-home-visible-effects-v2-2026-08-12.png` 和 `tasks/T11.5/output/figma-aceternity-home-visible-effects-evidence-v2-2026-08-12.png`。
- T01 顶部已加入完整“项目输出语言规范”，作为后续任务体系的前置条件。
- T01-T13 已在 `TASKS.md` 中登记，并在各自 `task.md` 中明确输出产物与输出语言。
- T01 已输出《Candao International Website Input Document》：`tasks/T01/output/candao-international-website-input-document-2026-08-02.md`。
- T01 已整理参考网站、Excel 菜单目录、Candao Introduction PPT 企业及产品资料、香港及国际官网待确认清单。
- T01 已按审查意见升级为 v1.1，新增竞品启发与可应用规则、官网表达资产整理、产品能力到解决方案映射、首页素材池、后续 Agent 语言规则。
- T01 的 `task.md` 已补回 `Original Detailed Brief`，后续回看时可直接看到最初交代的资料来源、整理维度和输出要求。
- PPT 内关键数据存在口径冲突，后续官网正式文案不得直接使用未确认数字。
- T02 已使用 `$agent-pd` design-only 生成“国际官网策略分析 Agent”规格，Agent-PD L1 确定性校验 PASS。
- T02 已输出《Website Strategy Analysis》：`tasks/T02/output/website-strategy-analysis-2026-08-02.md`。
- T02 策略结论：Candao 国际官网应从“系统/产品说明”转向“餐饮运营 SaaS 平台”表达，首页承担品牌定位、经营问题、能力摘要、信任证明和 Demo 转化。
- T02 已按审查意见升级为 v1.1，新增官网内容策略原则、用户-页面映射关系、产品体系官网表达层级、战略决策矩阵。
- T03 任务定义已调整为“战略决策固化”，要求输出最终品牌定位、官网核心叙事、导航策略、首页框架、页面优先级和内容原则。
- T03 已输出《Candao International Website Strategy V1.0》：`tasks/T03/output/candao-international-website-strategy-v1.0-2026-08-02.md`。
- T03 已冻结官网定位、用户画像、网站目标、核心价值表达、首页内容逻辑和页面规划方向。
- T03 冻结定位：中文定位为“全球餐饮智能运营 SaaS 平台”，English Positioning 为 `Intelligent SaaS Platform for Global Restaurant Operations`。
- T03 已按审查意见升级为 v1.1，在第 12 节补充品牌语气 Tone of Voice、全站视觉原则、页面设计优先级、产品展示体验原则和 T03 Review Gate。
- T04 `task.md` 已调整为基于 T03 冻结战略执行 IA，要求输出页面结构、页面关系和用户路径，禁止重新判断官网定位、搬运 Excel 原始菜单或生成最终官网 Copy。
- T04 已使用 `$agent-pd` design-only 生成“网站信息架构规划 Agent”规格，Agent-PD L1 确定性校验 PASS。
- T04 Agent 规格副本为：`tasks/T04/output/website-information-architecture-agent-spec-2026-08-02.json`。
- T04 已输出《Website Information Architecture》：`tasks/T04/output/website-information-architecture-2026-08-02.md`。
- T04 信息架构建议一级导航为：Home、Solutions、Platform、Integrations、Customers、Resources、About、Contact / Book a Demo。
- T04 已明确页面关系、每个页面的服务对象/页面目的/核心内容、Phase 1/Phase 2 划分、用户路径和 T05 Sitemap 输入。
- T04 已按审查意见升级为 v1.1，补充页面商业目标、页面内容优先级、产品页面内容结构规范、页面视觉复杂度等级和 Customers 页面策略。
- T05 `task.md` 已调整为“将 IA 转换为正式网站地图和页面清单”，必须输出页面名称、英文名称、URL、层级、页面目标、目标用户、核心内容、CTA、Phase 和状态。
- T05 已输出《Website Sitemap》：`tasks/T05/output/website-sitemap-2026-08-02.md`。
- T05 已将网站结构冻结为：Home、Solutions、Platform、Integrations、Customers、Resources、About、Contact / Book a Demo、Footer Legal。
- T05 Sitemap 已包含页面名称、英文名称、URL、层级、页面目标、目标用户、主要内容、CTA、Phase 和状态。
- T05 已明确对 T06 内容 Agent 的输入：T06 必须基于 Sitemap 的页面目标、主要内容和 CTA 生成繁体中文 + 英文官网内容。
- T05 已按审查意见升级为 v1.1，补充页面优先级矩阵、页面独立标准、Integrations 第一阶段收敛策略、Customers 第一阶段展示策略、Page Template 类型、第一阶段实际建设范围和 T06 内容深度控制规则。
- T05 v1.1 的 P0 核心页面为：Home、Solutions Overview、Restaurant Chains、Platform Overview、Order Management、Delivery Management、Integrations Overview、Customers Overview、Contact / Book a Demo。
- T06 `task.md` 已调整：必须按 P0、P1、结构预留、Phase 2 控制内容深度，不得为所有页面生成同等深度内容。
- T06 已使用 `$agent-pd` design-only 生成“国际官网内容策略 Agent”规格，Agent-PD L1 确定性校验 PASS。
- T06 Agent 规格副本为：`tasks/T06/output/international-website-copy-strategy-agent-spec-2026-08-03.json`。
- T06 已输出《Website Copy Document》：`tasks/T06/output/website-copy-document-2026-08-03.md`。
- T06 内容文档已覆盖 P0 核心页面真实双语网页模块、P1 页面简化双语框架、结构预留页面谨慎占位和 Phase 2 页面方向。
- T06 未将未确认客户、Logo、数据、认证、SLA、集成状态或 Pricing 写成公开事实。
- T06 已按审查意见升级为 v1.1，补充 Copy Priority、品牌差异化表达原则、Homepage Trust Module 备用方案、Product UI Demo 结构规范、SEO Keyword Mapping 和对 T07 的输入建议。
- T07 `task.md` 已调整为“官网 Copy 优化与定稿”，输出《Final Website Copy V1.0》，目标是优化 T06，而不是重新生成更多页面内容。
- T07 已输出《Final Website Copy V1.0》：`tasks/T07/output/final-website-copy-v1.0-2026-08-03.md`。
- T07 执行记录为：`tasks/T07/output/t07-final-copy-execution-note-2026-08-03.md`。
- T07 已按审查意见升级为 v1.1，在主文档追加 Copy Status Management、Brand Tone Guidelines、Solutions vs Platform Content Boundary、Visual Priority Matrix 和 Asset Direction。
- T07 v1.1 修订记录为：`tasks/T07/output/t07-v1.1-final-copy-supplement-note-2026-08-03.md`。
- T07 已覆盖用户要求的 Home、Solutions、Products、Cases、Company 五类页面，并按冻结 IA 映射为 Home、Solutions Overview、Products / Platform、Cases / Customers、Company / About。
- T07 额外保留 Restaurant Chains、Order Management、Delivery Management、Integrations Overview、Contact / Book a Demo，供后续 UX、视觉和审核任务承接。
- T07 已为 Home 准备无客户授权素材时可成立的 Trust Module，并为 Platform、Order Management、Delivery Management 保留 Product UI Demo 结构。
- T07 未将未确认客户、标志、数字、认证、服务承诺、集成状态、价格或合作关系写成官网事实。
- T08 已按用户要求使用 `agent-pd:agent-pd`：doctor 通过，run 触发受保护运行时 `langchain_core.embeddings` 导入错误，已记录在 `tasks/T08/output/agent-pd-run-note-2026-08-03.md`。
- T08 已手工固化 UX Agent 规格：`tasks/T08/output/international-website-ux-planning-agent-spec-2026-08-03.json`。
- T08 已输出《Website UX Specification》：`tasks/T08/output/website-ux-specification-2026-08-03.md`。
- T08 已按审查意见升级为 v1.1，在主文档追加 Design Component Framework、Cross Page User Journey、Visual Priority Definition、Photography & Media Direction、Figma Structure Recommendation。
- T08 v1.1 修订记录为：`tasks/T08/output/t08-v1.1-design-execution-supplement-note-2026-08-03.md`。
- T08 规格已覆盖 Home、Solutions Overview、Restaurant Chains、Products / Platform、Order Management、Delivery Management、Integrations Overview、Cases / Customers、Company / About、Contact / Book a Demo。
- T08 未重写官网 Copy，未新增主导航，未重新判断官网定位，未把未确认内容当作已确认事实。
- T09 `task.md` 已调整为“设计原型验证 Agent”，输出《Website Prototype Validation》，不再重复做 UX 规划。
- T09 已按用户要求执行页面体验规划，输出《Website Prototype Validation》：`tasks/T09/output/website-prototype-validation-2026-08-03.md`。
- T09 执行记录为：`tasks/T09/output/t09-prototype-validation-execution-note-2026-08-03.md`。
- T09 已以 Sitemap、Copy Document、T07 Final Copy 和 T08 UX Specification 为输入，重点规划首页 Hero、产品展示、数据证明、案例、CTA，以及产品页面的 UI 展示、功能流程和产品价值。
- T09 已覆盖 Home、Products / Platform、Order Management、Delivery Management、Integrations Overview、Contact / Book a Demo，并对 Solutions、Restaurant Chains、Cases / Customers、Company / About 给出轻量页面体验方案。
- T09 未重写官网 Copy，未新增 Sitemap，未重新判断官网定位，未将未确认客户、数据、认证、集成状态或 SLA 写成已确认事实。
- T09 已按审查意见升级为 v1.1，在主文档追加 Prototype Acceptance Criteria、Prototype Fidelity Level、Interaction Complexity Level 和 Visual Mood Input。
- T09 v1.1 修订记录为：`tasks/T09/output/t09-v1.1-prototype-validation-supplement-note-2026-08-03.md`。
- T10 `task.md` 已调整为基于 T03 Strategy、T07 Final Copy、T08 UX Specification 和 T09 Prototype Validation 输出 Visual Concept、Visual Direction、Typography、Color System、UI Style、Motion Style 和 Design System。
- T10 必须继承 T09 v1.1 的验收标准、保真度等级、交互复杂度等级和视觉情绪输入，不得重新探索网站方向或把所有页面直接提升为完整 High-fi。
- T10 已按用户要求使用 `agent-pd:agent-pd`：doctor 通过，run 触发受保护运行时 `langchain_core.embeddings` 导入错误，已记录在 `tasks/T10/output/agent-pd-run-note-2026-08-03.md`。
- T10 已手工固化视觉设计 Agent 规格：`tasks/T10/output/international-website-visual-design-agent-spec-2026-08-03.json`。
- T10 已输出《Website Visual Direction》：`tasks/T10/output/website-visual-direction-2026-08-03.md`。
- T10 执行记录为：`tasks/T10/output/t10-visual-direction-execution-note-2026-08-03.md`。
- T10 视觉总概念为 `Operational Clarity for Global Restaurant SaaS`。
- T10 已覆盖摄影风格、视频应用、色彩、字体、页面布局、产品展示方式、动效方向、UI Style、Design System、Page Visual Priority、Moodboard Direction 和 Figma Execution Notes。
- T10 已明确视觉方向应围绕真实餐饮运营场景、半真实 SaaS UI、Product UI Motion、清晰组件系统和受控 Motion 展开。
- T10 未重新定义官网策略，未重写 Copy，未重新做 UX，未新增 Sitemap，也未将未确认客户、Logo、数据、认证、集成状态或 SLA 写成已确认事实。
- T10 已按审查意见升级为 v1.1，在主文档追加 Reference Mapping、Hero Composition Rule、Brand Color Adaptation Process、Page Output Requirement 和 Visual Review Checklist。
- T10 v1.1 修订记录为：`tasks/T10/output/t10-v1.1-visual-direction-supplement-note-2026-08-03.md`。
- T11 `task.md` 已调整为“高保真视觉方案设计”，必须基于 T07 Final Copy、T08 UX Specification、T09 Prototype Validation 和 T10 Website Visual Direction 执行。
- T11 必须重点输出 Home High Fidelity Design、Platform High Fidelity Key Sections、Order / Delivery Product Motion Storyboard、Contact / Book a Demo Visual、Design System Draft、Asset Plan、Figma Handoff Structure 和 Visual Review Result。
- T11 已输出官网高保真视觉方案：`tasks/T11/output/website-high-fidelity-visual-design-2026-08-03.md`。
- T11 执行记录为：`tasks/T11/output/t11-high-fidelity-visual-design-execution-note-2026-08-03.md`。
- T11 已覆盖 Home High Fidelity Design、Platform High Fidelity Key Sections、Order Management / Delivery Management Product Motion Storyboard、Contact / Book a Demo Visual、Design System Draft、Asset Plan、Figma Handoff Structure 和 Visual Review Result。
- T11 已按用户要求使用简体中文输出，视觉素材描述保留中文 + 英文关键词，例如 `Global Restaurant Operation Scene`、`Restaurant Operation Workflow Video`、`Semi-real SaaS UI`。
- T11 未重新探索视觉方向，未重写官网 Copy，未重新做 UX，未新增 Sitemap，也未将未确认客户、Logo、数据、认证、集成状态或 SLA 写成已确认事实。
- T11 已按审查意见升级为 v1.1，在主文档追加 Visual Deliverable Definition、Prototype Generation Method、Asset Preparation List 和 Visual Prototype Review Gate。
- T11 v1.1 修订记录为：`tasks/T11/output/t11-v1.1-visual-prototype-generation-note-2026-08-03.md`。
- T11 当前产物已被明确为 High Fidelity Visual Specification，不是已生成的 Figma Frame、可点击 Prototype 或 Web Demo。
- T11.5 `task.md` 已新增：`tasks/T11.5/task.md`。
- T11.5 目标是将 T11 视觉规格转化为可查看的视觉原型，优先方式为 Figma Visual Prototype；如 Figma 未准备好，可退而输出 Image Generation Visual Exploration、Web Prototype Plan 或等待用户指定执行方式。
- T11.5 已完成 Figma Visual Prototype，文件为：`https://www.figma.com/design/BMXIuVRzSUUt9YNhVAQA6K`。
- T11.5 Figma 文件创建在 `Aiello's team`，文件名为 `Candao International Website Visual Prototype T11.5`。
- T11.5 已输出《Website Visual Prototype Package》：`tasks/T11.5/output/website-visual-prototype-package-2026-08-03.md`。
- T11.5 执行记录为：`tasks/T11.5/output/t11.5-figma-visual-prototype-execution-note-2026-08-03.md`。
- T11.5 Figma 文件包含：`00 Cover`、`01 Design Tokens`、`02 Components`、`03 Desktop Pages`、`04 Mobile Pages`、`05 Motion Storyboards`、`06 Prototype Flow`、`07 Visual Review`。
- T11.5 已覆盖 Desktop 1440：Home、Products / Platform、Order Management、Delivery Management、Contact / Book a Demo。
- T11.5 已覆盖 Mobile 390：Home、Products / Platform、Order Management、Contact / Book a Demo。
- T11.5 已覆盖 Motion Storyboards：Home Hero UI Overlay、Home Product Showcase Capability Flow、Products / Platform Capability Map、Order Management 4-step UI Demo、Delivery Management 4-step UI Demo、Contact Intent Selection。
- T11.5 已创建本地 token、text styles、effect style 和 6 个原型组件；Figma 读回校验未发现 `undefined` 文本。
- T11.5 未使用未确认客户、Logo、数字、认证、定价、SLA 或集成状态；餐饮运营图像和视频仍为素材占位，需后续替换为授权素材。
- T12 `task.md` 已调整：T12 应在 T11.5 Visual Prototype Generation 之后执行；如果 T11.5 尚未生成可查看视觉原型，T12 只能作为文档审核，不应视为最终设计审核。
- TFIX-LOCALIZATION 已完成，任务文件为：`tasks/TFIX-LOCALIZATION/task.md`。
- TFIX-LOCALIZATION 已建立《Website Production Localization Guideline》：`tasks/TFIX-LOCALIZATION/output/Website Production Localization Guideline.md`。
- 项目 `RULES.md` 已补充 Website Production Localization Guideline。
- 官网生产语言规则已修正：Primary Locale 为繁體中文，Secondary Locale 为 English。
- T07 双语 Copy 被定义为内容库，不代表视觉稿或网页原型需要同时展示繁體中文和 English。
- 所有 Figma、高保真视觉稿、Prototype、Stitch 生成网页、AI 网页截图和 Web Prototype 默认必须模拟繁體中文真实官网页面。
- 视觉稿禁止中英混排；同一页面只允许显示一个 Locale。
- Header 需要预留语言切换：`繁中 / EN` 或 `繁體中文 ▼ English`。
- Figma / Prototype Frame 命名必须使用 `/TC` 或 `/EN`，默认生产视觉稿使用 `/TC`。
- T05 已新增 v1.2：`tasks/T05/output/website-sitemap-v1.2.md`。
- T07 已新增 v1.1 生产语言补丁：`tasks/T07/output/final-website-copy-v1.1.md`。
- T08 已新增 v1.2：`tasks/T08/output/website-ux-specification-v1.2.md`。
- T09 已新增 v1.2：`tasks/T09/output/website-prototype-validation-v1.2.md`。
- T10 已新增 v1.2：`tasks/T10/output/website-visual-direction-v1.2.md`。
- T11 已新增 v1.2：`tasks/T11/output/website-high-fidelity-visual-design-v1.2.md`。
- T11.5 已新增 Stitch / AI Web Generation v1.2：`tasks/T11.5/output/t11.5-stitch-ai-web-generation-localization-v1.2.md`。
- 使用 Agent-PD design-only 生成 Website Production Localization Reviewer Agent，L1 确定性校验 PASS；固化规格为：`tasks/TFIX-LOCALIZATION/output/website-production-localization-reviewer-agent-spec-2026-08-03.json`。
- 已输出《Website Localization Review Report》：`tasks/TFIX-LOCALIZATION/output/Website Localization Review Report.md`。
- T11.5 初版 Figma 原型可作为视觉方向验证稿；生产视觉稿已补充为繁體中文单一 Locale 的 `/TC` 版本。
- T11.5 Figma 原型已完成生产语言修正，修正记录为：`tasks/T11.5/output/t11.5-tc-production-figma-correction-2026-08-03.md`。
- T11.5 Figma 文件中原 `03 Desktop Pages`、`04 Mobile Pages` 已改名为 `03 Desktop Pages / Bilingual Validation`、`04 Mobile Pages / Bilingual Validation`，仅作为历史验证参考。
- T11.5 Figma 文件曾新增 `08 Desktop Pages / TC Production`，包含：`Home / Desktop 1440 / TC`、`Platform / Desktop 1440 / TC`、`Order Management / Desktop 1440 / TC`、`Delivery Management / Desktop 1440 / TC`、`Contact / Desktop 1440 / TC`。该历史结论已被 2026-08-20 T39 范围重置覆盖，`08` 不再作为当前 Web 端输入。
- T11.5 Figma 文件曾新增 `09 Mobile Pages / TC Production`，包含：`Home / Mobile 390 / TC`、`Platform / Mobile 390 / TC`、`Order Management / Mobile 390 / TC`、`Contact / Mobile 390 / TC`。该历史结论已被 2026-08-20 T39 范围重置覆盖，当前不推进移动端或响应式。
- T11.5 Figma 文件曾新增 `10 TC Production Review`，记录繁中生产视觉稿修正范围和 T12 审核入口。该历史结论已被 2026-08-20 T39 范围重置覆盖，`10` 不再作为当前 T12 / T13 审查入口。
- 曾对 `08 Desktop Pages / TC Production` 和 `09 Mobile Pages / TC Production` 执行可见文本扫描，允许 `Candao` 品牌名和语言切换 `EN`，英文正文 / CTA / UI Label 残留为 0；但该扫描不再代表当前 Web Desktop 基线通过。
- 已对 `Home / Desktop 1440 / TC` 和 `Home / Mobile 390 / TC` 执行截图 sanity check，页面已呈现为繁體中文单一 Locale 官网视觉原型；移动端产品展示区节奏略紧，后续可在视觉精修阶段放大段落间距。
- 已按用户附件完成 Website Production Localization 二次检查，输出为：`tasks/TFIX-LOCALIZATION/output/localization-second-check-2026-08-03.md`。
- 二次检查清理了 T09 v1.2、T11 v1.2、T11.5 Stitch v1.2、Website Localization Review Report、Website Production Localization Guideline、Localization Reviewer Agent JSON、T12 task 和 STATE 中的“下一阶段待生成 /TC”旧状态残留。
- 二次 Figma 检查曾确认：`08 Desktop Pages / TC Production` 和 `09 Mobile Pages / TC Production` 的缺失 Frame 为 0，英文正文 / CTA / UI Label 残留为 0，所有 `/TC` Frame 均有 `繁中 / EN`，明显简体字命中为 0；但该结果已被 2026-08-20 T39 范围重置覆盖，不能作为当前输入。
- T11.5-C 已使用 Agent-PD design-only 生成 `AI Website Generation Prompt Agent`，L1 确定性校验 PASS；固化规格为：`tasks/T11.5/output/ai-website-generation-prompt-agent-spec-2026-08-03.json`。
- T11.5-C 已输出 `Website Generation Prompt.md`：`tasks/T11.5/output/Website Generation Prompt.md`，包含 Agent 目标、输入、处理规则、全局 Prompt、Home / Platform / Order Management / Delivery Management 页面级 Prompt、QA 检查和失败修正规则。
- T11.5-C 已输出 `AI Generated Website Pages.md`：`tasks/T11.5/output/AI Generated Website Pages.md`，作为 AI Web Generator 页面版本草案，覆盖 Home、Platform、Order Management 和 Delivery Management。
- T11.5-C 已输出 `AI Generated Website Review.md`：`tasks/T11.5/output/AI Generated Website Review.md`，审核国际感、SaaS 感、UI 质量、可开发性、生产语言和未确认事实风险。
- T11.5-C 执行记录为：`tasks/T11.5/output/t11.5-c-stitch-ai-web-generation-execution-note-2026-08-03.md`。
- 2026-08-04 用户确认 Stitch 已连通并指定主色 `#528dff`，已继续执行真实 Stitch 生成。
- Stitch 项目已创建：`Candao International Website T11.5-C`，Project ID 为 `10888304674441209287`。
- Stitch 最终 Design System 为：`assets/12141666305108771015`，名称为 `Candao International SaaS Blue #528dff`；本地 Design MD 为 `.stitch/DESIGN.md`。
- T11.5-C 已生成 Home / Desktop / TC，screenId 为 `ae3d839fa9e44a2a8526c6e099edfd16`，本地文件为 `.stitch/designs/home-desktop-tc.html` 和 `.stitch/designs/home-desktop-tc.png`。
- T11.5-C 已生成 Platform / Desktop / TC v2，screenId 为 `b4ccb5387cc24c9f824f4f9444507179`，本地文件为 `.stitch/designs/platform-v2-desktop-tc.html` 和 `.stitch/designs/platform-v2-desktop-tc.png`；Platform v1 已因 Capability Map / UI Demo 过弱而被替代。
- T11.5-C 已生成 Order Management / Desktop / TC，screenId 为 `ecc37f07411e4003bb25e4b879584b7e`，本地文件为 `.stitch/designs/order-management-desktop-tc.html` 和 `.stitch/designs/order-management-desktop-tc.png`。
- T11.5-C 已生成 Delivery Management / Desktop / TC v2，screenId 为 `e56b1d92bf564feb8d837a9ea864e83e`，本地文件为 `.stitch/designs/delivery-v2-desktop-tc.html` 和 `.stitch/designs/delivery-v2-desktop-tc.png`；Delivery v1 已因缺少完整 Workflow / Dashboard 而被替代。
- T11.5-C 已输出真实 Stitch 结果清单：`tasks/T11.5/output/stitch-generated-website-result-2026-08-04.md`。
- T11.5-C 已输出真实 Stitch 审核：`tasks/T11.5/output/stitch-generated-website-review-2026-08-04.md`，结论为有条件通过，可进入 T12 综合审核。
- T11.5-C 已输出 Stitch 连通执行记录：`tasks/T11.5/output/t11.5-c-stitch-connected-execution-note-2026-08-04.md`。
- 本轮 QA 已确认最终 HTML 使用 `#528dff`，主体文案为繁中并保留 `繁中 / EN`；未发现客户 Logo、真实客户数据、价格、认证、SLA、明显简体中文正文等硬风险。
- 本轮仍记录四个后续修正项：Home 中段灰色图片占位、Home / Platform v2 / Delivery v2 页脚英文版权句、局部卡片圆角偏大、Mobile Stitch 真实页面尚未生成。
- 2026-08-05 用户追加执行 T11.5-B Visual Director Agent。
- T11.5-B 已使用 `agent-pd:agent-pd`：protected runtime `doctor` 通过，但 `run` 触发 `langchain_core.embeddings.embeddings` 导入错误；已按项目既有兜底方式使用本地 Agent-PD design-only 脚本生成 Agent 规格，L1 确定性校验 PASS。
- T11.5-B Agent 规格副本为：`tasks/T11.5/output/international-saas-website-art-director-agent-spec-2026-08-05.json`。
- T11.5-B 已输出 `International SaaS Website Art Director Agent.md`，定义视觉总监 Agent 的定位、输入、输出、评分标准、审查流程和 Guardrails。
- T11.5-B 已输出 `Home Visual Critique.md`；结论为 Home 方向成立，不需要推倒重做，但必须精修 Product Showcase、占位图、Footer、CTA 和圆角；Home 综合评分为 7.1 / 10。
- T11.5-B 已输出 `Platform Product Demo Visual Critique.md`；结论为 Platform v2 / Order / Delivery v2 方向通过，产品感比 Home 更强，但需要 UI 真实性和 Motion 精修；综合评分为 7.9 / 10。
- T11.5-B 已输出 `Candao Visual Design Rules.md`，沉淀 Hero、SaaS UI、色彩、组件、Motion、生产语言、可信证明、常见错误和页面优化规则。
- T11.5-B 已输出执行记录：`tasks/T11.5/output/t11.5-b-visual-director-agent-execution-note-2026-08-05.md`。
- T11.5-B 本轮审查证据集位于：`tasks/T11.5/output/visual-director-audit-assets/`，包含 Home、Platform v2、Order Management、Delivery v2 四张 Stitch PNG 截图。
- T11.5-B 尝试读取 Figma file key `BMXIuVRzSUUt9YNhVAQA6K`，MCP 仅返回 `Archive / Empty Start`，未能取得 `/TC Production` Frame 截图；本轮不声称已完成 Figma 真实 Frame 审查。
- 2026-08-05 用户指出看到的截图过小；已确认 `.stitch/designs/*.png` 是 Stitch 返回的小尺寸预览图，实际网页产物为 `.stitch/designs/*.html`。
- 已使用本地 Chrome 从最终 HTML 重新渲染 1440 宽完整页面截图，输出目录为：`tasks/T11.5/output/stitch-fullsize-screenshots/`。
- 已输出实际产物索引：`tasks/T11.5/output/stitch-generated-artifacts-index-2026-08-05.md`，记录 HTML、Stitch 小预览图、完整页面大图和关键文档路径。
- 2026-08-05 用户要求将 Stitch 实际生成产物整合成一个可交互网页。
- 已创建交互评审网页入口：`source/stitch-interactive-prototype/index.html`。
- 交互评审网页已整合四个最终 Stitch HTML：Home、Platform v2、Order Management、Delivery v2。
- 交互评审网页已整合 1440 宽完整页面截图、Visual Director 审查摘要、Benchmark Score、优化优先级、Screen ID、原始 HTML 入口和大图入口。
- 当前本地静态服务入口为：`http://127.0.0.1:4175/`。
- 已使用本地 Chrome + Playwright 验证交互网页：Home、Platform、Order、Delivery 的 iframe 指向和真实页面文本读取均 PASS；390 视口切换 PASS。
- 交互网页验收截图位于：`tasks/T11.5/output/stitch-interactive-prototype-screenshots/`。
- 已输出交互网页交付说明：`tasks/T11.5/output/stitch-interactive-prototype-2026-08-05.md`。
- 交互网页当前是 T11.5 / T12 视觉评审用静态原型壳，不是生产级 React / Vite 工程；390 视口是同一 HTML 的响应式检查，不代表已生成独立 Stitch Mobile 页面。
- 2026-08-05 用户追加执行 T11.5-A Design Execution Skill + Figma 高保真设计流程，并要求如需 Agent-PD 即使用 `agent-pd:agent-pd`。
- T11.5-A 已使用 `agent-pd:agent-pd`：`doctor` 返回 ready；`run` 触发受保护运行时 `langchain_core.embeddings.embeddings` 导入错误，已记录在 `tasks/T11.5/output/Website Design Skill Setup Report.md` 和 `tasks/T11.5/output/t11.5-a-design-execution-skill-and-figma-execution-note-2026-08-05.md`。
- T11.5-A 已安装 Candao 官网专用高保真设计执行 Skill：`/Users/victorwong/.codex/skills/candao-website-high-fidelity-design/SKILL.md`；主色固定为用户指定 `#528dff`。
- T11.5-A 官方 `quick_validate.py` 因本机缺少 `yaml` 模块失败；自定义结构校验通过，确认 frontmatter、主色、Figma frame 命名、Acceptance Gates 和 `agents/openai.yaml` 均存在。
- T11.5-A 已输出 `Design Execution Skill Assessment.md`、`Website Design Skill Setup Report.md`、`International SaaS Website Visual Benchmark.md`、`Website Visual Direction Exploration.md`、`Home Design Review.md`、`Platform High Fidelity Design.md`、`Platform UI Motion Storyboard.md`、`Product Motion Storyboard.md`、`Candao Website Design System v1.0.md`、`High Fidelity Design Review Report.md`、`website-high-fidelity-design-execution-workflow-agent-spec-2026-08-05.json` 和执行记录。
- T11.5-A 已生成蓝色系餐饮营运 Hero 摄影资产：`tasks/T11.5/output/assets/candao-hero-restaurant-operations-blue-2026-08-05.png`，用于 Figma Home 桌面和移动 Hero。
- T11.5-A 已重新读写并验证 Figma 文件 `https://www.figma.com/design/BMXIuVRzSUUt9YNhVAQA6K`；此前 T11.5-B 读取不到真实 `/TC Production` Frame 的问题不再沿用为当前事实。
- T11.5-A 当前 Figma 高保真节点：`Home / Desktop 1440 / TC` 为 `47:2`，`Home / Mobile 390 / TC` 为 `49:2`，`Platform / Desktop 1440 / TC` 为 `48:2`，`Platform UI Motion Storyboard / TC` 为 `50:2`，`Product Motion Storyboard / TC` 为 `50:74`，`Candao Website Design System v1.0` 为 `51:2`。
- T11.5-A Figma 验证确认：Home Desktop 非空且 36 个一级子节点，Home Mobile 非空且 23 个一级子节点，Platform Desktop 非空且 20 个一级子节点，Platform UI Motion Storyboard 非空且 13 个一级子节点，Product Motion Storyboard 非空且 24 个一级子节点，Design System v1.0 非空且 8 个一级子节点。
- T11.5-A Figma 验证确认：桌面 Hero 摄影节点 `47:3` 和移动 Hero 摄影节点 `49:3` 均为 `IMAGE` 填充。
- T11.5-A 已修正 Figma `/TC` 生产帧英文 UI Label 残留，并复扫 `Home / Desktop 1440 / TC`、`Platform / Desktop 1440 / TC`、`Home / Mobile 390 / TC`；除 `Candao`、`EN`、`SaaS`、`POS`、`QR` 等允许品牌 / 技术词外，未发现英文 CTA、英文正文或英文 UI Label 残留。
- 2026-08-05 用户反馈 Figma 高保真稿仍偏简单结构图，要求使用 Image2 增加图片或元素，使画面更接近真实落地网页。
- 已执行 T11.5-A2 Image2 视觉精修，输出记录为：`tasks/T11.5/output/t11.5-a2-image2-visual-refinement-2026-08-05.md`。
- T11.5-A2 已使用 Image2 / 内置 `imagegen` 生成 3 张资产：餐厅运营产品展示图、平台控制台高保真 UI、配送调度地图 UI，保存于 `tasks/T11.5/output/assets/image2-visual-refinement/`。
- T11.5-A2 已将 Image2 资产补入 Figma `Home / Desktop 1440 / TC`、`Platform / Desktop 1440 / TC`、`Home / Mobile 390 / TC`：上传目标节点 `57:3`、`57:19`、`57:35`、`57:50`、`57:55`、`57:56`、`57:72`、`57:79`、`57:86` 均已校验为 `IMAGE` 填充。
- T11.5-A2 已把移动端产品卡从 126px 高度扩展为 244px，并将 `Home / Mobile 390 / TC` frame 高度调整为 2700、底部 CTA 调整至 y=2470，解决产品区过薄和底部空白偏大的问题。
- T11.5-A2 Figma 回读确认：Home Desktop 新增 `Image2 /` 节点 48 个，Platform Desktop 新增 22 个，Home Mobile 新增 21 个；三帧可见文本英文残留均为 0。
- T11.5-A2 验收截图保存于：`tasks/T11.5/output/figma-image2-refinement-screenshots/`，包含 Home Desktop、Platform Desktop、Home Mobile Final。
- T11.5-A / A2 当前边界：已完成 `/TC` 生产视觉稿核心高保真补齐与 Image2 产品视觉精修；未生成独立 `/EN` Frame；Contact / Book a Demo 高保真表单状态建议后续单独补齐；AI Hero 图与 Image2 合成资产进入生产前仍需替换为授权素材或真实产品截图。
- 2026-08-08 用户指出现有页面结构不对，要求至少补齐第一层级目录主页。
- 已按 Website Production Guideline v1.0 和文案交互确认表 v0.1 执行 T11.5-C v2 一级目录主页补齐，范围为：首頁、解決方案、平台、整合能力、客戶案例、關於餐道、預約產品演示。
- T11.5-C v2 明确不把 `Order Management` 和 `Delivery Management` 提升为一级导航；二者只作为 `平台` 下的二级产品能力入口。
- Stitch 项目仍为 `Candao International Website T11.5-C`，Project ID `10888304674441209287`，Design System `Candao International SaaS Blue #528dff`，Design System ID `assets/12141666305108771015`。
- T11.5-C v2 已在 Stitch 中生成并 Fixed 编辑 7 个一级主页：Home `d38f6ed9fe2c42b29849f2ab5776ef90`、Solutions `3f2cde2898c04fddb949d2371608ebeb`、Platform `f5e50f9a9b5a4bc898a4d27568566d1c`、Integrations `621fecf4ef6945f58faa162d9f8af3b3`、Customers `e234dc8834e841b49e8d66d139e48734`、About `9c63c26edcbd481599e3d4cd689b378e`、Contact / Demo `07cf801156f94a2681cf94c5e1102703`。
- T11.5-C v2 Stitch Fixed 本地导出目录为 `.stitch/designs/cv2-first-level/`，包含 7 个一级主页 HTML 和 PNG。
- T11.5-C v2 已使用 Image2 / imagegen 生成 6 张视觉资产，保存于 `tasks/T11.5/output/assets/cv2-first-level/`，并复制到本地原型目录 `source/stitch-first-level-v2/assets/`。
- T11.5-C v2 本地可交互原型为 `source/stitch-first-level-v2/index.html`，真实嵌入 Image2 图片，支持 `?page=home`、`?page=solutions`、`?page=platform`、`?page=integrations`、`?page=customers`、`?page=about`、`?page=contact` 页面切换。
- T11.5-C v2 本地原型交互包括顶部一级导航、Capability Map 节点切换、Workflow Stepper、场景选择、整合筛选、需求分流和多步骤表单状态。
- T11.5-C v2 已输出产物索引：`tasks/T11.5/output/stitch-cv2-first-level-artifacts-index-2026-08-08.md`。
- T11.5-C v2 截图备份目录为 `tasks/T11.5/output/stitch-cv2-first-level-screenshots/`。
- T11.5-C v2 本地交互原型 1440 宽完整页面截图目录为 `tasks/T11.5/output/stitch-cv2-first-level-local-prototype-screenshots/`，用于查看真实嵌入 Image2 图片后的设计效果。
- T11.5-C v2 QA：本地原型与 Stitch Fixed HTML 已通过关键词扫描，未发现本次规则列出的明显英文残留、简体残留、错误一级导航、默认版权文案或产品能力升一级问题。
- T11.5-C v2 边界：Stitch MCP 当前没有暴露把本地 Image2 图片精确上传并绑定到页面节点的工具；因此 Stitch 页面用 Prompt / Fixed 编辑约束结构与视觉，本地 C v2 原型负责真实嵌入 Image2 图片作为后续 Figma / 前端参考。
- 2026-08-10 用户反馈 Stitch 画布上的图比较混乱，同一页面存在多个版本且内容轻微不同。
- 已确认混乱来源：Stitch 保留了早期四页探索、C v2 初稿、C v2 Fixed 版、图片素材 Screen 和后续整理索引；`edit_screens` 会生成新 Screen，不会覆盖旧 Screen。
- 当前 Stitch MCP 没有开放 Screen 级删除、重命名、归档或拖动画布位置能力；因此未执行删除旧图，避免破坏历史生成记录。
- 已在 Stitch 项目中新增内部整理索引 `00 Candao C v2 保留版索引 (Fixed)`，Screen ID 为 `5782dcac875b4c5fb8de68aae837d69a`。
- 整理索引初稿 `db96c8dd2d8b46bab8ebc713e9b45a21` 已被 Fixed 索引替代，不作为最终整理入口。
- Stitch 整理索引本地备份位于 `tasks/T11.5/output/stitch-cv2-cleanup/` 和 `.stitch/designs/cv2-cleanup/`。
- 已输出 Stitch 项目整理报告：`tasks/T11.5/output/stitch-project-cleanup-report-2026-08-10.md`。
- 后续在 Stitch 内查看项目时，应先看整理索引，再只评审 7 个 Fixed 保留版 Screen；旧探索和素材图不再作为页面效果依据。
- 2026-08-10 用户提供目录截图，要求检查内容遗漏并按截图目录补齐，同时强调不是全盘否定现有链路，而是补齐欠缺、让结构更流畅完整。
- 已输出目录差异与补齐规则：`tasks/T11.5/output/website-directory-content-gap-fill-v0.2-2026-08-10.md`。
- 已输出文案与交互确认矩阵 v0.2：`tasks/T11.5/output/website-copy-interaction-confirmation-matrix-v0.2-2026-08-10.md`。
- v0.2 结论：T05 原本包含 `Resources / 資源` 一级结构，C v2 执行时遗漏该一级主页；下一轮应恢复 `資源` 作为一级内容中心，而不是只放 Footer / Phase 2。
- v0.2 补齐项包括：`餐飲與零售`、`手機點餐`、`自助點餐`、`配送管理與騎手 App`、`配送調度`、`聚合物流管理`、`支援中心`、`常見問題`、`媒體與新聞`、`案例資源`、`了解更多`、`查詢表單`、`關於我們`、`里程碑`、`加入我們`、`聯絡我們`。
- v0.2 仍遵守 Website Structure Lock：`Order Management`、`Delivery Management`、`Riders App`、`Dispatch`、`Aggregated Logistics Management` 不得提升为一级导航；只能作为 `Solutions` 场景或 `Platform` 产品能力承接。
- 2026-08-10 用户进一步要求按 Solutions 与 Platform 的最新差异化结论，对相关页面进行调整补充。
- 已输出 Solutions / Platform 差异化调整补充 v0.3：`tasks/T11.5/output/website-solutions-platform-differentiation-update-v0.3-2026-08-10.md`。
- 已输出 Solutions / Platform 页面文案与交互确认表 v0.3：`tasks/T11.5/output/website-copy-interaction-confirmation-matrix-v0.3-solutions-platform-2026-08-10.md`。
- v0.3 当前只替换 v0.2 中 `Solutions / 解決方案` 与 `Platform / 平台` 相关页面；Home、Integrations、Customers、Resources、About、Contact / Demo 仍沿用 v0.2。
- v0.3 重要命名调整：`解決方案 / 配送管理` 改为 `解決方案 / 配送營運與履約`；`解決方案 / 配送調度` 不再作为独立产品式页面，合并为配送履约场景模块；`數字點餐` 扩展为 `數字點餐與自助服務`。
- v0.3 重要表达规则：Solutions 使用业务问题、场景、角色压力、业务结果和推荐能力；Platform 使用 Capability、Workflow、UI Demo、Data Flow、Business Result。
- 2026-08-11 用户确认应在 Stitch 中推进后，已在现有 Stitch 项目 `Candao International Website T11.5-C` 中生成 C v3 关键页面与画布索引。
- Stitch C v3 项目继续使用 Project ID `10888304674441209287` 和 Design System `assets/12141666305108771015`（`Candao International SaaS Blue #528dff`）。
- Stitch C v3 已生成 `解決方案` 页面：`C v3 / 解決方案 - Candao International / Desktop TC`，Screen ID `4188f2a7f3f84566b5644b19efdedadd`；页面已按 v0.3 改为业务场景、角色压力、推荐能力和配送履约场景，不再作为产品功能目录。
- Stitch C v3 已生成并 QA 修正 `平台` 页面：`C v3 / 平台 - Candao International / Desktop TC / Fixed QA`，Screen ID `0386a1f4c8a34c438d596d2cda0c4022`；已补齐 `資源` 导航，去除 `dashboard` 英文和金额型假数据。
- Stitch C v3 已生成并 Fixed `資源` 一级主页：`C v3 / 資源 - Candao International / Desktop TC / Fixed`，Screen ID `efd66e8cb18442fb843910ab6ffb863f`；页面包含支援中心、常见问题、媒体与新闻、案例资源、了解更多和查询表单。
- 已在 Stitch 中生成 `00 Candao C v3 保留版索引 / 2026-08-11`，Screen ID `9de35f83d35d4584802ec4f9af450d20`，用于明确本轮当前评审版本、沿用 C v2 页面和下一轮优先事项。
- 因用户在 Stitch UI 中无法看到 Screen ID，已新增肉眼定位版索引 `00 从这里开始看 / Candao C v3 当前评审版`。该页用大标题和 01 / 02 / 03 卡片标出早前应看的 `解決方案`、`平台 Fixed QA`、`資源 Fixed`，不要求用户查看 ID；本次为避免继续制造重复索引页，暂未再生成新的 `00` 索引，新增的 `資源 模組化修正版` 与 `關於餐道 QA 修正版` 需按可见标题查找。
- Stitch C v3 本地备份目录为 `.stitch/designs/cv3-first-level/` 和 `tasks/T11.5/output/stitch-cv3-first-level/`；交付报告为 `tasks/T11.5/output/stitch-cv3-first-level-output-report-2026-08-11.md`。
- Stitch C v3 已从 HTML 重新渲染 1440 全页面截图，目录为 `tasks/T11.5/output/stitch-cv3-first-level-fullsize-screenshots/`，包含 Solutions、Platform 和 Resources。
- Stitch C v3 QA 确认三张关键页面均包含 `資源` 导航和 `繁中 / EN`，未发现英文版权、`dashboard` 英文残留、金额型假数据或产品能力升为一级导航的问题。
- 2026-08-11 用户指出 `資源` 页面不应使用同一套侧边栏 + FAQ 面板表达，各模块需要独立且有区分度；已在 Stitch 中生成 `C v3 / 資源 - Candao International / Desktop TC / 模組化修正版`，本地备份为 `tasks/T11.5/output/stitch-cv3-first-level/resources-cv3-desktop-tc-modular.html` 和 `resources-cv3-desktop-tc-modular.png`。
- `資源` 模块化修正版已把 `支援中心`、`常見問題`、`媒體與新聞`、`案例資源`、`了解更多`、`查詢表單` 分成不同表达模块；1440 全页面截图为 `tasks/T11.5/output/stitch-cv3-first-level-fullsize-screenshots/resources-cv3-modular-desktop-1440-full.png`。
- 2026-08-11 用户指出 `關於餐道` 内容展开仍缺失且内容不全；已在 Stitch 中生成并 QA 修正 `C v3 / 關於餐道 - Candao International / Desktop TC / 模組化展開版 / QA 修正版`，Screen ID 为 `06f4fee9e4264d5c82415e97c2a7eb67`。
- `關於餐道` QA 修正版已补齐 `關於我們`、`服務方式`、`里程碑`、`安全與服務`、`加入我們`、`聯絡我們` 和 Final CTA；本地备份为 `tasks/T11.5/output/stitch-cv3-first-level/about-cv3-desktop-tc-modular-qa.html` 和 `about-cv3-desktop-tc-modular-qa.png`，1440 全页面截图为 `tasks/T11.5/output/stitch-cv3-first-level-fullsize-screenshots/about-cv3-modular-qa-desktop-1440-full.png`。
- `關於餐道` QA 修正版已做可见文本扫描：导航、子目录和关键模块均通过；未发现 `All rights reserved`、`Copyright`、`24/7`、`SLA`、`ISO`、`SOC`、灾备、真实年份、具体数字等未确认承诺型表达。
- Stitch C v3 仍有遗留边界：Home 需重新纳入当前评审基准并补齐 v3 导航 / 场景命名 / Product Showcase；Integrations / Customers / Contact 仍需补 `資源` 导航、v3 页脚一致性和未确认事实风险审查。
- Stitch C v3 HTML 文本扫描仍可读到图标字形 token（如 `arrow_forward`、`search`、`arrow_downward`），后续开发实现应替换为真实 icon component。
- 2026-08-11 已完成 T11.6：在 `/Users/victorwong/.codex/config.toml` 中加入 `mcp_servers.shadcn`，使用 Codex bundled `pnpm` 和显式 `PATH` 启动 `shadcn@latest mcp`。
- T11.6 已验证 `pnpm dlx shadcn@latest mcp --help` 可正常运行；Codex 需要重启后才能加载新增 MCP server。
- T11.6 已验证 Aceternity registry 可读取：`background-beams`、`text-generate-effect`、`moving-border`、`container-scroll-animation`。
- T11.6 已输出 Aceternity 首个试用方案：`tasks/T11.6/output/shadcn-aceternity-mcp-hero-use-case-2026-08-11.md`。推荐在 React / Next.js + Tailwind 官网实现中先使用 `BackgroundBeams`、`TextGenerateEffect`、`MovingBorder` 精修 Home Hero；`ContainerScroll` 建议放到 Hero 后的 Product Showcase。
- T11.6 Hero 方案默认生产 Locale 为繁體中文 `/TC`，首屏文案使用 `讓餐飲營運，從多平台混亂走向一個清晰系統` 和 CTA `預約產品演示`，不得与 English 正文双语混排。
- T11.6 已在 `source/react-next-capability-prototype/` 创建 React / Next.js + Tailwind 能力全景原型，技术栈为 Next.js 16、React 19、Tailwind CSS v4、shadcn/ui、Aceternity components、motion 和 lucide-react。
- T11.6 React / Next 原型已暴露 9 个首页能力区块：Home Hero、营运流程入口、Solutions、Platform、Integrations、Customers、Resources、About / 關於餐道、Demo / 預約產品演示。
- T11.6 React / Next 原型已暴露关键交互：移动端导航、桌面 Mega Menu、Solutions 场景切换、Platform 能力分组筛选、Platform 能力详情切换、Integrations 分类切换和 Demo 意图分流。
- T11.6 React / Next 原型本地服务入口为 `http://localhost:4186`；Next 16 dev resource 应使用 `localhost`，不要用 `127.0.0.1`。
- T11.6 React / Next 原型已通过 `pnpm lint`、`pnpm exec tsc --noEmit`、`pnpm build` 和 Playwright 桌面 / 移动截图验证；交付说明为 `tasks/T11.6/output/react-next-capability-prototype-delivery-2026-08-11.md`，截图备份为 `tasks/T11.6/output/react-next-capability-prototype-screenshots/`。
- T11.6 React / Next 原型定位是能力暴露与交互验证台，不是最终官网内容定稿；用户已补充确认后续会在 Figma 上实现最准确的内容设计。
- 2026-08-11 已将 `Figma + Aceternity Reference Workflow` 写入 `RULES.md` 和 `tasks/T11.6/output/figma-aceternity-reference-workflow-memory-2026-08-11.md`：后续用户可直接贴 Figma 图和 Aceternity 组件截图 / 名称；默认以 Figma 决定文案、图片、模块层级和静态视觉，以 Aceternity / shadcn 决定展示方法、交互动效和布局参考，再由 React / Next.js 原型落地。

## Active Task

- ID: `T57`
- Status: `done`
- Note: 已在 Figma 首页节点 `336:7645` 右侧新增英文首页 `656:2` / `Home / Desktop 1440 / EN`。可编辑文本已英文化并通过 QA；Google Translate 域名当前网络不可达，已记录失败证据；图片、矢量或 Logo 内嵌文字仍需后续单独素材英文化重绘。

## Decisions

- 使用英文目录名 `candao-international-website` 保持路径稳定，项目文档内使用中文显示名“餐道国际官网重构”。
- 项目级规则放在 `RULES.md`，避免把官网重构的专项语言规则误应用到其他 Candao 项目。
- 官网实际展示文案只允许繁体中文 + 英文；简体中文仅用于内部策略、规划、执行与审核文档。
- T01 阶段只完成内部输入整理，不生成最终官网页面文案。
- T02 需要基于 T01 输入文档判断第一阶段市场、目标客户、官网定位和转化目标。
- T02 必须优先读取 T01 v1.1 中的 `3.5`、`5.9`、`5.10`、`6` 和 `8.5`，避免策略输出停留在资料复述或说明书式内容。
- T02 已完成，不生成最终官网页面 Copy；T03 应基于 T02 固化官网战略、定位和导航策略。
- T03 不应重新做资料分析，应基于 T02 v1.1 做战略取舍和冻结。
- T04 应基于 T03 战略文档执行信息架构规划，不应回到 Excel 原始菜单直接搬运。
- T04 的核心目标是把 T03 冻结战略转化为 Sitemap 前置结构、页面关系和用户路径，不重新分析 Candao 官网定位。
- T04 已完成；T05 应直接使用 T04 第 9 节作为 Sitemap 主输入。
- T05 输出语言为简体中文 + 英文页面名称。
- T05 不应重新分析或创造 IA；它的任务是整理和冻结网站结构资产。
- T05 必须继承 T04 v1.1 的页面商业目标、内容优先级、产品页面结构规范和视觉复杂度等级。
- T05 已完成；T06 应以 T05 Sitemap 为页面清单主输入。
- T06 输出语言为繁体中文 + 英文；`策略说明` 可用简体中文，但不得输出简体中文正式网页文案。
- T06 必须继承 T05 v1.1 的页面优先级矩阵、Page Template 类型、第一阶段实际建设范围和内容深度控制规则。
- T06 不应为 Phase 2 页面输出完整正式 Copy。
- T06 已完成；T07 已以 T06《Website Copy Document》为主输入，生成最终可审核页面 Copy。
- T07 已全部输出繁体中文 + 英文，未输出简体中文正式网页文案。
- T07 未扩写未确认资料，未把结构预留或 Phase 2 页面写成完整正式页面。
- T07 已执行双语润色、品牌语气统一、差异化强化、SEO 关键词自然融入、CTA 优化和页面长度优化。
- T07 已继承 T06 v1.1 的 Copy Priority，未为所有页面继续扩写同等深度内容。
- T08 `task.md` 已按审查意见调整：输出应为页面体验设计规范，不是页面建议或重新分析。
- T08 已以 T07 v1.1《Final Website Copy V1.0》为核心输入，制定 UX 规格，未重写官网 Copy，未重新设计 Sitemap。
- T08 输出语言为简体中文，页面名、组件名、交互名保留英文。
- T08 已输出 Page Goal、User Intent、Content Flow、Layout Structure、Components、Interaction、Animation、Responsive Behavior、Visual Priority 和 CTA Path。
- T09 已以 T08 v1.1《Website UX Specification》为核心输入，输出《Website Prototype Validation》，验证页面线框、页面节奏、关键交互、UI Demo 脚本和移动端降级方式。
- T09 已完成页面体验方案和原型验证建议；T10 应直接继承 T09 对 Home、Products / Platform、Order Management、Delivery Management、Integrations Overview 和 Contact / Book a Demo 的重点页面定义。
- T09 v1.1 已成为 T10 的执行护栏：T10 必须使用 Prototype Acceptance Criteria 做评审，用 Prototype Fidelity Level 控制高保真投入，用 Interaction Complexity Level 控制 Motion 成本，用 Visual Mood Input 生成视觉方向。
- T10 应以 T03 Strategy、T07 Final Copy、T08 UX Specification 和 T09 Prototype Validation 为输入，输出《Website Visual Direction》，并按 T08 Visual Priority 与 T09 Fidelity Level 分配视觉资源。
- T10 已完成；T11 应基于 T10《Website Visual Direction》进一步输出具体官网视觉方案，重点深化图片、视频、产品 UI、图标、动效、色彩、字体、版式和页面视觉层级。
- T11 不应重新探索视觉方向，应继承 T10 的 `Operational Clarity for Global Restaurant SaaS`、真实餐饮运营摄影、半真实 SaaS UI、Product UI Motion 和 T09 的 Fidelity / Interaction 边界。
- T10 v1.1 已成为 T11 的执行护栏：T11 必须使用 Reference Mapping 指导 Moodboard，用 Hero Composition Rule 设计首页首屏，用 Brand Color Adaptation Process 适配品牌色，用 Page Output Requirement 控制输出范围，用 Visual Review Checklist 做验收。
- T11 的关键不是继续分析，而是用 Home、Products / Platform、Order Management 和 Delivery Management 的高保真视觉方案验证策略、Copy、UX、Prototype 和 Visual Direction 是否成立。
- T11 已完成；T11.5 应先生成可查看视觉原型，之后 T12 再审核 T03-T11.5 的战略一致性、信息架构、双语 Copy、UX 可执行性、视觉方向、高保真视觉规格和视觉原型是否一致。
- T12 应重点检查：语言规范、未确认素材 / 数据风险、Home 5 秒理解标准、Platform Capability layer、Order / Delivery storyboard、Contact 转化路径、T11 High-fi 范围控制和 T11.5 可视化结果质量。
- T11 已明确自身不是可查看视觉稿；下一步不是继续优化 Markdown，而是执行 T11.5 Visual Prototype Generation。
- T11.5 应把 T11 规则转化为 Figma 页面、可点击 Prototype、Motion Storyboards 或 Web Demo，使用户能看到页面效果。
- T12 应顺延到 T11.5 之后，审核真实视觉原型和文档链路的一致性。
- T11.5 已选择 Figma Visual Prototype 路径并完成；T12 应直接审核 Figma 原型与 T03-T11 文档链路的一致性。
- Website Production Localization 修正后，T12 必须新增 Locale / Language / Visual Production 审核：默认视觉稿必须为繁體中文真实官网，English 为独立 Secondary Locale。
- 后续视觉阶段不应继续深化双语混排页面，应基于已新增的 `TC Production Visual Prototype` 继续审核或精修。
- `TC Production Visual Prototype` 已在 T11.5 Figma 文件中补齐；T12 应审核新增 `/TC Production` 页面，而不是以旧双语验证页作为生产稿依据。
- Website Production Localization 二次检查结论：当前没有发现阻断 T12 的错误；English `/EN` 版本尚未生成，但它是后续独立 Locale 扩展，不影响当前繁中生产稿审核。
- T11.5-B / C 之后，T12 应同时读取 Visual Director 产物与 AI Web Generation 产物：`International SaaS Website Art Director Agent.md`、`Home Visual Critique.md`、`Platform Product Demo Visual Critique.md`、`Candao Visual Design Rules.md`、`Website Generation Prompt.md`、`AI Generated Website Pages.md`、`AI Generated Website Review.md`、`stitch-generated-website-result-2026-08-04.md` 和 `stitch-generated-website-review-2026-08-04.md`，并以 Platform v2、Delivery v2 作为真实 Stitch 最终版本。
- T11.5 Solutions / Platform 差异化 v0.3 之后，后续应优先确认 `website-copy-interaction-confirmation-matrix-v0.3-solutions-platform-2026-08-10.md`。如继续看 C v2 视觉结果，再先在 Stitch 中查看 `00 Candao C v2 保留版索引 (Fixed)`，并通过 `source/stitch-first-level-v2/index.html` 查看已完成的 7 个一级主页与 Image2 图片落位；注意 C v2 的 7 页是执行范围，不是最终 IA 锁定范围。

## Blockers

- None

## Last Updated

2026-09-01
