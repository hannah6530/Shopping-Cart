import React from 'react';
import Shirt from './Shirt';
import { Card } from 'semantic-ui-react'


class ShirtContainer extends React.Component{


  render(){

    const listShirts = this.props.shirts.map(shirt => {
      return <Shirt key={shirt.id} {...shirt}/>
    })

    return(
    <Card.Group itemsPerRow={1}>
      {listShirts}
      </Card.Group>
    )
  }

}
export default ShirtContainer;
