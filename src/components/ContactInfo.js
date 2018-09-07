import React from 'react'


class ContactInfo extends React.Component{
  render(){
    const contactList = ['LinkedIn: Logo', 'GitHub: Logo', 'Twitter: Logo', 'Email: email', 'Phone: (###) ###-####' ];
    return (
      <div className="contact-info">
        <div className="contact-list">
          {contactList.map( (contact, index)=>{
            return(
              <li key={index} className={"contact-" + contact}>

                <a
                /*user clicks room triggers app's subscribeToRoom base on the room id that was click inverse work flow*/
                  onClick={() => window.alert(contact + " "+ index)}>
                  {contact}
                </a>
              </li>)
          })}
        </div>
      </div>
    )
  }
}

export default ContactInfo
