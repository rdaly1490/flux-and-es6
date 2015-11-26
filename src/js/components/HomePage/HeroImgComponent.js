import React from 'react';

export default class HeroImgComponent extends React.Component {
	handleClick() {
		console.log('Hero btns work');
	}
	render() {
		let heroImg = `../src/img/${this.props.heroImg}`;
		return (
			<div className="col-xs-12 hero-img">
				<img className="col-xs-12" src={heroImg} />
				<div>
					<button onClick={this.handleClick.bind(this)} className="col-xs-2 btn submit-btn join">Join</button>
					<button onClick={this.handleClick.bind(this)} className="col-xs-2 btn submit-btn sign-in">Sign In</button>
				</div>
			</div>
		);
	}
}