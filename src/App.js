import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import { fetchProducts } from './redux/ActionCreators';


const mapStateToProps = state => {
	return {
		products: state.products
	}
}

const mapDispatchToProps = dispatch => ({
	fetchProducts: () => dispatch(fetchProducts)
})

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchProducts()
	}

	render() {
		return (
			<React.Fragment>
				<div className="App-header">
					<FilterableProductTable />
				</div>
			</React.Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
