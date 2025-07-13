export interface Pillar {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: 'FaHandHoldingHeart' | 'FaLeaf' | 'FaHandsHelping';
}

const pillars: Pillar[] = [
  {
    slug: 'education',
    title: 'Education',
    description: 'Promoting access and ensuring retention and transition for vulnerable and marginalised children through various education programs.',
    fullDescription: 'CHADET\'s work on education focuses on promoting access and ensuring retention and transition for vulnerable and marginalised children. The education programs extend support under Non-Formal/ Alternative Basic Education (ABE), Early Childhood Care and Education (ECCE) and the provision of support for children at primary and secondary level of education with a focus on Girls\' Education.',
    icon: 'FaHandHoldingHeart',
  },
  {
    slug: 'livelihoods',
    title: 'Livelihoods',
    description: 'Facilitating training in marketable skills, economic empowerment for women and improving household nutrition.',
    fullDescription: 'Through facilitating training in marketable skills, economic empowerment for women and improving household nutrition, CHADET is making efforts to reduce the vulnerabilities of children to different forms of challenges in their lives and in their transitions into adulthood.',
    icon: 'FaLeaf',
  },
  {
    slug: 'capacity-development-livelihoods',
    title: 'Protection and safeguarding',
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
    title: 'Capacity Development',
    description: 'Championing the rights and well-being of children and communities through policy influence and public campaigns.',
    fullDescription: 'Advocacy is a critical pillar of our work. It is the foundation of everything we do. We are committed to championing the rights and well-being of children and communities through policy influence and public campaigns.',
    icon: 'FaHandHoldingHeart',
  },
];

export default pillars; 