"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { motion, type Variants } from "motion/react"
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Menu,
  MousePointer2,
  X,
} from "lucide-react"

import { BackgroundBeams } from "@/components/ui/background-beams"
import { Button } from "@/components/ui/button"
import {
  aboutModules,
  capabilities,
  capabilityGroups,
  customerSignals,
  demoIntents,
  heroFlow,
  integrationGroups,
  journeys,
  metrics,
  navItems,
  resourceModules,
} from "@/lib/candao-content"
import { cn } from "@/lib/utils"

const heroImage = "/images/candao/home-hero-restaurant-ops-2026-08-08.png"
const solutionImage = "/images/candao/solutions-hero-multistore-ops-2026-08-08.png"
const platformImage = "/images/candao/platform-capability-ui-2026-08-08.png"
const integrationImage = "/images/candao/integrations-ecosystem-ui-2026-08-08.png"
const customerImage = "/images/candao/customers-hero-case-ops-2026-08-08.png"
const aboutImage = "/images/candao/about-contact-service-ops-2026-08-08.png"

const heroCopyVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.06,
    },
  },
}

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: "easeOut" as const,
    },
  },
}

export function CapabilityPrototype() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeJourney, setActiveJourney] = useState(journeys[0].id)
  const [activeCapability, setActiveCapability] = useState(capabilities[0].id)
  const [activeGroup, setActiveGroup] = useState("全部")
  const [activeIntegration, setActiveIntegration] = useState(integrationGroups[0].id)
  const [activeIntent, setActiveIntent] = useState(demoIntents[0].label)

  const selectedJourney = journeys.find((item) => item.id === activeJourney) ?? journeys[0]
  const selectedCapability =
    capabilities.find((item) => item.id === activeCapability) ?? capabilities[0]
  const selectedIntegration =
    integrationGroups.find((item) => item.id === activeIntegration) ?? integrationGroups[0]

  const filteredCapabilities = useMemo(() => {
    if (activeGroup === "全部") {
      return capabilities
    }
    return capabilities.filter((item) => item.group === activeGroup)
  }, [activeGroup])

  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#101827]">
      <SiteHeader mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {mobileOpen ? (
        <div className="fixed inset-x-0 top-[72px] z-40 border-b border-[#dbe3ef] bg-white px-5 py-4 shadow-[0_24px_54px_rgba(16,24,39,0.12)] lg:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-[#253144] hover:bg-[#eaf2ff] hover:text-[#1f5ed8]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}

      <main>
        <section id="home" className="relative min-h-[812px] overflow-hidden bg-[#07111f] text-white">
          <motion.div
            className="qa4-motion-layer absolute inset-0"
            initial={{ opacity: 0, scale: 1.012 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src={heroImage}
              alt="餐飲門店營運場景"
              fill
              priority
              className="object-cover opacity-[0.72]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,.96),rgba(7,17,31,.74)_45%,rgba(7,17,31,.30))]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,.10),rgba(7,17,31,.70))]" />
            <BackgroundBeams className="qa4-hero-beams opacity-[0.22] mix-blend-screen" />
          </motion.div>

          <div className="relative z-10 mx-auto grid min-h-[812px] max-w-[1320px] grid-cols-1 items-center gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <motion.div
              className="max-w-[760px] pt-8 lg:pt-0"
              variants={heroCopyVariants}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={heroItemVariants}
                className="qa4-motion-layer inline-flex min-h-8 items-center rounded-lg border border-white/20 bg-white/10 px-3 text-sm text-white/85 backdrop-blur"
              >
                全球餐飲智能營運 SaaS 平台
              </motion.div>
              <motion.h1
                variants={heroItemVariants}
                className="qa4-motion-layer mt-5 max-w-[760px] text-[42px] font-semibold leading-[1.08] tracking-normal text-white sm:text-[58px] lg:text-[72px]"
              >
                讓餐飲營運，從多平台混亂走向一個清晰系統
              </motion.h1>
              <motion.p
                variants={heroItemVariants}
                className="qa4-motion-layer mt-6 max-w-[660px] text-[17px] leading-8 text-white/82 sm:text-[20px]"
              >
                Candao 連接訂單、菜單、門店、配送與數據，協助餐飲品牌在多市場、多門店中穩定營運與持續成長。
              </motion.p>
              <motion.div
                variants={heroItemVariants}
                className="qa4-motion-layer mt-9 flex flex-wrap gap-3"
              >
                <Button
                  className="h-12 rounded-lg bg-[#528dff] px-6 text-[15px] font-semibold text-white shadow-[0_16px_32px_rgba(82,141,255,0.28)] hover:bg-[#1f5ed8] focus-visible:ring-white/70"
                >
                  預約產品演示
                </Button>
                <a
                  href="#platform"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white/18 bg-white/10 px-6 text-[15px] font-semibold text-white backdrop-blur transition hover:bg-white/16"
                >
                  探索平台能力
                </a>
              </motion.div>

              <div className="mt-10 grid max-w-[660px] grid-cols-2 gap-3 sm:grid-cols-4">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-white/14 bg-white/10 p-3 backdrop-blur"
                  >
                    <p className="text-xs text-white/62">{item.label}</p>
                    <p className="mt-1 text-lg font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="qa4-motion-layer"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: "easeOut", delay: 0.08 }}
            >
              <OperationConsole selectedCapability={selectedCapability} />
            </motion.div>
          </div>
        </section>

        <section className="border-b border-[#dbe3ef] bg-white">
          <div className="mx-auto grid max-w-[1320px] gap-5 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold text-[#528dff]">營運流程入口</p>
              <h2 className="mt-2 max-w-[520px] text-2xl font-semibold tracking-normal text-[#101827] sm:text-3xl">
                從一筆訂單開始，看見完整營運流程
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-5">
              {heroFlow.map((step, index) => (
                <div key={step} className="rounded-lg border border-[#dbe3ef] bg-[#f8fbff] p-4">
                  <span className="text-xs font-semibold text-[#528dff]">0{index + 1}</span>
                  <p className="mt-2 text-sm font-semibold text-[#253144]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="bg-[#f5f8fc] px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeading
              kicker="解決方案"
              title="先理解業務壓力，再推薦平台能力"
              description="Solutions 保持場景化：先呈現角色壓力、營運問題和希望達成的結果，再導向對應的平台能力。"
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="grid gap-3">
                {journeys.map((journey) => {
                  const Icon = journey.icon
                  const selected = journey.id === activeJourney
                  return (
                    <button
                      key={journey.id}
                      onClick={() => setActiveJourney(journey.id)}
                      className={cn(
                        "flex min-h-[92px] items-start gap-4 rounded-lg border bg-white p-4 text-left transition",
                        selected
                          ? "border-[#528dff] shadow-[0_16px_44px_rgba(82,141,255,0.18)]"
                          : "border-[#dbe3ef] hover:border-[#a9caff]"
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center rounded-lg",
                          selected ? "bg-[#528dff] text-white" : "bg-[#eef4ff] text-[#1f5ed8]"
                        )}
                      >
                        <Icon className="size-5" />
                      </span>
                      <span>
                        <span className="block text-base font-semibold text-[#101827]">
                          {journey.label}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-[#5f6b7c]">
                          {journey.pressure}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="overflow-hidden rounded-lg border border-[#dbe3ef] bg-white shadow-[0_22px_72px_rgba(16,24,39,0.10)]">
                <div className="relative h-[260px] overflow-hidden sm:h-[320px]">
                  <Image
                    src={solutionImage}
                    alt="多門店餐飲營運場景"
                    fill
                    loading="eager"
                    className="object-cover object-[54%_center]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,24,39,.68),rgba(16,24,39,.15))]" />
                  <div className="absolute bottom-5 left-5 right-5 max-w-[680px] text-white">
                    <p className="text-sm text-white/78">已選擇場景</p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-normal">
                      {selectedJourney.label}
                    </h3>
                    <p className="mt-3 max-w-[620px] text-sm leading-6 text-white/82">
                      {selectedJourney.result}
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 p-5 sm:grid-cols-[1fr_1fr]">
                  <div className="rounded-lg border border-[#dbe3ef] bg-[#f8fbff] p-4">
                    <p className="text-sm font-semibold text-[#253144]">角色壓力</p>
                    <p className="mt-2 text-sm leading-6 text-[#5f6b7c]">{selectedJourney.pressure}</p>
                  </div>
                  <div className="rounded-lg border border-[#dbe3ef] bg-[#f8fbff] p-4">
                    <p className="text-sm font-semibold text-[#253144]">推薦能力</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedJourney.recommended.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-[#cfe0ff] bg-white px-3 py-2 text-sm font-medium text-[#1f5ed8]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeading
              kicker="平台"
              title="餐飲營運的核心能力，連接在同一個平台"
              description="Platform 只講產品能力、工作流、UI 狀態和資料流，讓每一項能力都能被看見、被切換、被追蹤。"
            />

            <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
              {capabilityGroups.map((group) => (
                <button
                  key={group}
                  onClick={() => setActiveGroup(group)}
                  className={cn(
                    "h-10 shrink-0 rounded-lg border px-4 text-sm font-semibold transition",
                    activeGroup === group
                      ? "border-[#528dff] bg-[#528dff] text-white"
                      : "border-[#dbe3ef] bg-white text-[#344256] hover:bg-[#f2f6ff]"
                  )}
                >
                  {group}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-3 sm:grid-cols-2">
                {filteredCapabilities.map((capability) => {
                  const Icon = capability.icon
                  const selected = capability.id === activeCapability
                  return (
                    <button
                      key={capability.id}
                      onClick={() => setActiveCapability(capability.id)}
                      className={cn(
                        "min-h-[148px] rounded-lg border bg-white p-4 text-left transition",
                        selected
                          ? "border-[#528dff] shadow-[0_18px_44px_rgba(82,141,255,0.18)]"
                          : "border-[#dbe3ef] hover:border-[#a9caff]"
                      )}
                    >
                      <span className="flex items-center justify-between gap-4">
                        <span
                          className="flex size-10 items-center justify-center rounded-lg text-white"
                          style={{ background: capability.accent }}
                        >
                          <Icon className="size-5" />
                        </span>
                        <span className="rounded-lg bg-[#f2f6ff] px-2 py-1 text-xs font-semibold text-[#5f6b7c]">
                          {capability.group}
                        </span>
                      </span>
                      <span className="mt-4 block text-base font-semibold text-[#101827]">
                        {capability.label}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-[#5f6b7c]">
                        {capability.summary}
                      </span>
                    </button>
                  )
                })}
              </div>

              <ProductPanel capability={selectedCapability} />
            </div>
          </div>
        </section>

        <section id="integrations" className="bg-[#eef4ff] px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionHeading
                kicker="整合能力"
                title="連接餐飲營運需要的關鍵系統"
                description="先把每一類連接對象暴露出來，再由 Figma 和正式內容稿補充準確的整合深度、狀態與案例。"
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {integrationGroups.map((group) => {
                  const Icon = group.icon
                  const selected = group.id === activeIntegration
                  return (
                    <button
                      key={group.id}
                      onClick={() => setActiveIntegration(group.id)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg border bg-white p-4 text-left transition",
                        selected ? "border-[#528dff]" : "border-[#dbe3ef] hover:border-[#a9caff]"
                      )}
                    >
                      <span className="flex size-10 items-center justify-center rounded-lg bg-[#f2f6ff] text-[#1f5ed8]">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-semibold text-[#253144]">{group.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#dbe3ef] bg-white shadow-[0_22px_72px_rgba(16,24,39,0.10)]">
              <div className="relative h-[300px]">
                <Image
                  src={integrationImage}
                  alt="餐飲營運系統整合畫面"
                  fill
                  loading="eager"
                  className="object-cover object-[58%_center]"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-[#528dff]">目前查看</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-normal text-[#101827]">
                  {selectedIntegration.label}
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {selectedIntegration.items.map((item) => (
                    <div key={item} className="rounded-lg border border-[#dbe3ef] bg-[#f8fbff] p-4">
                      <CheckCircle2 className="size-5 text-[#0f766e]" />
                      <p className="mt-3 text-sm font-semibold text-[#253144]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customers" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeading
              kicker="客戶案例"
              title="看 Candao 如何支援不同餐飲營運場景"
              description="目前先使用匿名場景建立案例框架，不使用未確認客戶 Logo、具體數字或公開承諾。"
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-[#dbe3ef]">
                <Image
                  src={customerImage}
                  alt="餐飲品牌營運案例場景"
                  fill
                  loading="eager"
                  className="object-cover object-[72%_center]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,39,.08),rgba(16,24,39,.70))]" />
                <div className="absolute bottom-0 p-6 text-white">
                  <p className="text-sm text-white/78">案例資源入口</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-normal">
                    從營運挑戰，到可追蹤的改善路徑
                  </h3>
                </div>
              </div>
              <div className="grid gap-3">
                {customerSignals.map((signal) => (
                  <div key={signal.label} className="rounded-lg border border-[#dbe3ef] bg-[#f8fbff] p-5">
                    <p className="text-lg font-semibold text-[#101827]">{signal.label}</p>
                    <p className="mt-2 text-sm leading-6 text-[#5f6b7c]">{signal.challenge}</p>
                    <div className="mt-4 rounded-lg border border-[#cfe0ff] bg-white p-4 text-sm font-medium text-[#1f5ed8]">
                      {signal.response}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="bg-[#f5f8fc] px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeading
              kicker="資源"
              title="用不同模組承接評估、導入、支援與查詢"
              description="每個資源模組保留獨立入口，避免全部變成同一套側邊欄或 FAQ 面板。"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resourceModules.map((module) => {
                const Icon = module.icon
                return (
                  <div key={module.label} className="rounded-lg border border-[#dbe3ef] bg-white p-5">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-[#eef4ff] text-[#1f5ed8]">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-[#101827]">{module.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5f6b7c]">{module.summary}</p>
                    <a
                      href="#demo"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1f5ed8]"
                    >
                      進入模組 <ArrowRight className="size-4" />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-[#dbe3ef]">
              <Image
                src={aboutImage}
                alt="Candao 服務與營運協作場景"
                fill
                loading="eager"
                className="object-cover object-[72%_center]"
              />
            </div>
            <div>
              <SectionHeading
                kicker="關於 Candao"
                title="為餐飲品牌打造可持續擴展的營運平台"
                description="公司內容後續以 Figma 準確內容設計為準；這裡先暴露關於頁應承接的資訊模組。"
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {aboutModules.map((module) => {
                  const Icon = module.icon
                  return (
                    <div key={module.label} className="rounded-lg border border-[#dbe3ef] bg-[#f8fbff] p-5">
                      <Icon className="size-5 text-[#528dff]" />
                      <p className="mt-4 text-base font-semibold text-[#101827]">{module.label}</p>
                      <p className="mt-2 text-sm leading-6 text-[#5f6b7c]">{module.summary}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="bg-[#07111f] px-5 py-20 text-white sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold text-[#a9caff]">預約產品演示</p>
              <h2 className="mt-3 max-w-[620px] text-4xl font-semibold tracking-normal sm:text-5xl">
                告訴我們你的營運場景，安排合適的產品演示
              </h2>
              <p className="mt-5 max-w-[620px] text-base leading-8 text-white/72">
                表單先暴露分流能力：銷售、合作、支援與一般查詢可以進入不同後續流程。
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {demoIntents.map((intent) => (
                  <button
                    key={intent.label}
                    onClick={() => setActiveIntent(intent.label)}
                    className={cn(
                      "rounded-lg border p-4 text-left transition",
                      activeIntent === intent.label
                        ? "border-[#528dff] bg-[#528dff] text-white"
                        : "border-white/14 bg-white/8 text-white hover:bg-white/12"
                    )}
                  >
                    <span className="font-semibold">{intent.label}</span>
                    <span className="mt-2 block text-sm leading-6 text-white/70">{intent.summary}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-white/12 bg-white p-5 text-[#101827] shadow-[0_22px_72px_rgba(0,0,0,0.20)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {["公司名稱", "聯絡人", "市場 / 地區", "門店規模"].map((label) => (
                  <label key={label} className="grid gap-2 text-sm font-semibold text-[#344256]">
                    {label}
                    <input
                      className="h-11 rounded-lg border border-[#dbe3ef] bg-[#f8fbff] px-3 outline-none focus:border-[#528dff]"
                      placeholder="待填寫"
                    />
                  </label>
                ))}
              </div>
              <label className="mt-4 grid gap-2 text-sm font-semibold text-[#344256]">
                目前關注
                <div className="rounded-lg border border-[#dbe3ef] bg-[#f8fbff] p-4 text-sm text-[#5f6b7c]">
                  {activeIntent}
                </div>
              </label>
              <label className="mt-4 grid gap-2 text-sm font-semibold text-[#344256]">
                營運挑戰
                <textarea
                  className="min-h-[118px] rounded-lg border border-[#dbe3ef] bg-[#f8fbff] p-3 outline-none focus:border-[#528dff]"
                  placeholder="描述你的渠道、門店、配送或整合需求"
                />
              </label>
              <Button className="mt-5 h-12 w-full bg-[#528dff] text-base text-white hover:bg-[#1f5ed8]">
                提交需求 <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function SiteHeader({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
}) {
  return (
    <header className="sticky top-0 z-50 flex min-h-[72px] items-center justify-between gap-5 border-b border-[#dbe3ef]/90 bg-white/92 px-5 backdrop-blur-xl sm:px-8 lg:px-10">
      <a href="#home" className="flex min-w-[146px] items-center gap-3 font-semibold text-[#101827]">
        <span className="size-8 rounded-lg bg-[linear-gradient(135deg,#1747b2,#528dff_62%,#a9caff)] shadow-[0_12px_26px_rgba(82,141,255,0.28)]" />
        <span>Candao</span>
      </a>
      <nav className="hidden items-center gap-1 lg:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group relative rounded-lg px-3 py-2 text-sm font-semibold text-[#344256] transition hover:bg-[#eaf2ff] hover:text-[#1f5ed8]"
          >
            {item.label}
            <span className="pointer-events-none absolute left-0 top-[42px] hidden w-[320px] rounded-lg border border-[#dbe3ef] bg-white p-4 text-left shadow-[0_22px_64px_rgba(16,24,39,0.14)] group-hover:block">
              <span className="block text-sm font-semibold text-[#101827]">{item.label}</span>
              <span className="mt-2 block text-sm leading-6 text-[#5f6b7c]">{item.summary}</span>
              <span className="mt-3 grid gap-1">
                {item.links.map((link) => (
                  <span key={link} className="flex items-center gap-2 text-xs font-medium text-[#344256]">
                    <ChevronRight className="size-3 text-[#528dff]" />
                    {link}
                  </span>
                ))}
              </span>
            </span>
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <span className="hidden text-sm text-[#5f6b7c] sm:inline">繁中 / EN</span>
        <a
          href="#demo"
          className="hidden h-10 items-center justify-center rounded-lg bg-[#528dff] px-4 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(82,141,255,0.28)] transition hover:bg-[#1f5ed8] sm:inline-flex"
        >
          預約產品演示
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex size-10 items-center justify-center rounded-lg border border-[#dbe3ef] bg-white lg:hidden"
          aria-label="切換導航"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
    </header>
  )
}

function OperationConsole({
  selectedCapability,
}: {
  selectedCapability: (typeof capabilities)[number]
}) {
  return (
    <div className="rounded-lg border border-white/14 bg-white/92 p-4 text-[#101827] shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:p-5">
      <div className="flex items-center justify-between gap-4 border-b border-[#dbe3ef] pb-4">
        <div>
          <p className="text-sm font-semibold text-[#528dff]">今日營運流程</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-normal">訂單、門店、配送與數據</h2>
        </div>
        <span className="rounded-lg bg-[#e8fff7] px-3 py-2 text-sm font-semibold text-[#0f766e]">
          已連接
        </span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.78fr]">
        <div className="rounded-lg border border-[#dbe3ef] bg-[#f8fbff] p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="font-semibold">即時訂單隊列</p>
            <span className="text-xs font-semibold text-[#5f6b7c]">營運中</span>
          </div>
          <div className="mt-4 grid gap-3">
            {["手機點餐", "外送平台", "自助點餐"].map((channel, index) => (
              <div key={channel} className="rounded-lg border border-[#dbe3ef] bg-white p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold">{channel}</span>
                  <span className="text-xs text-[#5f6b7c]">門店 0{index + 1}</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e8edf6]">
                  <div
                    className="h-full rounded-full bg-[#528dff]"
                    style={{ width: `${58 + index * 14}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          {["門店狀態", "配送履約", "資料回饋"].map((item, index) => (
            <div key={item} className="rounded-lg border border-[#dbe3ef] bg-white p-4">
              <p className="text-sm font-semibold text-[#253144]">{item}</p>
              <p className="mt-2 text-xs leading-5 text-[#5f6b7c]">{selectedCapability.flow[index]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-lg border border-[#cfe0ff] bg-[#eef4ff] p-4">
        <div className="flex items-start gap-3">
          <MousePointer2 className="mt-1 size-5 shrink-0 text-[#528dff]" />
          <div>
            <p className="font-semibold text-[#101827]">{selectedCapability.label}</p>
            <p className="mt-1 text-sm leading-6 text-[#5f6b7c]">{selectedCapability.state}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductPanel({ capability }: { capability: (typeof capabilities)[number] }) {
  const Icon = capability.icon

  return (
    <div className="overflow-hidden rounded-lg border border-[#dbe3ef] bg-[#101827] text-white shadow-[0_22px_72px_rgba(16,24,39,0.18)]">
      <div className="relative h-[250px] sm:h-[330px]">
        <Image
          src={platformImage}
          alt="Candao 平台能力 UI"
          fill
          loading="eager"
          className="object-cover object-[54%_center] opacity-84"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,39,.05),rgba(16,24,39,.64))]" />
        <div className="absolute bottom-5 left-5 right-5">
          <div
            className="flex size-12 items-center justify-center rounded-lg text-white"
            style={{ background: capability.accent }}
          >
            <Icon className="size-6" />
          </div>
          <h3 className="mt-4 text-3xl font-semibold tracking-normal">{capability.label}</h3>
          <p className="mt-2 max-w-[620px] text-sm leading-6 text-white/72">{capability.summary}</p>
        </div>
      </div>
      <div className="grid gap-3 p-5 sm:grid-cols-4">
        {capability.flow.map((step, index) => (
          <div key={step} className="rounded-lg border border-white/12 bg-white/8 p-4">
            <span className="text-xs font-semibold text-[#a9caff]">0{index + 1}</span>
            <p className="mt-2 text-sm font-semibold text-white">{step}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 p-5">
        <p className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#1f5ed8]">
          {capability.state}
        </p>
      </div>
    </div>
  )
}

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string
  title: string
  description: string
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-[#528dff]">{kicker}</p>
      <h2 className="mt-3 max-w-[760px] text-3xl font-semibold tracking-normal text-[#101827] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-[760px] text-base leading-8 text-[#5f6b7c]">{description}</p>
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-[#dbe3ef] bg-white px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[0.9fr_1.4fr]">
        <div>
          <div className="flex items-center gap-3 font-semibold text-[#101827]">
            <span className="size-8 rounded-lg bg-[linear-gradient(135deg,#1747b2,#528dff_62%,#a9caff)]" />
            Candao
          </div>
          <p className="mt-4 max-w-[420px] text-sm leading-6 text-[#5f6b7c]">
            讓餐飲營運從多平台、多門店、多流程，回到一個清晰的營運系統。
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {navItems.slice(1, 7).map((item) => (
            <div key={item.label}>
              <p className="font-semibold text-[#101827]">{item.label}</p>
              <div className="mt-3 grid gap-2">
                {item.links.slice(0, 4).map((link) => (
                  <a key={link} href={item.href} className="text-sm text-[#5f6b7c] hover:text-[#1f5ed8]">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
