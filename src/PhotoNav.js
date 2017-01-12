import React, { Component } from 'react';


class PhotoNav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const items = this.props.photos.map(photo => <li>
			<img src={ this.props.basePath + "/" + photo.thumb }/>
		</li>);

		return <ul>
			{items}
		</ul>;
	}
}
export default PhotoNav;
