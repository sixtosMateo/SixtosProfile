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
          project: 0,
          projectObj:{
            'date':'August 2018',
            'description':'To be Continue...',
            'lines':'Over 540 lines',
            'projectName': 'React Chat App',
            'tools':'JavaScript, Web-pack, JSX, CSS'
          },
          hackathonObj: {
            'date':'September 2017',
            'description':'To be Continue...',
            'image':'Team picture',
            'learning':'This will be a description of what I learned',
            'projectName': 'First Hackathon: Juxtaposr',
            'teammates':'Name1, Name2, Name3, Name4',
            'tools':'tool1, tool2, tool3, tool4'
          },
          experienceObj: {
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
          experienceListObj:[
            {
              'city': 'Salinas, CA',
              'company': 'Karis Toys',
              'date': 'June 2018 - Present',
              'duties': {"0": 'Backend', "1":'Frontend', "2":'Database'},
              'github': 'https://github.com/sixtosMateo/',
              'learning': 'To be continue...',
              'lines': 'Over 2000 lines',
              'links': 'https://dry-hamlet-69318.herokuapp.com',
              'position': 'Software Developer',
              'teamsize':'1',
              'tools': {"0":'Python', "1":'JavaScript', "2":'Html' }
            },
            {
              'city': 'San Jose, CA (Remote)',
              'company': 'nLightn Technologies',
              'date': 'December 2017 - April 2018',
              'duties': {"0": 'Backend', "1":'Frontend', "2":'Database'},
              'github': 'https://github.com/sixtosMateo/',
              'learning': 'To be continue...',
              'lines': 'Over 2500 lines',
              'links': 'LinkedIn',
              'position': 'Full-Stack Developer',
              'teamsize':'6',
              'tools': {"0":'Python', "1":'JavaScript', "2":'Html' }
            },
            {
              'city': 'Monterey, CA',
              'company': 'Capital Insurance Group',
              'date': 'October 2016 - April 2016',
              'duties': {"0": 'Backend', "1":'Frontend'},
              'github': 'https://github.com/sixtosMateo/',
              'learning': 'To be continue...',
              'lines': 'Over 2000 lines',
              'links': 'LinkedIn',
              'position': 'Associate Software Developer',
              'teamsize':'6',
              'tools': {"0":'Java', "1":'HTTP request'}
            }],
          hackathonListObj:[
                {
                  'date':'September 2017',
                  'description':'To be Continue...',
                  'image':'Team picture',
                  'learning':'This will be a description of what I learned',
                  'projectName': 'First Hackathon: Juxtaposr',
                  'teammates':'Name1, Name2, Name3, Name4',
                  'tools':'tool1, tool2, tool3, tool4'
                },

                {
                  'date':'September 2017',
                  'description':'To be Continue...',
                  'image':'Team picture ',
                  'learning':'This will be a description of what I learned',
                  'projectName': 'World Hackathon: Geocash',
                  'teammates':'Name1, Name2, Name3, Name4',
                  'tools':'tool1, tool2, tool3, tool4'
                },
                {
                  'date':'September 2017',
                  'description':'To be Continue...',
                  'image':'Team picture',
                  'learning':'This will be a description of what I learned',
                  'projectName':'Fashion Hackathon: Th3ms',
                  'teammates':'Name1, Name2, Name3, Name4',
                  'tools':'tool1, tool2, tool3, tool4'
                },
                {
                  'date':'October 2017',
                  'description':'To be Continue...',
                  'image':'Team picture',
                  'learning':'This will be a description of what I learned',
                  'projectName':'Tomorrow Hackathon: SynCare',
                  'teammates':'Name1, Name2, Name3, Name4',
                  'tools':'tool1, tool2, tool3, tool4'
                }
            ],
          projectListObj:[
            {
            'date':'August 2018',
            'description':'To be Continue...',
            'lines':'Over 540 lines',
            'projectName': 'React Chat App',
            'tools':'JavaScript, Web-pack, JSX, CSS'
            },
            {
            'date':'January 2017 - June 2018',
            'description':'To be Continue...',
            'lines':'Over 500 lines',
            'projectName': 'Restaurant Menu App',
            'tools':'Python, Flask, Ajax, API'
            },
            {
            'date':'October 2017',
            'description':'To be Continue...',
            'lines':'Over 500 lines',
            'projectName': 'SynCare',
            'tools':'Ionic, Angular, HTTP request, API'
            }]
      }
        this.setFilter = this.setFilter.bind(this)
        this.setHackathon = this.setHackathon.bind(this)
        this.setExperience = this.setExperience.bind(this)
        this.setProject = this.setProject.bind(this)
        this.setHackathonObj = this.setHackathonObj.bind(this)
        this.setExperienceObj = this.setExperienceObj.bind(this)
        this.setProjectObj = this.setProjectObj.bind(this)
    }
    setFilter(filter){
        this.setState({filter})
    }
    setExperience(experience){
        this.setState({experience})
        this.setExperienceObj(experience)
    }
    setHackathon(hackathon){
      this.setState({hackathon})
      this.setHackathonObj(hackathon)
    }
    setProject(project){
      this.setState({project})
      this.setProjectObj(project)
    }
    setHackathonObj(index){
      this.setState({hackathonObj: this.state.hackathonListObj[index]})
    }
    setExperienceObj(index){
      this.setState({experienceObj: this.state.experienceListObj[index]})
    }
    setProjectObj(index){
      this.setState({projectObj: this.state.projectListObj[index]})
    }


    render() {
      return (
        <div className="app">

          <ProfileHeader/>
          <FilterCanvas
            filter={this.state.filter}
            experience={this.state.experience}
            project={this.state.project}
            hackathon={this.state.hackathon}
            hackathonObj={this.state.hackathonObj}
            projectObj={this.state.projectObj}
            experienceObj={this.state.experienceObj}
            setProject={this.setProject}
            setHackathon={this.setHackathon}
            setExperience={this.setExperience}/>
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
