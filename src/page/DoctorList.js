import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import "../page/neuroDoctors.css";
import Layout from '../Component/Layout/Layout';
import{ Link,useParams } from 'react-router-dom';
import Doctor from '../page/Img/Doctor.jpg'
const DoctorList = (props) => {
  
  const params = useParams()
  const [Doctors, setDoctors] = useState([]);
  
  useEffect(() => {
    console.log("cat : "+params.catid)
    axios.get('/services/doctors.json')
    .then(function (response) {
      // handle success
      setDoctors(response.data.doctors.filter((doctor)=>doctor.category===params.catid));
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    
  },[params.catid]);

  const print_doc = ()=>{
    console.log(Doctors.length)
    if(Doctors.length===0){
      return (<><div className="card mb-3" id='card1'><div className="row g-0" >

      <div className="col-md-8">
      <div className="card-body">
        No Result found
      </div>
      </div>
      </div>
      </div></>)
    }
    
    return Doctors.map((doctor,index)=>{return (<div className="card mb-3" id='card1'> 
    <div className="row g-0" >
      <div className="col-md-2" id='image1'>
        <img src={ Doctor } className="img-fluid rounded-start" alt="..."  width="175" height="120" />
      </div>
     <div className="col-md-8">
      <div className="card-body">
       <h5 className="card-title">{doctor.Name}</h5>
       <p className="card-text"> {doctor.expreinece} years experience  </p>
       <p className="card-text"> Fee : {doctor.fee}   </p>
        <span>
        <Link to={"/doctordetails/"+doctor.id} className="btn btn-success" id='btn'>+</Link>
        </span>
      </div>
    </div>
  </div>
 </div>) } )
  }
  return (
    <Layout>
       
        <h3>Consult with specialist and Doctor.</h3>
        <Link to='/'><i className="fa-solid fa-arrow-left fa-xl" id='Backbtn1'> </i></Link>
        {print_doc()} 
       </Layout>
  )
}

export default DoctorList