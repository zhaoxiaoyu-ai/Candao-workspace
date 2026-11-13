const platformCapabilities = {
  orders: {
    title: "多渠道訂單進入 OMS 後台",
    body: "外賣平台、自有 H5 / Web / APP / QR 和 Call Center 訂單進入 OMS，門店按渠道、訂單狀態、配送狀態和異常類型處理。",
    object: "業務對象：訂單、渠道、門店、訂單狀態、配送狀態、異常類型。",
    state: "狀態 / 操作：待接單、製作中、配送中、取消、退款、超時提醒。",
    product: "對應產品：OMS、COMS、SOMS、Order Processing Center。",
    cta: "預約訂單場景演示"
  },
  menu: {
    title: "餐單、售罄和門店狀態同步",
    body: "總部和門店維護餐單、庫存、售罄、區域菜單、營業時間、配送條件和門店接單狀態，減少多平台重複更新。",
    object: "業務對象：餐單、SKU、庫存、售罄、門店、營業時間。",
    state: "狀態 / 操作：同步餐單、更新售罄、調整營業時間、處理門店異常。",
    product: "對應產品：Menu Center、Store Abnormity Management。",
    cta: "查看餐單與門店演示"
  },
  member: {
    title: "自有點餐與會員入口回到門店流程",
    body: "自有點餐入口承接堂食掃碼、外賣、自取、預約和會員活動，顧客下單後回到門店接單與後台管理。",
    object: "業務對象：顧客、會員、優惠券、活動、門店接單。",
    state: "狀態 / 操作：已接單、製作中、配送中、已完成、會員活動追蹤。",
    product: "對應產品：Mobile Ordering、QR / H5 / Web ordering。",
    cta: "預約自有點餐演示"
  },
  delivery: {
    title: "配送履約、派單與異常追蹤",
    body: "DMS / iDMS 管理自有騎手、第三方配送、智能派單、人工派單、第三方溢出、SMS 通知和配送異常。",
    object: "業務對象：配送單、騎手、配送狀態、第三方配送、超時。",
    state: "狀態 / 操作：待派單、已派單、到店、取餐、配送中、已送達、轉第三方。",
    product: "對應產品：DMS、iDMS、Rider App。",
    cta: "查看配送履約演示"
  },
  data: {
    title: "報表、看板與平台訂單對賬差異",
    body: "CDBI 和財務對賬能力比對平台訂單與餐道 OMS 訂單，標記金額差異、狀態差異和漏單，支援管理層、營運和財務查看。",
    object: "業務對象：報表、看板、平台訂單、OMS 訂單、對賬單、GMV、漏單標記。",
    state: "狀態 / 操作：查看報表、重新對賬、追蹤差異來源。",
    product: "對應產品：CDBI、Data Asset、財務對賬。",
    cta: "預約數據與對賬演示"
  },
  connector: {
    title: "AMS / Connector 連接外部系統與營運資料",
    body: "外賣平台、自建入口、POS / KDS、CRM、配送、支付、ERP 和 API 可經由 Connector 回到訂單、會員、配送、數據和對賬流程。",
    object: "業務對象：API、字段、權限、接入狀態、資料流。",
    state: "狀態 / 操作：接入評估、字段比對、異常回傳、權限設定。",
    product: "對應產品：AMS / Connector。",
    cta: "提交接入評估"
  }
};

