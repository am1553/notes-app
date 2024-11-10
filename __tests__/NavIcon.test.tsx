import NavIcon from "@/components/NavIcon";
import { render, screen } from "@testing-library/react";

describe("NavIcon component", () => {
  it("should render nav icon", () => {
    const data = {
      name: "home",
      path: "/app",
      icon: "/icon-home.svg",
      label: "All Notes",
    };
    render(
      <NavIcon
        src={data.icon}
        height={20}
        width={20}
        alt={data.name}
        name={data.name}
      />
    );

    const icon = screen.getByTestId("nav-icon");
    expect(icon).toBeDefined();
  });
});
