export default function Contact() {
  return (
    <section id="contact" className="bg-[#1a1c20] px-10 py-[90px]">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-condensed text-[12px] font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-3.5">
          Contact Us
        </div>
        <div className="w-14 h-[3px] bg-[#c9a84c] mb-7" />
        <h2
          className="font-display font-bold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-12">
          {/* Contact details */}
          <div>
            <h3 className="font-condensed text-[18px] font-bold tracking-[0.1em] uppercase text-[#c9a84c] mb-5">
              Contact Details
            </h3>

            <ContactBlock title="Head Office">
              <p className="text-[15px] text-[#d4d6da] leading-[1.7]">
                2nd Floor, Nelson Mandela Square<br />
                Maude Street West Tower, Sandton, 2146<br />
                <a href="tel:0100231997" className="hover:text-[#c9a84c] transition-colors">
                  Tel: 010 023 1997
                </a>{' '}
                |{' '}
                <a href="tel:0845417929" className="hover:text-[#c9a84c] transition-colors">
                  084 541 7929
                </a>
                <br />
                <a
                  href="mailto:info@mapcompany.co.za"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  info@mapcompany.co.za
                </a>
              </p>
            </ContactBlock>

            <ContactBlock title="Durban Branch">
              <p className="text-[15px] text-[#d4d6da] leading-[1.7]">
                Erf 10233 Monaco Drive<br />
                Hyde Park Coastal, Estate, 4480<br />
                <a href="tel:0320610500" className="hover:text-[#c9a84c] transition-colors">
                  Tel: 032 061 0500
                </a>{' '}
                |{' '}
                <a href="tel:0845417929" className="hover:text-[#c9a84c] transition-colors">
                  084 541 7929
                </a>
                <br />
                <a
                  href="mailto:durban@mapcompany.co.za"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  durban@mapcompany.co.za
                </a>
              </p>
            </ContactBlock>

            <ContactBlock title="Working Hours">
              <ul className="list-none text-[15px]">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map(({ day, hours }) => (
                  <li
                    key={day}
                    className="py-1 border-b border-[#2e3138] flex justify-between gap-4 last:border-none"
                  >
                    <span>{day}</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </ContactBlock>

            <ContactBlock title="Follow Us">
              <div className="flex gap-3.5 mt-2">
                <a
                  href="https://www.instagram.com/map.companymc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-[38px] h-[38px] flex items-center justify-center bg-[#2e3138] text-[#d4d6da] text-[15px] hover:bg-[#c9a84c] hover:text-[#111] transition-all"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </ContactBlock>
          </div>

          {/* Map */}
          <div className="h-[400px] overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Nelson+Mandela+Square+Sandton&t=m&z=15&output=embed&iwloc=near"
              allowFullScreen
              loading="lazy"
              title="Map Company Location"
              className="w-full h-full border-0"
              style={{ filter: 'grayscale(60%) invert(10%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBlock({ title, children }) {
  return (
    <div className="mb-7">
      <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#888c96] mb-2">
        {title}
      </h4>
      {children}
    </div>
  );
}
