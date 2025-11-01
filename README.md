# Smart Waste Management Platform

A modern, AI-powered waste management platform built with Next.js, TypeScript, and Tailwind CSS. This platform promotes sustainable waste disposal through IoT integration, AI-based sorting visualization, and community reward systems.

## Features

- 🏠 **Homepage**: Hero section, stats, problem overview, and how it works
- 📊 **Dashboard**: Real-time analytics, bin status monitoring, pickup tracking
- 🗑️ **Smart Bins**: IoT-enabled bin monitoring with real-time fill levels
- 📅 **Pickup Scheduling**: Easy waste pickup request system
- 🎁 **Rewards System**: Earn eco-tokens for sustainable practices
- 📚 **Educational Content**: Learn about waste segregation
- 💬 **Chatbot**: AI assistant for platform queries
- 🌙 **Dark Mode**: Full dark/light theme support

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Charts**: Recharts
- **Maps**: Google Maps API (ready for integration)
- **Icons**: Lucide React
- **Backend**: Node.js + Express (mock data)
- **Authentication**: Mock authentication system

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Google Maps API key (optional, for map features)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Energy project"
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Optional: Run Backend Server

The backend API server is optional (uses mock data by default). To run it:

```bash
npm run server
```

This will start the Express server on port 3001.

## Project Structure

```
/
├── app/                    # Next.js app router pages
│   ├── (auth)/            # Authentication pages
│   ├── about/             # About page
│   ├── solution/          # Solution page
│   ├── dashboard/         # Dashboard pages
│   ├── pickup/            # Pickup scheduling
│   ├── rewards/           # Rewards page
│   ├── learn/             # Educational content
│   ├── chatbot/           # Chatbot page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── home/             # Homepage components
│   └── dashboard/        # Dashboard components
├── lib/                   # Utilities and helpers
│   ├── auth/             # Authentication logic
│   ├── mock/             # Mock data
│   └── utils/            # Utility functions
├── server/               # Express backend
│   └── api/              # API routes
├── types/                # TypeScript types
└── public/               # Static assets
```

## Mock Accounts

For testing, you can use these mock accounts:

- **Resident**: john@example.com (any password)
- **Business**: jane@example.com (any password)
- **Admin**: admin@example.com (any password)

## Features Overview

### Dashboard
- Real-time waste collection statistics
- CO₂ reduction tracking
- Segregation accuracy metrics
- Bin status monitoring
- Pickup scheduling and tracking

### Smart Bins
- IoT-enabled monitoring
- Real-time fill level updates
- Waste type categorization
- Location tracking

### Pickup Scheduling
- Easy request form
- Route optimization visualization
- Status tracking
- Eco-token rewards

### Rewards System
- Eco-token earning
- Leaderboard rankings
- Redeemable rewards
- Achievement tracking

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run server` - Start Express backend server

## Environment Variables

- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Google Maps API key for map features
- `PORT` - Backend server port (default: 3001)

## Future Enhancements

- MongoDB database integration
- Real-time IoT data streams
- Firebase authentication
- Payment gateway for rewards
- Mobile app version
- Advanced route optimization algorithms

## License

This project is open source and available for educational purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

