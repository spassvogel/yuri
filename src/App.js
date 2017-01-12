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
		this.selectImage = this.selectImage.bind(this);
	}

	render() {
		
		return (
			<div className="app">
					<section className="main">
						<img src={this.state.currentImage}/>
					</section>
					<nav className="nav right">
						<ImageNav images={this.props.imagess} 
							basePath={this.props.imageBasePath} 
							onImageClick={this.selectImage}
							selectedImage={this.state.currentImage}
						/>
					</nav>
			</div>
		);
	}

	selectImage(src) {
		this.setState({
			currentImage: src
		});
	}
}

export default App;
