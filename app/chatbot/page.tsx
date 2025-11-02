'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { Send, Bot, User } from 'lucide-react'
import Button from '@/components/ui/Button'

interface Message {
  role: 'user' | 'bot'
  content: string
}

const faqResponses: Record<string, string> = {
  pickup: 'You can schedule a pickup by visiting the "Schedule Pickup" page. Fill in your address, waste type, and preferred time, and we\'ll assign a truck to collect your waste.',
  rewards: 'You earn eco-tokens by properly segregating waste and scheduling pickups. Each successful pickup earns tokens based on waste type and amount. Check your rewards page to see your balance and redeem options.',
  segregation: 'Proper segregation means separating wet waste (organic), dry waste (recyclable), e-waste, and hazardous materials into different bins. Visit our "Learn" page for detailed guidelines.',
  bins: 'Smart bins are IoT-enabled waste containers that monitor fill levels in real-time. You can view bin status on the dashboard.',
  eco: 'Eco-tokens are rewards you earn for sustainable waste management practices. You can redeem them for discounts, donations to environmental causes, or special rewards.',
  default: 'I can help you with information about pickups, rewards, waste segregation, smart bins, and eco-tokens. What would you like to know?',
}

function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('pickup') || lowerMessage.includes('schedule') || lowerMessage.includes('collect')) {
    return faqResponses.pickup
  }
  if (lowerMessage.includes('reward') || lowerMessage.includes('token') || lowerMessage.includes('eco')) {
    return faqResponses.rewards
  }
  if (lowerMessage.includes('segregate') || lowerMessage.includes('separate') || lowerMessage.includes('sort')) {
    return faqResponses.segregation
  }
  if (lowerMessage.includes('bin') || lowerMessage.includes('container')) {
    return faqResponses.bins
  }
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('help')) {
    return faqResponses.default
  }
  
  return faqResponses.default
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: 'Hello! I\'m the EcoBin assistant. I can help you with information about pickups, rewards, waste segregation, and more. How can I assist you today?',
    },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        role: 'bot',
        content: getBotResponse(input),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 500)
  }

  const handleQuickAction = (query: string) => {
    setInput(query)
    setTimeout(() => {
      const userMessage: Message = { role: 'user', content: query }
      setMessages((prev) => [...prev, userMessage])
      
      setTimeout(() => {
        const botResponse: Message = {
          role: 'bot',
          content: getBotResponse(query),
        }
        setMessages((prev) => [...prev, botResponse])
      }, 500)
    }, 100)
  }

  return (
    <div className="py-16 bg-gray-50 dark:bg-black min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Chat Support
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ask me anything about waste management, pickups, rewards, or our platform
          </p>
        </motion.div>

        <Card className="p-0 overflow-hidden flex flex-col" style={{ height: '600px' }}>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 dark:bg-black">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start space-x-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'bot' && (
                  <div className="bg-primary-blue/20 p-2 rounded-full">
                    <Bot className="w-5 h-5 text-primary-blue" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-xl p-4 ${
                    message.role === 'user'
                      ? 'bg-primary-blue text-white'
                      : 'bg-white dark:bg-gray-950 text-gray-900 dark:text-white border dark:border-gray-900'
                  }`}
                >
                  <p>{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <div className="bg-primary-blue/20 p-2 rounded-full">
                    <User className="w-5 h-5 text-primary-blue" />
                  </div>
                )}
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="border-t border-gray-200 dark:border-gray-950 p-4 bg-white dark:bg-black">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Quick questions:</span>
              {['How to schedule pickup?', 'What are eco-tokens?', 'How to segregate waste?'].map(
                (query) => (
                  <button
                    key={query}
                    onClick={() => handleQuickAction(query)}
                    className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-950 hover:bg-gray-200 dark:hover:bg-gray-900 rounded-full text-gray-700 dark:text-gray-300 transition-colors border dark:border-gray-900"
                  >
                    {query}
                  </button>
                )
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-900 rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white dark:bg-gray-950 text-gray-900 dark:text-white"
              />
              <Button type="submit" variant="primary" className="flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">Send</span>
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  )
}

