import React,{Component} from 'react';

class AboutUs extends Component{

    constructor(){
        super()
        this.state = {}
    }
    render(){
        console.log(this.props);//we can acess the props in class by using this
        return(
            <div className = "about-us">
                <h1> We are in alpha batch in ABOUT US page</h1>
                <h3> We are learning MERN Stack</h3>
                <div>
                    Some of the Students of alpha batch: 
                    {this.props.students.map((student, index) =>(
                        <div className = "student-container">
                            <label>{student.rollNo}</label>
                            <label>{student.name}</label>
                            <label>{student.Desingnation}</label>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

export default AboutUs;