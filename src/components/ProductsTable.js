import React, { Component } from 'react';
import _ from 'lodash';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const tableStyle = {
	minWidth: 500
}

const mapStateToProps = state => {
	return {
		productsRes: state.products,
	}
}

class ProductsTable extends Component {
	constructor(props) {
		super(props);
	}

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
					{this.renderProductRows()}
				</tbody>
			</Table>
		)
	}

	renderProductRows = () => {
		const productsByCategory = _.groupBy(this.props.productsRes.products, 'category')

		return _.reduce(productsByCategory, (accumulator, group, key, coll) => {
			const categoryAcc = [...accumulator, <ProductCategoryRow key={key} category={key} />]
			return this.addProductsGroup(group, categoryAcc)
		}, [])
	}

	addProductsGroup = (productsGroup, categoryAccumulator) => {
		return _.reduce(productsGroup, (acc, product, index) => {
			if (this.shouldBeExcluded(product)) return acc
			return [...acc,
			<ProductRow
				key={`${index}_${product.name}`}
				product={product}
				onUpdateProduct={this.props.onUpdateProduct}/>
			]
		}, categoryAccumulator)
	}

	shouldBeExcluded = (product) => {
		const { filterText, inStockOnly } = this.props;

		return (
			_.toLower(product.name).indexOf(_.toLower(filterText)) === -1 ||
			inStockOnly && !product.stocked
		)
	}
}

export default connect(mapStateToProps)(ProductsTable);