import React from 'react'


class FilterList extends React.Component{

  render(){
    const filters = [ 'Filter:', 'Resume', 'Projects', 'Technical Experience', 'Hackathons', 'Education' ];
    return (
      <div className="filter-list">

        {filters.map( (filter, index)=>{
          return(
            <li key={index} className={"filter-" + filter}>
              <a
                onClick={() => this.props.filter(index)}>
                {filter}
              </a>
            </li>)
        })}

      </div>
    )
  }
}

export default FilterList
