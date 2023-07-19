import React from "react";

import "./LandingComponent.css"
import ProfileComponent from "./profile/ProfileComponent";
import {EmploymentHistory} from "./history/EmplyomentHistory";
import { EducationComponent } from "./education/EducationComponent";
import { CertificationsComponent } from "./certifications/CertificationsComponent";


export const LandingComponent = () => {
    return (
        <div className="container_landing">
            <ProfileComponent/>
            <EmploymentHistory/>
            <EducationComponent />
            <CertificationsComponent />
        </div>
    )
}