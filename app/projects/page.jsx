import OtherPagesCard from "@components/Cards/OtherPagesCard";
import ProfileCard from "@components/Cards/ProfileCard";
import React from "react";

export const metadata = {
  title: 'Projects'
}

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
      href: "https://flutter.dev/",
    },
    {
      id: "2",
      name: "React Native",
      href: "https://reactnative.dev/",
    },
    {
      id: "3",
      name: "Android SDK",
      href: "https://developer.android.com",
    },
  ];

  const desktopLinks = [
    {
      id: "1",
      name: "Flutter",
      href: "https://flutter.dev/",
    },
    {
      id: "2",
      name: "C#",
      href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      id: "3",
      name: "Java",
      href: "https://www.java.com/",
    },
  ];

  const profileCardButtons = [
    {
      name: "View Web Application Projects",
      href: "/projects/applications/webapps",
    },
    {
      name: "View Mobile Application Projects",
      href: "/projects/applications/mobileapps",
    },
    {
      name: "View Desktop Application Projects",
      href: "/projects/applications/desktopapps",
    },
  ];

  const githubButton = [
    {
      name: "My GitHub",
      href: "https://github.com/Craig-UK"
    }
  ];

  const DevTravelBlogButton = [
    {
      name: "Dev Blog",
      href: "/devblog"
    },
    {
      name: "Travel Blog",
      href: "/travelblog"
    }
  ];

  return (
    <div>
      <section className="w-full h-80 flex-start sm:flex-row justify-between gap-14 flex-col bg-gradient-to-r from-black to-green-500">
        <ProfileCard
          title="Web Application Projects"
          links={webLinks}
          aboutText="These are some of the web application projects that I
            have developed. This includes projects developed using
            Next.js, React, C# (ASP.NET), and more."
          button={profileCardButtons[0]}
        />
        <ProfileCard
          title="Mobile Application Projects"
          links={mobileLinks}
          aboutText="These are some of the mobile application projects that I
          have developed. This includes projects developed using
          Flutter, React Native, and more."
          button={profileCardButtons[1]}
        />
        <ProfileCard
          title="Desktop Application Projects"
          links={desktopLinks}
          aboutText="These are some of the desktop application projects that
          I have developed. This includes projects developed
          using Flutter, C#, and more."
          button={profileCardButtons[2]}
        />
      </section>
      <section className="w-full pt-10 flex-start sm:flex-row justify-between gap-14 flex-col">
        <OtherPagesCard 
          pageTitle="GitHub"
          cardTitle="Check out my GitHub"
          cardText="My GitHub contains all of the projects that I have made publicly viewable. You can also view some of the 
          open-source projects and repositories that I have contributed to on my GitHub!"
          button={githubButton}
        />
        <OtherPagesCard 
          pageTitle="Dev Blog & Travel Blog"
          cardTitle="Check out my Dev or Travel Blog"
          cardText="You can view my Dev Blog where I discuss some of the projects that I’m currently working on, or have
          previously worked on and more. My Travel Blog contains some of the adventures that I go on in my free
          time."
          button={DevTravelBlogButton}
        />
      </section>
    </div>
  );
};

export default Projects;
