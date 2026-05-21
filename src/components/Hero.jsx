

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center overflow-hidden px-10 py-20"
      style={{ background: '#0d0f12' }}
    >
      {/* Background image — replace ImagePlaceholder with <img> once you have the asset */}
      <div className="absolute inset-0 z-0">
        <img src="../public/Riversdale-one.jpg" alt="" className="w-full h-full object-cover opacity-35" />
        <div className="w-full h-full bg-[#22252b] opacity-60" />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(120deg, rgba(10,11,14,0.88) 0%, rgba(17,18,22,0.72) 55%, rgba(20,22,28,0.45) 100%)',
        }}
      />

      <div className="relative z-[3] max-w-[720px]">
        <div className="font-condensed text-[12px] font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-3.5">
          Recognized for Excellence, Year After Year
        </div>
        <h1
          className="font-display font-bold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
        >
          Designing Spaces That Inspire &amp; Endure
        </h1>
        <p className="text-[17px] text-[#888c96] max-w-[580px] mb-9 leading-[1.8]">
          We deliver world-class architectural, engineering, and project management
          solutions — transforming bold visions into timeless spaces where precision
          meets creativity.
        </p>
        <a
          href="#architectural"
          className="inline-block px-9 py-3.5 bg-[#c9a84c] text-[#111] font-condensed text-[14px] font-bold tracking-[0.12em] uppercase no-underline transition-all duration-200 hover:bg-[#e2c375] hover:-translate-y-0.5"
        >
          Explore Our Work
        </a>

        <div className="mt-14 flex gap-12 flex-wrap">
          {[
            { value: '13+', label: 'Years Experience' },
            { value: '93%', label: 'Success Rate' },
            { value: '40+', label: 'Professionals' },
          ].map(({ value, label }) => (
            <div key={label}>
              <strong className="block font-condensed text-[2.2rem] font-bold text-[#c9a84c] leading-none">
                {value}
              </strong>
              <span className="text-[13px] text-[#888c96] tracking-[0.06em] uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
