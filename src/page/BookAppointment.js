import React from 'react'
import "../page/BookAppointment.css";
import Layout from '../Component/Layout/Layout';
import{ Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const BookAppointment = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <>
        <div className='pagebg'>
       
            <i className="fa-solid fa-arrow-left fa-xl" id='Backbtn' onClick={()=>{navigate(-1);}}> </i>
            <center><p id='app'>Appointment</p></center>
            
           <div id='Box'> 
           <form>
               <select id="ddlViewBy">
                 <option value="1"selected="selected">October</option>
                 <option value="2" >November</option>
                 <option value="3">December</option>
                  </select>
                </form>


                <div className="container" >
                  <div className = "scroll">
                <div className="scrollmenu">
                 


                
                

                <button type="button" className="btn btn-outline-primary"
                id="datebox">
                <div >
                 <div className=".container" id='day'>Thrusday</div>
                 <div className=".container" id='date'>date</div>
                </div>
                </button>

                <button type="button" className="btn btn-outline-primary"
                id="datebox">
                <div >
                 <div className=".container" id='day'>Thrusday</div>
                 <div className=".container" id='date'>date</div>
                </div>
                </button>

                <button type="button" className="btn btn-outline-primary"
                id="datebox">
                <div >
                 <div className=".container" id='day'>Thrusday</div>
                 <div className=".container" id='date'>date</div>
                </div>
                </button>

                <button type="button" className="btn btn-outline-primary"
                id="datebox">
                <div >
                 <div className=".container" id='day'>Thrusday</div>
                 <div className=".container" id='date'>date</div>
                </div>
                </button>

                <button type="button" className="btn btn-outline-primary"
                id="datebox">
                <div >
                 <div className=".container" id='day'>Thrusday</div>
                 <div className=".container" id='date'>date</div>
                </div>
                </button>

                <button type="button" className="btn btn-outline-primary"
                id="datebox">
                <div >
                 <div className=".container" id='day'>Thrusday</div>
                 <div className=".container" id='date'>date</div>
                </div>
                </button>

                <button type="button" className="btn btn-outline-primary"
                id="datebox">
                <div >
                 <div className=".container" id='day'>Thrusday</div>
                 <div className=".container" id='date'>date</div>
                </div>
                </button>

                <button type="button" className="btn btn-outline-primary"
                id="datebox">
                <div >
                 <div className=".container" id='day'>Thrusday</div>
                 <div className=".container" id='date'>date</div>
                </div>
                </button>

                <button type="button" className="btn btn-outline-primary"
                id="datebox">
                <div >
                 <div className=".container" id='day'>Thrusday</div>
                 <div className=".container" id='date'>date</div>
                </div>
                </button>

                <button type="button" className="btn btn-outline-primary"
                id="datebox">
                <div >
                 <div className=".container" id='day'>Thrusday</div>
                 <div className=".container" id='date'>date</div>
                </div>
                </button>

                <button type="button" className="btn btn-outline-primary"
                id="datebox">
                <div >
                 <div className=".container" id='day'>Thrusday</div>
                 <div className=".container" id='date'>date</div>
                </div>
                </button>

                <button type="button" className="btn btn-outline-primary"
                id="datebox">
                <div >
                 <div className=".container" id='day'>Thrusday</div>
                 <div className=".container" id='date'>date</div>
                </div>
                </button>
                
                

               

                </div>

        
                </div>
                </div>
                <div id="timing1">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                <div><button type="button" className="btn btn-outline-primary">10AM - 12PM</button></div>
                <div><button type="button" className="btn btn-outline-primary">12PM - 2PM</button></div>
                <div><button type="button" className="btn btn-outline-primary">3PM - 5PM</button></div>
                </div>
                <br />
                <br />
                <textarea className="form-control" id="desc" rows="3" placeholder='Description...'></textarea>
                </div>
                


           

            
        
            
         
              
           <Link to="/AppointmentConfirmation" className="btn btn-primary" id="Cbtn">Confirm</Link>
          </div>
          </div>
          
          </>
        </Layout>
  )
}

export default BookAppointment