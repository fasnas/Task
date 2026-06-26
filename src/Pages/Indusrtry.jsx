import React from "react";
import { industries } from "../components/Industry";

const TrustedBy = () => (
  <section className="bg-[#0a0a0a] py-24 px-6 border-t border-yellow-600/15 overflow-hidden relative">

    {/* Subtle background grid */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(#eab308 1px, transparent 1px), linear-gradient(90deg, #eab308 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />

    <div className="max-w-7xl mx-auto relative">

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-yellow-500/60" />
          <p className="text-yellow-500 text-xs font-bold tracking-[0.35em] uppercase">
            Trusted by Industry
          </p>
          <div className="w-8 h-px bg-yellow-500/60" />
        </div>
        <h2 className="text-white font-black text-4xl sm:text-5xl tracking-tight mb-4">
          Powering Every Sector
        </h2>
        <p className="text-white/40 text-base max-w-md mx-auto leading-relaxed">
          From field to factory floor — MOTUL lubricants keep the world's most critical operations running.
        </p>
      </div>

      {/* Global stat strip */}
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-px bg-yellow-600/10 rounded-xl overflow-hidden mb-12 border border-yellow-600/10">
        {[
          { n: '150+', l: 'Countries' },
          { n: '1,000+', l: 'Industry Partners' },
          { n: '60 Yrs', l: 'Proven Excellence' },
        ].map(({ n, l }) => (
          <div key={l} className="bg-[#0f0f0f] py-6 text-center">
            <p className="text-yellow-500 text-2xl sm:text-3xl font-black tracking-tight">{n}</p>
            <p className="text-white/35 text-xs tracking-[0.15em] uppercase mt-1 font-semibold">{l}</p>
          </div>
        ))}
      </div>

      {/* Industry cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {industries.map(({ icon, name, stat, label }) => (
          <div
            key={name}
            className="group relative bg-[#0f0f0f] border border-white/[0.06] rounded-xl p-5
              hover:border-yellow-500/40 hover:bg-[#141414] hover:-translate-y-1.5
              transition-all duration-300 cursor-default overflow-hidden"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-500/0
              group-hover:border-yellow-500/60 transition-all duration-300 rounded-tr-xl" />

            {/* Icon */}
            <div className="text-white/30 group-hover:text-yellow-500 transition-colors duration-300 mb-4">
              {icon}
            </div>

            {/* Name */}
            <p className="text-white/70 group-hover:text-white text-sm font-bold mb-2 transition-colors leading-tight">
              {name}
            </p>

            {/* Stat */}
            <p className="text-yellow-500/0 group-hover:text-yellow-500 text-lg font-black
              transition-all duration-300 leading-none">
              {stat}
            </p>
            <p className="text-white/0 group-hover:text-white/35 text-[10px] tracking-wide uppercase
              transition-all duration-300 mt-0.5 font-semibold">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;