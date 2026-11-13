# T61 平台页 Aceternity 子板块高保真重设执行报告

日期：2026-09-02  
执行对象：`平台`  
Figma 文件：`BMXIuVRzSUUt9YNhVAQA6K`  
Figma 页面：`03 Desktop Pages / Bilingual Validation` / `3:5`

## 1. 结论

已基于现有 Figma 高保真平台页 `488:350` 新增并行高保真重设稿：

- 新稿节点：`925:2`
- 新稿名称：`Platform / Desktop 1440 / TC / Aceternity Mapping T61`
- 画板尺寸：`1440 x 5700`
- 源页面保留：`488:350` 未覆盖
- 旧平台页 `84:1049` 仅作为历史审计参考，未覆盖

本轮不是套用单一模板，而是按 T60 映射表逐个子板块匹配 Aceternity 展示样式。内容、模块顺序、产品信息层级和源图像来自现有平台页；Aceternity 仅用于布局、视觉节奏、交互暗示和展示方式。

## 2. Figma 新增结构

| 模块 | 新节点 | Aceternity 参考 | 深浅版本 | 处理说明 |
|---|---:|---|---|---|
| Hero | `928:2` | `Hero Section With Images Grid and Navbar` | 深色 | 复用源页面餐饮运营背景图，重做导航、标题、CTA 和产品 UI 网格。 |
| 核心产品矩阵 | `931:5` | `Features Bento Grid With Skeletons` | 深色 | 将 OMS / COMS / SOMS、DMS / iDMS、CDBI / 財務對賬、AMS / Connector 分为 4 个 Bento 卡。 |
| 产品能力地图 | `944:5` | `Symmetric Bento Grid` | 浅色 | 保留原能力地图信息层级，强化左侧分类与右侧 OMS 详情卡。 |
| 每日营运工作流 | `949:5` | `Symmetric Bento Grid` | 浅色 | 新增流程卡，将订单进入、门店处理、餐单同步、配送协同、数据回馈独立成可读模块。 |
| 产品演示入口 | `950:5` | `Three Columns With Images` | 浅色 | 保留原 4 个演示入口，改为带截图式产品预览的 2x2 高保真卡片。 |
| 转化 CTA | `952:5` | `CTA With Masonry Images` | 浅色 | 保留三条路径：预约产品演示、查看整合能力、查看客户案例，并加入产品 UI 拼贴。 |
| Footer | `953:5` | `Simple Footer With Four Grids` | 深色 | 保留原四列结构，清理 `Candao` 版权残留和单独「了解更多」。 |

## 3. 内容与术语修正

已按 `domain-copy` 规则处理下列前台可见问题：

- `CDBI / Finance Center` 改为 `CDBI / 財務對賬`
- `资源` 改为 `資源`
- 单独 `了解更多` 移除，改为更明确的 `查看接入與演示路徑`
- `導入支持`、`使用支持` 改为 `導入支援`、`使用支援`
- Hero 内部标签 `Platform / Aceternity Mapping` 改为生产可见的 `平台產品能力`
- 页脚版权从源稿 `© copyright Candao International 2026` 改为 `© 2026 餐道`

未新增客户、客户 Logo、业务指标、SLA、集成承诺、价格或认证。产品 UI 内的数据和状态均为通用示例。

## 4. 组件与系统复用

本轮先读取 Figma 本地变量、文本样式、效果样式和组件现状。文件中无已订阅设计系统库可直接复用为官网组件，因此沿用本地变量 / 样式，并创建 T61 本地组件架：

- 组件架：`926:2` / `T61 Local Components / Platform`
- `926:3` / `T61 / Button / Primary`
- `926:5` / `T61 / Button / Secondary`
- `926:7` / `T61 / Status Pill`
- `926:9` / `T61 / Product Status Row`
- `926:14` / `T61 / Capability Card`
- `926:22` / `T61 / Demo Entry Card`

字体使用 `Noto Sans TC`，保留 `#528DFF` 作为主要连接和行动色。

## 5. QA 结果

### 5.1 domain-copy QA

输入：`tasks/T61/output/t61-platform-copy-qa-input.json`  
报告：`tasks/T61/output/t61-platform-copy-qa-report.json`

结果：

- Total：`12`
- Passed：`12`
- Failed：`0`
- Status：`pass`

### 5.2 Figma 读回 QA

报告：`tasks/T61/output/qa/t61-figma-platform-aceternity-readback-qa.json`

结果：

- 可见文本节点：`212`
- 禁用词命中：`0`
- `Finance Center / CDBI / Finance / Business Center / Data Center` 残留：`0`
- `Candao` 可见残留：`0`
- `iDMS / SaaS` 大小写问题：`0`
- 非生产内部标签：`0`
- 非 `Noto Sans TC / Inter` 字体：`0`
- 文本父级溢出：`0`

### 5.3 截图与视觉复核

截图：`tasks/T61/output/screenshots/t61-platform-aceternity-mapping-figma-925-2.png`

- 截图尺寸：`1440 x 5700`
- 文件大小：`1,800,926 bytes`
- 肉眼复核：`pass`

复核后已定点修正：

- Hero H1 从三行压叠修正为两行。
- 产品演示卡正文与两行标题的距离已拉开。
- Hero 内部标签和支援用词已改为生产可见表达。

## 6. Figma Make 使用记录

本轮未使用 Figma Make。

原因：当前平台页模块均可通过 Figma MCP 在既有画布内分段创建、命名、读回和截图验证；使用 Figma Make 反而可能带来模板内容替换风险。后续若进入整合能力页的复杂系统拓扑、Demo 页多步骤表单或资源筛选状态，可再将 Figma Make 作为生成辅助，但最终仍必须回到 Figma 拆层和 QA。

## 7. 执行过程备注

执行中 Figma MCP 曾出现两次传输层错误，未造成半写入：

- 第一次发生在 CTA 写入前，读回确认新稿仍停留在产品演示入口。
- 恢复后重新执行前修正了按钮参数索引问题，再写入 CTA。
- 最终已完成整页读回、截图导出和本地 QA。

## 8. 下一步建议

按 T60 推荐顺序继续执行：

1. `整合能力`
2. `预约产品演示`
3. `客户案例`
4. `资源`
5. `关于餐道`

后续每页继续沿用本轮口径：当前 Figma 页面负责内容与顺序，Aceternity 负责模块级展示样式，不批量套模板。
