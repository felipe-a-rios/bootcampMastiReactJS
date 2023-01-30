import { CalendarOutlined } from "@ant-design/icons";
import * as Label from "@radix-ui/react-label";

export function RegisterForm() {
  return (
    <form className="w-full flex flex-col mt-6 bg-blue">
      <Label.Root
        className="font-main font-semibold text-carbon-500"
        htmlFor="firstName"
      >
        Nome
      </Label.Root>
      <input
        className="w-1/1 rounded-md border-2 border-carbon-300"
        type="text"
        id="firstName"
        placeholder="Digite seu primeiro nome"
      />
      <Label.Root
        className="font-main font-semibold text-carbon-500"
        htmlFor="firstName"
      >
        Sobrenome
      </Label.Root>
      <input
        className="Input"
        type="text"
        id="secondName"
        placeholder="Digite seu sobrenome"
      />
      <Label.Root
        className="font-main font-semibold text-carbon-500"
        htmlFor="firstName"
      >
        Data de Nascimento
      </Label.Root>
      <input
        className="Input"
        type="date"
        id="birthday"
        placeholder="selecione uma data"
      />

      <Label.Root
        className="font-main font-semibold text-carbon-500"
        htmlFor="firstName"
      >
        CPF
      </Label.Root>
      <input
        className="Input"
        type="number"
        id="id"
        placeholder="Digite seu CPF"
      />
     
      <Label.Root
        className="font-main font-semibold text-carbon-500"
        htmlFor="firstName"
      >
        Repita sua senha
      </Label.Root>
      <input
        className="Input"
        type="password"
        id="passwordCheck"
        placeholder="Repita sua senha"
      />
      <button className="bg-blue p-3 rounded-md text-carbon-100 font-semibold duration-300 hover: shadow-md hover:shadow-blue/50">
        cadastrar
      </button>
    </form>
  );
}
