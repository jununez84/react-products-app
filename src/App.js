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
		this.state = {
			showModal: false
		}
	}

	componentDidMount() {
		this.props.fetchProducts()
	}

	onChangeShowModal = () => {
		this.setState({ showModal: !this.state.showModal });
		console.log(this.state.showModal);
	}

	render() {
		return (
			<React.Fragment>
				<div className="App-header">
					<FilterableProductTable showModal={this.state.showModal} onChangeShowModal={this.onChangeShowModal} />
				</div>
			</React.Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
