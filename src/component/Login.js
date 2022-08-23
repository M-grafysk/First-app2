import React from 'react'
import { Formik } from 'formik'
import Swal from 'sweetalert2';
import "./Login.css"

export const Login = () => {
  const url ="http://localhost:5000";

  const loginSubmit= async (formdata)=>{
    console.log(formdata);

  const res = await fetch(url+'/user/authenticate',{
    method:'POST',
    body:JSON.stringify(formdata),
    headers:{
      'Content-Type' :'application/JSON'
    }
  })

  if(res.status===200){
    Swal.fire({
      icon:"success",
      title:"done",
      text:"you are logged in"
    })
  }
  else if(res.status===400){
    Swal.fire({
      icon:"error",
      title:"Error",
      text:"email or password is incorrect"
    })
  }
  else {
    Swal.fire({
      icon:"error",
      title:"Error",
      text:"something went wrong"
    })
  }
}
return (
    <div className='loginpage '>
      <div className='container'>
      <div className='c1 card '>
            
      <div className='card-body '>
      <h1 className='ip1 text-center'>Login Here </h1>
      <Formik initialValues ={{email :"",password :""}} onSubmit={loginSubmit}>
      {({values, handleChange,handleSubmit})=> (
      <form  onSubmit={handleSubmit}>
              <label className='username text-center d-block ' >Username</label>
  
              <input className=' form-control-sm d-block mb-4 mx-auto myinput' type="text"  onChange={handleChange} id="username"/>
              <label className='email text-center d-block ' >Email</label>
  
              <input className='form-control-sm d-block mb-4 mx-auto myinput' type="text"  onChange={handleChange} id="email"/>
              
              <label className='password text-center d-block  '  >Password</label>
              
              <input className='form-control-sm d-block mb-5 mx-auto myinput' type="Password"  onChange={handleChange} id="password"/>
             <a href=""> <h4 className='fp text-center  ' >Forget Password?</h4></a>
              
              <div className="text-center"><button className='li btn btn-md bg-dark' >Log In</button></div>
              <div className='text-center my-2'>
              <a href="Registerpage" className=' text-white '>Create Account</a>
              </div>       
            </form>
      )}
      </Formik>
      

      </div>
      </div>
      </div>
      </div>
  )
}

export default Login