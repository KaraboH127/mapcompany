export default function Topbar() {
  return (
    <div className="bg-[#1a1c20] border-b border-[#2a2c30] px-10 py-2 flex items-center justify-between text-[10px] text-[#888c96]">
      <div className="flex gap-6 items-center">
        <a
          href="tel:+27100231997"
          className="hover:text-[#c9a84c] transition-colors flex items-center gap-1.5"
        >
          <i className="fa fa-phone text-[#c9a84c]" />
          +27 10 023 1997
        </a>
        <a
          href="mailto:info@mapcompany.co.za"
          className="hover:text-[#c9a84c] transition-colors flex items-center gap-1.5"
        >
          <i className="fa fa-envelope text-[#c9a84c]" />
          info@mapcompany.co.za
        </a>
      </div>
      <div className="flex gap-3.5">
        <a
          href="https://www.instagram.com/map.companymc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-[14px] hover:text-[#c9a84c] transition-colors"
        >
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  );
}
