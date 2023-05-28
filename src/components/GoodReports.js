import React from 'react'
import './GoodReports.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GoodReports = () => {
  return (
    <Carousel>
    <div className='carouselConatiner'>
      <img src="/Images/highlyQualifiedDoctors.webp" className="Image1" alt="Image1"  />
      <p className="legend">Image 1 description</p>
    </div>
    <div>
      <img src="/Images/highlyQualifiedDoctors.webp" className="Image1" alt="Image1" />
      <p className="legend">Image 2 description</p>
    </div>
    <div>
      <img src="/Images/highlyQualifiedDoctors.webp" className="Image1" alt="Image1" />
      <p className="legend">Image 3 description</p>
    </div>
  </Carousel>
  )
}

export default GoodReports
