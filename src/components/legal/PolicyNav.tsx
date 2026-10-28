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
    <nav className="flex items-center gap-6 sm:gap-8 border-b border-gray-200 mb-12 overflow-x-auto" aria-label="Policy tabs">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={`inline-flex items-center gap-2 pb-3.5 text-sm font-medium transition-colors border-b-2 -mb-[1px] whitespace-nowrap ${
              isActive
                ? 'border-[#005eb8] text-[#005eb8] font-semibold'
                : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon className="w-4 h-4" />
            <span>{tab.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function PolicyCrossLinks({ current }: { current: 'terms' | 'privacy' | 'cookies' }) {
  const allPolicies = [
    {
      id: 'terms',
      title: 'Terms & Conditions',
      desc: 'Service warranties, upfront transparent quotes, FTA VAT compliance, and job cancellation terms.',
      href: '/terms',
      icon: FileText,
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      desc: 'How we protect your contact details. Direct WhatsApp booking only with zero data selling.',
      href: '/privacy-policy',
      icon: ShieldCheck,
    },
    {
      id: 'cookies',
      title: 'Cookies Policy',
      desc: 'Our zero-tracking commitment. Clean browsing without advertising or cross-site tracking cookies.',
      href: '/cookies-policy',
      icon: Cookie,
    },
  ];

  const others = allPolicies.filter((p) => p.id !== current);

  return (
    <div className="mt-14 pt-10 border-t border-gray-200">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Related Legal Documentation</span>
        <h3 className="text-base sm:text-lg font-bold text-[#111111] mt-1">Explore Other Transparency Policies</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {others.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className="group py-4 border-t border-gray-100 hover:border-[#005eb8] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className="w-4 h-4 text-[#005eb8]" />
                  <h4 className="text-sm font-bold text-[#111111] group-hover:text-[#005eb8] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-[#005eb8] group-hover:underline">
                <span>Read document</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
