import React from "react";
import "./ProfileComponent.css"
import myImage from "../../../../images/profile2.png"

const ProfileComponent = () => {
    return (
        <div className="container_profile">
            <div className="wrapper_profile">
                <div className="row">
                    {/*<div className="col-sm-3">
                        <img id="my_image" src={myImage} alt="My Photo"/>
                    </div> */}
                    <div id="profile_summary">
                        <p>Hi, my Name Caesar Arssetya</p>
                        <p>
                                An engineer with more than 1 year experience who is passionate to solve complex problems and learn something new. 
                                Maintain and Improve the code to keep clear, maintainable, and understandable.
                                Developed web application, unit-testing, and web services.</p>
                    </div>
                    <img id="my_image" src={myImage}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;