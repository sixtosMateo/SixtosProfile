import React from 'react'

import Date from './hackathonElement/Date'
import Description from './hackathonElement/Description'
import Image from './hackathonElement/Image'
import Learning from './hackathonElement/Learning'
import ProjectName from './hackathonElement/ProjectName'
import Teammates from './hackathonElement/Teammates'
import Tools from './hackathonElement/Tools'



class FirstHackathon extends React.Component{
  render(){
    return (
      <div className="first-hackathon">
          <ProjectName projectName={this.props.hackathonObj.projectName}/>
          <Date date={this.props.hackathonObj.date}/>
          <Description description={this.props.hackathonObj.description}/>
          <Image image={this.props.hackathonObj.image}/>
          <Learning learning={this.props.hackathonObj.learning}/>
          <Teammates teammates={this.props.hackathonObj.teammates}/>
          <Tools tools={this.props.hackathonObj.tools}/>
       </div>

    )
  }
}

export default FirstHackathon
