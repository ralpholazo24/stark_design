
import { DayData, UserStats } from './types';

export const DAILY_GOAL = 10000;

export const MOCK_HISTORY: DayData[] = Array.from({ length: 30 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (29 - i));
  const steps = Math.floor(Math.random() * 5000) + 7000;
  return {
    date: d.toISOString().split('T')[0],
    steps,
    goal: DAILY_GOAL,
    completed: steps >= DAILY_GOAL
  };
});

export const MOCK_STATS: UserStats = {
  currentStreak: 12,
  bestStreak: 24,
  totalSteps: 452901,
  averageSteps: 11240,
  goalMetCount: 184
};

export const NAVIGATION_ITEMS = [
  { label: '01_DASH', view: 'DASHBOARD' },
  { label: '02_STATS', view: 'STATS' },
  { label: '03_CALENDAR', view: 'CALENDAR' },
  { label: '04_SETTINGS', view: 'SETTINGS' }
];
