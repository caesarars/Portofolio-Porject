import React from "react";
import "./CertificationsComponent.css"

const certifications = [
    "Certificate of Completion Bangkit Academy 2021",
    "TensorFlow: Data and Deployment",
    "DeepLearning.AI TensorFlow Developer",
    "Mathematics for Machine Learning",
    "Google IT Automation with Python"
]

export const CertificationsComponent = () => {
    return (
        <div className="container_certif">
            <div className="container_certfi_list">
                <h3 id="header_certif">Certifications</h3>
                <ul>
                    {certifications.map(data => (
                        <li>{data}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}