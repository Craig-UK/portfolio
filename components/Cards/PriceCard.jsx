"use client";

import { useRouter } from "next/navigation";
import React from "react";
import PriceCardRecommended from "./PriceCardRecommended";
import PriceCardRegular from "./PriceCardRegular";

const PriceCard = ({ planName, price, description, features, recommended }) => {
  const router = useRouter();

  const handleClick = () => {
      const searchParams = new URLSearchParams(window.location.search);

      searchParams.set("plan", planName);

      const newPathname = `${
        window.location.pathname
      }/application?${searchParams.toString()}`;

      router.push(newPathname);
  };

  return (
    <>
      {recommended == true ? (
        <PriceCardRecommended
          planName={planName}
          price={price}
          description={description}
          features={features}
          click={handleClick}
        />
      ) : (
        <PriceCardRegular
          planName={planName}
          price={price}
          description={description}
          features={features}
          click={handleClick}
        />
      )}
    </>
  );
};

export default PriceCard;
