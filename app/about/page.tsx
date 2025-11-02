'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { Target, Eye } from 'lucide-react'

export default function AboutPage() {
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
            About EcoBin
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
              <Target className="w-10 h-10 text-black dark:text-white mr-3" />
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
              <Eye className="w-10 h-10 text-black dark:text-white mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To become India&apos;s leading waste management platform, achieving{' '}
              <strong>90%+ waste segregation accuracy</strong> and establishing a circular
              economy model. We envision a future where technology and community collaboration
              eliminate waste management challenges across urban and rural India.
            </p>
          </Card>
        </section>
      </div>
    </div>
  )
}

