import React from "react";
import { useEffect , useState} from "react";
import { NavLink , Outlet, useLocation} from "react-router-dom";
import "./NavBarComponent.css"

export const NavBarComponent = () => {

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    return (
        <>
        <nav>
            <div className="wrapper_nav">
                <ul>
                    { currentPath === '/'  && (
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                    )}
                    { currentPath === '/projects'  && (
                        <li>
                            <NavLink to="/">Profile</NavLink>
                        </li>
                    )}
                    { currentPath === '/projects/notes'  && (
                        <li>
                            <NavLink to="/">Projects</NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
        <main>
            <Outlet/>
        </main>
        </>
    )
}

