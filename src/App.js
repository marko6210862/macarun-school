import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import NaviBar from './Components/Navibar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Resept from './Resept';



function App() {
return <Router>
  <NaviBar />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/shop" element={<Shop/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/resept" element={<Resept/>} />
  </Routes>
</Router>
}
  
export default App;

