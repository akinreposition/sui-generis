import React, { Component }  from 'react'
import Navbar from '../components/navBar/Navbar';
import Header from '../components/Header';
import Footer from '../components/footer/Footer'

class LandingPage extends Component  {
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
            <Footer />
        </div>
        )
    }
}

export default LandingPage
