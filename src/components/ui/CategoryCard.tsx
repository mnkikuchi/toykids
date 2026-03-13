import {
  Dices,
  Baby,
  Car,
  Music,
  Crown,
  Heart,
  Layers,
  type LucideIcon,
} from 'lucide-react'
import type { Category } from '../../data/categories'

const iconMap: Record<string, LucideIcon> = {
  Dices,
  Baby,
  Car,
  Music,
  Crown,
  Heart,
  Layers,
}

const colorVariants = [
  'bg-blue-soft/15 text-blue-medium',
  'bg-coral-soft/15 text-coral-medium',
  'bg-mint/15 text-mint-dark',
  'bg-lavender/15 text-lavender',
  'bg-yellow-soft/15 text-yellow-soft',
  'bg-coral-soft/15 text-coral-medium',
  'bg-blue-soft/15 text-blue-medium',
]

interface CategoryCardProps {
  category: Category
  index: number
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Dices
  const colorClass = colorVariants[index % colorVariants.length]

  return (
    <article className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-cream-dark/20 hover:border-cream-dark/40 hover:-translate-y-1">
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${colorClass} mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={28} />
      </div>
      <h3 className="font-display font-bold text-lg text-text-dark mb-2">
        {category.title}
      </h3>
      <p className="text-text-light text-sm leading-relaxed">
        {category.description}
      </p>
    </article>
  )
}
