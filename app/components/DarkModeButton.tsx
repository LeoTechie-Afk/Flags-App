import { FC, MouseEventHandler } from "react";
import "material-icons/iconfont/material-icons.css";

interface DarkModeProps {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
}

const DarkModeButton: FC<DarkModeProps> = ({ onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className="hover:bg-transparent absolute top-3 right-5 w-16 h-16 border-4 border-cyan-200 dark:bg-slate-800 bg-sky-100 rounded-full "
    >
      {<span className="material-icons">dark_mode</span>}
    </button>
  );
};

export default DarkModeButton;
