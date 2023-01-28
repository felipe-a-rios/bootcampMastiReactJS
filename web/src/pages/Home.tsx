import banner from "../assets/img_banner.png";
import clockImg from "../assets/relogio.svg";

import { Card } from "../components/Card";
import { FooterTable } from "../components/FooterTable";
import { Header } from "../components/Header";
import CountDownTimer from "../components/Timer";

export function Home() {
  return (
    <>
      <Header buttonText="Entrar" linkText2="Cadastre-se" linkText="Cursos" />

      <main className="">
        <div className="flex flex-1 relative font-main content-around items-center pl-60 text-carbon-900 ">
          <div className="flex flex-wrap gap-3 justify-start text-left">
            <h1 className="font-bold text-blue text-3xl absolute top-28 ">
              O melhor lugar para aprender
            </h1>
            <span className="text-carbon-800 absolute top-40">
              A maior seleção de cursos do mundo. Escolha entre mais de <br />{" "}
              100.000 cursos em vídeo online a partir de{" "}
              <span className="font-semibold">R$ 19,90</span>
            </span>
            <button className="bg-lightGreen block mt-16 w-64 p-3 rounded-md text-blue font-semibold duration-300 hover:bg-[#B1EDE2]">
              Cadastre-se
            </button>
          </div>

          <div className="flex justify-end relative">
            <img src={banner} alt="Estudante" />
          </div>
        </div>
        <section className="flex flex-row justify-between bg-purple font-main pl-60 pr-60  items-center text-carbon-100 h-28 auto-col">
          <div className="align-middle flex flex-col gap-2">
            <span className="text-base font-normal">Aprenda a programar</span>
            <h2 className="font-semibold text-lg">Bootcamp React</h2>
          </div>
          <div className=" align-middle flex flex-col gap-2">
            <span className="text-base font-normal">Por apenas</span>
            <h2 className="font-semibold text-lg">R$ 19,90</h2>
          </div>
          <div className=" align-middle flex gap-6 ">
            <img
              className="w-6 h-6 self-end mb-1"
              src={clockImg}
              alt="relógio"
            />
            <div className="flex flex-col gap-2 p-0">
              <span className="text-base font-normal">Acaba em:</span>
              <h2 className="font-bold text-lg tracking-widest">
                <CountDownTimer hours={47} minutes={57} seconds={52} />{" "}
              </h2>
            </div>
          </div>
        </section>
        <section className="pl-60 pt-12 pr-48">
          <p className="text-carbon-900 font-semibold pb-12">Nossos Cursos</p>
          <div className="flex flex-wrap gap-3 pb-[9.375rem]">
            <Card
              description="teste"
              instructor="yuri"
              id={1}
              price="200"
              requirements="fumar"
              thumbnail="curso1.png"
              title="Design thinking"
            />
            <Card
              description="teste"
              instructor="yuri"
              id={1}
              price="200"
              requirements="fumar"
              thumbnail="curso1.png"
              title="Design thinking"
            />
            <Card
              description="teste"
              instructor="yuri"
              id={1}
              price="200"
              requirements="fumar"
              thumbnail="curso1.png"
              title="Design thinking"
            />
            <Card
              description="teste"
              instructor="yuri"
              id={1}
              price="200"
              requirements="fumar"
              thumbnail="curso1.png"
              title="Design thinking"
            />
            <Card
              description="teste"
              instructor="yuri"
              id={1}
              price="200"
              requirements="fumar"
              thumbnail="curso1.png"
              title="Design thinking"
            />
            <Card
              description="teste"
              instructor="yuri"
              id={1}
              price="200"
              requirements="fumar"
              thumbnail="curso1.png"
              title="Design thinking"
            />
          </div>
        </section>
        <FooterTable />
      </main>
    </>
  );
}
