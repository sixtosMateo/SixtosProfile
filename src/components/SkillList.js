import React from 'react'


class SkillList extends React.Component{
  render(){
    const skills = ['Python', 'MySQL', 'Ajax/JQuery', 'Html/Javascript', 'Java' ];
    const tools = ['Django','Django-Rest-Framework', 'Flask', 'Parsley', 'Apache', 'SQLAlchemy', 'PostgreSQL','Amazon Lightsail','Ionic'];
    return (
      <div className="skill-list">
        <div className="language-list">
          <h2>Languages:</h2>
          {skills.map( (skill, index)=>{
            return(
              <li key={index} className={"language-" + skill}>
                  {skill}
              </li>)
          })}
        </div>


          <div className="tool-list">
          <h2>Tools:</h2>
          {tools.map((tool, index)=>{
            return(
              <li key={index} className={"tool-" + tool}>
                  {tool}
              </li>)
          })}
        </div>

      </div>


    )
  }
}

export default SkillList
