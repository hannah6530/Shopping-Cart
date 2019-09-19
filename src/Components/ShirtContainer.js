import React from 'react';
import Shirt from './Shirt';
import { Grid } from 'semantic-ui-react'


class ShirtContainer extends React.Component{


  render(){

    const listShirts = this.props.shirts.map(shirt => {
      return <Shirt key={shirt.id} {...shirt}/>
    })

    return(
    <Grid container columns={4}>
      {listShirts}
    </Grid>
    )
  }

}
export default ShirtContainer;
