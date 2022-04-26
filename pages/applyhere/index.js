import React, { useState, useEffect } from "react";
import Layout from "../../layout";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { api } from "../api";

const Index = () => {
  const [queryData, setQueryData] = useState({});
  useEffect(() => {
    const data = Router.query;
    console.log(data);
    setQueryData(data);
  }, []);

  const formik = useFormik({
    initialValues: {
      nameOfCandidate: "",
      contactNo: "",
      gender: "",
      emailId: "",
    },
    validationSchema: Yup.object().shape({
      nameOfCandidate: Yup.string()
        .min(3, "Too Short!")
        .max(32, "Too Long!")
        .required("Required"),
      contactNo: Yup.string().required("Required"),
      gender: Yup.string()
        .min(3, "Too Short!")
        .max(32, "Too Long!")
        .required("Required"),
      emailId: Yup.string()
        .min(3, "Too Short!")
        .max(32, "Too Long!")
        .required("Required"),
      resume: Yup.mixed().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      var formData = new FormData();
      formData.append("nameOfCandidate", values.nameOfCandidate);
      formData.append("contactNo", values.contactNo);
      formData.append("gender", values.gender);
      formData.append("emailId", values.emailId);
      formData.append("resume", values.resume);
      console.log(values);
      const data = Router.query;
      console.log(data);
      api
        .post(`jobapplication/${queryData.jobid}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          alert("Applied successfully");
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
      <div className="w-full bg-white">
        <hr className="my-4 border border-slate-400 " />
        <div className="text-3xl text-center text-bold">Apply here</div>
        <hr className="my-4 border-t-2 border-red-400 w-[80%] mx-auto" />

        <form className="" onSubmit={formik.handleSubmit}>
          <div className="px-4 py-4 w-[80%] md:w-[40%] mx-auto">
            <div className="text-xl font-bold"> Name</div>
            <input
              name="nameOfCandidate"
              type="text"
              id="nameOfCandidate"
              placeholder="Type your full name"
              className="w-full h-8 p-3 my-1 text-sm border border-black rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nameOfCandidate}
            />
            {formik.touched.nameOfCandidate && formik.errors.nameOfCandidate ? (
              <div>{formik.errors.nameOfCandidate}</div>
            ) : null}
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[50%]">
                <div className="mt-3 text-xl font-bold">Gender</div>
                <div className="flex flex-row my-1">
                  <div className="text-lg">Male</div>
                  <input
                    id="Male"
                    name="gender"
                    type="radio"
                    value="Male"
                    className="mx-1 my-auto mr-4"
                    onChange={formik.handleChange}
                  />
                  <div className="text-lg">Female</div>
                  <input
                    id="Female"
                    name="gender"
                    type="radio"
                    value="Female"
                    onChange={formik.handleChange}
                    className="mx-1 my-auto mr-4"
                  />
                  <div className="text-lg">Others</div>
                  <input
                    id="Others"
                    name="gender"
                    type="radio"
                    value="Others"
                    onChange={formik.handleChange}
                    className="mx-1 my-auto"
                  />
                </div>
                {formik.touched.gender && formik.errors.gender ? (
                  <div>{formik.errors.gender}</div>
                ) : null}
              </div>
              <div className="w-full md:w-[50%]">
                <div className="mt-3 text-xl font-bold">Phone</div>
                <input
                  name="contactNo"
                  id="contactNo"
                  type="text"
                  placeholder="Phone number"
                  className="w-full h-8 p-3 my-1 text-sm border border-black rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contactNo}
                />
                {formik.touched.contactNo && formik.errors.contactNo ? (
                  <div>{formik.errors.contactNo}</div>
                ) : null}
              </div>
            </div>
            <div className="mt-3 text-xl font-bold">Email Id</div>
            <input
              name="emailId"
              type="email"
              id="emailId"
              placeholder="Email Id"
              className="w-full h-8 p-3 my-1 text-sm border border-black rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emailId}
            />
            {formik.touched.emailId && formik.errors.emailId ? (
              <div>{formik.errors.emailId}</div>
            ) : null}
            <div className="flex flex-col my-4 md:flex-row">
              <div className="w-full">
                <div className="text-xl font-bold">Upload resume</div>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  className="w-full p-2 my-2 border border-black rounded"
                  onBlur={formik.handleBlur}
                  onChange={(event) => {
                    const file = event.target.files;
                    let myFiles = Array.from(file);
                    formik.setFieldValue("resume", myFiles[0]);
                  }}
                />
                {formik.touched.resume && formik.errors.resume ? (
                  <div>{formik.errors.resume}</div>
                ) : null}
              </div>
            </div>
          </div>
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
    </Layout>
  );
};

export default Index;
