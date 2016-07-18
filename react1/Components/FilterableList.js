import React from 'react';

class FilterableList extends React.Component {
	constructor() {
		super();
	    this.state = { 
	    	filterText: '',
	      presidents: [
		  {
		    "id": 1,
		    "nm": "George Washington",
		    "pp": "None, Federalist",
		    "tm": "1789-1797"
		  },
		  {
		    "id": 2,
		    "nm": "John Adams",
		    "pp": "Federalist",
		    "tm": "1797-1801"
		  },
		  {
		    "id": 3,
		    "nm": "Thomas Jefferson",
		    "pp": "Democratic-Republican",
		    "tm": "1801-1809"
		  },
		  {
		    "id": 4,
		    "nm": "James Madison",
		    "pp": "Democratic-Republican",
		    "tm": "1809-1817"
		  },
		  {
		    "id": 5,
		    "nm": "James Monroe",
		    "pp": "Democratic-Republican",
		    "tm": "1817-1825"
		  },
		  {
		    "id": 6,
		    "nm": "John Quincy Adams",
		    "pp": "Democratic-Republican",
		    "tm": "1825-1829"
		  },
		  {
		    "id": 7,
		    "nm": "Andrew Jackson",
		    "pp": "Democrat",
		    "tm": "1829-1837"
		  },
		  {
		    "id": 8,
		    "nm": "Martin van Buren",
		    "pp": "Democrat",
		    "tm": "1837-1841"
		  },
		  {
		    "id": 9,
		    "nm": "William H. Harrison",
		    "pp": "Whig",
		    "tm": "1841"
		  },
		  {
		    "id": 10,
		    "nm": "John Tyler",
		    "pp": "Whig",
		    "tm": "1841-1845"
		  },
		  {
		    "id": 11,
		    "nm": "James K. Polk",
		    "pp": "Democrat",
		    "tm": "1845-1849"
		  },
		  {
		    "id": 12,
		    "nm": "Zachary Taylor",
		    "pp": "Whig",
		    "tm": "1849-1850"
		  },
		  {
		    "id": 13,
		    "nm": "Millard Fillmore",
		    "pp": "Whig",
		    "tm": "1850-1853"
		  },
		  {
		    "id": 14,
		    "nm": "Franklin Pierce",
		    "pp": "Democrat",
		    "tm": "1853-1857"
		  },
		  {
		    "id": 15,
		    "nm": "James Buchanan",
		    "pp": "Democrat",
		    "tm": "1857-1861"
		  },
		  {
		    "id": 16,
		    "nm": "Abraham Lincoln",
		    "pp": "Republican",
		    "tm": "1861-1865"
		  },
		  {
		    "id": 17,
		    "nm": "Andrew Johnson",
		    "pp": "National Union",
		    "tm": "1865-1869"
		  },
		  {
		    "id": 18,
		    "nm": "Ulysses S. Grant",
		    "pp": "Republican",
		    "tm": "1869-1877"
		  },
		  {
		    "id": 19,
		    "nm": "Rutherford Hayes",
		    "pp": "Republican",
		    "tm": "1877-1881"
		  },
		  {
		    "id": 20,
		    "nm": "James Garfield",
		    "pp": "Republican",
		    "tm": "1881"
		  },
		  {
		    "id": 21,
		    "nm": "Chester Arthur",
		    "pp": "Republican",
		    "tm": "1881-1885"
		  },
		  {
		    "id": 22,
		    "nm": "Grover Cleveland",
		    "pp": "Democrat",
		    "tm": "1885-1889"
		  },
		  {
		    "id": 23,
		    "nm": "Benjamin Harrison",
		    "pp": "Republican",
		    "tm": "1889-1893"
		  },
		  {
		    "id": 24,
		    "nm": "Grover Cleveland",
		    "pp": "Democrat",
		    "tm": "1893-1897"
		  },
		  {
		    "id": 25,
		    "nm": "William McKinley",
		    "pp": "Republican",
		    "tm": "1897-1901"
		  },
		  {
		    "id": 26,
		    "nm": "Theodore Roosevelt",
		    "pp": "Republican",
		    "tm": "1901-1909"
		  },
		  {
		    "id": 27,
		    "nm": "William Taft",
		    "pp": "Republican",
		    "tm": "1909-1913"
		  },
		  {
		    "id": 28,
		    "nm": "Woodrow Wilson",
		    "pp": "Democrat",
		    "tm": "1913-1921"
		  },
		  {
		    "id": 29,
		    "nm": "Warren Harding",
		    "pp": "Republican",
		    "tm": "1921-1923"
		  },
		  {
		    "id": 30,
		    "nm": "Calvin Coolidge",
		    "pp": "Republican",
		    "tm": "1923-1929"
		  },
		  {
		    "id": 31,
		    "nm": "Herbert C. Hoover",
		    "pp": "Republican",
		    "tm": "1929-1933"
		  },
		  {
		    "id": 32,
		    "nm": "Franklin Delano Roosevelt",
		    "pp": "Democrat",
		    "tm": "1933-1945"
		  },
		  {
		    "id": 33,
		    "nm": "Harry S Truman",
		    "pp": "Democrat",
		    "tm": "1945-1953"
		  },
		  {
		    "id": 34,
		    "nm": "Dwight David Eisenhower",
		    "pp": "Republican",
		    "tm": "1953-1961"
		  },
		  {
		    "id": 35,
		    "nm": "John Fitzgerald Kennedy",
		    "pp": "Democrat",
		    "tm": "1961-1963"
		  },
		  {
		    "id": 36,
		    "nm": "Lyndon Baines Johnson",
		    "pp": "Democrat",
		    "tm": "1963-1969"
		  },
		  {
		    "id": 37,
		    "nm": "Richard Milhous Nixon",
		    "pp": "Republican",
		    "tm": "1969-1974"
		  },
		  {
		    "id": 38,
		    "nm": "Gerald R. Ford",
		    "pp": "Republican",
		    "tm": "1974-1977"
		  },
		  {
		    "id": 39,
		    "nm": "Jimmy Carter",
		    "pp": "Democrat",
		    "tm": "1977-1981"
		  },
		  {
		    "id": 40,
		    "nm": "Ronald Wilson Reagan",
		    "pp": "Republican",
		    "tm": "1981-1989"
		  },
		  {
		    "id": 41,
		    "nm": "George H. W. Bush",
		    "pp": "Republican",
		    "tm": "1989-1993"
		  },
		  {
		    "id": 42,
		    "nm": "Bill Clinton",
		    "pp": "Democrat",
		    "tm": "1993-2001"
		  },
		  {
		    "id": 43,
		    "nm": "George W. Bush",
		    "pp": "Republican",
		    "tm": "2001-2009"
		  },
		  {
		    "id": 44,
		    "nm": "Barack Obama",
		    "pp": "Democrat",
		    "tm": "2009-"
		  }
			]		
	    }	
	    this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({filterText: e.target.value})
	}	
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<FilterInput txt={this.state.filterText} update={this.update} />
				</div>
				<div className="row">
					<FilterableTable filterText={this.state.filterText} presidents={this.state.presidents} />
				</div>
			</div>
		)
	}
}

class FilterInput extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<form className="form-horizontal">
			  <div className="form-group form-group-sm">
			  	<label className="col-sm-2 control-label" for="FilterInput">Filter: </label>
			    <div className="col-sm-10">
			      	<input type="text" id="FilterInput" className="form-control"
						onChange={this.props.update} val={this.props.txt} />
			    </div>
			  </div>			
		    </form>
		)
	}
}

class FilterableTable extends React.Component {
	constructor() {
		super();
	}	
	render() {
		let presidents = this.props.presidents
			.filter(prez => (
				prez.nm.toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1 || 
				prez.tm.toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1 || 
				prez.pp.toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1))
			.map( president => {
				return <PresidentRow data={president} key={president.id} />
			});

		return (
			<table className="table table-striped">
				<thead>
					<tr>
					<th>&nbsp;</th>
					<th>Name</th>
					<th>Political Party</th>
					<th>Term Years</th>
					</tr>
				</thead>
				<tbody>{presidents}</tbody>	
			</table>
		)
	}
}

const PresidentRow = (props) => {
	return <tr>
		<td>{props.data.id}</td>
		<td>{props.data.nm}</td>
		<td>{props.data.pp}</td>
		<td>{props.data.tm}</td>
	</tr>
}

export default FilterableList