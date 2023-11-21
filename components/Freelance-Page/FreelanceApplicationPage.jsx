"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import PlanName from "./PlanName";
import PrivacyPolicyAndTermsSwitch from "./PrivacyPolicyAndTermsSwitch";

const FreelanceApplicationPage = () => {
  const initValues = {
    uniqueNumber: "",
    name: "",
    email: "",
    commissionPlan: "",
    message: "",
    agreedToPrivacyPolicyAndTerms: "",
  };

  const initState = { values: initValues };

  const initEnterprisePlanValues = {
    uniqueNumber: "",
    name: "",
    email: "",
    businessName: "",
    businessEmail: "",
    businessLinkedIn: "",
    commissionPlan: "",
    message: "",
    agreedToPrivacyPolicyAndTerms: "",
  };

  const initEnterprisePlanState = {
    enterprisePlanValues: initEnterprisePlanValues,
  };

  const subjects = ["Basic", "Premium", "Advanced"];

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOk, setIsOk] = useState(true);
  const [state, setState] = useState(initState);
  const [enterprisePlanState, setEnterprisePlanState] = useState(
    initEnterprisePlanState
  );
  const [isError, setIsError] = useState(false);
  const [isRequiredError, setIsRequiredError] = useState(false);
  const [selected, setSelected] = useState(subjects[0]);
  const [agreed, setAgreed] = useState(false);

  const { values, isLoading } = state;
  const { enterprisePlanValues, enterprisePlanIsLoading } = enterprisePlanState;
  let isEnterprisePlan = false;
  let uniqueID;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const plan = searchParams.get("plan");

    setSelected(plan);
  }, []);

  if (selected.toLowerCase() === "enterprise") {
    isEnterprisePlan = true;
  }

  const handleChange = ({ target }) => {
    if (isEnterprisePlan) {
      setEnterprisePlanState((prev) => ({
        ...prev,
        enterprisePlanValues: {
          ...prev.enterprisePlanValues,
          [target.name]: target.value,
        },
      }));
    } else {
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value,
        },
      }));
    }
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
      /^(http(s)?:\/\/)?([\w]+\.)?linkedin.com\/(pub|in|profile)\/([a-zA-Z0-9_-])*$/;
    const validMessageRegex =
      /^[a-zA-Z0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.\/?]*$/;
    const validNameRegex = /^[a-zA-Z \s]*$/;

    if (selected.toLowerCase() !== "enterprise") {
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
    } else {
      if (
        !enterprisePlanValues.name.match(validNameRegex) ||
        !enterprisePlanValues.businessName.match(validNameRegex)
      ) {
        setIsError(true);
        setErrorMessage("Invalid Name or invalid Business name.");
        setEnterprisePlanState((prev) => ({
          ...prev,
          enterprisePlanIsLoading: false,
        }));
        throw new Error("Invalid Name or invalid Business name.");
      }

      if (
        !enterprisePlanValues.email.match(validEmailRegex) ||
        !enterprisePlanValues.businessEmail.match(validEmailRegex)
      ) {
        setIsError(true);
        setErrorMessage("Invalid Email or invalid Business email.");
        setEnterprisePlanState((prev) => ({
          ...prev,
          enterprisePlanIsLoading: false,
        }));
        throw new Error("Invalid Email or invalid Business email.");
      }

      if (!enterprisePlanValues.message.match(validMessageRegex)) {
        setIsError(true);
        setErrorMessage("Invalid Message.");
        setEnterprisePlanState((prev) => ({
          ...prev,
          enterprisePlanIsLoading: false,
        }));
        throw new Error("Invalid Message.");
      }

      if (!enterprisePlanValues.businessLinkedIn.match(validLinkedInRegex)) {
        setIsError(true);
        setErrorMessage("Invalid LinkedIn URL.");
        setEnterprisePlanState((prev) => ({
          ...prev,
          enterprisePlanIsLoading: false,
        }));
        throw new Error("Invalid LinkedIn URL.");
      }

      if (
        !enterprisePlanValues.name ||
        !enterprisePlanValues.email ||
        !enterprisePlanValues.message ||
        !enterprisePlanValues.businessName ||
        !enterprisePlanValues.businessEmail ||
        !enterprisePlanValues.businessLinkedIn
      ) {
        setIsRequiredError(true);
        setErrorMessage("All fields are required.");
        setEnterprisePlanState((prev) => ({
          ...prev,
          enterprisePlanIsLoading: false,
        }));
        throw new Error("All fields are required.");
      }
    }

    if (agreed == false) {
      setIsRequiredError(true);
      setErrorMessage(
        "Please accept the privacy policy and terms and conditions for commissions before submitting this application form."
      );
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      setEnterprisePlanState((prev) => ({
        ...prev,
        enterprisePlanIsLoading: false,
      }));
      throw new Error(
        "Please accept the privacy policy and terms and conditions for commissions before submitting this application form."
      );
    }

    try {
      values.commissionPlan = selected;
      enterprisePlanValues.commissionPlan = selected;

      const crypto = window.crypto || window.msCrypto;
      var array = new Uint32Array(1);

      values.uniqueNumber = `${values.commissionPlan.substring(0,1).toUpperCase()}${crypto.getRandomValues(array)}`;
      enterprisePlanValues.uniqueNumber = `${values.commissionPlan.substring(0,1).toUpperCase()}${crypto.getRandomValues(array)}`

      let response;

      if(selected.toLowerCase() !== "enterprise") {
        if (agreed == true) {
          values.agreedToPrivacyPolicyAndTerms = "Agreed";
        } else {
          values.agreedToPrivacyPolicyAndTerms = "Disagreed";
        }
      } else {
        if (agreed == true) {
          enterprisePlanValues.agreedToPrivacyPolicyAndTerms = "Agreed";
        } else {
          enterprisePlanValues.agreedToPrivacyPolicyAndTerms = "Disagreed";
        }
      }

      if (selected.toLowerCase() !== "enterprise") {
        response = await fetch("/api/commissions/regular", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
      } else {
        response = await fetch("/api/commissions/enterprise", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(enterprisePlanValues),
        });
      }

      if (response.ok) {
        setState({ values: initValues });
        setEnterprisePlanState({
          enterprisePlanValues: initEnterprisePlanValues,
        });
        setMessage(
          `Application sent successfully. Thank you for your commission application for the ${selected} plan, I will get back to you as soon as possible.`
        );
        setIsOk(true);
        setIsError(false);
        if (selected.toLowerCase() !== "enterprise") {
          console.log("Sending thank you");
          const response = await fetch("/api/commissions/regular/thankyou", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
        } else {
          const response = await fetch("/api/commissions/enterprise/thankyou", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(enterprisePlanValues),
          });
        }
      } else {
        throw new Error(
          "Something went wrong while sending your commission application."
        );
      }
    } catch (e) {
      setIsError(true);
      setMessage(
        "Sorry, there was an issue sending your commission application. Please try again."
      );
      console.log(e.message);
      setIsOk(false);
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      setEnterprisePlanState((prev) => ({
        ...prev,
        enterprisePlanIsLoading: false,
      }));
    }
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        {!isEnterprisePlan ? (
          <>
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
            <label htmlFor="commissionPlan" className="px-2 pt-2">
              Commission Plan<span className="text-red-600">*</span>
            </label>
            <PlanName
              value={selected}
              plans={subjects}
              onChange={setSelected}
            />
            <label htmlFor="message" className="px-2 pt-2">
              What is your website going to be used for? Why do you need a
              website?
              <span className="text-red-600">*</span>
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
            <PrivacyPolicyAndTermsSwitch
              checked={agreed}
              onChange={setAgreed}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-full flex bg-gradient-to-r from-blue-500 to-purple-500 mt-5 w-20 font-semibold uppercase hover:from-red-500 hover:to-red-900 my-2 py-1 px-0.5 text-white transition-all"
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
          </>
        ) : (
          <>
            <label htmlFor="name" className="px-2">
              Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-input rounded-xl"
              value={enterprisePlanValues.name}
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
            <label htmlFor="businessName" className="px-2">
              Business Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="businessName"
              id="businessName"
              className="form-input rounded-xl"
              value={enterprisePlanValues.businessName}
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
              Personal Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input rounded-xl"
              value={enterprisePlanValues.email}
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
            <label htmlFor="businessEmail" className="px-2 pt-2">
              Business Email<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="businessEmail"
              id="businessEmail"
              className="form-input rounded-xl"
              value={enterprisePlanValues.businessEmail}
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
            <label htmlFor="businessLinkedIn" className="px-2 pt-2">
              Business LinkedIn<span className="text-red-600">*</span>
            </label>
            <input
              type="url"
              name="businessLinkedIn"
              id="businessLinkedIn"
              className="form-input rounded-xl"
              value={enterprisePlanValues.businessLinkedIn}
              onChange={handleChange}
              required
            ></input>
            {isRequiredError ? (
              <p className="font-bold font-satoshi text-red-600">
                LinkedIn is required.
              </p>
            ) : (
              <></>
            )}
            <label htmlFor="commission-plan" className="px-2 pt-2">
              Commission Plan<span className="text-red-600">*</span>
            </label>
            <PlanName
              value={selected}
              plans={subjects}
              onChange={setSelected}
            />
            <label htmlFor="message" className="px-2 pt-2">
              What is your website going to be used for? Why do you need a
              website?
              <span className="text-red-600">*</span>
            </label>
            <textarea
              minLength={15}
              maxLength={400}
              name="message"
              value={enterprisePlanValues.message}
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
            <PrivacyPolicyAndTermsSwitch
              checked={agreed}
              onChange={setAgreed}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-full flex bg-gradient-to-r from-blue-500 to-purple-500 mt-5 w-20 font-semibold uppercase hover:from-red-500 hover:to-red-900 my-2 py-1 px-0.5 text-white transition-all"
                disabled={
                  !enterprisePlanValues.name ||
                  !enterprisePlanValues.email ||
                  !enterprisePlanValues.message ||
                  !enterprisePlanValues.businessName ||
                  !enterprisePlanValues.businessEmail ||
                  !enterprisePlanValues.businessLinkedIn ||
                  agreed == false
                }
              >
                {enterprisePlanIsLoading ? (
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
          </>
        )}
      </form>
      <p className="text-lg font-bold">
        <span className="text-red-600">*</span> Required
      </p>
    </>
  );
};

export default FreelanceApplicationPage;
