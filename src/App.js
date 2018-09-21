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
          experience: 0,
          experienceListObj:[{
            0:{
              'city': 'Salinas, CA',
              'company': 'Karis Toys',
              'date': 'June 2018 - Present',
              'duties': {0: 'Backend', 1:'Frontend', 2:'Database'},
              'github': 'https://github.com/sixtosMateo/',
              'learning': 'To be continue...',
              'lines': 'Over 2000 lines',
              'links': 'https://dry-hamlet-69318.herokuapp.com',
              'position': 'Software Developer',
              'teamsize':'1',
              'tools': {0:'Python', 1:'JavaScript', 2:'Html' }
            },
            1:{
              'city': 'San Jose, CA (Remote)',
              'company': 'nLightn Technologies',
              'date': 'December 2017 - April 2018',
              'duties': {0: 'Backend', 1:'Frontend', 2:'Database'},
              'github': 'https://github.com/sixtosMateo/',
              'learning': 'To be continue...',
              'lines': 'Over 2500 lines',
              'links': 'LinkedIn',
              'position': 'Full-Stack Developer',
              'teamsize':'6',
              'tools': {0:'Python', 1:'JavaScript', 2:'Html' }
            },
            2:{
              'city': 'Monterey, CA',
              'company': 'Capital Insurance Group',
              'date': 'October 2016 - April 2016',
              'duties': {0: 'Backend', 1:'Frontend'},
              'github': 'https://github.com/sixtosMateo/',
              'learning': 'To be continue...',
              'lines': 'Over 2000 lines',
              'links': 'LinkedIn',
              'position': 'Associate Software Developer',
              'teamsize':'6',
              'tools': {0:'Java', 1:'HTTP request'}
            }

          }],
          hackathonListObj:[
            {
              0:{
                'date':'',
                'description':'',
                'image':'',
                'learning':'',
                'projectName':'First Hackathon',
                'teammates':'',
                'tools':''
              },

              1:{
                'date':'',
                'description':'',
                'image':'',
                'learning':'',
                'projectName':'World Hackathon',
                'teammates':'',
                'tools':''
              },
              2:{
                'date':'',
                'description':'',
                'image':'',
                'learning':'',
                'projectName':'Fashion Hackathon',
                'teammates':'',
                'tools':''
              },
              3:{
                'date':'',
                'description':'',
                'image':'',
                'learning':'',
                'projectName':'Tomorrow Hackathon',
                'teammates':'',
                'tools':''
              }
            }
          ]
        }
        this.setFilter = this.setFilter.bind(this)
        this.setHackathon = this.setHackathon.bind(this)
        this.setExperience = this.setExperience.bind(this)
      }
    setExperience(experience){
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
