export type UserRole = 'resident' | 'business' | 'admin'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  ecoTokens: number
  joinDate: string
  participationCount: number
}

export type WasteType = 'wet' | 'dry' | 'e-waste' | 'hazardous' | 'mixed'

export interface Bin {
  id: string
  location: {
    lat: number
    lng: number
    address: string
  }
  fillLevel: number // 0-100
  wasteType: WasteType
  status: 'active' | 'full' | 'maintenance'
  lastUpdated: string
  capacity: number // in kg
  currentWeight: number // in kg
}

export type PickupStatus = 'pending' | 'scheduled' | 'in-progress' | 'completed' | 'cancelled'

export interface Pickup {
  id: string
  userId: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  wasteType: WasteType[]
  scheduledDate: string
  scheduledTime: string
  status: PickupStatus
  truckId?: string
  route?: Route
  ecoTokensEarned?: number
  createdAt: string
}

export interface Route {
  waypoints: Array<{
    lat: number
    lng: number
    address: string
  }>
  distance: number // in km
  estimatedTime: number // in minutes
}

export interface Stats {
  totalPickups: number
  totalWasteCollected: number // in kg
  co2Saved: number // in kg
  segregationAccuracy: number // percentage
  activeBins: number
  weeklyCollection: Array<{
    date: string
    amount: number
  }>
  monthlyCollection: Array<{
    month: string
    amount: number
  }>
}

export interface LeaderboardEntry {
  userId: string
  userName: string
  ecoTokens: number
  pickupsCompleted: number
  rank: number
}

