import React from 'react';
// import { Card, Image } from 'semantic-ui-react';
import { Grid, Image } from 'semantic-ui-react'

const Shirt = (props) => {

  const formatURL = () => {
    let format = props.name.toLowerCase().split(' ').join('_')
    return require(`../shirt-pics/${format}.jpg`)
}


  return(
    <Grid.Column>
      <Image src={formatURL()} />
      <span className="shirtTitle">{props.name}</span>
       <br/>
       <span className="bold">${props.price}</span>
        <br/>

          <button className="circular ui icon button" id="hover">
           <p>S</p>
          </button>
          <button className="circular ui icon button" id="hover">
            <p>M</p>
          </button>
          <button className="circular ui icon button" id="hover">
            <p>L</p>
          </button>
          <button className="circular ui icon button" id="hover">
            <p>XL</p>
          </button>
          <br/>

        <button className="Button">Add To Cart</button>
    </Grid.Column>

  )


}
export default Shirt;
