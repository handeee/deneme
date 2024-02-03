import React, { Component } from "react";
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Container,Row,Col} from "reactstrap";


export default class App extends Component {
  state={
    currentCategory:""
  }
  changeCategorty=category=>{
    this.setState({currentCategory:category.categoryname})
  };
  render() {
    let infot="abc";
   
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi info={infot}/>
          </Row>
          <Row>
            <Col>
            <CategoryList  currentCategory={this.state.currentCategory} changeCategory={this.changeCategory}    xs="3"/>
            </Col>
           <Col>
             <ProductList currentCategory={this.state.currentCategory} xs="9" />
           </Col>      
          </Row>
        </Container>   
      </div>
    );
  }
}

