import React, { Component } from 'react';
import './ImageNav.css';
import shuffle from 'shuffle-array';
import scrollToElement from 'scroll-to-element';

class ImageNav extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.items = shuffle(this.props.images);
	}

	render() {
		return <ul className="image-nav">
			{ this.items.map(image => <li key={image.id}>
				<img
					src={ this.props.basePath + "/" + image.thumb }
					data-id={image.id}
					className={ this.props.selectedImage === image.id ? "selected" : "" }
					alt={"Image by " + image.author}
					onClick={this.handleClick}
				/>
			</li>)}
		</ul>;
	}

	handleClick(e) {
		if(typeof this.props.onImageClick === 'function'){
			const id = e.target.getAttribute("data-id");
			this.props.onImageClick(id);
			scrollToElement(e.target, {
				align: "middle"
			})
		}
	}

	selectImage(src) {
	}
}
export default ImageNav;