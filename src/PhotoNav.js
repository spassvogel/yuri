import React, { Component } from 'react';
import './PhotoNav.css';
import shuffle from 'shuffle-array';

class PhotoNav extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.items = shuffle(this.props.photos).map(photo => <li key={photo.thumb}>
			<img src={ this.props.basePath + "/" + photo.thumb } alt={"Photo by " + photo.author} onClick={this.handleClick}/>
		</li>);
	}

	render() {
		return <ul className="photo-nav">
			{this.items}
		</ul>;
	}

	handleClick(e) {
		if(typeof this.props.onPhotoClick === 'function'){
			this.props.onPhotoClick(e.target.src);
		}
	}
}
export default PhotoNav;
