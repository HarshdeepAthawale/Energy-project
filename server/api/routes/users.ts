import { Router } from 'express'
import { mockUsers, getLeaderboard } from '../../../lib/mock/mockUsers'

const router = Router()

// Get all users
router.get('/', (req, res) => {
  res.json({ users: mockUsers })
})

// Get user by ID
router.get('/:id', (req, res) => {
  const user = mockUsers.find((u) => u.id === req.params.id)
  if (user) {
    res.json({ user })
  } else {
    res.status(404).json({ error: 'User not found' })
  }
})

// Get leaderboard
router.get('/leaderboard/top', (req, res) => {
  res.json({ leaderboard: getLeaderboard() })
})

export default router

