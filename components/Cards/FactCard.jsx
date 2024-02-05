import React from "react";
import { LightBulbIcon } from "@heroicons/react/24/outline";

const FactCard = ({ text }) => {
  return (
    <section className="fact_card text-white bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="m-2 pt-3">
            <LightBulbIcon className="border border-white rounded-full h-14 w-14" />
        </div>
        <div>
            <h1 className="uppercase text-lg font-extrabold font-satoshi mt-1">Fun Fact</h1>
            <p className="font-satoshi text-sm">{text}</p>
        </div>
    </section>
  );
};

export default FactCard;
