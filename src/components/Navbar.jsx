import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Company', href: '#company-profile' },
  { label: 'Architectural', href: '#architectural' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Project Management', href: '#project-management' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <nav className="bg-white border-b border-[#2a2c30] px-10 flex items-center justify-between sticky top-0 z-[1000] h-[72px]">
        <a href="#home">
          <img src="MAP-COMPANY-LOGO.png" alt="Map Company Logo" className="h-[52px] object-contain" /> 
        </a>

        <ul className="hidden lg:flex gap-1 list-none">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`block px-[18px] py-2 text-[13px] font-medium tracking-[0.04em] uppercase border-b-2 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#c9a84c] border-[#c9a84c]'
                      : 'text-[#1a1c20] border-transparent hover:text-[#c9a84c] hover:border-[#c9a84c]'
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] bg-transparent border-none cursor-pointer z-[1100] relative"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[26px] h-[2px] bg-[#1a1c20] rounded-sm transition-all duration-400 origin-center ${
              menuOpen ? 'translate-y-[7px] rotate-45 !bg-[#c9a84c]' : ''
            }`}
          />
          <span
            className={`block w-[26px] h-[2px] bg-[#1a1c20] rounded-sm transition-all duration-300 ${
              menuOpen ? 'opacity-0 w-0' : ''
            }`}
          />
          <span
            className={`block w-[26px] h-[2px] bg-[#1a1c20] rounded-sm transition-all duration-400 origin-center ${
              menuOpen ? '-translate-y-[7px] -rotate-45 !bg-[#c9a84c]' : ''
            }`}
          />
        </button>
      </nav>

      {/* ── Overlay ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/65 backdrop-blur-sm z-[1040] lg:hidden"
          onClick={close}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed top-0 right-0 w-[min(340px,90vw)] h-dvh bg-[#22252b] z-[1050] flex flex-col shadow-2xl transition-transform duration-[450ms] ease-in-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-[#2a2c30]">
          <img src="MAP-COMPANY-LOGO.png" alt="Map Company Logo" className="h-[52px] object-contain" /> 
          <button
            onClick={close}
            className="text-[#888c96] text-[22px] cursor-pointer bg-transparent border-none hover:text-[#c9a84c] transition-colors"
            aria-label="Close menu"
          >
            <i className="fa fa-times" />
          </button>
        </div>

        {/* Links */}
        <ul className="list-none flex-1 py-4 overflow-y-auto">
          {NAV_LINKS.map(({ label, href }, i) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li
                key={href}
                className="border-b border-[#1e2025]"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(24px)',
                  transition: `opacity 0.35s ease ${0.08 + i * 0.06}s, transform 0.35s ease ${0.08 + i * 0.06}s`,
                }}
              >
                <a
                  href={href}
                  onClick={close}
                  className={`flex items-center justify-between px-7 py-[18px] font-condensed text-[18px] font-semibold tracking-[0.1em] uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-[#c9a84c] pl-9 bg-[#c9a84c]/7 border-l-[3px] border-[#c9a84c]'
                      : 'text-[#d4d6da] hover:text-[#c9a84c] hover:pl-9'
                  }`}
                >
                  {label}
                  <span className="text-[#c9a84c] text-sm">→</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Footer */}
        <div className="px-7 py-7 border-t border-[#2a2c30]">
          <p className="text-[13px] text-[#888c96] mb-1.5">
            <i className="fa fa-phone text-[#c9a84c] mr-2" /> +27 10 023 1997
          </p>
          <a
            href="mailto:info@mapcompany.co.za"
            className="text-[13px] text-[#888c96] hover:text-[#c9a84c] transition-colors block mb-1"
          >
            <i className="fa fa-envelope text-[#c9a84c] mr-2" />
            info@mapcompany.co.za
          </a>
          <div className="flex gap-2.5 mt-5">
            <a
              href="https://www.instagram.com/map.companymc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-[#2e3138] text-[#d4d6da] text-sm hover:bg-[#c9a84c] hover:text-[#111] transition-all rounded-sm"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
