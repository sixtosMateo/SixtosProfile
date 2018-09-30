import React from 'react'



class Tools extends React.Component{
  render(){
    return (
      <div className="experience-tools">
      {
        Object.keys(this.props.tools).map(function(keyName, keyIndex) {
          {keyName}
        })
      }

      </div>

    )
  }
}

export default Tools
