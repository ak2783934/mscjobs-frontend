import Layout from "../../layout";
import Head from "next/head";
import Link from "next/link";
import SideBlock from "../../components/SideBlock";
import BreadCrum from "../../components/BreadCrum";
import { api } from "../api";
import * as Yup from "yup";
import { useFormik } from "formik";

const Index = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      emailId: "",
      contactNo: "",
      query: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(3, "Too short").required("required"),
      emailId: Yup.string().email("Must be a valid email").required("required"),
      contactNo: Yup.string().required("required"),
      query: Yup.string().min(3, "Too short").required("required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await api
        .post("/careertips/create", values, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          alert("Form submitted successfully");
          resetForm();
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    },
  });
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
        <BreadCrum pageName="Career Tips" />
        <div className="flex flex-row py-4">
          <SideBlock pageName="careertips" />
          <div className="grow">
            <div className="bg-white px-2 py-2 mx-12 md:mx-auto mb-2 md:mb-8 md:w-[800px] rounded">
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
                  <form onSubmit={formik.handleSubmit}>
                    <div className="text-lg font-bold"> Name</div>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="border border-black w-[80%] md:w-[60%] rounded text-sm p-2 my-1"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div>{formik.errors.name}</div>
                    ) : null}
                    <div className="text-lg font-bold"> Contact No</div>
                    <input
                      name="contactNo"
                      type="text"
                      id="contactNo"
                      placeholder="Contact No"
                      className="border border-black w-[80%] md:w-[60%] rounded text-sm p-2 my-1"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.contactNo}
                    />
                    {formik.touched.contactNo && formik.errors.contactNo ? (
                      <div>{formik.errors.contactNo}</div>
                    ) : null}
                    <div className="text-lg font-bold">Email Id</div>
                    <input
                      name="emailId"
                      type="email"
                      placeholder="Email Id"
                      id="emailId"
                      className="border border-black w-[80%] md:w-[60%] rounded text-sm p-2 my-1"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.emailId}
                    />
                    {formik.touched.emailId && formik.errors.emailId ? (
                      <div>{formik.errors.emailId}</div>
                    ) : null}
                    <div className="text-lg font-bold">Write to Us</div>
                    <textarea
                      name="query"
                      type="text"
                      placeholder="Write your query"
                      id="query"
                      className="border border-black w-[80%] md:w-[60%] rounded text-sm p-2 my-1"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.query}
                    />
                    {formik.touched.query && formik.errors.query ? (
                      <div>{formik.errors.query}</div>
                    ) : null}
                    <div className="px-4 py-1 mx-auto">
                      <div className="w-[30%] mx-auto ">
                        <button
                          className="w-full py-2 mx-auto my-4 text-lg font-bold text-center bg-blue-400 rounded"
                          name="submit"
                          value="submit"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
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

export default Index;
