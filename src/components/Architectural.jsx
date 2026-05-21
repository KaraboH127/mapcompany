import ProjectItem from './ProjectItem';

const PROJECTS = [
  {
    title: 'Riversdale House',
    description:
      'A perfect blend of modern design and lasting quality. Built to create comfort, style, and peace of mind.',
    images: [
      { src: 'Riversdale-one.jpg', alt: 'Riversdale House exterior view 1' },
      { src: 'Riversdale-two (1).jpg', alt: 'Riversdale House interior view 2' },
    ],
  },
  {
    title: 'Student Accommodation',
    description:
      'A perfect blend of modern design and lasting quality. Built to create comfort, style, and peace of mind.',
    images: [
      { src: 'Student-1.jpg', alt: 'Student Accommodation view 1' },
      { src: 'student-2.jpg', alt: 'Student Accommodation view 2' },
    ],
  },
  {
    title: 'Farm House',
    description:
      'A perfect blend of modern design and lasting quality. Built to create comfort, style, and peace of mind.',
    images: [
      { src: 'Farm-house-1.jpg', alt: 'Farm House exterior view 1' },
      { src: 'Farm-house-2.jpg', alt: 'Farm House interior view 2' },
    ],
  },
];

const CREDENTIAL_PANELS = [
  {
    title: 'Core Services',
    list: [
      'Architectural design and supervision for Commercial, Industrial, Hotels, Resorts, Shopping Centres, Housing, and New Developments.',
      'Warehousing and time management or contract development.',
      'Design oversight from concept to completion.',
    ],
  },
  {
    title: 'Who We Serve',
    text: 'Clients needing full architectural design, documentation, and site supervision across commercial, residential, and hospitality projects.',
  },
  {
    title: 'Lead Professional',
    content: (
      <>
        <p className="text-[15px] text-[#888c96] leading-[1.8]">
          <strong className="text-white">Mr. S.N Sepeng</strong> – 14+ years experience in design and supervision.
        </p>
        <ul className="list-none mt-3">
          {['SACAP Registration: Pr Arch No. 28058175', 'MSAICE Registration: Pr No. 202000933'].map(
            (item) => (
              <li
                key={item}
                className="relative pl-[18px] py-2 border-b border-white/8 text-[15px] text-[#888c96] last:border-b-0 before:content-[''] before:w-[7px] before:h-[7px] before:bg-[#c9a84c] before:absolute before:left-0 before:top-[18px]"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </>
    ),
  },
];

export default function Architectural() {
  return (
    <section id="architectural" className="bg-[#1a1c20] px-10 py-[90px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-condensed text-[12px] font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-3.5">
          Architectural Division
        </div>
        <div className="w-14 h-[3px] bg-[#c9a84c] mb-7" />
        <h2
          className="font-display font-bold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Our Architectural Projects
        </h2>
        <p className="max-w-[680px] text-[#888c96] text-[16px] leading-[1.8] mb-11">
          A showcase of our finest residential and commercial architectural work — each
          project a testament to craftsmanship and vision.
        </p>

        {/* Detail panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mb-14">
          {CREDENTIAL_PANELS.map(({ title, list, text, content }) => (
            <article
              key={title}
              className="bg-[#22252b] border border-white/8 border-t-[3px] border-t-[#c9a84c] p-[28px_26px]"
            >
              <h3 className="font-display text-[1.35rem] text-white mb-3">{title}</h3>
              {list && (
                <ul className="pl-[18px] space-y-2">
                  {list.map((li) => (
                    <li key={li} className="text-[15px] text-[#888c96] leading-[1.8]">
                      {li}
                    </li>
                  ))}
                </ul>
              )}
              {text && <p className="text-[15px] text-[#888c96] leading-[1.8]">{text}</p>}
              {content}
            </article>
          ))}
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-16">
          {PROJECTS.map((project, i) => (
            <ProjectItem
              key={project.title}
              num={i + 1}
              title={project.title}
              description={project.description}
              images={project.images}
              flip={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
