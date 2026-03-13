import { cn } from '../../utils/cn'

interface ContactInfoCardProps {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  isPlaceholder?: boolean
  className?: string
}

export function ContactInfoCard({
  icon,
  label,
  value,
  href,
  isPlaceholder = false,
  className,
}: ContactInfoCardProps) {
  return (
    <div
      className={cn(
        'flex items-start gap-4 p-4 rounded-xl bg-white border border-cream-dark/20',
        className
      )}
    >
      <div className="shrink-0 w-10 h-10 rounded-xl bg-coral-soft/10 text-coral-soft flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-text-light uppercase tracking-wider mb-1">
          {label}
        </p>
        {isPlaceholder ? (
          <p className="text-sm text-text-light italic">{value}</p>
        ) : href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-dark hover:text-blue-medium transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-text-dark">{value}</p>
        )}
      </div>
    </div>
  )
}
