export interface GalleryItem {
  slug: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  { slug: 'design-work', title: 'Design Work' },
  { slug: 'development', title: 'Development' },
  { slug: 'ui-ux', title: 'UI/UX' },
  { slug: 'branding', title: 'Branding' },
  { slug: 'mobile-app', title: 'Mobile App' },
  { slug: 'web-app', title: 'Web App' },
  { slug: 'analytics', title: 'Analytics' },
  { slug: 'innovation', title: 'Innovation' },
];

export default galleryItems; 