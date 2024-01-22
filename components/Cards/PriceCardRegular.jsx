/**
 * Created with the help of v0 by Vercel.
 * @see https://v0.dev/t/rRBlufM
 */

import React from "react";
import Link from "next/link";

const PriceCardRegular = ({
  planName,
  price,
  description,
  features,
  click,
}) => {
  return (
    <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
      <div>
        <h3 className="text-2xl font-bold text-center">{planName}</h3>
        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
          <span className="text-sm font-bold">{description}</span>
        </div>
        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
          <span className="text-4xl font-bold">{price}</span>/ hr
        </div>
          <ul className="mt-4 space-y-2 flex flex-col">
            {features.map((feature) => (
              <li key={feature} className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white text-xs bg-green-500 rounded mr-2 p-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
      </div>
      <div className="flex flex-col items-center pt-5">
        <p>
          <Link href={"/"}>Terms & Conditions </Link>apply.
        </p>
      </div>
      <div className="mt-6">
        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-black to-green-500 text-white hover:bg-gradient-to-r hover:from-black/90 hover:to-green-700/90 h-10 px-4 py-2 w-full"
          onClick={click}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PriceCardRegular;
