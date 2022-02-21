import Layout from "../../layout";
import Head from "next/head";

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
      <div className="w-full bg-white">
        <hr className="my-4 border border-slate-400 " />
        <div className="text-3xl text-center text-bold">SIGN UP</div>
        <hr className="my-4 border-t-2 border-red-400 w-[80%] mx-auto" />

        <form className="">
          <div className="px-4 py-4 w-[80%] md:w-[60%] mx-auto">
            <div className="text-xl font-bold"> Name</div>
            <input
              name="name"
              type="text"
              placeholder="Type your full name"
              className="border border-black w-[80%] rounded md:w-[60%] h-8 text-sm p-3 my-1"
            />
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[50%]">
                <div className="mt-3 text-xl font-bold">Gender</div>
                <div className="flex flex-row my-1">
                  <div className="text-lg">Male</div>
                  <input
                    name="gender"
                    type="radio"
                    value="Male"
                    className="mx-1 my-auto mr-4"
                  />
                  <div className="text-lg">Female</div>
                  <input
                    name="gender"
                    type="radio"
                    value="Female"
                    className="mx-1 my-auto mr-4"
                  />
                  <div className="text-lg">Others</div>
                  <input
                    name="gender"
                    type="radio"
                    value="Others"
                    className="mx-1 my-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-[50%]">
                <div className="mt-3 text-xl font-bold">Phone</div>
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                  className="border border-black rounded w-[80%] md:w-[60%] h-8 text-sm p-3 my-1"
                />
              </div>
            </div>
            <div className="mt-3 text-xl font-bold">Email Id</div>
            <input
              name="email"
              type="email"
              placeholder="Email Id"
              className="border border-black rounded w-[80%] md:w-[60%] h-8 text-sm p-3 my-1"
            />
            <div className="mt-3 text-xl font-bold">Name of Job Post</div>

            <div className="flex flex-row">
              <div className="text-lg">Teaching Job</div>
              <input
                name="typeofjob"
                type="radio"
                value="Teaching Job"
                className="mx-4 my-auto"
              />
              <div className="text-lg">Non Teaching Job</div>
              <input
                name="typeofjob"
                type="radio"
                value="Non Teaching Job"
                className="mx-4 my-auto"
              />
            </div>
            <div className="flex flex-col my-4 md:flex-row">
              <div className="w-[50%]">
                <div className="text-xl font-bold">Upload resume</div>
                <input type="file" name="resume" className="h-10 my-2" />
              </div>
              <div className="w-[50%]">
                <div className="text-xl font-bold">Upload photo</div>
                <input type="file" name="resume" className="h-10 my-2" />
              </div>
            </div>
          </div>
          <div className="w-[20%] text-center py-2 my-4 mx-auto text-lg font-bold bg-blue-400 rounded">
            Submit
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default index;
