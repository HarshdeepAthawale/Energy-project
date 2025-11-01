import { User, LeaderboardEntry } from '@/types'

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'resident',
    ecoTokens: 1250,
    joinDate: '2024-01-15',
    participationCount: 45,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'business',
    ecoTokens: 3200,
    joinDate: '2023-12-10',
    participationCount: 128,
  },
  {
    id: '3',
    name: 'Raj Patel',
    email: 'raj@example.com',
    role: 'resident',
    ecoTokens: 850,
    joinDate: '2024-02-01',
    participationCount: 32,
  },
  {
    id: '4',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    role: 'business',
    ecoTokens: 2800,
    joinDate: '2023-11-20',
    participationCount: 95,
  },
  {
    id: '5',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    ecoTokens: 5000,
    joinDate: '2023-11-01',
    participationCount: 200,
  },
]

export const getLeaderboard = (): LeaderboardEntry[] => {
  return mockUsers
    .filter((user) => user.role !== 'admin')
    .sort((a, b) => b.ecoTokens - a.ecoTokens)
    .map((user, index) => ({
      userId: user.id,
      userName: user.name,
      ecoTokens: user.ecoTokens,
      pickupsCompleted: user.participationCount,
      rank: index + 1,
    }))
    .slice(0, 10) // Top 10
}

