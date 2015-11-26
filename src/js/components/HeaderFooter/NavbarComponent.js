import React from 'react';

export default class NavbarComponent extends React.Component {
	handleClick() {
		console.log('Nav button clicked');
	}
	render() {
		return (
			<div className="container-fluid navbar-wrapper">
				<div className="col-xs-2" onClick={this.handleClick.bind(this)}>
					<div>Join!</div>
				</div>
				<div className="col-xs-2" onClick={this.handleClick.bind(this)}>
					<div>Sign In</div>
				</div>
			</div>
		);
	}
}