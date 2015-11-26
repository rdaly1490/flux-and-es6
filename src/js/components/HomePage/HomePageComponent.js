import React from 'react';
import AppStore from '../../stores/app-store';
import AppActions from '../../actions/app-actions';

import HeroImgComponent from './HeroImgComponent';
import InfoAboutSiteComponent from './InfoAboutSiteComponent';
import NavbarComponent from '../HeaderFooter/NavbarComponent';
import FooterComponent from '../HeaderFooter/FooterComponent';

import HomeObject from '../../HelperObjects/HomeObject';

const getTestState = () => {
	return {test: AppStore.getTestValue()}
}

export default class HomePageComponent extends React.Component {
  constructor(props){
	super(props);
	this.state = getTestState();
  }
  componentDidMount() {
  	AppStore.addChangeListener(this._onChange.bind(this));
  }
  componentWillUnmount() {
  	AppStore.removeChangeListener(this._onChange.bind(this));
  }
  _onChange() {
  	this.setState(getTestState());
  }
  render(){
	let testState = this.state.test;
	return (
	  <div className="container-fluid home-wrapper">
	  	<NavbarComponent />
	  	<HeroImgComponent heroImg={HomeObject.hero_img}/>
	  	<InfoAboutSiteComponent content={HomeObject.content}/>
      <FooterComponent />
	  </div>
	)
  }
}
// export default HomePageComponent;