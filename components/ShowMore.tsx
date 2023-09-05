"use client";

import { useRouter } from "next/navigation";
import CustomeButton from "./CustomeButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({
  pageNumber,
  isNext,
  setLimit,
}: {
  pageNumber: number;
  isNext: boolean;
  setLimit: (value: number) => void;
}) => {
  // const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
    // const newPathName = updateSearchParams("limit", `${newLimit}`);
    // router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomeButton
          type="button"
          title="show more"
          ContainerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};
export default ShowMore;
