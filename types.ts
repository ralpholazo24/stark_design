
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  STATS = 'STATS',
  CALENDAR = 'CALENDAR',
  SETTINGS = 'SETTINGS',
  DESIGN_SYSTEM = 'DESIGN_SYSTEM'
}

export interface DayData {
  date: string;
  steps: number;
  goal: number;
  completed: boolean;
}

export interface UserStats {
  currentStreak: number;
  bestStreak: number;
  totalSteps: number;
  averageSteps: number;
  goalMetCount: number;
}
