// Sign up code for understanding of useState hook
// note in react-hook-form there is not need of
// useState() hook because it can handle by himselef



// import React from 'react'
// import logo from '../../assets/img/logo.png'
// import { useNavigate } from 'react-router-dom'
// import { FcGoogle } from "react-icons/fc";
// import { Controller, useForm } from 'react-hook-form'
// // import axios from 'axios'
// import { register } from '../services/userServices'
// import *  as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup';

// // validationSchema using yup step 1

// const validationSchema = yup.object().shape({

//   name: yup.string().required('Name is required')
//     .min(3, 'Name should contain minimum of 3 characters'),

//   email: yup.string().required('Email is required')
//     .test(
//       'is-gmail',
//       'email must be in Gmail address',
//       (value) => value.endsWith('@gmail.com')
//     ),

//   password: yup.string().required('password is required')
//     .min(8, 'password should contain minimum 8 characters'),

//   confirmPassword: yup.string()
//     .required('confirmPassword is required')
//     .oneOf([yup.ref('password'), null], 'Password must match')
// })


// const Signup = () => {

//   // step 2:initialize react-form-hook with resolver
//   const { control, handleSubmit, formState: { errors }, reset } = useForm({
//     resolver: yupResolver(validationSchema)
//   })
//   // const [formData, setFormData] = useState({
//   //   name: '',
//   //   email: '',
//   //   password: '',
//   //   confirmPassword: '',
//   // })

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target
//   //   setFormData({ ...formData, [name]: value })
//   // }

//   // const initialState = {
//   //   name: '',
//   //   email: '',
//   //   password: '',
//   //   confirmPassword: ''
//   // }

//   // const resetForm = () => {
//   //   setFormData(initialState)
//   // }

//   const navigate = useNavigate()

//   // const onSubmit = async (data) => {
//   //   // e.preventDefault();

//   //   // if (formData.password !== formData.confirmPassword) {
//   //   //   return alert('password and confirmpassword does not match!')
//   //   // }

//   //   register(data).then((res) => {
//   //     alert('Registration successful!')
//   //     // reset after sucessfully submit
//   //     // resetForm()
//   //     reset()
//   //     navigate('/login')
//   //   }).catch((err) => console.log(err, 'err'))

//   //   // try {
//   //   //   const response = await axios.post(
//   //   //     'http://localhost:4000/api/v1/register',
//   //   //     formData, // Send the formData object as the request body
//   //   //     {
//   //   //       headers: {
//   //   //         'Content-Type': 'application/json',
//   //   //       },
//   //   //     }
//   //   //   );

//   //   //   if (response.status === 201) {
//   //   //     // Registration successful, you can handle this as needed
//   //   //     alert('Registration successful!');
//   //   //     // reset after sucessfully submit
//   //   //     resetForm()
//   //   //     navigate('/login')
//   //   //   } else {
//   //   //     // Handle registration errors, display an error message
//   //   //     alert('Registration failed.');
//   //   //   }


//   //   // } catch (error) {
//   //   //   console.error('Error occurred:', error);
//   //   //   // Handle any other errors, display an error message
//   //   //   alert('Registration failed. Please try again.');
//   //   //   setFormData(formData)
//   //   // }
//   // };


//   const onSubmit = async (data) => {
//     try {
//       // Step 3: Perform form submission
//       await register(data);
//       alert('Registration successful!');
//       reset();
//       navigate('/login');
//     } catch (error) {
//       console.log('Error:', error);
//       alert('Registration failed. Please try again.');
//     }
//   };

//   return (
//     // main conatiner div
//     <div className='flex items-center justify-center flex-col   '>


//       {/* div for  logo and name of the website */}
//       <div className='flex items-center w-[25rem]   
//       flex-col justify-center bg-gray-400 pt-4'>
//         {/* Use flex items-center to align image and text */}
//         <img src={logo} alt="Website logo" style={{ display: 'block' }} />
//         {/* Set image to inline-block */}
//         <h3 className='pt-2'>Majestic</h3>
//         {/* Add some margin-left for spacing */}

//       </div>


