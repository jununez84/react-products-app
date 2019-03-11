import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			showModal: false
		}
	}
	
	onChangeShowModal = () => {
		this.setState({showModal: !this.state.showModal});
		console.log(this.state.showModal);
	}
	
	render() {
		return (
		<React.Fragment>
			<FilterableProductTable showModal={this.state.showModal} onChangeShowModal={this.onChangeShowModal}/>
		</React.Fragment>
		);
	}
}

export default App;
