import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col w-4/6">
      <form className="flex flex-col">
        <label className="px-2">
          Name<span className="text-red-600">*</span>
        </label>
        <input type="text" className="form-input rounded-xl" required></input>
        <label className="px-2 pt-2">
          Email<span className="text-red-600">*</span>
        </label>
        <input type="email" className="form-input rounded-xl" required></input>
        <label className="px-2 pt-2">
          Phone Number
        </label>
        <input type="tel" className="form-input rounded-xl"></input>
        <label className="px-2 pt-2">
          LinkedIn URL
        </label>
        <input type="url" className="form-input rounded-xl"></input>
        <label className="px-2 pt-2">
          Message<span className="text-red-600">*</span>
        </label>
        <textarea className="form-textarea rounded-xl"></textarea>
        <div className="flex justify-end">
            <button className="rounded-lg flex border mt-5 border-gray-600 w-20 hover:bg-gray-900 hover:text-white">
              <span className="ml-4">Send</span> <ArrowRightIcon className="mt-1.5" width={15} height={15} />
            </button>
        </div>
      </form>

      <p className="text-lg font-bold"><span className="text-red-600">*</span> Required</p>
    </div>
  );
};

export default Contact;
