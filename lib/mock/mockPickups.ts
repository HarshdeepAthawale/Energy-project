import { Pickup } from '@/types'

export const mockPickups: Pickup[] = [
  {
    id: 'pickup-001',
    userId: '1',
    address: {
      street: '123 Main Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400053',
      coordinates: {
        lat: 19.0760,
        lng: 72.8777,
      },
    },
    wasteType: ['dry', 'wet'],
    scheduledDate: '2024-03-15',
    scheduledTime: '10:00 AM',
    status: 'scheduled',
    truckId: 'truck-001',
    route: {
      waypoints: [
        {
          lat: 19.0760,
          lng: 72.8777,
          address: '123 Main Street, Mumbai',
        },
        {
          lat: 19.1297,
          lng: 72.8310,
          address: '456 Oak Avenue, Mumbai',
        },
      ],
      distance: 12.5,
      estimatedTime: 35,
    },
    ecoTokensEarned: 50,
    createdAt: '2024-03-10T10:00:00Z',
  },
  {
    id: 'pickup-002',
    userId: '2',
    address: {
      street: '789 Business Park',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400069',
      coordinates: {
        lat: 19.1587,
        lng: 72.9302,
      },
    },
    wasteType: ['dry', 'e-waste'],
    scheduledDate: '2024-03-16',
    scheduledTime: '2:00 PM',
    status: 'pending',
    ecoTokensEarned: 0,
    createdAt: '2024-03-12T14:30:00Z',
  },
  {
    id: 'pickup-003',
    userId: '1',
    address: {
      street: '321 Residential Complex',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400053',
      coordinates: {
        lat: 19.2183,
        lng: 72.9781,
      },
    },
    wasteType: ['wet'],
    scheduledDate: '2024-03-14',
    scheduledTime: '9:00 AM',
    status: 'completed',
    truckId: 'truck-002',
    ecoTokensEarned: 30,
    createdAt: '2024-03-08T09:00:00Z',
  },
]

