import React from "react";

const Footer = () => (
  <footer className="bg-[#050505] border-t border-yellow-600/10 px-6 pt-14 pb-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
 
        {/* Brand */}
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 bg-yellow-500 rounded flex items-center justify-center">
              <span className="text-black font-black text-xs">M</span>
            </div>
            <span className="text-white font-black text-lg tracking-[0.2em]">MOTUL</span>
          </div>
          <p className="text-white/30 text-sm leading-relaxed">
            Premium lubricants engineered for automotive, industrial and marine applications worldwide since 1953.
          </p>
        </div>
 
        {[
          { heading: 'Products', items: ['Engine Oil', 'Transmission Oil', 'Hydraulic Oil', 'Compressor Oil', 'Greases'] },
          { heading: 'Industries', items: ['Automotive', 'Manufacturing', 'Construction', 'Marine', 'Agriculture'] },
          { heading: 'Company', items: ['About MOTUL', 'Technical Support', 'Find a Distributor', 'Careers', 'Press'] },
        ].map(({ heading, items }) => (
          <div key={heading}>
            <p className="text-yellow-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">{heading}</p>
            {items.map(item => (
              <p key={item}
                className="text-white/30 hover:text-yellow-500 text-sm mb-2 cursor-pointer transition-colors duration-200">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
 
      {/* Bottom */}
      <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-xs">© {new Date().getFullYear()} MOTUL. All rights reserved.</p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(l => (
            <span key={l}
              className="text-white/20 hover:text-yellow-500 text-xs cursor-pointer transition-colors duration-200">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer