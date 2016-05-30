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
	}
	update(e) {
		this.setState({txt: e.target.value})
	}
	render() {
		return (
			<div>
				<h1>{this.state.txt}</h1>
				<input type="text" 
					onChange={this.update.bind(this)} />
			</div>
		)
	}
}

// Stateless function component will not have state
// const App = () => <h1>Hello Eggheads</h1>

// Props are meant to be passed into our component as static values or methods.
// State is a collection of values that's' meant to be managed by our component itself

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);

export default App