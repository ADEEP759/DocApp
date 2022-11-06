import React from 'react'
import "../page/DoctorC.css";
import Layout from '../Component/Layout/Layout';
import{ Link } from 'react-router-dom';
import Doctor from '../page/Img/Doctor.jpg'

const DoctorH = () => {
  return (
    <>
        <Layout>
        <Link to='/neuroDoctors'><i classsName="fa-solid fa-arrow-left fa-xl" id='Backbtn'> </i></Link>
        <div classsName="cardDoctorC" >
            <img classsName="card-img-top" src={Doctor} alt='/'  />
          <div classsName="card-body">
               <h5 classsName="card-title">DoctorH</h5>
               <pre classsName="card-text">Book appointment by for consultant. <br></br>
               Fee: ₹ 1310</pre>
               <Link to="/BookAppointment" classsName="btn btn-primary">Book Apointment</Link>
            </div>
        </div> 
       
        </Layout>
       </>
  )
}

export default DoctorH
