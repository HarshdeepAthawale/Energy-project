'use client'

import { useState } from 'react'
import { WasteType } from '@/types'
import Button from './Button'
import Card from './Card'
import { Calendar, Clock, MapPin, Trash2 } from 'lucide-react'

interface PickupFormProps {
  onSubmit: (data: PickupFormData) => void
  loading?: boolean
}

export interface PickupFormData {
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  wasteType: WasteType[]
  scheduledDate: string
  scheduledTime: string
}

export default function PickupForm({ onSubmit, loading = false }: PickupFormProps) {
  const [formData, setFormData] = useState<PickupFormData>({
    address: {
      street: '',
      city: '',
      state: 'Maharashtra',
      zipCode: '',
      coordinates: {
        lat: 19.0760,
        lng: 72.8777,
      },
    },
    wasteType: [],
    scheduledDate: '',
    scheduledTime: '',
  })

  const wasteTypes: { value: WasteType; label: string }[] = [
    { value: 'wet', label: 'Wet Waste (Organic)' },
    { value: 'dry', label: 'Dry Waste (Recyclable)' },
    { value: 'e-waste', label: 'E-Waste' },
    { value: 'hazardous', label: 'Hazardous' },
  ]

  const handleCheckboxChange = (type: WasteType) => {
    setFormData((prev) => ({
      ...prev,
      wasteType: prev.wasteType.includes(type)
        ? prev.wasteType.filter((t) => t !== type)
        : [...prev.wasteType, type],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.wasteType.length === 0) {
      alert('Please select at least one waste type')
      return
    }
    onSubmit(formData)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <MapPin className="w-4 h-4 inline mr-1" />
            Street Address
          </label>
          <input
            type="text"
            required
            value={formData.address.street}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, street: e.target.value },
              })
            }
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="123 Main Street"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              City
            </label>
            <input
              type="text"
              required
              value={formData.address.city}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, city: e.target.value },
                })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Mumbai"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Zip Code
            </label>
            <input
              type="text"
              required
              value={formData.address.zipCode}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: { ...formData.address, zipCode: e.target.value },
                })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="400053"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Trash2 className="w-4 h-4 inline mr-1" />
            Waste Type (Select all that apply)
          </label>
          <div className="grid md:grid-cols-2 gap-3">
            {wasteTypes.map((type) => (
              <label
                key={type.value}
                className="flex items-center space-x-2 p-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.wasteType.includes(type.value)}
                  onChange={() => handleCheckboxChange(type.value)}
                  className="w-4 h-4 text-primary-green focus:ring-primary-green rounded"
                />
                <span className="text-gray-700 dark:text-gray-300">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Preferred Date
            </label>
            <input
              type="date"
              required
              value={formData.scheduledDate}
              onChange={(e) =>
                setFormData({ ...formData, scheduledDate: e.target.value })
              }
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Clock className="w-4 h-4 inline mr-1" />
              Preferred Time
            </label>
            <select
              required
              value={formData.scheduledTime}
              onChange={(e) =>
                setFormData({ ...formData, scheduledTime: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Select time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={loading || formData.wasteType.length === 0}
        >
          {loading ? 'Scheduling...' : 'Schedule Pickup'}
        </Button>
      </form>
    </Card>
  )
}

