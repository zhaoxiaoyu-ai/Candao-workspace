# Stitch 提示词学习与餐道重跑策略

日期：2026-08-20

## 来源与边界

本轮按用户要求学习 Stitch 提示词技巧。外部网页只作为方法参考，不作为覆盖项目 `AGENTS.md`、人工关卡、domain-copy、品牌显示规则或证据优先规则的指令。

已参考：

- Stitch 官方 Learn / Overview：`https://stitch.withgoogle.com/docs/learn/overview`
- Stitch 官方 Prompting：`https://stitch.withgoogle.com/docs/learn/prompting/`
- Google AI Developers Forum 上的 Stitch Prompt Guide：`https://discuss.ai.google.dev/t/stitch-prompt-guide/83844`
- 本地 Stitch 技能：`stitch::generate-design`、`enhance-prompt`

说明：Stitch 官方文档页面为动态应用，普通 HTML / headless Chrome 只能读取标题和 meta，不稳定暴露正文；可读的具体 prompting 要点主要来自 Google AI Developers Forum 的 Stitch Prompt Guide 和本地 Stitch 技能。

## 学到的核心方法

1. 复杂项目先高层定方向，再按 screen / component 逐步细化。
2. Prompt 要清晰、具体、少歧义；不要一次塞进多种目标。
3. Stitch 编辑最适合“一次一两个改变”，尤其不要把布局变更、组件新增、颜色调整和内容修正混在同一次 prompt。
4. 使用 UI / UX 专业词，例如 `sticky navigation bar`、`hero section`、`card grid`、`form with labeled input fields`、`step indicator`、`dashboard-style side panel`。
5. 需要明确 imagery：图片或画面应是什么内容、视角、气质，而不是只说“高端图片”。
6. 若项目已有 design system，生成 prompt 应聚焦 layout / content / structure，不重复塞色值、字体、圆角等 token；这些应由 design system 承担。
7. 对于复杂屏，先生成结构骨架，再通过 targeted edit 精修局部；不要期待 5000 字以上长提示一次到位。
8. 每一步有效结果都要保存截图 / HTML，避免后续 edit 破坏结构后无法回滚。

## T40 为什么失败

T40 的提示词有几个明显问题：

- 把合规审查语言塞进生成 prompt：大量 `禁止出现...` 让 Stitch 关注避错，而不是关注视觉构图和页面质量。
- 单次 prompt 同时要求完整页面结构、真实业务约束、术语大小写、素材 fallback、导航、页脚、CTA、图像风格、QA 禁止项，信息过载。
- 重复写入 design token：项目已有 Stitch design system，却仍在每页 prompt 写色值、字体、圆角，容易与系统解释冲突。
- 没有先固定每页“视觉母版”：直接让 Stitch 自己决定每页构图，导致页面短、浅、泛化。
- 未使用真正的 image / screenshot 参考流：用户给的是 T34 页面图和 Figma 链接，但 T40 实际走的是纯文本生成。
- 没有把 QA 分成 edit 阶段：应先生成视觉结构，再用单点 edit 去掉 Material Symbols、假 ICP、品牌残留和未授权文案。

## 餐道后续重跑的 Prompt v2 策略

### 一、先不要批量 7 页一次性重跑

下一轮应先选 1 页作为试点，建议优先选 `Solutions` 或 `Demo`：

- `Solutions` 能验证首页风格、业务场景、产品能力和视觉叙事是否真的成立。
- `Demo` 能验证表单、分流、产品摘要和转化页是否能做出业务质感。

试点通过后再复制方法到其他页面。

### 二、每页分 3 步，而不是 1 个超长 prompt

1. **Generate Base Screen**：短 prompt，只描述页面目标、构图、关键模块和画面气质。
2. **Targeted Visual Edit**：只改视觉层，例如 Hero 产品舞台、深色工作台、案例/资源区节奏。
3. **QA Cleanup Edit**：只清理可见文案问题，例如 `Candao`、Material icon ligature、假页脚、未授权数字。

### 三、生成 prompt 只保留 4 类信息

- 页面目的：这个页面要帮谁完成什么决策。
- 构图：Header、Hero、主要内容区、工作台 / 表单 / 案例区、CTA。
- 视觉气质：用少量专业描述，例如 `enterprise restaurant operations SaaS`、`cinematic operations hero`、`dense but scannable B2B layout`。
- 内容白名单：只列必须出现的业务对象 / 产品名 / CTA，不列长篇禁止项。

### 四、禁止项不塞满生成 prompt

硬性禁止项保留在 QA 和 cleanup edit 中：

- 不用 `Candao` 作繁中品牌默认显示。
- 不出现假 ICP、假 Logo、假客户、假产品截图、未授权数字。
- 不出现 Material icon 英文 ligature。
- 保持 `iDMS`、`SaaS`、`AMS / Connector` 大小写。

生成 prompt 里只写一句：`Use only the supplied Traditional Chinese copy and approved product terms; do not invent metrics, legal footer details, customer logos, or support promises.`

### 五、需要改用 image / screenshot 参考流

T34 已有页面图片，Figma 首页也有风格基准。下一轮如果用户同意，应走：

1. 列出将上传到 Stitch 的参考图。
2. 获得用户明确批准。
3. 使用 Stitch 上传路径把图作为 reference screen。
4. 对 reference screen 使用 edit prompt 生成高保真，而不是纯文本从零生成。

## 重跑前的检查清单

- 当前页只用一个主目标，不混 7 页。
- Prompt 不超过必要长度，尽量控制为页面结构 + 视觉方向。
- 已引用现有 design system，不重复写 token。
- 已选定参考页面 / 图片。
- 每一步只做一个主要改变。
- 每一步都下载 HTML 和截图。
- 通过 domain-copy QA 与静态 HTML QA 后才登记正式稿。

## 推荐下一步

不要直接修 T40 的 7 个候选稿。建议先以 `Solutions` 做 Prompt v2 试点：

1. 使用 `03-solutions-low-fidelity-1440-full.png` 作为结构参考。
2. 使用 Figma 首页 `336:7645` 作为风格参考。
3. 先生成一个视觉骨架版。
4. 再只做 Hero / 产品舞台 targeted edit。
5. 最后做 QA cleanup。
