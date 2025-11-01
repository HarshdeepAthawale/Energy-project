'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth/authContext'
import { mockStats, mockBins, mockPickups, getUpdatedBins } from '@/lib/mock'
import StatCard from '@/components/ui/StatCard'
import WasteCollectionChart from '@/components/dashboard/WasteCollectionChart'
import CO2ReductionChart from '@/components/dashboard/CO2ReductionChart'
import SegregationAccuracyChart from '@/components/dashboard/SegregationAccuracyChart'
import { TrendingUp, Recycle, Award, Users } from 'lucide-react'
import Link from 'next/link'
import BinStatusCard from '@/components/ui/BinStatusCard'
import PickupList from '@/components/dashboard/PickupList'

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [bins, setBins] = useState(mockBins)
  const [activeTab, setActiveTab] = useState<'overview' | 'bins' | 'pickups' | 'reports'>('overview')

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  useEffect(() => {
    // Simulate real-time bin updates
    const interval = setInterval(() => {
      setBins(getUpdatedBins())
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black dark:border-white mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const userPickups = mockPickups.filter((p) => p.userId === user.id)

  const stats = [
    {
      icon: Recycle,
      label: 'Total Pickups',
      value: userPickups.length.toString(),
      color: 'text-black dark:text-white',
    },
    {
      icon: TrendingUp,
      label: 'Your CO₂ Saved',
      value: `${Math.round(mockStats.co2Saved * 0.1).toLocaleString()} kg`,
      color: 'text-black dark:text-white',
    },
    {
      icon: Award,
      label: 'Eco Tokens',
      value: user.ecoTokens.toLocaleString(),
      color: 'text-yellow-600',
    },
    {
      icon: Users,
      label: 'Participation',
      value: user.participationCount.toString(),
      color: 'text-purple-600',
    },
  ]

  return (
    <div className="py-8 bg-gray-50 dark:bg-black min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here&apos;s your waste management overview
          </p>
        </div>

        {/* Tabs */}
          <div className="mb-8 border-b border-gray-200 dark:border-gray-950">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'bins', label: 'Bins Status' },
              { id: 'pickups', label: 'Pickups' },
              { id: 'reports', label: 'Reports' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-blue text-primary-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              <WasteCollectionChart data={mockStats.weeklyCollection} period="weekly" />
              <CO2ReductionChart
                co2Saved={mockStats.co2Saved}
                totalWaste={mockStats.totalWasteCollected}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <SegregationAccuracyChart accuracy={mockStats.segregationAccuracy} />
              <div className="bg-white dark:bg-black rounded-xl shadow-md dark:shadow-gray-950 p-6 border dark:border-gray-950">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/pickup/schedule"
                    className="block w-full btn-primary text-center"
                  >
                    Schedule New Pickup
                  </Link>
                  <Link
                    href="/rewards"
                    className="block w-full btn-secondary text-center"
                  >
                    View Rewards
                  </Link>
                  <Link
                    href="/learn"
                    className="block w-full btn-outline text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bins' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Smart Bins Status
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Real-time monitoring of IoT-enabled waste bins
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bins.map((bin) => (
                <BinStatusCard key={bin.id} bin={bin} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pickups' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Your Pickups
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Track your scheduled and completed waste pickups
              </p>
            </div>
            <PickupList pickups={userPickups} />
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-black rounded-xl shadow-md dark:shadow-gray-950 p-6 border dark:border-gray-950">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Impact Reports
              </h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Total Waste Collected</p>
                    <p className="text-3xl font-bold text-primary-blue">
                      {mockStats.totalWasteCollected.toLocaleString()} kg
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Total CO₂ Saved</p>
                    <p className="text-3xl font-bold text-primary-blue">
                      {mockStats.co2Saved.toLocaleString()} kg
                    </p>
                  </div>
                </div>
                <WasteCollectionChart data={mockStats.monthlyCollection} period="monthly" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

