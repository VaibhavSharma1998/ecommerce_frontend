import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'
// import { register } from '../services/userServices'


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const resetForm = () => {
    setFormData(initialState)
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert('password and confirmpassword does not match!')
    }

    // register(formData).then((res) => console.log(res, 'res')).catch((err) => console.log(err, 'err'))

    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/register',
        formData, // Send the formData object as the request body
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        // Registration successful, you can handle this as needed
        alert('Registration successful!');
        // reset after sucessfully submit
        resetForm()
        navigate('/login')
      } else {
        // Handle registration errors, display an error message
        alert('Registration failed.');
      }


    } catch (error) {
      console.error('Error occurred:', error);
      // Handle any other errors, display an error message
      alert('Registration failed. Please try again.');
      setFormData(formData)
    }
  };


  return (
    // main conatiner div
    <div className='flex items-center justify-center flex-col   '>

      
      {/* div for  logo and name of the website */}
      <div className='flex items-center w-[25rem]   
      flex-col justify-center bg-gray-400 pt-4'>
        {/* Use flex items-center to align image and text */}
        <img src={logo} alt="Website logo" style={{ display: 'block' }} />
        {/* Set image to inline-block */}
        <h3 className='pt-2'>Majestic</h3>
        {/* Add some margin-left for spacing */}

      </div>


      {/* div for form and sign up  button */}
      <div className='flex  items-center w-[25rem]   
      flex-col justify-center bg-gray-400 '>
        <form className='mx-5' onSubmit={handleSubmit}>
          <label htmlFor="name" className='block'>Name*</label>
          <input type="text" name="name" id="name"
            className='block mt-2  bg-gray-100 text-black 
           py-2 px-4 rounded-lg outline-none w-80 '
            onChange={handleChange}
            value={formData.name} required
          />

          <label htmlFor="email" className='block'>Email*</label>
          <input type="email" name="email" id="email"
            onChange={handleChange} value={formData.email} required
            className='block mt-2  bg-gray-100 text-black 
            py-2 px-4 rounded-lg outline-none w-80 ' />

          <label htmlFor="password" className='block '>Password*</label>
          <input type="password" name="password" id="password"
            className='block mt-2  bg-gray-100 text-black
             py-2 px-4 rounded-lg outline-none w-80 '
            onChange={handleChange}
            value={formData.password}
            required />

          <label htmlFor="name" className='block'>Confirm Password*</label>
          <input type="password" name="confirmPassword" id="confirmPassword"
            className='block mt-2  bg-gray-100
             text-black 
            py-2 px-4 rounded-lg outline-none w-80 '
            onChange={handleChange}
            value={formData.confirmPassword}
            required />

          <input type="submit" value="Sign Up"
            className='bg-black text-white w-80 
            rounded-3xl py-2 px-4 mt-2 cursor-pointer' />

        </form>
      </div>

      {/* div for social media handle */}

      <div className="flex items-center w-[25rem]   
      flex-col justify-center bg-gray-400 pb-4">
        <h1 style={{ margin: 'auto' }} className='pt-4'>OR</h1>
        <div className="flex items-center 
        justify-center
        rounded-3xl
         py-2 px-4 mt-2 cursor-pointer
         bg-gray-300  text-black w-80 ">
          <FcGoogle className='mr-2' />
          <input type="submit" value={`Continue with google`} className='mr-4 ' />
        </div>
        <p className='pt-3'>Already have an account? 
        <span className='text-gray-900 font-bold cursor-pointer' 
        onClick={()=>navigate('/login')}>login in</span></p>
      </div>

    
    </div>
  )
}

export default Signup