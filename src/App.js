import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Pricing from './Pricing';
import { useState } from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

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
  const [students, setStudents] = useState(studentArray)
  const [initialVisitors,setInitialVisitors] = useState(100)
  const [dummyState , setDummyState] = useState(10)

  // go to pricing page click handler
  const changeToPricingPage = () =>{
    SetPageView("PRICING");
  }


  // back to home button click Handler
  const backToHome = () =>{
    SetPageView("HOME");
  }

  const aboutUsClickHandler = () => SetPageView("ABOUT_US")

  const addNewStudent =()=>{
    const newStudent = [...students]
    newStudent.push({
      name:"New Student" + (students.length+1),
      rollNo: students.length+1,
      Desingnation: "MERN Devloper"
    })
    setStudents(newStudent)
  }
  
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
          <AboutUs students = {students}/>
      )}
      {pageView === "CONTACT_US" &&(
          <ContactUs  initialNoOfVisitors = {initialVisitors} dummyProps = {dummyState} />
      )}
      <button onClick = {aboutUsClickHandler}>About Us</button>
      <button onClick = {() => SetPageView("HOME")}>Back to home</button>
      <button onClick = {addNewStudent}>Add Students</button>
      <button onClick = {()=> SetPageView("CONTACT_US")}>Contact Us</button>
      <button onClick = {()=>setInitialVisitors(initialVisitors+10)}>Change Visitors</button>
      <button onClick = {()=>setDummyState(dummyState+10)}>Change Dummy State</button>
    </div>
  );
}

export default App; 
