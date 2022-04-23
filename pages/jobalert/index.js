import Layout from "../../layout";
import Head from "next/head";

const Index = () => {
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
        <div className="text-3xl text-center text-bold">Job Alert</div>
        <hr className="my-4 border-t-2 border-red-400 w-[80%] mx-auto" />

        <form className="w-[80%] md:w-[40%] mx-auto">
          <div className="w-full px-4 py-4 mx-auto">
            <div className="text-xl font-bold"> Name</div>
            <input
              name="name"
              type="text"
              placeholder="Type your full name"
              className="w-full h-8 p-3 my-1 text-sm border border-black rounded"
            />
            <div className="mt-3 text-xl font-bold">Email Id</div>
            <input
              name="email"
              type="email"
              placeholder="Email Id"
              className="w-full h-8 p-3 my-1 text-sm border border-black rounded"
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
          </div>
          <div className="w-[20%] text-center py-2 my-4 mx-auto text-lg font-bold bg-blue-400 rounded">
            Submit
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Index;
