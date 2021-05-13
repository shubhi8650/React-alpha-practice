import React from 'react';


const Home =(props)=>{
    return (<div className = "home">
        <h1>This is home page</h1>
        <h2>Welcome to react learning session</h2>
        <button onClick = {props.changeToPricingPage} >Go to Pricing</button>
    </div>)
}

export default Home;