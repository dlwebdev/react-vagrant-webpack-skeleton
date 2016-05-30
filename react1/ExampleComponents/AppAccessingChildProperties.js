import React from 'react';
import ReactDOM from 'react-dom';

// Class Compontent can have state.

class App extends React.Component {
	render() {
		return <Button>I <Heart/> React</Button>
	}
}

// When we want to access the InnerHTML or nested components of another component we can use this.props.children
//   similar to angulars transclusion (replaces element)

class Button extends React.Component {
	render() {
		return <button className="btn btn-primary">{this.props.children}</button>
	}
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);

export default App