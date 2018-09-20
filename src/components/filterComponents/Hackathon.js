import React from 'react'
import FirstHackathon from './hackathons/FirstHackathon'
import WorldHackathon from './hackathons/WorldHackathon'
import TomorrowHackathon from './hackathons/TomorrowHackathon'
import FashionHackathon from './hackathons/FashionHackathon'





class Hackathon extends React.Component{
  render(){
    return (
      <div className="hackathon-canvas">
        <div className="hackathon-nav">
            <a className="hackathon-component"
              onClick={() => window.alert("First Hackathon")}>
              First Hackathon
            </a> |
            <a className="hackathon-component"
              onClick={() => window.alert("World Hackathon")}>
              World Hackathon
            </a> |
            <a className="hackathon-component"
              onClick={() => window.alert("Fashion Hackathon")}>
              Fashion Hackathon
            </a> |
            <a className="hackathon-component"
              onClick={() => window.alert("Hack Your Tomorrow Hackathon")}>
              Hack Your Tomorrow Hackathon
            </a>
        </div>

      </div>
    )
  }
}



export default Hackathon
