
import React, { useEffect, useState } from 'react';

const ContactUs =({initialNoOfVisitors,dummyProps}) =>{

    const [noOfVisitors,setNoofVisitors] = useState(0)

    useEffect(()=>{
        console.log("Initial Props", initialNoOfVisitors)
        console.log("I am in use Effect -----> Component did mount")
    },[])

    useEffect(()=>{
        console.log("New Props", initialNoOfVisitors)
        
    },[initialNoOfVisitors])

    useEffect(()=>{
        console.log("Dummy Props", dummyProps)
        
    },[dummyProps])
 
    return (
        <div>
            {console.log("I am being Rendered")}
            <h1>This is the Contact us page</h1>
            <h2>Welcome to react learning tutorials</h2>
            <label>No of Visitors:</label>
            <p>{noOfVisitors}</p>
            <button onClick = {()=>{}}>Change State</button>
        </div>
    )
}

export default ContactUs;