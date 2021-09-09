import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';

describe('CartItem', () => {
  it('exists', () => {
    expect(typeof CartItem).toBe('function');
  });

  it('has class "CartItem"', () => {
    render(<CartItem />);
    const ui = screen.getByTestId('CartItem');
    expect(ui).toHaveClass('CartItem');
  });

  it('shows a thumbnail of the product', () => {
    render(<CartItem />);
    screen.getByAltText('empty');
  });

  it('shows the qty of this item in the cart', () => {
    render(<CartItem />);
    screen.getByText('Qty : 1');
  });

  it('has a button to increment qty', () => {
    render(<CartItem />);
    const ui = screen.getByText('+');
    ui.click();
    screen.getByText('Qty : 2');
    ui.click();
    screen.getByText('Qty : 3');
    ui.click();
    screen.getByText('Qty : 4');
  });
  it('has a button to decrement qty', () => {
    render(<CartItem />);
    const ui = screen.getByTestId('decrement');
    // decrement should not go below 1 for cart item
    ui.click();
    screen.getByText('Qty : 1');
    ui.click();
    screen.getByText('Qty : 1'); //no lower than 1
  });
  it('has a remove from cart button', () => {
    render(<CartItem />);
    screen.getByText('Remove');
    //onClick should remove/hide cartitem
  });
  it('shows the price', () => {
    render(<CartItem />);
    screen.getByText('Price : $11.11');
  });
  it('shows the product name', () => {
    render(<CartItem />);
    screen.getByText('T-Shirt');
  });
});
