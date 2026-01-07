export interface Project {
  id: string;
  title: string;
  platform: 'iOS' | 'Fire TV' | 'Web';
  year: string;
  description: string;
  features: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: 'iq-league',
    title: 'IQ League',
    platform: 'iOS',
    year: '2024',
    description: 'Competitive trivia platform',
    features: [
      'Real-time multiplayer',
      'Adaptive difficulty',
      'Performance optimization'
    ],
    color: '#2563eb'
  },
  {
    id: 'charades',
    title: 'Charades',
    platform: 'Fire TV',
    year: '2023',
    description: 'Living room party game',
    features: [
      'Remote navigation',
      'TV-optimized UI',
      'Voice interaction'
    ],
    color: '#dc2626'
  },
  {
    id: 'would-you-rather',
    title: 'Would You Rather',
    platform: 'Fire TV',
    year: '2023',
    description: 'Interactive decision game',
    features: [
      'TV interface',
      'Social gameplay',
      'Content curation'
    ],
    color: '#7c3aed'
  },
  {
    id: 'money-up',
    title: 'Money Up',
    platform: 'iOS',
    year: '2022',
    description: 'Financial tracking system',
    features: [
      'Data visualization',
      'Secure storage',
      'Fast performance'
    ],
    color: '#16a34a'
  },
  {
    id: 'sooqlina',
    title: 'Sooqlina',
    platform: 'Web',
    year: '2024',
    description: 'Market platform',
    features: [
      'Real-time updates',
      'Search optimization',
      'Responsive design'
    ],
    color: '#ea580c'
  },
  {
    id: 'foundersflow',
    title: 'FoundersFlow',
    platform: 'Web',
    year: '2024',
    description: 'Startup workflow system',
    features: [
      'Task management',
      'Team collaboration',
      'Progress tracking'
    ],
    color: '#0891b2'
  }
];
