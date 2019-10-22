import React from 'react'
import Shirt from './Shirt';

class ShoppingCart extends React.Component {

render() {

  const listShirts = this.props.shoppingCart.map(shirt => {
    return <Shirt key={shirt.id} {...shirt}/>
  })

  return(
    <div className="cartContainer">
      {listShirts}
    </div>
  )
}

}
export default ShoppingCart;
