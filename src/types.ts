export type PageId =
  | 'home'
  | 'facility'
  | 'coaches'
  | 'programs'
  | 'seasonal'
  | 'membership'
  | 'pulse'
  | 'stories'
  | 'faqs'
  | 'join';

export interface Coach {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experienceYears: number;
  sentimentQuote: string; // Paraphrased real review sentiment
  focusAreas: string[];
  bio: string;
}

export interface Program {
  id: string;
  name: string;
  subtitle: string;
  timelineSlot: string;
  description: string;
  deliverables: string[];
  coaches: string[];
  intensity: 'Balanced' | 'High-Skill' | 'Maximum Intensity' | 'Adaptive';
}

export interface MemberStory {
  id: string;
  name: string;
  occupation: string;
  tenure: string;
  coach: string;
  headline: string;
  narrative: string;
  keyMetric: string;
  metricLabel: string;
}

export interface OccupancyHour {
  hour: number;
  label: string;
  typicalLevel: number; // 0 - 100
  currentStatus?: 'Quiet' | 'Moderate' | 'Peak' | 'Busier Than Usual';
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Access' | 'Coaching' | 'CrossFit' | 'Ramadan' | 'Membership';
}
