import React from 'react'

import City from './experienceElement/City'
import ProjectName from './experienceElement/ProjectName'
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
        <div className="title">
          <ProjectName projectName={this.props.experienceObj.projectName}/>
          <Date date={this.props.experienceObj.date}/>
        </div>

        <div className="center">
          <div className="center-heading">
            <Position position={this.props.experienceObj.position} />
            <City city={this.props.experienceObj.city}/>
          </div>
          <div className="center-middle">
            <div className="center-left">
              <TeamSize teamsize={this.props.experienceObj.teamsize}/>
              <Duties duties={this.props.experienceObj.duties} />
            </div>
            <div className="center-right">
              <div className="center-lines">
              <Lines lines={this.props.experienceObj.lines} />
              </div>
              <div className="center-tool">
              <Tools tools={this.props.experienceObj.tools}/>
              </div>
            </div>
          </div>


        </div>
          <Github github={this.props.experienceObj.github} />
          <Learning learning={this.props.experienceObj.learning} />

          <Link links={this.props.experienceObj.links} />



      </div>

    )
  }
}

export default Capital
