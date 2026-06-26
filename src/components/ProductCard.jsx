import React from 'react'

const ProductCard = ({ name, img, desc, eyebrow, category, btnColor, borderHover }) => (
  <div className={`bg-white/[0.03] border border-white/[0.07] rounded-lg overflow-hidden
    hover:-translate-y-1 hover:bg-white/[0.055] transition-all duration-200 ${borderHover}`}>
    <div className="relative h-44 overflow-hidden">
      <img src={img} alt={name} className="w-full h-full object-cover brightness-75 saturate-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-5">
      <p className={`text-[10px] font-bold tracking-[0.25em] uppercase mb-2 ${eyebrow}`}>{category}</p>
      <h4 className="text-white text-base font-bold mb-2">{name}</h4>
      <p className="text-white/45 text-sm leading-relaxed mb-4">{desc}</p>
      <button className={`text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-sm border transition-all duration-200 cursor-pointer bg-transparent ${btnColor}`}>
        Learn More →
      </button>
    </div>
  </div>
);


export default ProductCard