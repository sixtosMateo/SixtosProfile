import React from 'react'



class Tools extends React.Component{
  render(){
    return (
      <div className="">
      <ul>
      {
        this.props.tools.map((tool, index)=>{
        return (<li>{ tool }</li>)
      })
    }
    </ul>

      </div>

    )
  }
}

export default Tools
