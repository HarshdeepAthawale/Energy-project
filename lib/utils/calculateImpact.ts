/**
 * Calculate CO2 saved based on waste collected (kg)
 * Assumes: 1 kg of properly segregated waste saves ~0.15 kg CO2
 */
export function calculateCO2Saved(wasteCollected: number): number {
  return Math.round((wasteCollected * 0.15) * 100) / 100
}

/**
 * Calculate eco tokens earned based on waste type and amount
 */
export function calculateEcoTokens(wasteType: string[], amountKg: number): number {
  const baseTokensPerKg = 2
  const typeMultipliers: Record<string, number> = {
    'dry': 1.0,
    'wet': 1.0,
    'e-waste': 3.0,
    'hazardous': 2.5,
    'mixed': 0.5,
  }
  
  const maxMultiplier = Math.max(
    ...wasteType.map((type) => typeMultipliers[type] || 1.0)
  )
  
  return Math.round(amountKg * baseTokensPerKg * maxMultiplier)
}

/**
 * Calculate segregation accuracy percentage
 */
export function calculateSegregationAccuracy(correct: number, total: number): number {
  if (total === 0) return 0
  return Math.round((correct / total) * 100 * 10) / 10
}

