import { ArrowRight } from 'lucide-react';

const variants = {
  primary:
    'border border-jasmin-dark bg-jasmin-dark text-white hover:-translate-y-1 hover:bg-[#3f3024]',
  secondary:
    'border border-jasmin-brown/18 bg-white/78 text-jasmin-dark hover:-translate-y-1 hover:bg-white',
  ghost:
    'border border-white/55 bg-white/12 text-white hover:-translate-y-1 hover:bg-white/18',
};

export default function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  showIcon = true,
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.02em] transition-transform duration-300 ease-out will-change-transform ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {showIcon ? <ArrowRight className="h-4 w-4" /> : null}
    </a>
  );
}

