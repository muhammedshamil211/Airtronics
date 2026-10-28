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
  'inline-flex items-center justify-center font-bold transition-colors duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005eb8] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

const variantStyles: Record<ButtonVariant, string> = {
  // Brand 3D Button (Lighter top inset + Dark bottom shadow)
  primary:
    'bg-[#005eb8] hover:bg-[#004a94] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_3px_0_#003870,0_3px_6px_rgba(0,0,0,0.16)] active:translate-y-[2px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_1px_0_#003870]',
  
  // Secondary White with Brand Border & 3D Shadow
  secondary:
    'bg-white hover:bg-slate-50 text-[#111111] border-2 border-[#005eb8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_3px_0_#003870,0_3px_6px_rgba(0,0,0,0.1)] active:translate-y-[2px] active:shadow-[0_1px_0_#003870]',

  // Clean White with subtle border & shadow
  white:
    'bg-white hover:bg-slate-50 text-[#111111] border border-slate-300 hover:border-[#005eb8] shadow-sm active:translate-y-[2px]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs sm:text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-sm sm:text-base rounded-xl gap-2',
  lg: 'px-7 py-3.5 sm:px-8 sm:py-4 text-base md:text-lg rounded-xl gap-2.5',
  pill: 'px-6 py-3 text-sm sm:text-base rounded-full gap-2',
  icon: 'w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0 shrink-0 gap-0',
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
  } ${className}`.trim();

  const content = (
    <>
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      {children}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
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
