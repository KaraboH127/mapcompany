import { useEffect } from 'react';

export default function NotFoundPage({ onGoHome, onGoBack }) {
  useEffect(() => {
    document.title = 'Page Not Found | Map Company';

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'noindex, follow');

    return () => {
      const defaultMeta = document.querySelector('meta[name="robots"]');
      if (defaultMeta) {
        defaultMeta.setAttribute('content', 'index,follow');
      }
    };
  }, []);

  return (
    <section className="animate-fade-in relative overflow-hidden bg-[#111214] px-6 py-20 sm:px-10 lg:px-10">
      <div className="absolute inset-0 opacity-10" style={{ background: 'linear-gradient(120deg, #111214 0%, #111214 55%, rgba(201, 168, 76, 0.18) 100%)' }} />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="font-condensed text-[12px] font-bold tracking-[0.24em] uppercase text-[#c9a84c] mb-4">
          Error 404
        </div>
        <h1 className="font-display text-white leading-tight mb-5" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)' }}>
          Page not found
        </h1>
        <p className="max-w-[620px] text-[16px] text-[#888c96] leading-[1.8] mb-8">
          The page you were trying to reach doesn’t exist, may have moved, or may have been typed incorrectly.
          We can help you get back to the work we do best.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onGoHome}
            className="inline-flex items-center justify-center rounded-sm bg-[#c9a84c] px-8 py-3.5 text-[14px] font-bold uppercase tracking-[0.12em] text-[#111] transition-all duration-200 hover:bg-[#e2c375] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111214]"
          >
            Back to Home
          </button>
          <button
            type="button"
            onClick={onGoBack}
            className="inline-flex items-center justify-center rounded-sm border border-[#c9a84c]/50 bg-transparent px-8 py-3.5 text-[14px] font-bold uppercase tracking-[0.12em] text-[#d4d6da] transition-all duration-200 hover:border-[#c9a84c] hover:text-[#c9a84c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111214]"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
