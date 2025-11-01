import { Bin } from '@/types'

// Mock IoT bins with realistic data
export const mockBins: Bin[] = [
  {
    id: 'bin-001',
    location: {
      lat: 19.0760,
      lng: 72.8777,
      address: 'Andheri West, Mumbai',
    },
    fillLevel: 75,
    wasteType: 'dry',
    status: 'active',
    lastUpdated: new Date().toISOString(),
    capacity: 100,
    currentWeight: 75,
  },
  {
    id: 'bin-002',
    location: {
      lat: 19.2183,
      lng: 72.9781,
      address: 'Bandra East, Mumbai',
    },
    fillLevel: 92,
    wasteType: 'wet',
    status: 'full',
    lastUpdated: new Date(Date.now() - 300000).toISOString(),
    capacity: 150,
    currentWeight: 138,
  },
  {
    id: 'bin-003',
    location: {
      lat: 19.0760,
      lng: 72.8777,
      address: 'Powai, Mumbai',
    },
    fillLevel: 45,
    wasteType: 'dry',
    status: 'active',
    lastUpdated: new Date(Date.now() - 600000).toISOString(),
    capacity: 100,
    currentWeight: 45,
  },
  {
    id: 'bin-004',
    location: {
      lat: 19.1297,
      lng: 72.8310,
      address: 'Goregaon, Mumbai',
    },
    fillLevel: 88,
    wasteType: 'wet',
    status: 'full',
    lastUpdated: new Date(Date.now() - 180000).toISOString(),
    capacity: 120,
    currentWeight: 105.6,
  },
  {
    id: 'bin-005',
    location: {
      lat: 19.1587,
      lng: 72.9302,
      address: 'Malad West, Mumbai',
    },
    fillLevel: 30,
    wasteType: 'e-waste',
    status: 'active',
    lastUpdated: new Date(Date.now() - 120000).toISOString(),
    capacity: 80,
    currentWeight: 24,
  },
  {
    id: 'bin-006',
    location: {
      lat: 19.0758,
      lng: 72.8775,
      address: 'Juhu, Mumbai',
    },
    fillLevel: 65,
    wasteType: 'dry',
    status: 'active',
    lastUpdated: new Date(Date.now() - 90000).toISOString(),
    capacity: 100,
    currentWeight: 65,
  },
  {
    id: 'bin-007',
    location: {
      lat: 19.1404,
      lng: 72.8442,
      address: 'Kandivali, Mumbai',
    },
    fillLevel: 50,
    wasteType: 'wet',
    status: 'active',
    lastUpdated: new Date(Date.now() - 240000).toISOString(),
    capacity: 150,
    currentWeight: 75,
  },
  {
    id: 'bin-008',
    location: {
      lat: 19.1769,
      lng: 72.9523,
      address: 'Borivali, Mumbai',
    },
    fillLevel: 95,
    wasteType: 'dry',
    status: 'full',
    lastUpdated: new Date(Date.now() - 150000).toISOString(),
    capacity: 100,
    currentWeight: 95,
  },
]

// Function to simulate real-time updates
export function getUpdatedBins(): Bin[] {
  return mockBins.map((bin) => {
    // Simulate random fill level changes
    const change = (Math.random() - 0.5) * 5 // -2.5 to +2.5
    const newFillLevel = Math.max(0, Math.min(100, bin.fillLevel + change))
    
    return {
      ...bin,
      fillLevel: Math.round(newFillLevel),
      currentWeight: Math.round((newFillLevel / 100) * bin.capacity),
      status: newFillLevel >= 90 ? 'full' : newFillLevel <= 10 ? 'active' : bin.status,
      lastUpdated: new Date().toISOString(),
    }
  })
}

