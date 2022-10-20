import { Footer, Header, Navbar } from ".."

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
export default Layout
