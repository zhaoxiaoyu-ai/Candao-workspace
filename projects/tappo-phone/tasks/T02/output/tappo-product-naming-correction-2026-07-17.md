# TAPPO 项目命名纠正记录（2026-07-17）

## 结论

以后 TAPPO 相关工作必须按 Figma 项目文件名归属进入对应项目上下文，不能把不同产品线的组件、Design Tokens、Figma 文件或视觉规则混用。

| 用户提法 / 端 | 正确项目名 | 操作归属 |
| --- | --- | --- |
| Tappo App / Tappo app | Tappo Station | 到 Tappo Station 对应 Figma / 项目上下文操作 |
| Tappo Pad / Tappo pad | Tappo Station | 到 Tappo Station 对应 Figma / 项目上下文操作 |
| TAPPO POS / Tappo POS | Tappo Station | 到 Tappo Station 对应 Figma / 项目上下文操作 |
| Tappo phone | Tappo Pulse | 到 Tappo Pulse 对应 Figma / 项目上下文操作 |
| MOS | Tappo MOS | 到 Tappo MOS 对应 Figma / 项目上下文操作 |
| 微官网 | Tappo微官网 | 到 Tappo微官网对应项目上下文操作 |

## 长期规则

- `Tappo Phone` 是旧命名，对应现在的 `Tappo Pulse`。
- `projects/tappo-phone/` 只是历史技术路径，不代表项目正式命名。
- 后续如果用户说“去某个项目做某些内容”，必须先按上表确认项目归属，再读取对应项目/Figma 文件。
- 不要把 `Tappo Station`、`Tappo Pulse`、`Tappo MOS`、`Tappo微官网` 的设计规范、组件库、Design Tokens、页面结构互相套用。
- 如果历史记录里出现 `TAPPO Pulse`、`TAPPO 微官网`、`Tappo Phone` 等旧词，优先按上表归一化理解。`Tappo App`、`Tappo Pad`、`TAPPO POS` 均确定等于 `Tappo Station`。

## 当前命名审计

当前活跃记忆中，除上述四个正式项目名外，还能看到一些历史或上下文名称：

- `Tappo Phone`：旧命名，映射到 `Tappo Pulse`。
- `Tappo App` / `TAPPO App` / `Tappo app`：确定等于 `Tappo Station`。
- `Tappo Pad` / `TAPPO Pad` / `Tappo pad`：确定等于 `Tappo Station`。
- `TAPPO POS` / `Tappo POS`：确定等于 `Tappo Station`。
- `POS`：单独出现时也可能只是业务场景（例如 POS ordering）；如果是在项目/Figma 命名语境中，按 `Tappo Station` 处理。
- `TAPPO Pulse` / `TAPPO pulse` / `tappo-pulse`：大小写或文件 slug 变体，统一理解为 `Tappo Pulse`。
- `TAPPO MOS`：大小写变体，统一理解为 `Tappo MOS`。
- `TAPPO 微官网`：历史写法，统一理解为 `Tappo微官网`。
- 历史记录里如出现 `TAPPO / Tappo Pulse 微官网`，按最新口径统一理解为 `Tappo微官网`，不要归到 `Tappo Pulse`。
- `Tappo Provider` / `Minitable Provider`：订座供应商名称，不是 TAPPO 项目名。
- `Powered by Tappo` / `Tappo`：品牌或页面文案，不是独立项目名。

## 已写入位置

- `PROJECT.md`
- `RULES.md`
- `tappo-design.md`
- `STATE.md`
- `HANDOFF.md`
- `TASKS.md`
- `tasks/T02/task.md`

## 下一步

后续如需要清理历史文件名或旧输出文档中的 `Tappo Phone` 等旧词，应单独作为一次历史记录清理任务执行，避免破坏旧产物可追溯性。
