// pages/contact.tsx

import ContactForm from '../../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12" id='contactus'>
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
