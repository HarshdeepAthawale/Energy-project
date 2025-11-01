import { LucideIcon } from 'lucide-react'
import Card from './Card'

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: string
  color: string
}

export default function StatCard({ icon: Icon, label, value, color }: StatCardProps) {
  return (
    <Card hover className="text-center">
      <div className="flex flex-col items-center">
        <div className={`${color} mb-4`}>
          <Icon className="w-12 h-12" />
        </div>
        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {value}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {label}
        </div>
      </div>
    </Card>
  )
}

