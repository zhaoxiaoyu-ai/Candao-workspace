# TAPPO MOS 支付方式真实 logo 资产记录（2026-07-17）

## 目标

- 文件：`25.1213_MOS_v2`
- fileKey：`1qe8d4ll9wLnxPAsiJAoa9`
- 主页面节点：`2254:32924`
- 新增支付方式弹窗节点：`2256:33130`
- 用途：替换当前默认支付方式里的字母占位 icon，并作为后续 Tappo Station 支付方式回显的真实 logo 资产基础。

## 已完成

1. 已下载并整理真实支付方式 logo 资产。
2. 已生成本地评审页：`logo-assets-review.html`。
3. 已将八达通、PayMe 作为真实品牌图片资产上传到 Figma 文件内。
4. 已将微信支付、支付宝改为真实 SVG 节点，并直接替换到主态表格、弹窗背景表格和新增支付方式弹窗默认图标选项中。
5. 已删除旧的 `W / A / O / P` 字母占位节点；复核结果：主态 `2254:32924` 与弹窗态 `2256:33130` 内旧字母占位数量均为 0。
6. logo 容器使用白底与浅描边，并绑定 MOS 本地颜色变量：`Global/Colors/Neutral/Background/colorBgContainer` 与 `Global/Colors/Neutral/Border/colorBorderSecondary-8`。

## Logo 来源与 Figma 资产

| 支付方式 | 来源 | 本地标准化资产 | Figma imageHash | Figma 放置节点 |
| --- | --- | --- | --- | --- |
| 微信支付 / WeChat Pay | Worldvectorlogo `wechat-pay.svg` | `source-svg-fixed/wechat-pay-wordmark.svg` | 已改为 SVG 节点，不再使用旧 PNG hash | 表格 `2302:33611 / 2302:33617`，弹窗 `2302:33623` |
| 支付宝 / Alipay | Iconify `simple-icons:alipay` + Worldvectorlogo `alipay-logo.svg` | `source/alipay-iconify.svg`、`source-svg-fixed/alipay-wordmark.svg` | 已改为 SVG 节点，不再使用旧 PNG hash | 表格 `2302:33613 / 2302:33619`，弹窗 `2302:33625` |
| 八达通 / Octopus | Octopus 官方品牌包 `ocl-logo.zip` | `normalized/octopus-logo-full-cropped.jpg` | `9b306981210c9460d59694a970eaa86c0a9fb478` | `2285:33610` |
| PayMe | PayMe by HSBC 官方站点 header logo | `normalized/payme-logo-official-cropped.png` | `7625253caffeeb4592fa7a7880721255d6160f56` | `2289:33610` |

## 来源 URL

- 微信支付 SVG：`https://cdn.worldvectorlogo.com/logos/wechat-pay.svg`
- 支付宝表格小图标 SVG：`https://api.iconify.design/simple-icons:alipay.svg?color=%231677ff`
- 支付宝弹窗完整 logo SVG：`https://cdn.worldvectorlogo.com/logos/alipay-logo.svg`
- 八达通品牌规范页：`https://www.octopus.com.hk/en/business/merchant-support/branding-guideline/index.html`
- 八达通官方品牌包：`https://www.octopus.com.hk/common/files/ocl-logo.zip`
- PayMe 官方站点：`https://payme.hsbc.com.hk/`
- PayMe 官方 header logo：`https://payme.hsbc.com.hk/en/assets/img/logo/payMe-logo-header.png`

## Figma 直接替换结果

### 主态表格 `2254:32924`

- `2269:34303` 微信支付：替换为 SVG `Logo SVG / WeChat Pay`，新节点 `2302:33611`。
- `2269:34314` 支付宝：替换为 SVG `Logo SVG / Alipay`，新节点 `2302:33613`。
- `2269:34326` 八达通：替换为真实品牌图片 `Logo image / Octopus`，新节点 `2302:33615`。
- `2269:34338` PayMe：替换为真实品牌图片 `Logo image / PayMe`，新节点 `2302:33616`。

### 弹窗背景表格 `2256:33130`

