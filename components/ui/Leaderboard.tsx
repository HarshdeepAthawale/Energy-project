import { LeaderboardEntry } from '@/types'
import Card from './Card'
import { Trophy, Award, Medal } from 'lucide-react'

interface LeaderboardProps {
  entries: LeaderboardEntry[]
  currentUserId?: string
}

export default function Leaderboard({ entries, currentUserId }: LeaderboardProps) {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />
    if (rank === 3) return <Award className="w-6 h-6 text-orange-500" />
    return <span className="w-6 h-6 flex items-center justify-center text-gray-500 font-bold">#{rank}</span>
  }

  const getRankBg = (rank: number) => {
    if (rank === 1) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
    if (rank === 2) return 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
    if (rank === 3) return 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
    return 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
  }

  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Top Green Champions
      </h3>
      <div className="space-y-3">
        {entries.map((entry) => (
          <div
            key={entry.userId}
            className={`flex items-center space-x-4 p-4 rounded-xl border-2 ${
              getRankBg(entry.rank)
            } ${
              entry.userId === currentUserId
                ? 'ring-2 ring-primary-green'
                : ''
            }`}
          >
            <div className="flex-shrink-0">
              {getRankIcon(entry.rank)}
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {entry.userName}
                    {entry.userId === currentUserId && (
                      <span className="ml-2 text-xs text-primary-green">(You)</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {entry.pickupsCompleted} pickups completed
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary-green">
                    {entry.ecoTokens.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">tokens</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

