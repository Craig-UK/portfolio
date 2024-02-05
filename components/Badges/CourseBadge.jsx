import Link from "next/link";
import React from "react";

const CourseBadge = ({ link }) => {
  return (
    <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
      <Link href={link}>Course</Link>
    </span>
  );
};

export default CourseBadge;
