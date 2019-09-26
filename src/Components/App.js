import React from 'react';
import '../App.css';
import shirtData from '../shirtData';
import ShirtContainer from './ShirtContainer';
import ShoppingCart from './ShoppingCart';
import ShoppingCartIcon from './ShoppingCartIcon';
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
    console.log(shirts)
  }
  
  render(){
    return (
      <div>
        <div className="fire">
          <h1 className="Blazing">T-Shirt Paluzza</h1>
        </div>

      <ShirtContainer
      shirts={this.state.shirts}
      handleAddtoCart={this.handleAddtoCart}
      shirtQuantity={this.state.shirtQuantity}
      handleQuantity={this.handleQuantity}
      />
      <Switch>
        <Route path="/shopping-cart" render={(routerProps) => <ShoppingCart shoppingCart={this.state.shoppingCart} shirts={this.state.shirts} {...routerProps} />} />
      </Switch>
      <ShoppingCartIcon
      shirtQuantity={this.state.shirtQuantity}
      />
      </div>
    )

  }

}

export default App;
