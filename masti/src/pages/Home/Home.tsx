import { useState, useEffect } from "react";

import CountDownTimer from "../../components/Timer";
import FooterTable from "../../components/FooterTable";
import Header from "../../components/Header";
import styles from "./styles.module.css";
import bannerImg from "../../assets/images/img_banner.png";
import clockImg from "../../assets/images/relogio.svg";
import Card from "../../components/CourseCard";

export default function Home() {
  type Course = {
    id: number;
    title: string;
    description: string;
    requirements: string;
    instructor: string;
    price: string;
    thumbnail: string;
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCoursesData = () => {
      fetch("http://localhost:4000/courses/")
        .then((res) => {
          return res.json();
        })
        .then((json) => setCourses(json));
    };

    getCoursesData();
  }, []);

  return (
    <data>
      <Header
        linkText={"Cursos"}
        linkText2={"Cadastre-se"}
        buttonText={"Entrar"}
      />

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.textContent}>
            <div className={styles.textBox}>
              <h2>O melhor lugar para aprender</h2>
              <span>
                A maior seleção de cursos do mundo. Escolha entre mais de
                100.000 cursos em vídeo online a partir de <b>R$ 19,90</b>
              </span>
            </div>
            <button className={styles.button}>Cadastre-se</button>
          </div>
          <div className={styles.imgBox}>
            <img className={styles.banner} src={bannerImg} alt="Estudante" />
          </div>
        </div>

        <section className={styles.timer}>
          <div>
            <span>Aprenda a programar</span>
            <h2>Bootcamp React</h2>
          </div>
          <div>
            <span>Por apenas</span>
            <h2>R$ 19,90</h2>
          </div>
          <div style={{ display: "flex" }}>
            <img src={clockImg} alt="relógio" className={styles.clock} />
            <div>
              <span>Acaba em:</span>
              <h2>
                <CountDownTimer hours={47} minutes={57} seconds={52} />{" "}
              </h2>
            </div>
          </div>
        </section>

        <p style={{ color: "black", fontWeight: 500 }}>Nossos Cursos</p>
        <section className={styles.coursesSection}>
          {courses.map((course: Course) => (
            <Card
              id={course.id}
              title={course.title}
              description={course.description}
              price={course.price}
              requirements={course.requirements}
              instructor={course.instructor}
              thumbnail={course.thumbnail}
            />
          ))}
        </section>
      </main>
      <FooterTable />
    </data>
  );
}
