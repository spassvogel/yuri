import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoNav from './PhotoNav';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPhoto: ""
		}
		this.selectPhoto = this.selectPhoto.bind(this);
	}

	render() {
		return (
			<div className="app">
					<section className="main">
						<img src={this.state.currentPhoto}/>
					</section>
					<nav className="nav right">
						<PhotoNav photos={this.props.photos} basePath={this.props.photoBasePath} onPhotoClick={this.selectPhoto}/>
					</nav>
			</div>
		);
	}

	selectPhoto(src) {
		//const src = this.props.data.photos[index].thumb
		this.setState({
			currentPhoto: src
		});
	}
}

export default App;
