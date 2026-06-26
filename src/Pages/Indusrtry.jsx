const industries = [
  { icon: '⚙️', name: 'Manufacturing' },
  { icon: '🏗️', name: 'Construction' },
  { icon: '⛏️', name: 'Mining' },
  { icon: '🌾', name: 'Agriculture' },
  { icon: '🚛', name: 'Transportation' },
  { icon: '⚓', name: 'Marine' },
];
 
const TrustedBy = () => (
  <section className="bg-[#0a0a0a] py-24 px-6 border-t border-yellow-600/15">
    <div className="max-w-7xl mx-auto">
      <p className="text-yellow-500 text-xs font-bold tracking-[0.35em] uppercase text-center mb-3">
        Trusted by Industry
      </p>
      <h2 className="text-white text-center font-black text-3xl sm:text-4xl tracking-tight mb-14">
        Powering Every Sector
      </h2>
 
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {industries.map(({ icon, name }) => (
          <div key={name}
            className="bg-white/[0.03] border border-yellow-600/15 rounded-lg py-7 px-5 text-center
              hover:bg-yellow-500/8 hover:border-yellow-500/50 hover:-translate-y-1
              transition-all duration-200 cursor-default group">
            <div className="text-3xl mb-3">{icon}</div>
            <p className="text-gray-400 text-sm font-semibold group-hover:text-yellow-400 transition-colors">{name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy