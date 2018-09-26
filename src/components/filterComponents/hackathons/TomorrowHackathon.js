import React from 'react'

import Date from './hackathonElement/Date'
import Description from './hackathonElement/Description'
import Image from './hackathonElement/Image'
import Learning from './hackathonElement/Learning'
import ProjectName from './hackathonElement/ProjectName'
import Teammates from './hackathonElement/Teammates'
import Tools from './hackathonElement/Tools'

class TomorrowHackathon extends React.Component{
  render(){
    return (
      <div className="tomorrow-hackathon">
          {this.props.hackathonObj.projectName}
          <Date />
          <Description />
          <Image />
          <Learning />
          <ProjectName />
          <Teammates />
          <Tools/>
       </div>

    )
  }
}

export default TomorrowHackathon
