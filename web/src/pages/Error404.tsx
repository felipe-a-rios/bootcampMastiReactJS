import { FooterTable } from "../components/FooterTable";
import { Header } from "../components/Header";
import errorImg from "../assets/img_404.png";
export function Error404() {
  return (
    <>
      <Header linkText2="Sair" linkText="Cursos" buttonText="Minha conta" />
      <div className="flex items-center justify-center mt-36 mb-11">
        <div className="w-[31.5rem] h-[22.688rem]">
          <img
            src={errorImg}
            alt='Imagem mostrando um notebook cartunesco com uma expressão facial de "desmaiado" mostrando que a página retornou o erro 404'
          />
          <span className="flex items-center justify-center mt-10 font-bold text-blue text-xl text-center">
            Desculpe, página não encontrada!
          </span>
        </div>
      </div>
      <FooterTable />
    </>
  );
}
