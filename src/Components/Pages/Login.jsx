import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";


const Login = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://localhost:4000/api/v1/login', loginData)

            if (res.status === 200) {
                const userData = res.data
                localStorage.setItem('userData',JSON.stringify(userData))
                alert('Login Successfully!')
                navigate('/men')
            } else {
                alert('Invalid User,Please signup to continue')
            }


        } catch (err) {
            console.log('Error:', err)
            alert('Inside catch error')
        }
    }
    return (
        <div className='flex items-center justify-center flex-col'>

            {/* div for  logo and name of the website */}
            <div className='flex items-center justify-center flex-col 
            bg-gray-400 w-[25rem] pt-4 '> {/* Use flex items-center to align image and text */}
                <img src={logo} alt="Website logo" style={{ display: 'block' }} /> {/* Set image to inline-block */}
                <h3 className='pt-2'>Majestic</h3>  {/* Add some margin-left for spacing */}

            </div>

            {/* div for email and password */}
            <div className='flex  items-center justify-center
            w-[25rem] bg-gray-400'>
                <form className='mx-5' onSubmit={handleSubmit}>

                    <label htmlFor="email" className='block  mt-4'> Email*</label>
                    <input type="email" name="email" id="email"
                        className='block mt-4  bg-gray-100 text-black py-2 
                    px-4 rounded-lg outline-none w-80 ' onChange={handleChange}
                        value={loginData.email} required />

                    <label htmlFor="password" className='block  mt-4'>Password*</label>
                    <input type="password" name="password" id="password"
                        className='block mt-4  bg-gray-100 text-black
                      py-2 px-4 rounded-lg outline-none w-80 ' onChange={handleChange}
                        value={loginData.password} required />


                    <input type="submit" value="Log In" className='bg-black text-white w-80 rounded-3xl py-2 px-4 mt-8 cursor-pointer' />

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
                <p className='pt-3'>Don't have an account?
                    <span className='text-gray-900 font-bold cursor-pointer'
                        onClick={() => navigate('/signup')}>Sign up</span></p>
            </div>
        </div>
    )
}

export default Login
