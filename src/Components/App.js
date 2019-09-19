import React from 'react';
import '../App.css';
import shirtData from '../shirtData';
import ShirtContainer from './ShirtContainer';
import ShoppingCart from './ShoppingCart';
import ShoppingCartIcon from './ShoppingCartIcon';

class App extends React.Component {

  state = {
    shirts: shirtData,
    shoppingCart: []
  }


  render(){
    return (
      <div>
        <div className="fire">
          <h1 className="Blazing">T-Shirt Paluzza</h1>
        </div>

      <ShirtContainer shirts={this.state.shirts} />
      <ShoppingCart
      shoppingCart={this.state.shoppingCart}
      shirts={this.state.shirts}
      />
      <ShoppingCartIcon />
      </div>
    )

  }

}

export default App;
