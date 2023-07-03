import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg">Feel free to get in touch with me. You can reach me via email or through the social media links below:</p>
      <ul className="mt-4 space-y-2">
        <li>Email: keston.antonio.schmidtgen@gmail.com</li>
        {/* Add other contact details */}
      </ul>
    </div>
  );
};

export default Contact;
