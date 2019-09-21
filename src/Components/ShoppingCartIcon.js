import React from 'react'
import { Link } from 'react-router-dom'

const ShoppingCartIcon = (props) => {

  return(
    <div className="cartButton">
    <Link to="/shopping-cart">Cart ({0})</Link>
    </div>
  )


}
export default ShoppingCartIcon;
