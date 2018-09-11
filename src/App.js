import React, { Component } from 'react';
import './App.css';
import ProfileHeader from './components/ProfileHeader'
import FilterCanvas from './components/FilterCanvas'
import SkillList from './components/SkillList'
import FilterList from './components/FilterList'
import ImageCanvas from './components/ImageCanvas'
import ContactInfo from './components/ContactInfo'



class App extends Component {
    constructor(){
      super()
        this.state ={
          filter:null
        }
        this.setFilter = this.setFilter.bind(this)
      }

    setFilter(filter){
      this.setState({filter:filter})

    }




    render() {
      return (
        <div className="app">
          <ProfileHeader/>
          <FilterCanvas filterId={this.state.filter}/>
          <SkillList/>
          <FilterList setFilter={this.setFilter}/>
          <ImageCanvas/>
          <ContactInfo/>
        </div>
      );
    }
}

export default App;
