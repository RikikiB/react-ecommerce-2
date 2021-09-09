import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("exists", () => {
    expect(typeof Header).toBe("function");
  });

  it('has class "Header"', () => {
    render(<Header />);
    const ui = screen.getByTestId("Header");
    expect(ui).toHaveClass("Header");
  });
  it.todo('shows the company name')
  it.todo('has a cart button')
  it.todo('shows the # of items in the cart')
});
