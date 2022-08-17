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
      icon:"error",
      title:"Error",
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
    <div className='loginpage pt-5'>
      <div className='container'>
      <div className='card'>
      <div className='card-body'>
      <h3 className='text-center'>Login here </h3>
      <Formik initialValues ={{email :"",password :""}} onSubmit={loginSubmit}>
      {({values, handleChange,handleSubmit})=> (
      <form  onSubmit={handleSubmit}>
              <label className='text-center d-block ' style={{marginRight:'180px', fontFamily:'mairy', fontWeight:'bold', fontSize:'20px' }}>Username</label>
  
              <input className='form-control-sm d-block mb-4 mx-auto myinput' type="text"  onChange={handleChange} id="username"/>
              
              <label className='text-center d-block  ' style={{marginRight:'180px', fontFamily:'mairy', fontWeight:'bold', fontSize:'20px' }} >Password</label>
              
              <input className='form-control-sm d-block mb-5 mx-auto myinput' type="Password"  onChange={handleChange} id="password"/>
             <a href=""> <h4 className='text-center text-black mb-4' style={{fontSize:'12px' ,marginTop:'-40px',marginLeft:'100px'}}>Forget Password?</h4></a>
              
              <div className="text-center"><button className='btn btn-md bg-dark ' type='submit' style={{ color:'white', width:'130px'}} >Log In</button></div>
              <div className='text-center my-2'>
              <a href="Registerpage" className=' text-dark ' style={{ fontFamily:'mairy',fontSize:'16px', fontWeight:'bold'}}>Create Account</a>
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
