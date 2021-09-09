import { render, screen, cleanup } from "@testing-library/react";
import ProductCard from "./ProductCard";

function renderUi(props = {}) {
  const products = {
    price: 11.11,
    name: "product1",
    description: "description1",
  };
  const mockAddToCart = jest.fn();
  render(
    <ProductCard
      addToCart={props?.addToCart ? props?.addToCart : mockAddToCart}
      product={props.product ? props.product : product}
    />
  );
  const ui = screen.getByTestId('ProductCard')
  return ui;
}

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
    const products = [
      {
        price: 11.11,
        name: "product1",
        description: "description1",
      },
      {
        price: 22.22,
        name: "product2",
        description: "description2",
      },
    ];
    for (let product of products) {
      const ui = renderUi({product})
      expect(ui).toHaveTextContent(product.price);
      cleanup();
    }
  });

  it("shows the product short description", () => {
    render(<ProductCard addToCart={jest.fn()} />);
    const ui = screen.getByTestId("description");
    expect(ui).toHaveTextContent("description");
  });

  it("shows the product name", () => {
    render(<ProductCard addToCart={jest.fn()} />);
    const ui = screen.getByTitle("productName");
  });
});
