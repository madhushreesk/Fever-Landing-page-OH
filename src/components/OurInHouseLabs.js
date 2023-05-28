import React from 'react'
import './OurInHouseLabs.css'

const OurInHouseLabs = () => {
  return (
    <div>
      <div class="InHouseLabsContainer">
        <div class="InHouseLabHeadingAndIcon">
        <div class="OurInHouseLabsTitle">Our in house labs</div>
        <div class="LabHeadingGreenBar"></div>
        </div>
        <div className='InHouseLabAndGoogleRating'>
      <div class="labDescription">
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
     
      
       
      <div class="LabImageWrapper">
        <div class="LabSectionImageCard">
          <img
            src="/Images/highlyQualifiedDoctors.webp"
            class="InHouseLabsImage" alt='LabSectionImage'
          />
          <div class="InHouseLabsImageDescription">
            Highly qualified and skilled doctors
          </div>
        </div>
        <div class="LabSectionImageCard">
          <img
            src="/Images/worldClassTechnology.webp"
            class="InHouseLabsImage" alt='LabSectionImage'
          />
          <div class="InHouseLabsImageDescription">
            World class technology and equipment
          </div>
        </div>
        <div class="LabSectionImageCard">
          <img
            src="/Images/internationalQuality.webp"
            class="InHouseLabsImage" alt='LabSectionImage'
          />
          <div class="InHouseLabsImageDescription">
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
