export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string; // Path to avatar image
}

const testimonials: Testimonial[] = [
  {
    name: 'Alemu Tadesse',
    role: 'Community Leader',
    quote: 'CHADET has transformed our village. The children now have hope and opportunities we never dreamed of.',
    image: '/assets/images/avatars/alemu.jpg',
  },
  {
    name: 'Sara Bekele',
    role: 'Parent',
    quote: 'Thanks to CHADET, my daughter is thriving in school and our family feels supported every step of the way.',
    image: '/assets/images/avatars/sara.jpg',
  },
  {
    name: 'Fiker',
    role: 'Youth Volunteer',
    quote: 'Volunteering with CHADET has given me purpose and a chance to make a real difference in my community.',
    image: '/assets/images/avatars/fiker.jpg',
  },
  {
    name: 'Bereket',
    role: 'Teacher',
    quote: 'The support and resources from CHADET have empowered me to help my students achieve their dreams.',
    image: '/assets/images/avatars/bereket.jpg',
  },
];

export default testimonials; 