import React from 'react';
import ReactDOM from 'react-dom'

const Cart = ({removeItem,carrotQuantity, appleQuantity }) => { 
  return (
    <div>
     {carrotQuantity > 0 ? 
      (<div> <p> Carrot Quantity: {carrotQuantity} </p>
         <button name='carrotQuantity' onClick={removeItem}> Remove </button></div>) : ''} 
      
      {appleQuantity > 0 ? 
      (<div> <p> Apple Quantity: {appleQuantity} </p>
         <button name='appleQuantity' onClick={removeItem}> Remove </button> </div>): ''}
        </div>
  )
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      totalPrice: 0, 
      carrotQuantity: 0, 
      appleQuantity: 0, 
      carrotPrice: 5, 
      applePrice: 3
    };
    this.items = [
      { id: "asdd", name: "carrot", price: 5 },
      { id: "ewrer", name: "apple", price: 3 }
    ]
  }

addItem = e => { 
  const target = e.target

  this.setState({ 
    [target.name]: this.state[target.name] += 1
  })
}

removeItem = e => { 
  const target = e.target

  this.setState({ 
    [target.name]: this.state[target.name] -= 1
  })
}

  render() { 
    return (
      <div>
        <h2> Items: </h2>
        {this.items.map(element => {
         return (<p> {element.name}, price: {element.price} <button name={element.name + `Quantity`} onClick={this.addItem}> Add to Cart</button></p> )
        })}

        <h2> Cart: </h2>
        <h3> Total Price: {(this.state.carrotQuantity * this.state.carrotPrice) + (this.state.appleQuantity * this.state.applePrice)} </h3> 
        <Cart removeItem={this.removeItem} carrotQuantity={this.state.carrotQuantity} appleQuantity={this.state.appleQuantity}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
