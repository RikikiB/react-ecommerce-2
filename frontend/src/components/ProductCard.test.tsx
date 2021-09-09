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
  });

  it("shows the product price", () => {
    const product = {price: 11.11};
    render(<ProductCard addToCart={jest.fn()} product={product} />)
  screen.getByTestId('price');

  });

  it('shows the product short description', () => {
    render(<ProductCard addToCart={jest.fn()}/>);
   const ui =screen.getByTestId('description');
   expect(ui).toHaveTextContent('description');
});

it('shows the product name', () => {
  render(<ProductCard addToCart={jest.fn()} />);
  const ui = screen.getByTitle('productName');
 

});

});

