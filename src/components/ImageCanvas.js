import React from 'react'


class ImageCanvas extends React.Component{
  render(){
    return (
      <div className="image-canvas">
        <img src="selfie.png" style={{width:'10rem', height:"10rem" }} />
      </div>
    )
  }
}

export default ImageCanvas
