import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PageSection from './PageSection';
import Banner from './Banner';
import Testimonials from './Testimonials';

export default class Dashboard extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     activeTab: '1'
  //   };
  // }
  state = {
    activeTab: '1'
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }




  render() {
    return (
      <div  >
        <Nav tabs className="h5 text-primary container-fluid">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' }) }
              onClick={() => { this.toggle('1'); }}
            >
              Navbar 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Banner
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Page Section
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Testimonial
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className='container-fluid' activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div>
                  {this.props.navInputs.map((item, i) => {
                    return (<input  className='d-block' placeholder={this.props.navInputs[i]} type="text" key={'n' + i + 1} name={"n" + (i + 1)} onChange={this.props.addNav} />);
                  })}
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Banner addBannerHeading={this.props.addBannerH.bind(this)} />
                {console.log(this.props.addBannerH)}
              </Col>

            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
              <PageSection addPSHeading={this.props.addPSH}/>

              </Col>

            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
              <Testimonials addTestPara={this.props.addTestP}/>

              </Col>

            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}