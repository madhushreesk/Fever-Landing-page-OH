import React from 'react'
import './OurInHouseLabs.css'

const OurInHouseLabs = () => {
  return (
    <div>
      <div className="InHouseLabsContainer">
        <div className="InHouseLabHeadingAndIcon">
        <div className="OurInHouseLabsTitle">Our in house labs</div>
        <div className="LabHeadingGreenBar"></div>
        </div>
        <div className='InHouseLabAndGoogleRating'>
      <div className="labDescription">
        Our team of qualified pathologists and lab technicians ensure that your
        samples are processed with the highest safety protocols so that all reports
        are absolutely accurate.
      </div>
      <div className='googleRatingContainer'>
        <div className='textAndRating'>
        <div className='ratingText'>
        Highest-rated lab
          on 
        </div>
          <div className='ratingInGreen'>4.9/5</div>
        </div>

          <div className='whiteBoxAndStarsWrapper'>
        <div className='whiteBoxWithStarsContainer'>
        <div className='whiteBoxAndStars'>
          <img src="/Images/star.webp" alt='starImage' className='starRating'/>
        </div>
        <div className='whiteBoxAndStars'>
        <img src="/Images/star.webp" alt='starImage' className='starRating'/>
        </div>
        <div className='whiteBoxAndStars'>
        <img src="/Images/star.webp" alt='starImage' className='starRating'/>
        </div>
        <div className='whiteBoxAndStars'>
        <img src="/Images/star.webp" alt='starImage' className='starRating'/>
        </div>
        <div className='whiteBoxAndStars'>
        <img src="/Images/star.webp" alt='starImage' className='starRating'/>
        </div>
      </div>
        </div>
      </div>
        </div>
     
      
       
      <div className="LabImageWrapper">
        <div className="LabSectionImageCard">
          <img
            src="/Images/highlyQualifiedDoctors.webp"
            className="InHouseLabsImage" alt='LabSectionImage'
          />
          <div className="InHouseLabsImageDescription">
            Highly qualified and skilled doctors
          </div>
        </div>
        <div className="LabSectionImageCard">
          <img
            src="/Images/worldClassTechnology.webp"
            className="InHouseLabsImage" alt='LabSectionImage'
          />
          <div className="InHouseLabsImageDescription">
            World class technology and equipment
          </div>
        </div>
        <div className="LabSectionImageCard">
          <img
            src="/Images/internationalQuality.webp"
            className="InHouseLabsImage" alt='LabSectionImage'
          />
          <div className="InHouseLabsImageDescription">
            International Quality Compliance
          </div>
        </div>
      </div>
      
      </div>
      <div className='backgroundColor '></div>
     
    </div>
    
  )
}

export default OurInHouseLabs
