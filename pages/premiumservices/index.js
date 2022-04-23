import Layout from "../../layout";
import Head from "next/head";
import SideBlock from "../../components/SideBlock";
import BreadCrum from "../../components/BreadCrum";

const PremiumServicePreview = ({ service }) => {
  return (
    <div className="bg-[#C4C4C4] my-2 mx-2 p-2 rounded">
      <div>{service.title}</div>
      <div>{service.text1}</div>
      <div>{service.text2}</div>
    </div>
  );
};

const Index = () => {
  const premiumService1 = {
    title: "Experience Faculty",
    text1: "Connect with us @ 99/- year",
    text2: "Experience should be more than 2 years.",
    text3: "*Premium Assistance",
  };
  const premiumService2 = {
    title: "Fresher Faculty/Other Jobs",
    text1: "Connect with us @ 199/- year",
    text2: "Your Resume will be on Top Priority",
    text3: "*Job Guarantee",
  };
  const premiumService3 = {
    title: "Institute/Organisation",
    text1: "Connect with us @ 1000/- year",
    text2: "*Premium Assistance ",
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
          <SideBlock pageName="premiumservices" />
          <div className="grow">
            <div className="bg-white px-2 py-2 mx-12 md:mx-auto mb-2 md:mb-8 md:w-[800px] rounded">
              <div className="text-sm font-medium md:text-xl">
                Premium Services
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
              <div className="mx-4">
                <PremiumServicePreview service={premiumService1} />
                <PremiumServicePreview service={premiumService2} />
                <PremiumServicePreview service={premiumService3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
