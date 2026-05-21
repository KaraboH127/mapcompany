const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Company', href: '#company-profile' },
  { label: 'Architectural', href: '#architectural' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Project Management', href: '#project-management' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#111214] border-t border-[#2a2c30] px-10 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_2fr] gap-12 mb-12">

        {/* About */}
        <div>
          <img src="../public/MAP-COMPANY-LOGO.png" alt="Map Company" className="h-11 object-contain mb-5 bg-white p-1" />
          <p className="text-[14px] text-[#888c96] leading-[1.8]">
            A trusted leader in architectural design, engineering, and project management —
            delivering innovative, precision-crafted solutions with excellence and integrity.
          </p>
        </div>

        {/* Nav links */}
        <div>
          <h4 className="font-condensed text-[14px] font-bold tracking-[0.14em] uppercase text-white mb-[18px]">
            Company
          </h4>
          <ul className="list-none space-y-2.5">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[#888c96] text-[14px] no-underline hover:text-[#c9a84c] transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-condensed text-[14px] font-bold tracking-[0.14em] uppercase text-white mb-[18px]">
            Contact
          </h4>
          <p className="text-[14px] text-[#888c96] leading-[1.8]">
            <strong className="text-[#c9a84c]">Head Office</strong>
            <br />
            Tel: 010 023 1997 | Cell: 084 541 7929
            <br />
            2nd Floor, Nelson Mandela Square,
            <br />
            Maude Street West Tower, Sandton, 2146
            <br />
            <a
              href="mailto:info@mapcompany.co.za"
              className="text-[#888c96] no-underline hover:text-[#c9a84c] transition-colors"
            >
              info@mapcompany.co.za
            </a>
            <br />
            <br />
            <strong className="text-[#c9a84c]">Durban Branch</strong>
            <br />
            Erf 10233 Monaco Drive, Hyde Park Coastal, 4480
            <br />
            Tel: 032 061 0500 | 084 541 7929
            <br />
            <a
              href="mailto:durban@mapcompany.co.za"
              className="text-[#888c96] no-underline hover:text-[#c9a84c] transition-colors"
            >
              durban@mapcompany.co.za
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto border-t border-[#2a2c30] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-[#888c96]">
        <span>Copyright &copy; 2026 All Rights Reserved — Map Company</span>
        <span>Built with precision &amp; care</span>
      </div>
    </footer>
  );
}
