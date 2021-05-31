import React, { Component } from 'react';

import {observer, inject} from 'mobx-react';


@inject('ShoeStore')
@observer
class App extends Component {
 
  handleSubmit = (e) => {
  
    e.preventDefault();
  
    const shoe = this.shoeInput.value;
   
    this.props.ShoeStore.addShoe(shoe);
    
    this.shoeInput.value = '';
  }

  render() {
    return (
      <div className="App">
        <h1>My Shoes</h1>
      
        <h2>I have {this.props.ShoeStore.shoesCount} shoes</h2>

        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <input type="text" ref={(input) => {this.shoeInput = input}}></input>
          <button type="submit">Add Shoe</button>
        </form>

        <ul>
          {this.props.ShoeStore.shoes.map((shoe, index) => {
            return (
              <li key={index}>
                {shoe}
              </li>
            )
          })}
        </ul>

      </div>
    );
  }
}

export default App;