- `2269:35065` 微信支付：替换为 SVG `Logo SVG / WeChat Pay`，新节点 `2302:33617`。
- `2269:35076` 支付宝：替换为 SVG `Logo SVG / Alipay`，新节点 `2302:33619`。
- `2269:35088` 八达通：替换为真实品牌图片 `Logo image / Octopus`，新节点 `2302:33621`。
- `2269:35100` PayMe：替换为真实品牌图片 `Logo image / PayMe`，新节点 `2302:33622`。

### 新增支付方式弹窗默认图标

- `2278:33712` 微信支付：改为 `92x32` 白底 Token 容器，SVG 节点 `2302:33623`。
- `2278:33716` 支付宝：改为 `92x32` 白底 Token 容器，完整 SVG logo 节点 `2302:33625`。
- `2278:33720` 八达通：改为 `92x32` 白底 Token 容器，真实 logo 节点 `2302:33628`。
- `2278:33724` PayMe：改为 `92x32` 白底 Token 容器，真实 logo 节点 `2302:33629`。
- `2278:33728` 文字图标：保留原系统默认文字图标样式，用于自定义支付方式名称首字母回显。

## 复核截图

- 主态截图：`figma-main-after-svg-replace-2026-07-17.png`
- 新增弹窗截图：`figma-modal-after-svg-replace-2026-07-17.png`

## 2026-07-17 表格左对齐、行内居中与去投影修正

根据追加反馈，已继续在 `Tappo MOS / 1qe8d4ll9wLnxPAsiJAoa9` 中修正两套其他支付方式表格：

- 主态表格：`2269:33709`
- 新增支付方式弹窗背景表格：`2269:34471`

调整内容：

1. 表格内所有文字均清除 `DROP_SHADOW` 效果。
2. 除操作列外，表头和内容文字恢复原业务表格左对齐列起点。
3. 操作列保留原有链接位置与样式，不额外重绘。
4. 每行文字、支付方式 logo、状态 Switch、排序拖拽图标按行背景中线重新垂直居中。
5. 隐藏第 3、4 行上叠出的源表格残留层，避免 `Octopus / PayMe` 等重复显示。
6. 未重建或 detach Switch、logo、表格底纹等业务组件，仅调整文本对齐、文本框位置和控件坐标。

自动复核结果：

- `2269:33709`：剩余文字投影 0，错位文本 0，错位控件 0。
- `2269:34471`：剩余文字投影 0，错位文本 0，错位控件 0。

复核截图：

- 主态表格左对齐与行内居中后：`figma-main-table-left-align-row-center-final-2026-07-17.png`
- 弹窗表格左对齐与行内居中后：`figma-modal-table-left-align-row-center-final-2026-07-17.png`

## 2026-07-17 原型内容回收修正

用户指出前一轮存在未严格遵循原型内容的问题：高亮提示文案被扩写，表格额外新增了 `最後操作時間` 字段。本轮已在 `Tappo MOS / 1qe8d4ll9wLnxPAsiJAoa9` 中按原型内容修正三套状态：

- 主态：`2254:32924`
- 新增支付方式弹窗态：`2256:33130`
- 停用支付方式提示态：`2256:33667`

调整内容：

1. `其他支付方式` 区块描述改回原型语义：仅用于记录订单支付方式，不与第三方支付通道实际对接。
2. 高亮提示改回原型提示文案，不再使用“前端展示 / 人工标记 / 支付服务开通”等额外扩写。
3. 表格移除额外新增的 `最後操作時間` 字段和所有时间值。
4. 表格字段回到原型语义：`排序 / 圖標 / 支付方式 / 英文名稱 / 狀態 / 備註 / 操作`，其中 `圖標` 保留为前序反馈要求的视觉列。
5. 支付方式名称下方补回原型中的订单记录说明：`已有訂單記錄 / 暫無訂單記錄`。
6. 新增支付方式弹窗中的图标说明改回原型内容：`原型中僅示意樣式選擇，不在此表單內配置排序字段。`
7. 三套状态继续保留 MOS Switch 组件、真实支付 logo、表格底纹和操作链接样式；未重建表格业务组件。

