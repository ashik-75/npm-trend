import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/logo.svg"} alt="logo" width={130} height={130} />;
    </Link>
  );
};

export default Logo;
