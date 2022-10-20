import Footer from "./Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar";

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
