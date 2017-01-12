import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoNav from './PhotoNav';

class App extends Component {
	render() {
		var data = {
			photoBasePath: "resources/photos/",
			photos: [{
				thumb: "Diana%20Trejos%20Herrera/IMG_7776.JPG"
			}, {
				thumb: "Diana%20Trejos%20Herrera/IMG_7776.JPG"
			}]
		}
		return (
			<div className="App">
	        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
		<nav className="nav">
			<PhotoNav photos={data.photos} basePath={data.photoBasePath} />
		</nav>
      </div>
    );
  }
}

export default App;
