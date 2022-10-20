import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    xs: "320px",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
    "3xl": "1560px",
  },
  fonts: {
    heading: `'Poppins', ${base.fonts.heading}`,
    body: `'Poppins', ${base.fonts.body}`,
  },
  fontSizes: {
    stock: "0.625rem",
    review: "0.75rem",
    description: "0.813rem",
    general: "0.875rem",
    normal: "1rem",
    paragraph: "1.125rem",
    large: "1.25rem",
    category: "1.375rem",
    big: "1.5rem",
    title: "2.375rem",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  colors: {
    black: "rgba(0, 0, 0, 1)",
    dark: "rgba(2, 2, 3, 1)",
    disable: "rgba(102, 102, 102, 1)",
    gray: "rgba(162, 166, 176, 1)",
    category: "rgba(131, 131, 131, 1)",
    white: "rgba(255, 255, 255, 1)",
    star: "rgba(233, 164, 38, 1)",
    empty: "rgba(202, 205, 216, 1)",
    logo: "rgba(1, 86, 255, 1)",
    divBg: "rgba(245, 247, 255, 1)",
    headerFont: "rgba(172, 172, 172, 1)",
    btnDark: "rgba(37, 41, 49, 1)",
    available: "rgba(120, 169, 98, 1)",
    unavailable: "rgba(201, 77, 63, 1)",
    contact: "rgba(1, 164, 255, 1)",
  },
});

export default theme;
