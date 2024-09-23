import ServiceCards from "../cards/service-card";

export default function OurServices() {
  return (
    <div className="mt-28 sm:mt-40 ">
      <section className="flex flex-col gap-2 justify-center items-center mb-6 sm:mb-16">
        <h1 className="text-2xl leading-[36px]  md:text-4xl md:leading-[60px] text-center font-medium text-slate-900">
          Our Services
        </h1>
        <p className="text-xl text-center max-w-4xl">
          At GAI, We provide a diverse range of exceptional courses designed to
          transform our students in every aspect of their lives, fostering
          personal growth, professional development, and academic success.
        </p>
      </section>
      <ServiceCards />
    </div>
  );
}
