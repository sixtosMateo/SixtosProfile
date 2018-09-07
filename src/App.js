import React, { Component } from 'react';
import './App.css';
import ProfileHeader from './components/ProfileHeader'
import FilterCanvas from './components/FilterCanvas'
import SkillList from './components/SkillList'
import FilterList from './components/FilterList'
import ImageCanvas from './components/ImageCanvas'
import ContactInfo from './components/ContactInfo'



class App extends Component {

  render() {
    return (
      <div className="app">
        <ProfileHeader/>
        <FilterCanvas/>
        <SkillList/>
        <FilterList/>
        <ImageCanvas/>
        <ContactInfo/>
      </div>
    );
  }
}

export default App;
