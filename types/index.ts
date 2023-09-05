import { MouseEventHandler } from "react";

export interface ICustomeButton {
  title: string;
  ContainerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type: "button" | "submit";
  icon?: string;
  isDisbled?: boolean;
}

export interface ISearchManu {
  Manufacture: string;
  setManufacture: (Manufacture: string) => void;
}

export interface ICarsProp {
  city_mpg: number;
  clas: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ISearchButton {
  otherClasses: string;
}

export interface IFilterProps {
  manufacturer: string;
  year: string;
  fuel: string;
  limit: number;
  model: string;
}

export interface IOptionProps {
  title: string;
  value: string;
}

export interface ICustomeFilterProps {
  title: string;
  options: IOptionProps[];
  setFilter: (value: string) => void;
}

export interface INewSearchProps {
  setManuf: (Manufacture: string) => void;
  setModels: (model: string) => void;
}

export interface INewSearchManu {
  selected: string;
  setSelected: (value: string) => void;
}
