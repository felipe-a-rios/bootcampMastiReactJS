import banner from "../assets/img_banner.png";
import clockImg from "../assets/relogio.svg";

import { Card } from "../components/Card";
import { Header } from "../components/Header";
import CountDownTimer from "../components/Timer";

export function Home() {
  return (
    <>
      <Header buttonText="Entrar" linkText2="Cadastre-se" linkText="Cursos" />

      <main className="my-0">
        <div className="grid grid-cols-2 font-main content-around items-center pl-60 text-carbon-900">
          <div className="flex flex-wrap gap-3 justify-start">
            <h1 className="font-bold text-blue text-3xl">
              O melhor lugar para aprender
            </h1>
            <span className="">
              A maior seleção de cursos do mundo. Escolha entre mais de 100.000
              cursos em vídeo online a partir de <b>R$ 19,90</b>
            </span>
            <button className="bg-lightGreen block mt-16 w-64 p-4 rounded-md text-blue font-semibold">
              Cadastre-se
            </button>
          </div>

          <div className="col-span-1  justify-end ">
            <img src={banner} alt="Estudante" />
          </div>
        </div>
        <section className="bg-purple grid grid-cols-3 font-main pl-60 space-around items-center text-carbon-100 h-28">
          <div className="col-span-1 align-middle flex flex-col gap-2">
            <span className="">Aprenda a programar</span>
            <h2 className="font-bold">Bootcamp React</h2>
          </div>
          <div className="col-span-1 align-middle flex flex-col gap-2">
            <span>Por apenas</span>
            <h2 className="font-bold">R$ 19,90</h2>
          </div>
          <div className="col-span-1 align-middle flex gap-6 ">
            <img
              className="w-6 h-6 self-end mb-1"
              src={clockImg}
              alt="relógio"
            />
            <div className="flex flex-col gap-2 ">
              <span>Acaba em:</span>
              <h2 className="font-bold">
                <CountDownTimer hours={47} minutes={57} seconds={52} />{" "}
              </h2>
            </div>
          </div>
        </section>
        <section className="pl-60">
          <p className="text-black">Nossos Cursos</p>
          <div className="flex flex-wrap gap-3 ">
            <Card
              description="teste"
              instructor="yuri"
              id={1}
              price="200"
              requirements="fumar"
              thumbnail="curso1.png"
              title="Como fumar um narga"
            />
            <Card
              description="teste"
              instructor="yuri"
              id={1}
              price="200"
              requirements="fumar"
              thumbnail="curso1.png"
              title="Como fumar um narga"
            />
            <Card
              description="teste"
              instructor="yuri"
              id={1}
              price="200"
              requirements="fumar"
              thumbnail="curso1.png"
              title="Como fumar um narga"
            />
            <Card
              description="teste"
              instructor="yuri"
              id={1}
              price="200"
              requirements="fumar"
              thumbnail="curso1.png"
              title="Como fumar um narga"
            />
            <Card
              description="teste"
              instructor="yuri"
              id={1}
              price="200"
              requirements="fumar"
              thumbnail="curso1.png"
              title="Como fumar um narga"
            />
            <Card
              description="teste"
              instructor="yuri"
              id={1}
              price="200"
              requirements="fumar"
              thumbnail="curso1.png"
              title="Como fumar um narga"
            />
          </div>
        </section>
      </main>
    </>
  );
}
