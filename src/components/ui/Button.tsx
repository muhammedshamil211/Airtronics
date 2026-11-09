import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'white';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'pill' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const baseStyles =
  'inline-flex items-center justify-center font-semibold transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0076FF] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none';

const variantStyles: Record<ButtonVariant, string> = {
  // Brand Solid Engineering Blue
  primary:
    'bg-[#0076FF] hover:bg-[#0066de] active:bg-[#0055b8] text-white active:scale-[0.98]',
  
  // Secondary Crisp Surface with Subtle Border
  secondary:
    'bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-900 border border-slate-300 hover:border-[#0076FF] active:scale-[0.98]',

  // Clean White Surface
  white:
    'bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-900 border border-slate-200 hover:border-[#0076FF] active:scale-[0.98]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs sm:text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-7 py-3.5 sm:px-8 sm:py-4 text-base md:text-lg',
  pill: 'px-6 py-3 text-sm sm:text-base',
  icon: 'w-10 h-10 sm:w-11 sm:h-11 p-0 shrink-0',
};

export default function Button({
  href,
  target,
  rel,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? 'w-full' : ''
  } ${className} rounded-none`.trim();

  const content = (
    <span className="inline-flex items-center justify-center gap-2 [transform:skewX(10deg)] sm:[transform:skewX(14deg)] w-full whitespace-nowrap">
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      {children}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </span>
  );

  // If href is provided, render either Next.js Link or native anchor
  if (href) {
    const isExternal =
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('tel:') ||
      href.startsWith('mailto:') ||
      href.startsWith('//');

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
          className={combinedClasses}
          aria-label={props['aria-label']}
          title={props.title}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        aria-label={props['aria-label']}
        title={props.title}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
