import { Coach, Program, MemberStory, OccupancyHour, FAQItem } from '../types';
import heroImg from '../assets/images/xtreme_facility_hero_1790495728634.jpg';
import coachingImg from '../assets/images/form_coaching_spotting_1790495740486.jpg';
import crossfitImg from '../assets/images/crossfit_athletic_training_1790495754112.jpg';
import bootcampImg from '../assets/images/ramadan_bootcamp_session_1790495766915.jpg';
import lateNightImg from '../assets/images/latenight_serene_gym_1790495779268.jpg';

export const GYM_INFO = {
  name: 'Xtreme Fitness',
  location: 'DHA Phase 8 - Ex Air Avenue, Block M Air Avenue, Lahore, Pakistan',
  phone: '+92 336 4255323',
  whatsappRaw: '923364255323',
  rating: 4.8,
  reviewCount: 274,
  hours: 'Open 24 Hours · 7 Days a Week',
  tagline: 'Precision Strength & Round-the-Clock Athletic Discipline',
  city: 'Lahore',
  neighborhood: 'DHA Phase 8 (Block M Air Avenue)',
};

export const IMAGES = {
  hero: heroImg,
  coaching: coachingImg,
  crossfit: crossfitImg,
  bootcamp: bootcampImg,
  lateNight: lateNightImg,
  fallbacks: {
    hero: [
      './images/xtreme_facility_hero_1790495728634.jpg',
      '/images/xtreme_facility_hero_1790495728634.jpg',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80',
    ],
    coaching: [
      './images/form_coaching_spotting_1790495740486.jpg',
      '/images/form_coaching_spotting_1790495740486.jpg',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=80',
    ],
    crossfit: [
      './images/crossfit_athletic_training_1790495754112.jpg',
      '/images/crossfit_athletic_training_1790495754112.jpg',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80',
    ],
    bootcamp: [
      './images/ramadan_bootcamp_session_1790495766915.jpg',
      '/images/ramadan_bootcamp_session_1790495766915.jpg',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80',
    ],
    lateNight: [
      './images/latenight_serene_gym_1790495779268.jpg',
      '/images/latenight_serene_gym_1790495779268.jpg',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1600&q=80',
    ],
  },
};

export const COACHES: Coach[] = [
  {
    id: 'abdul-raheem',
    name: 'Abdul Raheem',
    role: 'Head of Strength & Biomechanical Coaching',
    specialty: 'Powerlifting, Progressive Overload & Correct-Form Coaching',
    experienceYears: 9,
    sentimentQuote:
      'Celebrated by athletes across DHA for uncompromising form correction, attentive spotting, and building sustainable, injury-free personal records through technical discipline.',
    focusAreas: ['Barbell Trajectory Analysis', 'Spinal Mechanics & Spotting', 'Progressive Hypertrophy', 'Rehabilitative Lifting'],
    bio: 'Abdul Raheem leads our lifting floor with an exacting standard for human movement. Rather than rushing athletes into reckless loads, his coaching breaks down foot pressure, hip hinges, and bar speed, ensuring every repetition builds bone density and functional strength.',
  },
  {
    id: 'mehwish',
    name: 'Coach Mehwish',
    role: 'Senior Performance Coach & Female Strength Lead',
    specialty: 'Female Functional Strength, Postural Alignment & Metabolic Conditioning',
    experienceYears: 7,
    sentimentQuote:
      'Praised consistently for creating an empowering, focused environment where athletes master heavy compound movements with poise, steady encouragement, and zero intimidation.',
    focusAreas: ['Compound Movement Mastery', 'Postural Restoration', 'Kettlebell Dynamics', 'Long-Term Athletic Longevity'],
    bio: 'Coach Mehwish has transformed the lifting culture for women in DHA Lahore. Combining clinical patience with athletic rigor, she guides members from foundational bodyweight balance to calibrated barbell deadlifts, instilling genuine self-reliance under the bar.',
  },
  {
    id: 'mishel',
    name: 'Coach Mishel',
    role: 'CrossFit Coordinator & High-Intensity Conditioning Lead',
    specialty: 'CrossFit Mechanics, Aerobic Capacity & High-Output Circuits',
    experienceYears: 8,
    sentimentQuote:
      'Known for an infectious, relentless energy that turns grueling high-skill conditioning workouts into a seamless daily discipline while maintaining rigorous movement standards.',
    focusAreas: ['CrossFit Gymnastics & Pacing', 'Metabolic Engine Building', 'Olympic Barbell Cycling', 'Ramadan Conditioning Protocols'],
    bio: 'Mishel brings an authentic athletic spirit to Xtreme Fitness. He orchestrates our CrossFit floor with an acute eye on movement economy, ensuring that heart rate and technical precision stay balanced even during the most demanding workout of the day (WOD).',
  },
];

