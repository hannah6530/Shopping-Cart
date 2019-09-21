import React from 'react'
import Shirt from './Shirt';

class ShoppingCart extends React.Component {

render() {

  const listShirts = this.props.shirts.map(shirt => {
    return <Shirt key={shirt.id} {...shirt}/>
  })

  return(
    <div className="ui modal">
      <div className="content">
        { listShirts}
      </div>
    </div>
  )
}

}
export default ShoppingCart;
