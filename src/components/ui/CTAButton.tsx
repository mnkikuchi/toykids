import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface CTAButtonProps {
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  ariaLabel?: string
}

const variants = {
  primary:
    'bg-coral-soft text-white hover:bg-coral-medium shadow-sm hover:shadow-md',
  secondary:
    'bg-blue-soft/20 text-blue-medium hover:bg-blue-soft/30',
  outline:
    'border-2 border-coral-soft/30 text-coral-medium hover:border-coral-soft hover:bg-coral-soft/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
}

export function CTAButton({
  to,
  href,
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
}: CTAButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
