import Layout from "../../layout";
import Head from "next/head";
import Link from "next/link";

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
        <div className="px-20 py-3 font-bold md:px-32 text-md md:text-4xl">
          <Link href="/">Home</Link>>> Other Jobs
        </div>
        <div className="flex flex-row py-4">
          <div className="hidden w-1/3 md:block">
            <div className="bg-white w-[230px] rounded h-auto mx-auto px-4 py-10">
              <Link href="/governmentjobs">
                <div className="py-2 cursor-pointer">Government Jobs</div>
              </Link>
              <Link href="teachingjobs">
                <div className="py-2 cursor-pointer">Teaching Jobs</div>
              </Link>
              <Link href="otherjobs">
                <div className="py-2 cursor-pointer">Other Jobs</div>
              </Link>
              <Link href="permiummaterials">
                <div className="py-2 cursor-pointer">Premium Materials</div>
              </Link>
              <Link href="careertips">
                <div className="py-2 cursor-pointer">Career Tips</div>
              </Link>
            </div>
          </div>
          <div className="grow">
            <div className="bg-white px-2 py-2 mx-12 md:mx-auto my-8 md:w-[650px] rounded">
              <div className="text-sm font-medium md:text-xl">Other Jobs</div>
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
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
