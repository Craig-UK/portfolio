"use client";

import ProfileCard from "@components/Cards/ProfileCard";
import React, { useState } from "react";

const Projects = () => {
  const [links] = useState([
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
  ]);

  const [profileCardButtons] = useState([
    {
        "id": "1",
        "name": "View Web Application Projects",
        "href": "/projects/webapps"
    },
    {
        "id": "2",
        "name": "View Mobile Application Projects",
        "href": "/projects/mobileapps"
    }
  ])

  return (
    <div>
      <section>
        <ProfileCard 
            image={'/assets/images/scenery-1.jpg'}
            title="Web Application Projects"
            links={links}
            aboutText="These are some of the web application projects that I
            have developed. This includes projects developed using
            Next.js, React, C# (ASP.NET), and more."
            button={profileCardButtons[0]}
        />
      </section>
    </div>
  );
};

export default Projects;
