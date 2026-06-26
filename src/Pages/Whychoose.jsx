import React from "react";

const reasons = [
  { icon: '🔬', title: 'R&D Driven Formulation', desc: 'Every product is developed in our ISO-certified labs using cutting-edge tribology research.' },
  { icon: '🏆', title: 'Motorsport Proven', desc: 'Tested and validated in the harshest racing environments — from MotoGP to endurance racing.' },
  { icon: '🌍', title: 'Global Standards', desc: 'API, ACEA, OEM-approvals across 2000+ product references meeting international specifications.' },
  { icon: '⏱️', title: 'Extended Drain Intervals', desc: 'Our synthetic base stocks last longer, reducing downtime and total cost of ownership.' },
  { icon: '🌱', title: 'Eco-Responsible', desc: 'Bio-degradable formulations and recyclable packaging aligned with ISO 14001 practices.' },
  { icon: '🤝', title: 'Expert Technical Support', desc: 'Dedicated lubricant engineers available to specify the right product for your application.' },
];
 
const WhyChooseUs = () => (
  <section id="why" className="bg-[#080808] py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <p className="text-yellow-500 text-xs font-bold tracking-[0.35em] uppercase text-center mb-3">
        Our Advantage
      </p>
      <h2 className="text-white text-center font-black text-3xl sm:text-4xl tracking-tight mb-4">
        Why Choose MOTUL?
      </h2>
      <p className="text-white/40 text-center text-base max-w-md mx-auto mb-14 leading-relaxed">
        Six decades of innovation, one commitment — uncompromising performance.
      </p>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
        {reasons.map(({ icon, title, desc }) => (
          <div key={title}
            className="bg-[#080808] p-9 hover:bg-yellow-500/[0.05] hover:border-yellow-500/25
              border border-transparent transition-all duration-200 group">
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="text-white text-base font-bold mb-2.5 group-hover:text-yellow-400 transition-colors">{title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs