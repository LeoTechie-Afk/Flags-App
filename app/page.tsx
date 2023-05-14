"use client";

import { useState, useEffect, FC } from "react";
import Input from "./components/Input";
import data from "../data/index.json";
import Flag from "./components/Flag";
import Heading from "./components/Heading";
import DarkModeButton from "./components/DarkModeButton";

interface FlagValues {
  name: string;
  emoji: string;
  image: string;
}

const Home: FC = () => {
  const [flagsArray, setFlagsArray] = useState<FlagValues[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setFlagsArray(data);
  }, []);

  return (
    <div
      className={`flex flex-col items-center w-screen h-screen bg-cyan-50  ${
        darkMode && "dark"
      }`}
    >
      <DarkModeButton onClickHandler={() => setDarkMode(!darkMode)} />
      <Heading />
      <Input
        onChange={(e) => {
          setSearchValue(e.target.value.toLowerCase());
        }}
      />
      <div className="justify-around flex flex-row flex-wrap h-5/6 w-5/6 overflow-y-scroll">
        {flagsArray.map(
          ({ name, emoji, image }: FlagValues, index) =>
            name.toLowerCase().startsWith(searchValue) && (
              <Flag key={index} name={name} emoji={emoji} image={image} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
