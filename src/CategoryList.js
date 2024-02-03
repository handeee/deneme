import React, { Component } from "react";
import { ListGroupItem,ListGroup } from "reactstrap";
export default class CategoryList extends Component {
  state={
    categories:[
      {categoryıd:1,categoryname:"beverages"},
      {categoryıd:2,categoryname:"condiments"}
    ]
};
render() {
    return (
      <div>     
        <h2>{this.state.counter}</h2>
        <ListGroup>
            {this.state.categories.map(category=>(
              <ListGroupItem key={category.categoryıd} onClick={()=>this.props.changeCategory(category)}>{category.categoryname}</ListGroupItem>
            ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
