"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const ContactForm = () => {
  const initValues = {
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    message: "",
  };

  const initState = {values: initValues};

  const [message, setMessage] = useState("");
  const [isOk, setIsOk] = useState(true);
  const [state, setState] = useState(initState);
  const [isError, setIsError] = useState(false);
  const [isRequiredError, setIsRequiredError] = useState(false);

  const { values, isLoading } = state;

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setState((prev) => ({
      ...prev,
      isLoading: true
    }))

    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(!values.email.match(validEmailRegex)) {
      setIsError(true)
    }

    const validLinkedInRegex = /^https?:\/\/www\.linkedin\.com\/(?:in|pub|public-profile\/in|public-profile\/pub)\/(?:[\w]{6}-[\w]{1,}-[\w]+)*$/
    const validPhoneRegex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/

    if(values.phone !== "" && !values.phone.match(validPhoneRegex)) {
      setIsError(true)
    }

    if(values.linkedin !== "" && !values.linkedin.match(validLinkedInRegex)) {
      setIsError(true)
    }

    if(!values.name || !values.email || !values.message) {
      setIsRequiredError(true)
    }

    const response = await fetch("/api/contact", {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      setState({ values: initValues })
      setMessage("Message sent successfully. Thank you for contacting me, I will get back to you as soon as possible.")
      setIsOk(true);
      setIsError(false);
    } else {
      setMessage("Sorry, there was an issue sending your message. Please try again.")
      setIsOk(false);
      setState({ isLoading: false })
      setIsError(false);
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
        value={values.name}
        onChange={handleChange}
        required
      ></input>
      {isRequiredError ? (
        <p className="font-bold font-satoshi text-red-600">Name is required.</p>
      ): (
        <></>
      )}
      <label htmlFor="email" className="px-2 pt-2">
        Email<span className="text-red-600">*</span>
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="form-input rounded-xl"
        value={values.email}
        onChange={handleChange}
        required
      ></input>
      {isError ? (
        <p className="font-bold font-satoshi text-red-600">Please enter a valid email.</p>
      ): (
        <></>
      )}
      {isRequiredError ? (
        <p className="font-bold font-satoshi text-red-600">Email is required.</p>
      ): (
        <></>
      )}
      <label htmlFor="phone" className="px-2 pt-2">
        Phone Number
      </label>
      <input
        maxLength={16}
        type="tel"
        name="phone"
        id="phone"
        value={values.phone}
        onChange={handleChange}
        className="form-input rounded-xl"
      ></input>
      {isError ? (
        <p className="font-bold font-satoshi text-red-600">Invalid Phone Number.</p>
      ): (
        <></>
      )}
      <label htmlFor="linkedin" className="px-2 pt-2">
        LinkedIn URL
      </label>
      <input
        type="url"
        name="linkedin"
        id="linkedin"
        value={values.linkedin}
        onChange={handleChange}
        className="form-input rounded-xl"
      ></input>
      {isError ? (
        <p className="font-bold font-satoshi text-red-600">Invalid LinkedIn URL.</p>
      ): (
        <></>
      )}
      <label htmlFor="message" className="px-2 pt-2">
        Message<span className="text-red-600">*</span>
      </label>
      <textarea
        minLength={15}
        maxLength={400}
        name="message"
        value={values.message}
        onChange={handleChange}
        className="form-textarea rounded-xl"
      ></textarea>
      {isRequiredError ? (
        <p className="font-bold font-satoshi text-red-600">Message is required.</p>
      ): (
        <></>
      )}
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-lg flex border mt-5 border-gray-600 w-20 hover:bg-gray-900 hover:text-white"
          disabled={!values.name || !values.email || !values.message}
        >
          {isLoading ? (
            <>
              <span className="ml-2">Sending...</span>{" "}
            </>
          ): (
            <>
              <span className="ml-4">Send</span>{" "}
              <ArrowRightIcon className="mt-1.5" width={15} height={15} />
            </>
          )}
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
