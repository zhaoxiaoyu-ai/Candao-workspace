# Remotion 能力使用说明

更新时间：2026-09-01

## 1. 当前已配齐的能力

| 能力 | 状态 | 说明 |
| --- | --- | --- |
| Remotion Codex 插件 | 已安装 | `remotion@openai-curated-remote` 已确认安装，插件版本 `1.0.7`。 |
| Remotion Agent Skills | 已可用 | 插件内包含 `remotion-create`、`remotion-markup`、`remotion-render`、`remotion-studio`、`remotion-captions`、`remotion-multimedia`、`remotion-saas`、`remotion-interactivity`、`remotion-docs`、`remotion-upgrade`、`remotion-maps`。 |
| Stitch 到 Remotion 走查视频 | 已可用 | 本地已有 `stitch-build:remotion` 技能，可从 Stitch screens 下载截图并生成 Remotion walkthrough composition。 |
| 本地 Node.js 运行时 | 已可用 | Codex bundled Node.js：`$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`，验证版本 `v24.19.0`。 |
| 本地包管理器 | 已可用 | Codex bundled pnpm：`$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback/pnpm`，验证版本 `11.19.0`。 |
| Remotion CLI 链路 | 已验证 | 临时工程验证了版本检查、lint、composition 发现、still 渲染。 |

重要判断：Remotion 官方文档已标注 Remotion MCP 为 deprecated，主路径应使用 Remotion Agent Skills 加本地 CLI；不要把 MCP 当作长期稳定依赖。官方说明中 hosted MCP 的关闭时间不早于 2026-08-31。

## 2. 快速开始

最简单打开方式：

```bash
bash projects/workspace-setup/tasks/T08/output/remotion-open.sh
```

这会在 workspace 下创建默认示例目录 `remotion-demo`，安装依赖，然后启动 Remotion Studio。脚本会打印并尝试自动打开：

```text
http://localhost:3000
```

macOS 双击打开方式：

```text
projects/workspace-setup/tasks/T08/output/remotion-open.command
```

在 Finder 里双击这个文件，会调用同一个启动脚本并打开默认 demo。

打开已有 Remotion 工程：

```bash
bash projects/workspace-setup/tasks/T08/output/remotion-open.sh /path/to/your-remotion-project
```

指定端口：

```bash
REMOTION_PORT=3005 bash projects/workspace-setup/tasks/T08/output/remotion-open.sh /path/to/your-remotion-project
```

如果当前 shell 里 `node` 不可用，先加载 workspace 提供的环境片段：

```bash
source projects/workspace-setup/tasks/T08/output/remotion-env.example.sh
```

也可以直接设置 PATH：

```bash
CODEX_RUNTIME_DIR="${CODEX_RUNTIME_DIR:-$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies}"
export PATH="$CODEX_RUNTIME_DIR/node/bin:$CODEX_RUNTIME_DIR/bin/fallback:$PATH"
node -v
pnpm -v
```

新建一个 Remotion 工程：

```bash
pnpm dlx create-video@latest --yes --blank my-video
cd my-video
pnpm install
```

如果想显式跳过 Tailwind，可加 `--no-tailwind`：

```bash
pnpm dlx create-video@latest --yes --blank --no-tailwind my-video
```

如果 pnpm 提示 ignored build scripts：

```bash
pnpm approve-builds --all
pnpm install
```

启动 Studio：

```bash
pnpm exec remotion studio --no-open
```

渲染视频：

```bash
pnpm exec remotion render
```

渲染某一帧用于检查画面：

```bash
pnpm exec remotion still MyComp out-frame.png --frame=30 --scale=0.25
```

## 3. 推荐目录结构

```text
my-video/
├── public/
│   ├── images/
│   ├── audio/
│   └── video/
├── src/
│   ├── Root.tsx
│   ├── Composition.tsx
│   ├── scenes/
│   ├── components/
│   └── data/
├── remotion.config.ts
├── package.json
└── README.md
```

约定：

- 静态素材放 `public/`，代码里用 `staticFile()` 引用。
- 多段视频拆成 `src/scenes/`，通用标题、callout、device frame、progress bar 放 `src/components/`。
- 数据驱动内容放 `src/data/`，例如 `screens.json`、字幕 JSON、产品卖点 JSON。
- 不建议把 Remotion 工程建在 workspace 根目录，避免污染 Candao 管理仓库。

## 4. 在 Codex 里怎么叫我做

创建全新视频：

```text
用 Remotion 做一个 15 秒的产品功能介绍视频，尺寸 1920x1080，包含 4 个场景、动效标题、节奏感转场和结尾 CTA。请创建工程、打开 Studio，并先不要渲染最终视频。
```

把 Stitch 设计变成走查视频：

```text
使用 stitch-build:remotion，把 Stitch 项目「项目名」里的 screens 生成一个 30 秒 walkthrough 视频。按用户路径排序，加标题、功能 callout、平滑转场，最后输出 mp4。
```

把已有截图做成 App Store / 官网展示视频：

