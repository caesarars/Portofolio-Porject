import React from "react";
import "./ProjectsHomeComponent.css";
import { NavLink, Outlet, useNavigate , useLocation} from 'react-router-dom';
import { useEffect , useState} from "react";

const remainderCards = [
    {
        id: 1,
        projectName:'Reminder Notes',
        summary: 'App for reminder notes like a sticky notes and every note is draggable',
        route: 'notes'
    },
    {
        id: 2,
        projectName:'Hovering Translator',
        summary: 'App for translating english word to indonesian when hovering on words.'
    }
]
export const ProjectsHomeComponent = () => {

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);
    

    return (
        <>        
            <div className="container_projects">
                { !location.pathname.includes("notes") && remainderCards.map(data => (
                    <NavLink className="wrapper_project" to={"/projects/" + data.route}>
                        <h3>{data.projectName}</h3>
                        <p>{data.summary}</p>
                    </NavLink>
                )) }
            </div>
            <Outlet/>
        </>

    )
}