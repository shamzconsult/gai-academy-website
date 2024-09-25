import Image from "next/image";
import HeroCards from "../cards/hero-card";

export default function HeroSection() {
  return (
    <section className="flex items-end gap-4">
      <div className="flex flex-col gap-6 pt-5 w-full sm:w-1/2">
        <h1 className="text-3xl leading-[48px] max-w-[600px] md:text-5xl md:leading-[60px] font-medium">
          Where talent connects with global opportunities.
        </h1>
        <p className="text-xl">
          GIA Academy helps people worldwide learn, connect, and grow, to unlock
          life-changing opportunities.
        </p>

        <HeroCards />
      </div>
      <div className="hidden sm:flex sm:w-1/2 h-[90vh]">
        <Image
          width={500}
          height={500}
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1727093019252/32a936a0-1283-4bdb-905e-1e31ae1a485c.jpeg"
          alt="hero"
          className="rounded-md w-full h-full object-cover"
          style={{ maxHeight: "90vh" }}
        />
      </div>
    </section>
  );
}
