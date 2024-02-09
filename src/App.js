import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  render() {
    let infot = "Navi";
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi info={infot} />
          </Row>
          <Row>
            <Col>
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                xs="3"
              />
            </Col>
            <Col>
              <ProductList
                currentCategory={this.state.currentCategory}
                xs="9"
                products={this.state.products}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
