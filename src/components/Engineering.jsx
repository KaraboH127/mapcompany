import ProjectItem from './ProjectItem';

const PROJECTS = [
  {
    title: 'Pipeline One',
    description: 'A structural engineering project we delivered with precision and quality.',
    images: [
      { src: 'Pipe-one.jpg', alt: 'Pipeline One view 1' },
      { src: 'pipe-one(2).jpg', alt: 'Pipeline One view 2' },
    ],
  },
  {
    title: 'Pipeline Two',
    description: 'A pipeline project successfully completed by our engineering team.',
    images: [
      { src: 'pipe-two(1).jpg', alt: 'Pipeline Two view 1' },
      { src: 'pipe-two(2).jpg', alt: 'Pipeline Two view 2' },
    ],
  },
  {
    title: 'Pipeline Three',
    description: 'Completed infrastructure project by our engineering department.',
    images: [
      { src: 'pipe-three(1).jpg', alt: 'Pipeline Three view 1' },
      { src: 'pipe-three(2).jpg', alt: 'Pipeline Three view 2' },
    ],
  },
];

export default function Engineering() {
  return (
    <section id="engineering" className="bg-[#111214] px-10 py-[90px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-condensed text-[12px] font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-3.5">
          Engineering Division
        </div>
        <div className="w-14 h-[3px] bg-[#c9a84c] mb-7" />
        <h2
          className="font-display font-bold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Engineering Division
        </h2>

        {/* Intro grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-14">
          <div>
            <p className="max-w-[680px] text-[#888c96] text-[16px] leading-[1.8]">
              This is where we showcase the backbone of our company — our dedicated engineering
              team. With strong expertise, practical knowledge, and innovative thinking, we
              design, plan, and execute projects that meet the highest standards of quality
              and safety.
            </p>
            <p className="text-[15px] text-[#888c96] mt-4 leading-[1.8]">
              Our department specializes in delivering tailored engineering solutions that align
              with our clients' unique needs while pushing the boundaries of modern design and
              technology.
            </p>
            <blockquote className="mt-6 pl-6 border-l-[3px] border-[#c9a84c] italic text-[#888c96] text-[15px]">
              "Engineering is not just about structures; it's about building progress, shaping
              communities, and leaving a legacy of excellence."
            </blockquote>
            <div className="mt-7 flex flex-col gap-3">
              {['Qualified Engineers', 'Over 10 Years of Experience', 'Awards and Certificates'].map(
                (badge) => (
                  <div key={badge} className="flex items-center gap-3.5">
                    <span className="w-2.5 h-2.5 bg-[#c9a84c] shrink-0 inline-block" />
                    <span className="text-[14px] font-semibold text-white uppercase tracking-[0.06em]">
                      {badge}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Engineering team photo placeholder */}
          <div className="overflow-hidden">
            <img
              src="engineering-three-people-discussing-plan-factory.jpg"
              alt="Engineering team reviewing plans at a construction site"
              width="800"
              height="400"
              loading="lazy"
              decoding="async"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Detail panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-14">
          <article className="bg-[#22252b] border border-white/8 border-t-[3px] border-t-[#c9a84c] p-[28px_26px]">
            <h3 className="font-display text-[1.35rem] text-white mb-3">
              Structural &amp; Civil Engineering
            </h3>
            <ul className="pl-[18px] space-y-2">
              {[
                'Pile, raft and strip footing foundation.',
                'RCC column, concrete and structural steel.',
                'Storm water, ribs and blocks, pre-cast, and concrete analysis.',
                'In-situ slab designs, soil investigation with geotech reports, and roads rehabilitation.',
              ].map((li) => (
                <li key={li} className="text-[15px] text-[#888c96] leading-[1.8]">
                  {li}
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-[#22252b] border border-white/8 border-t-[3px] border-t-[#c9a84c] p-[28px_26px]">
            <h3 className="font-display text-[1.35rem] text-white mb-3">
              Company Accreditation
            </h3>
            <p className="text-[15px] text-[#888c96] leading-[1.8] mb-3">
              <strong className="text-white">Accredited with ECSA</strong> – Engineering Council
              of South Africa.
            </p>
            <ul className="list-none">
              {[
                'Commitment and Undertaking Certificate: CU 20240042',
                'Valid: 10/10/2024 to 10/09/2029',
                "Mentorship Scheme established in accordance with ECSA's Training Requirements.",
              ].map((item) => (
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
