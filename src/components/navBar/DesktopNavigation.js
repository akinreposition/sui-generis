import React from 'react'
// import { Link } from 'react-router-dom'
import SearchBox from '../searches/SearchBox'
import semicolon from "../../assets/semicolon.png"
// import SuiGenerisContext from '../../context/sui-generis/suiGenerisContext'

export const DesktopNavigation = ({ searchChange }) => {
    // const suiGenerisContext = useContext(SuiGenerisContext);
    // const { onSearchChange } = suiGenerisContext;
    return (
        <nav className="navbar">
            <div className="logo">
                {/* <Link to='/'></Link> */}
                <img src= {semicolon} alt="web logo"/>
            </div>
            <div className="navbar-main">
                <div className="navbar-natural">
                    <div className="navbar-text">
                        <ul>
                            <li>
                                Name
                            </li>
                            <li>
                                Cohort
                            </li>
                            <li>
                                TechStack
                            </li>
                        </ul>
                    </div>
                </div>
                <SearchBox searchChange={searchChange}/>
            </div>
        </nav>
    )
}