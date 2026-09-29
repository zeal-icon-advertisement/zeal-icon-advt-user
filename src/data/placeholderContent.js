export const services = [
  {
    id: 'weddings-celebrations',
    title: 'Weddings & Celebrations',
    description: 'Wedding, Pre-Wedding, Birthday, Maternity, House Warming, Baby & Family.',
    href: '/photography?category=weddings-celebrations',
    status: 'available',
    kind: 'photography',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Product, brand, advertising, industrial, and e-commerce storytelling.',
    href: '/photography?category=commercial',
    status: 'available',
    kind: 'photography',
  },
  {
    id: 'fashion-lifestyle',
    title: 'Fashion & Lifestyle',
    description: 'Fashion, editorials, model portfolios, and magazine-ready frames.',
    href: '/photography?category=fashion-lifestyle',
    status: 'available',
    kind: 'photography',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    description: 'Hotels, resorts, restaurants, food, and travel imagery.',
    href: '/photography?category=hospitality',
    status: 'available',
    kind: 'photography',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Property, interiors, architecture, and developer-led spaces.',
    href: '/photography?category=real-estate',
    status: 'available',
    kind: 'photography',
  },
  {
    id: 'corporate',
    title: 'Corporate',
    description: 'Headshots, profiles, interviews, events, and personal branding.',
    href: '/photography?category=corporate',
    status: 'available',
    kind: 'photography',
  },
  {
    id: 'podcast',
    title: 'Podcast',
    description: 'Podcast production, interviews, reels, and YouTube formats.',
    href: '/photography?category=podcast',
    status: 'available',
    kind: 'photography',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Doctors, clinics, hospitals, and medical brand communication.',
    href: '/photography?category=healthcare',
    status: 'available',
    kind: 'photography',
  },
  {
    id: 'education',
    title: 'Education',
    description: 'School, college, institute, and admission campaign storytelling.',
    href: '/photography?category=education',
    status: 'available',
    kind: 'photography',
  },
  {
    id: 'magazine',
    title: 'Magazine',
    description: 'Editorial issues and covers.',
    href: '/magazines',
    status: 'soon',
    kind: 'editorial',
  },
  {
    id: 'articles',
    title: 'Articles',
    description: 'Stories, ideas and creative perspectives.',
    href: '/articles',
    status: 'soon',
    kind: 'editorial',
  },
]

/** Update these with real studio handles before launch */
export const studioContact = {
  email: 'studio@zealicon.example',
  phoneDisplay: '+91 98765 43210',
  whatsapp: '7499774641',
  address: 'Koregaon Park, Pune, Maharashtra 411001',
  instagram: 'https://instagram.com/zealiconadvertisement',
  linkedin: 'https://www.linkedin.com/in/zeal-icon-advertisement-149a80426/',
}

export const socialLinks = [
  { id: 'instagram', label: 'Instagram', href: studioContact.instagram },
  { id: 'linkedin', label: 'LinkedIn', href: studioContact.linkedin },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: `https://wa.me/${studioContact.whatsapp}?text=${encodeURIComponent(
      'Hi Zeal Icon Advertisement, I would like to inquire about a photography shoot.',
    )}`,
  },
]
