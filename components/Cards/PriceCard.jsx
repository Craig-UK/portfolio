import Link from "next/link";
import React from "react";

const PriceCard = ({ planName, price, description, features, recommended }) => {
  return (
    <>
      {planName !== "Enterprise" ? (
        <div
          className={`${recommended ? "price_card_recommended" : "price_card"}`}
        >
          {recommended === true && (
            <div className="flex justify-center border rounded-full bg-pink-600">
              <p className="uppercase text-white font-bold">Recommended</p>
            </div>
          )}
          <div className="text-center py-3">
            <h1 className="uppercase">{planName}</h1>
            <h4>
              £{price}
              <span>/hr</span>
            </h4>
            <p className="text-sm my-2">{description}</p>
            <div className="py-3">
              <p>What&apos;s Included?</p>
              {features.map((feature) => (
                <div key={feature}>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <div className="pt-20">
              <p>
                <Link href={"/"}>Terms & Conditions </Link>apply.
              </p>
              <div className="flex justify-center items-center py-3">
                <button className="price_card_btn">Enquire Now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="price_card text-center">
          <h1 className="uppercase">{planName}</h1>
            <h4 className="uppercase">
              {price}
            </h4>
            <p className="text-sm my-2">{description}</p>
            <div className="py-3">
              <p>What&apos;s Included?</p>
              {features.map((feature) => (
                <div key={feature}>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <div className="pt-20">
              <p>
                <Link href={"/"}>Terms & Conditions </Link>apply.
              </p>
              <div className="flex justify-center items-center py-3">
                <button className="price_card_btn">Enquire Now</button>
              </div>
            </div>
        </div>
      )}
    </>
  );
};

export default PriceCard;
