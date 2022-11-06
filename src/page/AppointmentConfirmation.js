import React from 'react'
import './AppointmentConfirmation.css'

import Layout from '../Component/Layout/Layout';
import Doctor from '../page/Img/Doctor.jpg'
import Tick from '../page/Img/Tick.gif'
import { Link } from 'react-router-dom';

const AppointmentConfirmation = () => {
  return (
    <Layout>
        <>
        <div>
        <img className="tickmark" src={Tick} alt='/'  />
        <div id='dbox'>
          <img className="docimg" src={Doctor} alt='/'  />
         <div id='dtitle'>
            <h5 className="dName">DoctorA</h5>
               <pre className="dok">Appointment for consult. </pre>
               </div>
         </div >
         <div id='dlist'>
            <div className="row" id='tym'>
                
             <div className="col-sm-3" style={{color:"grey"}}>Date
              </div>
            <div className="col-sm-9" style={{color:"black", width:"150px"}}>15 october
              </div>
              </div>
            <div className="row" id='tym'>
                
             <div className="col-sm-3" style={{color:"grey"}}>Time
              </div>
            <div className="col-sm-9" style={{color:"black", width:"150px"}}>12:00 PM
              </div>
              </div>
            <div className="row" id='tym'>
                
             <div className="col-sm-3" style={{color:"grey"}}>Name
              </div>
            <div className="col-sm-9" style={{color:"black", width:"150px"}}>Arun
              </div>
              </div>
            <div className="row" id='tym'>
                
             <div className="col-sm-3" style={{color:"grey"}}>Desc.
              </div>
            <div className="col-sm-9" style={{color:"black", width:"150px"}}>Migraine
              </div>
              </div>
            



              <div id="timing">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                <div><Link to='/AppoinmentReminder/:userid'><button type="button" className="btn btn-outline-primary">Confirm</button></Link></div>
                <div><Link to='/BookAppointment'><button type="button" className="btn btn-outline-primary">Cancel</button></Link></div>
            </div>

            
            </div>
         </div>

        
         

        </div>

        </>

     </Layout>
  )
}

export default AppointmentConfirmation
