import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component { 
  constructor(props){
    super(props)
    this.state ={
      orders: []
    }
    this.addToOrder = this.addToOrder.bind(this);
  }

  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/>
        <Items onAdd={this.addToOrder}/>
        <Footer />
      </div>
    );
  }

  addToOrder(item){
    this.setState({orders: [...this.state.orders, item]});
  }
}

export default App;
