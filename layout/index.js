import Footer from "./Footer";
import Navbar from "./Navbar";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="fixed cursor-pointer bottom-[40px] right-[40px]">
        <Link href="http://whatsapp.com">
          <img
            src="/whatsapp-logo.png"
            alt="whatsapp"
            className="h-[60px] w-[60px]"
          />
        </Link>
      </div>
      <Navbar />
      <div className="flex-grow">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
