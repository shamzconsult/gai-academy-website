"use client";
import { FAQs } from "@/constant/FAQs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FrequentlyAskQuestions() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const showAnswer = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="flex items-start  mt-28 sm:mt-40">
      <div className="hidden sm:flex sm:w-1/2">
        <Image
          width={500}
          height={500}
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1727104954872/69e31046-8558-4222-b6ea-828d3cbd11fd.png"
          alt="FAqs"
          className="rounded-md  object-cover"
        />
      </div>
      <div className="w-full sm:w-1/2">
        <h2 className="text-3xl  font-medium text-slate-900 text-center sm:text-left mb-4">
          Frequently Asked Questions
        </h2>
        {FAQs.map((faq: FAQ, index: number) => (
          <div key={index} className="border border-slate-200 rounded-md mb-2">
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-slate-100"
              onClick={() => showAnswer(index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-lg">
                {openQuestion === index ? "-" : "+"}
              </span>
            </div>
            {openQuestion === index && (
              <div className="p-4 bg-[#19647E] text-white rounded-b-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        <Link href="/faqs" className="flex justify-center sm:justify-start">
          <button className=" hover:underline ">Read more..</button>
        </Link>
      </div>
    </div>
  );
}
