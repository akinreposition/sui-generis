import React from 'react'
import { useWindowListener } from '../hooks/useWindowListener'
import { DesktopNavigation  } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'
const Navbar = ({ searchChange }) => {
    const [ width ] = useWindowListener();
    // const onSearchChange = (e) => { this.setState({ searchField : e.target.value}); }
    return <div>{ width <= 500 ? <MobileNavigation searchChange={searchChange}/> : <DesktopNavigation searchChange={searchChange}/>}</div>
}

export default Navbar
