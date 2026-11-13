# TAPPO 微官网 Lovable 额度复查阻塞记录

## 时间

2026-07-07 12:19（Asia/Shanghai）

## 复查目标

确认 Lovable 项目 `https://lovable.dev/projects/8faa4bde-6332-499d-8c7c-32989d04759f` 在第二天是否仍显示 `0 free credits remaining today`。

## 当前结果

尚未能确认 Lovable 的最新额度状态。

复查时已尝试通过当前 Chrome 登录态打开/读取 Lovable 项目页，但页面读取卡住，随后系统弹出 macOS 权限提示：

```text
"Codex.app" 想要控制 "Google Chrome.app"
```

在用户点击弹窗里的 `允许` 之前，无法继续读取 Chrome 中 Lovable 项目页的可见额度/升级提示。

## 判断

- 当前不能断言 Lovable 仍然没有额度。
- 也不能断言额度已经恢复。
- 后续需要用户先允许 Codex 控制 Chrome，才能继续用已登录状态读取项目页。

## 注意

本次没有发送 Lovable 消息，没有点击 `Upgrade`，没有点击 `Publish`。

官方公开信息显示 Free plan 包含 daily grant of 5 build credits，但免费工作区的 daily build credits 有每月 30 个上限；达到上限后，当月剩余时间不会再发 daily build credits，要到下个月 1 日 00:00 UTC 才恢复。因此即使进入第二天，如果月度上限已达，也可能继续无法生成。最终仍以项目页/Settings 中的 credit usage 显示为准。

参考：

- `https://docs.lovable.dev/introduction/credits-and-usage`
- `https://lovable.dev/pricing`
