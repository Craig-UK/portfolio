import Image from "next/image";
import React from "react";
import Link from "next/link";

const BlogCard = ({
  coverImage,
  title,
  createdDate,
  author,
  summary,
  button,
}) => {
  return (
    <section className="blog_post_card">
      <div className="border border-black rounded-md">
        <Image
          src={coverImage}
          height={120}
          width={150}
          alt="Blog Cover Image"
          className="w-[10rem] h-full m-0 p-0"
        />
      </div>
      <div className="mx-3">
        <h1 className="font-extrabold font-satoshi mt-1">
            {title}
        </h1>
        <p className="font-light font-satoshi">{createdDate}</p>
        <p className="font-light font-satoshi">{author}</p>
        <p className="font-light font-satoshi mt-2">{summary}</p>
        <div className="flex justify-start gap-2 my-3">
        {button?.map((button) => (
            <button key={button.id} className="blog_view_post_btn">
              <Link href={button.href}>View Post</Link>
            </button>
          ))}
      </div>
      </div>
    </section>
  );
};

export default BlogCard;
