import { render, screen } from "@testing-library/react";
import Store from "./Store";

describe("Store", () => {
  it("exists", () => {
    expect(typeof Store).toBe("function");
  });

  it('has class "Store"', () => {
    render(<Store />);
    const ui = screen.getByTestId("Store");
    expect(ui).toHaveClass("Store");
  });
});
