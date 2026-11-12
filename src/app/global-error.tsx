'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#03132b] text-white flex items-center justify-center px-4 font-sans antialiased">
        <div className="max-w-lg w-full p-2 bg-white/[0.12] backdrop-blur-xl shadow-2xl">
          <div className="bg-[#061a38]/95 p-8 sm:p-10 text-center">
            <div className="inline-block bg-[#0076FF] px-4 py-1 mb-4 [transform:skewX(-10deg)]">
              <span className="inline-block [transform:skewX(10deg)] text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                Airtronics Fixcare
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide mb-3">
              Service Temporarily Unavailable
            </h1>
            <p className="text-slate-300 text-sm mb-7 leading-relaxed">
              A connection or loading error occurred. Please reload the page or call our 24/7 Dubai AC dispatch team on +971 58 659 6321.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => reset()}
                className="bg-[#0076FF] hover:bg-[#0060D0] text-white font-bold text-sm px-6 py-3 [transform:skewX(-10deg)] cursor-pointer"
              >
                <span className="inline-block [transform:skewX(10deg)]">Reload Page</span>
              </button>
              <a
                href="tel:+971586596321"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3 [transform:skewX(-10deg)]"
              >
                <span className="inline-block [transform:skewX(10deg)]">Call 24/7</span>
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
