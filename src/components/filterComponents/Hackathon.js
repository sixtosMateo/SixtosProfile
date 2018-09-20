import React from 'react'
import FirstHackathon from './hackathons/FirstHackathon'
import WorldHackathon from './hackathons/WorldHackathon'
import TomorrowHackathon from './hackathons/TomorrowHackathon'
import FashionHackathon from './hackathons/FashionHackathon'


class Hackathon extends React.Component{

  render(){
    const hackathons = [ "First Hackathon", "World Hackathon", "Fashion Hackathon", "Tomorrow Hackathon"];
    const components = [ <FirstHackathon />, <WorldHackathon />, <FashionHackathon />, <TomorrowHackathon />];
    return (
      <div className="hackathon-canvas">
        <div className="hackathon-nav">
            { hackathons.map((hackathon, index)=>{
              return(
                  <a key={index} className={"hackathon-" + hackathon}
                    onClick={()=> this.props.setHackathon(index)}>
                    { hackathon }
                  </a>
              )
            }) }
        </div>

        {components[this.props.hackathon]}

      </div>
    )
  }
}



export default Hackathon
