import React from 'react'

export default (props) => {
  return (
    <div>
    <input className='d-block' placeholder='Banner Heading' type="text"  name='bannerHeading' onChange={props.addBannerHeading} />    </div>
  )
}
