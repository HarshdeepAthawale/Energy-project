'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import Card from '../ui/Card'

interface SegregationAccuracyChartProps {
  accuracy: number
}

export default function SegregationAccuracyChart({ accuracy }: SegregationAccuracyChartProps) {
  const data = [
    { name: 'Accurate', value: accuracy },
    { name: 'Inaccurate', value: 100 - accuracy },
  ]

  const COLORS = ['#0984e3', '#dfe6e9']

  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Segregation Accuracy
      </h3>
      <div className="mb-4">
        <div className="text-4xl font-bold text-primary-blue mb-2">
          {accuracy}%
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          Overall Accuracy Rate
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}

