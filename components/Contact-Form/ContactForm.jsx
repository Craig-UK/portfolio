"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [isOk, setIsOk] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: String(e.target.name.value),
      email: String(e.target.email.value),
      phone: String(e.target.phone.value),
      linkedin: String(e.target.linkedin.value),
      message: String(e.target.message.value),
    };

    const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

    console.log(response);

    if (response.ok) {
      console.log("Message sent successfully");
      e.target.name.value = "";
      e.target.email.value = "";
      e.target.phone.value = "";
      e.target.linkedin.value = "";
      e.target.message.value = "";
      setMessage("Message sent successfully. Thank you for contacting me, I will get back to you as soon as possible.")
      setIsOk(true);
    } else {
      console.log("Error sending message");
      setMessage("Sorry, there was an issue sending your message. Please try again.")
      setIsOk(false);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label htmlFor="name" className="px-2">
        Name<span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="form-input rounded-xl"
        required
      ></input>
      <label htmlFor="email" className="px-2 pt-2">
        Email<span className="text-red-600">*</span>
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="form-input rounded-xl"
        required
      ></input>
      <label htmlFor="phone" className="px-2 pt-2">
        Phone Number
      </label>
      <input
        maxLength={11}
        type="tel"
        name="phone"
        id="phone"
        className="form-input rounded-xl"
      ></input>
      <label htmlFor="linkedin" className="px-2 pt-2">
        LinkedIn URL
      </label>
      <input
        type="url"
        name="linkedin"
        id="linkedin"
        className="form-input rounded-xl"
      ></input>
      <label htmlFor="message" className="px-2 pt-2">
        Message<span className="text-red-600">*</span>
      </label>
      <textarea
        minLength={15}
        maxLength={400}
        name="message"
        className="form-textarea rounded-xl"
      ></textarea>
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-lg flex border mt-5 border-gray-600 w-20 hover:bg-gray-900 hover:text-white"
        >
          <span className="ml-4">Send</span>{" "}
          <ArrowRightIcon className="mt-1.5" width={15} height={15} />
        </button>
      </div>
      <div>
        {isOk ? (
          <p className="text-green-500">{message}</p>
        ): (
          <p className="text-red-500">{message}</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
