import React from 'react';
import '../App.css';
import shirtData from '../shirtData';
import ShirtContainer from './ShirtContainer';
import ShoppingCart from './ShoppingCart';
import { connect } from 'react-redux';




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

  // showShoppingCart = () => {
  //   this.setState({
  //     visible: true
  //   })
  // }

  render(){
    return (
      <div>
        <div className="fire">
          <h1 className="Blazing">T-Shirt Paluzza</h1>
        </div>
        <div className="cartButton">
        <a href="#">Cart ({this.props.sqc})</a>
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

const mapStateToProps = state => {
  // this function stores instructions about how the state should be mapped to props you can use in the container above
  // stores a function which expects the state stored in redux as the input and returns a javascript object or a map of prop names and slices of the state stored in redux
  // it is executed by the react-redux package whci will be passed to it
  // the state as specified in this function is given to us by react-redux which will reach out to the redux state which in turn
  // is the state that is set in the initialState
  return{
    sqc: state.shirtQuantity
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementShirtCounter: () => dispatch({type: 'INCREMENT_SHIRT'})
  };
};

//connect is a function that returns a higher order componenet
//used to connect react to redux
//can be called as a function
// connect gives the container above access to the sqc property


export default connect(mapStateToProps, mapDispatchToProps)(App);
