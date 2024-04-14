import React, {useRef, useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import { UserContext } from "../ContextAPI/Context";
import './login.css'

const Login = () => {
  const navigate = useNavigate();
  const [error,setError]=useState('')
  const emailDOM= useRef();
  const passwordDOM= useRef();
  const [userData, setUserData] = useContext(UserContext);



  const handleSubmit=async(e)=>{
    e.preventDefault();
    const emailvalue=emailDOM.current.value;
    const passwordvalue=passwordDOM.current.value;

if( !emailvalue || !passwordvalue){
  alert("please enter all required fields")
  return;
}

try {
  const {data}= await axios.post('/users/login',{
    email:emailvalue,
    password:passwordvalue
    
  })
  setUserData({data})
  console.log(userData)
  
  
  alert("login sucessfully, you can access home page")
  navigate('/');
 localStorage.setItem('token', data.token)
  
  // console.log(data)

} catch (err) {
  console.log(err.response.data.msg)
  setError(err.response.data.msg)
  
}
  }

  return (
    <div div className='backgroundimage'>
<section className=' sm:block mx-auto md:flex md:justify-between  container-fluid max-w-[900px] pb-14  ' >
    
    <div className='bg-[#fff] mt-24 shadow-2xl h-[500px] bground  mr-8 container text-center rounded-2xl'>
    
        <div>
     <div className='text-xl pt-16 font-mono pb-3'>Login into your Account</div>
     <p className='text-center font-semibold text-sm'>Don't have an account? <Link to='/signup' className='text-red-400 text-sm'> Create a new account</Link></p>
     
     <form onSubmit={handleSubmit} className=' login-border mt-6 '>
              <div className='mb-5'>
                <input className=' border-current border w-[80%] h-[40px]  pl-2' type='email' placeholder='email' name='email' ref={emailDOM} />
              </div>
              <div className='mb-5'>
                <input type='password' className='border border-current w-[80%] h-[40px]  pl-2  ' placeholder='password' name='password' ref={passwordDOM} />
              </div>
              <div>
             {error && <small className=' text-red-600' >{error }</small>}
              </div>
              <div className="w-[98%]  text-customAbout text-sm font-medium cursor-pointer text-orange-500 pl-64">
                Forget Password?
              </div>
              <button className='text-lg font-mono my-5 px-14 py-2 hover:bg-blue-600 rounded w-[80%] text-white bg-blue-400'>Submit</button>

     </form>
     
     </div>
    </div>
    
       <div className='  m-5 container text-gray-800 mt-32 sm:mx-auto sm:max-w-[350px] md:max-w-[800px]'>
        <h6 className='text-red-600 font-serif text-sm ' >about</h6>
        <h1 className=" text-4xl  font-serif">
            <span
              className="text-2xl font-bold"
              style={{
                background: `linear-gradient(to right,rgb(214, 61, 0), rgb(211, 59, 0), rgb(151, 41, 0), rgb(61, 17, 0), rgb(61, 16, 0))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Evangadi Networks Q&A
            </span>
          </h1>
        <p className=' first-par my-4 '>No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.!</p>
        <p className='first-par my-6  '>Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.</p>
       
        <button className='text-center items-center text-white bg-orange-600  my-5  py-2 px-16 rounded'>HOW IT WORKS </button>

       </div>
       
    </section>
    </div>
  )
}

export default Login