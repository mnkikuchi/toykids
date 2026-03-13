import { cn } from '../../utils/cn'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-10 sm:mb-14',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-text-dark mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-4 h-1 w-16 rounded-full bg-yellow-soft',
          align === 'center' && 'mx-auto'
        )}
        aria-hidden="true"
      />
    </div>
  )
}
