import React, { Component } from 'react';
import Header from './components/Header';
import SearchBox from './components/searches/SearchBox'
import Natives  from './components/Natives/Index'
import { nativesInfo } from './components/Natives/helper'
import Spinner from './components/Spinner/Spinner'
import Scroll from './components/scroll/Scroll'
import './App.css';



class App extends Component {
    constructor(){
      super();
      this.state = {
        natives: [],
        searchField: ''
      }
    }

    componentDidMount () {
      this.setState({ natives : nativesInfo})
    }
   onSearchChange = (e) => {
    e.preventDefault();
      this.setState({ searchField : e.target.value});   
   }
   render(){
      const { natives, searchField } = this.state;
      const filteredNatives = natives.filter(native => {
        return native.name.toLowerCase().includes(searchField.toLowerCase())
      }); 
      return !natives.length ? <Spinner /> :
        (
          <div className='tc'>
            <Header />
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <Natives nativesInfo={filteredNatives}/>
            </Scroll>
          </div>
        )
   }
}

export default App;
