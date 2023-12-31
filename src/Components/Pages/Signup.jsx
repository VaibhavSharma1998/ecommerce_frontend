import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

import { Controller, useForm } from "react-hook-form";
// import axios from 'axios'
import { register } from "../services/userServices";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

// validationSchema using yup step 1

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should contain minimum of 3 characters"),

  email: yup
    .string()
    .required("Email is required")
    .test("is-gmail", "email must be in Gmail address", (value) =>
      value.endsWith("@gmail.com")
    ),

  password: yup
    .string()
    .required("password is required")
    .min(8, "password should contain minimum 8 characters"),

  confirmPassword: yup
    .string()
    .required("confirmPassword is required")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  // step 2:initialize react-form-hook with resolver
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();


  const onSubmit = (data) => {
    setIsLoading(true);
    register(data)
      .then((res) => {
        // register succesful
        toast.success("Registration successful!")
        // alert("Registration successful!");
        console.log("sigup:",res.data.user.name)
        localStorage.setItem("personName",JSON.stringify(res.data.user.name))
        reset();
        navigate("/login");
        setIsLoading(false);
      })
      .catch((error) => {
        // Registration failed
        console.log("Error", error);
        toast.error("Registration failed. Please try again.")
        // alert("Registration failed. Please try again.");
        setIsLoading(false);
      });
  };

  return (
    // main conatiner div
    <div className="flex items-center justify-center flex-col   ">
      {/* div for  logo and name of the website */}
      <div
        className="flex items-center w-full
      flex-col justify-center bg-gray-400 pt-10"
      >
        {/* Use flex items-center to align image and text */}
        <img src={logo} alt="Website logo" style={{ display: "block" }} />
        {/* Set image to inline-block */}
        <h3 className="pt-2">Majestic</h3>
        {/* Add some margin-left for spacing */}
      </div>

      {/* div for form and sign up  button */}
      <div
        className="flex  items-center w-full
      flex-col justify-center bg-gray-400 "
      >
        {/* step4:added the onSubmit handler to the form */}

        <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="block pt-4">
            Name <span className="text-red-600"> *</span>
          </label>

          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                // name="name"
                id="name"
                className="block mt-2  bg-gray-100
                         text-black 
                         py-2 px-4 rounded-lg 
                          outline-none w-80 text-red "
                {...field}
              />
            )}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          {/* step 5: Usecontroller for input fields */}

          <label htmlFor="email" className="block  pt-4">
            {" "}
            Email<span className="text-red-600"> *</span>
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="email"
                id="email"
                className="block mt-2  bg-gray-100
                        text-black py-2 
                        px-4 rounded-lg 
                        outline-none w-80 "
                {...field}
              />
            )}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          <label htmlFor="password" className="block pt-4">
            Password<span className="text-red-600"> *</span>
          </label>

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="password"
                id="password"
                className="block mt-2 
               bg-gray-100 text-black
               py-2 px-4 rounded-lg
                outline-none w-80 "
                {...field}
              />
            )}
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}

          <label htmlFor="name" className="block pt-4">
            Confirm Password<span className="text-red-600"> *</span>
          </label>

          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="password"
                // name="confirmPassword"
                id="confirmPassword"
                className="block mt-2  bg-gray-100
                 text-black 
                py-2 px-4 rounded-lg outline-none w-80 "
                {...field}
                // onChange={handleChange}
                // value={formData.confirmPassword}
              />
            )}
          />
          {errors.confirmPassword && (
            <p className="text-red-600">{errors.confirmPassword.message}</p>
          )}

          <input
            type="submit"
            value={isLoading ? "loading..." : "Sign Up"}
            className="bg-black  text-white w-80 
            rounded-3xl py-2 px-4 mt-10 cursor-pointer"
          />
        </form>
      </div>

      {/* div for social media handle */}

      <div
        className="flex items-center w-full
      flex-col justify-center bg-gray-400 pb-10"
      >
       
        <p className="pt-3">
          Already have an account?
          <span
            className="text-gray-900 font-bold cursor-pointer"
            onClick={() => navigate("/login")}
          >
            login in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
