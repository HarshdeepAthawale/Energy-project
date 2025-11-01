import { Router } from 'express'
import { mockPickups } from '../../../lib/mock/mockPickups'

const router = Router()

// Get all pickups
router.get('/', (req, res) => {
  res.json({ pickups: mockPickups })
})

// Get pickups by user ID
router.get('/user/:userId', (req, res) => {
  const userPickups = mockPickups.filter((p) => p.userId === req.params.userId)
  res.json({ pickups: userPickups })
})

// Get pickup by ID
router.get('/:id', (req, res) => {
  const pickup = mockPickups.find((p) => p.id === req.params.id)
  if (pickup) {
    res.json({ pickup })
  } else {
    res.status(404).json({ error: 'Pickup not found' })
  }
})

// Create new pickup (mock - doesn't persist)
router.post('/', (req, res) => {
  const newPickup = {
    id: `pickup-${Date.now()}`,
    ...req.body,
    createdAt: new Date().toISOString(),
  }
  res.status(201).json({ pickup: newPickup, message: 'Pickup created successfully' })
})

export default router

