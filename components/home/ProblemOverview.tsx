'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Trash2, Factory, Landmark } from 'lucide-react'
import Card from '../ui/Card'

const problems = [
  {
    icon: Trash2,
    title: '62 Million Tons',
    description: 'Annual waste generation in India',
    color: 'text-red-500',
  },
  {
    icon: Factory,
    title: 'Landfill Crisis',
    description: 'Overflowing landfills and improper disposal',
    color: 'text-orange-500',
  },
  {
    icon: AlertTriangle,
    title: 'Low Segregation',
    description: 'Only 30% waste properly segregated',
    color: 'text-yellow-500',
  },
  {
    icon: Landmark,
    title: 'E-waste Growth',
    description: 'Rapid increase in electronic waste',
    color: 'text-purple-500',
  },
]

export default function ProblemOverview() {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Waste Management Challenge
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            India faces a massive waste management crisis. Urbanization and population growth
            have led to unprecedented waste generation, overwhelming existing infrastructure.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover className="text-center">
                <div className={`${problem.color} mb-4 flex justify-center`}>
                  <problem.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

