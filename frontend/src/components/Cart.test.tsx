import { render, screen } from "@testing-library/react";
import Cart from "./Cart";

describe("Cart", () => {
  it("exists", () => {
    expect(typeof Cart).toBe("function");
  });

  it('has class "Cart"', () => {
    render(<Cart />);
    const ui = screen.getByTestId("Cart");
    expect(ui).toHaveClass("Cart");
  });

 it('has class "CartItem"', () => {
    render(<Cart />);
    const ui = screen.getByTestId("Cart");
    expect(ui).toHaveClass("Cart");
  });

  it('shows the qty of this item in the cart', () => {
    render(<Cart />);
    screen.getByText('Qty : 1');
     expect(ui).toHaveClass("Cart");
  });

  it('shows the price of this item in the cart', () => {
    render(<Cart />);
    screen.getByText('Price : $11.11');
     expect(ui).toHaveClass("Cart");
  });

it('shows the product name in the cart', () => {
    render(<Cart />);
    screen.getByDisplayValue('Card Name');
     expect(ui).toHaveClass("Cart");
  });

});
