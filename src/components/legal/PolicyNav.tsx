import React from 'react';
import Link from 'next/link';
import { FileText, ShieldCheck, Cookie, ArrowRight } from 'lucide-react';

interface PolicyTabProps {
  active: 'terms' | 'privacy' | 'cookies';
}

export function PolicyHeaderTabs({ active }: PolicyTabProps) {
  const tabs = [
    {
      id: 'terms',
      name: 'Terms & Conditions',
      href: '/terms',
      icon: FileText,
    },
    {
      id: 'privacy',
      name: 'Privacy Policy',
      href: '/privacy-policy',
      icon: ShieldCheck,
    },
    {
      id: 'cookies',
      name: 'Cookies Policy',
      href: '/cookies-policy',
      icon: Cookie,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-slate-100/90 rounded-2xl w-fit border border-slate-200/80">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              isActive
                ? 'bg-[#005eb8] text-white shadow-xs'
                : 'text-gray-600 hover:text-[#111111] hover:bg-white'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{tab.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

export function PolicyCrossLinks({ current }: { current: 'terms' | 'privacy' | 'cookies' }) {
  const allPolicies = [
    {
      id: 'terms',
      title: 'Terms & Conditions',
      desc: 'Review service warranties, upfront transparent quotes, FTA VAT compliance, and job cancellation terms.',
      href: '/terms',
      icon: FileText,
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      desc: 'Understand how we protect your contact details. Direct WhatsApp booking only with zero data selling.',
      href: '/privacy-policy',
      icon: ShieldCheck,
    },
    {
      id: 'cookies',
      title: 'Cookies Policy',
      desc: 'Read our zero-tracking commitment. Enjoy clean browsing without advertising or cross-site tracking cookies.',
      href: '/cookies-policy',
      icon: Cookie,
    },
  ];

  const others = allPolicies.filter((p) => p.id !== current);

  return (
    <div className="mt-12 pt-10 border-t border-gray-200">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Related Legal Documentation</span>
        <h3 className="text-lg sm:text-xl font-bold text-[#111111] mt-1">Explore Other Transparency Policies</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {others.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className="group p-5 bg-white rounded-2xl border border-gray-200/80 hover:border-[#005eb8]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#005eb8] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#111111] group-hover:text-[#005eb8] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-[#005eb8] group-hover:underline">
                <span>Read Full Document</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
