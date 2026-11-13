# T24 产品名大小写敏感规则补丁

日期：2026-08-15  
状态：done

## 1. 本次修正原因

用户指出：产品名称不能统一全部大写，产品名本身有识别性；部分产品名是首字母小写、后续字母大写，例如 `iDMS`。

这不是普通视觉风格问题，而是产品命名资产和专业表达问题。  
因此本轮将其升级为 `domain-copy` 的可复用规则与自动 QA，而不是只在当前页面手工修改。

## 2. 已更新文件

- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`
- `domain-copy/examples.md`
- `domain-copy/copy-qa-cases.md`
- `domain-copy/copy-feedback-log.md`
- `domain-copy/scripts/domain_copy_qa.py`
- `tasks/T17/output/low-fidelity-wireframe-prototype/index.html`
- `tasks/T24/output/product-name-case-sensitive-qa-input-2026-08-15.json`
- `tasks/T24/output/product-name-case-sensitive-qa-result-2026-08-15.json`
- `tasks/T24/output/product-name-case-sensitive-failure-input-2026-08-15.json`
- `tasks/T24/output/product-name-case-sensitive-failure-result-2026-08-15.json`
- `tasks/T24/output/t23-page-copy-qa-rerun-after-case-rule-2026-08-15.json`

## 3. 规则落地

### 3.1 术语表新增

在 `glossary.yaml` 新增 `case_sensitive_terms`：

- `iDMS`
  - 正确：`iDMS`
  - 禁止：`IDMS`、`Idms`、`idms`、`iDms`、`IdMS`
- `SaaS`
  - 正确：`SaaS`
  - 禁止：`SAAS`、`Saas`、`saas`

后续新增类似产品名时，必须同步补充标准写法和禁止写法。

### 3.2 文案规则新增

`copy-rules.md` 新增「产品名大小写敏感规则」：

- 产品名、服务名、技术名和客户名必须按标准形态显示。
- 原型、Figma、Stitch、React 和 CSS 不能使用会改变文字显示的统一大小写规则。
- 若设计需要大写视觉风格，只能调整字号、字重、色彩、间距或容器，不得改变产品名大小写。

### 3.3 QA 脚本新增

`domain_copy_qa.py` 新增检查：

- `case_sensitive_term_mismatch`：源码文本中出现错误大小写。
- `case_sensitive_render_mismatch`：渲染文本中出现错误大小写。
- `case_sensitive_style_transform`：样式层使用 `text-transform: uppercase/lowercase/capitalize`，可能改变大小写敏感产品名。

## 4. 当前原型修正

低保真 HTML 中可见来源标签已修正：

- `PPT-SAAS` -> `PPT-SaaS`

当前原型中：

- `iDMS` 保持标准写法。
- `SaaS` 保持标准写法。
- 不存在 `IDMS / SAAS / Saas / saas` 等错误写法。
- 不存在会改变文字大小写的 `text-transform: uppercase/lowercase/capitalize`。

## 5. QA 结果

### 正向 QA

文件：

```text
tasks/T24/output/product-name-case-sensitive-qa-result-2026-08-15.json
```

结果：

```text
3 / 3 passed
```

### 失败回归

文件：

```text
tasks/T24/output/product-name-case-sensitive-failure-result-2026-08-15.json
```

结果：

```text
3 / 3 failed as expected
```

已成功拦截：

- `IDMS`
- `SAAS`
- 渲染层将 `iDMS` 显示成 `IDMS`
- `text-transform: uppercase`

### T23 主 QA 重跑

文件：

```text
tasks/T24/output/t23-page-copy-qa-rerun-after-case-rule-2026-08-15.json
```

结果：

```text
13 / 13 passed
```

## 6. 浏览器渲染验证

使用 Google Chrome + Playwright 直接渲染当前低保真 HTML，逐页检查 8 页可见文本：

- 未发现 `IDMS / Idms / idms / iDms / IdMS`。
- 未发现 `SAAS / Saas / saas`。
- 未发现 `PPT-SAAS`。
- 未发现可见层 `text-transform` 非 `none`。
- `iDMS` 和 `SaaS` 在可见文本中保持标准写法。

结果：

```text
8 / 8 pages passed
```

## 7. 后续要求

- 后续任何产品名新增，必须先进入 `glossary.yaml` 的标准术语和大小写敏感术语表。
- 高保真、Stitch、React 和正式前端不能为了视觉统一而把产品名统一大写。
- 若使用第三方生成工具，生成后必须检查渲染文本，不只检查源码文本。
