import React from 'react'



class City extends React.Component{
  render(){
    return (
      <div className="city">
            {this.props.city}
      </div>

    )
  }
}

export default City
