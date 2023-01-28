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
    <div className=" rounded-lg bg-white shadow-lg overflow-hidden text-base mb-10 mr-4">
      <img alt="imagem do curso" src={curso} className="" />
      <div className="p-3">
        {" "}
        <p className="text-blue font-bold">{title}</p>
        <p className="text-blue font-medium">{description}</p>
        <p className="text-carbon-900"> {instructor}</p>
        <p className="font-bold text-carbon-900 text-end">R$ {price}</p>
      </div>
    </div>
  );
}
