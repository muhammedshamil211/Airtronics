'use client';

import { useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, Phone, WifiOff, AlertTriangle } from 'lucide-react';
import AnimatedShaderBackground from '@/components/ui/AnimatedShaderBackground';

const subscribeOnlineStatus = (callback: () => void) => {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const isOffline = useSyncExternalStore(
    subscribeOnlineStatus,
    () => !navigator.onLine,
    () => false
  );

  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  const isNetworkError =
    isOffline ||
    /fetch|network|chunk|loading css|failed to load/i.test(error?.message || '');

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
      </div>

      <div className="relative z-10 max-w-2xl w-full p-2 sm:p-2.5 bg-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/40 rounded-none">
        <div className="bg-[#061a38]/90 p-7 sm:p-10 md:p-12 text-center rounded-none">
          <div className="inline-flex items-center gap-2 bg-[#0076FF] px-4 py-1 mb-5 [transform:skewX(-10deg)] rounded-none">
            <span className="inline-flex items-center gap-1.5 [transform:skewX(10deg)] font-[family-name:var(--font-onest)] text-[11px] font-bold tracking-[0.2em] uppercase text-white">
              {isNetworkError ? (
                <>
                  <WifiOff className="w-3.5 h-3.5" />
                  Network Connection Issue
                </>
              ) : (
                <>
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Unexpected Error
                </>
              )}
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-7xl tracking-wide uppercase leading-none mb-4 text-white">
            {isNetworkError ? 'Connection Interrupted' : 'Something Went Wrong'}
          </h1>

          <p className="font-[family-name:var(--font-onest)] text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            {isNetworkError
              ? 'It looks like your internet connection dropped or timed out while loading this page. Check your Wi-Fi or mobile data and try again, or call us directly.'
              : 'We ran into a temporary issue loading this page. Click Try Again below, return to the home page, or call our 24/7 Dubai AC dispatch team.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => {
                if (isNetworkError) {
                  window.location.reload();
                } else {
                  reset();
                }
              }}
              className="inline-flex items-center gap-2 bg-[#0076FF] hover:bg-[#0060D0] text-white font-[family-name:var(--font-onest)] font-bold text-sm px-6 py-3.5 [transform:skewX(-10deg)] rounded-none transition-colors cursor-pointer"
            >
              <span className="inline-flex items-center gap-2 [transform:skewX(10deg)]">
                <RefreshCw className="w-4 h-4" />
                Try Again
              </span>
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-[family-name:var(--font-onest)] font-bold text-sm px-6 py-3.5 [transform:skewX(-10deg)] rounded-none transition-colors"
            >
              <span className="inline-flex items-center gap-2 [transform:skewX(10deg)]">
                <Home className="w-4 h-4" />
                Go Home
              </span>
            </Link>

            <a
              href="tel:+971586596321"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-[family-name:var(--font-onest)] font-bold text-sm px-6 py-3.5 [transform:skewX(-10deg)] rounded-none transition-colors"
            >
              <span className="inline-flex items-center gap-2 [transform:skewX(10deg)]">
                <Phone className="w-4 h-4" />
                Call +971 58 659 6321
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
