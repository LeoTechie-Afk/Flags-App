import { FC } from "react";
import Image from "next/image";

type FlagProps = {
  name: string;
  emoji: string;
  image: string;
};

const Flag: FC<FlagProps> = ({ image, name, emoji }) => {
  return (
    <div className="shadow-lg text-center h-fit lg:w-96 md:w-64 sm:w-56  inline-flex flex-col p-8 m-8 bg-sky-100 dark:bg-slate-800 border-8 border-cyan-200">
      <h1 className=" text-slate-900 dark:text-gray-300 lg:text-3xl md:text-2xl sm:text-xl">
        {emoji} {name}
      </h1>
      <Image src={image} alt={`${name} Flag`} width={500} height={0} />
    </div>
  );
};

export default Flag;
