import { render, screen } from "@testing-library/react"
import TermsAndConditions from "./TermsAndConditions"

describe("TermsAndConditions", () => {
  it("exists", () => {
    expect(typeof TermsAndConditions).toBe("function")
  })

  it('has class "TermsAndConditions"', () => {
    render(<TermsAndConditions />)
    const ui = screen.getByTestId("TermsAndConditions")
    expect(ui).toHaveClass("TermsAndConditions")
  })
})
