import { FC, ChangeEvent } from "react";

type InputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = (props) => {
  return (
    <div className="p-8">
      <input
        onChange={props.onChange}
        type="text"
        placeholder="Search Country..."
        className="flex shadow-lg justify-center mx-auto my-4 items-center w-fit h-12 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-4 border-cyan-200"
      />
    </div>
  );
};

export default Input;
