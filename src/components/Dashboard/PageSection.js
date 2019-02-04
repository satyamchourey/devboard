import React from 'react'

export default (props) => {
  return (
    <div>
    <input className='d-block' placeholder='Page Section Heading' type="text"  name='bannerHeading' onChange={props.addPSHeading} />
    </div>
  )
}
