import React, { Component } from "react";
import { ListGroupItem,ListGroup } from "reactstrap";
export default class CategoryList extends Component {
  state1={counter:1};
  state={
    categories:[
      {categoryıd:1,categoryname:"beverages"},
      {categoryıd:2,categoryname:"condiments"}
    ],
    currentCategory:""
};
changeCategorty=category=>{
  this.setState({currentCategory:category.categoryname})
}
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h2>{this.state.counter}</h2>
        <ListGroup>
            {this.state.categories.map(category=>(
              <ListGroupItem key={category.categoryıd} onClick={()=>this.changeCategorty(category)}>{category.categoryname}</ListGroupItem>
            ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
