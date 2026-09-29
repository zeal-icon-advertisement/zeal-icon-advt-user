const portraitImage = (id, extra = '') => {
  const options = 'auto=format&fit=max&w=1400&q=80'
  return `https://images.unsplash.com/${id}?${options}${extra ? `&${extra}` : ''}`
}

const gallery = (...items) =>
  items.map((item) => {
    if (typeof item === 'string') return portraitImage(item)
    return { src: portraitImage(item.id), orientation: item.orientation }
  })

const subItem = (name, slug, images, videos = []) => ({ name, slug, gallery: images, videos })

export const PHOTOGRAPHY_CATEGORIES = [
  {
    name: 'Weddings & Celebrations',
    slug: 'weddings-celebrations',
    subItems: [
      subItem(
        'Wedding',
        'wedding',
        [
          { src: '/website-content/photo-01.jpg', orientation: 'landscape' },
          { src: '/website-content/photo-02.jpg', orientation: 'landscape' },
          { src: '/website-content/photo-03.jpg', orientation: 'portrait' },
        ],
        [
          {
            id: 'wedding-video-01',
            type: 'video',
            title: 'A garden in motion',
            orientation: 'landscape',
            thumbnailUrl: '/website-content/photo-05.jpg',
            videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
          },
          {
            id: 'wedding-video-02',
            type: 'video',
            title: 'The celebration',
            orientation: 'landscape',
            thumbnailUrl: '/website-content/photo-01.jpg',
            videoUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
          },
          {
            id: 'wedding-video-03',
            type: 'video',
            title: 'Portrait video sample',
            orientation: 'portrait',
            thumbnailUrl: '/website-content/photo-04.jpg',
            videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
          },
        ],
      ),
      subItem(
        'Pre-Wedding',
        'pre-wedding',
        gallery('photo-1529156069898-49953e39b3ac', 'photo-1529636798458-92182e662485', 'photo-1516589178581-6cd7833ae3b2'),
        [
          {
            id: 'pre-wedding-video-01',
            type: 'video',
            title: 'Pre-Wedding | Sanket And Pallavi | Pirticha Yaad',
            orientation: 'landscape',
            videoUrl: 'https://youtu.be/Q1i49MI6iOI?si=0xeb7Hs33rysSfUQ',
          },
        ],
      ),
      subItem('Birthday', 'birthday', gallery('photo-1519741497674-611481863552', 'photo-1529156069898-49953e39b3ac', 'photo-1522673607200-164d1b6ce486')),
      subItem('Maternity', 'maternity', gallery('photo-1517841905240-472988babdf9', 'photo-1524504388940-b1c1722653e1', 'photo-1529156069898-49953e39b3ac')),
      subItem('House Warming', 'house-warming', gallery('photo-1494526585095-c41746248156', 'photo-1505693416388-ac5ce068fe85', 'photo-1505693416388-ac5ce068fe85')),
      subItem('Baby & Family', 'baby-family', gallery('photo-1516627145497-ae6968895b74', 'photo-1517841905240-472988babdf9', 'photo-1517309230475-6736d926b979')),
    ],
  },
  {
    name: 'Commercial',
    slug: 'commercial',
    subItems: [
      subItem('Product', 'product', gallery('photo-1523275335684-37898b6baf30', 'photo-1521572267360-ee0c2909d518', 'photo-1483985988355-763728e1935b')),
      subItem('Brand', 'brand', gallery('photo-1528747045269-390fe33c19f2', 'photo-1441986300917-64674bd600d8', 'photo-1460661419201-fd4cecdf8a8b')),
      subItem('Advertisement', 'advertisement', gallery('photo-1524758631624-e2822e304c36', 'photo-1491553895911-0055eca6402d', 'photo-1556740749-887f6717d7e4')),
      subItem('Industrial', 'industrial', gallery('photo-1504307651254-35680f356dfd', 'photo-1503376780353-7e6692767b70', 'photo-1517048676732-d65bc937f952')),
      subItem('E-Commerce', 'e-commerce', gallery('photo-1524758631624-e2822e304c36', 'photo-1472851294608-062f824d29cc', 'photo-1521572267360-ee0c2909d518')),
    ],
  },
  {
    name: 'Fashion & Lifestyle',
    slug: 'fashion-lifestyle',
    subItems: [
      subItem('Fashion', 'fashion', gallery('photo-1529139574466-a303027c1d8b', 'photo-1524504388940-b1c1722653e1', 'photo-1487412720507-e7ab37603c6f')),
      subItem('Portfolio', 'portfolio', gallery('photo-1487412720507-e7ab37603c6f', 'photo-1524504388940-b1c1722653e1', 'photo-1529139574466-a303027c1d8b')),
      subItem('Model', 'model', gallery('photo-1515886657613-9f3515b0c78f', 'photo-1524504388940-b1c1722653e1', 'photo-1496747611176-843222e1e57c')),
      subItem('Editorial', 'editorial', gallery('photo-1524504388940-b1c1722653e1', 'photo-1487412720507-e7ab37603c6f', 'photo-1496747611176-843222e1e57c')),
      subItem('Magazine', 'magazine', gallery('photo-1524504388940-b1c1722653e1', 'photo-1529139574466-a303027c1d8b', 'photo-1496747611176-843222e1e57c')),
    ],
  },
  {
    name: 'Hospitality',
    slug: 'hospitality',
    subItems: [
      subItem('Hotels & Resorts', 'hotels-resorts', gallery('photo-1566073771259-6a8506099945', 'photo-1505693416388-ac5ce068fe85', 'photo-1445019980597-93fa8acb246c')),
      subItem('Restaurants', 'restaurants', gallery('photo-1517248135467-4c7edcad34c4', 'photo-1559339352-11d035aa65de', 'photo-1552566626-52f8b828add9')),
      subItem('Food', 'food', gallery('photo-1544025162-d76694265947', 'photo-1547592180-85f173990554', 'photo-1546069901-ba9599a7e63c')),
      subItem('Travel', 'travel', gallery('photo-1507525428034-b723cf961d3e', 'photo-1501785888041-af3ef285b470', 'photo-1476514525535-07fb3b4ae5f1')),
    ],
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    subItems: [
      subItem('Property', 'property', gallery('photo-1494526585095-c41746248156', 'photo-1505693416388-ac5ce068fe85', 'photo-1502672260266-1c1ef2d93688')),
      subItem('Interior', 'interior', gallery('photo-1505693416388-ac5ce068fe85', 'photo-1494526585095-c41746248156', 'photo-1484154218962-a197022b5858')),
      subItem('Architecture', 'architecture', gallery('photo-1512917774080-9991f1c4c750', 'photo-1494526585095-c41746248156', 'photo-1523217582562-09d0def993a6')),
      subItem('Developer', 'developer', gallery('photo-1460317442991-0ec209397118', 'photo-1505693416388-ac5ce068fe85', 'photo-1494526585095-c41746248156')),
    ],
  },
  {
    name: 'Corporate',
    slug: 'corporate',
    subItems: [
      subItem('Headshots', 'headshots', gallery('photo-1500648767791-00dcc994a43e', 'photo-1506794778202-cad84cf45f1d', 'photo-1504593811423-6dd665756598')),
      subItem('Company Profile', 'company-profile', gallery('photo-1552664730-d307ca884978', 'photo-1551836022-d5d88e9218df', 'photo-1522202176988-66273c2fd55f')),
      subItem('Events', 'events', gallery('photo-1511578314322-379afb476865', 'photo-1540575467063-178a50c2df87', 'photo-1522202176988-66273c2fd55f')),
      subItem('Interviews', 'interviews', gallery('photo-1522202176988-66273c2fd55f', 'photo-1541534401786-2077eed87a74', 'photo-1500648767791-00dcc994a43e')),
      subItem('Personal Branding', 'personal-branding', gallery('photo-1521119989659-a83eee488004', 'photo-1524504388940-b1c1722653e1', 'photo-1544005313-94ddf0286df2')),
    ],
  },
  {
    name: 'Podcast',
    slug: 'podcast',
    subItems: [
      subItem('Podcast Production', 'podcast-production', gallery('photo-1492691527719-9d1e07e534b4', 'photo-1521737604893-d14cc237f11d', 'photo-1516321318423-f06f85e504b3')),
      subItem('Interviews', 'podcast-interviews', gallery('photo-1522202176988-66273c2fd55f', 'photo-1544005313-94ddf0286df2', 'photo-1500648767791-00dcc994a43e')),
      subItem('Reels', 'reels', gallery('photo-1524504388940-b1c1722653e1', 'photo-1492691527719-9d1e07e534b4', 'photo-1516280440614-37939bbacd81')),
      subItem('YouTube', 'youtube', gallery('photo-1492691527719-9d1e07e534b4', 'photo-1516321318423-f06f85e504b3', 'photo-1521737604893-d14cc237f11d')),
    ],
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    subItems: [
      subItem('Doctors', 'doctors', gallery('photo-1538108149393-fbbd81895973', 'photo-1535324503518-7d4d0c5f5754', 'photo-1612349317150-e413f6a5b16d')),
      subItem('Clinics', 'clinics', gallery('photo-1582750433449-648ed127bb54', 'photo-1576091160550-2173dba999ef', 'photo-1519494026892-80bbd2d6fd0d')),
      subItem('Hospitals', 'hospitals', gallery('photo-1584515933487-779824d29309', 'photo-1516549655169-df83a0774514', 'photo-1538108149393-fbbd81895973')),
      subItem('Medical Brands', 'medical-brands', gallery('photo-1516549655169-df83a0774514', 'photo-1576091160550-2173dba999ef', 'photo-1582750433449-648ed127bb54')),
    ],
  },
  {
    name: 'Education',
    slug: 'education',
    subItems: [
      subItem('Schools', 'schools', gallery('photo-1503676260728-1c00da094a0b', 'photo-1522202176988-66273c2fd55f', 'photo-1523240795612-9a054b0db644')),
      subItem('Colleges', 'colleges', gallery('photo-1523240795612-9a054b0db644', 'photo-1522202176988-66273c2fd55f', 'photo-1503676260728-1c00da094a0b')),
      subItem('Institutes', 'institutes', gallery('photo-1522202176988-66273c2fd55f', 'photo-1503676260728-1c00da094a0b', 'photo-1523240795612-9a054b0db644')),
      subItem('Admission Campaigns', 'admission-campaigns', gallery('photo-1522202176988-66273c2fd55f', 'photo-1516321318423-f06f85e504b3', 'photo-1503676260728-1c00da094a0b')),
    ],
  },
]

export const NAV_LINKS = [
  { to: '/photography', label: 'Photography' },
  { to: '/magazines', label: 'Magazines', soon: true },
  { to: '/articles', label: 'Articles', soon: true },
  { to: '/about', label: 'About' },
]
