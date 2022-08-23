import React from "react";
import {Formik} from "formik"
import Swal from "sweetalert2";
import "./Signup.css"
export const Register = () => {
    // create a function for form submit events
    const userSubmit=async(formdata)=>{
        console.log(formdata);
        // code to save data to database


        //to create a request 
        // url
        // request method
        // data to send 
        // data format
          

        const response=await fetch('http://localhost:5000/user/add',{
            method:'POST',
            body: JSON.stringify(formdata),
            headers:{
                'content-type':'application/json'
            }
        });
        console.log(response.status);
        if (response.status===200){
            Swal.fire({
                icon: "success",
                title:" nice",
                text:" signup done"
            })
        }else{
            Swal.fire({
                icon:"error",
                title:"ooppssiiii",
                text:"invalid"
            })
        }
    }
  return (
    <div className="bg">
    <div className='m1 d-flex justify-content-center align-items-center  '>
        <div className="container ">
            <div className="card">
                <div className="row">
                    <div className="col ">
                        <div className="img1"> </div>               
                    </div>
                        <div className="cc col">
                            <div className="card-body">
                                <h2 className='t1 text-center'>Register Here to Continue</h2>
                            <hr />
                            
            <Formik initialValues={{
                username:"",
                email:"",
                password:"",
            
            }}
            onSubmit={userSubmit}>
                {({values, handleChange,handleSubmit})=> (
                    <form onSubmit={handleSubmit}>
                    <div className="t2 col-md">
                        <label>UserName</label>
                    </div> 
                        <input className='input1 form-control' values={values.username} onChange={handleChange} id="username" />
                    <div className="t3 col-md">
                        <label>Email</label>
                    </div>
                        <input className='input1 form-control' values={values.email} onChange={handleChange} id="email"/>
                    <div className="t4 col-md">
                        <label>Password</label>
                    </div>
                        <input className='input1 form-control' values={values.password } onChange={handleChange} id="password" />
                    <button className='btn2 btn btn-md bg-dark' >REGISTER</button>
                </form>
                  )}
            </Formik>
            </div>    
            </div>
        </div>
    </div>
    </div>   
    </div>

    
    </div>
  );
};
export default Register;