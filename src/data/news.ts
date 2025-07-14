export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  summary: string;
  image?: string;
}

const newsItems: NewsItem[] = [
  {
    slug: 'new-partnership-announced',
    title: 'CHADET Announces New Partnership for Child Welfare',
    date: '2024-06-01',
    summary: 'CHADET has entered a new partnership with international organizations to expand child welfare programs in rural Ethiopia. The collaboration aims to reach over 5,000 children in the next year.',
    image: '/assets/images/Carsouel/Childhope.png',
  },
  {
    slug: 'education-initiative-launched',
    title: 'Education Initiative Launched in South Wollo',
    date: '2024-05-20',
    summary: 'A new education initiative was launched in South Wollo, providing school supplies and scholarships to over 1,200 students. Community leaders and local officials attended the opening ceremony.',
    image: '/assets/images/Carsouel/ethiopiaid.jpg',
  },
  {
    slug: 'annual-report-2023',
    title: 'CHADET Releases Annual Report 2023',
    date: '2024-04-15',
    summary: 'The 2023 Annual Report highlights CHADET’s achievements in child protection, education, and community development. Download the full report to learn more about our impact.',
    image: '/assets/images/Carsouel/pwc.png',
  },
  {
    slug: 'community-health-campaign',
    title: 'Community Health Campaign Reaches 10,000+',
    date: '2024-03-30',
    summary: 'Our recent health campaign provided free checkups and health education to more than 10,000 people in Addis Ababa and surrounding areas.',
    image: '/assets/images/Carsouel/dfid_logo.png',
  },
  {
    slug: 'youth-empowerment-workshop',
    title: 'Youth Empowerment Workshop Empowers 300 Young Leaders',
    date: '2024-02-18',
    summary: 'A successful workshop equipped 300 young people with leadership and life skills, preparing them to become change-makers in their communities.',
    image: '/assets/images/Carsouel/pact.jpg',
  },
  {
    slug: 'environmental-awareness-drive',
    title: 'Environmental Awareness Drive Launched',
    date: '2024-01-10',
    summary: 'CHADET launched a new campaign to promote environmental sustainability, including tree planting and waste management education in local schools.',
    image: '/assets/images/Carsouel/Oak.png',
  },
];

export default newsItems; 