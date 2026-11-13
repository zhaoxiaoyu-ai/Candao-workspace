# T47 Stitch Prompt｜接入證據與資源三合一原型

生成一个繁體中文优先的国际餐饮 SaaS 官网桌面页面。

## 输入优先级

1. 以上传的 `T47/output/prototype/index.html` 作为内容和结构源。
2. 以上传的 `T47/output/screenshots/t47-integrated-prototype-1440-full.png` 作为视觉构图参考。
3. 以 `T47/output/contracts/t47-integrated-content-contract.json` 作为内容覆盖契约。
4. 使用当前 Stitch 项目已有 Design System，不重新定义颜色、字体、圆角、阴影或主题 token。

## PLATFORM

Web，Desktop 1440-first。

## PAGE GOAL

把「整合能力」「客戶案例」「資源」三页合并成一个评估型原型，让访客沿着：

`接入问题 -> 案例证据 -> 资源下一步 -> 演示分流`

完成判断。

## LANGUAGE

- 页面可见正文只使用繁體中文。
- 品牌可见名使用「餐道」。
- 语言切换保留 `繁中 / EN`。
- 产品名和技术词按原样保留：`OMS`、`DMS`、`iDMS`、`CDBI`、`SaaS`、`AMS / Connector`、`Menu Center`、`POS / KDS`、`CRM`、`ERP`、`API`。
- 不显示 `Finance Center`，对应内容统一写「財務對賬」。
- 不显示 `Business Center`、`Data Center`，对应内容写「營運管理中心」和「數據分析中心」。

## STYLE ALIGNMENT

继承已确认首页方向：

- 暗色餐饮运营首屏，真实餐饮营运气氛作为第一眼行业信号。
- `#528dff` 作为连接、激活和主 CTA 的视觉线索。
- 深色系统工作台表现接入链路和数据流向。
- 白底案例区用授权规模指标、实名客户文字和业态结果建立可信。
- 浅色资源区使用问题阶段、FAQ、接入清单、支持分流和演示路由。
- 深色判断矩阵把问题、系统、相似案例、下一步放在同一张表中。
- 企业级 SaaS 信息密度，克制、清晰、可扫描；不要做博客首页、客户 Logo 墙或泛营销落地页。

## PAGE STRUCTURE

1. Header：餐道 Logo、`首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於餐道`、`繁中 / EN`、`預約演示`。
2. Hero：`接入證據與資源｜餐道`，大标题为 `先確認系統能否接回餐道，再用相似案例和資源完成評估`；下方三列路徑为 `接入驗證`、`案例證據`、`資源下一步`。
3. 三页合并方式：三张卡分别承接 `整合能力｜餐道`、`客戶案例｜餐道`、`資源｜餐道`。
4. 接入验证：深色系统工作台。左 rail 为外卖平台、自建点餐入口、POS / KDS、CRM / 會員、支付 / ERP、配送與 API；右侧说明 `外賣平台訂單進入 OMS`、资料对象、适合情境、`來源 / 校驗 / 使用`。
5. 案例证据：白底证明区。展示 6 个规模指标：`5000+`、`500M+`、`400+`、`200K+`、`4.5B+`、`30%`；实名案例为 `Pizza-Box`、`JIA Group`、`Jardine Group`；业态卡为甜品连锁、火锅连锁、中餐连锁、咖啡品牌、鲜食零售、配送密集品牌。
6. 资源中心：浅色区。包含问题阶段、评估中常见问题、接入准备清单、营运 FAQ、案例资源、支援中心、媒体与公司资料、产品演示分流。
7. 整合判断矩阵：深色四列表格，列为 `目前問題 / 接入或產品關係 / 相似案例 / 資源下一步`。
8. Final CTA：`把接入問題、相似案例和資源入口一起帶到演示中`，右侧为演示需求摘要。
9. Footer：深色 Footer，保留全站导航和 `餐飲與零售 O2O 營運中樞｜SaaS、iDMS、AMS / Connector`。

## CONTENT COVERAGE RULE

必须覆盖 `t47-integrated-content-contract.json` 中的全部 `required_visible_text`。不要把契约做成页面底部审稿清单；要把内容放入真实页面模块、卡片、工作台、FAQ、案例卡、路由卡和矩阵中。

## HARD FAILURES

- 缺少内容契约中的任何一项可见内容。
- 页面正文、Header、Footer 或品牌区显示 `Candao`、`CANDAO`、`Can Dao`。
- 显示 `Finance Center`、`Business Center`、`Data Center`。
- 显示 `arrow_forward` 或 `Material Symbols` 字样。
- 显示假 ICP 备案、假客户 Logo、假认证、假合作伙伴状态、假产品截图、假视频缩略图或未确认 SLA。
- 写出 `所有 POS 均可接入`、`所有配送商均可接入`、`100% 可用`、`無縫`、`无缝` 等未确认或泛化承诺。
- 通过 `text-transform` 改写 `iDMS`、`SaaS`、`AMS / Connector` 等大小写敏感术语。

## POST-GENERATION QA

生成后下载 HTML，并做三步检查：

1. 以 `t47-integrated-content-contract.json` 跑内容覆盖，目标 `224/224 pass`。
2. 跑 domain-copy QA，目标 `8/8 pass`。
3. 渲染 1440 全页截图，确认无横向溢出、图片加载正常、禁用词为 0。
