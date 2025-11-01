'use client'

import { motion } from 'framer-motion'
import StatCard from '../ui/StatCard'
import { mockStats } from '@/lib/mock/mockStats'
import { Recycle, TrendingUp, Award, Users } from 'lucide-react'

export default function StatsSection() {
  const stats = [
    {
      icon: Recycle,
      label: 'Total Pickups',
      value: mockStats.totalPickups.toLocaleString(),
      color: 'text-primary-blue',
    },
    {
      icon: TrendingUp,
      label: 'CO₂ Saved',
      value: `${mockStats.co2Saved.toLocaleString()} kg`,
      color: 'text-primary-blue',
    },
    {
      icon: Award,
      label: 'Segregation Accuracy',
      value: `${mockStats.segregationAccuracy}%`,
      color: 'text-blue-600',
    },
    {
      icon: Users,
      label: 'Active Users',
      value: '500+',
      color: 'text-blue-600',
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Making a Real Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join thousands of residents and businesses contributing to a cleaner environment
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <StatCard
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                color={stat.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

