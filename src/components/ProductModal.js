import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {addProduct, updateProduct} from '../redux/ActionCreators';
import { connect } from 'react-redux';

const DEFAULT_PRODUCT = {
	category: 'Sporting Goods',
	price: '$0.00',
	name: '',
	stocked: true
}
class ProductModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: DEFAULT_PRODUCT
		 };
	}

	setProduct = (product) => {
		this.setState({
			product: {
				category: product.category,
				price: product.price,
				name: product.name,
				stocked: product.stocked,
				id: product.id
			}
		});
	}

	componentDidUpdate(prevProps) {
		if(prevProps.product !== this.props.product) {
			this.setProduct(this.props.product);
		}
	}

	render() {
		return (
			<Modal show={this.props.showModal} onHide={this.props.onShowAndHideModal}>
				<Modal.Header closeButton>
					<Modal.Title>ADD PRODUCT</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form.Group>
						<Form.Control as="select" 
							value={this.state.product.category}
							onChange={this.handleChangeCategory}>
							<option value="Sporting Goods">Sporting Goods</option>
							<option value="Electronics">Electronics</option>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control type="input" 
							value={this.state.product.name}
							onChange={this.handleChangeName}>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Price</Form.Label>
						<Form.Control type="currency" 
							value={this.state.product.price}
							onChange={this.handleChangePrice}>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Check 
							checked={this.state.product.stocked}
							onChange={this.handleChangeStocked}
							type="checkbox"
							label="Stocked">
						</Form.Check>
					</Form.Group>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={this.props.onShowAndHideModal}>Close</Button>
					<Button variant="primary" onClick={this.save}>Save changes</Button>
				</Modal.Footer>
			</Modal>
		)
	}

	handleChangeCategory = (e) => {
		const product = this.state.product;
		product.category = e.target.value;
		this.setState({product: product});
	}

	handleChangeName = (e) => {
		const product = this.state.product;
		product.name = e.target.value;
		this.setState({product: product});
	}

	handleChangePrice = (e) => {
		const product = this.state.product;
		product.price = e.target.value;
		this.setState({product: product});
	}

	handleChangeStocked = () => {
		const product = this.state.product;
		product.stocked = !this.state.product.stocked;
		this.setState({product: product});
	}

	save = () => {
		if(this.state.product.id === undefined)
			this.props.dispatch(addProduct(this.state.product));
		else
			this.props.dispatch(updateProduct(this.state.product.id, this.state.product));
		this.clear();
	}

	clear() {
		this.setState({
			product: DEFAULT_PRODUCT,
			productId: undefined
		});
		this.props.onShowAndHideModal();
	}

}

export default connect()(ProductModal);