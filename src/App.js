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
		const instructionText = "Press space to start/stop slideshow";
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
						<div className="text">
							<span>{this.currentImage ? this.currentImageText : instructionText }</span>
						</div>
					</div>
			</div>
		);
	}

	selectImage(id) {
		this.setState({
			currentImage: id
		});
	}

	get currentImage() {
		return this.findImageByID(this.state.currentImage);
	}

	get currentImageSrc() {
		if(this.state.currentImage === ""){
			return null;
		}
		return this.props.imageBasePath + "/" + this.currentImage.thumb;
	}

	get currentImageAuthor() {
		if(this.state.currentImage === ""){
			return null;
		}
		return this.currentImage.author;
	}

	get currentImageText() {
		if(this.state.currentImage === ""){
			return null;
		}
		return this.currentImage.text;
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
