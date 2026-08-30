# 新电脑恢复检查清单

## 1. 获取 Git 仓库

```bash
git clone https://github.com/zhaoxiaoyu-ai/Candao-workspace.git
cd Candao-workspace
```

## 2. 覆盖离线迁移包

假设离线包目录名类似 `Candao-workspace-portable-20260830-153000`：

```bash
rsync -a /path/to/Candao-workspace-portable-20260830-153000/ /path/to/Candao-workspace/
```

## 3. 检查文件是否到位

```bash
git status --short --untracked-files=all
test -d .stitch && echo ".stitch restored"
test -d projects/candao-international-website/tasks && echo "international website tasks restored"
test -d projects/tappo-phone/tasks/T02/output && echo "TAPPO outputs restored"
```

## 4. 重装依赖

根目录如果需要 `motion`：

```bash
npm ci
```

各子项目：

```bash
cd projects/tappo-phone/source && npm ci
cd ../../..

cd projects/coms/source && npm ci
cd ../../..

cd projects/design-agent/source && npm ci
cd ../../..

cd projects/xd-to-figma-converter/source && npm ci
cd ../../..
```

国际官网 Next 原型使用 pnpm：

```bash
cd projects/candao-international-website/source/react-next-capability-prototype
pnpm install
```

## 5. 打开工作区

用编辑器打开：

```bash
code Candao-workspace.code-workspace
```

或直接打开 workspace 根目录。

## 6. 最后确认

```bash
git remote -v
git branch --show-current
git log -1 --pretty=format:'%h %ad %s' --date=short
```

确认远端仍是：

```text
https://github.com/zhaoxiaoyu-ai/Candao-workspace.git
```
