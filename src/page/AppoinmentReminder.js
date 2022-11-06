import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import "../page/AppoinmentReminder.css";
import Layout from '../Component/Layout/Layout';
import{ Link,useParams } from 'react-router-dom';
import image from '../page/Img/Doctor.jpg'

const AppoinmentReminder = (props) => {
  
  const params = useParams()
  const [Doctor, setDoctor] = useState([]);
  const [Reminders, setReminders] = useState([]);
  
  useEffect(() => {
    console.log("cat : "+params.doctorid)
    axios.get('/services/doctors.json')
    .then(function (response) {
      // handle success
      //console.log(response.data)
      setDoctor(response.data.doctors);
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    
  },[params.doctorid]);

  useEffect(() => {
    console.log("cat : "+params.userid)
    axios.get('/services/reminder.json')
    .then(function (response) {
      // handle success
      console.log(response.data.reminders)
      console.log(params.userid)
      setReminders(response.data.reminders.filter((reminder1)=>reminder1.user_id===parseInt(params.userid)));
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    
  },[params.userid]);

  const print_doc = ()=>{
    console.log("Reminder : "+Reminders.length)
    if(Reminders.length===0){
      return (<><div className="card mb-3" id='card1'><div className="row g-0" >

      <div className="col-md-8"  id='upperbody'>
      <div className="card-bodya">
      
            <img className="card-img-top1" src={image} alt='/'   />
          <div className="card-body">
               <h5 className="card-title">Appointment Booked</h5>
               <pre className="card-text"> You have booked appointment ;Description</pre>
               <Link to="/" className="btn btn-primary">Go To Home</Link>
            </div>
        </div> 
      
      </div>
      </div>
      </div>
      </>)
    }
    
    return Reminders.map((reminder,index)=>{
       
        let doctor = Doctor.filter((doctor1)=>{
            //console.log('checcking')
            //console.log(typeof doctor1.id)
            return parseInt(doctor1.id) === parseInt(reminder.doctor_id)
        });
        doctor = doctor[0];
        //console.log(typeof reminder.doctor_id)
        console.log("Reminder")
        console.log(reminder)
        return (
          <>
          <div key={index} id=''>
          
       
      
        
             <img className="card-img-top" id='Image' src={doctor.image} alt=''  />
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
            
    
             reminder description </p>
        </div>
        
            <p className="assure">asdf</p>
            <Link to="/Chat" className="btn btn-primary" id='bappbtn'>Go To Messages</Link>
            </div> </> ) ;
    })
  }
  return (
    <>
        <Layout>
        
          <div  className="upeerbody" >
        <div className="card-bodyee">
        <Link to='/'><i className="fa-solid fa-arrow-left fa-xl" id='Backbtna'> </i></Link>
             <p id='dd'>Reminder</p>
        
             
        
        {print_doc()}

        </div>
       </div> 
            
       
        </Layout>
       </>
  )
}

export default AppoinmentReminder