import { BlueLine } from "./BlueLine";
import logoImg from "../assets/logo_blue_full.png";
import * as Separator from "@radix-ui/react-separator";
type headerProps = {
  linkText?: string;
  linkText2?: string;
  buttonText?: string;
};
export function Header({ linkText, buttonText, linkText2 }: headerProps) {
  return (
    <>
      <header className="flex items-center justify-between bg-carbon-900 w-full text-center font-medium p-3 text-sm">
        <a
          href="https://masti.com.br/"
          className="pl-60 hover:brightness-150 duration-300 pt-6 pb-6"
        >
          <img src={logoImg} className="w-32 h-10" alt="logo Masti" />
        </a>
        <nav className="flex items-center justify-around  gap-3 text-carbon-100 pr-60">
          <a className="hover:brightness-75 duration-300" href="/">
            {linkText}
          </a>
          <Separator.Root
            className="bg-carbon-100 h-10 w-0.5"
            decorative
            orientation="vertical"
          />
          <a className="hover:brightness-75 duration-300" href="/">
            {linkText2}
          </a>{" "}
          <button className="border-2 text-carbon-100 py-2 px-7 rounded-md border-carbon-100 hover:border-blue hover:text-blue duration-300">
            {buttonText}
          </button>
        </nav>
      </header>
      <BlueLine />
    </>
  );
}
