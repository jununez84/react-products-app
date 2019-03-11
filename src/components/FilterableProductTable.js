import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import logo from '../logo.svg';
import ProductModal from './ProductModal';
import ProductsTable from './ProductsTable'
import SearchBar from './SearchBar';

const showState = false;

const cardStyle = {
	minWidth: 550,
	borderRadius: 20,
	backgroundColor: '#eae5fd',
	margin: 'auto',
	maxWidth: '600px'
}

const titleStyle = {
	color: '#585373',
	fontSize: '40px'
}

class FilterableProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		}
	}

	render() {
		return (
			<div>
				<Card style={cardStyle}>
					<Card.Body>
						<div style={{ height: '100px', display: 'flex', alignItems: 'center' }}>
							<img src={logo} className="App-logo" alt="logo" />
							<Card.Title style={titleStyle}><i>SEARCHABLE PRODUCT TABLE</i></Card.Title>
						</div>
						<SearchBar
							filterText={this.state.filterText}
							inStockOnly={this.state.inStockOnly}
							onFilterTextChange={this.handleFilterTextChange}
							onInStockOnlyChange={this.handleInStockChange} />
						<ProductsTable filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
						<Button variant="light" onClick={this.props.onChangeShowModal}>ADD PRODUCT</Button>
					</Card.Body>
				</Card>
				<ProductModal showModal={this.props.showModal} onChangeShowModal={this.props.onChangeShowModal} />
			</div>
		)
	}

	handleFilterTextChange = (e) => {
		this.setState({ filterText: e.target.value });
	}

	handleInStockChange = () => {
		this.setState({
			inStockOnly: !this.state.inStockOnly
		});
	}
}

export default FilterableProductTable;