//       {/* div for form and sign up  button */}
//       <div className='flex  items-center w-[25rem]   
//       flex-col justify-center bg-gray-400 '>
//         {/* step4:added the onSubmit handler to the form */}

//         <form className='mx-5' onSubmit={handleSubmit(onSubmit)}>
//           <label htmlFor="name" className='block'>Name*</label>

//           <Controller
//             name="name"
//             control={control}
//             defaultValue=""
//             render={({ field }) => (
//               <input type="text"
//                 // name="name" 
//                 id="name"
//                 className='block mt-2  bg-gray-100 text-black 
//            py-2 px-4 rounded-lg outline-none w-80 text-red '
//                 {...field}
//                 // onChange={handleChange}
//                 // value={formData.name} 
//                 required
//               />
//             )}
//           />
//           {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

//           {/* step 5: Usecontroller for input fields */}

//           <label htmlFor="email" className='block  mt-4'> Email*</label>
//           <Controller
//             name="email"
//             control={control}
//             defaultValue=''
//             render={({ field }) => (
//               <input type="email"
//                 id="email"
//                 className='block mt-4  bg-gray-100
//                                              text-black py-2 
//                                                 px-4 rounded-lg 
//                                                 outline-none w-80 '
//                 {...field}
//                 //  onChange={handleChange}
//                 // value={loginData.email} 
//                 required />
//             )}
//           />
//           {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

//           <label htmlFor="password" className='block '>Password*</label>

//           <Controller
//             name="password"
//             control={control}
//             defaultValue=""
//             render={({ field }) => (
//               <input
//                 type="password"
//                 //  name="password" 
//                 id="password"
//                 className='block mt-2 
//                bg-gray-100 text-black
//                py-2 px-4 rounded-lg
//                 outline-none w-80 '
//                 {...field}
//                 // onChange={handleChange}
//                 // value={formData.password}
//                 required />

//             )}
//           />
//           {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

//           <label htmlFor="name"
//             className='block'>
//             Confirm Password*</label>

//           <Controller
//             name="confirmPassword"
//             control={control}
//             defaultValue=""
//             render={({ field }) => (
//               <input type="password"
//                 // name="confirmPassword" 
//                 id="confirmPassword"
//                 className='block mt-2  bg-gray-100
//                  text-black 
//                 py-2 px-4 rounded-lg outline-none w-80 '

//                 {...field}
//                 // onChange={handleChange}
//                 // value={formData.confirmPassword}
//                 required
//               />
//             )}

//           />
//           {errors.confirmPassword && <p className='text-red-600'>{errors.confirmPassword.message}</p>}


//           <input type="submit" value="Sign Up"
//             className='bg-black text-white w-80 
//             rounded-3xl py-2 px-4 mt-2 cursor-pointer' />

//         </form>
//       </div>

//       {/* div for social media handle */}

//       <div className="flex items-center w-[25rem]   
//       flex-col justify-center bg-gray-400 pb-4">
//         <h1 style={{ margin: 'auto' }} className='pt-4'>OR</h1>
//         <div className="flex items-center 
//         justify-center
//         rounded-3xl
//          py-2 px-4 mt-2 cursor-pointer
//          bg-gray-300  text-black w-80 ">
//           <FcGoogle className='mr-2' />
//           <input type="submit" value={`Continue with google`} className='mr-4 ' />
//         </div>
//         <p className='pt-3'>Already have an account?
//           <span className='text-gray-900 font-bold cursor-pointer'
//             onClick={() => navigate('/login')}>login in</span></p>
//       </div>


//     </div>
//   )
// }

// export default Signup





//  login code for understanding of useState hook 
// note in react-hook-form there is not need of
// useState() hook because it can handle by himselef



// import React from 'react'
// import logo from '../../assets/img/logo.png'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import { FcGoogle } from "react-icons/fc";
// import { Controller, useForm } from 'react-hook-form'
// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'
// // import { reset } from 'react-hook-form';

// const Login = () => {

//     // const [loginData, setLoginData] = useState({
//     //     email: '',
//     //     password: '',
//     // })

//     const navigate = useNavigate()

//     // const handleChange = (e) => {
//     //     const { name, value } = e.target

