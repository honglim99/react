import React from 'react'

function ImageList() {
    const images =[
        {src: "./images/1.jpg", title: "Movie 1"},
        {src: "./images/2.png", title: "Movie 2"},
        {src: "./images/3.jpg", title: "Movie 3"},
        {src: "./images/4.jpg", title: "Movie 4"},
    ]

    const listImages = images.map((image) => <img src={image.src} width='150px' height='200px' alt={image.title}></img>);
  return (
    <div>
        {listImages}
    </div>
  )
}

export default ImageList