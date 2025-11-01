'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { Target, Eye, Clock, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const timeline = [
    {
      year: '2023',
      event: 'Platform Launch',
      description: 'Started with pilot program in Mumbai',
    },
    {
      year: '2024 Q1',
      event: 'IoT Integration',
      description: 'Deployed 100+ smart bins across the city',
    },
    {
      year: '2024 Q2',
      event: 'AI Sorting',
      description: 'Implemented ML-based waste categorization',
    },
    {
      year: '2024 Q3',
      event: 'Community Expansion',
      description: 'Reached 1000+ active users',
    },
  ]

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About SmartWaste
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are on a mission to transform waste management in India through
            innovative technology and community engagement.
          </p>
        </motion.div>

        {/* Problem Statement */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Problem
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                India generates approximately <strong>62 million tons</strong> of waste annually,
                with only about <strong>30%</strong> being properly processed. Urban areas face
                critical challenges:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Overflowing landfills causing environmental degradation</li>
                <li>Improper waste segregation leading to reduced recycling rates</li>
                <li>Inefficient collection routes increasing operational costs</li>
                <li>Lack of community awareness and engagement</li>
                <li>Rapid growth in e-waste and hazardous materials</li>
              </ul>
              <p>
                Without intervention, this problem will continue to escalate, threatening public
                health and environmental sustainability.
              </p>
            </div>
          </Card>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card hover>
            <div className="flex items-center mb-4">
              <Target className="w-10 h-10 text-primary-green mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To revolutionize waste management in India by combining IoT technology, AI-powered
              sorting, and community-driven initiatives. We aim to create a sustainable ecosystem
              where waste is viewed as a resource, and every citizen is empowered to make a
              positive environmental impact.
            </p>
          </Card>
          <Card hover>
            <div className="flex items-center mb-4">
              <Eye className="w-10 h-10 text-primary-blue mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To become India&apos;s leading smart waste management platform, achieving{' '}
              <strong>90%+ waste segregation accuracy</strong> and establishing a circular
              economy model. We envision a future where technology and community collaboration
              eliminate waste management challenges across urban and rural India.
            </p>
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Journey
          </h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-lg font-semibold text-primary-blue">{item.year}</span>
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.event}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Achievements */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card hover>
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-primary-green mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  87.5% Segregation Accuracy
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Significantly above industry average through AI-powered sorting and community
                education.
              </p>
            </Card>
            <Card hover>
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-primary-blue mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  30% Route Optimization
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Reduced collection time and fuel consumption through intelligent routing algorithms.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

