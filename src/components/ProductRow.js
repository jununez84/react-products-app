import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class ProductRow extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return(
			<tr>
				<td><Form.Check></Form.Check></td>
				<td>{this.props.name}</td>
				<td>{this.props.price}</td>
			</tr>
		)
	}
}

export default ProductRow;