const homeCapabilities = {
  channels: {
    mediaTitle: "多渠道訂單總覽",
    mediaBody: "外賣平台、自有 H5 / Web / APP / QR 和 Call Center 訂單回到 OMS。",
    point1: "<strong>渠道聚合：</strong>外賣平台、自有 H5 / Web / APP / QR 和 Call Center 訂單進入餐道 OMS。",
    point2: "<strong>下一步：</strong>查看多渠道訂單、門店接單、配送狀態和異常處理。",
    cta: "查看平台能力",
    href: "platform.html"
  },
  operations: {
    mediaTitle: "門店與餐單承接",
    mediaBody: "門店接單、餐單同步、售罄、打印和營業時間回到同一流程。",
    point1: "<strong>營運承接：</strong>門店、餐單、售罄、接單、打印與異常提醒回到統一流程。",
    point2: "<strong>下一步：</strong>查看餐單、門店狀態和異常提醒如何被處理。",
    cta: "查看營運承接",
    href: "platform.html"
  },
  delivery: {
    mediaTitle: "配送履約狀態",
    mediaBody: "DMS / iDMS 呈現自有騎手、第三方配送、派單和配送異常。",
    point1: "<strong>配送履約：</strong>DMS / iDMS 管理自有騎手、第三方配送、派單、轉派和配送異常。",
    point2: "<strong>下一步：</strong>查看配送履約演示或提交相似場景。",
    cta: "查看配送履約",
    href: "platform.html"
  },
  finance: {
    mediaTitle: "數據與對賬",
    mediaBody: "CDBI 與財務對賬能力對比平台訂單和 OMS 訂單，標記差異和漏單。",
    point1: "<strong>數據對賬：</strong>CDBI / 財務對賬支援報表、看板與平台訂單對賬差異。",
    point2: "<strong>下一步：</strong>查看報表、重新對賬或追蹤差異來源。",
    cta: "查看數據與對賬",
    href: "platform.html"
  },
  ecosystem: {
    mediaTitle: "生態接入網絡",
    mediaBody: "AMS / Connector 連接 POS / KDS、CRM、支付、ERP、配送和 API。",
    point1: "<strong>生態接入：</strong>AMS / Connector 對接外賣平台、自建入口、POS / KDS、CRM、支付、ERP 和配送。",
    point2: "<strong>下一步：</strong>提交接入評估，整理字段、權限和異常處理方式。",
    cta: "查看整合能力",
    href: "integrations.html"
  }
};

const solutionScenarios = {
  "delivery-orders": {
    title: "讓多平台外賣訂單回到同一條處理鏈路",
    body: "集中查看外賣平台訂單，讓門店接單、打印、退款、取消、配送狀態和財務對賬進入統一流程。",
    media: "對照訂單來源、門店處理、配送履約和對賬結果，判斷目前最需要改善的流程段落。",
    products: "承接能力：OMS、Menu Center、DMS / iDMS、財務對賬。",
    next: "下一步：查看平台能力或預約相似場景演示。",
    cta: "預約相似場景演示"
  },
  "owned-ordering": {
    title: "把堂食掃碼、自有外賣和會員活動接回門店後台",
    body: "自有點餐入口承接堂食、外賣、自取和會員活動，顧客下單後回到門店接單、製作和後台管理。",
    media: "顧客入口、會員活動、門店接單和訂單狀態回到同一條服務流程。",
    products: "承接能力：Mobile Ordering、QR / H5 / Web ordering、OMS。",
    next: "下一步：查看自有點餐和會員場景。",
    cta: "預約自有點餐演示"
  },
  "delivery-fulfillment": {
    title: "配送營運從派單到第三方溢出保持可追蹤",
    body: "配送主管可查看待派單、已派單、到店、取餐、配送中、已送達和轉第三方等狀態。",
    media: "派單、騎手、第三方配送和超時異常可沿著履約狀態一路追蹤。",
    products: "承接能力：DMS、iDMS、Rider App、SMS 通知。",
    next: "下一步：查看配送履約能力。",
    cta: "查看配送履約演示"
  },
  finance: {
    title: "平台訂單與 OMS 訂單對賬差異進入可處理流程",
    body: "財務和營運可比對平台訂單、OMS 訂單和對賬單，追蹤金額差異、狀態差異和漏單。",
    media: "對賬差異從發現、標記到重新對賬，保留可追蹤處理路徑。",
    products: "承接能力：CDBI、Data Asset、財務對賬。",
    next: "下一步：查看數據與對賬能力。",
    cta: "預約數據對賬演示"
  },
  "member-data": {
    title: "會員與營運數據連接訂單、活動和復購分析",
    body: "市場和營運團隊可把會員入口、活動、訂單和報表放回同一鏈路，避免只看分散渠道數據。",
    media: "會員、活動、訂單和報表資料可一起支援營運判斷。",
    products: "承接能力：Mobile Ordering、CDBI、Data Asset。",
    next: "下一步：預約會員營運場景演示。",
    cta: "預約會員場景演示"
  },
  "store-menu": {
    title: "門店、餐單、售罄和營業時間避免多平台重複維護",
    body: "總部和門店維護餐單、庫存、售罄、區域菜單、營業時間、配送條件和門店接單狀態。",
    media: "餐單、售罄和門店狀態可在各渠道間保持一致更新。",
    products: "承接能力：Menu Center、Store Abnormity Management、OMS。",
    next: "下一步：查看餐單與門店能力。",
    cta: "查看餐單與門店演示"
  }
};

