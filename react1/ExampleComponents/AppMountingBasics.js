import React from 'react';
import ReactDOM from 'react-dom';

// CONCEPTS HERE
// Mounting lifecycle stages of a react component
// When a component is added or removed from the dom it is called "Mounting" and "Unmounting" the components


class App extends React.Component {
	constructor() {
		super();
		this.state = { val: 0 };
		this.update = this.update.bind(this);
	}
	update() {
		this.setState({val: this.state.val + 1});
	}
	// Component is fully prepped and guaruanteed to make it into the dom
	componentWillMount() {
		console.log("Mounting");
	}
	render() {
		console.log("Rendering");
		return <button onClick={this.update}>{this.state.val}</button>
	}
	componentDidMount() {
		console.log("Component Mounted.");
	}
	componentWillUnmount() {
		console.log("Bye! Unmounted Compontent.");
	}
}

class Wrapper extends React.Component {
	constructor() {
		super();
	}	
	mount(){
		ReactDOM.render(
			<App />, 
			document.getElementById('a')
		);
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}
	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="a"></div>
			</div>
		)
	}
}

ReactDOM.render(
	<Wrapper />, 
	document.getElementById('app')
);

export default Wrapper