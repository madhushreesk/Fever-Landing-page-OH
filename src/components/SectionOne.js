import React from 'react'
import './SectionOne.css'

const SectionOne = () => {
  return (
    <div className='outerContainer'>
        <div className='comprehensiveFP'>
            <span className='title-comprehensive'>Comprehensive</span>
            <br/>
            <span className='title-feverProfile'>FEVER PROFILE</span>
            <div className='greenRectangle'></div>
            <div className='tests-and-reports'>
                <div className='testsIncluded'>
                    <img src='./Images/labIcon.webp'
                    alt='lab-icon'
                    className='labIcon'/>
                    <div>
                    8 tests <br/> included
                    </div>
                   
                </div>
                <div className='reportsWithin'>
                    <img src='./Images/reportsWithin.webp'
                    alt='reports-within-icon'
                    className='reportsWithinIcon'/>
                    <div>
                    Reports <br/>
                    within 18 hrs
                    </div>
                </div>
            </div>
        </div>

      <div className='feverImageContainer'>
        <img src='./Images/feverImage.webp'
        alt='FeverImage'
        className='feverImage'/>
      </div>
    </div>
  )
}

export default SectionOne
