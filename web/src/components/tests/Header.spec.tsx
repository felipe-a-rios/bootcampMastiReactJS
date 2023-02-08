import React from "react";
import { Header } from "../Header";
import { render, screen } from "@testing-library/react";

describe("Header component", () => {
  it("renders the correct text for linkText, linkText2 and buttonText", () => {
    const linkText = "Link 1";
    const linkText2 = "Link 2";
    const buttonText = "Button";
    render(
      <Header
        linkText={linkText}
        linkText2={linkText2}
        buttonText={buttonText}
      />
    );

    expect(screen.getByText(linkText)).toBeInTheDocument();
    expect(screen.getByText(linkText2)).toBeInTheDocument();
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
});
