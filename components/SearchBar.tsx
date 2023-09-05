"use client";

import { INewSearchProps, ISearchButton } from "@/types";
import SearchManf from "./SearchManf";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SearchButton = ({ otherClasses }: ISearchButton) => (
  <button type="submit" className={`${otherClasses} -ml-3 z-10`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({ setManuf, setModels }: INewSearchProps) => {
  // const router = useRouter();
  const [Manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");

  // const updateSearchParams = (model: string, manufacture: string) => {
  //   const searchParams = new URLSearchParams(window.location.search);

  //   if (model) {
  //     searchParams.set("model", model);
  //   } else {
  //     searchParams.delete("model");
  //   }

  //   if (manufacture) {
  //     searchParams.set("manufacture", manufacture);
  //   } else {
  //     searchParams.delete("manufacture");
  //   }

  //   const newPathName = `${
  //     window.location.pathname
  //   }?${searchParams.toString()}`;

  //   return router.push(newPathName);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Manufacture === "" && model === "") {
      return alert("Please Fill in the Searchbar");
    }

    setManuf(Manufacture.toLocaleLowerCase());
    setModels(model.toLocaleLowerCase());
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManf selected={Manufacture} setSelected={setManufacture} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Model Icon"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguen"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};
export default SearchBar;