export const PROGRAMS: Program[] = [
  {
    id: 'personal-training',
    name: 'Personal Strength Coaching',
    subtitle: '1-on-1 Biomechanical Mentorship with Dedicated Specialists',
    timelineSlot: '05:00 — 23:00 Flexible Booking',
    description:
      'Individualized training under the direct supervision of Mehwish, Mishel, or Abdul Raheem. Every rep is observed, spotted, and logged for steady progressive overload without joint wear.',
    deliverables: [
      'Comprehensive movement & mobility screening',
      'Personalized periodization program updated weekly',
      'Hands-on spotting and active biomechanical feedback',
      'Macro and hydration guidance tuned to your daily schedule',
    ],
    coaches: ['Abdul Raheem', 'Coach Mehwish', 'Coach Mishel'],
    intensity: 'Adaptive',
  },
  {
    id: 'crossfit-conditioning',
    name: 'CrossFit & Functional Athletics',
    subtitle: 'Barbell Cycling, Gymnastics & Metabolic Capacity',
    timelineSlot: '07:00, 18:30, 20:30 Daily WODs',
    description:
      'High-velocity athletic training designed for resilience and power. Structured on our dedicated turf track and competition rigs with rogue-grade bumper plates and concept ergs.',
    deliverables: [
      'Daily scaled Workouts of the Day (WOD)',
      'Olympic weightlifting technique drills',
      'High-capacity row, bike, and ski-erg conditioning',
      'Team workouts fostering camaraderie and accountability',
    ],
    coaches: ['Coach Mishel', 'Abdul Raheem'],
    intensity: 'Maximum Intensity',
  },
  {
    id: 'group-classes',
    name: 'Athletic Conditioning & Core',
    subtitle: 'High-Tempo Strength Circuits & Cardiovascular Stamina',
    timelineSlot: '06:30, 11:00, 19:30 Daily',
    description:
      'Small group training designed to elevate work capacity. We combine kettlebells, sled pushes, and targeted core stabilization in an energetic yet disciplined group atmosphere.',
    deliverables: [
      'Capped group sizes for individual coach oversight',
      'Compound kettlebell and sandbag functional work',
      'Heart rate zone conditioning and active recovery protocols',
      'Supportive community of dedicated DHA Phase 8 athletes',
    ],
    coaches: ['Coach Mehwish', 'Coach Mishel'],
    intensity: 'Balanced',
  },
  {
    id: 'strength-conditioning',
    name: 'Open Barbell & Heavy Conditioning',
    subtitle: 'Unrestricted 24-Hour Floor Access for Disciplined Lifters',
    timelineSlot: '24 Hours Continuous Access',
    description:
      'For self-directed athletes who demand serious equipment at any hour of the day or night. Calibrated iron, deadlift platforms, monolifts, and dumbbells up to 60kg.',
    deliverables: [
      'Biometric round-the-clock facility access',
      'Uncrowded early-morning and midnight training windows',
      'Chalk-friendly competition-spec platforms',
      'Spacious recovery zone with sauna and cold amenities',
    ],
    coaches: ['Floor Coaching Support On-Duty'],
    intensity: 'High-Skill',
  },
];

export const RAMADAN_BOOTCAMP = {
  year: '2026',
  title: 'Ramadan Boot Camp 2026: Fasting & Functional Strength',
  duration: '30 Days During the Holy Month',
  anchorLine:
    'Fasting should never mean surrendering athletic momentum. Our signature Ramadan Boot Camp synchronizes training volume, hydration windows, and recovery with the lunar schedule.',
  tracks: [
    {
      name: 'Pre-Suhoor Strength Cohort',
      timeSlot: '03:15 AM — 04:30 AM',
      focus: 'High-focus compound strength before the dawn fast, followed immediately by hydration and complex nutritional intake.',
    },
    {
      name: 'Post-Taraweeh Athletic Conditioning',
      timeSlot: '10:30 PM — 12:00 AM',
      focus: 'High-output metabolic conditioning and CrossFit WODs once the body is replenished post-iftar and evening prayers.',
    },
  ],
  pillars: [
    {
      title: 'Preserved Lean Muscle Mass',
      detail: 'Tailored tension protocols that signal muscle retention without driving systemic central nervous system exhaustion.',
    },
    {
      title: 'Chronobiological Scheduling',
      detail: 'Utilizing our 24-hour facility access so athletes train at their personal metabolic peaks rather than forced commercial hours.',
    },
    {
      title: 'Electrolyte & Nutrient Timing',
      detail: 'Nutritional protocols developed specifically for Lahore’s spring temperatures to maintain cellular hydration throughout fasting.',
    },
  ],
};

