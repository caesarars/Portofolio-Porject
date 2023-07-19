import React from "react";


export const EmploymentList = (props) => {
    return (
        <div>
            <div className="container_empl_list">
               <h4 id="header_empl">{props.company}</h4>
               <span>{props.timeline}</span>
               <ul>
                {props.activities && props.activities.map((act) => (
                    <li>{act}</li>
                ))}
               </ul>
            </div>
        </div>
    )
}