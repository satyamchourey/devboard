import React, { Component } from 'react'

export default class Dashboard extends Component {

centered={
  margin:"0 auto",
  width:"50%"
}
  render(props) {
    return (
      <div className='row'>
        <div style={this.centered}>
         { this.props.navInputs.map((item, i)=>{
           return(<input className='d-block' placeholder='Nav Item' type="text" key={'n'+i+1} name={"n"+(i+1)} onChange={this.props.addNav}/>);
         })}
         </div>

          {/* <input className='d-block' placeholder='Nav Item' type="text" name="nav1" onChange={this.props.addNav} id="navItem2" />
          <input className='d-block' placeholder='Nav Item' type="text" name="nav2" onChange={this.props.addNav} id="navItem1" />
          <input className='d-block' placeholder='Nav Item' type="text" name="nav3" onChange={this.props.addNav} id="navItem3" /> */}
        


      </div>
    )
  }
}


