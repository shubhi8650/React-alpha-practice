

import React from 'react';

const StudentDisplay =({name,rollNo,Desingnation})=>{
        return(
            <div className = "student-container">
                <label>{rollNo}</label>
                <label style ={{marginLeft: 16, marginRight:16}}>{name}</label>
                <label>{Desingnation}</label>
            </div>
        )
}

export default StudentDisplay;