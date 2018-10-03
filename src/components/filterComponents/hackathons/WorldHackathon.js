import React from 'react'

import Date from './hackathonElement/Date'
import Description from './hackathonElement/Description'
import Image from './hackathonElement/Image'
import Learning from './hackathonElement/Learning'
import ProjectName from './hackathonElement/ProjectName'
import Teammates from './hackathonElement/Teammates'
import Tools from './hackathonElement/Tools'



class WorldHackathon extends React.Component{
  render(){
    return (
      <div className="world-hackathon">
        <div className="hackathon-title">
          <ProjectName projectName={this.props.hackathonObj.projectName}/>
          <Date date={this.props.hackathonObj.date}/>
        </div>
        <div className="hackathon-center">
          <Teammates teammates={this.props.hackathonObj.teammates}/>
          <Image image={this.props.hackathonObj.image}/>
          <Tools tools={this.props.hackathonObj.tools}/>
          <Description description={this.props.hackathonObj.description}/>
        </div>

        <Learning learning={this.props.hackathonObj.learning}/>
       </div>

    )
  }
}

export default WorldHackathon
