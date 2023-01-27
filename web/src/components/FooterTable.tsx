import { BlueLine } from "./BlueLine";
import logoWhite from "../assets/logo_white_full.png";
import * as Separator from "@radix-ui/react-separator";
import faceLogo from "../assets/facebook.svg";
import instaLogo from "../assets/instagram.svg";
export function FooterTable() {
  return (
    <>
      <BlueLine />

      <footer className="bg-gray-footer text-gray-text p-4 pl-60 pr-60 ">
        <div className="container mx-auto flex justify-between items-center pt-9 font-normal gap-3 pb-12 ">
          <a href="">
            <img className="w-32 h-10" src={logoWhite} alt="Logo masti" />
          </a>

          <div className="flex items-center justify-around">
            <a href="#" className="text-white mr-4 hover:underline">
              Política de privacidade
            </a>
            <a href="#" className="text-white mr-4 hover:underline">
              Cursos
            </a>
            <a href="#" className="text-white mr-4 hover:underline">
              Sobre
            </a>
            <a href="#" className="text-white mr-4 hover:underline">
              Contato
            </a>
            <a href="#" className="text-white mr-4 hover:underline">
              Cadastrar
            </a>
            <Separator.Root
              className="bg-gray-text h-10 w-0.5"
              decorative
              orientation="vertical"
            />
            <a
              href="#"
              className="text-white mr-4 text-blue font-semibold hover:underline ml-4"
            >
              ENTRAR
            </a>
          </div>
        </div>
        <Separator.Root
          className="bg-gray-text h-[0.125rem] w-1/1"
          decorative
          orientation="horizontal"
        />
        <div className="text-sm flex pt-14 justify-between items-center">
          <p className="">
            Copyright 2023 Itsam, desenvolvido pela{" "}
            <a className="text-blue" href="https://circularbrain.io/">
              MASTI
            </a>{" "}
          </p>
          <div className="flex items-center justify-end gap-4">
            <a href="https://www.facebook.com/grupomasti">
              <img src={faceLogo} alt="facebook logo" />
            </a>
            <a href="https://www.instagram.com/masti.tech/">
              <img src={instaLogo} alt="instagram logo" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
