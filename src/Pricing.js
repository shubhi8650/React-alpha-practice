
const Pricing = (props) =>{
    return(
        <div className = "pricing">
            <h1>Welcome to pricing page</h1>
            <h3>Learning is very expensive</h3>
            <button onClick = {props.backToHome}>back to home</button>
        </div>
    )
}

export default Pricing;