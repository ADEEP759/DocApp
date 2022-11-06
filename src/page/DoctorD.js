import React from 'react'
import "../page/DoctorD.css";
import Layout from '../Component/Layout/Layout';
import{ Link } from 'react-router-dom';
import Doctor from '../page/Img/Doctor.jpg'

const DoctorD = () => {
  return (
    <>
        <Layout>
        <Link to='/neuroDoctors'><i className="fa-solid fa-arrow-left fa-xl" id='Backbtn'> </i></Link>
        <div className="cardDoctorD" >
            <img className="card-img-top" src={Doctor} alt='/'  />
          <div className="card-body">
               <h5 className="card-title">DoctorD</h5>
               <pre className="card-text">Book appointment by for consultant. <br></br>
               Fee: ₹ 1010</pre>
               <Link to="/BookAppointment" className="btn btn-primary">Book Apointment</Link>
            </div>
        </div> 
       
        </Layout>
       </>
  )
}

export default DoctorD
