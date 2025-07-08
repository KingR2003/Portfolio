import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const contactDetails = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'harsha51913@gmail.com',
    href: 'mailto:harsha51913@gmail.com'
  },
  {
    icon: <FaPhoneAlt />,
    label: 'Phone',
    value: '+91 7899085906',
    href: 'tel:+91 7899085906'
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/Harshananda Akkasali',
    href: 'https://linkedin.com/in/harshananda-akkasali-9102b82b4/'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="pt-24 bg-gray-950 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Contact</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {contactDetails.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl hover:bg-purple-700 transition text-white"
          >
            <span className="text-lg">{item.icon}</span>
            <div>
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="text-base">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
