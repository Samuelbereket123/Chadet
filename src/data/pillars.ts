export interface Pillar {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: 'FaHandHoldingHeart' | 'FaLeaf' | 'FaHandsHelping';
}

const pillars: Pillar[] = [
  {
    slug: 'safeguarding',
    title: 'Safeguarding',
    description: 'Protecting children and vulnerable individuals from harm, abuse, and exploitation through robust policies and practices.',
    fullDescription: 'Safeguarding is a critical pillar of our work. It is the foundation of everything we do. We are committed to protecting children and vulnerable individuals from harm, abuse, and exploitation through robust policies and practices.',
    icon: 'FaHandHoldingHeart',
  },
  {
    slug: 'education',
    title: 'Education',
    description: 'Providing access to quality education and learning opportunities for all, empowering communities for a brighter future.',
    fullDescription: 'Education is a critical pillar of our work. It is the foundation of everything we do. We are committed to providing access to quality education and learning opportunities for all, empowering communities for a brighter future.',
    icon: 'FaLeaf',
  },
  {
    slug: 'capacity-development-livelihoods',
    title: 'Capacity Development & Livelihoods',
    description: 'Building skills, knowledge, and sustainable livelihoods to foster self-reliance and economic growth.',
    fullDescription: 'Capacity Development & Livelihoods is a critical pillar of our work. It is the foundation of everything we do. We are committed to building skills, knowledge, and sustainable livelihoods to foster self-reliance and economic growth.',
    icon: 'FaHandsHelping',
  },
  {
    slug: 'research-networking-public-education',
    title: 'Research, Networking and Public Education',
    description: 'Advancing knowledge, collaboration, and awareness through research, partnerships, and public engagement.',
    fullDescription: 'Research, Networking and Public Education is a critical pillar of our work. It is the foundation of everything we do. We are committed to advancing knowledge, collaboration, and awareness through research, partnerships, and public engagement.',
    icon: 'FaLeaf',
  },
  {
    slug: 'advocacy',
    title: 'Advocacy',
    description: 'Championing the rights and well-being of children and communities through policy influence and public campaigns.',
    fullDescription: 'Advocacy is a critical pillar of our work. It is the foundation of everything we do. We are committed to championing the rights and well-being of children and communities through policy influence and public campaigns.',
    icon: 'FaHandHoldingHeart',
  },
];

export default pillars; 