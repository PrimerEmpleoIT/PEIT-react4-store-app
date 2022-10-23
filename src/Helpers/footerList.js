import americanExpress from '@/assets/Footer/americanExpress.svg'
import discover from '@/assets/Footer/discover.svg'
import masterCard from '@/assets/Footer/masterCard.svg'
import paypal from '@/assets/Footer/paypal.svg'
import visa from '@/assets/Footer/visa.svg'

export const footerIcons = [
  {
    id: crypto.randomUUID(),
    icon: paypal,
  },
  {
    id: crypto.randomUUID(),
    icon: visa,
  },
  {
    id: crypto.randomUUID(),
    icon: masterCard,
  },
  {
    id: crypto.randomUUID(),
    icon: discover,
  },
  {
    id: crypto.randomUUID(),
    icon: americanExpress,
  },
]

export const footerList = [
  {
    id: crypto.randomUUID(),
    title: 'Information',
    list: [
      'About Us',
      'About Zip',
      'Privacy Policy',
      'Search',
      'Terms',
      'Orders and Returns',
      'Contact Us',
      'Advanced Search',
      'Newsletter Subscription',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'PC Parts',
    list: [
      'CPUS',
      'Add On Cards',
      'Hard Drives (Internal)',
      'Graphic Cards',
      'Keyboards / Mice',
      'Cases / Power Supplies / Cooling',
      'RAM (Memory)',
      'Software',
      'Speakers / Headsets',
      'Motherboards',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Desktop PCs',
    list: [
      'Custom PCs',
      'Servers',
      'MSI All-In-One PCs',
      'HP/Compaq PCs',
      'ASUS PCs',
      'Tecs PCs',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Laptops',
    list: [
      'Everyday Use Notebooks',
      'MSI Workstation Series',
      'MSI Prestige Series',
      'Tablets and Pads',
      'Netbooks',
      'Infinity Gaming Notebooks',
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Address',
    list: [
      'Address: 1234 Street Adress City Address, 1234',
      'Phones: (00) 1234 5678',
      'We are open: Monday-Thursday: 9:00 AM - 5:30 PM',
      'Friday: 9:00 AM - 6:00 PM',
      'Saturday: 11:00 AM - 5:00 PM',
      'E-mail: shop@email.com',
    ],
  },
]
