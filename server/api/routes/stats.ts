import { Router } from 'express'
import { mockStats } from '../../../lib/mock/mockStats'

const router = Router()

// Get all statistics
router.get('/', (req, res) => {
  res.json({ stats: mockStats })
})

export default router

