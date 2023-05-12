"use client";

import { useState, useEffect } from "react";
import Input from "./components/Input";
import data from "../data/index.json";
import Flag from "./components/Flag";
import Heading from "./components/Heading";

// TO_DO
// Add sorting system and dark mode

interface FlagValues {
  name: string;
  emoji: string;
  image: string;
}

export default function Home() {
  const [flagsArray, setFlagsArray] = useState<FlagValues[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setFlagsArray(data);
  }, []);

  return (
    <div className="container">
      <Heading />
      <Input
        onChange={(e) => {
          setSearchValue(e.target.value.toLowerCase());
        }}
      />
      <div className="justify-around flex flex-row flex-wrap backdrop-blur-md h-5/6 overflow-y-scroll">
        {flagsArray.map(
          ({ name, emoji, image }: FlagValues, index) =>
            name.toLowerCase().startsWith(searchValue) && (
              <Flag key={index} name={name} emoji={emoji} image={image} />
            )
        )}
      </div>
    </div>
  );
}
