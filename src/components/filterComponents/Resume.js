import React from 'react'
import PDFResume from './PDFResume'

class Resume extends React.Component{
  render(){
    return (
      <div className="resume-canvas">
        <PDFResume/>
      </div>
    )
  }
}

export default Resume
