import Logo from "@/components/Logo";
import { render, screen } from "@testing-library/react";
describe("Logo component", () => {
  it("should render logo icon", () => {
    render(<Logo />);
    const icon = screen.getByAltText("logo");
    expect(icon).toBeDefined();
  });

  it("should render logo text", () => {
    render(<Logo />);
    const text = screen.getByTestId("logo-text");

    expect(text.innerHTML.toLowerCase()).toContain("notes");
  });
});
