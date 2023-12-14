"use client";

import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const CommissionStatusBanner = () => {
  const [open, setOpen] = useState(true);
  const [commissionStatus, setCommissionStatus] = useState("Closed");

  let commissionStatusMessage;

  if (commissionStatus === "Closed") {
    commissionStatusMessage = "Commissions are currently closed.";
  } else if (commissionStatus === "Open") {
    commissionStatusMessage = "Commissions are currently open.";
  }

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 mb-2 sm:px-3.5 sm:before:flex-1">
      {open && (
        <>
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className={`aspect-[577/310] w-[36.0625rem] bg-gradient-to-r ${commissionStatus === "Closed" ? 'from-red-400 to-red-900' : 'from-green-400 to-green-900'}`}
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className={`aspect-[577/310] w-[36.0625rem] bg-gradient-to-r ${commissionStatus === "Closed" ? 'from-red-400 to-red-900' : 'from-green-400 to-green-900'}`}
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900 font-bold">
              <strong>Info</strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              {commissionStatusMessage}
            </p>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
              onClick={handleClick}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CommissionStatusBanner;