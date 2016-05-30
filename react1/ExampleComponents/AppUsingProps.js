import React from 'react';
import ReactDOM from 'react-dom';

// Class Compontent can have state.

class App extends React.Component {
	render() {
		let txt = this.props.txt;
		let cat = this.props.cat;
		return <h1>{txt} - {cat}</h1>
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'this is default txt',
	cat: 0
}

// Stateless function component will not have state
// const App = () => <h1>Hello Eggheads</h1>

// Props are meant to be passed into our component as static values or methods.
// State is a collection of values that's' meant to be managed by our component itself

ReactDOM.render(
	<App txt="This is the props value" />, 
	document.getElementById('app')
);

export default App