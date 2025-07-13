export interface Pillar {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: 'FaHandHoldingHeart' | 'FaLeaf' | 'FaHandsHelping' | 'FaShieldAlt';
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
    slug: 'protection-safeguarding',
    title: 'Protection and Safeguarding',
    description: 'CHADET has developed a safeguarding policy for protecting children and adults who are obtaining support from the organisation.',
    fullDescription: 'CHADET has developed a safeguarding policy that encompass the philosophies, policies, standards, guidelines and procedures to protect children and vulnerable adults and steps to be taken to promote their wellbeing. All its workers, contractors and visitors who have a chance to work for the organization or get in contact with children under its programs are expected to observe the policy. CHADET has cascaded its protection policy to all its stakeholders, including teachers, police officers and community members. It has also established a system that enables children to report any form of harm or Sexual Exploitation Abuse and Harassment (SEAH) on their way to and from school, in their schools and at home/communities. CHADET is committed to provide psycho-social and other forms of support for children and communities in emergency situations. CHADET had successfully implemented projects that were designed to safeguard children exposed to risky migration.',
    icon: 'FaShieldAlt',
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