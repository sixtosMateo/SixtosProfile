import React from 'react'



class Duties extends React.Component{
  render(){
    return (
      <div className="">
          <ul>
            {this.props.duties.map((duty, index)=>{
              return (
                <li>{ duty }</li>
              )
            })}

            </ul>
      </div>

    )
  }
}

export default Duties
