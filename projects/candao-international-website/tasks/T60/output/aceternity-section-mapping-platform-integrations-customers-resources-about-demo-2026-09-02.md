# Aceternity 子板块映射表：平台 / 整合能力 / 客户案例 / 资源 / 关于餐道 / 预约产品演示

日期：2026-09-02  
任务：T60  
Figma 文件：`BMXIuVRzSUUt9YNhVAQA6K`  
Figma 工作页：`03 Desktop Pages / Bilingual Validation` / `3:5`

## 1. 本轮定位

本轮不是重新定义餐道官网内容、信息架构或整站视觉方向。执行口径固定为：

- 现有 Figma 高保真页面负责内容、信息层级、图片、模块顺序。
- Figma 上方 Aceternity 超链接参考只负责样式、布局、交互和视觉表达方式。
- 不使用 Aceternity 模板里的示例品牌、英文文案、Logo、数字或业务内容替换餐道原有内容。
- 每个子板块单独匹配参考样式，不按整页套模板。
- 当前模块是浅色 UI 时优先采用浅色版本；只有深色 Hero、深色产品工作台、深色 CTA 或深色表单带才使用深色风格。
- Figma Make 只作为复杂布局或状态生成辅助，最终仍需回到 Figma 做可检查、可追溯的高保真稿。

## 2. 已确认可用 Aceternity 参考

| 参考名称 | 当前用途 | URL |
|---|---|---|
| `Hero Section With Images Grid and Navbar` | Hero、带导航首屏、图像 / UI 舞台 | `https://ui.aceternity.com/blocks/hero-sections/hero-section-with-images-grid-and-navbar` |
| `Features Bento Grid With Skeletons` | 平台能力、产品能力、状态卡、能力 Skeleton | `https://ui.aceternity.com/blocks/feature-sections/bento-grid` |
| `Symmetric Bento Grid` | 场景与能力平衡展示、左右对称 Bento | `https://ui.aceternity.com/blocks/bento-grids/symmetric-bento-grid` |
| `Three Columns With Images` | 三列内容卡片、能力入口、案例维度 | `https://ui.aceternity.com/blocks/bento-grids/three-column-with-images` |
| `Blog With Search` | 客户案例列表、资源文章 / 查询入口、分类搜索 | `https://ui.aceternity.com/blocks/blog-sections/blog-with-search` |
| `FAQs With Grid` | FAQ、售前疑问、资源问答 | `https://ui.aceternity.com/blocks/faqs/faqs-with-grid` |
| `Empty State Vertical Grid` | 无结果、支持入口、找不到整合、支援分流 | `https://ui.aceternity.com/blocks/empty-states/empty-state-vertical-grid` |
| `Contact Form Grid With Details` | Demo 表单、查询表单、申请整合 | `https://ui.aceternity.com/blocks/contact-sections/contact-form-grid-with-details` |
| `Stats With Gradient` | 数据证明、规模数据、案例结果 | `https://ui.aceternity.com/blocks/stats-sections/stats-with-gradient` |
| `Simple Footer With Four Grids` | 页脚 | `https://ui.aceternity.com/blocks/footers/simple-footer-with-four-grids` |
| `CTA With Masonry Images` | 最终 CTA、图像拼贴 CTA、转化区 | `https://ui.aceternity.com/blocks/cta-sections/cta-with-masonry-images` |
| `Logo Cloud Marquee` | 授权 Logo 带或生态类别标签 | `https://ui.aceternity.com/blocks/logo-clouds/logo-cloud-marquee` |

## 3. 六页逐子板块映射表

### 3.1 平台

