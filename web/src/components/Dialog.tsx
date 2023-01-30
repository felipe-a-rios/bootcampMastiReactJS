import { CloseCircleOutlined } from "@ant-design/icons";
import * as Dialog from "@radix-ui/react-dialog";
import * as Label from "@radix-ui/react-label";
import { headerProps } from "./Header";

export function DialogComponent({ buttonText }: headerProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="border-4 text-carbon-100 py-2 px-7 rounded-md border-carbon-100 hover:border-blue hover:text-blue duration-300">
          {buttonText}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-carbon-900/50 fixed inset-0 " />
        <Dialog.Content className="fixed flex flex-wrap w-[37rem] p-6 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-carbon-100 rounded-xl shadow-xl">
          <Dialog.Title className="font-semibold text-blue text-2xl h-fit">
            Entrar
          </Dialog.Title>
          <div className="w-full leading-10">
            <Label.Root className="font-main text-base font-semibold text-carbon-800">
              Email
            </Label.Root>

            <input
              className="w-full inline-flex text-carbon-900 items-center justify-center placeholder:text-carbon-500 text-sm 
                h-fit p-2 border-carbon-500 border-2 rounded-md focus:outline-none
                focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-carbon-300"
              type="email"
              id="email"
              placeholder="Digite seu email"
            />
          </div>
          <div className="w-full leading-10">
            <Label.Root className="font-main text-base font-semibold text-carbon-800">
              Senha
            </Label.Root>

            <input
              className="w-full inline-flex text-carbon-900 items-center justify-center placeholder:text-carbon-500 text-sm 
                h-fit p-2 border-carbon-500 border-2 rounded-md focus:outline-none
                focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-carbon-300"
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </div>

          <Dialog.Close asChild>
            <button className="bg-blue p-3 w-full h-12 rounded-md text-carbon-100 font-semibold text-base duration-300 hover:shadow-md hover:shadow-blue/80">
              entrar
            </button>
          </Dialog.Close>

          <Dialog.Close asChild>
            <button
              className="rounded-full inline-flex items-center justify-center absolute top-8 right-8 duration-300 text-carbon-500 hover:shadow-md hover:bg-carbon-800/20 hover:text-carbon-800"
              aria-label="Fechar"
            >
              <CloseCircleOutlined />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
