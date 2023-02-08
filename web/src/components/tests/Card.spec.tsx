import { render } from "@testing-library/react";
import { Card } from "../Card";
import { Course } from "../../pages/Home";
describe("<Card />", () => {
  it("renders the title, description, instructor and price", () => {
    const course: Course = {
      id: 1,
      title: "Curso 1",
      description: "Descrição 1",
      requirements: "Requerimentos 1",
      instructor: "Instrutor 1",
      price: "19,90",
      thumbnail: "curso1.png",
    };

    const { getByText } = render(<Card {...course} />);

    expect(getByText(course.title)).toBeInTheDocument();
    expect(getByText(course.description)).toBeInTheDocument();
    expect(getByText(course.instructor)).toBeInTheDocument();
    expect(getByText(`R$${course.price}`)).toBeInTheDocument();
  });

  it("renders the correct image based on the thumbnail", () => {
    const course: Course = {
      id: 1,
      title: "Curso 1",
      description: "Descrição 1",
      requirements: "Requerimentos 1",
      instructor: "Instrutor 1",
      price: "19,90",
      thumbnail: "curso1.png",
    };

    const { container } = render(<Card {...course} />);
    const img = container.querySelector("img");

    expect(img).toHaveAttribute("src", "curso1.png");
  });
});