| 页面 | 子板块 | 当前内容目的 | 对应 Aceternity 参考 | 深色 / 浅色版本 | 是否需要 Figma Make | QA 标准 |
|---|---|---|---|---|---|---|
| 平台 | 顶部导航 | 保持全站一级目录与预约入口一致 | `Hero Section With Images Grid and Navbar` 的 Navbar 部分 | 浅色 | 否 | 导航统一为当前 IA；繁體中文页不把品牌默认写成 `Candao`；语言切换保留 `繁中 / EN`。 |
| 平台 | Hero 标题与 CTA | 告诉用户进入产品能力层，承接首页与解决方案 | `Hero Section With Images Grid and Navbar` | 浅色 | 可选，仅在需要重新生成右侧产品舞台时使用 | 不把 Hero 改成新模板文案；标题必须绑定订单、门店、配送、数据等产品对象。 |
| 平台 | Hero 大型产品视觉 | 把抽象平台能力转为半真实 SaaS UI | `Hero Section With Images Grid and Navbar` + `Features Bento Grid With Skeletons` | 浅色产品舞台 | 建议使用，用于快速生成产品界面构图，再回 Figma 精修 | 必须替换占位图；展示总部看板、订单队列、配送地图、门店状态中的至少两类；不得出现虚构客户数据或未确认合作 Logo。 |
| 平台 | Capability Map Bento | 展示平台核心能力：订单、配送、门店、自有点餐、数据等 | `Features Bento Grid With Skeletons`、`Symmetric Bento Grid` | 浅色 | 可选 | 每张卡必须有业务对象、状态或下一步，不只写抽象能力；不得出现“零延迟”“所有系统均可接入”等承诺。 |
| 平台 | 能力卡内 UI Skeleton | 让能力卡有可视证据而不是纯文字 | `Features Bento Grid With Skeletons` | 浅色 | 可选 | Skeleton 应模拟订单状态、餐单同步、配送状态、財務對賬等真实对象；不得使用无定义分数或假百分比。 |
| 平台 | 自动化营运工作流 | 解释订单进入、菜单同步、配送协同、总部看板、数据回馈 | `Symmetric Bento Grid` 或 Aceternity scroll / storyboard 表达 | 浅色 | 建议使用，用于多状态流程初稿 | 和首页的 5 秒概览区分开；平台页必须展示更完整的产品状态变化。 |
| 平台 | 总部视角 / 全局掌控产品工作台 | 展示总部看板与多系统状态汇聚 | `Features Bento Grid With Skeletons` + `Stats With Gradient` 的深色数据感 | 深色 | 建议使用 | 当前深色区要保留；UI 字段需来自订单、门店、配送、异常、报表，不得用通用 BI 面板替代。 |
| 平台 | 现有生态整合预览 | 从平台能力导向整合能力页 | `Logo Cloud Marquee` fallback、`Three Columns With Images` | 浅色 | 否 | 未确认具体合作状态时只展示系统类型或类别标签；CTA 指向整合能力或申请评估。 |
| 平台 | Final CTA | 引导用户看餐道如何连接营运流程 | `CTA With Masonry Images` | 深色或品牌蓝色浅背景，按现有稿保留 | 可选 | CTA 文案保留餐道业务对象；不新增价格、上线周期、SLA。 |
| 平台 | Footer | 提供基础导航和法律入口 | `Simple Footer With Four Grids` | 浅色 | 否 | 四列导航和全站命名一致；版权和法律入口不写未确认备案或法律信息。 |

### 3.2 整合能力

