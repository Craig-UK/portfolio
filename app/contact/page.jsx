import ContactForm from "@components/Contact-Form/ContactForm";
import React from "react";

export const metadata = {
  title: 'Contact'
}

const Contact = () => {
  return (
    <div className="flex flex-col w-4/6 mx-auto">
      <ContactForm />

      <p className="text-lg font-bold"><span className="text-red-600">*</span> Required</p>
    </div>
  );
};

export default Contact;
