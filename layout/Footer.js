import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="contactus">
      <div className="flex flex-col ms:justify-between  pb-6 px-9 sm:px-24 sm:flex-row bg-[#262626]">
        <div className="flex flex-col sm:w-1/3">
          <div className="pt-10 pb-5 text-lg font-bold text-center text-white underline">
            CONTACT US
          </div>
          <div className="flex flex-col gap-5 pl-2 text-white sm:pl-0">
            <div className="flex flex-row">
              <div className="w-11">
                <Image src="/placemarker.png" width={35} height={35} />
              </div>

              <div className="w-2/3 pl-3 text-xs">
                <div className="font-bold">Maa Saraswati Consultancy</div>
                <div> 2nd Floor, Golden Palace, Bye Pass Road, Chas</div>
                <div>Near ICICI/ Yes Bank, BOKARO, JHARKHAND</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-11">
                <Image src="/phone.png" width={30} height={30} />
              </div>

              <div className="w-auto pl-3 text-xs sm:w-3/4">
                <div>Phone: </div>
                <a href="tel:6370324756">+91-7004704332</a>
                <a href="tel:6371809622">, +91-7004237947</a>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-11">
                <Image src="/mail.png" width={30} height={20} />
              </div>

              <div className="w-auto pl-3 text-xs sm:w-3/4">
                <a href="mailto:mscjobs@gmail.com">mscjobs@gmail.com, </a>
                <a href="mailto:msfacultyprovider@gmail.com">
                  msfacultyprovider@gmail.com
                </a>
              </div>
            </div>
            <div>
              <Link href="www.facebook.com">
                <img
                  src="/white-facebook-logo.svg"
                  alt="facebook"
                  className="inline w-6 h-6 mr-2"
                />
              </Link>
              <Link href="www.twitter.com">
                <img
                  src="/white-twitter-logo.svg"
                  alt="twitter"
                  className="inline w-6 h-6 mx-2"
                />
              </Link>
              <Link href="www.linkedin.com">
                <img
                  src="/white-linkedin-logo.svg"
                  alt="linkedin"
                  className="inline w-6 h-6 mx-2"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:w-1/3"></div>
        <div className="sm:w-1/3 ">
          <div className="pt-3 text-xl font-bold text-center text-white sm:text-2xl">
            Map
          </div>
          <div className="relative h-[175px] max-w-[400px] mx-auto sm:max-w-[300px] mt-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.2779761837314!2d85.78049295068335!3d20.247303119303442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7c6e9c4d4d1%3A0x1c4d1209e0db1a5d!2sDumduma%20Chhak!5e0!3m2!1sen!2sin!4v1645901124881!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-2 text-xs text-center text-white sm:py-4 sm:text-sm bg-[#101010] sm:flex-row sm:justify-between">
        <div className="mx-auto">
          © Copyright 2021 - All Rights Reserved mscjobs{" "}
        </div>
        <div className="mx-auto">
          Designed and Developed by{" "}
          <a
            href="https://fridaytech.in"
            target="_blank"
            className="text-red-700"
          >
            Friday Technologies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
