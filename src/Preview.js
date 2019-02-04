import React ,{Component} from "react";
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import PageSection from './components/Page section/PageSection';
import Testimonials from './components/Testimonials/Testimonials';


export default class Preview extends Component {
 
  render() {
    return (
    <div>
      <Navbar newState={this.props.data}  />
      <Banner newHead={this.props.bannerHead}/>
      <PageSection psHead={this.props.data}/>
      <Testimonials para={this.props.data}/>
    </div>
    )
  }
}




