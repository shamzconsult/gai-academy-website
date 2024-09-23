import React from "react";
import { partners } from "@/constant/partners";
import Marquee from "react-fast-marquee";

export default function OurPartners() {
  return (
    <section className="flex items-center gap-3 mt-28 sm:mt-40 max-w-4xl mx-auto">
      <h1 className="font-medium text-2xl text-nowrap">Our partners</h1>
      <Marquee speed={50} pauseOnHover={false}>
        {partners?.map((partner) => (
          <div key={partner?.id} className="mx-6">
            <h3 className="text-12 font-semibold text-center  mt-3">
              {partner?.name}
            </h3>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
