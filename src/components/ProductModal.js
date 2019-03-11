import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {addProduct} from '../redux/ActionCreators';
import { connect } from 'react-redux';

class ProductModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: 'Sporting Goods',
			price: '$0.00',
			name: '',
			stocked: true
		}
	}

	render() {
		return (
			<Modal show={this.props.showModal} onHide={this.props.onChangeShowModal}>
				<Modal.Header closeButton>
					<Modal.Title>ADD PRODUCT</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form.Group>
						<Form.Control as="select" 
							value={this.state.category}
							onChange={this.handleChangeCategory}>
							<option value="Sporting Goods">Sporting Goods</option>
							<option value="Electronics">Electronics</option>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control type="input" 
							value={this.state.name}
							onChange={this.handleChangeName}>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Price</Form.Label>
						<Form.Control type="currency" 
							value={this.state.price}
							onChange={this.handleChangePrice}>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Check 
							checked={this.state.stocked}
							onChange={this.handleChangeStocked}
							type="checkbox"
							label="Stocked">
						</Form.Check>
					</Form.Group>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={this.props.onChangeShowModal}>Close</Button>
					<Button variant="primary" onClick={this.save}>Save changes</Button>
				</Modal.Footer>
			</Modal>
		)
	}

	handleChangeCategory = (e) => {
		this.setState({category: e.target.value});
	}

	handleChangeName = (e) => {
		this.setState({name: e.target.value});
	}

	handleChangePrice = (e) => {
		this.setState({price: e.target.value});
	}

	handleChangeStocked = () => {
		this.setState({stocked: !this.state.stocked});
	}

	save = () => {
		const product = {
			category: this.state.category,
			price: this.state.price,
			name: this.state.name,
			stocked: this.state.stocked
		}
		this.props.dispatch(addProduct(product))
		this.clear();
	}

	clear() {
		this.setState({
			category: 'Sporting Goods',
			price: '$0.00',
			name: '',
			stocked: true
		});
		this.props.onChangeShowModal();
	}
}

export default connect()(ProductModal);