import React from 'react';
import './Services.css';

const Services = () => {
  const medicalServices = [
    {
      title: "24/7 Emergency Care",
      icon: "🚑",
      desc: "Immediate medical attention for critical conditions with a dedicated trauma team and state-of-the-art life support systems.",
      features: ["Ambulance Services", "Trauma Center", "Critical Care Unit", "Rapid Response Team"]
    },
    {
      title: "Advanced Cardiology",
      icon: "🫀",
      desc: "Comprehensive heart care including diagnostic mapping, bypass surgery, and minimally invasive cardiac procedures.",
      features: ["Cath Lab", "Heart Surgery", "Physiotherapy", "Pacemaker Clinic"]
    },
    {
      title: "Orthopedics & Joint",
      icon: "🦴",
      desc: "Expert care for musculoskeletal issues, sports injuries, and complex joint replacements using robotic assistance.",
      features: ["Joint Replacement", "Sports Medicine", "Spine Surgery", "Rehabilitation"]
    },
    {
      title: "Neurology & Brain",
      icon: "🧠",
      desc: "Specialized treatment for disorders of the nervous system, brain injuries, strokes, and neurodegenerative diseases.",
      features: ["Neuro-Surgery", "Brain Mapping", "Stroke Center", "EEG/EMG Support"]
    },
    {
      title: "Pediatric Excellence",
      icon: "👶",
      desc: "Compassionate healthcare for infants and children, ensuring the next generation grows healthy and strong.",
      features: ["NICU/PICU", "Vaccination", "Child Psychology", "Surgical Support"]
    },
    {
      title: "Diagnostic Imaging",
      icon: "🔬",
      desc: "High-precision diagnostic services using the latest MRI, CT Scan, and laboratory automation technology.",
      features: ["3T MRI", "64-Slice CT", "Digital X-Ray", "Pathology Lab"]
    }
  ];

  return (
    <div className="services-page animate-fade">
      <section className="services-hero">
        <div className="container">
          <span className="badge">Our Expertise</span>
          <h1>Comprehensive <span className="text-gradient">Medical Solutions</span></h1>
          <p>
            At LifeCare, we combine world-class medical facilities with compassionate care 
            to provide a range of healthcare services tailored to your needs.
          </p>
        </div>
      </section>

      <section className="services-grid container">
        {medicalServices.map((service, idx) => (
          <div className="service-card glass" key={idx}>
            <div className="service-icon-wrapper">
              <span className="service-icon">{service.icon}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <ul className="service-features">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx}>
                  <span className="dot"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="why-choose-us">
        <div className="container">
          <div className="why-content">
            <h2>Why Choose <span className="text-secondary">LifeCare</span>?</h2>
            <div className="why-grid">
              <div className="why-item">
                <div className="why-icon">🏆</div>
                <div>
                   <h4>NABH Accredited</h4>
                   <p>Meeting international standards in healthcare quality and safety.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">👨‍⚕️</div>
                <div>
                   <h4>Expert Specialists</h4>
                   <p>Over 100+ board-certified doctors across multiple disciplines.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">⚡</div>
                <div>
                   <h4>Precision Tech</h4>
                   <p>Equipped with the latest diagnostic and surgical equipment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
