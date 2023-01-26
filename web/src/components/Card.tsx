import curso from "../assets/curso1.png";

type ContentProps = {
  id: number;
  title: string;
  description: string;
  requirements: string;
  instructor: string;
  price: string;
  thumbnail: string;
};

export function Card({
  id,
  title,
  description,
  price,
  requirements,
  instructor,
  thumbnail,
}: ContentProps) {
  return (
    <div className="rounded-lg bg-white shadow-md w-fit">
      <img alt="imagem do curso" src={curso} />
      <p className="text-blue">{title}</p>
      <p className="text-blue">{description}</p>
      <p className="text-carbon-900"> {instructor}</p>
      <p className="font-bold text-black">R$ {price}</p>
    </div>
  );
}
