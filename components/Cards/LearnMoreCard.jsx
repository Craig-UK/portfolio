import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const LearnMoreCard = ({ text, button }) => {
  return (
    <section className="learn_more_card text-white bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="m-2">
        <ExclamationCircleIcon className="border border-white rounded-full h-24 w-24" />
      </div>
      <div>
        <h1 className="uppercase text-lg font-extrabold font-satoshi mt-3">
          Learn More
        </h1>
        <p className="font-satoshi">{text}</p>
        <div className="flex justify-start gap-2 mx-1">
          {button?.map((button) => (
            <button key={button.id} className="learn_more_cta_btn">
              <Link href={button.href}>{button.name}</Link>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnMoreCard;
