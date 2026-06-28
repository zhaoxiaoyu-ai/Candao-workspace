# Prototype Content Map

Source: `https://tappophone.netlify.app/login_flow` and linked prototype pages.

## Hard Rule

The prototype is the source of truth for product content. Figma and generated image assets define visual treatment only. Any future page implementation must first map prototype content, then design the presentation.

## Pages Crawled

- `login_flow`
- `boss_dashboard.html`
- `boss_reports.html`
- `boss_points.html`
- `boss_app_management.html`
- `settings.html`
- `staff_binding_new.html`
- `staff_app_center_new.html`
- `staff_pos_tables.html`
- `staff_pos_order.html`
- `staff_pos_checkout.html`
- `staff_pos_success.html`
- `staff_booking_list.html`
- `staff_booking_new.html`
- `staff_payment_settings.html`
- `staff_settings.html`

## Current Realignment

### Boss Dashboard

Prototype content now represented:

- Store: `示範餐廳`
- Account balance: `1,250 點`
- Action: `購買點數`
- Quick entries: `AI 智能助手`, `應用開通`
- Today overview date: `2026-04-27`
- Metrics: `訂單量 23 單`, `應收金額 HK$ 4,860`, `實收金額 HK$ 4,650`
- Booking: `今日訂座 5 單`
- Consumption scene visualization:
  - Rendering changed from a plain table to an order-share chart plus per-row receivable/received comparison.
  - All prototype rows and values are preserved.
  - `堂食 / 15 / $3,200 / $3,100`
  - `自取 / 5 / $900 / $850`
  - `外送 / 3 / $760 / $700`
- Ordering method visualization:
  - Rendering changed from a plain table to an order-share chart plus per-row receivable/received comparison.
  - All prototype rows and values are preserved.
  - `顧客掃碼 / 10 / $2,100 / $2,050`
  - `服務員代點 / 10 / $2,200 / $2,100`
  - `外送平台 / 3 / $560 / $500`
- Notification center:
  - The prototype homepage has a bell entry and product rules for the notification center.
  - No inline notification-detail card is forced into the homepage until that drawer/route is implemented from the prototype.
- Bottom navigation:
  - Owner homepage now uses prototype labels `主頁`, `數據`, `設置`.
  - `數據` and `設置` are disabled placeholders until their prototype pages are implemented as Vue routes.

### Staff App Center

Prototype content now represented:

- `你好，陳大文`
- `christal的門店`
- `我的應用`
- App entries:
  - `智能收銀`
  - `訂座`
  - `員工設定`
- Pad guide:
  - `下載 Tappo Pad，解鎖完整功能`
  - `當前 Phone 可用`
  - `💵 現金收款 → 前往 Tappo Pad`
  - `🖨️ 小票打印 → 需 Tappo Pad 在綫`
  - `📋 完整訂單詳情 → Tappo Pad 或 MOS 後台`
  - `下載 Tappo Pad`
  - `複製 MOS 網址`

### POS Ordering

Prototype content now represented:

- Store and table: `示範餐廳`, `🍽 台 8`, `👤 客 2`
- Modes: `堂食`, `自取`
- Categories:
  - `茶餐類`
  - `多人餐包`
  - `單人餐包`
  - `麵食`
  - `超級工作日`
  - `抵食大餐`
  - `經典小食`
  - `甜品`
- Menu items:
  - `燒鵝四寶飯 / 燒鵝、炸雞、紅腸、鹹蛋 / $79`
  - `太興叉燒 / 叉燒、蔬菜 / $68`
  - `兩人套餐 / 兩人燒烤精選配新鮮有機食材 / $106`
  - `三人套餐 / 番茄、牛丸、牛肉 / $23`
  - `鮮蝦炒飯 / 鮮蝦、配料 / $52`
  - `牛肉河粉 / 牛肉、河粉 / $45`
  - `雲吞麵 / 雲吞、麵條 / $42`
  - `工作日特餐 / 平日限定套餐 / $55`
  - `抵食大餐A / 超值套餐 / $88`
  - `咖喱魚蛋 / 經典港式小食 / $25`
  - `楊枝甘露 / 芒果甜品 / $32`
- Bottom actions: `購物車是空的`, `送單`, `付款`

### Checkout

Prototype content now represented:

- `訂單確認`
- `堂食`, `台 8`, `客 2`
- `商品費用`
- Items:
  - `鮮杏汁豬肺湯（廚房） / $100`
  - `熱奶茶 / 多冰 + 正常糖 + 珍珠 / $10`
  - `兩人套餐 / 附注：叉燒、切雞 x2；菠菜、猪肉松、四季豆 x4；健康菜籽油 x2；熱香片茶 x2；年輕牛奶 / $99`
  - `可樂 / 已取消 / $2`
- Amounts:
  - `小計 $211`
  - `包裝費 $0`
  - `稅(10%) $21.1`
  - `折扣 -$10.00`
  - `合計 $222.1`
- Payment methods:
  - `KPay 掃碼`
  - `KPay 卡機 / 已配置`
  - `現金支付 / 現金支付請到 Tappo Pad 進行`
- Payment pending states retained as frontend bridge behavior.

### Payment Success

Prototype content now represented:

- `付款成功`
- `HK$ 222.1`
- `支付方式：KPay（掃碼）`
- `訂單號：TP-20260428-001`
- `🍽 台 8`
- `👤 客 2`
- `共 3 件商品`
- `合計 HK$ 222.1`
- `返回桌台`
- `10秒後自動返回桌台...`
- `取消`

## Known Remaining Work

These prototype pages are mapped but not yet fully implemented as Vue routes:

- Owner reports
- Owner points purchase
- Owner app management
- Owner settings
- Staff binding
- Staff table list
- Staff booking list
- Staff booking new
- Staff payment settings
- Staff settings

Before implementing each route, preserve the prototype content first, then apply visual redesign.
