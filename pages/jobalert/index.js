import React, { useState, useEffect } from "react";
import Layout from "../../layout";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { api } from "../api";

const Index = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      emailId: "",
      jobType: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(3, "Too Short!")
        .max(32, "Too Long!")
        .required("Required"),
      emailId: Yup.string().email().required("Required"),
      jobType: Yup.string()
        .min(3, "Too Short!")
        .max(32, "Too Long!")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      api
        .post(`/freejobalert/create`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          alert("form submitted successfully");
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
        <div className="text-3xl text-center text-bold">Job Alert</div>
        <hr className="my-4 border-t-2 border-red-400 w-[80%] mx-auto" />

        <form
          className="w-[80%] md:w-[40%] mx-auto"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full px-4 py-4 mx-auto">
            <div className="text-xl font-bold"> Name</div>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Type your full name"
              className="w-full h-8 p-3 my-1 text-sm border border-black rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
            <div className="mt-3 text-xl font-bold">Email Id</div>
            <input
              name="emailId"
              id="emailId"
              type="email"
              placeholder="Email Id"
              className="w-full h-8 p-3 my-1 text-sm border border-black rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emailId}
            />
            {formik.touched.emailId && formik.errors.emailId ? (
              <div>{formik.errors.emailId}</div>
            ) : null}

            <div className="py-1 mx-auto ">
              <div className="mt-3 text-xl font-bold">Job Category</div>
              <select
                id="jobType"
                name="jobType"
                className="w-full h-8 my-1 text-sm border border-black rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.jobType}
              >
                <option
                  value=""
                  selected
                  disabled
                  hidden
                  label="Select a job category"
                >
                  Select a job type
                </option>
                <option value="State Government" label="State Government">
                  State Government
                </option>
                <option value="Central Government" label="Central Government">
                  Central Government
                </option>
                <option value="Teaching jobs" label="Teaching jobs">
                  Teaching jobs
                </option>
                <option value="Home Tutor jobs" label="Home Tutor jobs">
                  Home Tutor jobs
                </option>
                <option value="Other jobs" label="Other jobs">
                  Other jobs
                </option>
              </select>
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
