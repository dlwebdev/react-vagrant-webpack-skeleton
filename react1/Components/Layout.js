import React from 'react';
import FilterableList from './FilterableList';

class Layout extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<h1 className="text-primary text-center">Filterable Presidential List</h1>
				<h3 className="text-center">(Utilizes: Bootstrap/React/Webpack)</h3>
				<br />
				<FilterableList />
			</div>
		)
	}
}

export default Layout