export const MEMBER_STORIES: MemberStory[] = [
  {
    id: 'story-1',
    name: 'Dr. Tariq M.',
    occupation: 'Cardiothoracic Surgeon, DHA Phase 6',
    tenure: 'Member for 18 Months',
    coach: 'Abdul Raheem',
    headline: 'Correcting a 10-year posture deficit and deadlifting pain-free at 48.',
    narrative:
      'With irregular operating theater hours, most gyms in Lahore locked their doors when my shifts ended. At Xtreme Fitness, 24-hour access was the initial hook, but Abdul Raheem’s biomechanical coaching is what transformed my physical health. He halted my tendency to rush weight, rebuilt my hinge mechanics from the ground up, and eliminated chronic lower back tension.',
    keyMetric: '+45kg',
    metricLabel: 'Controlled Barbell Deadlift',
  },
  {
    id: 'story-2',
    name: 'Amina S.',
    occupation: 'Creative Director & Mother of Two',
    tenure: 'Member for 14 Months',
    coach: 'Coach Mehwish',
    headline: 'Overcoming barbell hesitation to build genuine physical autonomy.',
    narrative:
      'I had always felt intimidated walking into commercial gym weight rooms. Coach Mehwish changed that on day one. She never threw generic slogans at me; she walked me through barbell positioning, scapular retraction, and steady progression. Today, walking into Xtreme Fitness feels like second nature, and my stamina throughout long workdays has doubled.',
    keyMetric: '14 Months',
    metricLabel: 'Continuous Lifting Consistency',
  },
  {
    id: 'story-3',
    name: 'Zayan K.',
    occupation: 'Software Engineer & Night Shift Lead',
    tenure: 'Member for 2 Years',
    coach: 'Coach Mishel',
    headline: 'Thriving on a 1:30 AM training rhythm without crowds or compromises.',
    narrative:
      'Working with US-based clients means my workday runs late into the night. Having a pristine, secure, fully equipped facility open at 1:30 AM in DHA Phase 8 is extraordinary. It is peaceful, the barbells are top-tier, and the community of late-night lifters is respectful and driven. Joining the Ramadan Boot Camp with Mishel proved I could fast and maintain peak physical strength simultaneously.',
    keyMetric: '274+',
    metricLabel: 'Midnight Workouts Logged',
  },
];

export const HOURLY_PULSE: OccupancyHour[] = [
  { hour: 0, label: '12:00 AM', typicalLevel: 24, description: 'Peaceful night training for shift workers & night owls' },
  { hour: 2, label: '02:00 AM', typicalLevel: 14, description: 'Quiet floor, pristine platforms, zero wait times' },
  { hour: 4, label: '04:00 AM', typicalLevel: 18, description: 'Early dawn lifters and pre-suhoor athletes' },
  { hour: 6, label: '06:00 AM', typicalLevel: 62, description: 'Morning executive rush & coached personal sessions' },
  { hour: 8, label: '08:00 AM', typicalLevel: 55, description: 'Cardio, mobility, and steady morning strength work' },
  { hour: 10, label: '10:00 AM', typicalLevel: 32, description: 'Calm morning lull, ideal for focused technique work' },
  { hour: 12, label: '12:00 PM', typicalLevel: 38, description: 'Midday mobility & quick lunchtime sessions' },
  { hour: 14, label: '02:00 PM', typicalLevel: 28, description: 'Serene afternoon training, coach consultations' },
  { hour: 16, label: '04:00 PM', typicalLevel: 52, description: 'Youth athletes and early evening warmup' },
  { hour: 18, label: '06:00 PM', typicalLevel: 88, currentStatus: 'Busier Than Usual', description: 'Peak evening strength hours & CrossFit WOD' },
  { hour: 20, label: '08:00 PM', typicalLevel: 94, currentStatus: 'Busier Than Usual', description: 'High-energy prime time; personal coaching active' },
  { hour: 22, label: '10:00 PM', typicalLevel: 60, description: 'Late-evening strength crowd & post-dinner sessions' },
];

