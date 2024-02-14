import React, { Component } from "react";
import { ListGroupItem,ListGroup } from "reactstrap";
export default class CategoryList extends Component {
  state={
    categories:[]
};
componentDidMount(){
  this.getCategories();
}
getCategories=()=>{
  fetch("http://localhost:3000/categories")
  .then(response=>response.json())
  .then(data=>this.setState({categories:data}));
}
render() {
    return (
      <div>     
        <ListGroup>
            {this.state.categories.map(category=>(
              <ListGroupItem key={category.id} onClick={()=>this.props.changeCategory(category)}>{category.categoryName}</ListGroupItem>
            ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
