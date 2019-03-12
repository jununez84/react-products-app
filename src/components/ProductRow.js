import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const StyledRow = styled.tr`
	cursor: pointer;
	&:hover {
		background-color: #d1c8f8;
	}
`

class ProductRow extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return(
			<StyledRow onClick={()=> this.props.onUpdateProduct(this.props.product)}>
				<td>{this.props.product.id}</td>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.price}</td>
			</StyledRow>
		)
	}
}

export default ProductRow;