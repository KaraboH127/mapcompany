/**
 * ImagePlaceholder
 * Replace `src` with an actual image path or URL.
 * aspectRatio: Tailwind aspect-ratio class, e.g. "aspect-[4/3]" | "aspect-square"
 */
export default function ImagePlaceholder({
  src,
  alt = '',
  className = '',
  aspectRatio = 'aspect-[4/3]',
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover block ${aspectRatio} ${className}`}
      />
    );
  }

  return (
    <div
      className={`w-full ${aspectRatio} ${className} bg-[#2e3138] flex flex-col items-center justify-center gap-2 select-none`}
      aria-label={alt || 'Image placeholder'}
    >
      <svg
        className="w-10 h-10 text-[#c9a84c] opacity-40"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
        <path strokeWidth="1.5" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
      </svg>
      {alt && (
        <span className="text-[11px] text-[#888c96] font-condensed tracking-widest uppercase">
          {alt}
        </span>
      )}
    </div>
  );
}
