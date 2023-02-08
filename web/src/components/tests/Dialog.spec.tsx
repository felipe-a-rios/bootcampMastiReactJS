import { render, fireEvent, getByRole } from "@testing-library/react";
import { DialogComponent } from "../Dialog";

describe("DialogComponent", () => {
  it("should render the component with the given buttonText", () => {
    const buttonText = "Entrar";
    const { getByText } = render(<DialogComponent buttonText={buttonText} />);
    const button = getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it("should open the dialog when the button is clicked", () => {
    const buttonText = "Entrar";
    const { getByText, getByPlaceholderText } = render(
      <DialogComponent buttonText={buttonText} />
    );
    const button = getByText(buttonText);
    fireEvent.click(button);
    const emailInput = getByPlaceholderText("Digite seu email");
    const passwordInput = getByPlaceholderText("Digite sua senha");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("should close the dialog when the close button is clicked", () => {
    const buttonText = "Entrar";
    const { getByText, queryByPlaceholderText } = render(
      <DialogComponent buttonText={buttonText} />
    );
    const button = getByText(buttonText);
    fireEvent.click(button);
    const closeButton = getByRole(button, { name: "Fechar" });
    fireEvent.click(closeButton);
    const emailInput = queryByPlaceholderText("Digite seu email");
    const passwordInput = queryByPlaceholderText("Digite sua senha");
    expect(emailInput).toBeNull();
    expect(passwordInput).toBeNull();
  });
});
