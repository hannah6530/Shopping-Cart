import React from 'react';
import '../App.css';
import shirtData from '../shirtData';
import ShirtContainer from './ShirtContainer';

class App extends React.Component {

  state = {
    shirts: shirtData
  }


  render(){
    return (
      <div>
      <ShirtContainer shirts={this.state.shirts} />
      </div>
    )

  }

}

export default App;
