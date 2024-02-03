import React, { Component } from 'react'

export default class ProductList extends Component {

  render() {
    return (
      <div>ProductList
      {this.props.currentCategory}
      </div>
    )
  }
}
