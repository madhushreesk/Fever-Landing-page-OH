import React from 'react'
import './ComparePackages.css'

const ComparePackages = () => {
  return (
    <>
      <div className='comparePackagesTitleConatiner'>
      <div className='leftGreenShadow'></div>
      <div className='comparePackageTitle'>Compare Packages</div>
      <div className='rightGreenShadow'></div>
    </div>
    <div className='backgroundGradient'>
    <div className='threePackageConatiner'>
          <div className='feverProfileOuterContainer'>
            <div className='feverProfileInnerContainer'></div>
          </div>
          <div className='comprehensiveFeverOuterProfile'>
            <div className='comprehensiveFeverInnerProfile'>
              <div>
                <img className='feverImageCmp' src='./Images/feverImagecmp.webp' alt='fever-img-cmp'/>
              </div>
              <div className='maximumValueGreenBox'>
                <span className='maximumValue'>Maximum Value</span>
              </div>
             <div className='Comprehensive-Fever-title'>
             Comprehensive Fever Profile
             </div>
             <div className='mrpAndScratchPrice'>
              <div className='mrpPrice'>₹1999</div>
              <div className='scratchPrice'>MRP ₹5690</div>
             </div>
            </div>
          </div>
          <div className='advanceFeverOuterProfile'>
            <div className='advanceFeverInnerProfile'></div>
          </div>
        </div>
    </div>
    </>
  
  )
}

export default ComparePackages
