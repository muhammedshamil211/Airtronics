import Link from 'next/link';
import { ArrowRight, Home, MessageCircle, Phone, Wrench } from 'lucide-react';
import AnimatedShaderBackground from '@/components/ui/AnimatedShaderBackground';

export default function NotFound() {
  return (
    <main className="min-h-[85vh] bg-[#03132b] text-white flex items-center justify-center px-4 py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <AnimatedShaderBackground
          patternStyle={3}
          speed={0.6}
          scale={1.0}
          distortion={2.2}
          brightness={1.4}
          refraction={1.0}
          colors={{
            base: '#000614',
            mid: '#004aa6',
            high: '#11444fff',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
        <div
          className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full blur-[130px] opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0076FF 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-2xl w-full p-2 sm:p-2.5 bg-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/40 rounded-none">
        <div className="bg-[#061a38]/90 p-7 sm:p-10 md:p-12 text-center rounded-none">
          <div className="inline-block bg-[#0076FF] px-4 py-1 mb-5 [transform:skewX(-10deg)] rounded-none">
            <span className="inline-block [transform:skewX(10deg)] font-[family-name:var(--font-onest)] text-[11px] font-bold tracking-[0.2em] uppercase text-white">
              Error 404 • Link Not Found
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-bebas)] text-6xl sm:text-8xl tracking-wide uppercase leading-none mb-4 text-white">
            Page Not Found
          </h1>

          <p className="font-[family-name:var(--font-onest)] text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            The page or link you followed may have moved or does not exist. Use the quick links below or message our 24/7 Dubai AC team directly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#0076FF] hover:bg-[#0060D0] text-white font-[family-name:var(--font-onest)] font-bold text-sm px-6 py-3.5 [transform:skewX(-10deg)] rounded-none transition-colors"
            >
              <span className="inline-flex items-center gap-2 [transform:skewX(10deg)]">
                <Home className="w-4 h-4" />
                Back to Home
              </span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-[family-name:var(--font-onest)] font-bold text-sm px-6 py-3.5 [transform:skewX(-10deg)] rounded-none transition-colors"
            >
              <span className="inline-flex items-center gap-2 [transform:skewX(10deg)]">
                <Wrench className="w-4 h-4" />
                All Services
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <a
              href="https://wa.me/971586596321?text=Hi%20Airtronics%2C%20I%20need%20AC%20assistance%20in%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-[family-name:var(--font-onest)] font-bold text-sm px-6 py-3.5 [transform:skewX(-10deg)] rounded-none transition-colors"
            >
              <span className="inline-flex items-center gap-2 [transform:skewX(10deg)]">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </span>
            </a>

            <a
              href="tel:+971586596321"
              className="inline-flex items-center gap-2 bg-white text-[#03132b] hover:bg-slate-100 font-[family-name:var(--font-onest)] font-bold text-sm px-6 py-3.5 [transform:skewX(-10deg)] rounded-none transition-colors"
            >
              <span className="inline-flex items-center gap-2 [transform:skewX(10deg)]">
                <Phone className="w-4 h-4" />
                Call 24/7
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
