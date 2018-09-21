import React, { Component } from 'react';
import './App.css';
import ProfileHeader from './components/ProfileHeader'
import FilterCanvas from './components/FilterCanvas'
import SkillList from './components/SkillList'
import FilterList from './components/FilterList'
import ImageCanvas from './components/ImageCanvas'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'



class App extends Component {
    constructor(){
        super()
        this.state ={
          filter: 0,
          hackathon: 0,
          experience: 0
        }
        this.setFilter = this.setFilter.bind(this)
        this.setHackathon = this.setHackathon.bind(this)
        this.setExperience = this.setExperience.bind(this)
      }
    setExperience(experience){
        window.alert(experience)
        this.setState({experience})
      }

    setFilter(filter){
      this.setState({filter})
    }
    setHackathon(hackathon){
      this.setState({hackathon})

    }

    render() {
      return (
        <div className="app">
          <ProfileHeader/>
          <FilterCanvas
            filter={this.state.filter}
            experience={this.state.experience}
            hackathon={this.state.hackathon}
            setHackathon={this.setHackathon}
            setExperience={this.setExperience} />
          <SkillList/>
          <FilterList setFilter={this.setFilter} />
          <ImageCanvas/>
          <ContactInfo/>
          <Footer/>
        </div>
      );
    }
}

export default App;
