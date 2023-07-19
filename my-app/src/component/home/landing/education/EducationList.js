import React from "react";

export const EducationList = (props) => {
    return (
        <div className="container_educ_list">
            <h4>{props.school}</h4>
            <span>{props.period}</span>
            <p>{props.degree}</p>
        </div>
    )
}