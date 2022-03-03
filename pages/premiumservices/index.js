import Layout from "../../layout";
import Head from "next/head";
import Link from "next/link";
import SideBlock from "../../components/SideBlock";
import BreadCrum from "../../components/BreadCrum";

const index = () => {
  const premiumService = {
    title: "Experience Faculty",
    text1: "Connect with us @ 99/- year",
    text2: "Experience should be more than 2 years.",
    text3: "*Premium Assistance",
  };

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
        <BreadCrum pageName="Premium Services" />
        <div className="flex flex-row py-4">
          <SideBlock />
          <div className="grow">
            <div className="bg-white px-2 py-2 mx-12 md:mx-auto my-8 md:w-[650px] rounded">
              <div className="text-sm font-medium md:text-xl">
                Premium Materials
              </div>
              <div className="flex flex-row text-xs md:text-sm">
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
              <div className="mx-4">
                <div className="bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
