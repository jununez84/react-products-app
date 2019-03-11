import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

const searchBarStyle = {
	backgroundColor: '#c2b4ff',
    padding: 20,
    marginTop: 30,
    borderRadius: 10
}


function SearchBar(props) {
	return(
		<div style={searchBarStyle}> 
			<InputGroup>
				<FormControl 
					type="input"
					placeholder="Searchable text">
				</FormControl>
			</InputGroup>
			<Form.Check type="checkbox" label="Only show products in stock">
			</Form.Check>
		</div>
	)
}

export default SearchBar;