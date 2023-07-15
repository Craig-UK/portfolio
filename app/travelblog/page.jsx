import TravelBlogPosts from "@components/Blog/TravelBlogPosts";
import React from "react";

export const metadata = {
  title: 'Travel Blog'
}

const TravelBlog = () => {
  return (
    <div className="flex w-full gap-2">
      <TravelBlogPosts />
    </div>
  );
};

export default TravelBlog;
