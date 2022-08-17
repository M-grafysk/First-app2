import React from "react";
import {Formik} from "formik"
import Swal from "sweetalert2";
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
                text:" you are hired"
            })
        }else{
            Swal.fire({
                icon:"error",
                title:"ooppssiiii",
                text:"you are not hired"
            })
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-warning' style={{height : '90vh'}}>
    <div className="container">
    <div className="card">
        <div className="row">
            <div className="col-md-4">
                <div style={{background: "url('https://i.ytimg.com/vi/L9ZYdShgtPE/maxresdefault.jpg')", height: '100%'}}></div>
            </div>
            <div className="col-md-8">
            <div className="card-body">
            <h3 className='text-center'>Register Here to Continue</h3>
            <hr />
            <Formik initialValues={{
                username:"",
                email:"",
                password:"",
                age:""
            }}
            onSubmit={userSubmit}>
            
                {({values, handleChange,handleSubmit})=> (
                    <form onSubmit={handleSubmit}>
                    <div className="col-md">
                        <label>userName</label>
                        <input className='form-control' values={values.username} onChange={handleChange} id="username" />
                    </div> 
                    <div className="col-md">
                        <label>email</label>
                        <input className='form-control' values={values.email} onChange={handleChange} id="email"/>
                    </div>
                    <div className="col-md">
                        <label>phone number</label>
                        <input className='form-control' values={values.password } onChange={handleChange} id="password" />
                    </div>
                    <div className="col-md">
                        <label>age</label>
                        <input className='form-control' values={values.username} onChange={handleChange} id="age"/>
                    </div>
                    <button className="btn btn-danger">signup</button>
                    
                </form>

                )}
            </Formik>
            
            </div>    
            </div>
        </div>
    </div>
    </div>   
    </div>

    

  );
};
export default Register;