const integrationStates = {
  "delivery-platforms": {
    title: "外賣平台訂單進入 OMS",
    body: "訂單數據進入 Connector 後，需要標準化訂單、餐單、用戶和基礎資料，再回到 OMS、Data Asset 和財務對賬。",
    object: "<strong>資料對象：</strong>Menu、Order、User、Basic Info。",
    next: "<strong>適合情境：</strong>需要把多平台訂單、餐單更新、用戶資料和對賬差異接回餐道流程。",
    cta: "提交接入評估"
  },
  "owned-entry": {
    title: "自建點餐入口接回會員、訂單和門店流程",
    body: "H5 / Web / APP / QR 等入口可承接堂食、自取、外賣、預約和會員活動，訂單回到門店接單與後台管理。",
    object: "<strong>資料對象：</strong>Order、User、Payment、Store。",
    next: "<strong>適合情境：</strong>希望自有點餐入口、會員資料和門店履約流程一起管理。",
    cta: "評估自建入口"
  },
  "pos-kds": {
    title: "POS / KDS 與門店執行狀態對齊",
    body: "POS / KDS 可讓門店接單、打印、後廚單、出餐狀態和異常回傳與 OMS 訂單流程對齊。",
    object: "<strong>資料對象：</strong>Store、Order、Print、Kitchen status。",
    next: "<strong>適合情境：</strong>外部訂單進店後仍需要連接收銀、打印和後廚製作流程。",
    cta: "提交門店系統資料"
  },
  crm: {
    title: "CRM / 會員資料與訂單和活動回到同一鏈路",
    body: "會員資料、等級、權益、優惠券和活動需要與訂單、門店和報表關聯。",
    object: "<strong>資料對象：</strong>User、Membership、Campaign、Order。",
    next: "<strong>適合情境：</strong>希望把會員權益、活動、訂單和復購分析放在同一條營運鏈路。",
    cta: "評估會員接入"
  },
  "payment-erp": {
    title: "支付、ERP 和財務資料需要明確對賬邊界",
    body: "支付狀態、平台訂單、OMS 訂單和 ERP / 財務資料可按時間、金額和狀態口徑進行對齊。",
    object: "<strong>資料對象：</strong>Payment、Invoice、Order、Finance。",
    next: "<strong>適合情境：</strong>需要追蹤金額差異、狀態差異、漏單和財務資料回流。",
    cta: "預約財務接入演示"
  },
  "delivery-api": {
    title: "配送與 API 接入要處理狀態回傳和異常",
    body: "自有騎手、第三方配送、派單、轉派、SMS 和配送異常需要形成可追蹤狀態。",
    object: "<strong>資料對象：</strong>Delivery order、Rider、Dispatch、Exception。",
    next: "<strong>適合情境：</strong>品牌同時管理自有騎手、第三方配送和配送異常回傳。",
    cta: "評估配送接入"
  }
};

