import React, { Component }  from 'react'
import Natives  from '../components/natives/Natives'
import { nativesInfo } from '../components/natives/helper';
import Navbar2 from '../components/navBar/Navbar2';

class SemicolonNatives extends Component {
    constructor() {
        super();
        this.state = {
            natives: nativesInfo,
            searchField: '',
            
        }
    }
    onSearchChange = (e) => { this.setState({ searchField : e.target.value}); }
    render(){
        const { natives, searchField } = this.state; 
        const filteredNatives =  natives.filter(native => { 
            return native.name.toLowerCase().includes(searchField.toLowerCase())
        });
    return (
        <div className='tc'>
            <Navbar2 searchChange={this.onSearchChange}/>
            <Natives natives={ filteredNatives }/>
        </div>
        )
    }
}

export default SemicolonNatives
