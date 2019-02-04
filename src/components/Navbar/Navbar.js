import React from 'react'

export default (props) => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <span><img src="#" alt="Logo" /></span>

        <ul className='navbar-nav ml-auto text-light '>
          <li className="m-3 nav-item active">{props.newState.n1}</li>
          <li className="m-3 nav-item">{props.newState.n2}</li>
          <li className="m-3 nav-item">{props.newState.n3}</li>
        </ul>
      </nav>
    </div>
  )
}