const customerCases = {
  "pizza-box": {
    title: "Pizza-Box",
    body: "合作超過 9 年；使用 OMS、APP / Web 點餐、第三方配送整合、自有配送、營銷工具、BI 分析與客戶服務。",
    metric: "導入後變化：訂單、配送、營銷和客戶服務不再分散在多個工具中，品牌可以用同一套流程追蹤門店履約和服務狀態。",
    next: "下一步：預約相似場景演示。",
    cta: "預約相似場景演示"
  },
  "jia-group": {
    title: "JIA Group",
    body: "COMS 系統涵蓋訂單管理、餐單管理、配送管理、會員管理和營運數據分析服務，支援多品牌與多門店營運。",
    metric: "導入後變化：品牌組合、門店資料、會員與營運數據可被集中管理，方便總部按場景查看和跟進。",
    next: "下一步：查看多品牌營運場景。",
    cta: "預約多品牌場景演示"
  },
  jardine: {
    title: "Jardine Group",
    body: "為 KFC、Pizza Hut、PHD 等場景提供服務，DMS 覆蓋 200+ outlets，並管理 iDMS 配送服務與 OMS 外賣平台整合。",
    metric: "導入後變化：配送履約、門店訂單和第三方平台狀態能回到同一套監控與管理流程。",
    next: "下一步：查看配送履約和 DMS / iDMS 場景。",
    cta: "預約配送場景演示"
  }
};

const resourceStages = {
  evaluate: {
    title: "評估中常見問題",
    q1: "接入前要準備哪些系統類型？可先整理外賣平台、自建入口、POS / KDS、CRM、配送、支付和 ERP。",
    q2: "財務對賬如何比對平台訂單與餐道 OMS 訂單，識別金額、狀態和漏單差異？",
    cta: "提交支援或查詢"
  },
  onboarding: {
    title: "導入中常見準備",
    q1: "導入時通常會整理門店、餐單、渠道、POS / KDS、支付、CRM、ERP 和配送資料。",
    q2: "餐單、門店或配送資料越完整，後續接入、驗證和異常排查會越清晰。",
    cta: "提交導入問題"
  },
  operations: {
    title: "日常營運問題分流",
    q1: "訂單、退款、取消、接單超時、配送超時和對賬差異應按業務對象提交。",
    q2: "既有客戶支援查詢應導向支援中心，不與新客 Demo 表單混用。",
    cta: "提交營運查詢"
  },
  technical: {
    title: "技術查詢與接入評估",
    q1: "IT 團隊可提交 API、字段、權限、資料流和異常回傳方式等接入問題。",
    q2: "餐道團隊會依據系統類型、字段口徑和營運流程安排後續技術評估。",
    cta: "提交技術查詢"
  }
};

const aboutStages = {
  company: {
    title: "以產品平台、數據分析、配送履約和質量保障支撐長期營運",
    p1: "產品平台：訂單、餐單、門店、配送和接入。",
    p2: "Data Analysis：報表、看板、平台訂單與 OMS 訂單對賬差異。",
    p3: "Quality Assurance：支援導入、服務管理、安全與持續營運。"
  },
  products: {
    title: "OMS、CDBI、DMS 和 AMS / Connector 承接不同營運環節",
    p1: "OMS：多渠道訂單、門店接單、訂單處理和異常提醒。",
    p2: "CDBI / 財務對賬：報表、看板和平台訂單對賬差異。",
    p3: "DMS / iDMS / AMS / Connector：配送履約、第三方配送和系統接入。"
  },
  service: {
    title: "Merchant Service、Operation 和 Helpdesk 支撐長期合作",
    p1: "Merchant Service：承接導入、培訓和營運支援。",
    p2: "Operation：協助品牌梳理門店、餐單、配送和訂單流程。",
    p3: "Helpdesk：處理日常查詢、異常和支援入口。"
  }
};

function setText(id, value, html = false) {
  const el = document.getElementById(id);
  if (!el) return;
  if (html) el.innerHTML = value;
  else el.textContent = value;
}

function activateButton(button, selector) {
  document.querySelectorAll(selector).forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");
}

