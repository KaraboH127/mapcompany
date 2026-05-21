export default function CompanyProfile() {
  return (
    <section id="company-profile" className="bg-[#111214] px-10 py-[90px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(280px,0.8fr)_1fr] gap-12 items-stretch">

        {/* Identity card */}
        <div className="bg-[#22252b] border border-white/8 border-t-[3px] border-t-[#c9a84c] p-[34px_30px] flex flex-col justify-center">
          <div className="font-condensed text-[12px] font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-3.5">
            Company Profile
          </div>
          <h2
            className="font-display font-bold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)' }}
          >
            Maputuke Architects and Projects Pty Ltd
          </h2>
          <p className="text-[#888c96] text-[15px] leading-[1.8]">
            Trading as Map Company, we deliver integrated architectural, engineering,
            and project management services across South Africa.
          </p>
          <div className="mt-6 pt-5 border-t border-white/8 font-condensed text-[14px] font-bold tracking-[0.1em] uppercase text-[#c9a84c]">
            Company Reg: 2013/112082/07
          </div>
        </div>

        {/* Mission / Vision cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
          {[
            {
              title: 'Our Mission',
              text: 'To create and deliver the best in Architectural and Engineering, ensuring our clients are impressed at all times.',
            },
            {
              title: 'Our Vision',
              text: 'To be the Architectural and Engineering Company of choice in South Africa, educating, mentoring, and employing youth regularly.',
            },
          ].map(({ title, text }) => (
            <article
              key={title}
              className="bg-[#22252b] border border-white/8 border-t-[3px] border-t-[#c9a84c] p-[30px_28px]"
            >
              <h3 className="font-display text-[1.35rem] text-white mb-3">{title}</h3>
              <p className="text-[15px] text-[#888c96] leading-[1.8]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
