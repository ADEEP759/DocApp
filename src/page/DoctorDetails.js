import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import "../page/DoctorA.css";
import Layout from '../Component/Layout/Layout';
import{ Link,useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const DoctorDetails = (props) => {
  const navigate = useNavigate();
  
  const params = useParams()
  const [Doctor, setDoctor] = useState([]);
  
  useEffect(() => {
    console.log("cat : "+params.doctorid)
    axios.get('/services/doctors.json')
    .then(function (response) {
      // handle success
      //console.log(response.data)
      setDoctor(response.data.doctors.filter((doctor)=>doctor.id===params.doctorid));
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    
  },[params.doctorid]);

  const print_doc = ()=>{
    console.log(Doctor.length)
    if(Doctor.length===0){
      return (<><div className="card mb-3" id='card1'><div className="row g-0" >

      <div className="col-md-8">
      <div className="card-body">
        No Result found
      </div>
      </div>
      </div>
      </div></>)
    }
    
    return Doctor.map((doctor,index)=>{return (<div kye={index} className="cardDoctorA" >
      
    <div className="card-bodyee">
    <i className="fa-solid fa-arrow-left fa-xl" id='Backbtna' onClick={()=>{navigate(-1);}}> </i>
         <p id='dd'>Doctor  Details</p>
         <img className="card-img-top" id='Image' src={doctor.image} alt='/'  />
         <div id='rating'>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        </div>
         <div className="doctorDetails">

        <p className="card-titleee">{doctor.Name}</p>
        
        <p className="descripiton"> 
        
         <br></br>
         <b>Description:-</b>
         <br></br>
         <br></br>
        

        {doctor.descripiton}</p>
    </div>
    </div>
        <p className="assure">{doctor.assure}</p>
        <Link to="/BookAppointment" className="btn btn-primary" id='bappbtn'>Book Apointment</Link>
</div> ) } )
  }
  return (
    <>
        <Layout>

        
        {print_doc()}
        
       
        </Layout>
       </>
  )
}

export default DoctorDetails