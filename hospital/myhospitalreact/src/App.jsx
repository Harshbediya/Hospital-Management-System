import { Route, Routes, useLocation, Navigate } from "react-router-dom"
import Home from "./Home"
import Navbar from "./Navbar"
import Patient from "./patient"
import About from "./About"
import Superlogin from "./Superlogin"
import Patient_login from "./Patient_login"
import Appointment from "./Appointment"
import PatientDashboard from "./Patientdasboard"
import Services from "./Services"
import Contact from "./Contact"
import { useAuth } from "./AuthContext"

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/patient_login" />;
  return children;
};

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.includes('patientdasboard');

  return (
    <>
      {!hideNavbar && <Navbar/>}
      <main>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/patient" element={<Patient/>}/>
          <Route path="/superlogin" element={<Superlogin/>}/>
          <Route path="/patient_login" element={<Patient_login/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route 
            path="/patientdasboard" 
            element={
              <ProtectedRoute>
                <PatientDashboard/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  )
}

export default App
