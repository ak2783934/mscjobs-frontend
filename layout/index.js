import Footer from "./Footer";
import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="fixed z-[10000] cursor-pointer bottom-[40px] h-[60px] w-[60px] md:h-[80px] md:w-[80px] right-[40px]">
        <Link href="http://whatsapp.com">
          <Image
            src="/whatsapp-logo.svg"
            alt="whatsapp"
            layout="fill"
            className="bg-[#25d366] rounded-full"
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
