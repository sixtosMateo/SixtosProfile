import React from 'react'


import Date from './projectElement/Date'
import Description from './projectElement/Description'
import Lines from './projectElement/Lines'
import ProjectName from './projectElement/ProjectName'
import Tools from './projectElement/Tools'

class Restaurant extends React.Component{
  render(){
    return (
      <div className="project-restaurant">
          <ProjectName projectName={this.props.projectObj.projectName}/>
          <Date date={this.props.projectObj.date}/>
          <Lines lines={this.props.projectObj.lines} />
          <Description position={this.props.projectObj.description} />
          <Tools tools={this.props.projectObj.tools}/>

       </div>

    )
  }
}

export default Restaurant
