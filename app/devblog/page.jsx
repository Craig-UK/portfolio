import DevBlogPosts from "@components/Blog/DevBlogPosts";
import React from "react";

export const metadata = {
  title: 'Dev Blog'
}

const DevBlog = () => {
  return (
    <div className="flex w-full gap-2">
      <DevBlogPosts />
    </div>
  );
};

export default DevBlog;
