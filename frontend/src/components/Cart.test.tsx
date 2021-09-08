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
});
