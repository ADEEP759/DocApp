import React from 'react'
import "../page/Dental.css";
import Layout from '../Component/Layout/Layout';
import{ Link } from 'react-router-dom';
import Doctor from '../page/Img/Doctor.jpg'
const Dental = () => {
  return (
    <Layout>
       <Link to='/'><i className="fa-solid fa-arrow-left fa-xl" id='Backbtn'> </i></Link>
        <h3>Consult with specialist and Doctor.</h3>
         <div className="card mb-3" id='card1'> 
            <div className="row g-0" >
              <div className="col-md-2" id='image1'>
                <img src={ Doctor } className="img-fluid rounded-start" alt="..."  width="175" height="120" />
              </div>
             <div className="col-md-8">
              <div className="card-body">
               <h5 className="card-title">Doctor C</h5>
               <p className="card-text"> 10 years experience  </p>
                <span>
                <Link to="/DoctorC" className="btn btn-success" id='btn'>+</Link>
                </span>
              </div>
            </div>
          </div>
         </div>

         <div className="card mb-3" id='card1'> 
            <div className="row g-0" >
              <div className="col-md-2" id='image1'>
                <img src={ Doctor } className="img-fluid rounded-start" alt="..."  width="175" height="120" />
              </div>
             <div className="col-md-8">
              <div className="card-body">
               <h5 className="card-title">Doctor D</h5>
               <p className="card-text"> 12 years experience  </p>
                <span>
                <Link to="/DoctorD" className="btn btn-success" id='btn'>+</Link>
                </span>
              </div>
            </div>
          </div>
         </div>

         
       </Layout>
  )
}

export default Dental