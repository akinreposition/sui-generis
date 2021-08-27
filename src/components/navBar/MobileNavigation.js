import React, { useState } from 'react'
import semicolon from "../../assets/semicolon.png"
import SearchBox from '../searches/SearchBox';

export const MobileNavigation = ({ searchChange }) => {
    const [ active, setActive ] = useState(false);
    return (
        <nav className= "mobile-navigation">
            <div className="logo">
                <img src={semicolon} width="100px" height="35px" alt="web logo"/>
            </div>
            <div>
                <div className="hamburger" onClick={() => setActive(!active)}></div>
                <div className={`mobile-navbar ${active ? 'active' : ''}`}>
                    <div className="contain">
                    <div className='hamburger-close' onClick={() => setActive(!active)}></div>
                </div>

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
                 <SearchBox searchChange={searchChange}/>
                </div>
            </div>
            
        </nav>
    )
}