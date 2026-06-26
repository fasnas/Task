

import React from 'react'

const Home = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 overflow-hidden">
    {/* BG image */}
    <div className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')" }} />
    <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-yellow-900/20" />
 
    {/* Vertical accent line */}
    <div className="absolute left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-yellow-500/60 to-transparent hidden lg:block" />
 
    <div className="relative max-w-7xl mx-auto w-full pt-20">
      <div className="max-w-2xl">
        <p className="text-yellow-500 text-xs font-bold tracking-[0.35em] uppercase mb-5">
          Premium Lubricant Solutions
        </p>
 
        <h1 className="text-white font-black leading-[1.06] mb-6 text-5xl sm:text-6xl lg:text-7xl tracking-tight">
          Engineering{' '}
          <span className="text-yellow-500">Performance</span>
          <br />Built to Last
        </h1>
 
        <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
          From high-performance engine oils to heavy-duty industrial lubricants —
          MOTUL delivers precision protection engineered for the most demanding environments on earth.
        </p>
 
        <div className="flex flex-wrap gap-4">
          <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border-none">
            Explore Products
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent hover:border-yellow-500 hover:text-yellow-500 text-white font-semibold text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-sm border border-white/30 transition-all duration-200 cursor-pointer">
            Contact Us
          </button>
        </div>
 
        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-16">
          {[['60+', 'Years of Expertise'], ['150+', 'Countries'], ['2000+', 'Product References']].map(([n, l]) => (
            <div key={l}>
              <p className="text-yellow-500 text-3xl font-black m-0">{n}</p>
              <p className="text-white/40 text-xs tracking-[0.15em] uppercase mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Home