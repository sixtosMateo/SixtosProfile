import React from 'react'
import About from './filterComponents/About'
import Experience from './filterComponents/Experience'
import Hackathon from './filterComponents/Hackathon'
import Project from './filterComponents/Project'
import Resume from './filterComponents/Resume'


  // const filters = [ <Resume/>, <Project/>, <Experience/>, <Hackathon/>, <About/> ];
  // filters[{this.props.filter}]
class FilterCanvas extends React.Component{
  render(){
    const filters = [ <Resume/>, <Project/>,
                      <Experience setExperience={this.props.setExperience} experience={this.props.experience}/>, 
                      <Hackathon setHackathon={this.props.setHackathon} hackathon={this.props.hackathon}/>, <About/> ];
    return (
      <div className="filter-canvas">
        {filters[this.props.filter]}
       </div>

    )
  }
}

export default FilterCanvas
