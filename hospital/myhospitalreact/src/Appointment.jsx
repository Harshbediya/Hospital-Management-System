import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    notes: ''
  });

  const departments = [
    'General Medicine',
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Dermatology'
  ];

  const doctors = {
    'General Medicine': ['Dr. Smith', 'Dr. Johnson'],
    Cardiology: ['Dr. Allen', 'Dr. Clark'],
    Neurology: ['Dr. Lewis', 'Dr. Walker'],
    Orthopedics: ['Dr. Young', 'Dr. King'],
    Pediatrics: ['Dr. Wright', 'Dr. Lopez'],
    Dermatology: ['Dr. Hill', 'Dr. Scott']
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the formData to your backend API
    alert('Appointment booked successfully!\n' + JSON.stringify(formData, null, 2));
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      department: '',
      doctor: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  return (
    <div className="appointment-page">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">

        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label htmlFor="department">Select Department</label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Department --</option>
          {departments.map(dep => (
            <option key={dep} value={dep}>{dep}</option>
          ))}
        </select>

        <label htmlFor="doctor">Select Doctor</label>
        <select
          id="doctor"
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
          disabled={!formData.department}
        >
          <option value="">-- Select Doctor --</option>
          {formData.department &&
            doctors[formData.department].map(doc => (
              <option key={doc} value={doc}>{doc}</option>
            ))
          }
        </select>

        <label htmlFor="date">Appointment Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          min={new Date().toISOString().split('T')[0]} // Disable past dates
        />

        <label htmlFor="time">Appointment Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label htmlFor="notes">Additional Notes (Optional)</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any special requests or information"
          rows="3"
        ></textarea>

        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;
