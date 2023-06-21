import BlogCard from "@components/Cards/BlogCard";
import React from 'react'

const TravelBlog = () => {
  const travelBlogButton = [
    {
      href: "/travelblog",
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
        button={travelBlogButton}
      />
      <BlogCard
        coverImage={"/assets/images/scenery-1.jpg"}
        title="Blog Title"
        createdDate="21/06/2023"
        author="Craig Climie"
        summary="This is a summary of the blog post."
        button={travelBlogButton}
      />
    </div>
  );
}

export default TravelBlog