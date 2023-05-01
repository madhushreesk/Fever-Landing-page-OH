import React from 'react'
import './BookNowSection.css'

const BookNowSection = () => {
  return (
    <div className='bookNowSectionContainer'>
      <div className='bookNowFormConatiner'>
      <form>
      <label className='name-label'>Name<span className='redStarRequired'>*</span>
        <input type="text" placeholder='Enter your full name' required className='name-input'/>
      </label>
    </form>
    <form>
      <label className='phone-label'>Phone Number<span className='redStarRequired'>*</span>
        <input type="text" placeholder='Enter your phone number' required className='phone-input'/>
      </label>
    </form>
    <div className='bookNowContainer'>
      <a href='https://web.orangehealth.in/public/order' target="blank">
      <button className='bookNowButton'>Book Now</button>
      </a>
   
    </div>
   
      </div>
      <div className='threeIconsConatiner'>
        <div className='IconAndText'>
        <div className='trustedbyImage'>
          <img src='./Images/trustedBy.webp'
          alt='trustedByIcon'
          className='trustedby'/></div>
          <div className='trustedBy1MCustomersText'>
          Trusted by
          <br/>
          <b>1 M+ customers</b>
          </div>
        </div>
      
        
      <div className='IconAndText'>
      <div className='certifiedLabsImage'>
            <img src='./Images/nabl&icmr.webp'
            alt='nabl&icmrIcon'
            className='certifiedLabs'/>
        </div>
        <div className='nablIcmrText'>
        <b>NABL &amp; ICMR</b>
        <br/>
        certified labs
        </div>
      </div>
     
        <div className='IconAndText'>
        <div className='taxBenefitImage'>
            <img src='./Images/taxBenefitIcon.webp'
            alt='taxBenefitIcon'
            className='taxBenefit'/>
        </div>
        <div className='100%TaxBenefitText'>
        100%
        <br/>
      <b>Tax Benefit </b>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default BookNowSection
