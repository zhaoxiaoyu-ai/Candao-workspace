# 迁移盘点

## 快照时间

2026-08-30，Asia/Shanghai。

## 仓库状态

| 项目 | 当前结果 |
| --- | --- |
| workspace 路径 | `/Users/victorwong/Documents/Codex/Candao-workspace` |
| Git 远端 | `https://github.com/zhaoxiaoyu-ai/Candao-workspace.git` |
| 当前分支 | `main` |
| 当前 HEAD | `0b9d8e5 2026-06-29 Record GitHub publication details` |
| 嵌套 `.git` | 未发现，仅根目录存在 `.git` |
| 已修改跟踪文件 | 约 21 个 |
| 未跟踪非忽略文件 | 约 1580 个 |

## 体积分布

| 路径 | 体积 |
| --- | ---: |
| 整个 workspace | 约 1.6G |
| `.git` | 约 410M |
| `projects/` | 约 1.1G |
| `projects/candao-international-website/` | 约 1.0G |
| `projects/candao-international-website/source/` | 约 775M |
| `projects/tappo-phone/` | 约 102M |
| `projects/design-agent/` | 约 45M |
| `.stitch/` | 约 15M |
| 根目录 `node_modules/` | 约 11M |
| `react-next-capability-prototype/node_modules/` | 约 565M |
| `react-next-capability-prototype/.next/` | 约 176M |
| 排除 `.git`、依赖和构建缓存后的 portable 文件 | 约 430M |
| 已验证 portable snapshot | `Candao-workspace-portable-20260830-190811`，约 434M，约 2018 个文件 |
| 已验证压缩包 | `Candao-workspace-portable-20260830-190811.tar.gz`，约 416M |

## 未跟踪文件主要分布

| 分布 | 数量 |
| --- | ---: |
| `projects/candao-international-website/tasks/` | 约 1014 |
| `projects/design-agent/tasks/` | 约 203 |
| `projects/tappo-phone/tasks/` | 约 200 |
| `projects/candao-international-website/source/` | 约 61 |
| `.stitch/designs/cv3-first-level/` | 约 24 |
| `.stitch/designs/cv2-first-level/` | 约 14 |
| `projects/candao-international-website/domain-copy/` | 约 11 |
| `projects/workspace-setup/tasks/` | 约 9 |

## portable 文件类型概览

排除 `.git`、`node_modules`、`.next`、`dist`、`build`、`.cache` 后：

| 类型 | 数量 |
| --- | ---: |
| `png` | 674 |
| `md` | 576 |
| `json` | 315 |
| `html` | 147 |
| `svg` | 124 |
| `txt` | 38 |
| `ts` | 36 |
| `vue` | 20 |
| `yaml` | 14 |
| `mjs` | 14 |
| `tsx` | 7 |
| `py` | 7 |
| `xlsx` | 2 |
| `zip` | 1 |
| `ai` | 1 |

## 大文件观察

排除 `.git`、依赖和构建缓存后，未发现超过 25M 的单文件。最大文件主要是任务输出截图，约 2.3M 到 5.4M。

## 敏感文件观察

排除 `node_modules` 和 `.next` 后，未发现明显 `.env`、secret、credential 文件。扫描命中的 `token` 相关文件主要是设计 token、Figma token 记录、源码 token extractor 或截图文件名。

## 结论

迁移时最容易漏掉的是未跟踪任务产物，而不是代码本身。GitHub 迁移前应先决定这些产物是否进入 Git；若暂不进 Git，则必须用 `migration-export.sh` 导出 portable snapshot。
