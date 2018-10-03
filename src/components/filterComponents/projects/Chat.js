import React from 'react'

import Date from './projectElement/Date'
import Description from './projectElement/Description'
import Lines from './projectElement/Lines'
import ProjectName from './projectElement/ProjectName'
import Tools from './projectElement/Tools'

class Chat extends React.Component{
  render(){
    return (
      <div className="project-chat">
        <div className="title">
        <ProjectName projectName={this.props.projectObj.projectName} />
        <Date date={this.props.projectObj.date} />
        </div>
        <div className="center">
        <Tools tools={this.props.projectObj.tools} />
        <Lines lines={this.props.projectObj.lines} />
        </div>
        <Description description={this.props.projectObj.description} />

       </div>

    )
  }
}

export default Chat
