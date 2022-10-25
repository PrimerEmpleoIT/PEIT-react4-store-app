import { Box } from "@chakra-ui/react";
import { Footer, Header, Navbar } from "..";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <Box maxW={"1440px"} mx={"auto"}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
export default Layout;
