import React, { Component } from 'react'

export default class ProductList extends Component {
    state={ counter:1 }
   
  render() {
    return (
      <div>ProductList-{this.props.info}
      <h2>{this.state.counter}</h2>
      </div>
    )
  }
}
