import { useState } from 'react';

const CartItem = (props: any) => {
  const [count, setCount] = useState(1);

  return (
    <div className='CartItem' data-testid='CartItem'>
      <img src='placeholder' alt='empty' />
      <h1>Card Item</h1>
      <h2 data-testid='product name'>T-Shirt</h2>
      <p data-testid='Qty'>Qty : {count}</p>
      <button
        data-testid='increment'
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <button
        data-testid='decrement'
        onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
      >
        -
      </button>
      <button>Remove</button>
      <p>Price : $11.11</p>
    </div>
  );
};

export default CartItem;
