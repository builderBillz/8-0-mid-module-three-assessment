import React from "react";
import "./App.css";
import Checkout from "./Checkout";
import productData from "./data/productData";
import Products from "./Products";

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      Cart:"",
      subtotal: "",
      tax: "",
      total:"",
    } 
  }

// allProducts =()=> {
//   this.setState({
//     allProducts:productData
//   })
// }


makeNumber = (string) =>{
string.replace("$","")
}



addTOCart = (event) =>{
  
  if (this.state.subtotal === ""){
     
    let currentSub= ""
    currentSub += Number(event.target.value)
    this.setState
    ({subtotal: currentSub})
  } else {
    let currentSub= this.state.subtotal
    // currentSub += Number(event.target.value)
    // currentSub = currentSub.toFixed(2)
    currentSub += Number(event.target.value)
    this.setState
    ({subtotal:currentSub})
  } 
    
}


  render(){

    console.log(productData)
  return <div className="App">
     <h1>My Garage Sale</h1>
     <div className= 'garage'>
    <Products addTOCart= {this.addTOCart}/>
    <section id='preview'>
     <h2>Cart</h2>
     <ul></ul>
     <h2>Subtotal:{this.state.subtotal} </h2>
     <h2>Tax: </h2>
     <h2>Total: </h2>
     <Checkout/>
    </section>
    </div>
  </div>;
  }
};


export default App;
