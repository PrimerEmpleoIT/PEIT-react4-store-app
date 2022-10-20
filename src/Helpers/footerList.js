import paypal from "@/assets/Footer/paypal.svg"
import visa from "@/assets/Footer/visa.svg"
import masterCard from "@/assets/Footer/masterCard.svg"
import discover from "@/assets/Footer/discover.svg"
import americanExpress from "@/assets/Footer/americanExpress.svg"

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
    title: "Information",
    list: [
      "About Us",
      "About Zip",
      "Privacy Policy",
      "Search",
      "Terms",
      "Orders and Returns",
      "Contact Us",
      "Advanced Search",
      "Newsletter Subscription",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "PC Parts",
    list: [
      "CPUS",
      "Add On Cards",
      "Hard Drives (Internal)",
      "Graphic Cards",
      "Keyboards / Mice",
      "Cases / Power Supplies / Cooling",
      "RAM (Memory)",
      "Software",
      "Speakers / Headsets",
      "Motherboards",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Desktop PCs",
    list: [
      "Custom PCs",
      "Servers",
      "MSI All-In-One PCs",
      "HP/Compaq PCs",
      "ASUS PCs",
      "Tecs PCs",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Laptops",
    list: [
      "Everyday Use Notebooks",
      "MSI Workstation Series",
      "MSI Prestige Series",
      "Tablets and Pads",
      "Netbooks",
      "Infinity Gaming Notebooks",
    ],
  },
]
