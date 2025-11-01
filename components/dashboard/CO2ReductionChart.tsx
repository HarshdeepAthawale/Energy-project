'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Card from '../ui/Card'

interface CO2ReductionChartProps {
  co2Saved: number
  totalWaste: number
}

export default function CO2ReductionChart({ co2Saved, totalWaste }: CO2ReductionChartProps) {
  const data = [
    { name: 'CO₂ Saved', value: Math.round(co2Saved) },
    { name: 'Waste Collected (kg)', value: Math.round(totalWaste / 10) },
  ]

  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Environmental Impact
      </h3>
      <div className="mb-4">
        <div className="text-3xl font-bold text-primary-green mb-2">
          {co2Saved.toLocaleString()} kg
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          Total CO₂ Saved
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#0984e3" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

