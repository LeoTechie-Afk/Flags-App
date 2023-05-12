import React, { ChangeEvent } from "react";

type InputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <input
      onChange={props.onChange}
      type="text"
      placeholder="Search Country..."
      className="flex justify-center items-center w-fit h-12 m-8 p-4 rounded-xl text-cyan-50 border-4 border-cyan-50 bg-slate-800"
    />
  );
};

export default Input;