| 页面 | 子板块 | 当前内容目的 | 对应 Aceternity 参考 | 深色 / 浅色版本 | 是否需要 Figma Make | QA 标准 |
|---|---|---|---|---|---|---|
| 整合能力 | 顶部导航 | 进入接入验证页并保持当前一级目录 | `Hero Section With Images Grid and Navbar` 的 Navbar 部分 | 浅色 | 否 | 不恢复旧导航；`資源`、`關於餐道` 等命名按当前规范。 |
| 整合能力 | Hero + 产品屏幕 | 回答“能否连接我的系统” | `Hero Section With Images Grid and Navbar` | 浅色 | 建议使用，用于连接配置 UI / 数据流舞台 | 右侧视觉应是“连接配置 + 数据流 + 状态反馈”，不是泛 Dashboard；不写 `无缝集成` 作为主表达。 |
| 整合能力 | 搜索框 | 让 IT / 运营快速查想接的系统类型 | `Blog With Search` 的搜索与过滤结构 | 浅色 | 否 | 如果没有真实搜索功能，Figma 标注为分类筛选原型；无结果必须导向申请评估。 |
| 整合能力 | 分类 Tab | 覆盖外送平台、POS、支付閘道、CRM 与会员、第三方物流、内部系统 | `Blog With Search` + `Symmetric Bento Grid` | 浅色 | 否 | 类别命名统一；不得暗示所有具体品牌已经接入。 |
| 整合能力 | 系统 / 类别卡 | 表达可评估的接入对象 | `Features Bento Grid With Skeletons`、`Three Columns With Images` | 浅色 | 可选 | 将“系统 A / 服务 B”改为类别对象更稳；按钮用 `了解接入方式` / `申請評估`，不写强承诺的 `连接`。 |
| 整合能力 | 数据流预览 | 说明订单、菜单、支付、会员、物流状态如何进入工作流 | `Symmetric Bento Grid`、`Features Bento Grid With Skeletons` | 浅色 | 建议使用 | 至少表现输入、标准化、回传或异常反馈；流程字段必须可追溯到 OMS / AMS / Connector / DMS / iDMS 等能力。 |
| 整合能力 | 状态反馈 | 展示接入后的成功、同步中、异常回传 | `FAQs With Grid` 的问答状态卡或 `Empty State Vertical Grid` 的状态承接 | 浅色 | 可选 | 状态只用已确认状态 / 异常；不承诺实时无误、当天上线或所有系统可接。 |
| 整合能力 | 没有找到所需整合 | 承接长尾系统需求 | `Empty State Vertical Grid` | 浅色 | 否 | 空状态必须说明“提交系统与场景，团队评估”；不能承诺一定可接。 |
| 整合能力 | 申请整合 CTA | 将接入问题转为销售 / 技术评估线索 | `Contact Form Grid With Details` 或 `CTA With Masonry Images` | 浅色为主，可加轻品牌蓝 | 可选 | 字段应收集系统类型、市场、渠道、当前系统；不混入泛销售表单。 |
| 整合能力 | Footer | 基础导航 | `Simple Footer With Four Grids` | 浅色 | 否 | 页脚命名与当前 IA 一致；不出现旧 `集成` 或无关链接。 |

### 3.3 客户案例

| 页面 | 子板块 | 当前内容目的 | 对应 Aceternity 参考 | 深色 / 浅色版本 | 是否需要 Figma Make | QA 标准 |
|---|---|---|---|---|---|---|
| 客户案例 | 顶部导航 | 进入可信证明页 | `Hero Section With Images Grid and Navbar` 的 Navbar 部分 | 浅色 | 否 | 删除旧导航层；当前页名与导航保持 `客戶案例`。 |
| 客户案例 | 深色 Hero | 建立客户成功和落地可信 | `Hero Section With Images Grid and Navbar` | 深色 | 可选 | 保留当前深色基调；Hero 不变成 Aceternity 示例业务；按钮指向查看案例和预约相似场景演示。 |
| 客户案例 | Hero 三张价值卡 | 把案例证明维度前置：渠道、门店、履约 | `Three Columns With Images` | 深色卡片或深色上浅卡 | 否 | 三张卡应是案例筛选维度，不是泛价值口号；不要重复平台能力长文。 |
| 客户案例 | 场景标签 / 筛选 | 让用户按多门店、连锁、配送、自有点餐、数据化营运找相似案例 | `Blog With Search` | 浅色 | 可选 | 若真实案例数量不足，表现为案例筛选 / 授权案例入口，不做虚假完整案例库。 |
| 客户案例 | 主案例详情 | 展示一个餐饮集团或场景的挑战、导入方式、改善结果 | `Blog With Search` 的 featured post、`Three Columns With Images` 的图文卡 | 浅色 | 建议使用，用于生成图文排版与结果区 | 必须区分实名授权案例和匿名场景；可用 PPT 授权客户与数字，但不得新增 PPT 外指标。 |
| 客户案例 | 相关能力侧栏 | 把案例回连平台能力 | `Features Bento Grid With Skeletons` 的小型能力列表 | 浅色 | 否 | 只显示“案例涉及能力”，不把 Customers 变成 Platform 能力墙。 |
| 客户案例 | 指标 / 结果证明 | 呈现 PPT 授权 Performance 或案例指标 | `Stats With Gradient` | 浅色或深色小带，取决于当前视觉位置 | 可选 | 指标必须来自 `allowed_metrics` 或当前确认来源；同一区块不得混用 Slide 10 / Slide 11 口径而不说明。 |
| 客户案例 | 模块化能力卡 | 帮用户理解案例对应的解决路径 | `Three Columns With Images` | 浅色 | 否 | 降权处理；避免与平台页重复，优先作为案例详情后的“涉及能力”。 |
| 客户案例 | 相似场景 CTA | 从案例转预约演示 | `CTA With Masonry Images` | 浅色或轻蓝背景 | 可选 | CTA 指向 `預約相似場景演示`；不承诺相同结果。 |
| 客户案例 | Footer | 基础导航 | `Simple Footer With Four Grids` | 浅色 | 否 | 保持页脚简洁，不新增未确认客户 Logo 或法务信息。 |

