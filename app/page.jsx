"use client";

import ProfileCard from "@components/Cards/ProfileCard";
import Image from "next/image";
import React, { useState } from "react";

const Home = () => {
  const [links, setLinks] = useState([
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Dev Blog",
      href: "/devblog"
    },
    {
      name: "Travel Blog",
      href: "/travelblog"
    }
  ]);

  const [buttons, setButtons] = useState([
    {
      name: "Contact Me",
      href: "/contact",
    }
  ]);

  return (
    <div>
      <section className="w-full flex-start flex-row">
        <Image
          src={"/assets/images/portrait.jpg"}
          alt="Portrait"
          width={120}
          height={120}
          className="rounded-full pt-4"
        />
        <p className="desc">
          Hello there! My name is Craig and I aspire to be a software/web
          developer! My favourite coding languages include JavaScript
          (specifically React), Python and Java. I am really passionate about
          Technology and have been passionate about the Tech industry since I
          first played the Xbox 360 around a decade ago. My favourite games
          include God of War, Minecraft, and more! Thank you for visiting my
          portfolio, please feel free to contact me if you have any issues with
          my website or if you would like to learn more about me!
        </p>
      </section>
      <section className="pt-10">
        <ProfileCard
          image={"/assets/images/scenery-1.jpg"}
          title={"Craig Climie"}
          subtitle={"Software Developer, Web Developer"}
          button={buttons}
          links={links}
          aboutText="Hello there, I am Craig! I am currently proficient in React and Python
          with some understanding of C# and Java. I am currently learning the
          Next.js React framework, and expanding my knowledge of C#, Java and
          Python."
        />
      </section>
    </div>
  );
};

export default Home;
