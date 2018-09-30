import React from 'react'



class City extends React.Component{
  render(){
    return (
      <div className="experience-city">
            {this.props.city}
      </div>

    )
  }
}

export default City
