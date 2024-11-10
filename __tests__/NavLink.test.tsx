import NavLink from "@/components/NavLink";
import useIsActiveLink from "@/utils/useIsActiveLink";
import { render, screen } from "@testing-library/react";

jest.mock("@/utils/useIsActiveLink");
const mockUseIsActiveLink = useIsActiveLink as jest.Mock;
describe("NavLink component", () => {
  const props = {
    name: "Home",
    path: "/home",
    icon: "/home-icon.svg",
    label: "Home",
  };

  it("should render icon and label", () => {
    mockUseIsActiveLink.mockReturnValue(false);
    render(<NavLink {...props} />);

    const icon = screen.getByTestId("nav-icon");
    const lable = screen.getByTestId("nav-label");
    const arrow = screen.queryByTestId("nav-right-arrow");
    expect(icon).toBeDefined();
    expect(lable).toBeDefined();
    expect(arrow).toBeFalsy();
    expect(lable.innerHTML.toLowerCase()).toBe(props.label.toLowerCase());
  });

  it("should render icon, label and arrow", () => {
    render(<NavLink {...props} />);
    mockUseIsActiveLink.mockReturnValue(true);

    const icon = screen.getByTestId("nav-icon");
    const label = screen.getByTestId("nav-label");
    const arrow = screen.queryByTestId("nav-right-arrow");

    expect(icon).toBeDefined();
    expect(label).toBeDefined();
    expect(arrow).toBeDefined();
  });
});
