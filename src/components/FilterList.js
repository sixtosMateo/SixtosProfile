import React from 'react'


class FilterList extends React.Component{

  render(){
    const filters = [ 'Resume', 'Projects', 'Technical Experience', 'Hackathons', 'About Me' ];
    return (
      <div className="filter-list">
        <li><h3>Filters:</h3></li>
        {filters.map( (filter, index)=>{
          return(
            <li key={index} className={"filter-" + filter}>
              <a
                onClick={() => this.props.setFilter(index)}>
                {filter}
              </a>
            </li>)
        })}

      </div>
    )
  }
}

export default FilterList
