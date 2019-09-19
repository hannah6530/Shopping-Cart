import React from 'react'
import { Icon } from 'semantic-ui-react';

const ShoppingCartIcon = () => {



  return(
    <Icon.Group size='big' className="shopping_cart_icon">
      <Icon link name='shopping cart'/>
      <Icon corner='top right'/>
    </Icon.Group>
  )


}
export default ShoppingCartIcon;
