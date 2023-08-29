"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SubjectList from "./SubjectList";
import { Switch } from "@headlessui/react";
import Link from "next/link";
import PrivacyPolicySwitch from "./PrivacyPolicySwitch";
import FAQAccordion from "./FAQAccordion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const subjects = [
  {
    id: 1,
    name: "General",
  },
  {
    id: 2,
    name: "Projects",
  },
];

const ContactForm = () => {
  const initValues = {
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    subject: "",
    message: "",
    agreedToPrivacyPolicy: "",
  };

  const initState = { values: initValues };

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOk, setIsOk] = useState(true);
  const [state, setState] = useState(initState);
  const [isError, setIsError] = useState(false);
  const [isRequiredError, setIsRequiredError] = useState(false);
  const [selected, setSelected] = useState(subjects[0]);
  const [agreed, setAgreed] = useState(false);

  const { values, isLoading } = state;

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    const validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validLinkedInRegex =
      /^https?:\/\/www\.linkedin\.com\/(?:in|pub|public-profile\/in|public-profile\/pub)\/(?:[\w]{6}-[\w]{1,}-[\w]+)*$/;
    const validPhoneRegex =
      /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
    const validMessageRegex =
      /^[a-zA-Z0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.\/?]*$/;
    const validNameRegex = /^[a-zA-Z \s]*$/;

    if (!values.name.match(validNameRegex)) {
      setIsError(true);
      setErrorMessage("Invalid Name.");
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      throw new Error("Invalid Name.");
    }

    if (!values.email.match(validEmailRegex)) {
      setIsError(true);
      setErrorMessage("Invalid Email.");
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      throw new Error("Invalid Email.");
    }

    if (!values.message.match(validMessageRegex)) {
      setIsError(true);
      setErrorMessage("Invalid Message.");
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      throw new Error("Invalid Message.");
    }

    if (values.phone !== "" && !values.phone.match(validPhoneRegex)) {
      setIsError(true);
      setErrorMessage("Invalid Phone Number.");
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      throw new Error("Invalid Phone Number.");
    }

    if (values.linkedin !== "" && !values.linkedin.match(validLinkedInRegex)) {
      setIsError(true);
      setErrorMessage("Invalid LinkedIn URL.");
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      throw new Error("Invalid LinkedIn URL.");
    }

    if (!values.name || !values.email || !values.message) {
      setIsRequiredError(true);
      setErrorMessage("Name, email and message fields are required.");
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      throw new Error("Name, email and message fields are required.");
    }

    if (agreed == false) {
      setIsRequiredError(true);
      setErrorMessage(
        "Please accept the privacy policy before submitting this contact form."
      );
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      throw new Error(
        "Please accept the privacy policy before submitting this contact form."
      );
    }

    try {
      values.subject = selected.name;

      if (agreed == true) {
        values.agreedToPrivacyPolicy = "Agreed";
      } else {
        values.agreedToPrivacyPolicy = "Disagreed";
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setState({ values: initValues });
        setMessage(
          "Message sent successfully. Thank you for contacting me, I will get back to you as soon as possible."
        );
        setIsOk(true);
        setIsError(false);
        const response = await fetch("/api/contact/thankyou", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
      } else {
        throw new Error("Something went wrong while sending the message.");
      }
    } catch (e) {
      setIsError(true);
      setMessage(
        "Sorry, there was an issue sending your message. Please try again."
      );
      console.log(e.message);
      setIsOk(false);
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  return (
    <>
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
          <p className="font-bold font-satoshi text-red-600">
            Name is required.
          </p>
        ) : (
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
        {isRequiredError ? (
          <p className="font-bold font-satoshi text-red-600">
            Email is required.
          </p>
        ) : (
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
        <label htmlFor="subject" className="px-2 pt-2">
          Subject<span className="text-red-600">*</span>
        </label>
        <SubjectList
          value={selected}
          onChange={setSelected}
          subjects={subjects}
        />
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
          <p className="font-bold font-satoshi text-red-600">
            Message is required.
          </p>
        ) : (
          <></>
        )}
        <PrivacyPolicySwitch checked={agreed} onChange={setAgreed} />
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg flex border mt-5 border-gray-600 w-20 hover:bg-gray-900 hover:text-white"
            disabled={
              !values.name ||
              !values.email ||
              !values.message ||
              agreed == false
            }
          >
            {isLoading ? (
              <>
                <span className="ml-2">Sending...</span>{" "}
              </>
            ) : (
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
          ) : (
            <p className="text-red-500">{message}</p>
          )}
          {errorMessage ? (
            <p className="font-bold text-red-500">{errorMessage}</p>
          ) : (
            <></>
          )}
        </div>
      </form>
      <p className="text-lg font-bold"><span className="text-red-600">*</span> Required</p>
      <section className="mt-5">
        <h1 className="flex justify-center text-6xl font-bold font-satoshi">FAQ</h1>
        <FAQAccordion />
      </section>
    </>
  );
};

export default ContactForm;
