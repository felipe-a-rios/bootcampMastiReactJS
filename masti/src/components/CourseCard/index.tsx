import styles from "./styles.module.css";
import courseImg from "../../assets/images/curso1.png";

// async function apiCall() {
// for (let i = 0; i < data.length; i++) {
//   const container = document.createElement("div");
//   container.className = "result";

//   const thumbnail = document.createElement("img");
//   thumbnail.src = `C:/www/bootcampMastiReactJS/masti/src/assets/images/curso1.png`;
//   container.appendChild(thumbnail);
//   thumbnail.className = "image1";
//   const title = document.createElement("p");
//   title.innerHTML = data[i].title;
//   container.appendChild(title);
//   title.className = "curso1";
//   const description = document.createElement("p");
//   description.innerHTML = data[i].description;
//   container.appendChild(description);
//   description.className = "descrição1";

//   const instructor = document.createElement("p");
//   instructor.innerHTML = data[i].instructor;
//   container.appendChild(instructor);
//   instructor.className = "name1";

//   const price = document.createElement("p");
//   price.innerHTML = data[i].price;
//   container.appendChild(price);
//   price.className = "price1";

//   const cursos = document.getElementById("result");
//   cursos!.appendChild(container);
// }
//   const resposta = await fetch("http://localhost:4000/courses/");

//   return resposta.json();
// }

type ContentProps = {
  id: number;
  title: string;
  description: string;
  requirements: string;
  instructor: string;
  price: string;
  thumbnail: string;
};

export default function Card({
  id,
  title,
  description,
  price,
  requirements,
  instructor,
  thumbnail,
}: ContentProps) {
  return (
    <div className={styles.courseBox}>
      <img
        alt="imagem do curso"
        src={courseImg}
        style={{ height: "150px", width: "280px", borderRadius: "10px" }}
      />
      <p style={{ color: "#2F71FD", fontWeight: 700 }}>{title}</p>
      <p style={{ color: "#2F71FD" }}>{description}</p>
      <p style={{ color: "#BDBDBD" }}> {instructor}</p>
      <p style={{ fontWeight: 700 }}>R$ {price}</p>
    </div>
  );
}
