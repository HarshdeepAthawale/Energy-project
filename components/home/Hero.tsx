'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Globe } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-green via-green-500 to-primary-blue text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
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
            <Globe className="w-16 h-16" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Smart Waste, Clean Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto text-balance">
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
              <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-green">
                Join the Movement
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

