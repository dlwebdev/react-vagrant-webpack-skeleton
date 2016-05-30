import React from 'react';
import ReactDOM from 'react-dom';

// Class Compontent can have state.

class App extends React.Component {
	constructor() {
		super();
		this.state = { 
			txt: 'this is the state txt',
			cat: 0
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({txt: e.target.value})
	}	
	render() {
		return (
			<div>
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
			</div>
		)
	}
}

// Stateless function component will not have state
// const App = () => <h1>Hello Eggheads</h1>

// Props are meant to be passed into our component as static values or methods.
// State is a collection of values that's' meant to be managed by our component itself

// When one component renders another component this is referred to as the "Owner Ownee Relationship", where the parent 
//    component is also called a composite component

// Refs are a way to reference an instance of a component from within our react application. Refs won't work with stateless components!


class Slider extends React.Component {
	render() {
		return (
			<input type="range"
				min="0"
				max="255"
				onChange={this.props.update} />
		);		
	}
}


const Widget = (props) => {
	return (
		<div>
			<h1>{props.txt}</h1>
			<input type="text" 
				onChange={props.update} />
		</div>
	);
}


ReactDOM.render(
	<App />, 
	document.getElementById('app')
);

export default App