import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Shirt = (props) => {

  const formatURL = () => {
    let format = props.name.toLowerCase().split(' ').join('_')
    return require(`../shirt-pics/${format}.jpg`)
}

  return(
    <div className="gridLayout">
      <Card>
        <Image src = {formatURL()} />

        <Card.Content>
            <span className="shirtTitle">{props.name}</span>
          </Card.Content>


      </Card>
    </div>
  )


}
export default Shirt;
