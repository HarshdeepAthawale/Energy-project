'use client'

import { useAuth } from '@/lib/auth/authContext'
import { getLeaderboard } from '@/lib/mock'
import Card from '@/components/ui/Card'
import Leaderboard from '@/components/ui/Leaderboard'
import { Gift, Coins, ShoppingBag, TreePine } from 'lucide-react'
import Button from '@/components/ui/Button'

const redeemOptions = [
  {
    icon: ShoppingBag,
    title: 'Shopping Vouchers',
    description: 'Get 10% off at partner stores',
    tokens: 500,
    color: 'bg-blue-100 dark:bg-blue-900/20 text-primary-blue',
  },
  {
    icon: TreePine,
    title: 'Tree Planting',
    description: 'Donate to plant a tree in your name',
    tokens: 300,
    color: 'bg-blue-100 dark:bg-blue-900/20 text-primary-blue',
  },
  {
    icon: Gift,
    title: 'Eco Products',
    description: 'Redeem for sustainable products',
    tokens: 1000,
    color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600',
  },
]

export default function RewardsPage() {
  const { user } = useAuth()
  const leaderboard = getLeaderboard()

  if (!user) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Please log in to view your rewards
        </p>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gray-50 dark:bg-black min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Rewards
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Earn tokens, climb the leaderboard, and redeem amazing rewards
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Eco Tokens Card */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-yellow-50 to-blue-50 dark:from-yellow-900/20 dark:to-blue-900/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Your Eco Tokens
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Earned through sustainable waste management
                  </p>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-4 rounded-full">
                  <Coins className="w-12 h-12 text-yellow-600" />
                </div>
              </div>
              <div className="text-center py-8">
                <div className="text-6xl font-bold text-primary-blue mb-4">
                  {user.ecoTokens.toLocaleString()}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Available Tokens
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-950">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {user.participationCount}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Pickups Completed
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      #{leaderboard.findIndex((e) => e.userId === user.id) + 1 || '-'}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your Rank
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                How to Earn More
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue">✓</span>
                  <span>Proper waste segregation (+20 tokens)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue">✓</span>
                  <span>Regular pickups (+50 tokens)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue">✓</span>
                  <span>E-waste disposal (+100 tokens)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue">✓</span>
                  <span>Refer friends (+200 tokens)</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Redeem Options */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Redeem Your Tokens
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {redeemOptions.map((option) => (
              <Card key={option.title} hover>
                <div className={`${option.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <option.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
                  {option.description}
                </p>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-primary-blue">
                    {option.tokens}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">tokens</span>
                </div>
                <Button
                  variant={user.ecoTokens >= option.tokens ? 'primary' : 'outline'}
                  className="w-full"
                  disabled={user.ecoTokens < option.tokens}
                >
                  {user.ecoTokens >= option.tokens ? 'Redeem Now' : 'Insufficient Tokens'}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Leaderboard
          </h2>
          <Leaderboard entries={leaderboard} currentUserId={user.id} />
        </div>
      </div>
    </div>
  )
}

