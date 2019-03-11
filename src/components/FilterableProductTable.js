import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import logo from '../logo.svg';
import ProductModal from './ProductModal';
import ProductsTable from './ProductsTable'
import SearchBar from './SearchBar';

var showState = false;

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

const FilterableProductTable = props => {
	console.log("my props", props);
	return (
		<div>
			<Card style={cardStyle}>
				<Card.Body>
					<div style={{height: '100px', display: 'flex', alignItems: 'center'}}>
						<img src={logo} className="App-logo" alt="logo" />
						<Card.Title style={titleStyle}><i>SEARCHABLE PRODUCT TABLE</i></Card.Title>
					</div>
					<SearchBar />
					<ProductsTable />
					<Button variant="light" onClick={props.onChangeShowModal}>ADD PRODUCT</Button>
				</Card.Body>
			</Card>
			<ProductModal showModal={props.showModal} onChangeShowModal={props.onChangeShowModal} />
		</div>
	)
}

export default FilterableProductTable;