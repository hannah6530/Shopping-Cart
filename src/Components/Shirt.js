import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Shirt = (props) => {

  const formatURL = () => {
    let format = props.name.toLowerCase().split(' ').join('_')
    return require(`../shirt-pics/${format}.jpg`)
}
const styles ={
  mainContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row'
  }
}

  return(

      <Card style={styles.mainContainer} className="mt-1" id="border">
        <Image src = {formatURL()} />

        <Card.Content textAlign={'center'}>
          <span className="shirtTitle">{props.name}</span>
            <br/>
            <br/>
          <span className="bold">${props.price}</span>
            <br/>
            <br/>
          <button className="Button">Add To Cart</button>
        </Card.Content>


      </Card>

  )


}
export default Shirt;
