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


class Karis extends React.Component{
  render(){
    return (
      <div className="karis">
      <City city={this.props.experienceObj.city}/>
      <Company company={this.props.experienceObj.company}/>
      <Date date={this.props.experienceObj.date}/>
      <Duties duties={this.props.experienceObj.duties} />
      <Github github={this.props.experienceObj.github} />
      <Learning learning={this.props.experienceObj.learning} />
      <Lines lines={this.props.experienceObj.lines} />
      <Link link={this.props.experienceObj.link} />
      <Position position={this.props.experienceObj.position} />
      <TeamSize teamsize={this.props.experienceObj.teamsize}/>
      <Tools tools={this.props.experienceObj.tools}/>
      </div>

    )
  }
}

export default Karis
