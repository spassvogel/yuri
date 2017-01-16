import React, { Component } from 'react';
import './App.css';
import ImageNav from './ImageNav';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentImage: "",
			playing: false
		}

		for (var image of this.props.images){
			// image id defaults to the thumb, if not set
			image.id = image.id || image.thumb;
		}

		this.selectImage = this.selectImage.bind(this);
		this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
	}

	render() {
		const instructionText = "Press space to start/stop slideshow";
		return (
			<div className="app">
					<section className="main">
					</section>
					<nav className="nav right">
						<ImageNav
							ref="imageNav" 
							images={this.props.images}
							basePath={this.props.imageBasePath}
							onImageClick={this.selectImage}
							selectedImage={this.state.currentImage}
						/>
					</nav>

					<div className="content">
						{ this.currentImage && <img src={this.currentImageSrc} alt="1{{this.currentImageAuthor}}"/> }
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

	componentDidUpdate(prevProps, prevState) {
		if(/*!prevState.playing && */this.state.playing){
			window.clearInterval(this.intervalId);
			this.intervalId = window.setInterval(() => {
				this.refs.imageNav.selectNext();
			}, this.props.slideshowDuration);
		}
		else if (!this.state.playing){
      		window.clearInterval(this.intervalId);			
		}
	}

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyboardInput);
    }

	componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyboardInput);

		if (this.intervalId) {
      		window.clearInterval(this.intervalId);
      		this.intervalId = null;
    	}
    }

	handleKeyboardInput(e) {
		if(this.props.keymap[e.code]){

			this[this.props.keymap[e.code]]();

			e.preventDefault();
		}
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

	/** 
	 * Toggles between playing and paused	*/
	playPause() {
		this.setState({
			playing: !this.state.playing
		});
	}

	/** 
	* Selects the next image */
	next() {
		if(this.currentImage){
			this.refs.imageNav.selectNext();
		}
	}

	/** 
	* Selects the previous image */
	previous() {
		if(this.currentImage){
			this.refs.imageNav.selectPrevious();
		}
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

App.propTypes = {
  images: React.PropTypes.array,
  imageBasePath: React.PropTypes.string,
  slideshowDuration: React.PropTypes.number,
  keymap: React.PropTypes.object
};

App.defaultProps = {
	slideshowDuration: 5000,
	keymap: {
	// key code :  function name
		"Space": "playPause",
		"ArrowDown": "next",
		"ArrowUp": "previous"
	}
};
