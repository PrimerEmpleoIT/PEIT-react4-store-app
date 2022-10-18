import Footer from "./Footer";
import Header from "./Header";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
