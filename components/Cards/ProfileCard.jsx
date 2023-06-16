import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileCard = ({ image, title, subtitle, links, aboutText, button }) => {
  return (
    <div className="prompt_card">
      <Image
        src={image}
        height={200}
        width={250}
        alt="Cool Scenery Image"
        className="ml-7"
      />
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
          {links.map((link) => (
            <Link key={link.id} href={link.href} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
      {/* ABOUT PARAGRAPH */}
      <div className="border-between-items"></div>
      <div>
        <p>{aboutText}</p>
      </div>
      <div className="border-between-items"></div>
      {/* BUTTON */}
      <div>
        <button className="cta_btn">
          <Link href={button.href}>{button.name}</Link>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
