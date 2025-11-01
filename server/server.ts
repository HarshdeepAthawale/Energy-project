import express from 'express'
import cors from 'cors'
import binsRoutes from './api/routes/bins'
import pickupsRoutes from './api/routes/pickups'
import statsRoutes from './api/routes/stats'
import usersRoutes from './api/routes/users'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/bins', binsRoutes)
app.use('/api/pickups', pickupsRoutes)
app.use('/api/stats', statsRoutes)
app.use('/api/users', usersRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'SmartWaste API is running' })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

