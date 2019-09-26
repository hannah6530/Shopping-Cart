import React from 'react';
// import { Card, Image } from 'semantic-ui-react';
import { Grid, Image } from 'semantic-ui-react'

class Shirt extends React.Component {

  state = {
    buttonClicked: false,
    bgColor: ''
  }

   handleClick = () => {
     this.props.shirtQuantity(this.props)

  }
   handleButton = (event) => {
     if (this.state.bgColor === ''){
        this.setState({bgColor: 'darkblue'})
      }
      else {
        this.setState({bgColor: ''})
      }
  }

  render(){
    const formatURL = () => {
      let format = this.props.name.toLowerCase().split(' ').join('_')
      return require(`../shirt-pics/${format}.jpg`)
  }

    return(
      <Grid.Column>
        <Image src={formatURL()} />
        <span className="shirtTitle">{this.props.name}</span>
         <br/>
         <span className="bold">${this.props.price}</span>
          <br/>
              <button onClick={this.handleButton}
              className="circular ui icon button"
              id="hover"
              style={{ backgroundColor: this.state.bgColor }}>
               <p>S</p>
              </button>

              <button onClick={this.handleButton}
              className="circular ui icon button"
              id="hover"
              style={{ backgroundColor: this.state.bgColor }}>
                <p>M</p>
              </button>

              <button onClick={this.handleButton}
              className="circular ui icon button"
              id="hover"
              style={{ backgroundColor: this.state.bgColor }}>
                <p>L</p>
              </button>

              <button
              onClick={this.handleButton}
              className="circular ui icon button" id="hover"
              style={{ backgroundColor: this.state.bgColor }}>
                <p>XL</p>
              </button>
              <br/>

          <button onClick={this.handleClick} className="Button">Add To Cart</button>
      </Grid.Column>
    )


  }





}
export default Shirt;
