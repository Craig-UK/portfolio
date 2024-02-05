import ContactForm from "@components/Contact-Form/ContactForm";

export const metadata = {
  title: 'Contact'
}

const Contact = () => {
  return (
    <div className="flex flex-col w-4/6 mx-auto">
      <ContactForm />
    </div>
  );
};

export default Contact;
