import React from 'react'



class Date extends React.Component{
  render(){
    return (
      <div className="experience-date">
            {this.props.date}
      </div>

    )
  }
}

export default Date
