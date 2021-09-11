import {useState} from 'react'
import CartItem from "./CartItem"

function Cart(){
const [cart,SetCart]= useState()
    return <div className="Cart" data-testid="Cart">
    <CartItem/>
    </div>
}

export default Cart
   



