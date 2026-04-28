import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content animate-fade">
            <span className="badge">Healthcare Excellence</span>
            <h1>
              Compassion Meets <br /> 
              <span className="text-gradient">Excellence</span> in Care
            </h1>
            <p>
              Life Care is a premier healthcare facility dedicated to providing 
              comprehensive medical services with empathy and cutting-edge 
              technology. Your health is our priority.
            </p>
            <div className="hero-btns">
              <Link to="/appointment" className="btn-secondary">Book Appointment</Link>
              <Link to="/about" className="btn-outline">Learn More</Link>
            </div>
            
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-num">15k+</span>
                <span className="stat-label">Patients Served</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">50+</span>
                <span className="stat-label">Specialist Doctors</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">24/7</span>
                <span className="stat-label">Emergency Care</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual animate-slide">
             <div className="image-wrapper">
                <img src='./hospital-hero.jpg' alt="Professional Healthcare" className='hero-main-img' />
                <div className="floating-card c1">
                   <div className="icon-circle">❤️</div>
                   <div>
                      <h6>Best Patient Care</h6>
                      <p>Certified Services</p>
                   </div>
                </div>
                <div className="floating-card c2">
                   <div className="icon-circle">👨‍⚕️</div>
                   <div>
                      <h6>Expert Doctors</h6>
                      <p>Top Specialists</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section Shortcut */}
      <section className="features-grid">
        <div className="feature-card">
           <div className="feat-icon">🩸</div>
           <h3>Blood Test</h3>
           <p>Comprehensive diagnostic services with rapid results for accurate diagnosis.</p>
        </div>
        <div className="feature-card highlighted">
           <div className="feat-icon">🫀</div>
           <h3>Cardiology</h3>
           <p>Advanced cardiac care from leading experts using state-of-the-art technology.</p>
        </div>
        <div className="feature-card">
           <div className="feat-icon">🦷</div>
           <h3>Dental Care</h3>
           <p>Quality dental treatments for a healthy, beautiful smile for your whole family.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
