const CARDS = [
  {
    icon: 'fa fa-award',
    title: 'Excellent Track Record',
    text: 'Our team has built a reputation for delivering architectural, engineering, and project management work with consistent quality, strong timelines, and dependable execution.',
  },
  {
    icon: 'fa fa-file-invoice-dollar',
    title: 'Transparent Fees',
    text: 'Clients receive clear quotations, practical scope guidance, and honest cost discussions so decisions can be made with full visibility before work begins.',
  },
  {
    icon: 'fa fa-headset',
    title: 'Unparalleled Customer Service',
    text: 'From planning through completion, we keep communication open, responsive, and useful so clients always know what is happening and what comes next.',
  },
];

const STATS = [
  { value: '13+', label: 'Years Experience' },
  { value: '93%', label: 'Successful Projects' },
  { value: '40+', label: 'Professional Team' },
  { value: '50k+', label: 'Client Consultations' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-[#111214] relative overflow-hidden px-10 py-[90px]">
      {/* Background image overlay */}
      {/* TODO: replace the div below with a real background image:
          style={{ backgroundImage: "url('/images/project-management.jpg')" }}
          and add bg-cover bg-center classes */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(90deg, #111214 0%, #111214 58%, rgba(17,18,20,0.72) 100%)',
        }}
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1fr)] gap-14 items-end mb-11">
          <div>
            <div className="font-condensed text-[12px] font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-3.5">
              Professional and Experienced Company
            </div>
            <div className="w-14 h-[3px] bg-[#c9a84c] mb-7" />
            <h2
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Why Choose Our Firm
            </h2>
          </div>
          <p className="text-[#888c96] text-[16px] leading-[1.8] max-w-[560px]">
            We combine disciplined project delivery, clear cost communication, and attentive
            client service so every build moves forward with confidence from first brief to
            final handover.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {CARDS.map(({ icon, title, text }) => (
            <article
              key={title}
              className="min-h-[250px] p-8 bg-[#22252b]/88 border border-[#c9a84c]/16 border-t-[3px] border-t-[#c9a84c] transition-all duration-250 hover:-translate-y-1 hover:border-[#c9a84c]/42 hover:bg-[#2e3138]/94"
            >
              <div className="w-[52px] h-[52px] flex items-center justify-center bg-[#c9a84c]/12 text-[#c9a84c] text-[21px] mb-6">
                <i className={icon} />
              </div>
              <h3 className="font-display text-[1.35rem] text-white mb-3">{title}</h3>
              <p className="text-[15px] text-[#888c96] leading-[1.8]">{text}</p>
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-7 grid grid-cols-2 md:grid-cols-4 bg-[#1a1c20]/90 border border-white/8">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className={`py-6 px-6 ${i < STATS.length - 1 ? 'border-r border-white/8' : ''}`}
            >
              <strong
                className="block font-condensed font-bold text-[#c9a84c] leading-none mb-2"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.7rem)' }}
              >
                {value}
              </strong>
              <span className="block text-[12px] font-semibold tracking-[0.1em] uppercase text-[#888c96]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
