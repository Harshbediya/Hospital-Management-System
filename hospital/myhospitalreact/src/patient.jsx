// Patient Signup Form 

import { useState } from 'react';
import axios from 'axios';
import './Patient.css';
import { useNavigate } from 'react-router-dom';

const api_url = "http://127.0.0.1:8000/addpatient/";

function Patient() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    First_name: '',
    Last_name: '',
    Contact_number: '',
    Email: '',
    password:''
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();  
    axios.post(api_url, form)
      .then(res => navigate('/patient_login'))
      .catch(() => alert("Not added"));
  };

  return (
    <div className="patient-container">
      <h1>Patient Registration</h1>
      <form className="patient-form" onSubmit={handleAdd}>
        <label>First Name</label>
        <input type="text" name="First_name" placeholder="First Name" value={form.First_name} onChange={handleForm} />

        <label>Last Name</label>
        <input type="text" name="Last_name" placeholder="Last Name" value={form.Last_name} onChange={handleForm} />

        <label>Contact Number</label>
        <input type="tel" name="Contact_number" placeholder="Mobile Number" value={form.Contact_number} onChange={handleForm} />

        <label>Email</label>
        <input type="text" name="Email" placeholder="Email" value={form.Email} onChange={handleForm} />

         <label>password</label>
        <input type="password" name="password" placeholder="password" value={form.password} onChange={handleForm} />

        <button type="submit">Sign Up</button>
        
      </form>
      
    </div>
  );
}

export default Patient;
