"use client";

import ProfileCard from "@components/Cards/ProfileCard";
import React from "react";

const Projects = () => {
  const webLinks = [
    {
      id: "1",
      name: "Next.js",
      href: "https://nextjs.org/",
    },
    {
      id: "2",
      name: "React",
      href: "https://react.dev/",
    },
    {
      id: "3",
      name: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ]

  const mobileLinks = [
    {
      id: "1",
      name: "Flutter",
      href: "https://nextjs.org/",
    },
    {
      id: "2",
      name: "React Native",
      href: "https://react.dev/",
    },
    {
      id: "3",
      name: "Android SDK",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ];

  const desktopLinks = [
    {
      id: "1",
      name: "Flutter",
      href: "https://nextjs.org/",
    },
    {
      id: "2",
      name: "C#",
      href: "https://react.dev/",
    },
    {
      id: "3",
      name: "Java",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ];

  const profileCardButtons = [
    {
      name: "View Web Application Projects",
      href: "/projects/webapps",
    },
    {
      name: "View Mobile Application Projects",
      href: "/projects/mobileapps",
    },
    {
      name: "View Desktop Application Projects",
      href: "/projects/desktopapps",
    },
  ];

  return (
    <div>
      <section className="w-full flex-start flex-row justify-between gap-14">
        <ProfileCard
          image={"/assets/images/scenery-1.jpg"}
          title="Web Application Projects"
          links={webLinks}
          aboutText="These are some of the web application projects that I
            have developed. This includes projects developed using
            Next.js, React, C# (ASP.NET), and more."
          button={profileCardButtons[0]}
        />
        <ProfileCard
          image={"/assets/images/scenery-1.jpg"}
          title="Mobile Application Projects"
          links={mobileLinks}
          aboutText="These are some of the mobile application projects that I
          have developed. This includes projects developed using
          Flutter, React Native, and more."
          button={profileCardButtons[1]}
        />
        <ProfileCard
          image={"/assets/images/scenery-1.jpg"}
          title="Desktop Application Projects"
          links={desktopLinks}
          aboutText="These are some of the desktop application projects that
          I have developed. This includes projects developed
          using Flutter, C#, and more."
          button={profileCardButtons[2]}
        />
      </section>
    </div>
  );
};

export default Projects;
