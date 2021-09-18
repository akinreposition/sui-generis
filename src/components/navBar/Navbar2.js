import React from 'react'
import { useWindowListener } from '../hooks/useWindowListener'
import { DesktopNavigation2  } from './DesktopNavigation2'
import { MobileNavigation } from './MobileNavigation'
const Navbar2 = ({ searchChange }) => {
    const [ width ] = useWindowListener();
    return <div>{ width <= 500 ? <MobileNavigation searchChange={searchChange}/> : <DesktopNavigation2 searchChange={searchChange}/>}</div>
}

export default Navbar2