import React from "react";
import Image from "next/image";

type FlagProps = {
  name: string;
  emoji: string;
  image: string;
};

const Flag = ({ image, name, emoji }: FlagProps) => {
  return (
    <div className="shadow-lg text-center lg:w-96 md:w-64 sm:w-56  inline-flex flex-col p-8 m-8 bg-slate-800 border-4 border-cyan-100">
      <h1 className=" text-gray-300 lg:text-3xl md:text-2xl sm:text-xl">
        {emoji} {name}
      </h1>
      <Image src={image} alt={`${name} Flag`} width={500} height={0} />
    </div>
  );
};

export default Flag;
