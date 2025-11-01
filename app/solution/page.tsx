'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { Recycle, Route, Brain, Gift, CheckCircle } from 'lucide-react'

const solutions = [
  {
    icon: Recycle,
    title: 'Smart Bins',
    description: 'IoT-enabled bins equipped with sensors to monitor fill levels, waste types, and operational status in real-time. Automatic alerts when bins are full, enabling proactive collection scheduling.',
    features: [
      'Real-time fill level monitoring',
      'GPS tracking and location services',
      'Automatic status updates',
      'Multiple waste type compartments',
    ],
    color: 'bg-blue-100 dark:bg-blue-900/20 text-primary-blue',
  },
  {
    icon: Route,
    title: 'Optimized Pickup Routes',
    description: 'AI-powered route optimization algorithms analyze bin locations, traffic patterns, and collection schedules to create the most efficient pickup routes. Reduces fuel consumption and operational costs.',
    features: [
      'Dynamic route generation',
      'Traffic-aware scheduling',
      'Multi-vehicle coordination',
      'Real-time route adjustments',
    ],
    color: 'bg-blue-100 dark:bg-blue-900/20 text-primary-blue',
  },
  {
    icon: Brain,
    title: 'AI Waste Sorting',
    description: 'Machine learning algorithms automatically categorize waste at collection points. Computer vision and pattern recognition ensure accurate segregation, improving recycling rates significantly.',
    features: [
      'Automated waste categorization',
      'Computer vision integration',
      'Continuous learning system',
      'Quality assurance checks',
    ],
    color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600',
  },
  {
    icon: Gift,
    title: 'Reward System',
    description: 'Gamified experience where users earn eco-tokens for proper waste segregation and participation. Redeem tokens for discounts, donations to environmental causes, or special rewards.',
    features: [
      'Eco-token earning system',
      'Leaderboard rankings',
      'Redeemable rewards',
      'Achievement badges',
    ],
    color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600',
  },
]

export default function SolutionPage() {
  return (
    <div className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Solution
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive, technology-driven approach combining IoT, AI, and community
            engagement to transform waste management.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="space-y-12 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="overflow-hidden">
                <div className="md:flex md:items-start md:space-x-6">
                  <div className={`${solution.color} w-20 h-20 rounded-xl flex items-center justify-center mb-6 md:mb-0 flex-shrink-0`}>
                    <solution.icon className="w-10 h-10" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {solution.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {solution.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary-blue/10 to-primary-blue/10 dark:from-primary-blue/20 dark:to-primary-blue/20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Combined Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-blue mb-2">30%</div>
                <div className="text-gray-700 dark:text-gray-300">Reduction in Collection Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-blue mb-2">87.5%</div>
                <div className="text-gray-700 dark:text-gray-300">Segregation Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">6.7K+</div>
                <div className="text-gray-700 dark:text-gray-300">kg CO₂ Saved</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

