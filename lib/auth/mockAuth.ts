import { User, UserRole } from '@/types'

// Mock users database
const mockUsers: User[] = [
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
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    ecoTokens: 5000,
    joinDate: '2023-11-01',
    participationCount: 200,
  },
]

export const mockAuth = {
  login: (email: string, password: string): Promise<User | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = mockUsers.find((u) => u.email === email)
        // Mock password check - any password works for demo
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user))
          resolve(user)
        } else {
          resolve(null)
        }
      }, 500)
    })
  },

  register: (
    name: string,
    email: string,
    password: string,
    role: UserRole = 'resident'
  ): Promise<User | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const existingUser = mockUsers.find((u) => u.email === email)
        if (existingUser) {
          resolve(null) // User already exists
        } else {
          const newUser: User = {
            id: String(mockUsers.length + 1),
            name,
            email,
            role,
            ecoTokens: 0,
            joinDate: new Date().toISOString().split('T')[0],
            participationCount: 0,
          }
          mockUsers.push(newUser)
          localStorage.setItem('currentUser', JSON.stringify(newUser))
          resolve(newUser)
        }
      }, 500)
    })
  },

  logout: (): void => {
    localStorage.removeItem('currentUser')
  },

  getCurrentUser: (): User | null => {
    if (typeof window === 'undefined') return null
    const userStr = localStorage.getItem('currentUser')
    if (userStr) {
      return JSON.parse(userStr) as User
    }
    return null
  },

  updateUserTokens: (userId: string, tokens: number): void => {
    const userStr = localStorage.getItem('currentUser')
    if (userStr) {
      const user = JSON.parse(userStr) as User
      if (user.id === userId) {
        user.ecoTokens = tokens
        localStorage.setItem('currentUser', JSON.stringify(user))
      }
    }
  },
}

