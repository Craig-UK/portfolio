"use client";

import CourseBadge from "@components/Badges/CourseBadge";
import FeaturedBadge from "@components/Badges/FeaturedBadge";
import PersonalBadge from "@components/Badges/PersonalBadge";
import TutorialBadge from "@components/Badges/TutorialBadge";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const ProjectCard = ({
  id,
  title,
  featured,
  githubLink,
  languagesLogos,
  summary,
  projectLink,
  badges,
  courseOrTutorialLink
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleViewProjectButtonClick = () => {
    if (pathname === "/projects/applications/webapps")
      return router.push(`/projects/applications/webapps/${id}/${projectLink}`);
    if (pathname === "/projects/applications/mobileapps")
      return router.push(`/projects/applications/mobileapps/${id}/${projectLink}`);
    if (pathname === "/projects/applications/desktopapps")
      return router.push(`/projects/applications/desktopapps/${id}/${projectLink}`);
  };

  return (
    <section className="break-inside-avoid rounded-lg border border-gray-300 bg-white/20 pb-1 backdrop-blur-lg backdrop-filter w-full h-fit">
      <section className="flex">
        <h1 className="font-bold font-satoshi text-lg m-1 ml-2 sm:ml-2">{title}</h1>
        {/* {featured && (
          <FeaturedBadge />
        )} */}
          {Object.entries(badges)[0].map && badges[0].featured && (
            <FeaturedBadge />
          )}
      </section>
      <section className="flex ml-2 justify-start gap-2">
        {Object.entries(badges)[0].map && badges[0].course && courseOrTutorialLink && (
            <CourseBadge link={courseOrTutorialLink} />
        )}
        {Object.entries(badges)[0].map && badges[0].tutorial && courseOrTutorialLink && (
            <TutorialBadge link={courseOrTutorialLink} />
        )}
        {Object.entries(badges)[0].map && badges[0].personal && (
            <PersonalBadge />
        )}
      </section>
      <Link
        href={githubLink}
        className="font-light text-sm font-satoshi m-0 p-0 ml-2 hover:underline"
      >
        Projects GitHub Repository can be viewed here
      </Link>
      <section className="sm:flex sm:ml-2 ml-2 pt-2">
        Programming Languages/Frameworks used:
        {languagesLogos?.map((logo) => (
            <Image
                key={logo}
                src={logo}
                alt="Programming Language/Framework Logo"
                width={50}
                height={50}
                className="sm:m-1 sm:ml-2 m-1 pt-1"
            />
        ))}
      </section>
      <p className="sm:mt-5 sm:ml-2 pb-2 ml-2">{summary}</p>
      <section className="flex justify-center">
        <button
          className="blog_view_post_btn"
          onClick={handleViewProjectButtonClick}
        >
          View Project
        </button>
      </section>
    </section>
  );
};

export default ProjectCard;
