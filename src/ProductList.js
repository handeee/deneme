import React, { Component } from "react";
import { Table } from "reactstrap";
export default class ProductList extends Component {
  render() {
    return (
      <div>
        ProductList
        {this.props.currentCategory}
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>productName</th>
              <th>unit price</th>
              <th>quantity per unit</th>
              <th>units in Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
