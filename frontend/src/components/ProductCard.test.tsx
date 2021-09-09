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

  it("has an image of the product", () => {
    render(<ProductCard />);
    const ui = screen.getByAltText("ProductImage");
  });

  it("has an add to cart button", () => {
    const mockAddToCart = jest.fn();
    render(<ProductCard addToCart={mockAddToCart} />);
    const ui = screen.getByLabelText("Add To Cart");
    ui.click();
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    // expect(mockAddToCart).toHaveBeenCalledWith({price: 11})
  });

  it("shows the product price", () => {
    const product = {price: 11.11};
    render(<ProductCard addToCart={jest.fn()} product={product} />)
    const ui = screen.getByTestId('price');
  });

  // it('shows the product short description', () => {
  //   render(<ProductCard addToCart/>);
  //   const ui = sc

  // }
});

// it('shows the product name')
