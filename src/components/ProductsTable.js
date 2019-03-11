import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

import ProductRow from './ProductRow';

const tableStyle = {
    minWidth: 500
}

const ProductsRow = [
	<ProductRow name="Football" price="$49.99"/>, 
	<ProductRow name="Baseball" price="$9.99" />
]


class ProductsTable extends Component {
	render() {
		return (
			<Table style={tableStyle}>
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{ProductsRow}
				</tbody>
			</Table>
		)
	}
}

export default ProductsTable;