function initMobileNavigation() {
  document.querySelectorAll(".nav-inner").forEach((nav) => {
    const links = nav.querySelector(".nav-links");
    if (!links || nav.querySelector(".menu-toggle")) return;
    const button = document.createElement("button");
    button.className = "menu-toggle";
    button.type = "button";
    button.setAttribute("aria-label", "開啟主導航");
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = "<span></span><span></span><span></span>";
    nav.insertBefore(button, links);
    button.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      button.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
    });
  });
}

initMobileNavigation();

document.querySelectorAll("[data-home-capability]").forEach((button) => {
  button.addEventListener("click", () => {
    const data = homeCapabilities[button.dataset.homeCapability];
    if (!data) return;
    activateButton(button, "[data-home-capability]");
    setText("home-media-title", data.mediaTitle);
    setText("home-media-body", data.mediaBody);
    setText("home-point-1", data.point1, true);
    setText("home-point-2", data.point2, true);
    const cta = document.getElementById("home-capability-cta");
    if (cta) {
      cta.textContent = data.cta;
      cta.setAttribute("href", data.href);
    }
  });
});

document.querySelectorAll("[data-capability]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.capability;
    const data = platformCapabilities[key];
    if (!data) return;
    activateButton(button, "[data-capability]");
    for (const [id, value] of Object.entries({
      "cap-title": data.title,
      "cap-body": data.body,
      "cap-object": data.object,
      "cap-state": data.state,
      "cap-product": data.product,
      "cap-cta": data.cta
    })) {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    }
  });
});

document.querySelectorAll("[data-scenario]").forEach((button) => {
  button.addEventListener("click", () => {
    const data = solutionScenarios[button.dataset.scenario];
    if (!data) return;
    activateButton(button, "[data-scenario]");
    setText("scenario-title", data.title);
    setText("scenario-body", data.body);
    setText("scenario-media-body", data.media);
    setText("scenario-products", data.products);
    setText("scenario-next", data.next);
    setText("scenario-cta", data.cta);
  });
});

document.querySelectorAll("[data-integration]").forEach((button) => {
  button.addEventListener("click", () => {
    const data = integrationStates[button.dataset.integration];
    if (!data) return;
    activateButton(button, "[data-integration]");
    setText("integration-title", data.title);
    setText("integration-body", data.body);
    setText("integration-object", data.object, true);
    setText("integration-next", data.next, true);
    setText("integration-cta", data.cta);
  });
});

document.querySelectorAll("[data-case]").forEach((button) => {
  button.addEventListener("click", () => {
    const data = customerCases[button.dataset.case];
    if (!data) return;
    activateButton(button, "[data-case]");
    setText("case-title", data.title);
    setText("case-body", data.body);
    setText("case-metric", data.metric);
    setText("case-next", data.next);
    setText("case-cta", data.cta);
  });
});

document.querySelectorAll("[data-resource-stage]").forEach((button) => {
  button.addEventListener("click", () => {
    const data = resourceStages[button.dataset.resourceStage];
    if (!data) return;
    activateButton(button, "[data-resource-stage]");
    setText("resource-title", data.title);
    setText("resource-q1", data.q1);
    setText("resource-q2", data.q2);
    setText("resource-cta", data.cta);
  });
});

document.querySelectorAll("[data-about-stage]").forEach((button) => {
  button.addEventListener("click", () => {
    const data = aboutStages[button.dataset.aboutStage];
    if (!data) return;
    activateButton(button, "[data-about-stage]");
    setText("about-title", data.title);
    setText("about-point-1", data.p1);
    setText("about-point-2", data.p2);
    setText("about-point-3", data.p3);
  });
});

document.querySelectorAll("[data-intent]").forEach((button) => {
  button.addEventListener("click", () => {
    activateButton(button, "[data-intent]");
    const summary = document.getElementById("intent-summary");
    if (summary) summary.textContent = button.dataset.intent;
  });
});