### 3.4 资源

| 页面 | 子板块 | 当前内容目的 | 对应 Aceternity 参考 | 深色 / 浅色版本 | 是否需要 Figma Make | QA 标准 |
|---|---|---|---|---|---|---|
| 资源 | 顶部导航 | 进入资源、FAQ、支持和查询入口 | `Hero Section With Images Grid and Navbar` 的 Navbar 部分 | 浅色 | 否 | 页面显示统一为 `資源`；不要写简体 `资源` 到生产稿。 |
| 资源 | Hero + 搜索 UI | 明确资源页是支援、FAQ、媒体、案例资源和查询入口 | `Hero Section With Images Grid and Navbar` + `Blog With Search` | 浅色 | 可选 | 搜索 UI 如未真实实现，只表达分类筛选原型；Hero 文案不变成泛知识库。 |
| 资源 | 常见问题预览 | 降低早期评估疑虑 | `FAQs With Grid` | 浅色 | 否 | 问题覆盖接入、导入、安全、支持、演示；答案不承诺 SLA 或固定响应时效。 |
| 资源 | 资源入口总区 | 按需求导向支持中心、FAQ、媒体、案例资源、查询 | `Symmetric Bento Grid`、`Three Columns With Images` | 浅色 | 建议使用，用于模块化资源中心构图 | 每个入口必须对应一个销售、接入、导入或使用疑问；不要做空泛行业文章墙。 |
| 资源 | 支援中心模块 | 承接导入、使用、营运、技术查询 | `Empty State Vertical Grid` + `Contact Form Grid With Details` 的详情侧栏 | 浅色 + 右侧深色工作区 | 建议使用 | 定位为现有客户 / 导入中团队入口；不与 Demo 的销售预约表单混淆。 |
| 资源 | 支援请求工作区 UI | 让支持流程可视化 | `Features Bento Grid With Skeletons` | 深色局部 | 建议使用 | 展示导入支持、使用支持、营运问题、技术查询等状态；不展示未确认工单系统能力或服务时效。 |
| 资源 | FAQ 模块 | 回答采购和导入前问题 | `FAQs With Grid` | 浅色 | 否 | Hero 只预览，主模块承接完整列表；FAQ 不替代 Demo 表单。 |
| 资源 | 媒体与新闻 | 提供品牌素材、媒体资料、新闻联络 | `Blog With Search` | 浅色 | 否 | 没有持续新闻内容时只做媒体资料入口，不做假新闻时间线。 |
| 资源 | 案例资源 | 从资源角度进入案例摘要 | `Blog With Search`、`Three Columns With Images` | 浅色 | 可选 | 作为入口，不替代 Customers 详情页；案例授权状态要清楚。 |
| 资源 | 了解更多路由 | 帮不确定用户选择平台、解决方案、整合能力 | `Empty State Vertical Grid` | 浅色 | 否 | 不单独使用泛 `了解更多`；每个入口要有明确去向。 |
| 资源 | 查询表单 | 处理非销售类资源 / 支持 / 媒体 / 招聘查询 | `Contact Form Grid With Details` | 深色 | 建议使用 | 查询表单和 Demo 表单边界清楚；字段按问题类型、身份、下一步分流。 |
| 资源 | Final CTA | 将资源访问者导向预约或联系 | `CTA With Masonry Images` | 浅色轻蓝 | 可选 | CTA 不抢资源页主任务；用作最后转化。 |
| 资源 | Footer | 基础导航 | `Simple Footer With Four Grids` | 浅色 | 否 | 页脚与全站一致；不要把资源页新增临时链接写入页脚。 |

