export interface Project {
  slug: string;
  title: string;
  year: string;
  description: string;
  fullDescription: string;
  image?: string;
}

const projects: Project[] = [
  {
    slug: "clean-water-initiative",
    title: "Clean Water Initiative",
    year: "2005",
    description: "Bringing clean, safe water to remote villages and empowering communities.",
    fullDescription: `Access to clean water is a fundamental human right. Our Clean Water Initiative has brought safe, drinkable water to over 50 remote villages, reducing disease and empowering local communities.\n\nThrough the construction of wells, installation of filtration systems, and education on hygiene, we have improved the quality of life for thousands. Our work continues as we expand to new regions in need.`,
    // image: "/gallery/clean-water.jpg",
  },
  {
    slug: "education-for-all",
    title: "Education for All",
    year: "2006",
    description: "Building schools and providing resources for underprivileged children.",
    fullDescription: `Education is the key to breaking the cycle of poverty. Our Education for All project has built 12 schools and provided scholarships, books, and uniforms to children who otherwise would not have access to learning.\n\nWe believe every child deserves a chance to learn, grow, and achieve their dreams.`,
    // image: "/gallery/education.jpg",
  },
  {
    slug: "healthcare-outreach",
    title: "Healthcare Outreach",
    year: "2007",
    description: "Mobile clinics delivering essential healthcare to rural areas.",
    fullDescription: `Our Healthcare Outreach program brings essential medical services to remote and underserved communities.\n\nWith mobile clinics and volunteer doctors, we provide checkups, vaccinations, and health education to thousands each year.`,
    // image: "/gallery/healthcare.jpg",
  },
  {
    slug: "green-energy-program",
    title: "Green Energy Program",
    year: "2008",
    description: "Solar panel installations for sustainable, off-grid power.",
    fullDescription: `The Green Energy Program installs solar panels in villages without access to the power grid.\n\nThis sustainable solution powers schools, clinics, and homes, improving quality of life and reducing reliance on fossil fuels.`,
    //      image: "/gallery/solar.jpg",
  },
  {
    slug: "food-security-drive",
    title: "Food Security Drive",
    year: "2009",
    description: "Distributing nutritious food packages to families in need.",
    fullDescription: `Our Food Security Drive ensures that no family goes hungry. We distribute nutritious food packages and work with local farmers to support sustainable agriculture.\n\nThis project has helped reduce malnutrition rates in several regions.`,
  },
  {
    slug: "women-empowerment-workshops",
    title: "Women Empowerment Workshops",
    year: "2010",
    description: "Vocational training and microloans for women entrepreneurs.",
    fullDescription: `Empowering women is key to community development. Our workshops provide vocational training and microloans, enabling women to start their own businesses and support their families.`,
  },
  {
    slug: "disaster-relief-fund",
    title: "Disaster Relief Fund",
    year: "2011",
    description: "Rapid response to natural disasters with shelter and supplies.",
    fullDescription: `When disaster strikes, our Disaster Relief Fund provides immediate assistance—shelter, food, and medical supplies—to affected families.\n\nWe also help communities rebuild and recover in the aftermath.`,
  },
  {
    slug: "youth-leadership-camps",
    title: "Youth Leadership Camps",
    year: "2012",
    description: "Developing leadership skills in young people through camps and mentorship.",
    fullDescription: `Our Youth Leadership Camps foster confidence, teamwork, and responsibility in young people.\n\nThrough outdoor activities and mentorship, participants learn to become future leaders in their communities.`,
  },
  {
    slug: "accessible-technology",
    title: "Accessible Technology",
    year: "2013",
    description: "Providing computers and internet access to remote schools.",
    fullDescription: `We bridge the digital divide by providing computers and internet access to schools in remote areas.\n\nThis project opens up new educational opportunities for students and teachers alike.`,
  },
  {
    slug: "tree-planting-marathon",
    title: "Tree Planting Marathon",
    year: "2014",
    description: "Planting thousands of trees to combat deforestation.",
    fullDescription: `Our Tree Planting Marathon mobilizes volunteers to plant thousands of trees each year.\n\nThis effort combats deforestation, restores habitats, and helps fight climate change.`,
  },
  {
    slug: "elderly-care-program",
    title: "Elderly Care Program",
    year: "2015",
    description: "Home visits and support for isolated seniors.",
    fullDescription: `The Elderly Care Program provides companionship, medical checkups, and daily assistance to seniors living alone.\n\nWe believe every elder deserves dignity and care.`,
  },
  {
    slug: "refugee-support-network",
    title: "Refugee Support Network",
    year: "2016",
    description: "Legal aid, housing, and education for displaced families.",
    fullDescription: `Our Refugee Support Network offers legal aid, housing, and education to families displaced by conflict.\n\nWe help them rebuild their lives and integrate into new communities.`,
  },
  {
    slug: "mental-health-awareness",
    title: "Mental Health Awareness",
    year: "2017",
    description: "Workshops and counseling for mental wellness in the community.",
    fullDescription: `We break the stigma around mental health by offering workshops, counseling, and support groups.\n\nOur goal is to foster a community where everyone feels safe to seek help.`,
  },
  {
    slug: "sports-for-change",
    title: "Sports for Change",
    year: "2018",
    description: "Organizing sports leagues to foster teamwork and health.",
    fullDescription: `Sports for Change organizes leagues and tournaments to promote teamwork, health, and inclusion among youth.\n\nWe use sports as a tool for positive social change.`,
  },
  {
    slug: "digital-literacy-bootcamp",
    title: "Digital Literacy Bootcamp",
    year: "2019",
    description: "Teaching digital skills to adults and seniors.",
    fullDescription: `Our Digital Literacy Bootcamp teaches essential computer and internet skills to adults and seniors, helping them stay connected and empowered in the digital age.`,
  },
  {
    slug: "art-for-healing",
    title: "Art for Healing",
    year: "2020",
    description: "Art therapy sessions for trauma survivors.",
    fullDescription: `Art for Healing provides creative therapy sessions for individuals recovering from trauma.\n\nArt helps participants express themselves and find hope in their healing journey.`,
  },
  {
    slug: "covid-19-response",
    title: "COVID-19 Response",
    year: "2021",
    description: "Supplying PPE and hygiene kits during the pandemic.",
    fullDescription: `During the COVID-19 pandemic, we distributed PPE, hygiene kits, and food supplies to vulnerable populations.\n\nWe also provided health education and vaccination support.`,
  },
  {
    slug: "inclusive-playgrounds",
    title: "Inclusive Playgrounds",
    year: "2022",
    description: "Building accessible playgrounds for children of all abilities.",
    fullDescription: `Inclusive Playgrounds are designed so that children of all abilities can play together.\n\nWe work with communities to build safe, accessible, and fun play spaces for everyone.`,
  },
  {
    slug: "community-gardens",
    title: "Community Gardens",
    year: "2023",
    description: "Urban gardens to promote food security and community bonding.",
    fullDescription: `Our Community Gardens project transforms vacant lots into productive urban gardens.\n\nThese spaces provide fresh produce and bring neighbors together.`,
  },
  {
    slug: "climate-action-coalition",
    title: "Climate Action Coalition",
    year: "2024",
    description: "Advocacy and education for climate change solutions.",
    fullDescription: `The Climate Action Coalition advocates for policy change and educates the public on climate solutions.\n\nWe organize events, workshops, and campaigns to inspire action.`,
  },
];

export default projects; 