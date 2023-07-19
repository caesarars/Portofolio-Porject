import React from "react";
import "./EmploymentHistory.css"
import { EmploymentList } from "./EmploymentList";

const employmentListData = [
    {
        company: "IT Engineer - KB Data Systems Indonesia",
        timeline: "June 2023 - current",
        activities: [
            "Involved in NGBS (Next Generation Banking System) project at Bank KB Bukopin"
        ]
    },
    {
        company: "Full Stack Engineer - Investree Radhika Jaya",
        timeline: "November 2021 - June 2023",
        activities: [
            "Collection Management System : Recovery Strategy",
            "Collection Management System : Collection Activities Reminder",
            "Collection Management System : Recovery Setup & Repayment"
        ]
    },
]

export const EmploymentHistory = () => {
    return (
        <div className="container_history">
            <h3 id="header_history">Employment History</h3>
            { employmentListData.map(data => (
                <EmploymentList 
                    company={data.company}
                    timeline={data.timeline}
                    activities={data.activities}
                />
            )) }
        </div>
    )
}

