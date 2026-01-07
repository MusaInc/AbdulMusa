export interface Project {
  id: string;
  title: string;
  platform: 'iOS' | 'Fire TV';
  year: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
  image: string;
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
    color: '#3b82f6',
    gradient: 'from-blue-500/20 to-blue-600/5',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
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
    color: '#ef4444',
    gradient: 'from-red-500/20 to-red-600/5',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop'
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
    color: '#8b5cf6',
    gradient: 'from-violet-500/20 to-violet-600/5',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop'
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
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop'
  }
];
