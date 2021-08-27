import React, { Component }  from 'react'
import Navbar from '../components/navBar/Navbar';
import Header from '../components/Header';
// import SuiGenerisContext from '../context/sui-generis/suiGenerisContext';
import Natives  from '../components/Natives/Natives'
// import SearchBox from '../components/searches/SearchBox';
import { nativesInfo } from '../components/Natives/helper';



class Index extends Component {
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
        // const suiGenerisContext = useContext(SuiGenerisContext)
        // const { searchNative, onSearchChange } = suiGenerisContext;
    return (
        <div className='tc'>
            <Navbar searchChange={this.onSearchChange}/>
            <Header />
            {/* <SearchBox searchChange={this.onSearchChange}/> */}
            <Natives natives={ filteredNatives }/>
        </div>
        )
    }
}

export default Index
