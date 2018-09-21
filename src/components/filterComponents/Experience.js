import React from 'react'
import Capital from './experiences/Capital'
import Karis from './experiences/Karis'
import Nlightn from './experiences/nLightn'


class Experience extends React.Component{
  render(){
    const experiences = [ "Capital", "Karis", "nLightn"];
    const components = [ <Capital />, <Karis />, <Nlightn />];

    return (
      <div className="experience-canvas">

        <div className="experience-nav">
            { experiences.map((experience, index)=>{
              return(
                  <a key={index} className={"experience-" + experience}
                    onClick={()=> this.props.setExperience(index)}>
                    { experience }
                  </a>
              )
            }) }
        </div>

        { components[this.props.experience] }



      </div>
    )
  }
}

export default Experience
