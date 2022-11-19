import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {

  const [details,setDetails]=useState([]);
  const [courseDet,setCourseDet]=useState();
  const [details1,setDetails1]=useState([]);
  const [courseDet1,setCourseDet1]=useState();
 
  useEffect((details)=>{
    async function getDetails(){
      const det=await fetch('https://jsonplaceholder.typicode.com/photos/3').then(response => response.json())
      const det1=await fetch('https://jsonplaceholder.typicode.com/photos/2').then(response => response.json())
    setDetails(det.url);
    setCourseDet(det.title);
    setDetails1(det1.url);
    setCourseDet1(det1.title);

    }
  
    getDetails();
    
  },[]);



  return (
    <div>
    <section className='section'>
    <div className='nav'>
    <div className='nav logo'>
    <strong>Tech Academy</strong>
    <img src="/tech.png" alt="icon" />
    </div>
    <ul className='nav items'>
      <li><a href='#'>Courses</a></li>
      <li><a href='#'>Testimonials</a></li>
      <li><a href="#">Sign In</a></li>
      <li><a href="#">Login</a></li>
    </ul>
    </div>
    <div className='container one'>
    <video className='video' autoPlay muted loop>
      <source src="video.mp4"></source>
    </video>
    <strong className='textonvid'>
    <h1>Welcome to Tech Academy</h1>
    <p>The best place to learn technology.</p>
    </strong>
     
    </div>    
     </section>
     
     <section>
     <div className='container first'>
     <strong className='conheading'>Live & Recorded Courses</strong>
     <div className="coursesblock">
      <div><img src={details} height="300px" width="200px" alt="sample"></img>
      <p>{courseDet}</p></div>
      <div>
      <img src={details1} height="300px" width="200px" alt="sample"></img>
      <p>{courseDet1}</p></div>
     </div>
     </div>
     </section>

     <section>
     <div className='container second'>
     <strong className='conheading'>Book a counselling session with us</strong>
     </div>
     </section>


    </div>
  );
}

export default App;
