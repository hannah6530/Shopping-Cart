import React from 'react';
import Shirt from './Shirt';


class ShirtContainer extends React.Component{


  render(){

    const listShirts = this.props.shirts.map(shirt => {
      return <Shirt key={shirt.id} {...shirt}/>
    })

    return(
      <div>
      {listShirts}
      </div>
    )
  }

}
export default ShirtContainer;
