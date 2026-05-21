import ImagePlaceholder from './ImagePlaceholder';

/**
 * ProjectItem
 * @param {number} num - project number (1-based)
 * @param {string} title
 * @param {string} description
 * @param {{ src?: string, alt: string }[]} images - exactly 2 images
 * @param {boolean} flip - reverse layout for even items
 */
export default function ProjectItem({ num, title, description, images = [], flip = false }) {
  const pair = images.slice(0, 2);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${flip ? 'md:[direction:rtl]' : ''}`}
    >
      {/* Images */}
      <div className={`grid grid-cols-2 gap-2.5 ${flip ? '[direction:ltr]' : ''}`}>
        {pair.map((img, i) => (
          <div key={i} className="overflow-hidden">
            <ImagePlaceholder
              src={img.src}
              alt={img.alt}
              aspectRatio="aspect-[4/3]"
              className="transition-transform duration-400 hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>

      {/* Info */}
      <div className={`py-2 ${flip ? '[direction:ltr]' : ''}`}>
        <div className="font-condensed text-[64px] font-bold text-[#2e3138] leading-none mb-[-10px]">
          {String(num).padStart(2, '0')}
        </div>
        <h3 className="font-display text-[1.8rem] text-white mb-3">{title}</h3>
        <p className="text-[15px] text-[#888c96]">{description}</p>
      </div>
    </div>
  );
}
