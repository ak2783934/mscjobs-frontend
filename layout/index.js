import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
