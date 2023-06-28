"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const FeatureCard = ({
  title,
  featured,
  githubLink,
  languagesLogos,
  summary,
  projectLink,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleViewProjectButtonClick = () => {
    if (pathname === "/projects/applications/webapps")
      return router.push(`/projects/applications/webapps/${projectLink}`);
    if (pathname === "/projects/applications/mobileapps")
      return router.push(`/projects/applications/mobileapps/${projectLink}`);
    if (pathname === "/projects/applications/desktopapps")
      return router.push(`/projects/applications/desktopapps/${projectLink}`);
  };

  return (
    <section className="break-inside-avoid rounded-lg border border-gray-300 bg-white/20 pb-1 backdrop-blur-lg backdrop-filter w-full h-fit">
      <section className="flex">
        <h1 className="font-bold font-satoshi text-lg m-1 ml-2">{title}</h1>
        {featured && (
          <div className="bg-purple-500 rounded-full px-2 py-0 my-1">
            <p className="text-gray-200 font-semibold">Featured</p>
          </div>
        )}
      </section>
      <Link
        href={githubLink}
        className="font-light text-sm font-satoshi m-0 p-0 ml-2"
      >
        {githubLink}
      </Link>
      <section className="flex">
        {languagesLogos?.map((logo) => (
            <Image
                key={logo}
                src={logo}
                alt="Programming Language/Framework Logo"
                width={50}
                height={50}
                className="m-1 ml-2"
            />
        ))}
      </section>
      <p className="mt-5 ml-2">{summary}</p>
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

export default FeatureCard;