### 3.5 关于餐道

| 页面 | 子板块 | 当前内容目的 | 对应 Aceternity 参考 | 深色 / 浅色版本 | 是否需要 Figma Make | QA 标准 |
|---|---|---|---|---|---|---|
| 关于餐道 | 顶部导航 | 进入公司可信页 | `Hero Section With Images Grid and Navbar` 的 Navbar 部分 | 浅色 | 否 | 当前页名建议统一为 `關於餐道` 或项目最终规范名；同页不要混用 `關於 Candao`。 |
| 关于餐道 | 摄影 Hero | 建立企业第一印象与餐饮服务现场感 | `Hero Section With Images Grid and Navbar` | 深色 | 可选 | 使用真实团队 / 餐饮现场 / 授权生成图；修正错字 `可持續擴展`；不把 About 写成平台卖点页。 |
| 关于餐道 | 公司定位 / 关于我们 | 说明餐道是谁、服务什么业务 | `Three Columns With Images` 或 `Symmetric Bento Grid` | 浅色 | 否 | 只讲公司和长期服务，不展开完整产品功能；事实须与 PPT / 旧官网一致。 |
| 关于餐道 | 能力关系图 | 表达公司理解餐饮 O2O 场景：门店、总部、配送、数据、渠道 | `Features Bento Grid With Skeletons` | 浅色 | 可选 | 作为公司理解场景的表达，不做 Platform 能力地图；避免页面边界重复。 |
| 关于餐道 | 信念 / Mission 深色带 | 提供品牌温度与长期主义 | `CTA With Masonry Images` 的深色情绪带 | 深色 | 否 | 压缩为信念和原则，避免空泛使命宣言；不出现“赋能”“智慧生态”。 |
| 关于餐道 | 导入到持续营运服务阶段 | 说明餐道与客户一起落地的方式 | `Symmetric Bento Grid`、`Features Bento Grid With Skeletons` | 浅色 | 建议使用 | About 讲服务理念和阶段；Demo 讲提交流程；Resources 讲支持入口，三者边界要清楚。 |
| 关于餐道 | 成长节点 / 里程碑 | 建立长期投入和发展可信 | `Stats With Gradient` 或 timeline variant | 浅色 | 可选 | 年份、办公室、公司节点必须来自确认资料；未确认节点不可公开写实。 |
| 关于餐道 | Enterprise Trust | 回答采购对安全、稳定、导入、持续支持的疑虑 | `FAQs With Grid`、`Features Bento Grid With Skeletons` | 浅色 | 建议使用 | 可使用 ISO 27001 / ISO 20000 等已确认来源；不扩大成未确认 SLA、灾备或服务时效。 |
| 关于餐道 | 招聘 / 加入我们 | 保留公司页辅助入口 | `Empty State Vertical Grid`、`CTA With Masonry Images` | 深色 | 否 | 降权，不抢销售和企业可信主线；如无岗位页，只保留联系入口。 |
| 关于餐道 | Contact Hub | 按销售、合作、支援、媒体、招聘联系团队 | `Contact Form Grid With Details`、`Three Columns With Images` | 浅色 | 可选 | 公司联系中心与 Demo 销售表单分工清楚；不要把所有需求都塞进一个表单。 |
| 关于餐道 | Final CTA | 把 About 访问者导向 Demo 或联系 | `CTA With Masonry Images` | 浅色轻蓝 | 可选 | CTA 保持业务下一步，不新增未确认服务承诺。 |
| 关于餐道 | Footer | 基础导航 | `Simple Footer With Four Grids` | 浅色 | 否 | 页脚品牌显示规则通过检查；不出现旧命名或不一致 Locale。 |

