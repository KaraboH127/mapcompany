import ImagePlaceholder from './ImagePlaceholder';

// ── Gallery placeholder slots (replace src with real image paths) ──
const GALLERY_IMAGES = [
  { src: 'project-gallery(1).jpg', alt: 'Project gallery 1' },
  { src: 'project-gallery(2).jpg', alt: 'Project gallery 2' },
  { src: 'project-gallery(3).jpg', alt: 'Project gallery 3' },
  { src: 'project-gallery(4).jpg', alt: 'Project gallery 4' },
  { src: 'project-gallery(5).jpg', alt: 'Project gallery 5' },
  { src: 'project-gallery(6).jpg', alt: 'Project gallery 6' },
];

const ACCREDITATIONS = [
  'CIDB Map Company: GB 6, CE 6',
  'National Treasury CSD Supplier No: MAAA0486796',
  'South African Institute of Occupational Safety and Health Reg No: 50425449',
  'Compensation for Occupational Injuries and Diseases: 990001020712',
  'South African Council for the Architectural Profession',
  'South African Glass and Glazing Association',
];

export default function ProjectManagement() {
  return (
    <section id="project-management" className="bg-[#1a1c20] px-10 py-[90px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-condensed text-[12px] font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-3.5">
          Project Management Division
        </div>
        <div className="w-14 h-[3px] bg-[#c9a84c] mb-7" />
        <h2
          className="font-display font-bold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Project Management
        </h2>

        {/* Intro grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-14">
          {/* Project management photo */}
          <div className="overflow-hidden">
            <img
              src="project-management.jpg"
              alt="Project management team coordinating delivery on a project site"
              width="800"
              height="400"
              loading="lazy"
              decoding="async"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <p className="text-[#888c96] text-[16px] leading-[1.8]">
              Our project management department ensures every stage of your project is
              executed with precision, efficiency, and accountability. From planning to
              delivery, we provide the structure, strategy, and oversight needed to meet
              deadlines, control costs, and exceed expectations.
            </p>
            <p className="text-[15px] text-[#888c96] mt-4 leading-[1.8]">
              With our expertise, you gain peace of mind knowing your project is in
              capable hands.
            </p>
          </div>
        </div>

        {/* Detail panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mb-14">
          <article className="bg-[#22252b] border border-white/8 border-t-[3px] border-t-[#c9a84c] p-[28px_26px]">
            <h3 className="font-display text-[1.35rem] text-white mb-3">Core Services</h3>
            <ul className="pl-[18px] space-y-2">
              {[
                'Project and resource planning.',
                'Time management and contract administration procedures.',
                'Cost control and management.',
                'Project control services.',
                'Labour intensive construction methods.',
                'Project supervision and monitoring.',
              ].map((li) => (
                <li key={li} className="text-[15px] text-[#888c96] leading-[1.8]">
                  {li}
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-[#22252b] border border-white/8 border-t-[3px] border-t-[#c9a84c] p-[28px_26px]">
            <h3 className="font-display text-[1.35rem] text-white mb-3">Delivery Strength</h3>
            <p className="text-[15px] text-[#888c96] leading-[1.8]">
              We employ Architects, Civil and Structural Engineers, Quantity Surveyors,
              Plumbers, Electricians, Builders, and Project Managers.
            </p>
            <p className="text-[15px] text-[#888c96] mt-3 leading-[1.8]">
              <strong className="text-white">150+ people</strong> are on site across active
              projects.
            </p>
          </article>

          <article className="bg-[#22252b] border border-white/8 border-t-[3px] border-t-[#c9a84c] p-[28px_26px]">
            <h3 className="font-display text-[1.35rem] text-white mb-3">
              Accreditations &amp; Associations
            </h3>
            <ul className="list-none">
              {ACCREDITATIONS.map((item) => (
                <li
                  key={item}
                  className="relative pl-[18px] py-2 border-b border-white/8 text-[15px] text-[#888c96] last:border-b-0 before:content-[''] before:w-[7px] before:h-[7px] before:bg-[#c9a84c] before:absolute before:left-0 before:top-[18px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Gallery */}
        <h3 className="font-display text-[1.5rem] text-white mb-6">Projects Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 mb-12">
          {GALLERY_IMAGES.map((img) => (
            <div key={img.alt} className="overflow-hidden">
              {/* TODO: replace ImagePlaceholder with <img src={img.src} alt={img.alt} className="w-full aspect-[4/3] object-cover transition-transform duration-400 hover:scale-[1.04]" /> */}
              <ImagePlaceholder
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                aspectRatio="aspect-[4/3]"
                className="transition-transform duration-400 hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>

        {/* Future statement */}
        <div className="max-w-[800px] mx-auto text-center py-12 px-8 bg-[#2e3138] border-t-[3px] border-[#c9a84c]">
          <h3 className="font-display text-[1.7rem] text-white mb-4">
            Innovating for the Future
          </h3>
          <p className="text-[15px] text-[#888c96] leading-[1.8]">
            Our project management approach is not only about meeting today's demands but also
            about preparing for tomorrow's challenges. By integrating the latest technology,
            sustainable practices, and global standards, we ensure that every project adds
            lasting value. We believe true success lies in building projects that stand the
            test of time — through collaboration, innovation, and meticulous planning.
          </p>
        </div>
      </div>
    </section>
  );
}
