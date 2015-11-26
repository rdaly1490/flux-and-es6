import React from 'react';

export default class InfoBoxComponent extends React.Component {
	render() {
		let mappedContent = this.props.content.map(function(item, index) {
			// let sectionTitle = item.section.charAt(0).toUpperCase() + item.section.substr(1);
			let iconSrc = `../src/img/${item.icon}`;
			let bulletPoints = item.bullets.map(function(bulletPt, index) {
				return (
					<li key={index}>{bulletPt}</li>
				);
			});
			return (
				<div key={index} className="col-xs-12 info-box">
					<div className="icon">
						<img src={iconSrc} />
					</div>
					<h3>{item.section}</h3>
					<div className="bullet-points">
						<ul>
							{bulletPoints}
						</ul>
					</div>
				</div>			
			);
		});

		return (
			<div className="col-xs-offset-2 col-xs-8">
				{mappedContent}
			</div>
		);
	}
}
