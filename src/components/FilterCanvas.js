import React from 'react'


class FilterCanvas extends React.Component{
  render(){
    return (
      <div className="filter-canvas">
        <p>"Hello this the canvas " + {this.props.filterId}</p>

      </div>
    )
  }
}

export default FilterCanvas
