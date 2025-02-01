import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import EventDashboard from './components/EventDashboard';
import EventForm from './components/EventForm';
import SignupForm from './pages/SignupForm';
import NavigationBar from './components/Navbar';
import SignIn from './pages/SignIn';
import ProtectedRoute from './Auth/ProtectedRoute'; 
import Footer from './pages/Footer'
import UpcomingEvent from './pages/UpcomingEvents'
import AllEvents from './pages/AllEvents';

function AppRouting() {
  return (
    <Router>
      <NavigationBar />
     
      <div>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage /> 
              </ProtectedRoute>
            }
           />
           
            <Route path="/event-dashboard" element={<EventDashboard />} />
            <Route path="/event-form" element={<EventForm />} />
            <Route path="/upcoming-events" element={<UpcomingEvent />} />
            <Route path="/signupform" element={<SignupForm />} />
           <Route path="/signin" element={<SignIn />} />
           <Route path="/home" element={<HomePage />} />
           <Route path="/allevents" element={<AllEvents />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default AppRouting;
