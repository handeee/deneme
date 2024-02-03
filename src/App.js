import React from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Container,Row,Col} from "reactstrap";
function App() {
  let infot="abc";
  let categoryInfo={title:"Categorylist"}
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi info={infot}/>
        </Row>
        <Row>
          <Col>
          <CategoryList info={categoryInfo} xs="3"/>
          </Col>
         <Col>
           <ProductList info ="abc"xs="9"/>
         </Col>
          
        </Row>
      </Container>   
    </div>
  );
}
export default App;
