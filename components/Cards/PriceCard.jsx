"use client";

import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const PriceCard = ({ planName, price, description, features, recommended }) => {
  const router = useRouter();
  
  const handleClick = () => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set('plan', planName);

    const newPathname = `${window.location.pathname}/application?${searchParams.toString()}`;

    router.push(newPathname);
  }

  return (
    <>
        <div
          className={`${recommended ? "price_card_recommended" : "price_card"}`}
        >
          {recommended === true && (
            <div className="flex justify-center border rounded-full bg-pink-600">
              <p className="uppercase text-white font-bold">Recommended</p>
            </div>
          )}
          <div className="text-center py-3">
            <h1 className="uppercase font-extrabold text-2xl">{planName}</h1>
            {planName !== "Enterprise" ? (
              <p className="flex justify-center text-[27px] font-bold">
                £{price}
                <span className="self-end text-[14px] font-medium mb-4 ml-1">
                  /hr
                </span>
              </p>
            ): (
              <p className="flex justify-center text-[27px] font-bold uppercase">
                {price}
              </p>
            )}
            <p className="text-sm my-2">{description}</p>
            <div className="py-3">
              <p>What&apos;s Included?</p>
              {features.map((feature) => (
                <div key={feature} className="flex justify-center">
                  <p
                    className={`pt-0.5 mr-2 -ml-5 ${
                      recommended ? "text-green-700" : "text-green-600"
                    }`}
                  >
                    <CheckCircleIcon height={20} width={20} />
                  </p>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <div className="pt-20">
              <p>
                <Link href={"/"}>Terms & Conditions </Link>apply.
              </p>
              {planName !== "Enterprise" ? (
                <div className="flex justify-center items-center py-3">
                  <button className="price_card_btn uppercase" onClick={handleClick}>
                    Enquire Now
                  </button>
                </div>
              ): (
                <div className="flex justify-center items-center py-3">
                  <button className="price_card_btn uppercase" onClick={handleClick}>
                    Contact Sales
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
    </>
  );
};

export default PriceCard;