```text
用 Remotion 把这些产品截图做成 20 秒横版展示视频。每张图 3 秒，加入局部缩放、光标点击提示、中文短标题和结尾 logo。
```

给已有视频加字幕：

```text
用 Remotion captions 处理这个视频，生成 JSON captions，并把字幕以底部高对比样式叠到 composition 里。完成后先输出 still 检查，再渲染 mp4。
```

做 SaaS 集成：

```text
评估如何把 Remotion Player 嵌入当前 React 应用，并设计一个用户填表后服务端渲染视频的方案。请给出目录、API、渲染队列和部署选择。
```

## 5. 编写 Remotion Markup 的规则

- 动画用 `useCurrentFrame()`、`useVideoConfig()`、`interpolate()`、`Easing` 或 `spring()` 驱动。
- 不要依赖 CSS `transition`、CSS `animation` 或 Tailwind 动画类，它们不会按 Remotion 帧渲染稳定输出。
- 优先使用 `scale`、`translate`、`rotate` 这些 CSS 属性，少用拼接后的 `transform` 字符串。
- 用 `Sequence` 管理场景时间，用 `from`、`durationInFrames`、`trimBefore` 控制出现、持续和裁剪。
- 需要 Studio 可编辑时，用 `Interactive.Div`、`Interactive.Img` 等，并保持样式对象内联。
- `<Composition>` 的 `width`、`height`、`fps`、`durationInFrames`、`defaultProps` 尽量保持内联，方便 Studio 识别和回写。

最小 composition 示例：

```tsx
import {
  AbsoluteFill,
  Composition,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const Intro = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          color: "#111827",
          fontSize: 88,
          opacity: interpolate(frame, [0, fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [0, fps], [0.92, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Candao
      </div>
    </AbsoluteFill>
  );
};

export const RemotionRoot = () => (
  <Composition
    id="Intro"
    component={Intro}
    durationInFrames={90}
    fps={30}
    width={1920}
    height={1080}
  />
);
```

## 6. 预览、检查和渲染

Studio：

```bash
pnpm exec remotion studio --no-open
```

常用参数：

- `--port=3005`：指定端口。
- `--log=verbose`：输出更多调试日志。
- `--force-new`：强制开一个新的 Studio 实例。
- `--coding-agent=codex`：让 Studio 默认面向 Codex 工作流。

检查可用 compositions：

```bash
pnpm exec remotion compositions
```

渲染最终视频：

```bash
pnpm exec remotion render MyComp output/my-video.mp4
```

渲染透明视频时，需要使用支持 alpha 的 codec，并按 Remotion transparent videos 指南设置。

建议每次最终渲染前至少做一次 still：

```bash
pnpm exec remotion still MyComp output/check.png --frame=30 --scale=0.25
```

## 7. 素材、音频、字幕和多媒体

图片：

- UI 截图、logo、icon 放 `public/images/`。
- 使用 `staticFile("images/name.png")`。
- 对远程图片要注意可访问性和 CORS。

视频：

- 使用 `Video`，复杂剪辑可用 `trimBefore`、`durationInFrames`、volume、playback rate。
- 如果主要是视频剪辑时间线，按 `remotion-markup/video-editing.md` 的方式组织，方便 Studio 编辑。

音频：

- 使用 `Audio`。
- 音量、裁剪、速度、pitch 等高级控制按 `remotion-markup/audio.md`。
- 音频可视化、波形和频谱按 `remotion-markup/audio-visualization.md`。

字幕：

- Remotion captions 使用 JSON，核心类型为 `Caption`。
- 字段包括 `text`、`startMs`、`endMs`、`timestampMs`、`confidence`。
- 导入 `.srt` 时先转换为 Remotion caption JSON，再渲染到 composition。

多媒体元数据：

- 获取音频时长、视频时长、视频尺寸时，用 Remotion multimedia / Mediabunny 路径。
- 对动态视频长度或尺寸，用 `calculateMetadata()`。

## 8. 常见制作模式

产品功能走查：

- 适合 Candao 官网、Tappo、COMS 产品功能展示。
- 输入：截图、Figma node、Stitch screens、产品文案。
- 输出：30 到 90 秒横版视频或竖版短视频。
- 动效：屏幕切换、局部 zoom、热点 callout、进度条、结尾 CTA。

应用商店视频：

- 输入：App Store / Google Play 截图、短标题、卖点顺序。
- 尺寸按平台要求设置。
- 关键是文字安全区、截图清晰度、节奏稳定。

字幕口播视频：

- 输入：旁白音频或已有视频。
- 输出：带字幕和重点词高亮的 mp4。
- 先转 caption JSON，再把 caption layer 作为独立组件维护。

地图/路线动画：

- 静态地图可用截图加动画标注。
- MapLibre 不需要 API key。
- Mapbox / MapTiler / Cesium 适合更复杂地理动画，但要准备 key 或地理数据。

可参数化视频：

- 使用 Zod schema 和 `defaultProps`。
- 适合批量生成不同客户名、门店名、语言版本、尺寸比例的视频。

