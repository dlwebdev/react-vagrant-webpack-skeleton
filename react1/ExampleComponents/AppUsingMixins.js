import React from 'react';
import ReactDOM from 'react-dom';

// CONCEPTS HERE
// Higher Order Components

// Give this exact same functionality to more than one component

// **** The ButtonMixin and LabelMixin both have the exact same state and functionality and they get to implement it as they see fit
//        Button implements with onClick and Label implements with onMouseMove

let Mixin = InnerComponent => class extends React.Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.state = { val: 0 };
	}
	update() {
		this.setState({val: this.state.val + 1})
	}	
	componentWillMount() {
		console.log("Will Mount");
	}	
	render() {
		return (
			<InnerComponent 
			update={this.update} 
			{...this.state}
			{...this.props} />
		);
	}
	componentDidMount() {
		console.log("Mounted");
	}	
}

const Button = (props) => <button 
							className="btn btn-default" 
							onClick={props.update}>
								{props.txt} - {props.val}
						  </button>

const Label = (props) => <label 
							className="btn btn-default" 
							onMouseMove={props.update}>
								{props.txt} - {props.val}
						  </label>						  

let ButtonMixed = Mixin(Button)						  
let LabelMixed = Mixin(Label)						  

class App extends React.Component {
	render() {
		return (
			<div>
				<ButtonMixed txt="Button" />
				<LabelMixed txt="Label" />
			</div>
		)
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);

export default App