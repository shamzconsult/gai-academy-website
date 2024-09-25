import Image from "next/image";
import Link from "next/link";

export default function ServiceCards() {
  return (
    <div className="flex flex-col gap-10 sm:gap-28">
      <section className="bg-[#19647E] flex flex-col sm:flex-row-reverse justify-center items-center gap-6  text-white p-4 sm:p-16 rounded-2xl w-full sm:h-[70vh]">
        <div className="w-full sm:w-[40%] flex justify-center">
          <div className="relative h-0 pb-[100%] w-full">
            <Image
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1727102414530/d8e8eb49-e826-44bd-9a78-7e9a1e0e968b.webp"
              alt="hero"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-6 w-full sm:w-[60%] ">
          <h1 className="text-2xl  md:text-4xl  font-medium text-center sm:text-left">
            GAI&rsquo;s Academy Full-Stack Web Development Program
          </h1>
          <p className="text-slate-300 text-xl text-center sm:text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            maiores labore commodi error nemo laudantium exercitationem facilis
            voluptatem ullam libero? Omnis velit beatae minus dolores nostrum ut
            optio sed modi.
          </p>
          <Link href="">
            <button className="bg-white text-xl text-slate-600 px-5 py-2.5 font-medium rounded-xl hover:bg-slate-400 hover:text-white duration-150 ">
              Read more..
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-[#08092E] flex flex-col sm:flex-row justify-center items-center gap-6  text-white p-4 sm:p-16 rounded-2xl w-full sm:h-[70vh]">
        <div className="w-full sm:w-[40%] flex justify-center">
          <div className="relative h-0 pb-[100%] w-full">
            <Image
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1727092510965/e8681a05-f506-4828-9836-bc40aedc693c.webp"
              alt="hero"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-6 w-full sm:w-[60%] ">
          <h1 className="text-2xl  md:text-4xl  font-medium text-center sm:text-left">
            GAI&rsquo;s Academy Full-Stack Web Development Program
          </h1>
          <p className="text-slate-300 text-xl text-center sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            maiores labore commodi error nemo laudantium exercitationem facilis
            voluptatem ullam libero? Omnis velit beatae minus dolores nostrum ut
            optio sed modi.
          </p>
          <Link href="">
            <button className="bg-white text-xl text-slate-600 px-5 py-2.5 font-medium rounded-xl hover:bg-slate-400 hover:text-white duration-150 ">
              Read more..
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
