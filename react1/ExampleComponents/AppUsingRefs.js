import React from 'react';
import ReactDOM from 'react-dom';

// Class Compontent can have state.

class App extends React.Component {
	constructor() {
		super();
		this.state = { 
			red: 0,
			green: 0,
			blue: 0
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value, 
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
	}	
	render() {
		return (
			<div>
				<Slider ref="red" update={this.update} />
				{this.state.red}
				<Slider ref="green" update={this.update} />
				{this.state.green}
				<Slider ref="blue" update={this.update} />
				{this.state.blue}			
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
			<div>
				<input ref="inp" type="range"
					min="0"
					max="255"
					onChange={this.props.update} /> 
				<br />
			</div>
		);		
	}
}


ReactDOM.render(
	<App />, 
	document.getElementById('app')
);

export default App