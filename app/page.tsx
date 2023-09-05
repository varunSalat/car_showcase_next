"use client";
import { useState, useEffect } from "react";

import {
  Hero,
  CustomeFilter,
  SearchBar,
  CarCard,
  ShowMore,
} from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default function Home() {
  // Cars Arrya
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search Filter
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // Extra Filter
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("2022");

  // Pagination
  const [limit, setLimit] = useState(10);

  // Get cars Funcation
  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || "2022",
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Callback Funcation
  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, year, limit]);
  // const isDataEmapty =
  //   !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the Cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManuf={setManufacturer} setModels={setModel} />
          <div className="home__filter-container">
            <CustomeFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomeFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, key) => (
                <CarCard car={car} key={key} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src={"/loading.svg"}
                  alt="Loading"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Opps, no result</h2>
          </div>
        )}
      </div>
    </main>
  );
}