//     //     setLoginData({ ...loginData, [name]: value })
//     // }

//     const onSubmit = async (data) => {
//         // e.preventDefault()

//         try {
//             const res = await axios.post('http://localhost:4000/api/v1/login', data)

//             if (res.status === 200) {
//                 const userData = res.data
//                 localStorage.setItem('userData', JSON.stringify(userData))
//                 alert('Login Successfully!')
//                 reset()
//                 navigate('/men')
//             } else {
//                 alert('Invalid User,Please signup to continue')
//             }


//         } catch (err) {
//             console.log('Error:', err)
//             alert('Inside catch error')
//         }
//     }

//     // step 1 validationSchema using yup

//     const validationSchema = yup.object().shape({

//         email:yup.string()
//             .required('Email is required')
//             .test(
//                 'is-gmail',
//                 'email must be in Gmail format',
//                 (value) => value.endsWith('@gmail.com')
//             ),

//         password: yup.string()
//             .required('Password is required')
//             .min(8, 'password  should contain minimum 8 characters')
//     })

//     // attch yupResolve with useform

//     const { control, handleSubmit,  formState: { errors }, reset } = useForm({
//         resolver: yupResolver(validationSchema)
//     })
//     return (
//         <div className='flex items-center justify-center flex-col'>

//             {/* div for  logo and name of the website */}
//             <div className='flex items-center justify-center flex-col 
//             bg-gray-400 w-[25rem] pt-4 '> {/* Use flex items-center to align image and text */}
//                 <img src={logo} alt="Website logo" style={{ display: 'block' }} /> {/* Set image to inline-block */}
//                 <h3 className='pt-2'>Majestic</h3>  {/* Add some margin-left for spacing */}

//             </div>

//             {/* div for email and password */}
//             <div className='flex  items-center justify-center
//             w-[25rem] bg-gray-400'>
//                 <form className='mx-5' onSubmit={handleSubmit(onSubmit)}>

//                     <label htmlFor="email" className='block  mt-4'> Email*</label>
//                     <Controller
//                         name="email"
//                         control={control}
//                         defaultValue=''
//                         render={({ field }) => (
//                             <input 
//                             type="email"
//                                 id="email"
//                                 className='block mt-4  bg-gray-100
//                                              text-black py-2 
//                                                 px-4 rounded-lg 
//                                                 outline-none w-80 '
//                                 {...field}
//                                 //  onChange={handleChange}
//                                 // value={loginData.email} 
//                                 required 
//                                 />
//                         )}
//                     />
//                     {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

//                     <label htmlFor="password"
//                         className='block  mt-4'>Password*</label>
//                     <Controller
//                         name='password'
//                         control={control}
//                         defaultValue=''

//                         render={({ field }) => (
//                             <input type="password"
//                                 id="password"
//                                 className='block mt-4 
//                          bg-gray-100 text-black
//                       py-2 px-4 rounded-lg outline-none w-80 '
//                                 {...field}
//                                 //   onChange={handleChange}
//                                 //     value={loginData.password} 
//                                 required />
//                         )}
//                     />

//                     {errors.password && <p className='text-red-600'>{errors.password.message}</p>}


//                     <input type="submit" value="Log In" className='bg-black text-white w-80 rounded-3xl py-2 px-4 mt-8 cursor-pointer' />

//                 </form>
//             </div>

//             {/* div for social media handle */}
//             <div className="flex items-center w-[25rem]   
//                          flex-col justify-center bg-gray-400 pb-4">
//                 <h1 style={{ margin: 'auto' }} className='pt-4'>OR</h1>
//                 <div className="flex items-center 
//                     justify-center
//                     rounded-3xl
//                     py-2 px-4 mt-2 cursor-pointer
//                     bg-gray-300  text-black w-80 ">
//                     <FcGoogle className='mr-2' />
//                     <input type="submit" value={`Continue with google`} className='mr-4 ' />
//                 </div>
//                 <p className='pt-3'>Don't have an account?
//                     <span className='text-gray-900 font-bold cursor-pointer'
//                         onClick={() => navigate('/signup')}>Sign up</span></p>
//             </div>
//         </div>
//     )
// }

// export default Login
