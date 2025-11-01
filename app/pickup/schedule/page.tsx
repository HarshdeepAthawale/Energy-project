'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth/authContext'
import PickupForm, { PickupFormData } from '@/components/ui/PickupForm'
import Card from '@/components/ui/Card'
import { CheckCircle, Truck, Route } from 'lucide-react'

export default function SchedulePickupPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)
  const [pickupData, setPickupData] = useState<PickupFormData | null>(null)

  const handleSubmit = (data: PickupFormData) => {
    setPickupData(data)
    setSubmitted(true)
  }

  if (submitted && pickupData) {
    return (
      <div className="py-16 bg-gray-50 dark:bg-black min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CheckCircle className="w-16 h-16 text-primary-blue mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Pickup Scheduled Successfully!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Your waste pickup has been scheduled and is pending confirmation.
            </p>

            <div className="bg-gray-50 dark:bg-gray-950 rounded-xl p-6 mb-6 text-left border dark:border-gray-900">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Pickup Details
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Address:</span>
                  <p className="text-gray-900 dark:text-white">
                    {pickupData.address.street}, {pickupData.address.city}, {pickupData.address.zipCode}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Date & Time:</span>
                  <p className="text-gray-900 dark:text-white">
                    {pickupData.scheduledDate} at {pickupData.scheduledTime}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Waste Types:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {pickupData.wasteType.map((type) => (
                      <span
                        key={type}
                        className="px-3 py-1 rounded-full bg-primary-blue/10 text-primary-blue text-sm font-medium"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-950">
                  <div className="flex items-center space-x-2 mb-2">
                    <Route className="w-5 h-5 text-primary-blue" />
                    <span className="font-medium text-gray-700 dark:text-gray-300">Pickup Info:</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your pickup request has been received and will be processed shortly.
                    You&apos;ll receive a confirmation with truck and route details.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/dashboard')}
                className="btn-primary"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setPickupData(null)
                }}
                className="btn-outline"
              >
                Schedule Another
              </button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gray-50 dark:bg-black min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Truck className="w-16 h-16 text-primary-blue mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Schedule a Pickup
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Request a waste collection at your location
          </p>
        </div>
        <PickupForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

