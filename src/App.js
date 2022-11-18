
import './App.css';

function App() {
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
     <div className="coursesblock"></div>
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