自动复核结果：

- 三套状态中旧扩写提示数量：0。
- 三套状态中 `最後操作時間` 表头数量：0。
- 三套状态中 `2026-07-*` 时间值数量：0。
- 三套状态中旧 `W / A / O / P` 字母 logo 占位数量：0。

复核截图：

- 主态原型内容回收后：`figma-main-prototype-content-realigned-2026-07-17.png`
- 新增弹窗原型内容回收后：`figma-add-modal-prototype-content-realigned-2026-07-17.png`
- 停用提示原型内容回收后：`figma-disable-confirm-prototype-content-realigned-2026-07-17.png`

## 2026-07-17 文字颜色 Design Tokens 回绑

用户反馈大量文字未绑定 Design Tokens，并确认文字颜色应使用带透明度的颜色 Token。本轮只在 `Tappo MOS / 1qe8d4ll9wLnxPAsiJAoa9` 的三套支付设置状态内修正：

- 主态：`2254:32924`
- 新增支付方式弹窗态：`2256:33130`
- 停用支付方式提示态：`2256:33667`

处理原则：

1. 仅回绑文字颜色变量，不改文案、不改布局、不重建组件。
2. 使用 MOS 文件已有的带透明度文字 Token，不使用裸色加手动 opacity。
3. 不强行套用 Text Style，避免改变现有中文字体、行高和业务组件稳定性。

使用 Token：

- `Global/Colors/Neutral/Text/colorText-95`
- `Global/Colors/Neutral/Text/colorTextSecondary-65`
- `Global/Colors/Neutral/Text/colorTextTertiary-45`
- `Global/Colors/Neutral/Text/colorTextLightSolid`
- `Global/Colors/Brand/colorPrimaryText`
- `Component/Progress/progressDefaultColor`

自动复核：

- `2254:32924`：可见文字 75，未绑定颜色变量的可见文字 0。
- `2256:33130`：可见文字 94，未绑定颜色变量的可见文字 0。
- `2256:33667`：可见文字 78，未绑定颜色变量的可见文字 0。
- 本轮新建 Token 数量：0。

复核截图：

- 主态文字颜色 Token 回绑后：`figma-main-token-bound-2026-07-17.png`
- 新增弹窗文字颜色 Token 回绑后：`figma-add-modal-token-bound-2026-07-17.png`
- 停用提示文字颜色 Token 回绑后：`figma-disable-confirm-token-bound-2026-07-17.png`

## 评审入口

- `logo-assets-review.html`
- `figma-main-after-svg-replace-2026-07-17.png`
- `figma-modal-after-svg-replace-2026-07-17.png`
- `figma-main-table-left-align-row-center-final-2026-07-17.png`
- `figma-modal-table-left-align-row-center-final-2026-07-17.png`
- `figma-main-prototype-content-realigned-2026-07-17.png`
- `figma-add-modal-prototype-content-realigned-2026-07-17.png`
- `figma-disable-confirm-prototype-content-realigned-2026-07-17.png`
- `figma-main-token-bound-2026-07-17.png`
- `figma-add-modal-token-bound-2026-07-17.png`
- `figma-disable-confirm-token-bound-2026-07-17.png`

## 通过标准

- 四个默认 logo 均为真实品牌素材，不是手绘或字母占位。
- logo 位于白底容器中，彩色或黑色标识本身保持品牌原貌。
- 微信支付与支付宝在 Figma UI 中为 SVG 节点，不再使用旧 PNG 图片填充。
- 表格文字不带投影；除操作列外，字段左对齐；每行内容垂直居中。
- 其他支付方式内容严格遵循原型，不保留额外新增的最后操作时间等非原型字段。
- 当前三套状态可见文字颜色均已绑定 MOS 现有 Design Tokens，不使用裸色加手动透明度。
- 小尺寸回显时不变形、不裁切品牌主体、不破坏文字标识。
- 后续进入 Tappo Station 支付方式列表时可直接复用同一套资产。
