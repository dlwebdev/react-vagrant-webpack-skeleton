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
	componentWillMount() {
		// At this state, our component is ready to go into the dom. 
		// We don't have access to the dom, but we have access to the components state as well as props.
		console.log("Mounting");
		this.setState({m: 2})
	}
	render() {
		console.log("Rendering");
		return <button onClick={this.update}>{this.state.val * this.state.m}</button>
	}
	componentDidMount() {
		// start a method that updates every half a second.
		this.inc = setInterval(this.update, 500); 
		console.log("Component Mounted. Method initialized.");
	}
	componentWillUnmount() {
		console.log("Bye! Unmounted Compontent. Stop any methods running");
		clearInterval(this.inc)
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