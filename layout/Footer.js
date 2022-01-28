import Image from "next/image";

const Footer = () => {
  return (
    <div id="contactus">
      <div className="flex flex-col py-6 px-9 sm:px-24 sm:flex-row bg-footerBg">
        <div className="flex flex-col sm:w-1/3">
          <div className="pt-10 pb-5 text-lg font-bold text-center text-white underline">
            CONTACT US
          </div>
          <div className="flex flex-col gap-5 pl-2 text-white sm:pl-0">
            <div className="flex flex-row">
              <div className="w-11">
                <Image src="/placemarker.png" width={35} height={35} />
              </div>

              <div className="w-2/3 pl-3 text-sm">
                <div className="font-bold">The Miracle Tutorial</div>
                <div> Phase 2, Dumduma </div>
                <div> Near SBI, Bhubaneswar</div>
                <div> Odisha, 751019</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-11">
                <Image src="/phone.png" width={30} height={30} />
              </div>

              <div className="w-auto pl-3 text-sm sm:w-3/4">
                <div>Phone: </div>
                <a href="tel:6370324756">63707XXXXX</a>
                <a href="tel:6371809622">, 63718XXXXX</a>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-11">
                <Image src="/mail.png" width={30} height={20} />
              </div>

              <div className="w-auto pl-3 text-sm sm:w-3/4">
                <a href="mailto:www.themiracletutorial@gmail.com">
                  Email: www.mscjobs@gmail.com{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-2/3 ">
          <div className="pt-3 text-xl font-bold text-center text-white sm:text-2xl">
            Map
          </div>
          <div className="relative h-64 max-w-lg mx-auto sm:max-w-md mt-7">
            <Image src="/map.jpg" layout="fill" alt="map-image" />
          </div>
        </div>
      </div>
      <div className="flex flex-col py-2 text-xs text-center text-white sm:py-4 sm:text-sm bg-footerBottom sm:flex-row sm:justify-between">
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
