import React from "react";
import Link from "next/link";

const OtherPagesCard = ({ pageTitle, cardTitle, cardText, button }) => {
  return (
    <div className="other_pages_card text-white bg-gradient-to-r from-green-500 to-black">
      <div className="font-satoshi">
        <h4>{pageTitle}</h4>
      </div>
      <div className="font-satoshi font-semibold text-2xl">
        <h1>{cardTitle}</h1>
      </div>
      {/* ABOUT PARAGRAPH */}
      <div>
        <p>{cardText}</p>
      </div>
      {/* BUTTON */}
      <div className="flex justify-start gap-2">
        {button?.map((button) => (
            <button key={button.id} className="other_pages_cta_btn">
              <Link href={button.href}>{button.name}</Link>
            </button>
          ))}
      </div>
    </div>
  );
};

export default OtherPagesCard;
