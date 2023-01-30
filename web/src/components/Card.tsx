import { useState } from "react";
import { Course } from "../pages/Home";
import curso1 from "../assets/curso1.png";
import curso2 from "../assets/curso2.png";
import curso3 from "../assets/curso3.png";
import curso4 from "../assets/curso4.png";
export function Card({
  id,
  title,
  description,
  requirements,
  instructor,
  price,
  thumbnail,
}: Course) {
  function changeImage() {
    switch (thumbnail) {
      case "curso1.png":
        return curso1;
      case "curso2.png":
        return curso2;
      case "curso3.png":
        return curso3;
      case "curso4.png":
        return curso4;
    }
  }
  return (
    <div
      className=" rounded-lg bg-white shadow-lg overflow-hidden text-base mb-10 mr-4 "
      role={"button"}
      tabIndex={0}
    >
      <img alt="imagem do curso" src={changeImage()} />
      <div className="p-3">
        <p className="text-blue font-bold">{title}</p>
        <p className="text-blue font-medium">{description}</p>
        <p className="text-carbon-900">{instructor}</p>
        <p className="font-bold text-carbon-900 text-end">R${price}</p>
      </div>
    </div>
  );
}
