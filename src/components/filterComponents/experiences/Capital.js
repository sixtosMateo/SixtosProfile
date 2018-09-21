import React from 'react'

import City from './experienceElement/City'
import Company from './experienceElement/Company'
import Date from './experienceElement/Date'
import Duties from './experienceElement/Duties'
import Github from './experienceElement/Github'
import Learning from './experienceElement/Learning'
import Lines from './experienceElement/Lines'
import Link from './experienceElement/Link'
import Position from './experienceElement/Position'
import TeamSize from './experienceElement/TeamSize'
import Tools from './experienceElement/Tools'



class Capital extends React.Component{
  render(){
    return (
      <div className="capital">
          Capital
          <City />
          <Company />
          <Date />
          <Duties />
          <Github />
          <Learning />
          <Lines />
          <Link />
          <Position />
          <TeamSize />
          <Tools />

      </div>

    )
  }
}

export default Capital
