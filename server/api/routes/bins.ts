import { Router } from 'express'
import { mockBins, getUpdatedBins } from '../../../lib/mock/mockBins'

const router = Router()

// Get all bins
router.get('/', (req, res) => {
  res.json({ bins: mockBins })
})

// Get updated bins (simulated real-time data)
router.get('/updated', (req, res) => {
  res.json({ bins: getUpdatedBins() })
})

// Get bin by ID
router.get('/:id', (req, res) => {
  const bin = mockBins.find((b) => b.id === req.params.id)
  if (bin) {
    res.json({ bin })
  } else {
    res.status(404).json({ error: 'Bin not found' })
  }
})

export default router

