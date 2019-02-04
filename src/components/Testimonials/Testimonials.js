import React from 'react'
// import Img from './Abstract.jpg'
export default (props) => {
    // const thumbnail={height:"300px"};

  return (
    <div>
    <div className="media container-fluid">

    {/* <img style={thumbnail} src={Img} className="mr-3" alt="..." /> */}

  <div className="media-body">
  <h5 className="mt-0 text-center">Testimonials</h5>

   <p> {props.para.testPara}</p>
    <span className='text-center d-block'><em>~Author Name</em></span>
  </div>
</div>
    </div>
  )
}
