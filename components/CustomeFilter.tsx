"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { ICustomeFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

const CustomeFilter = ({ title, options, setFilter }: ICustomeFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  // const handleUpdateParams = (e: { title: string; value: string }) => {
  //   const newPathName = updateSearchParams(title, e.value.toLowerCase());
  //   return router.push(newPathName);
  // };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className={"custom-filter__btn"}>
            <span className="block truncate">{selected.title}</span>
            <Image
              src={"/chevron-up-down.svg"}
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="Chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={"custom-filter__options"}>
              {options.map((opt) => (
                <Listbox.Option
                  key={opt.title}
                  value={opt}
                  className={({ active }) =>
                    `reletive cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {opt.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default CustomeFilter;
