import Link from "next/link";
import React from "react";

const CourseBadge = ({ link }) => {
  return (
    <div className="bg-green-600 rounded-full px-2 py-0 my-1">
      <p className="text-gray-200 font-semibold">
        <Link href={link}>Course</Link>
      </p>
    </div>
  );
};

export default CourseBadge;
