import React from "react";
import productData from "./data/productData";


class Products extends React.Component {
  constructor(){
    super()
    this.state = {
      ProductName: "0",
      operation: "",
      productData: productData
    } 
  }


  render(){

    return <div className='products'>
        <section className='item'>
            <h2>{this.state.productData[0].name}</h2>
            <p>${this.state.productData[0].price}</p>
            <button onClick={this.props.addTOCart} value="19.99"   className='add'>Add to Cart</button>
            <br></br>
            <br></br>
            <img src={this.state.productData[0].img}/>
            <p>{this.state.productData[0].description}</p>
        </section>
        <section className='item'>
            <h2>{this.state.productData[1].name}</h2>
            <p>${this.state.productData[1].price}</p>
            <button className='add'>Add to Cart</button>
            <br></br>
            <br></br>
            <img src={this.state.productData[1].img}/>
            <p>{this.state.productData[1].description}</p>
        </section>
        <section className='item'>
            <h2>{this.state.productData[2].name}</h2>
            <p>${this.state.productData[2].price}</p>
            <button className='add'>Add to Cart</button>
            <br></br>
            <br></br>
            <img src={this.state.productData[2].img}/>
            <p>{this.state.productData[2].description}</p>
        </section>
        <section className='item'>
            <h2>{this.state.productData[3].name}</h2>
            <p>${this.state.productData[3].price}</p>
            <button className='add'>Add to Cart</button>
            <br></br>
            <br></br>
            <img src={this.state.productData[3].img}/>
            <p>{this.state.productData[3].description}</p>
        </section>
        <section className='item'>
            <h2>{this.state.productData[4].name}</h2>
            <p>${this.state.productData[4].price}</p>
            <button className='add'>Add to Cart</button>
            <br></br>
            <br></br>
            <img src={this.state.productData[4].img}/>
            <p>{this.state.productData[4].description}</p>
        </section>
        <section className='item'>
            <h2>{this.state.productData[5].name}</h2>
            <p>${this.state.productData[5].price}</p>
            <button className='add'>Add to Cart</button>
            <br></br>
            <br></br>
            <img src={this.state.productData[5].img}/>
            <p>{this.state.productData[5].description}</p>
        </section>     
    </div>
  }
};

export default Products;