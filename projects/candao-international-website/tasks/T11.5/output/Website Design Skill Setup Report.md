# Website Design Skill Setup Report

任务：T11.5-A / Task A02  
日期：2026-08-05  
输出语言：简体中文  

## 1. 已配置 Skill

本轮已安装 Candao 官网专用高保真设计执行 Skill：

```text
/Users/victorwong/.codex/skills/candao-website-high-fidelity-design/SKILL.md
```

辅助配置：

```text
/Users/victorwong/.codex/skills/candao-website-high-fidelity-design/agents/openai.yaml
```

Skill 名称：

```text
candao-website-high-fidelity-design
```

用途：

把 Candao 国际官网的 UX、Copy、Prototype Validation、Visual Direction、Benchmark、Stitch 结果和审查意见转成高保真 Figma Frame、Design Token、组件、Motion Storyboard、Design System 文档和视觉 QA 报告。

## 2. Agent-PD 使用记录

用户要求如需使用 Agent-PD 即使用 `agent-pd:agent-pd`。本轮已按要求执行：

```text
/Users/victorwong/.agents/plugins/agent-pd-managed/agent-pd/skills/agent-pd/runtime/agent-pd doctor
```

结果：

```json
{"carrier_profile_count":4,"executable":"agent-pd","knowledge_ready":true,"runtime":"protected","status":"ready"}
```

继续执行 `agent-pd run` 生成 Website High Fidelity Design Execution Workflow 时，受保护运行时失败：

```text
ImportError: module ''langchain_core.embeddings'.'embeddings'' not found (No module named 'langchain_core.embeddings.embeddings')
```

处理方式：

- 不将该错误隐去；
- 不阻塞 T11.5-A 主线；
- 使用 Agent-PD 的产品化方法手工固化 Agent / Skill 规格；
- 在本报告与执行记录中保留错误证据。

## 3. Skill 验证

官方 `quick_validate.py` 当前失败原因是本机 Python 环境缺少 `yaml`：

```text
ModuleNotFoundError: No module named 'yaml'
```

本轮已执行自定义结构校验，结果通过：

```json
{
  "frontmatter_name": true,
  "primary_blue": true,
  "figma_frames": true,
  "acceptance_gates": true,
  "agent_yaml": true,
  "ok": true
}
```

## 4. 已建立能力规范

### 4.1 Figma Design Execution

支持：

- 创建页面 Frame；
- 创建 / 更新组件；
- 建立 Variables；
- 建立 Text Styles 与 Effect Styles；
- 应用 Design Token；
- 输出节点 ID 作为后续审查证据。

### 4.2 Design System Builder

支持：

- Typography；
- Color Token；
- Spacing；
- Radius；
- Components；
- States；
- Visual QA Rules。

### 4.3 UI Prototype Builder

支持：

- 页面流程；
- 可审查 UI Demo；
- Figma Frame 结构化命名；
- Desktop 1440 与 Mobile 390 的生产稿。

### 4.4 Motion Storyboard Builder

支持：

- Home Hero UI Overlay 动效方向；
- Platform Capability Map / UI Demo 动效方向；
- Order Management 4-step UI Demo；
- Delivery Management 4-step UI Demo；
- 移动端降级规则。

## 5. 后续使用方式

后续需要继续推进 Candao 官网高保真设计时，先使用：

```text
candao-website-high-fidelity-design
```

并同时加载：

```text
figma-use
figma-generate-library
figma-use-motion
imagegen
```

执行原则：

- 主色固定使用用户指定 `#528dff`；
- 生产画面默认繁體中文；
- 不做中英正文混排；
- 不使用未确认客户、Logo、数字、认证、SLA 或真实客户数据；
- 所有 Motion 都要有静态等价状态，便于开发落地和审查。

