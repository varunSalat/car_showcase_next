"use client";
import CustomeButton from "./CustomeButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book or Rent a car -- quickly and Easily!
        </h1>
        <p className="hero__subtitle">
          Stremline Your car renting Experince with our Effortless booking
          Proccess.
        </p>
        <CustomeButton
          title="Explore Cars"
          ContainerStyles="bg-primary-blue text-white mt-10 rounded-full"
          handleClick={handleScroll}
          type="button"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Hero Car"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};
export default Hero;
