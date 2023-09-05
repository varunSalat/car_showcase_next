"use client";
import { ICustomeButton } from "@/types";
import Image from "next/image";

const CustomeButton = ({
  title,
  ContainerStyles,
  handleClick,
  type,
  icon,
}: ICustomeButton) => {
  return (
    <button
      type={type}
      disabled={false}
      className={`custom-btn ${ContainerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
      {icon && (
        <div className="relative w-6 h-6">
          <Image src={icon} alt="right icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};
export default CustomeButton;
