import React from "react";
import "./EducationComponent.css"
import { EducationList } from "./EducationList";

const educationListData = [
    {
        school : 'Gundarma University',
        degree : "Bachelor of Engineering",
        period: "November 2017 - September 2021"
    },
    {
        school : 'Bangkit Academy',
        degree : "Machine Learning Student",
        period: "February 2021 - June 2021"
    }
]

export const EducationComponent = () => {
    return (
        <div className="container_empl_history">
            <h3 id="header_empl_history">Education</h3>
            { educationListData.map((data) => (
                <EducationList 
                    school={data.school}
                    degree={data.degree}
                    period={data.period}/>
            ))}
        </div>
    )
}