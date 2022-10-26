import { Box } from "@chakra-ui/react";
import { Footer, Header, Navbar } from "..";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <Box maxW={"1440px"} mx={"auto"}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
export default Layout;
