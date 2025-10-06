import AllInOneSolution from "./AllInOneSolution";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";
import PartnerWithNativeTeams from "./PartnerWithNativeTeams";
import GrowingTogether from "./GrowingTogether";
import SmarterWayToEmploy from "./SmarterWayToEmploy";
import CustomerTestimonials from "./CustomerTestimonials";
import ExpertSupport from "./ExpertSupport";
import PayrollMadeEasy from "./PayrollMadeEasy";
import ReviewRating from "./ReviewRating";
import Footer from "./Footer";

export default function HeroSection() {
  return (
    <div className="w-full bg-[#0f0f10] text-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* background grid + radial glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* radial glow */}
          <div className="absolute left-1/2 top-1/2 h-[90rem] w-[90rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-pink-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />

          {/* subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[0.15]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 pt-28 md:pt-36">
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">Global payroll • Compliance • Payouts</span>
            </div>

            <h1 className="mx-auto max-w-5xl text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Your Global Platform for Work Payments
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-pretty text-base text-white/80 sm:text-lg md:text-xl">
              Expand without limits—hire, pay, and manage your global team and gig workers while we handle payroll, local compliance, and multi‑currency payments.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-2xl bg-pink-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/20 outline-none transition hover:scale-[1.02] hover:bg-pink-600 focus-visible:ring-2 focus-visible:ring-pink-400"
              >
                Book a demo
              </a>
              <a
                href="#docs"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30"
              >
                View docs
              </a>
            </div>

            {/* ===== Hero Image ===== */}
            <div className="relative mx-auto mt-16 max-w-4xl">
              <img 
                src="/images/herosectionimage.png" 
                alt="Global Platform for Work Payments" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* trust bar */}
            <div className="mx-auto mt-14 max-w-6xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-white/50">Trusted by modern teams</p>
              <div className="grid grid-cols-2 gap-4 opacity-80 sm:grid-cols-3 md:grid-cols-6">
                {[
                  "Acme Co",
                  "Globex",
                  "Umbrella",
                  "Initech",
                  "Soylent",
                  "Hooli",
                ].map((brand) => (
                  <div key={brand} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm text-white/70">{brand}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURE CARDS ===== */}
      <section className="bg-[#151516] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Employer of Record"
              icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" /></svg>}
              desc="Hire compliantly in 180+ countries without setting up local entities."
            />
            <FeatureCard
              title="Entity Management"
              icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
              desc="Incorporations, filings, tax IDs, and renewals—managed in one place."
            />
            <FeatureCard
              title="Gig Pay"
              icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
              desc="Fast payouts to contractors and couriers across wallets and banks."
            />
            <FeatureCard
              title="Global Work Payments"
              icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>}
              desc="Multi‑currency payroll and mass payouts with built‑in FX."
            />
          </div>
        </div>
      </section>

      {/* ===== AIO + DIFFERENT ===== */}
      <AllInOneSolution />
      <WhatMakesUsDifferent />
      
      {/* ===== PARTNER SECTION ===== */}
      <PartnerWithNativeTeams />
      
      {/* ===== GROWING TOGETHER CAROUSEL ===== */}
      <GrowingTogether />
      
      {/* ===== SMARTER WAY TO EMPLOY ===== */}
      <SmarterWayToEmploy />
      
      {/* ===== CUSTOMER TESTIMONIALS ===== */}
      <CustomerTestimonials />
      
      {/* ===== EXPERT SUPPORT ===== */}
      <ExpertSupport />
      
      {/* ===== PAYROLL MADE EASY ===== */}
      <PayrollMadeEasy />
      
      {/* ===== REVIEW RATING ===== */}
      <ReviewRating />
      
      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}

function FeatureCard({ title, icon, desc }: { title: string; icon: React.ReactNode; desc: string }) {
  return (
    <article
      className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 outline-none transition hover:border-pink-400/40 focus-within:border-pink-400/60"
      tabIndex={0}
      role="button"
      aria-label={title}
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/90">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_0_0_rgba(0,0,0,0)] transition group-hover:shadow-[0_20px_80px_-24px_rgba(236,72,153,0.35)]" />
    </article>
  );
}

