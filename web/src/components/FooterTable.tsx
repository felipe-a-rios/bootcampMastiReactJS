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
        <div className="container mx-auto flex justify-between items-center pt-36 font-normal gap-3 pb-36 ">
          <a className="hover:brightness-75 duration-300" href="">
            <img className="w-32 h-10" src={logoWhite} alt="Logo masti" />
          </a>

          <div className="flex items-center justify-around">
            <a
              href="#"
              className="text-white mr-4 hover:brightness-150 duration-300"
            >
              Política de privacidade
            </a>
            <a
              href="#"
              className="text-white mr-4 hover:brightness-150 duration-300"
            >
              Cursos
            </a>
            <a
              href="#"
              className="text-white mr-4 hover:brightness-150 duration-300"
            >
              Sobre
            </a>
            <a
              href="#"
              className="text-white mr-4 hover:brightness-150 duration-300"
            >
              Contato
            </a>
            <a
              href="#"
              className="text-white mr-4 hover:brightness-150 duration-300"
            >
              Cadastrar
            </a>
            <Separator.Root
              className="bg-gray-text h-10 w-0.5"
              decorative
              orientation="vertical"
            />
            <a
              href="#"
              className="text-white mr-4 text-blue font-semibold ml-4 hover:brightness-150 duration-300"
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
        <div className="text-sm flex pt-20 justify-between items-center pb-20">
          <p className="font-normal">
            Copyright 2023 Itsam, desenvolvido pela{" "}
            <a
              className="text-blue hover:brightness-150 duration-300 font-semibold"
              href="https://circularbrain.io/"
            >
              MASTI
            </a>{" "}
          </p>
          <div className="flex items-center justify-end gap-4">
            <a
              className="hover:brightness-125 duration-300"
              href="https://www.facebook.com/grupomasti"
            >
              <img src={faceLogo} alt="facebook logo" />
            </a>
            <a
              className="hover:brightness-125 duration-300"
              href="https://www.instagram.com/masti.tech/"
            >
              <img src={instaLogo} alt="instagram logo" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
