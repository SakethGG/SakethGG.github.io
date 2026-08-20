// Edit this list directly — no need to touch any page code.
// status: 'published' | 'in-review' | 'in-prep'

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: 'published' | 'in-review' | 'in-prep';
  link?: string;
  image?: string;
}

export const publications: Publication[] = [
  {
    title: 'SAMPLE ENTRY — replace with your real publication',
    authors: 'S. Vegesna, et al.',
    venue: 'Venue / journal / conference name',
    year: '2026',
    status: 'in-prep',
    // image: '/images/publications/sample.jpg',
  },
];
