import React from 'react';
import { useAuth } from './AuthContext';
import './patientdashboard.css';

const PatientDashboard = () => {
  const { user, logout } = useAuth();

  if (!user) return <div className="p-8">Loading...</div>;

  return (
    <div className="dashboard-container animate-fade">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
           <span className="logo-text">LIFE<span className="text-secondary">CARE</span></span>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">Dashboard</a>
          <a href="#" className="nav-item">Appointments</a>
          <a href="#" className="nav-item">Medical Records</a>
          <a href="#" className="nav-item">Settings</a>
        </nav>
        <button onClick={logout} className="btn-logout">Sign Out</button>
      </aside>

      <main className="dashboard-main">
        <header className="main-header">
          <div>
            <h1>Hello, {user.fname}!</h1>
            <p>Here is what's happening with your health today.</p>
          </div>
          <div className="user-profile-badge">
             <div className="avatar">{user.fname[0]}{user.lname[0]}</div>
             <span>{user.fname} {user.lname}</span>
          </div>
        </header>

        <section className="stats-grid">
           <div className="stat-card">
              <span className="stat-icon">📅</span>
              <div>
                 <h3>Next Visit</h3>
                 <p>Oct 24, 2026</p>
              </div>
           </div>
           <div className="stat-card">
              <span className="stat-icon">💊</span>
              <div>
                 <h3>Prescriptions</h3>
                 <p>2 Active</p>
              </div>
           </div>
           <div className="stat-card">
              <span className="stat-icon">🧪</span>
              <div>
                 <h3>Lab Results</h3>
                 <p>3 New</p>
              </div>
           </div>
        </section>

        <div className="content-row">
           <div className="appointments-card glass">
              <div className="card-header">
                 <h2>Upcoming Appointments</h2>
                 <button className="btn-view-all">View All</button>
              </div>
              <div className="appointment-list">
                 <div className="appointment-item">
                    <div className="date-box">
                       <span className="day">24</span>
                       <span className="month">OCT</span>
                    </div>
                    <div className="apt-details">
                       <h4>Dr. Sarah Wilson</h4>
                       <p>Cardiology - General Checkup</p>
                    </div>
                    <span className="status-badge confirmed">Confirmed</span>
                 </div>
                 <div className="appointment-item">
                    <div className="date-box">
                       <span className="day">12</span>
                       <span className="month">NOV</span>
                    </div>
                    <div className="apt-details">
                       <h4>Dr. James Miller</h4>
                       <p>Dental Care - Cleaning</p>
                    </div>
                    <span className="status-badge pending">Pending</span>
                 </div>
              </div>
           </div>

           <div className="profile-card glass">
              <h2>My Profile</h2>
              <div className="profile-details">
                 <div className="p-item">
                    <label>Full Name</label>
                    <p>{user.fname} {user.lname}</p>
                 </div>
                 <div className="p-item">
                    <label>Email Address</label>
                    <p>{user.Email}</p>
                 </div>
                 <div className="p-item">
                    <label>Patient ID</label>
                    <p>#LC-{user.id.toString().padStart(4, '0')}</p>
                 </div>
                 <button className="btn-edit-profile">Edit Profile</button>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
