import { Stats } from '@/types'

export const mockStats: Stats = {
  totalPickups: 1245,
  totalWasteCollected: 45230, // kg
  co2Saved: 6784.5, // kg
  segregationAccuracy: 87.5, // percentage
  activeBins: 8,
  weeklyCollection: [
    { date: '2024-03-04', amount: 1250 },
    { date: '2024-03-05', amount: 1380 },
    { date: '2024-03-06', amount: 1120 },
    { date: '2024-03-07', amount: 1450 },
    { date: '2024-03-08', amount: 1620 },
    { date: '2024-03-09', amount: 1390 },
    { date: '2024-03-10', amount: 1480 },
  ],
  monthlyCollection: [
    { month: 'Nov 2023', amount: 18500 },
    { month: 'Dec 2023', amount: 21500 },
    { month: 'Jan 2024', amount: 23800 },
    { month: 'Feb 2024', amount: 26700 },
    { month: 'Mar 2024', amount: 45230 },
  ],
}

