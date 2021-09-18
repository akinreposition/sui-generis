import React from 'react'
import { Link } from 'react-router-dom';
// import SearchBox from '../searches/SearchBox'
import semicolon from "../../assets/semicolon.png"
// import SuiGenerisContext from '../../context/sui-generis/suiGenerisContext'

export const DesktopNavigation = ({ searchChange }) => {
    // const suiGenerisContext = useContext(SuiGenerisContext);
    // const { onSearchChange } = suiGenerisContext;
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to='/'>
                    <img src= {semicolon} alt="web logo"/> 
                </Link>
            </div>
            <div className="navbar-main">
                <div className="navbar-natural">
                    <div className="navbar-text">
                        <ul>
                            <li>
                                <Link to="/natives">
                                    Natives
                                </Link>
                            </li>
                            <li>
                                <Link to="/cohorts">
                                    Cohorts
                                </Link>
                            </li>
                            <li>
                                <Link to="/techstack">
                                    TechStack
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </nav>
    )
}