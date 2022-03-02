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
        <div className="flex flex-row px-20 py-3 font-bold md:px-32 text-md md:text-4xl">
          <Link href="/">Home</Link>{" "}
          <span>
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/more-than.png"
              alt="> tag"
              className="mx-2 mt-2"
            />
          </span>{" "}
          Career Tips
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
            <div className="bg-white px-2 py-2 mx-12 md:mx-auto my-2 md:my-8 md:w-[800px] rounded">
              <div className="text-sm font-medium md:text-xl">Career Tips</div>
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
              <div className="mx-4 mb-4 text-sm md:text-base md:mx-28">
                <div className="my-3">
                  It is important to come up with your career planning as it
                  gives you the much needed direction and makes it clear there
                  where you see yourself in future. It makes you aware of your :
                </div>
                <div className="">
                  <ul className="list-disc list-inside">
                    <li>Strength</li>
                    <li>Weaknesses </li>
                    <li>Skills </li>
                    <li>Knowledge</li>
                  </ul>
                </div>
                <div className="">
                  Which are required to achieve your goals in future.
                </div>
              </div>
              <div className="mx-4 md:mx-8">
                <hr className="border-gray-600 border-t-1" />
                <div className="text-xl text-center">
                  Talk with us for career
                </div>
                <hr className="border-red-600 border-t-1" />
                <div className="my-2">
                  <form>
                    <div className="text-lg font-bold"> Name</div>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="border border-black w-[80%] md:w-[60%] rounded text-sm p-2 my-1"
                    />
                    <div className="text-lg font-bold"> Contact No</div>
                    <input
                      name="ContactNo"
                      type="text"
                      placeholder="Contact No"
                      className="border border-black w-[80%] md:w-[60%] rounded text-sm p-2 my-1"
                    />
                    <div className="text-lg font-bold">Email Id</div>
                    <input
                      name="email"
                      type="enail"
                      placeholder="Email Id"
                      className="border border-black w-[80%] md:w-[60%] rounded text-sm p-2 my-1"
                    />
                    <div className="text-lg font-bold">Write to Us</div>
                    <textarea
                      name="writetous"
                      type="text"
                      placeholder="Write your query"
                      className="border border-black w-[80%] md:w-[60%] rounded text-sm p-2 my-1"
                    />
                    <div className="w-[20%] text-center py-2 my-4 mx-auto text-lg font-bold bg-blue-400 rounded">
                      Submit
                    </div>
                  </form>
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
