import React from 'react'

export default (props) => {
  return (
    <div>
    <input className='d-block' placeholder='Testimonial' type="text"  name='bannerHeading' onChange={props.addTestPara} /> 
    </div>
  )
}