### 3.6 预约产品演示

| 页面 | 子板块 | 当前内容目的 | 对应 Aceternity 参考 | 深色 / 浅色版本 | 是否需要 Figma Make | QA 标准 |
|---|---|---|---|---|---|---|
| 预约产品演示 | 顶部导航 | 保持转化页仍能回到主要页面 | `Hero Section With Images Grid and Navbar` 的 Navbar 部分 | 浅色 | 否 | 不隐藏语言切换和主要返回路径；当前页面 CTA 状态清楚。 |
| 预约产品演示 | Hero + 右侧照片 | 明确这里是产品演示转化页，并降低填写门槛 | `Contact Form Grid With Details`、`Hero Section With Images Grid and Navbar` | 浅色 | 可选 | 右侧图应是餐饮现场演示 / 顾问导入场景；不使用泛办公图。 |
| 预约产品演示 | 需求类型 Router | 产品演示、联系销售、合作洽询、支援查询分流 | `Contact Form Grid With Details` 的详情卡 + `Three Columns With Images` | 浅色 | 否 | 保留四类意图；支援查询导向 Resources 支援中心，不让现有客户误走销售。 |
| 预约产品演示 | 多步场景表单 Step 1 | 收集用户最关心的营运场景 | `Contact Form Grid With Details` | 浅色 | 建议使用 | 场景选项与 Solutions / Platform 能力一致；名称统一如 `配送營運` / `整合能力`。 |
| 预约产品演示 | 系统现况字段 Step 2 | 收集 POS、CRM、支付、配送、外送平台、自有点餐等当前系统 | `Contact Form Grid With Details` | 浅色 | 建议使用 | 字段只收集接入判断所需信息；不问无关营销问题；不承诺一定可接。 |
| 预约产品演示 | 演示重点摘要 Step 3 | 根据选择推荐演示重点，帮助销售承接 | `Empty State Vertical Grid` 的结果 / summary 状态 | 浅色 | 建议使用 | Summary 必须显示场景、系统对象、推荐能力、下一步；不出现自动报价或上线周期。 |
| 预约产品演示 | 提交成功状态 | 告诉用户提交后会发生什么 | `Empty State Vertical Grid` | 浅色 | 建议使用 | 成功提示包含提交对象、当前状态、下一步；不承诺固定回复时效。 |
| 预约产品演示 | 预约流程 | 解释提交需求、安排团队、进行产品演示 | `Three Columns With Images` | 浅色 | 否 | 流程保持 3 步；内容必须是可执行动作，不写抽象服务承诺。 |
| 预约产品演示 | 技术支持分流 | 避免现有客户或导入中团队误走 Demo | `Empty State Vertical Grid` | 浅色 | 否 | 支援入口导向 Resources；和 Demo 主转化路径视觉区分。 |
| 预约产品演示 | Trust Note / 隐私提示 | 说明会按市场、规模、系统现况安排演示，并说明资料用途 | `FAQs With Grid` 或 `Contact Form Grid With Details` 的 detail note | 浅色 | 否 | 不写未确认隐私政策细节；只保留谨慎资料用途说明，正式上线前由法务确认。 |
| 预约产品演示 | Footer | 基础导航 | `Simple Footer With Four Grids` | 浅色 | 否 | Footer 不重复表单，不新增未确认联系方式。 |

## 4. 执行顺序建议

