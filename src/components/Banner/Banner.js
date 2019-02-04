import React from 'react'

export default (...props) => {
  return (
    <div className='jumbotron'>
    <h1 className="display-4">{props[0].newHead}</h1>
    {console.log(props[0].newHead)}

  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    </div>
  )
}