export const FAQS: FAQItem[] = [
  {
    category: 'Access',
    question: 'Is Xtreme Fitness genuinely open 24 hours every day?',
    answer:
      'Yes. Xtreme Fitness operates 24 hours a day, 365 days a year—including weekends, national holidays, and throughout the Holy Month of Ramadan. Members enter via secure biometric access, and floor security and maintenance teams remain on-site round the clock.',
  },
  {
    category: 'Coaching',
    question: 'Do I need to book personal training sessions in advance?',
    answer:
      'Yes. Our coaches—Mehwish, Mishel, and Abdul Raheem—maintain strict athlete limits to guarantee individual focus. We recommend scheduling consultations in advance through WhatsApp (+92 336 4255323) to lock in your preferred training window.',
  },
  {
    category: 'CrossFit',
    question: 'Is the CrossFit program suitable if I have never lifted weights before?',
    answer:
      'Absolutely. Every CrossFit workout at Xtreme Fitness is designed with strict regression and progression tracks. Coach Mishel and our team teach movement mechanics first, ensuring you master foundational barbell positions and tempo before adding intensity.',
  },
  {
    category: 'Ramadan',
    question: 'What is included in the Ramadan Boot Camp 2026?',
    answer:
      'The Ramadan Boot Camp includes dedicated pre-suhoor (03:15 AM) and post-Taraweeh (10:30 PM) coached tracks, daily hydration and nutrition guidelines, mobility support, and weekly body composition check-ins to prevent muscle wasting during fasting.',
  },
  {
    category: 'Membership',
    question: 'Where is the facility located and is parking available?',
    answer:
      'We are located in Block M Air Avenue, DHA Phase 8 (Ex Air Avenue), Lahore. We offer dedicated, well-lit private parking right outside the entrance with 24-hour security personnel.',
  },
  {
    category: 'Membership',
    question: 'Can I freeze my membership if I travel outside Lahore?',
    answer:
      'Yes. Annual and bi-annual membership plans permit complimentary membership pauses of up to 30 days per calendar year upon WhatsApp notification.',
  },
];

export const MEMBERSHIP_TIERS = [
  {
    id: 'access-tier',
    name: '24/7 Floor Access',
    price: '14,000',
    cadence: 'PKR / Month',
    badge: 'Round-The-Clock Freedom',
    description: 'Complete unrestricted access to our DHA Phase 8 facility at any hour of the day or night.',
    features: [
      '24/7 Biometric entry anytime, 365 days',
      'Full access to Olympic lifting platforms & competition racks',
      'Dumbbells up to 60kg, specialty barbells & bumper plates',
      'Sauna, hot showers, and private lockers',
      'Complimentary initial movement assessment',
    ],
    recommendedFor: 'Independent lifters and shift workers prioritizing flexible training hours.',
  },
  {
    id: 'hybrid-tier',
    name: 'Access + CrossFit & Classes',
    price: '22,000',
    cadence: 'PKR / Month',
    badge: 'Most Popular',
    popular: true,
    description: 'Round-the-clock gym access combined with unlimited CrossFit WODs and athletic group sessions.',
    features: [
      'Everything in 24/7 Floor Access',
      'Unlimited daily CrossFit & functional fitness sessions',
      'Group athletic conditioning & kettlebell classes',
      'Full participation in Ramadan Boot Camp 2026 cohorts',
      'Quarterly body composition and mobility screenings',
    ],
    recommendedFor: 'Athletes seeking community energy, structured daily workouts, and CrossFit progression.',
  },
  {
    id: 'pt-tier',
    name: 'Dedicated Personal Coaching',
    price: '45,000',
    cadence: 'PKR / Month',
    badge: 'Elite 1-on-1 Mentorship',
    description: 'Direct 1-on-1 training with Mehwish, Mishel, or Abdul Raheem, tailored to your exact physiology.',
    features: [
      'Everything in Access + Classes',
      '12 dedicated 1-on-1 sessions per month with your assigned coach',
      'Real-time spotting, form analysis & bar trajectory tracking',
      'Tailored nutritional periodization & weekly recovery protocols',
      'Direct WhatsApp access to your coach for daily feedback',
    ],
    recommendedFor: 'Individuals needing precise form correction, powerlifting guidance, or rapid body recomposition.',
  },
];