## 9. 与 Candao 工作流结合

Stitch：

- 用 `stitch-build:remotion` 读取 Stitch project screens。
- 下载 screenshots 和可选 HTML。
- 生成 `screens.json` manifest。
- 用 Remotion 组装 walkthrough。

Figma：

- 如果是静态 Figma 画面，优先下载节点截图作为 Remotion 素材。
- 如果 Figma 内已有 timeline 动画，可用 Figma `export_video` 导出 MP4，再作为素材嵌入 Remotion。
- 不要把 Figma 视觉稿直接当 Remotion 代码事实源，复杂动效仍应在 Remotion 里重建。

Candao 官网/产品内容：

- 所有产品事实、客户证明、数字、集成状态必须来自已读资料。
- 未确认内容只能放候选文案，不要写进正式视频旁白。
- 生成视频前建议先列 evidence list，再生成脚本和分镜。

## 10. 故障排查

`node: command not found`

```bash
source projects/workspace-setup/tasks/T08/output/remotion-env.example.sh
```

`Could not determine the version of npm`

- 在当前 Codex shell 中 npm 不在 PATH 是正常现象。
- 使用 `pnpm dlx`、`pnpm install`、`pnpm exec remotion ...` 即可。

`ERR_PNPM_IGNORED_BUILDS` 或 `Ignored build scripts: esbuild`

```bash
pnpm approve-builds --all
pnpm install
```

第一次 `compositions`、`studio` 或 `render` 很慢

- Remotion 会下载 Chrome Headless Shell。
- 本次验证下载的是约 `93.5 Mb` 的 Chrome Headless Shell，完成后后续命令会更快。

Peer dependency warning

- 当前模板验证中出现 TypeScript peer 范围提示，但 `pnpm run lint`、`remotion versions`、`compositions` 和 still 渲染均已通过。
- 若在正式项目中升级依赖，使用 `pnpm exec remotion upgrade` 或统一升级所有 `remotion` / `@remotion/*` 包。

Studio watcher 报错

```bash
pnpm exec remotion studio --no-open --webpack-poll 1000
```

渲染超时

- 检查是否调用了 `delayRender()` 但没有调用 `continueRender()`。
- 检查远程素材是否可访问。
- 先用 still 渲染定位是哪一帧或哪一层出问题。

## 11. 本次验证记录

验证时间：2026-08-15

```text
Node.JS = v24.19.0, OS = darwin
Remotion = 4.0.512
pnpm = 11.19.0
```

临时工程：`/tmp/codex-remotion-smoke-20260815081042`

通过项：

- `pnpm dlx create-video@latest --yes --blank --no-tailwind /tmp/codex-remotion-smoke-20260815081042`
- `pnpm approve-builds --all`
- `pnpm install`
- `pnpm exec remotion versions`
- `pnpm run lint`
- `pnpm exec remotion compositions`
- `pnpm exec remotion still MyComp /tmp/codex-remotion-smoke-20260815081042/out-frame.png --frame=30 --scale=0.25`

composition 检查结果：

```text
MyComp    30      1280x720       60 (2.00 sec)
```

## 12. 简化入口

2026-08-28 追加了一个一键启动脚本：

```bash
bash projects/workspace-setup/tasks/T08/output/remotion-open.sh [Remotion工程目录]
```

不传目录时，默认使用：

```text
projects/workspace-setup/remotion-demo
```

脚本做的事：

- 自动把 Codex bundled Node.js 和 pnpm 加入 PATH。
- 目标目录不存在时自动创建空白 Remotion 工程。
- 缺少 `node_modules` 时自动安装依赖。
- 遇到 pnpm build scripts approval 时自动执行 `pnpm approve-builds --all` 后重试。
- 启动 Remotion Studio，并在 macOS 上尝试自动打开 `http://localhost:3000`。
- `remotion-open.command` 可在 Finder 里双击启动默认 demo。

2026-09-01 修复新电脑迁移后的路径问题：

- 启动脚本和环境脚本不再硬编码 `/Users/victorwong`。
- 当前路径通过 `$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies` 自动定位。
- 已在新电脑创建默认 demo：`projects/workspace-setup/remotion-demo`。
- 已验证 `http://localhost:3000/` 返回 `HTTP/1.1 200 OK`。

## 13. 参考资料

- Remotion Codex plugin manifest：`$HOME/.codex/plugins/cache/openai-curated-remote/remotion/1.0.7/.codex-plugin/plugin.json`
- Remotion create-video 官方文档：https://www.remotion.dev/docs/cli/create-video
- Remotion Agent Skills 官方文档：https://www.remotion.dev/docs/ai/skills
- Remotion Studio 官方文档：https://www.remotion.dev/docs/cli/studio
- Remotion Render CLI 官方文档：https://www.remotion.dev/docs/cli/render
- Remotion MCP deprecation 官方文档：https://www.remotion.dev/docs/ai/mcp
- Stitch Remotion skill：`$HOME/.codex/plugins/cache/stitch-skills/stitch-build/1.0.0/skills/remotion/SKILL.md`
