import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Pricing from './Pricing';
import { useState } from 'react';
import AboutUs from './AboutUs';

const studentArray = [
  {
    name:"Ravi",
    rollNo:1,
    Desingnation:"Frontend Devloper"
  },
  {
    name:"Shubham",
    rollNo:2,
    Desingnation:"Backend Devloper"
  },
  {
    name:"Sameer",
    rollNo:3,
    Desingnation:"Full Stack Devloper"
  },
  {
    name:"Radhika",
    rollNo:4,
    Desingnation:"Java Devloper"
  },
  {
    name:"Versha",
    rollNo:5,
    Desingnation:"Python Devloper"
  }
]

function App() {
  const [pageView, SetPageView] = useState("HOME");    // its a hook function return array contain

  // go to pricing page click handler
  const changeToPricingPage = () =>{
    SetPageView("PRICING");
  }


  // back to home button click Handler
  const backToHome = () =>{
    SetPageView("HOME");
  }
  const aboutUsClickHandler = () => SetPageView("ABOUT_US")
  
  return (
    <div className="App">
      This is the sample react app page
      {pageView === "HOME" && (
          <Home changeToPricingPage = {changeToPricingPage}/> 
      )}
      {pageView === "PRICING" &&(
          <Pricing backToHome = {backToHome}/>
      )}
      {pageView === "ABOUT_US" &&(
          <AboutUs students = {studentArray}/>
      )}
      <button onClick = {aboutUsClickHandler}>About Us</button>
    </div>
  );
}

export default App; 
