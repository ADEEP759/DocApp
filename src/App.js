import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './page/HomePage'
import Chat from './page/Chat';
import DoctorList from './page/DoctorList';
import DoctorDetails from './page/DoctorDetails';
import BookAppointment from './page/BookAppointment'
import AppointmentConfirmation from './page/AppointmentConfirmation'
import AppoinmentReminder from './page/AppoinmentReminder';
//import DoctorB from './page/DoctorB';
//import Dental from './page/Dental';


function App()  {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={ <HomePage/>}/>
      <Route path="/Chat" element = {<Chat/>}/>
      <Route path="/doctorlist/:catid" element = {<DoctorList />}/>
      <Route path="/doctordetails/:doctorid" element = {<DoctorDetails />}/>
      <Route path="/BookAppointment" element = {<BookAppointment/>}/>
      <Route path="/AppointmentConfirmation" element = {<AppointmentConfirmation/>}/>
      <Route path="/AppoinmentReminder/:userid" element = {<AppoinmentReminder/>}/>
      
      
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App
