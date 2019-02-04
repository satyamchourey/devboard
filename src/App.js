import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Preview from './Preview';

class App extends Component {


  state = {
    n1: "Home",
    n2: "About",
    n3: "Contact",
    bannerHeading:"Hello World",
    psHead:"Page Section Heading",
    testPara:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
  };
  

  navText = ["nav1", 'nav2', 'nav3'];

  addLinks = (e) => {
    this.setState({
      [e.target.getAttribute('name')]: e.target.value
    });
    ;
  }
  addTestimonial = (e) => {
    this.setState({
      psHead: e.target.value
    });
    ;
  }

  addPageSectionHeading = (e) => {
    this.setState({
      testPara: e.target.value
    });
    ;
  }
  addBannerHead = (e) => {
    console.log(e.target.value)

  this.setState({
      bannerHeading: e.target.value
    });
  
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <div className='text-center '>
          <span className='m-3'><Link to='/' >Preview </Link></span>



          <span className='m-3'><Link to='/dashboard' >Dashboard  </Link></span>

        </div>
        <Switch>
          <Route exact path='/' render={() => {
            return (<Preview data={this.state} bannerHead={this.state.bannerHeading}/>)
          }} />
          <Route exact path='/dashboard' render={() => {
            return (<Dashboard addPSH={this.addPageSectionHeading} addTestP={this.addTestimonial} addBannerH={this.addBannerHead} navInputs={this.navText} addNav={this.addLinks} bannerHead={this.state.bannerHeading}/>)
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
