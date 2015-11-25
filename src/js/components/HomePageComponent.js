
import React from 'react';
import AppStore from '../stores/app-store';
import AppActions from '../actions/app-actions';

const getTestState = () => {
	return {test: AppStore.getTestValue()}
}

class HomePageComponent extends React.Component {
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
  clickTest(booleanValue) {
	var that = this;
	return function(e) {
		e.preventDefault();
		AppActions.testAction(!booleanValue);
	}
  }
  render(){
	let testState = this.state.test;
	console.log('component rendered');
	return (
	  <div className="container">
		<h1> Testing Flux </h1>
		<h2> Value from store is: {testState.toString()} </h2>
		<h4> Change the boolean by clicking below </h4>
		<button onClick={this.clickTest(testState)}>Click Me!</button>
	  </div>
	)
  }
}
export default HomePageComponent;