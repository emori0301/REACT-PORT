import React from 'react';

const ContactForm = () => {
  const handleContactButtonClick = () => {
    window.location.href = 'mailto:gringin31@gmail.com';
  };

  return (
    <button onClick={handleContactButtonClick} className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">Contact</button>
  );
};

export default ContactForm;
