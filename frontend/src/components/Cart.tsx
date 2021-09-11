import { useState } from 'react'
import CartItem from './CartItem'

function Cart() {
  const [cart, setCart] = useState()
  return (
    <div className='Cart' data-testid='Cart'>
      <CartItem />
    </div>
  )
}

export default Cart
