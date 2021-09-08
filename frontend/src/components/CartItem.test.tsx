import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";

describe("CartItem", () => {
  it("exists", () => {
    expect(typeof CartItem).toBe("function");
  });

  it('has class "CartItem"', () => {
    render(<CartItem />);
    const ui = screen.getByTestId("CartItem");
    expect(ui).toHaveClass("CartItem");
  });
  it.todo('shows a thumbnail of the product')
  it.todo('shows the qty of this item in the cart')
  it.todo('has a button to increment qty')
  it.todo('has a button to decrement qty')
  it.todo('has a remove from cart button')
  it.todo('shows the price')
  it.todo('shows the product name')
});
