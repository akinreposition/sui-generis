import React from 'react'
import { useWindowListener } from '../hooks/useWindowListener'
import { DesktopNavigation  } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'
const Navbar = ({ searchChange }) => {
    const [ width ] = useWindowListener();
    return <div>{ width <= 500 ? <MobileNavigation searchChange={searchChange}/> : <DesktopNavigation searchChange={searchChange}/>}</div>
}

export default Navbar