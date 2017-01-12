import React, { Component } from 'react';
import './PhotoNav.css';
import shuffle from 'shuffle-array';

class PhotoNav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const items = shuffle(this.props.photos).map(photo => <li key={photo.thumb}>
			<img src={ this.props.basePath + "/" + photo.thumb } alt={"Photo by " + photo.author }/>
		</li>);

		return <ul className="photo-nav">
			{items}
		</ul>;
	}
}
export default PhotoNav;
