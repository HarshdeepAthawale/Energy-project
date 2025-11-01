import { Pickup, Route } from '@/types'

/**
 * Mock route optimization algorithm
 * In production, this would use actual routing algorithms like TSP or VRP
 */
export function optimizeRoute(pickups: Pickup[]): Route {
  // Simple mock: calculate total distance and time based on number of waypoints
  const waypoints = pickups.map((pickup) => ({
    lat: pickup.address.coordinates.lat,
    lng: pickup.address.coordinates.lng,
    address: `${pickup.address.street}, ${pickup.address.city}`,
  }))

  // Mock distance calculation (rough estimate: ~5km between each point)
  const distance = waypoints.length > 1 ? (waypoints.length - 1) * 5 : 0
  
  // Mock time calculation (assume ~25 minutes per 5km + 10 minutes per stop)
  const estimatedTime = Math.round(distance * 5 + waypoints.length * 10)

  return {
    waypoints,
    distance: Math.round(distance * 10) / 10,
    estimatedTime,
  }
}

/**
 * Get optimized route for a single pickup (for confirmation page)
 */
export function getSinglePickupRoute(pickup: Pickup): Route {
  return {
    waypoints: [
      {
        lat: pickup.address.coordinates.lat,
        lng: pickup.address.coordinates.lng,
        address: `${pickup.address.street}, ${pickup.address.city}`,
      },
    ],
    distance: 0,
    estimatedTime: 0,
  }
}

