/**
 * Created with the help of v0 by Vercel.
 * @see https://v0.dev/t/rRBlufM
 */

import React from "react";
import Link from "next/link";

const PriceCardRecommended = ({ planName, price, description, features, click }) => {
  return (
    <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500">
      <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Recommended
      </div>
      <div>
        <h3 className="text-2xl font-bold text-center">{planName}</h3>
        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
          <span className="text-sm font-bold">{description}</span>
        </div>
        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
          <span className="text-4xl font-bold">{price}</span>/ hr
        </div>
        <ul className="mt-4 space-y-2 flex flex-col items-center">
          {features.map((feature) => (
            <li key={feature} class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-white text-xs bg-green-500 rounded-full mr-2 p-1"
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
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:bg-gradient-to-r hover:from-pink-700/90 hover:to-purple-700/90 h-10 px-4 py-2 w-full" onClick={click}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PriceCardRecommended;
