import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import logo from '../logo.svg';
import ProductModal from './ProductModal';
import ProductsTable from './ProductsTable'
import SearchBar from './SearchBar';

const DEFAULT_PRODUCT = {
	category: 'Sporting Goods',
	price: '$0.00',
	name: '',
	stocked: true
}

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
			inStockOnly: false,
			showModal: false,
			product: DEFAULT_PRODUCT,
			productId: undefined
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
						<ProductsTable 
							filterText={this.state.filterText} 
							inStockOnly={this.state.inStockOnly} 
							onUpdateProduct={this.onUpdateProduct}/>
						<Button variant="light" onClick={this.onAddProduct}>ADD PRODUCT</Button>
					</Card.Body>
				</Card>
				<ProductModal 
					product={this.state.product}
					productId={this.state.productId}
					showModal={this.state.showModal} 
					onShowAndHideModal={this.onShowAndHideModal}  />
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

	onAddProduct = () => {
		this.setState({product: DEFAULT_PRODUCT});
		this.setState({showModal: true});
	}

	onUpdateProduct = (product) => {
		this.setState({product: product});
		this.setState({showModal: true});
	}

	onShowAndHideModal = () => {
		this.setState({showModal: !this.state.showModal});
	}
}

export default FilterableProductTable;