import BlogCard from "@components/Cards/BlogCard";
import FactCard from "@components/Cards/FactCard";
import React from "react";

const DevBlog = () => {
  const devBlogButton = [
    {
      href: "/devblog",
    },
  ];

  return (
    <div className="flex w-full gap-2">
      <BlogCard
        coverImage={"/assets/images/scenery-1.jpg"}
        title="Blog Title"
        createdDate="21/06/2023"
        author="Craig Climie"
        summary="This is a summary of the blog post."
        button={devBlogButton}
      />
      <BlogCard
        coverImage={"/assets/images/scenery-1.jpg"}
        title="Blog Title"
        createdDate="21/06/2023"
        author="Craig Climie"
        summary="This is a summary of the blog post."
        button={devBlogButton}
      />
    </div>
  );
};

export default DevBlog;
