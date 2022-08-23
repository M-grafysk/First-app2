import React , {useState}from "react";
import {Formik} from "formik"
import "./addmusic.css"
import Swal from "sweetalert2";
export const Addmusic = () => {
  const [image, setImage] = useState("");
  const [musicFile, setMusicFile] = useState("");
      const url ="http://localhost:5000";
    
      const loginSubmit= async (formdata)=>{
        console.log(formdata);
    
      const res = await fetch(url+'/music/add',{
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
    const uploadimage = (event) => {
      const formdata = new FormData();
      formdata.append("file", event.target.files[0]);
  
      const reqOptions = {
        method: "POST",
        body: formdata,
      };
  
      fetch(url + "util/addfile", reqOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setImage(event.target.files[0].name);
        });
    };
  
    const uploadfile = (event) => {
      const formdata = new FormData();
      formdata.append("file", event.target.files[0]);
  
      const reqOptions = {
        method: "POST",
        body: formdata,
      };
  
      fetch(url + "util/createfile", reqOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMusicFile(event.target.files[0].name);
        });
    };
  return (
        <div className='loginpagee '>
        <div className='container'>
        <div className='c2 card '>    
        <div className='card-body '>
          <h1 className='ip2 text-center'>ADD MUSIC HERE</h1>
            <Formik initialValues={{
                singername:"",
                title:"",
                companyname:"",
                lyrics:"",
                date:"",
                thumbnail:"",
                audio:""
            }}
            onSubmit={loginSubmit}>
            
                {({values, handleChange,handleSubmit})=> (
                    <form onSubmit={handleSubmit}>
                    <div className="lab2  col-md">
                        <label>singername</label>
                        <input type="text" className='form-control' value={values.username} onChange={handleChange} id="singername" />
                    </div>  
                    <div className="lab2 col-md">
                        <label >title</label>
                        <input type="text" className='form-control' value={values.title} onChange={handleChange} id="title"/>
                    </div>
                    <div class Name="lab2 col-md">
                        <label >companyname</label>
                        <input type="text" className='form-control' value={values.companyname} onChange={handleChange} id="companyname"/>
                    </div>
                    <div className="lab2 col-md">
                        <label >lyrics</label>
                        <input type="text" className='form-control' values={values.lyrics} onChange={handleChange} id="lyrics"/>
                    </div>
                    <div className="lab2 col-md">
                        <label >date</label>
                        <input type="date" className='form-control' value={values.date} onChange={handleChange} id="date"/>
                    </div>
                    <div className="lab2 col-md">
                        <label >thumbnail</label>
                        <input type="file" className='form-control' value={values.thumbnail} onChange={handleChange} id="thumbnail" />
                    </div>
                    <input
              
              onChange={uploadimage}
              type="file"
              fullwidth
              className="form-control mt-4 mx-0"
              title="Select heroimage"
            required/>
                    <div className="lab2 col-md">
                        <label >audio</label>
                        <input type="file" className='form-control' value={values.audio} onChange={handleChange} id="audio"/>
                    </div>
                    <button className="btn btn-warning">SUBMIT</button>
                    
                </form>

                )}
            </Formik>
            
            </div>    
            </div>
        </div>
    </div>
    

    

  );
};
export default Addmusic