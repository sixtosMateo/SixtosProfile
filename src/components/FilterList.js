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
              /*user clicks room triggers app's subscribeToRoom base on the room id that was click inverse work flow*/
                onClick={() => window.alert(filter + " "+ index)}>
                {filter}
              </a>
            </li>)
        })}

      </div>
    )
  }
}

export default FilterList
