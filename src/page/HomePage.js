import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Component/Layout/Layout'
import "./HomePage.css";
import { Link } from 'react-router-dom';
const HomePage = () => {

  const [Categories, setCategories] = useState();
  
  useEffect(() => {
  //});
    axios.get('/services/doctor_category.json')
    .then(function (response) {
      // handle success
      setCategories(response.data.category);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    
  },[]);

  const printcat = ()=>{
    console.log("printing");
    console.log(Categories);
    let card = 0;
    if(Categories)
    return Categories.map((val)=>{
      card++;
      console.log(val)
      return (<><div className="card mb-3" id={'hcard'+card}>
      <div className="row g-0" >
        <div className="col-md-2" id='image1'>
          <img src={val.x} className="img-fluid rounded-start" alt="..."  width="175" height="120" />
        </div>
       <div className="col-md-8">
        <div className="card-body">
         <h5 className="card-title">{val.Category}</h5>
         <p className="card-text">{val.Category_description}</p>
          <span>
          <Link to={"/doctorlist/"+val.id} className="btn btn-success" id='btn' category={val.id}>Doctors</Link>
          </span>
        </div> 
      </div>
    </div>
   </div>
  </>)
    })
     
  }

return (
    <>
      <Layout>
        <h2>Consult with specialist.</h2>
        <div>
        {printcat()}
        </div>
      </Layout>
    </>
  )
}

export default HomePage
