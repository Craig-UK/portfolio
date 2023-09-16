"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import SubjectList from "../Contact-Form/SubjectList";
import PrivacyPolicySwitch from "../Contact-Form/PrivacyPolicySwitch";
import PlanName from "./PlanName";
import PrivacyPolicyAndTermsSwitch from "./PrivacyPolicyAndTermsSwitch";

const FreelanceApplicationPage = () => {
  const initValues = {
    name: "",
    email: "",
    commissionPlan: "",
    message: "",
    agreedToPrivacyPolicy: "",
  };

  const initState = { values: initValues };

  const subjects = ["Basic","Premium","Advanced"];

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOk, setIsOk] = useState(true);
  const [state, setState] = useState(initState);
  const [isError, setIsError] = useState(false);
  const [isRequiredError, setIsRequiredError] = useState(false);
  const [selected, setSelected] = useState(subjects[0]);
  const [agreed, setAgreed] = useState(false);

  const { values, isLoading } = state;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const plan = searchParams.get("plan");

    setSelected(plan);
  }, []);

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
      values.commissionPlan = selected;

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
        <label htmlFor="subject" className="px-2 pt-2">
          Commission Plan<span className="text-red-600">*</span>
        </label>
        <PlanName 
            value={selected} 
            plans={subjects} 
            onChange={setSelected} 
        />
        <label htmlFor="message" className="px-2 pt-2">
          What is your website going to be used for? Why do you need a website?<span className="text-red-600">*</span>
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
        <PrivacyPolicyAndTermsSwitch checked={agreed} onChange={setAgreed} />
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
      <p className="text-lg font-bold">
        <span className="text-red-600">*</span> Required
      </p>
    </>
  );
};

export default FreelanceApplicationPage;
