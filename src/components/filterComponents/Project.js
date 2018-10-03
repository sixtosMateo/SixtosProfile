import React from 'react'
import Chat from './projects/Chat'
import Restaurant from './projects/Restaurant'
import SynCare from './projects/SynCare'


class Project extends React.Component{
  render(){
    const projects = [ "Chat", "Restaurant","SynCare"];
    const components = [ <Chat projectObj={this.props.projectObj}/>, <Restaurant projectObj={this.props.projectObj}/>, <SynCare projectObj={this.props.projectObj}/>];
    return (
      <div className="project-canvas">

      <div className="project-nav">
          { projects.map((project, index)=>{
            return(
                <a key={index} className={"project-" + project}
                  onClick={()=> this.props.setProject(index)}>
                  { project }
                </a>
            )
          }) }
      </div>
      { components[this.props.project] }

      </div>
    )
  }
}

export default Project
