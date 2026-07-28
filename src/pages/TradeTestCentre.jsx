import { useEffect } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const PHALABORWA_TEL = { display: '015 023 0795', href: 'tel:0150230795' };
const PHALABORWA_CELL = { display: '076 082 5713', href: 'tel:0760825713' };
const WHATSAPP_HREF = 'https://wa.me/27760825713';

const CERT_FACTS = [
  { label: 'SAQA', value: '98766' },
  { label: 'NQF', value: 'Level 4' },
  { label: 'Issued By', value: 'QCTO' },
];

const ROUTES = [
  {
    title: 'ARPL',
    duration: '3 Days',
    requirements: [
      '3+ Years Welding Experience',
      'Grade 9 or Equivalent',
      'CV + Proof of Experience',
      'ID Copy',
    ],
    process: ['Assessment', 'Preparation', 'Trade Test'],
  },
  {
    title: 'RPL',
    duration: '3 Days',
    requirements: [
      '5+ Years Welding Experience',
      'Portfolio of Evidence',
      'References / Letters',
      'ID Copy',
    ],
    process: ['Assessment', 'Preparation', 'Trade Test'],
  },
  {
    title: '6 Months Programme',
    duration: '6 Months',
    requirements: [
      'Grade 10/12 Preferred',
      'ID Copy',
      'Passion to Learn',
    ],
    process: ['6 Months Training', 'Trade Test'],
  },
];

export default function TradeTestCentre() {
  useEffect(() => {
    document.title = 'Trade Test Centre | Map Company';

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) return;
      el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'content',
      'Get your Welder Red Seal at the Map Company Trade Test Centre in Phalaborwa, in partnership with Linah Technikon College. ARPL, RPL, and 6-month training routes available.');
    setMeta('link[rel="canonical"]', 'href', 'https://mapcompany.co.za/trade-test-centre');
    setMeta('meta[property="og:title"]', 'content', 'Trade Test Centre | Map Company');
    setMeta('meta[property="og:description"]', 'content',
      'Earn your Welder Occupational Certificate (SAQA 98766, NQF Level 4, QCTO issued) through the Map Company Trade Test Centre, in partnership with Linah Technikon College.');
    setMeta('meta[property="og:url"]', 'content', 'https://mapcompany.co.za/trade-test-centre');

    return () => {
      document.title = 'Map Company | Architectural, Engineering & Project Management';
    };
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section
        id="trade-test-centre-hero"
        className="relative min-h-[60vh] flex items-center overflow-hidden px-6 sm:px-10 py-20"
        style={{ background: '#0d0f12' }}
      >
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder
            src="Welding.png"
            alt="Welding trainee practicing at the Trade Test Centre"
            width={1600}
            height={900}
            aspectRatio="aspect-auto"
            className="w-full h-full opacity-100"
          />
          <div className="absolute inset-0 bg-[#22252b] opacity-60" />
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(120deg, rgba(10,11,14,0.88) 0%, rgba(17,18,22,0.72) 55%, rgba(20,22,28,0.45) 100%)',
          }}
        />

        <div className="relative z-[3] max-w-[720px]">
          <div className="font-condensed text-[12px] font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-3.5">
            In Partnership With Linah Technikon College
          </div>
          <h1
            className="font-display font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Get Your Welder Red Seal
          </h1>
          <p className="text-[17px] text-[#888c96] max-w-[580px] mb-9 leading-[1.8]">
            The Map Company Trade Test Centre prepares welders, electricians, solar PV
            installers, boilermakers, and millwrights for their trade test — with a clear,
            supported route from experience or training to a recognised Occupational
            Certificate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHALABORWA_TEL.href}
              className="inline-flex items-center justify-center gap-2 px-9 py-3.5 bg-[#c9a84c] text-[#111] font-condensed text-[14px] font-bold tracking-[0.12em] uppercase no-underline transition-all duration-200 hover:bg-[#e2c375] hover:-translate-y-0.5"
            >
              <i className="fa fa-phone" aria-hidden="true" />
              Call Now
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-9 py-3.5 border border-[#c9a84c] text-[#c9a84c] font-condensed text-[14px] font-bold tracking-[0.12em] uppercase no-underline transition-all duration-200 hover:bg-[#c9a84c] hover:text-[#111] hover:-translate-y-0.5"
            >
              <i className="fab fa-whatsapp" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Occupational Certificate ── */}
      <section id="trade-test-centre" className="bg-[#1a1c20] px-6 sm:px-10 py-[90px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-condensed text-[12px] font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-3.5">
            Occupational Certificate
          </div>
          <div className="w-14 h-[3px] bg-[#c9a84c] mb-7" />
          <h2
            className="font-display font-bold text-white leading-tight mb-8"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
          >
            Welder Occupational Certificate
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[18px]">
            {CERT_FACTS.map(({ label, value }) => (
              <article
                key={label}
                className="bg-[#22252b] border border-white/8 border-t-[3px] border-t-[#c9a84c] p-[28px_26px] text-center"
              >
                <h3 className="font-condensed text-[13px] font-bold tracking-[0.14em] uppercase text-[#888c96] mb-2">
                  {label}
                </h3>
                <p className="font-display text-[1.6rem] text-white">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Choose Your Route ── */}
      <section id="trade-test-routes" className="bg-[#111214] px-6 sm:px-10 py-[90px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-condensed text-[12px] font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-3.5">
            Get Started
          </div>
          <div className="w-14 h-[3px] bg-[#c9a84c] mb-7" />
          <h2
            className="font-display font-bold text-white leading-tight mb-12"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Choose Your Route
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {ROUTES.map(({ title, duration, requirements, process }) => (
              <article
                key={title}
                className="bg-[#22252b] border border-white/8 border-t-[3px] border-t-[#c9a84c] p-[28px_26px] flex flex-col"
              >
                <h3 className="font-display text-[1.35rem] text-white mb-1">{title}</h3>
                <p className="font-condensed text-[13px] font-bold tracking-[0.1em] uppercase text-[#c9a84c] mb-5">
                  {duration}
                </p>

                <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#888c96] mb-2.5">
                  Requirements
                </h4>
                <ul className="pl-[18px] space-y-1.5 mb-6 list-disc marker:text-[#c9a84c]">
                  {requirements.map((req) => (
                    <li key={req} className="text-[14px] text-[#888c96] leading-[1.7]">
                      {req}
                    </li>
                  ))}
                </ul>

                <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#888c96] mb-2.5 mt-auto">
                  Process
                </h4>
                <ol className="flex flex-wrap gap-2">
                  {process.map((step, i) => (
                    <li
                      key={step}
                      className="text-[13px] text-[#d4d6da] bg-[#2e3138] px-3 py-1.5"
                    >
                      {i + 1}. {step}
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section
        id="trade-test-centre-cta"
        className="bg-[#1a1c20] px-6 sm:px-10 py-[90px]"
      >
        <div className="max-w-[800px] mx-auto text-center py-12 px-8 bg-[#2e3138] border-t-[3px] border-[#c9a84c]">
          <h3 className="font-display text-[1.7rem] text-white mb-4">
            Ready to Get Your Red Seal?
          </h3>
          <p className="text-[15px] text-[#888c96] leading-[1.8] mb-8">
            Speak to our Phalaborwa Trade Test Centre team about which route fits your
            experience and start your assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={PHALABORWA_TEL.href}
              className="inline-flex items-center justify-center gap-2 px-9 py-3.5 bg-[#c9a84c] text-[#111] font-condensed text-[14px] font-bold tracking-[0.12em] uppercase no-underline transition-all duration-200 hover:bg-[#e2c375] hover:-translate-y-0.5"
            >
              <i className="fa fa-phone" aria-hidden="true" />
              Call {PHALABORWA_TEL.display}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-9 py-3.5 border border-[#c9a84c] text-[#c9a84c] font-condensed text-[14px] font-bold tracking-[0.12em] uppercase no-underline transition-all duration-200 hover:bg-[#c9a84c] hover:text-[#111] hover:-translate-y-0.5"
            >
              <i className="fab fa-whatsapp" aria-hidden="true" />
              WhatsApp {PHALABORWA_CELL.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
