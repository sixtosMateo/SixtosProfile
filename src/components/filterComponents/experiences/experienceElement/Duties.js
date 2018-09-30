import React from 'react'



class Duties extends React.Component{
  render(){
    return (
      <div className="experience-duties">
            {
              Object.keys(this.props.duties).map(function(keyName, keyIndex) {
                {keyName}
              })
            }


      </div>

    )
  }
}

export default Duties
