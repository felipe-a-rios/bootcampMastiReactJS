import { render } from "@testing-library/react";

import { BlueLine } from "../BlueLine";

describe("<BlueLine />", () => {
  it("renders the separator with a blue background", () => {
    const { container } = render(<BlueLine />);
    expect(container.firstChild).toHaveClass("bg-blue");
  });

  it("renders the separator with horizontal orientation", () => {
    const { container } = render(<BlueLine />);
    expect(container.firstChild).toHaveAttribute("orientation", "horizontal");
  });

  it("renders the separator with decorative class", () => {
    const { container } = render(<BlueLine />);
    expect(container.firstChild).toHaveClass("decorative");
  });
});
