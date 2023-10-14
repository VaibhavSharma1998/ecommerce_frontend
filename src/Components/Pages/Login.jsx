import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
// import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { login } from "../services/userServices";
import { FcGoogle } from "react-icons/fc";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";


const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

 

  // const onSubmit = async (data) => {
  //     // e.preventDefault()

  //     try {
  //         const res = await axios.post('http://localhost:4000/api/v1/login', data)

  //         if (res.status === 200) {
  //             const userData = res.data
  //             localStorage.setItem('userData', JSON.stringify(userData))
  //             alert('Login Successfully!')
  //             reset()
  //             navigate('/men')
  //         } else {
  //             alert('Invalid User,Please signup to continue')
  //         }

  //     } catch (err) {
  //         console.log('Error:', err)
  //         alert('Inside catch error')
  //     }
  // }

  const onSubmit = (data) => {
    setIsLoading(true);
    login(data)
      .then((res) => {
        
        toast.success("Login Sucessfully!")
        console.log(res,"res")
        localStorage.setItem("token", JSON.stringify(res.data.token));
        reset();
        navigate("/men");
        setIsLoading(false);
        window.location.reload()
      })
      .catch((error) => {
        console.log("Error:", error);
        toast.error("Login Failed!")
       
        setIsLoading(false);
      });
  };

  // step 1 validationSchema using yup

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .test("is-gmail", "email must be in Gmail format", (value) =>
        value.endsWith("@gmail.com")
      ),

    password: yup
      .string()
      .required("Password is required")
      .min(8, "password  should contain minimum 8 characters"),
  });

  // attch yupResolve with useform

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  return (
    <div className="flex items-center  flex-col w-100 px-[1 0%]">
      {/* div for  logo and name of the website */}
      <div
        className="flex items-center justify-center flex-col 
            bg-gray-400  pt-10 w-full "
      >
        {" "}
        {/* Use flex items-center to align image and text */}
        <img src={logo} alt="Website logo" style={{ display: "block" }} />{" "}
        {/* Set image to inline-block */}
        <h3 className="pt-2">Majestic</h3>{" "}
        {/* Add some margin-left for spacing */}
      </div>

      {/* div for email and password */}
      <div
        className="flex  items-center justify-center
        w-full bg-gray-400 pt-10"
      >
        <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="block  mt-4">
            {" "}
            Email:<span className="text-red-600"> *</span>
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="email"
                id="email"
                className="block mt-4  bg-gray-100
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

          <label htmlFor="password" className="block  mt-10">
            Password:<span className="text-red-600"> *</span>
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="password"
                id="password"
                className="block mt-4 
                         bg-gray-100 text-black
                      py-2 px-4 rounded-lg outline-none w-80 "
                {...field}
                //   onChange={handleChange}
                //     value={loginData.password}
              />
            )}
          />

          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}

          <input
            type="submit"
            value={isLoading ? "loading..." : "Log In"}
            className="bg-black text-white w-80 
                    rounded-3xl py-2 px-4 mt-10 cursor-pointer"
          />
          
        </form>
      </div>

      {/* div for social media handle */}
      <div
        className="flex items-center w-full
                         flex-col justify-center bg-gray-400 pb-4 pt-10"
      >
        {/* <h1 style={{ margin: "auto" }} className="pt-4">
          OR
        </h1>
        <div
          className="flex items-center 
                    justify-center
                    rounded-3xl
                    py-2 px-4 mt-2 cursor-pointer
                    bg-gray-300  text-black w-80 "
        >
          <FcGoogle className="mr-2" />
          <input
            type="submit"
            value={`Continue with google`}
            className="mr-4 "
          />
        </div> */}
        <p className="pt-3 pb-10">
          Don't have an account?
          <span
            className="text-gray-900 font-bold cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
