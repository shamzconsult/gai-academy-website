import Image from "next/image";
import Link from "next/link";

export default function Waitlist() {
  return (
    <section className="bg-[#19647E] flex flex-col sm:flex-row-reverse justify-center items-center gap-6 text-white p-4 sm:p-16 rounded-2xl w-full sm:h-[70vh] mt-28 sm:mt-40">
      <div className="w-full sm:w-[40%] flex justify-center">
        <div className="relative h-0 pb-[100%] w-full">
          <Image
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1727110269073/35237b8e-0809-4334-90b4-567898edb28f.webp"
            alt="hero"
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start gap-6 sm:gap-10 w-full sm:w-[60%]">
        <h1 className="text-2xl md:text-4xl font-medium text-center sm:text-left">
          Don't miss out on this exciting opportunity! Join our waitlist
        </h1>
        <p className="text-slate-300 text-xl text-center sm:text-left max-w-[560px]">
          Sign up for our waitlist to be among the first to receive updates and
          access to our newest course offerings. Don&rsquo;t miss out on this
          exciting opportunity! By joining the waitlist, you&rsquo;ll also gain
          exclusive insights and early notifications about future courses. Stay
          ahead of the curve and enhance your learning journey with us!
        </p>
        <Link href="/signup">
          <button className="bg-white text-xl text-slate-600 px-5 py-2.5 font-medium rounded-xl hover:bg-slate-400 hover:text-white duration-150">
            Sign Up
          </button>
        </Link>
      </div>
    </section>
  );
}
