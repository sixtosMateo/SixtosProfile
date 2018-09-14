import React from 'react';
import  { Document, Page} from 'react-pdf';


import 'react-pdf/dist/Page/AnnotationLayer.css';

class PDFResume extends React.Component{
  constructor(){
    super()
      this.state ={
        numPages:null,
        pageNumber:1,
      }
      this.onDocumentLoad = this.onDocumentLoad.bind(this)
    }
    onDocumentLoad = ({numPages})=>{
      this.setState({numPages});

    }

  render(){
    const { pageNumber, numPages } =this.state;
    return (
      <div className="pdf-resume">
        <Document
          file="/Sixtos_Resume.pdf"
          onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        </div>

    );
  }
}

export default PDFResume
