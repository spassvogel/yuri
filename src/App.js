import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageNav from './ImageNav';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentImage: ""
		}

		for (var image of this.props.images){
			// image id defaults to the thumb, if not set
			image.id = image.id || image.thumb;
		}

		this.selectImage = this.selectImage.bind(this);
	}

	render() {

		return (
			<div className="app">
					<section className="main">
					</section>
					<nav className="nav right">
						<ImageNav images={this.props.images}
							basePath={this.props.imageBasePath}
							onImageClick={this.selectImage}
							selectedImage={this.state.currentImage}
						/>
					</nav>

					<div className="content">
						<img src={this.currentImageSrc}/>
						<h1 className="author">{this.currentImageAuthor}</h1>
						<p className="text">{this.currentImageText}</p>
					</div>
			</div>
		);
	}

	selectImage(id) {
		this.setState({
			currentImage: id
		});
	}

	get currentImageSrc() {
		if(this.state.currentImage === ""){
			return null;
		}
		return this.props.imageBasePath + "/" + this.findImageByID(this.state.currentImage).thumb;
	}

	get currentImageAuthor() {
		if(this.state.currentImage === ""){
			return null;
		}
		return this.findImageByID(this.state.currentImage).author;
	}

	get currentImageText() {
		if(this.state.currentImage === ""){
			return null;
		}
		return this.findImageByID(this.state.currentImage).text;
	}

	findImageByID(id) {
		for (var image of this.props.images){
			if(image.id === id){
				return image;
			}
		}
	}
}

export default App;
