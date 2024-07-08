import { useState } from 'react';
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";
import Header from "../components/Header";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.number) tempErrors.number = "Number is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.message) tempErrors.message = "Message is required";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs.send('service_7hvy40t', 'template_kbh1vob', formData, 'TtPcGUYRxvCi80eKf')
        .then((result) => {
          console.log('Email sent:', result.text);
          setSuccess(true);

          // Clear the form
          setFormData({
            name: '',
            number: '',
            email: '',
            message: '',
          });
        }, (error) => {
          console.error('Email sending error:', error.text);
        });
    }
  };

  return (
    <div className="w-screen h-full md:h-screen bg-[#121212]">
      <Header />
      <div className="mt-16 mx-5 md:flex md:space-x-1 md:justify-center md:mt-5">
        <div className="md:justify-center pl-8 md:mt-14 md:space-y-5 md:px-10">
          <h2 className="text-2xl md:text-4xl font-medium md:pt-20 text-[#0a5c36]">
            Let&apos;s chat.
            <br />
            Tell me about your project.
          </h2>
          <h3 className="text-white pt-3">
            Let&apos;s create something together&#129311;
          </h3>
          <div className="flex space-x-5 pt-5">
            <a href="https://x.com/_r4ph4ell" target="_blank" className="text-[#0a5c36]">
              <Twitter size={24} strokeWidth={1.5} color="white" />
            </a>
            <a href="https://www.linkedin.com/in/raphael-wright-8278b022a/" target="_blank" className="text-[#0a5c36]">
              <Linkedin size={24} strokeWidth={1.5} color="white" />
            </a>
            <a href="https://github.com/RaphaelWright" target="_blank" className="text-[#0a5c36]">
              <Github size={24} strokeWidth={1.5} color="white" />
            </a>
            <a href="https://www.instagram.com/w.ralphh/" target="_blank" className="text-[#0a5c36]">
              <Instagram size={24} strokeWidth={1.5} color="white" />
            </a>
          </div>
        </div>

        <div className="md:mx-auto mb-10 shadow-lg shadow-[#000000] md:w-2/6 h-auto mt-14">
          <p className="text-center text-[#0a5c36] font-medium text-2xl pt-5">
            Hit me Up!
          </p>
          <form className="flex flex-col px-1 md:px-3 w-full md:mt-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border-0 bg-[#121212] outline-none border-[#0a5c36] border-b text-[#fffff0] mb-4 px-2 py-2 md:mx-10 mx-5"
            />
            {errors.name && <p className="text-red-500 text-sm md:mx-10 mx-5">{errors.name}</p>}

            <input
              type="text"
              name="number"
              placeholder="Number"
              value={formData.number}
              onChange={handleChange}
              className="border-0 mb-4 bg-[#121212] outline-none border-b border-[#0a5c36] text-[#fffff0] px-2 py-2 md:mx-10 mx-5"
            />
            {errors.number && <p className="text-red-500 text-sm md:mx-10 mx-5">{errors.number}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border-0 mb-4 bg-[#121212] outline-none border-b border-[#0a5c36] text-[#fffff0] px-2 py-2 md:mx-10 mx-5"
            />
            {errors.email && <p className="text-red-500 text-sm md:mx-10 mx-5">{errors.email}</p>}

            <input
              type="text"
              name="message"
              placeholder="Type your message"
              value={formData.message}
              onChange={handleChange}
              className="border-0 mb-4 bg-[#121212] outline-none border-b border-[#0a5c36] text-[#fffff0] px-2 py-2 md:mx-10 mx-5"
            />
            {errors.message && <p className="text-red-500 text-sm md:mx-10 mx-5">{errors.message}</p>}

            <button
              type="submit"
              className="mx-auto bg-[#0a5c36] mt-5 mb-5 py-2 font-medium w-32 border-[#0a5c36] text-lg shadow-xl shadow-[#000000]"
            >
              Send
            </button>
            {success && <p className="text-green-700 text-center">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
