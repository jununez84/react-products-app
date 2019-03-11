import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class ProductModal extends Component {
	constructor(props){
		super(props);
		console.log("Modal", props);
	}
	render() {
		return(
			<Modal show={this.props.showModal} onHide={this.props.onChangeShowModal}>
				<Modal.Header closeButton>
					<Modal.Title>ADD PRODUCT</Modal.Title>
				</Modal.Header>
				
				<Modal.Body>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control type="input"></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Price</Form.Label>
						<Form.Control type="currency"></Form.Control>
					</Form.Group>
				</Modal.Body>
				
				<Modal.Footer>
					<Button variant="secondary" onClick={this.props.onChangeShowModal}>Close</Button>
					<Button variant="primary">Save changes</Button>
				</Modal.Footer>
			</Modal>
		)
	}
}

export default ProductModal;