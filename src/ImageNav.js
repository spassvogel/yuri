import React, { Component } from 'react';
import './ImageNav.css';
import shuffle from 'shuffle-array';
import scrollToElement from 'scroll-to-element';

class ImageNav extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		let i = 0;
		this.items = shuffle(this.props.images).map(image => <li key={image.thumb}>
		<img src={ this.props.basePath + "/" + image.thumb } className={"img" + i++} alt={"Image by " + image.author} onClick={this.handleClick}/>
		</li>);
	}

	render() {
		return <ul className="image-nav"><li>{this.props.selectedImage}</li>
			{this.items}
		</ul>;
	}

	handleClick(e) {
		if(typeof this.props.onImageClick === 'function'){
			const src = e.target.src;
			this.props.onImageClick(src);
			scrollToElement(e.target, {
				align: "middle"
			})
			//this.selectImage(src);
		}
	}

	selectImage(src) {
		//scrollToElement(".photo-nav .img2");
		// scrollToElement(".photo-nav img[src=\"" + src + "\"]");

	}
}
export default ImageNav;
