'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { CheckCircle, AlertCircle, Leaf } from 'lucide-react'

const segregationTips = [
  {
    category: 'Wet Waste (Organic)',
    items: [
      'Food scraps and leftovers',
      'Fruit and vegetable peels',
      'Tea leaves and coffee grounds',
      'Egg shells',
      'Garden waste and leaves',
    ],
    icon: '🍃',
  },
  {
    category: 'Dry Waste (Recyclable)',
    items: [
      'Paper and cardboard',
      'Plastic bottles and containers',
      'Metal cans and foil',
      'Glass bottles and jars',
      'Textiles and fabrics',
    ],
    icon: '♻️',
  },
  {
    category: 'E-Waste',
    items: [
      'Mobile phones and chargers',
      'Computers and laptops',
      'Batteries',
      'Electronic appliances',
      'Cables and wires',
    ],
    icon: '🔌',
  },
  {
    category: 'Hazardous Waste',
    items: [
      'Medical waste',
      'Chemical containers',
      'Paints and solvents',
      'Batteries (if not e-waste)',
      'Fluorescent bulbs',
    ],
    icon: '⚠️',
  },
]

export default function LearnPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false)

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPledgeSubmitted(true)
    setTimeout(() => {
      setPledgeSubmitted(false)
      setName('')
      setEmail('')
    }, 5000)
  }

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
            Learn to Segregate
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proper waste segregation is the first step towards effective recycling and
            a sustainable future.
          </p>
        </motion.div>

        {/* Segregation Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Waste Segregation Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {segregationTips.map((tip, index) => (
              <motion.div
                key={tip.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{tip.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {tip.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {tip.items.map((item) => (
                      <li key={item} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Best Practices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card hover>
              <AlertCircle className="w-10 h-10 text-primary-green mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Rinse Before Disposal
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Clean containers and bottles before placing them in dry waste bins to prevent
                contamination and odors.
              </p>
            </Card>
            <Card hover>
              <AlertCircle className="w-10 h-10 text-primary-blue mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Separate at Source
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use separate bins for wet and dry waste at home to make collection and processing
                more efficient.
              </p>
            </Card>
            <Card hover>
              <AlertCircle className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Reduce and Reuse
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Before disposing, consider if items can be reused, repurposed, or donated to
                reduce waste generation.
              </p>
            </Card>
          </div>
        </section>

        {/* Green Pledge */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
              <div className="text-center mb-6">
                <Leaf className="w-16 h-16 text-primary-green mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Take the Green Pledge
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Commit to proper waste segregation and join thousands of environmentally
                  conscious citizens making a difference.
                </p>
              </div>
              {pledgeSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-primary-green mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Thank you for your commitment!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    You&apos;ve taken an important step towards a sustainable future.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePledgeSubmit} className="max-w-md mx-auto space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div className="text-left">
                    <label className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="checkbox"
                        required
                        className="mt-1"
                      />
                      <span>
                        I pledge to properly segregate waste and contribute to a cleaner environment.
                      </span>
                    </label>
                  </div>
                  <Button type="submit" variant="primary" className="w-full">
                    Take the Pledge
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

