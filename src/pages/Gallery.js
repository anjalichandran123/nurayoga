import React from 'react'
import YogaPoseGallery from '../components/gallery/gallery'
import Galleryheader from '../components/gallery/galleryheader'
import Galleryfooter from '../components/gallery/galleryfooter'
import Gallerytenth from '../components/gallery/gallerytenth'

function Gallery() {
  return (
    <div style={{ backgroundColor: "#e9edf5" }}>
      <Galleryheader/>
        <YogaPoseGallery/>
        <Galleryfooter/>
        <Gallerytenth/>
      
    </div>
  )
}

export default Gallery
