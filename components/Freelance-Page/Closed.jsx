"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Closed = () => {
  const router = useRouter();
  const commissionStatus = "closed";

  if (commissionStatus === "open") {
    router.push("/freelance");
  }

  return (
    <div className="flex flex-col items-center">
      Commissions are currently closed, please try again another time.
    </div>
  );
};

export default Closed;
