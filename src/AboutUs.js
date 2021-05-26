import React,{Component} from 'react';
import StudentDisplay from './StudentDisplay';

class AboutUs extends Component{

    constructor(){
        super()
        this.state = {
            noOfStudents:""
        }
        
    }

    //1. Render method - first function to be called
    //2.componentDidMount - second function to be called post render    
    componentDidMount(){    //Component has already rendered its triggered after rendering
        console.log("i am in component did mount method")
        setTimeout(()=>{
            this.setState({
                ...this.state,
                noOfStudents:5
            })
        },2000)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("i am in should component Update");
        console.log(nextProps,nextState)
        return true;
    }

    componentWillUnmount(){   //Component will be removed (Unmount)
        console.log("I am in component will Unmount")
    }
    render(){
        console.log("i am in render method");//we can acess the props in class by using this
        return(
            <div className = "about-us">
                <h1> We are in alpha batch in ABOUT US page</h1>
                <h3> We are learning MERN Stack</h3>
                <div>
                    Some of the Students of alpha batch: 
                    {this.props.students.map((student, index) =>(
                        <StudentDisplay name = {student.name} rollNo = {student.rollNo} Desingnation = {student.Desingnation}/>
                    ))}
                </div>
                <div style ={{ marginBottom:16,fontWeight:500,fontSize:24}}>No. of Students:{this.state.noOfStudents}</div>
            </div>
        )
    }

}

export default AboutUs;