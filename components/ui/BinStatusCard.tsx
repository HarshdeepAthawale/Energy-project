import { Bin } from '@/types'
import Card from './Card'
import { MapPin, Battery, AlertCircle, CheckCircle } from 'lucide-react'

interface BinStatusCardProps {
  bin: Bin
}

export default function BinStatusCard({ bin }: BinStatusCardProps) {
  const getStatusColor = () => {
    if (bin.fillLevel >= 90) return 'text-red-500'
    if (bin.fillLevel >= 70) return 'text-yellow-500'
    return 'text-green-500'
  }

  const getStatusIcon = () => {
    if (bin.status === 'full') return <AlertCircle className="w-5 h-5 text-red-500" />
    return <CheckCircle className="w-5 h-5 text-green-500" />
  }

  return (
    <Card hover>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {bin.id.toUpperCase()}
          </h3>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4 mr-1" />
            {bin.location.address}
          </div>
        </div>
        {getStatusIcon()}
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Fill Level
          </span>
          <span className={`text-sm font-bold ${getStatusColor()}`}>
            {bin.fillLevel}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all ${
              bin.fillLevel >= 90
                ? 'bg-red-500'
                : bin.fillLevel >= 70
                ? 'bg-yellow-500'
                : 'bg-green-500'
            }`}
            style={{ width: `${bin.fillLevel}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <Battery className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600 dark:text-gray-400">
            {bin.currentWeight} / {bin.capacity} kg
          </span>
        </div>
        <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium">
          {bin.wasteType}
        </span>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
        Last updated: {new Date(bin.lastUpdated).toLocaleTimeString()}
      </div>
    </Card>
  )
}

