import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default RootLayout;
