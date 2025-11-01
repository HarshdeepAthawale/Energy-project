import { Pickup } from '@/types'
import Card from '../ui/Card'
import { formatDate } from '@/lib/utils/formatDate'
import { Clock, CheckCircle, AlertCircle, Truck, Calendar } from 'lucide-react'

interface PickupListProps {
  pickups: Pickup[]
}

export default function PickupList({ pickups }: PickupListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
      case 'in-progress':
        return 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
      case 'scheduled':
        return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300'
      default:
        return 'bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5" />
      case 'in-progress':
        return <Truck className="w-5 h-5" />
      case 'scheduled':
        return <Clock className="w-5 h-5" />
      default:
        return <AlertCircle className="w-5 h-5" />
    }
  }

  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Scheduled Pickups
      </h3>
      <div className="space-y-4">
        {pickups.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center py-8">
            No pickups scheduled
          </p>
        ) : (
          pickups.map((pickup) => (
            <div
              key={pickup.id}
              className="border border-gray-200 dark:border-gray-950 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${getStatusColor(pickup.status)}`}>
                      {getStatusIcon(pickup.status)}
                      <span className="text-xs font-medium capitalize">
                        {pickup.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-900 dark:text-white font-medium mb-1">
                    {pickup.address.street}, {pickup.address.city}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(pickup.scheduledDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{pickup.scheduledTime}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {pickup.wasteType.map((type) => (
                  <span
                    key={type}
                    className="px-2 py-1 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-medium"
                  >
                    {type}
                  </span>
                ))}
                {pickup.ecoTokensEarned && pickup.ecoTokensEarned > 0 && (
                  <span className="px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 text-xs font-medium">
                    +{pickup.ecoTokensEarned} tokens
                  </span>
                )}
              </div>
              {pickup.truckId && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-950 text-sm text-gray-600 dark:text-gray-400">
                  Truck: {pickup.truckId}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </Card>
  )
}

