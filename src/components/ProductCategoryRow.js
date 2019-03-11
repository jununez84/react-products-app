import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTableRow = styled.tr`
  letter-spacing: 8px !important;
  font-weight: bold !important;
  font-size: 16px !important;
  background-color: #d1c8f8;
  color: #585373;
`

function ProductCategoryRow(props) {
    return (
        <StyledTableRow>
            <td colSpan="3">
                {props.category}
            </td>
        </StyledTableRow>
    );
}

export default ProductCategoryRow;