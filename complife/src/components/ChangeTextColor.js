import React, { Component } from 'react';
class ChangeTextColor extends Component {
constructor(props) {
	super(props);

	// Initializing the state
	this.state = { color: 'white' };
}
componentDidMount() {

	// Changing the state after 2 sec
	// from the time when the component
	// is rendered
	setTimeout(() => {
	this.setState({ color: 'orange' });
	}, 4000);
}
render() {
	return (
	<div>
		<p
		style={{
			color: this.state.color,
			backgroundColor: 'rgba(0,0,0,0.88)',
			textAlign: 'center',
			paddingTop: 20,
			width: 400,
			height: 80,
			margin: 'auto'
		}}
		>
		Tamiru Eguale Gebremeskel 
		</p>

	</div>
	);
}
}
export default ChangeTextColor;
