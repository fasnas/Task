import React from "react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);
 
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
 
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', company: '', message: '' });
  };
 
  const inputCls = `w-full bg-white/[0.04] border border-white/10 text-white text-sm
    px-4 py-3 rounded focus:outline-none focus:border-yellow-500
    placeholder:text-white/25 transition-colors duration-200 font-[inherit]`;
 
  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 px-6 border-t border-yellow-600/15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
 
        {/* Left info */}
        <div>
          <p className="text-yellow-500 text-xs font-bold tracking-[0.35em] uppercase mb-3">Get in Touch</p>
          <h2 className="text-white font-black text-3xl sm:text-4xl tracking-tight mb-5">
            Let's Find the Right<br />Lubricant for You
          </h2>
          <p className="text-white/45 text-base leading-relaxed mb-10">
            Whether you're protecting a single engine or sourcing lubricants for an entire fleet —
            our technical team is ready to help.
          </p>
 
          {[
            ['📍', 'Headquarters', 'MOTUL S.A., Aubervilliers, France'],
            ['📞', 'Phone', '+33 1 41 55 22 00'],
            ['✉️', 'Email', 'info@motul.com'],
          ].map(([icon, label, val]) => (
            <div key={label} className="flex gap-4 mb-6">
              <span className="text-lg mt-0.5">{icon}</span>
              <div>
                <p className="text-yellow-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">{label}</p>
                <p className="text-white/55 text-sm">{val}</p>
              </div>
            </div>
          ))}
        </div>
 
        {/* Form */}
        <div>
          {sent && (
            <div className="bg-green-500/10 border border-green-500/30 rounded px-5 py-3.5 mb-6 text-green-400 text-sm">
              ✓ Message sent — we'll be in touch within 24 hours.
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/35 text-[10px] font-bold tracking-[0.15em] uppercase mb-2">Name *</label>
                <input name="name" value={form.name} onChange={handleChange} required
                  placeholder="Your name" className={inputCls} />
              </div>
              <div>
                <label className="block text-white/35 text-[10px] font-bold tracking-[0.15em] uppercase mb-2">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required
                  placeholder="your@email.com" className={inputCls} />
              </div>
            </div>
            <div>
              <label className="block text-white/35 text-[10px] font-bold tracking-[0.15em] uppercase mb-2">Company</label>
              <input name="company" value={form.company} onChange={handleChange}
                placeholder="Your company name" className={inputCls} />
            </div>
            <div>
              <label className="block text-white/35 text-[10px] font-bold tracking-[0.15em] uppercase mb-2">Message *</label>
              <textarea name="message" value={form.message} onChange={handleChange} required
                rows={5} placeholder="Tell us about your requirements..."
                className={`${inputCls} resize-y`} />
            </div>
            <button type="submit"
              className="self-start bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-sm transition-colors duration-200 cursor-pointer border-none">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact