import { Link } from 'react-router-dom';

export default function TradeTestCentrePromo() {
  return (
    <section className="bg-[#1a1c20] px-10 pb-[90px]">
      <div className="max-w-[1200px] mx-auto">
        <Link
          to="/trade-test-centre"
          className="group block bg-[#22252b] border border-white/8 border-t-[3px] border-t-[#c9a84c] p-[36px_32px] transition-transform duration-300 hover:-translate-y-1 no-underline"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="font-condensed text-[12px] font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-3">
                In Partnership With Linah Technikon College
              </div>
              <h3 className="font-display text-[1.6rem] text-white mb-2">
                Trade Test Centre
              </h3>
              <p className="text-[15px] text-[#888c96] leading-[1.8] max-w-[560px]">
                Get your Welder Occupational Certificate — ARPL, RPL, and 6-month
                training routes available at our Phalaborwa branch.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 font-condensed text-[13px] font-bold tracking-[0.12em] uppercase text-[#c9a84c] whitespace-nowrap group-hover:text-[#e2c375]">
              Learn More
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
