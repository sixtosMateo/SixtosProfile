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
          TomorrowHackathon
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