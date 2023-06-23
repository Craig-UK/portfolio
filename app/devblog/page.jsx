import DevBlogPosts from "@components/Blog/DevBlogPosts";
import BlogCard from "@components/Cards/BlogCard";
import React from "react";

const DevBlog = () => {
  const devBlogButton = [
    {
      href: "/devblog",
    },
  ];

  return (
    <div className="flex w-full gap-2">
      <DevBlogPosts />
    </div>
  );
};

export default DevBlog;
