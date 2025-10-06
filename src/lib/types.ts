export interface Habit {
  id: number;
  name: string;
  completed: boolean;
  streak: number;
  category: 'spiritual' | 'physical' | 'mental' | 'financial';
  difficulty: 'easy' | 'medium' | 'hard';
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'anytime';
}

export interface Quote {
  text: string;
  author: string;
  category: 'motivation' | 'spiritual' | 'wealth' | 'discipline';
}

export interface Affirmation {
  text: string;
  category: 'abundance' | 'strength' | 'faith' | 'success';
}

export interface WealthPrinciple {
  title: string;
  description: string;
  author: string;
  category: 'investment' | 'mindset' | 'strategy' | 'discipline';
}

export interface SpiritualPractice {
  name: string;
  duration: number; // in minutes
  description: string;
  benefits: string[];
}