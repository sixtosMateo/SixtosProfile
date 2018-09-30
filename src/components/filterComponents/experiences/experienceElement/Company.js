import React from 'react'



class Company extends React.Component{
  render(){
    return (
      <div className="experience-company">
            {this.props.company}
      </div>

    )
  }
}

export default Company
