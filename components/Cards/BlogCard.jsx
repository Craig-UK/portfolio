"use client";

import Image from "next/image";
import React from "react";
import getFormattedDate from "@utils/getFormattedDate";
import { usePathname, useRouter } from "next/navigation";

const BlogCard = ({
  coverImage,
  title,
  createdDate,
  author,
  summary,
  button,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const formattedDate = getFormattedDate(createdDate);

  const handleViewPostButtonClick = () => {
    if(pathname === "/devblog") return router.push(`/devblog/${button}`);
    if(pathname === "/travelblog") return router.push(`/travelblog/${button}`);
  };

  return (
    <section className="blog_post_card bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="border border-black rounded-md">
        <Image
          src={coverImage}
          height={150}
          width={150}
          alt="Blog Cover Image"
          className="w-full h-full m-0 p-0 object-fill"
        />
      </div>
      <div className="mx-3">
        <h1 className="font-extrabold font-satoshi mt-1">{title}</h1>
        <p className="font-light font-satoshi">{formattedDate}</p>
        <p className="font-light font-satoshi">{author}</p>
        <p className="font-light font-satoshi mt-2">{summary}</p>
        <div className="flex justify-start gap-2 my-3">
          <button className="blog_view_post_btn" onClick={handleViewPostButtonClick}>
            View Post
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
