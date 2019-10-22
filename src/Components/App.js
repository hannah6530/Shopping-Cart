import React from 'react';
import '../App.css';
import shirtData from '../shirtData';
import ShirtContainer from './ShirtContainer';
import ShoppingCart from './ShoppingCart';
import { Switch, Route } from 'react-router-dom'



class App extends React.Component {

  state = {
    shirts: shirtData,
    shoppingCart: [],
    shirtQuantity: 0
  }

  handleQuantity = () => {
    this.setState({
      shirtQuantity: this.state.shirtQuantity + 1
    })
  }

  handleAddtoCart = (shirts) => {
    this.setState({
      shoppingCart: [...this.state.shoppingCart, shirts]
    })
    // console.log(this.state.shoppingCart)
  }

  showShoppingCart = () => {
    this.setState({
      visible: true
    })

  }

  render(){
    return (
      <div>
        <div className="fire">
          <h1 className="Blazing">T-Shirt Paluzza</h1>
        </div>
        <div className="cartButton">
        <a href="#">Cart ({this.state.shirtQuantity})</a>
        </div>
      <ShirtContainer
        shirts={this.state.shirts}
        handleAddtoCart={this.handleAddtoCart}
        shirtQuantity={this.state.shirtQuantity}
        handleQuantity={this.handleQuantity}
      />
      <ShoppingCart
        shoppingCart={this.state.shoppingCart}
        shirts={this.state.shirts}
      />
      </div>
    )

  }

}

export default App;
