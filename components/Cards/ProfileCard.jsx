import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileCard = ({ image, title, subtitle, links, aboutText, button }) => {
  return (
    <div className="profile_card text-white">
      {image && (
        <>
          <div className="flex items-center justify-center">
            <Image
                src={image}
                height={100}
                width={150}
                alt="Image"
                className="rounded-full"
              />
          </div>
          <div className="border-between-items"></div>
        </>
      )}
      <div className="font-satoshi font-semibold ml-1">
        <h4>{title}</h4>
      </div>
      <div className="font-satoshi font-thin ml-1">
        <p>{subtitle}</p>
      </div>
      <div className="border-between-items"></div>
      {/* LINK */}
        <section className="flex justify-between gap-2 font-satoshi font-semibold">
          {links.map((link) => (
            <Link key={link.id} href={link.href} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </section>
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
