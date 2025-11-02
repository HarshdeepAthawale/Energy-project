import Link from 'next/link'
import { Recycle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-300 mt-auto border-t dark:border-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">EcoBin</span>
            </div>
            <p className="text-sm">
              Transforming waste management through technology and community engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solution" className="hover:text-primary-blue transition-colors">
                  Our Solution
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-primary-blue transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="hover:text-primary-blue transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/pickup/schedule" className="hover:text-primary-blue transition-colors">
                  Schedule Pickup
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="hover:text-primary-blue transition-colors">
                  Rewards
                </Link>
              </li>
              <li>
                <Link href="/chatbot" className="hover:text-primary-blue transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-950 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EcoBin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

