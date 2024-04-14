
import React,{useRef} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import './login.css'
import axios from '../../axios'


const Signup = () => {
  const navigate= useNavigate();
  const usernameDOM= useRef();
  const firstnameDOM= useRef();
  const lastnameDOM= useRef();
  const emailDOM= useRef();
  const passwordDOM= useRef();
  // const cpassswordDOM= useRef();
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const usernamevalue=usernameDOM.current.value;
    const firstnamevalue=firstnameDOM.current.value;
    const lastnamevalue=lastnameDOM.current.value;
    const emailvalue=emailDOM.current.value;
    const passwordvalue=passwordDOM.current.value;
    // const cpasswordvalue=cpassswordDOM.current.value;
if(!usernamevalue || !firstnamevalue ||!lastnamevalue || !emailvalue || !passwordvalue){
  alert("please enter all required fields")
  return;
}
try {
  // const response =
    await axios.post('/users/register', {
    username:usernamevalue,
    firstname:firstnamevalue,
    lastname:lastnamevalue,
    email:emailvalue,
    password:passwordvalue,
    // c_password:cpasswordvalue
  })
  
  alert("registration sucessfully, please login")
  navigate('/login');
  
} catch (error) {
  console.log(error);
  
}
  }

  return (
    <div className='backgroundimage'>
    <section className=' sm:block mx-auto md:flex md:justify-between  container-fluid max-w-[900px] pb-14 ' >
    <div className='bg-[#fff] shadow-2xl md:h-[550px] mt-10  mr-8 container text-center rounded-2xl '>
        <div className='  '>
     <div className='text-2xl pt-5 pb-3'>Join to the network</div>
     <p className='text-center'>Alerady have an account?
      <Link className='text-red-400' to='/login'>signin</Link></p>
     <form className='mt-2 login-border' onSubmit={handleSubmit}  >
     <div className='mb-5'> <input  type='text' className=' border-current border w-[80%] h-[40px]' placeholder='userName' name='username' ref={usernameDOM}/></div>
      
       <div className='mb-5'><input type='text'className='border-current border w-[39%] h-[40px] mr-1' placeholder='firstName' name='firstName' ref={firstnameDOM}/>
        <input type='text' className='border-current  border w-[39%] h-[40px]' placeholder='LastName' name='lastName' ref={lastnameDOM}/></div>
       
       <div className='mb-5'> <input className=' border-current border w-[80%] h-[40px]' type='email' placeholder='email' name='email' ref={emailDOM} /> </div>
       
       <div className='mb-5'><input type='password' className='border border-current w-[80%] h-[40px] ' placeholder='password' name='password' ref={passwordDOM} /> </div>
       <button className='text-lg font-mono my-5 px-14 py-2 hover:bg-blue-600 rounded w-[80%] text-white bg-blue-400'>Agree and Join</button>
              <p className='m-3'>I agree to the <a href='/' className='text-red-600 border-b-2 border-orange-600'>privacy policy</a> and <a className='text-red-600 border-b-2 border-orange-600 ' href='/'>terms of service</a></p>
              
       <a href='/' className=' sm:mb-5  text-orange-600'>Already have an account?</a>
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

export default Signup