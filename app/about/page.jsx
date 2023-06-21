import React from "react";
import Image from "next/image";
import FactCard from "@components/Cards/FactCard";
import LearnMoreCard from "@components/Cards/LearnMoreCard";

const About = () => {
  const learnMoreButtons = [
    [
      {
        name: "Check out my GitHub",
        href: "https://github.com/Craig-UK",
      },
    ],
    [
      {
        name: "My Dev Blog",
        href: "/devblog",
      },
      {
        name: "My Travel Blog",
        href: "/travelblog",
      },
    ],
  ];

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
      <section className="pt-10 w-full flex-start">
        <p className="desc">
          Currently, my interest is mostly within the web development side of
          things. I am currently learning the Next.js Framework and really
          enjoying it. Some of the things I really enjoy about Next.js include
          how easy it is to create a Full-Stack Web Application using the
          Framework because it allows for easy integration of APIs.
        </p>
      </section>
      <section className="pt-10 flex w-full justify-start flex-row">
        <FactCard
          text="This portfolio website was developed using
          React, Next.js 13, Tailwind and MongoDB!"
        />
        <p className="pl-4">
          Even though my interest is mostly within web development, I also
          really enjoy software development. I am currently knowledgeable of C#
          (ASP.NET) and Python which I have used to build a variety of
          applications as can be seen from the projects that I have developed. I
          am currently working on upgrading my C# and Python skills because of
          the new versions that have been released for both of these languages
          (C# 12 and Python 3.11).
        </p>
      </section>
      <section className="pt-10 w-full flex-start">
        <p className="desc">
          I have also recently been gaining knowledge of mobile application
          development. This includes learning about mobile development
          frameworks such as Kotlin (Java), Flutter (Dart), React Native (React)
          and more. My interest in mobile development comes from when I first
          learned about how powerful the use of Progressive Web Apps (PWAs) can
          be for web applications. Then, after that, I started researching about
          Flutter because of a friend introducing me to the framework. Flutter
          is a framework developed on top of the Dart programming language and
          uses Material Design which is owned by Google.
        </p>
      </section>
      <section className="pt-10 flex w-full justify-start flex-row gap-2">
        <LearnMoreCard
          text="The source code for this website is available on
            my GitHub aswell as many of my other projects!"
          button={learnMoreButtons[0]}
        />
        <LearnMoreCard
          text="I enjoy documenting what I am currently developing and also enjoy 
          sharing my travel adventures!"
          button={learnMoreButtons[1]}
        />
      </section>
      <section className="pt-10 w-full flex-start">
        <p className="desc">
          I have been enjoying learning more about desktop applications and how
          they are developed. This includes learning about some of the desktop
          application development frameworks such as Electron.js, C# (Windows
          Applications), and more. The curiosity of desktop development and
          understanding the process and frameworks available for desktop
          development comes from using applications such as Slack, Spotify, etc.
          and understanding how these work and how these applications were
          developed.
        </p>
      </section>
      <section className="pt-10 w-full flex-start">
        <p className="desc">
          As well as all of the development things, I have also been enjoying
          learning the processes available for Continuous Integration of new
          features and Continuous Delivery/Deployment of these features is
          achieved on such a large scale. This process is known as CI/CD and is
          mostly used along side DevOps practices. I have been quite enjoying
          learning all about the tools available for making the DevOps practices
          possible for organizations to continually develop and update their
          applications. Some of the tools I have some knowledge of include
          Kubernetes (including Kubectl), Ansible, AWS, Azure and Jenkins. I am
          hoping to learn more about these tools and some of the other tools
          such as Terraform.
        </p>
      </section>
    </div>
  );
};

export default About;
