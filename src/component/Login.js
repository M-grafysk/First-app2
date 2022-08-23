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
     
    <>
    {/* Section: Design Block */}
    <section className="" style={{marginTop:'100px', backgroundColor:' rgb(245 245 245)'}}>
      {/* Jumbotron */}
      <div
        className="px-4 py-5 px-md-5 text-center text-lg-start"
        style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
      >
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                The best offer <br />
                <span className="text-primary">for your business</span>
              </h1>
              <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                itaque accusantium odio, soluta, corrupti aliquam quibusdam
                tempora at cupiditate quis eum maiores libero veritatis? Dicta
                facilis sint aliquid ipsum atque?
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                <Formik initialValues ={{email :"",password :""}} onSubmit={loginSubmit}>
      {({values, handleChange,handleSubmit})=> (
      <form  onSubmit={handleSubmit}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        onChange={handleChange} value={values.email}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        onChange={handleChange} value={values.password}
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example33"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>
                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Login
                    </button>
                    {/* Register buttons */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github" />
                      </button>
                    </div>
                    </form>
      )}
      </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </section>
    {/* Section: Design Block */}
  </>
  
  )
}

export default Login