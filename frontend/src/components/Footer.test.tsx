import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("exists", () => {
    expect(typeof Footer).toBe("function");
  });

  it('has class "Footer"', () => {
    render(<Footer />);
    const ui = screen.getByTestId("Footer");
    expect(ui).toHaveClass("Footer");
  });
});
