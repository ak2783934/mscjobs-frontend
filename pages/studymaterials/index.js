import Layout from "../../layout";
import Head from "next/head";
import Link from "next/link";
import SideBlock from "../../components/SideBlock";
import BreadCrum from "../../components/BreadCrum";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>MSC JOBS</title>
        <link rel="icon" href="/msc-logo.svg" />
        <meta name="MSC JOBS" content="Landing page of msc jobs" />
        <meta name="Location" content="Bhubaneswar" />
        <meta name="type" content="Consultancy" />
        <meta name="jobs" content="government" />
      </Head>
      <div className="bg-[#008DF4] w-full">
        <BreadCrum pageName="Study Material" />
        <div className="flex flex-row py-4">
          <SideBlock />
          <div className="grow">
            <div className="bg-white px-2 py-2 mx-12 md:mx-auto my-2 md:my-8 md:w-[800px] rounded">
              <div className="text-sm font-medium md:text-xl">
                Study Materials
              </div>
              <div className="flex flex-row py-1 text-xs md:text-sm">
                Share this{" "}
                <span>
                  <img
                    className="w-4 h-4 mx-1"
                    src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-facebook-social-media-justicon-flat-justicon.png"
                  />
                </span>
                <span>
                  <img
                    className="w-4 h-4 mx-1"
                    src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                  />
                </span>{" "}
                <span>
                  <img
                    className="w-4 h-4 mx-1"
                    src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-linkedin-social-media-justicon-flat-justicon.png"
                  />
                </span>
              </div>
              <hr />
              <div>
                <div className="my-2">
                  <div className="text-lg text-center">COURSES</div>
                  <hr className="my-1 border-t-1" />
                  <div className="flex flex-row justify-center my-1 text-sm md:text-lg">
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      UPSC
                    </div>
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      IITJEE
                    </div>
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      NEET
                    </div>
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      OLYMPIAD
                    </div>
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      NDA
                    </div>
                  </div>
                  <div className="mt-8 text-lg text-center">BOARD</div>
                  <hr className="my-1 border-t-1" />
                  <div className="flex flex-row justify-center my-1 text-sm md:text-lg">
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      CBSC
                    </div>
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      ICSE
                    </div>
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      JAC
                    </div>
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      BSB
                    </div>
                  </div>
                  <div className="mt-8 text-lg text-center">INSTITUTE</div>
                  <hr className="my-1 border-t-1" />
                  <div className="flex flex-row justify-center text-sm md:text-lg">
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      FIITJEE
                    </div>
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      BANSAL
                    </div>
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      AKASH
                    </div>
                    <div className="px-2 py-1 rounded bg-[#C4C4C4] mx-1 md:mx-8">
                      ALLEN
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
