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

                <a
                /*user clicks room triggers app's subscribeToRoom base on the room id that was click inverse work flow*/
                  onClick={() => window.alert(skill + " "+ index)}>
                  {skill}
                </a>
              </li>)
          })}
        </div>
          <h2>Tools:</h2>
          <div className="tool-list">
          {tools.map((tool, index)=>{
            return(
              <li key={index} className={"tool-" + tool}>

                <a
                /*user clicks room triggers app's subscribeToRoom base on the room id that was click inverse work flow*/
                  onClick={() => window.alert(tool + " "+ index)}>
                  {tool}
                </a>
              </li>)
          })}
        </div>

      </div>


    )
  }
}

export default SkillList
