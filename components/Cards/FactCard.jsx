import React from "react";
import { LightBulbIcon } from "@heroicons/react/24/outline";

const FactCard = ({ text }) => {
  return (
    <section className="fact_card">
        <div className="m-2">
            <LightBulbIcon className="border border-black rounded-full h-24 w-24" />
        </div>
        <div>
            <h1 className="uppercase text-lg font-extrabold font-satoshi mt-3">Fun Fact</h1>
            <p className="font-satoshi">{text}</p>
        </div>
    </section>
  );
};

export default FactCard;
