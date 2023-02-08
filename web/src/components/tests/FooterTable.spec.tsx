import { render } from "@testing-library/react";
import { FooterTable } from "../FooterTable";

describe("FooterTable", () => {
  it("renders the logo", () => {
    const { getByAltText } = render(<FooterTable />);
    const logoElement = getByAltText(/Logo masti/i);
    expect(logoElement).toBeInTheDocument();
  });

  it("renders the links", () => {
    const { getByText } = render(<FooterTable />);
    const privacyLink = getByText(/Política de privacidade/i);
    expect(privacyLink).toBeInTheDocument();

    const coursesLink = getByText(/Cursos/i);
    expect(coursesLink).toBeInTheDocument();

    const aboutLink = getByText(/Sobre/i);
    expect(aboutLink).toBeInTheDocument();

    const contactLink = getByText(/Contato/i);
    expect(contactLink).toBeInTheDocument();

    const registerLink = getByText(/Cadastrar/i);
    expect(registerLink).toBeInTheDocument();

    const enterLink = getByText(/ENTRAR/i);
    expect(enterLink).toBeInTheDocument();
  });

  it("renders the copyright information", () => {
    const { getByText } = render(<FooterTable />);
    const copyrightElement = getByText(/Copyright 2023 Itsam/i);
    expect(copyrightElement).toBeInTheDocument();

    const developerLink = getByText(/MASTI/i);
    expect(developerLink).toBeInTheDocument();
  });

  it("renders the social media icons", () => {
    const { getByAltText } = render(<FooterTable />);
    const facebookIcon = getByAltText(/facebook logo/i);
    expect(facebookIcon).toBeInTheDocument();

    const instagramIcon = getByAltText(/instagram logo/i);
    expect(instagramIcon).toBeInTheDocument();
  });
});
