import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  it("exists", () => {
    expect(typeof ProductCard).toBe("function");
  });

  it('has class "ProductCard"', () => {
    render(<ProductCard />);
    const ui = screen.getByTestId("ProductCard");
    expect(ui).toHaveClass("ProductCard");
  });
  it.todo('has an image of the product')
  it.todo('has an add to cart button')
  it.todo('shows the product price')
  it.todo('shows the product short description')
});
