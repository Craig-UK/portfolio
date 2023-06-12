import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileCard = ({
  image,
  title,
  subtitle,
  links,
  aboutText,
  button,
}) => {
  return (
    <div className="prompt_card">
      <Image src={image} height={200} width={250} alt="Cool Scenery Image" className="ml-7"/>
      <div className="border-between-items"></div>
      <div className="font-satoshi font-semibold ml-1">
        <h4>{title}</h4>
      </div>
      <div className="font-satoshi font-thin ml-1">
        <p>{subtitle}</p>
      </div>
      <div className="border-between-items"></div>
      {/* LINK */}
      <div className="font-satoshi font-semibold">
        {links.map((link, i) => (
            <Link key={i} href={link.href} className="ml-5 hover:underline">
              {link.name}
            </Link>
        ))}
      </div>
      {/* ABOUT PARAGRAPH */}
      <div className="border-between-items"></div>
      <div>
        <p>
          {aboutText}
        </p>
      </div>
      <div className="border-between-items"></div>
      {/* BUTTON */}
      <div>
      {button.map((button, i) => (
          <button key={i} className="cta_btn">
            <Link key={i} href={button.href}>
              {button.name}
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
