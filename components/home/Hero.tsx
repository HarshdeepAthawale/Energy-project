'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Globe } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center mb-6"
          >
            <Globe className="w-16 h-16 text-gray-900 dark:text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-gray-900 dark:text-white">
            EcoBin - Clean Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-balance">
            Transforming waste management through IoT integration, AI-powered sorting,
            and community rewards for a sustainable tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/pickup/schedule">
              <Button variant="secondary" className="flex items-center space-x-2">
                <span>Request Pickup</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/learn">
              <Button variant="outline" className="border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black">
                Join the Movement
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

