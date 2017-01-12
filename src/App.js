import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoNav from './PhotoNav';

class App extends Component {
	render() {
		var data = {
			photoBasePath: "resources/photos/",
			photos: [{
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7776.JPG"
			}, {
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7777.JPG"
			}, {
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7780.JPG"
			}, {
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7781.JPG"
			}, {
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7784.JPG"
			}, {
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7786.JPG"
			}, {
				author: "Diana Trejos Herrera",
				thumb: "diana/IMG_7787.JPG"
			}, {
				author: "Derek & Gisele",
				thumb: "derek/Gisele Segura Gelink - Daan, Andrew, Sjaak Peter, Joost Derek, Jeroen, Jur - Bruiloft Giselle en Derek 26082015.jpg",
				text: "Daan, Andrew, Sjaak Peter, Joost Derek, Jeroen, Jur - Bruiloft Giselle en Derek"
			}, {
				author: "Elise le Nobel",
				thumb: "elise/Elise le Nobel - 20161120_131457.jpg"
			}, {
				author: "Elise le Nobel",
				thumb: "elise/Elise le Nobel - 20161122_192817.jpg",
				text: "Toen wij jong waren, tijdens de communie van mijn zusje Lianne (zij zit op de achtergrond). Links zit Juriaan, in het midden zit ik en rechts onze andere neef Mark. Onze oma kijkt van bovenaf toe wat zich op de bank afspeelt."
			}, {
				author: "Elise le Nobel",
				thumb: "elise/Elise le Nobel - IMG_0502.JPG",
				text: "Het 25-jarig huwelijksfeest van mijn ouders, 8 jaar geleden. Juriaan zit rechts. "
			}, {
				author: "Elise le Nobel",
				thumb: "elise/Elise le Nobel - IMG_6299.JPG",
				text: "Tijdens een Kerstbrunch met de familie 2 jaar geleden, waar we voor het eerst sinds lange tijd eindelijk weer eens bijna allemaal bij elkaar waren."
			}, {
				author: "Fleur Augustinus",
				thumb: "fleur/31241_429701871254_2516076_n.jpg",
				text: "31 mei 2010 gekraakte Asta\nJuri + wouter\nA long long time ago.... Speedy Contest - Jur won natuurlijk altijd. #NoBeard #memories"
			}, {
				author: "Hanneke Immink",
				thumb: "hanneke/IMG-20161121-WA0009.jpg",
				text: "Genomen door Hanneke tijdens het roeien in het voorjaar van 2016. "
			}, {
				author: "Hanneke Immink",
				thumb: "hanneke/IMG-20161121-WA0010.jpg",
				text: "Genomen door Hanneke tijdens het roeien in het voorjaar van 2016. "
			}, {
				author: "Hanneke Immink",
				thumb: "hanneke/IMG-20161121-WA0012.jpg",
				text: "Genomen door Hanneke tijdens het roeien in het voorjaar van 2016. "
			}]
		}
		return (
			<div className="app">
					<nav className="nav right">
						<PhotoNav photos={data.photos} basePath={data.photoBasePath} />
					</nav>
			</div>
    );
  }
}

export default App;
