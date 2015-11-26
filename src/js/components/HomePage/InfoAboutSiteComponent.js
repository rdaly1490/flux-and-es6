import React from 'react';
import InfoBoxComponent from './InfoBoxComponent';

export default class InfoAboutSiteComponent extends React.Component {
	render() {
		return (
			<div className="container-fluid info-wrapper">
				<InfoBoxComponent content={this.props.content}/>
			</div>
		);
	}
}