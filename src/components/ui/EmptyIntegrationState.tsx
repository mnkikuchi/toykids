import { Info } from 'lucide-react'
import { cn } from '../../utils/cn'

interface EmptyIntegrationStateProps {
  message: string
  className?: string
}

export function EmptyIntegrationState({
  message,
  className,
}: EmptyIntegrationStateProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 p-4 rounded-xl bg-yellow-light/50 border border-yellow-soft/30 text-sm text-text-medium',
        className
      )}
    >
      <Info size={18} className="text-yellow-soft shrink-0" />
      <span>{message}</span>
    </div>
  )
}
