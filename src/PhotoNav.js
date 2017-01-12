import React, { Component } from 'react';
import './PhotoNav.css';
import shuffle from 'shuffle-array';


class PhotoNav extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.items = shuffle(this.props.images).map(image => <li key={image.thumb}>
			<img src={ this.props.basePath + "/" + image.thumb } alt={"Photo by " + image.author} onClick={this.handleClick}/>
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
