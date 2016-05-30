import React from 'react';
import ReactDOM from 'react-dom';

// CONCEPTS HERE
// Mounting lifecycle stages of a react component
// When a component is added or removed from the dom it is called "Mounting" and "Unmounting" the components


class App extends React.Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.state = { increasing: false };
	}
	update() {
		ReactDOM.render(
			<App val={this.props.val + 1} />, 
			document.getElementById('app')
		);
	}	
	componentWillReceiveProps(nextProps) {
		this.setState({increasing: nextProps.val > this.props.val})
	}
	shouldComponentUpdate(nextProps, nextState) {
		// In this example, if it is a multiple of 5 we will update
		return nextProps.val % 5 === 0;
	}
	render() {
		console.log(this.state.increasing)
		return (
			<button className="btn btn-default" onClick={this.update}>
				{this.props.val}
			</button>
		)
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps', prevProps);
	}
}

App.defaultProps = { val: 0 }

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);

export default App