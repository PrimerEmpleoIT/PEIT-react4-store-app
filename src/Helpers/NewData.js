import available from '@/assets/NewProducts/available.svg'
import checkAvailability from '@/assets/NewProducts/check-availability.svg'
import Gabinete from '@/assets/NewProducts/Gabinete.webp'
import Monitor from '@/assets/NewProducts/Monitor.webp'
import Notebook from '@/assets/NewProducts/Notebook.webp'

export const NewData = [
  {
    id: crypto.randomUUID(),
    stock: 'in stock',
    icon: available,
    img: Gabinete,
    description: 'ExDisplay: MSI pro 16 Flex-036AU 15.6 Multitouch All-In-One',
    oldPrice: 1500,
    price: 1200,
  },
  {
    id: crypto.randomUUID(),
    icon: checkAvailability,
    stock: 'check availability',
    img: Monitor,
    description: 'ExDisplay: MSI pro 16 Flex-036AU 15.6 Multitouch All-In-One',
    oldPrice: 960,
    price: 800,
  },
  {
    id: crypto.randomUUID(),
    stock: 'in stock',
    icon: available,
    img: Notebook,
    description: 'ExDisplay: MSI pro 16 Flex-036AU 15.6 Multitouch All-In-One',
    oldPrice: 2800,
    price: 2500,
  },
  {
    id: crypto.randomUUID(),
    stock: 'in stock',
    icon: available,
    img: Gabinete,
    description: 'ExDisplay: MSI pro 16 Flex-036AU 15.6 Multitouch All-In-One',
    oldPrice: 1500,
    price: 1200,
  },
  {
    id: crypto.randomUUID(),
    icon: checkAvailability,
    stock: 'check availability',
    img: Monitor,
    description: 'ExDisplay: MSI pro 16 Flex-036AU 15.6 Multitouch All-In-One',
    oldPrice: 960,
    price: 800,
  },
  {
    id: crypto.randomUUID(),
    stock: 'in stock',
    icon: available,
    img: Notebook,
    description: 'ExDisplay: MSI pro 16 Flex-036AU 15.6 Multitouch All-In-One',
    oldPrice: 2800,
    price: 2500,
  },
]
