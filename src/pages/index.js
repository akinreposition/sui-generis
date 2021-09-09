import React, { Component }  from 'react'
import Navbar from '../components/navBar/Navbar';
import Header from '../components/Header';
import HomeScreen from './HomeScreen';

class Index extends Component  {
    constructor() {
        super();
        this.state = {
            searchField: '',
        }
    }
    onSearchChange = (e) => { this.setState({ searchField : e.target.value}); }
    render(){
    return (
        <div className='tc'>
            <Navbar searchChange={this.onSearchChange}/>
            <Header />
            <HomeScreen />
        </div>
        )
    }
}

export default Index
