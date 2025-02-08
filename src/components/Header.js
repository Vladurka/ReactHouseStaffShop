import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import Order from "./Order";

const showOrders = (props) =>{
  return(<div>
    {props.orders.map(el => (
      <Order key={el.id} item={el}/>
    ))}
  </div>)
}

const showNothing = () =>{
  return(<div className="empty">
    <h2>There are no wares</h2>
  </div>)
}

export default function Header(props) {
  let[cartOpen, setCartOpen] = useState(false);

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className="nav">
                <li>About Us</li>
                <li>Contacts</li>
                <li>Profile</li>
            </ul>
            <IoCartOutline onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && "active"}`}/>

            {cartOpen && (
              <div className="shop-cart">
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
