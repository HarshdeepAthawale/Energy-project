import { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  style?: CSSProperties
}

export default function Card({ children, className = '', hover = false, style }: CardProps) {
  return (
    <div className={`card ${hover ? 'card-hover' : ''} ${className}`} style={style}>
      {children}
    </div>
  )
}

