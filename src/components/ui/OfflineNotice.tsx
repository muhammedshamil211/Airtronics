'use client';

import React, { useSyncExternalStore } from 'react';
import { WifiOff, RefreshCw, Phone } from 'lucide-react';

const subscribeOnlineStatus = (callback: () => void) => {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
};

export default function OfflineNotice() {
  const offline = useSyncExternalStore(
    subscribeOnlineStatus,
    () => !navigator.onLine,
    () => false
  );

  if (!offline) return null;

  return (
    <div
      role="status"
      aria-live="assertive"
      className="fixed inset-x-4 top-20 md:left-auto md:right-5 md:max-w-md z-50 bg-[#03132b]/95 backdrop-blur-xl text-white border border-rose-500/40 shadow-2xl shadow-black/50 p-4 rounded-none"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 bg-rose-600 flex items-center justify-center shrink-0 [transform:skewX(-10deg)] rounded-none">
          <WifiOff className="w-4 h-4 text-white [transform:skewX(10deg)]" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="font-[family-name:var(--font-onest)] text-sm font-bold text-white mb-1">
            No Internet Connection
          </h2>
          <p className="font-[family-name:var(--font-onest)] text-xs text-slate-300 leading-relaxed mb-3">
            Your network connection appears to be offline. Reconnect and retry, or call us directly for urgent AC help.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-1.5 bg-[#0076FF] hover:bg-[#0060D0] text-white font-[family-name:var(--font-onest)] font-bold text-xs px-3.5 py-2 [transform:skewX(-10deg)] rounded-none transition-colors cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5 [transform:skewX(10deg)]">
                <RefreshCw className="w-3.5 h-3.5" />
                Retry
              </span>
            </button>
            <a
              href="tel:+971586596321"
              className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-[family-name:var(--font-onest)] font-bold text-xs px-3.5 py-2 [transform:skewX(-10deg)] rounded-none transition-colors"
            >
              <span className="inline-flex items-center gap-1.5 [transform:skewX(10deg)]">
                <Phone className="w-3.5 h-3.5" />
                Call 24/7
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

