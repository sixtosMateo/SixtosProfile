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
        this.filter = this.filter.bind(this)
      }

    filter(filter){
      this.setState({filter:filter})
      window.alert(filter)
    }




  render() {
    return (
      <div className="app">
        <ProfileHeader/>
        <FilterCanvas/>
        <SkillList/>
        <FilterList filter={this.filter}/>
        <ImageCanvas/>
        <ContactInfo/>
      </div>
    );
  }
}

export default App;
