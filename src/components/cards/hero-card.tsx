import Link from "next/link";

export default function HeroCards() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#08092E] p-4 sm:p-8 rounded-xl text-white flex flex-col justify-between items-end sm:flex-row gap-3">
        <div className="flex flex-col gap-2 text-2xl sm:text-3xl font-medium">
          <p className="text-2xl font-normal">We Offers :</p>
          <p className="max-w-[375px]">
            Introduction to Information Technology
          </p>
        </div>
        <Link href="/course">
          <button className="hover:underline">Learn more</button>
        </Link>
      </div>
      <div className="bg-[#19647E] p-4 sm:p-8 rounded-xl text-white flex flex-col justify-between items-end sm:flex-row gap-3">
        <div className="flex flex-col gap-2 text-2xl sm:text-3xl font-medium">
          <p className="text-2xl font-normal ">We Offers :</p>
          <p className="max-w-[375px]">Professional Development Courses</p>
        </div>
        <Link href="">
          <button className="opacity-80">Coming soon</button>
        </Link>
      </div>
    </div>
  );
}
