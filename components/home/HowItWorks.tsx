'use client'

import { motion } from 'framer-motion'
import { Recycle, Route, Brain, Gift } from 'lucide-react'
import Card from '../ui/Card'

const steps = [
  {
    icon: Recycle,
    title: 'Smart Bins',
    description: 'IoT-enabled bins monitor fill levels and waste types in real-time',
    color: 'bg-green-100 dark:bg-green-900/20 text-primary-green',
  },
  {
    icon: Route,
    title: 'Optimized Routes',
    description: 'AI-powered route optimization ensures efficient waste collection',
    color: 'bg-blue-100 dark:bg-blue-900/20 text-primary-blue',
  },
  {
    icon: Brain,
    title: 'AI Sorting',
    description: 'Machine learning algorithms automatically categorize and sort waste',
    color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600',
  },
  {
    icon: Gift,
    title: 'Reward System',
    description: 'Earn eco-tokens for proper segregation and redeem for rewards',
    color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A simple, efficient process from waste generation to recycling
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover className="text-center relative">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300 dark:text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
                <div className="mt-4 text-2xl font-bold text-gray-300 dark:text-gray-600">
                  {index + 1}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

