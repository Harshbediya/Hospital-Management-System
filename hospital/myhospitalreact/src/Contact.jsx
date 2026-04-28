import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. Our team will contact you shortly.");
  };

  const contactInfo = [
    {
      title: "24/7 Helpline",
      icon: "📞",
      value: "+91 (800) 123-4567",
      label: "Emergency & General Inquiry"
    },
    {
      title: "Email Support",
      icon: "📧",
      value: "contact@lifecare.com",
      label: "Response within 2 hours"
    },
    {
      title: "Main Hospital HQ",
      icon: "📍",
      value: "Medical Square, City Center",
      label: "Open 24/7 for Patients"
    }
  ];

  return (
    <div className="contact-page animate-fade">
      <section className="contact-hero">
        <div className="container">
          <span className="badge">Get in Touch</span>
          <h1>We are Here to <span className="text-gradient">Help You</span></h1>
          <p>
            Have questions about our services, appointments, or medical staff? 
            Reach out to us and our dedicated support team will guide you.
          </p>
        </div>
      </section>

      <section className="contact-container container">
        <div className="contact-info-side">
          {contactInfo.map((info, idx) => (
            <div className="info-card glass" key={idx}>
              <div className="info-icon">{info.icon}</div>
              <div className="info-content">
                <p className="info-label">{info.title}</p>
                <p className="info-value">{info.value}</p>
                <p className="info-subtext">{info.label}</p>
              </div>
            </div>
          ))}

          <div className="social-support glass">
             <h3>Instant Support</h3>
             <p>Average response time: 2 minutes</p>
             <a href="https://wa.me/911234567890" className="btn-whatsapp">
                💬 Chat on WhatsApp
             </a>
          </div>
        </div>

        <div className="contact-form-side glass">
           <div className="form-header">
              <h2>Send an Inquiry</h2>
              <p>Please fill out the form below and we'll get back to you.</p>
           </div>
           
           <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-row">
                 <div className="input-group">
                    <label>Full Name</label>
                    <input name="name" type="text" placeholder="John Doe" required onChange={handleChange} />
                 </div>
                 <div className="input-group">
                    <label>Email Address</label>
                    <input name="email" type="email" placeholder="john@example.com" required onChange={handleChange} />
                 </div>
              </div>
              
              <div className="form-row">
                 <div className="input-group">
                    <label>Phone Number</label>
                    <input name="phone" type="tel" placeholder="+91 XXXX XXX XXX" required onChange={handleChange} />
                 </div>
                 <div className="input-group">
                    <label>Department</label>
                    <select name="subject" onChange={handleChange}>
                       <option>General Inquiry</option>
                       <option>Cardiology</option>
                       <option>Neurology</option>
                       <option>Orthopedics</option>
                    </select>
                 </div>
              </div>

              <div className="input-group">
                 <label>Your Message</label>
                 <textarea name="message" rows="5" placeholder="How can we help you?" required onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn-submit">Send Message</button>
           </form>
        </div>
      </section>

      <section className="location-map container">
         <div className="map-placeholder glass">
            <h2>Our Global Network</h2>
            <p>LifeCare has presence in over 15+ cities providing quality healthcare.</p>
            <div className="branches-grid">
               {["Hyderabad", "Mumbai", "Bangalore", "Delhi", "Pune", "Chennai"].map(city => (
                  <div className="city-tag" key={city}>📍 {city}</div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
