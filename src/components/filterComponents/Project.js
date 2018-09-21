import React from 'react'
import Chat from './projects/Chat'
import Restaurant from './projects/Restaurant'
import SynCare from './projects/SynCare'


class Project extends React.Component{
  render(){
    const projects = [ "SynCare", "Chat", "Restaurant"];
    const components = [ <Chat />, <Restaurant />, <SynCare />];
    return (
      <div className="project-canvas">

      <div className="project-nav">
          { projects.map((project, index)=>{
            return(
                <a key={index} className={"project-" + project}
                  onClick={()=> this.props.setProject(project)}>
                  { project }
                </a>
            )
          }) }
      </div>

      </div>
    )
  }
}

export default Project
