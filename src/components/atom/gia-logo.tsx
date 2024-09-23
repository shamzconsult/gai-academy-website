"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 ">
      <Image
        width={100}
        height={100}
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1727098902700/fd91e425-f4f0-431c-bfc5-af857b143afd.png"
        className="h-8 w-8 rounded-full"
        alt="logo"
      />
      <p className="font-bold text-sm ">GAI Academy</p>
    </Link>
  );
}
