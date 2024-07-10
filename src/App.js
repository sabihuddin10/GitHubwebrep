import React from 'react';
import './App.css'; // Ensure this file includes general styles if needed
import Navbar1 from './Components/Navbar1';
import Appbody from './Components/Appbody';
import LoginSignup from './Components/LoginSignup';
import About from './Components/About';
import Contact from './Components/Contact';
import Career from './Components/Career';
import Visit from './Components/Visit';
import 'antd/dist/antd';	
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Appbody>
        <Navbar1 title="My React App1" home="Home" link="About us">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </Navbar1>
        
        <Routes>
          <Route path="/home" element={<LoginSignup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/visitus" element={<Visit />} />
          <Route path="/" element={<LoginSignup />} /> {/* Default route */}
        </Routes>

      </Appbody>
      
    </Router>
  );
}

export default App;
