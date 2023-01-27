import * as Separator from "@radix-ui/react-separator";
export function BlueLine() {
  return (
    <Separator.Root
      className="bg-blue h-[0.25rem] w-full"
      decorative
      orientation="horizontal"
    />
  );
}
