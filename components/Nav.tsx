import Link from "next/link";
import Image from "next/image";

import { CustomeButton } from "@/components";
const Nav = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-width flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomeButton
          title="Sing in"
          type="button"
          ContainerStyles="text-primary-blue bg-white rounded-full min-w-[130px]"
        />
      </nav>
    </header>
  );
};
export default Nav;