| 顺序 | 页面 | 原因 | 建议动作 |
|---|---|---|---|
| 1 | 平台 | 产品 UI 和能力结构最能验证 Aceternity Bento / Skeleton 是否适配餐道 | 先替换 Hero 产品视觉、Capability Map、深色总部工作台，再做 CTA / Footer。 |
| 2 | 整合能力 | 与平台页强相关，能验证搜索、类别、数据流和空状态 | 先做搜索 + 类别 + 数据流预览，最后做“找不到整合”空状态。 |
| 3 | 预约产品演示 | 转化链路清晰，Contact Form Grid 适配度最高 | 先做多步表单与右侧详情，再补成功状态和支援分流。 |
| 4 | 客户案例 | 事实和授权风险最高，需要 QA 更重 | 先明确实名 / 匿名 / 指标来源，再做 Blog + Stats + CTA。 |
| 5 | 资源 | 模块多但风险较低，适合作为资源中心高保真整理 | 先做资源路由、FAQ、支援工作区，再做查询表单。 |
| 6 | 关于餐道 | 内容不缺，主要是压缩层级和企业可信表达 | 先修 Hero / 公司定位 / 服务阶段，再处理里程碑、信任、招聘与联系。 |

## 5. Figma Make 使用边界

建议使用 Figma Make 的情况：

- 需要快速探索产品工作台、数据流、状态卡、表单多步状态等复杂 UI 构图。
- 需要把 Aceternity 交互感转成静态高保真图层，例如 Skeleton、状态流、深色产品舞台。
- 需要产出一版可对照的视觉草稿，再回到 Figma 拆层、命名和 QA。

不建议使用 Figma Make 的情况：

- 顶部导航、Footer、简单 CTA、单列文案、普通三卡片区。
- 需要严格保留现有 Figma 文案、图片和模块顺序的板块，除非 Make 输出只作为旁边参考稿。
- 客户案例、指标、Logo、认证和集成状态未完成来源 QA 时。

## 6. 通用 QA 标准

每个子板块进入 Figma 改稿前，必须逐项检查：

| QA 项 | 标准 |
|---|---|
| 内容来源 | 文案、图片、模块顺序来自现有 Figma 或已确认资料；Aceternity 只提供表现方法。 |
| 页面角色 | Platform 讲产品能力；Integrations 讲接入验证；Customers 讲证明；Resources 讲疑问和入口；About 讲公司可信；Demo 讲转化分流。 |
| 深浅色 | 浅色模块用浅色 Aceternity 适配；只有当前深色区才使用深色风格。 |
| Locale | 繁體中文生产页只保留一个 Locale；语言切换器例外。 |
| 品牌显示 | 中文 / 繁體中文默认写「餐道」；`Candao` 只用于英文 Locale、文件名、URL、代码或精确引用来源。 |
| 术语 | `iDMS`、`SaaS`、`OMS`、`DMS`、`CDBI`、`AMS / Connector` 等大小写不得被样式层改变。 |
| 指标 | 只使用 `allowed_metrics` 或本轮明确确认来源；不得新增百分比、订单量、门店数、SLA。 |
| 客户 / Logo | 客户名、Logo、引用语、案例数字只用已授权来源；否则使用匿名场景或类别标签。 |
| 集成状态 | 未确认前不写“已连接某品牌 / 所有 POS 可接 / 所有配送商可接”。 |
| 交互可追溯 | 使用 Figma Make 或 Aceternity 表现时，图层命名能看出对应参考，例如 `Blog With Search / Resource filter`、`Features Bento / Order status skeleton`。 |
| 文本适配 | 不为了排版删除业务对象、状态、条件或下一步；溢出时调布局，不擅自缩短已确认文案。 |

## 7. 反跑偏检查

下一步真正执行 Figma 改稿时，不应直接说“把六页全部批量生成”。建议按以下句式逐页启动：

```text
以现有 Figma 的 [页面名] 为内容来源，保留模块顺序、文案、图片和信息层级。
按 T60 映射表逐个子板块替换展示方式：
[列出本页 3-5 个优先板块]
Aceternity 只作为布局 / 视觉 / 交互参考，不替换餐道内容。
生成后回到 Figma 读回：模块数量、文本、图片、深浅色、术语、指标、客户 / Logo、链接和溢出。
```

这样可以防止再次变成“看起来像新页面，但内容和结构跑偏”的问题。
