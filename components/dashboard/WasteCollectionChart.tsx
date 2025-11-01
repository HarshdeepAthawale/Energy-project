'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Card from '../ui/Card'

interface WasteCollectionChartProps {
  data: Array<{ date: string; amount: number }>
  period: 'weekly' | 'monthly'
}

export default function WasteCollectionChart({ data, period }: WasteCollectionChartProps) {
  const chartData = data.map((item) => ({
    date: period === 'weekly' 
      ? new Date(item.date).toLocaleDateString('en-US', { weekday: 'short' })
      : item.date,
    'Waste (kg)': item.amount,
  }))

  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Waste Collection {period === 'weekly' ? 'This Week' : 'Monthly'}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Waste (kg)"
            stroke="#00b894"
            strokeWidth={2}
            dot={{ fill: '#00b894' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

