import React, { useState } from 'react';
import axios from "axios";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Contact = () => {

const SocialIconClasses =
"text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-110";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

const [formData, setFormData] = useState(initialFormData);
const [submissionStatus, setSubmissionStatus] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
  setSubmissionStatus("");
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmissionStatus("");

  try {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";
    const res = await axios.post(`${apiBaseUrl}/api/contact`, formData);
    setSubmissionStatus(res.data.message);
    setFormData(initialFormData);

  } catch (error) {
    const delivery = error.response?.data?.delivery;
    if (delivery?.email && !delivery.sms) {
      setSubmissionStatus("Email delivered, but SMS delivery failed. Please contact us by phone.");
    } else if (!delivery?.email && delivery?.sms) {
      setSubmissionStatus("SMS delivered, but email delivery failed. Please contact us by phone.");
    } else {
      setSubmissionStatus(
        error.response?.data?.message || "Unable to send your inquiry. Please try again later."
      );
    }
  } finally {
    setIsSubmitting(false);
  }
};

return (

<section
id="contact"
className="min-h-screen bg-gray-900 flex items-center justify-center p-3 sm:p-6 md:p-10 font-sans scroll-smooth"
>

<div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden w-full max-w-7xl lg:max-w-none flex flex-col lg:flex-row">

{/* LEFT SECTION */}

<div className="w-full lg:w-1/2 p-5 sm:p-8 lg:p-12 2xl:p-16 flex flex-col justify-center">

<h2 className="text-3xl sm:text-4xl 2xl:text-6xl font-bold text-white mb-8">
Get in Touch
</h2>

<form onSubmit={handleSubmit} className="space-y-7">

<div>
<label className="block text-sm md:text-base font-semibold text-gray-400 uppercase mb-2">
FIRST NAME
</label>

<input
type="text"
name="name"
required
maxLength={120}
value={formData.name}
onChange={handleChange}
placeholder="Please enter first name..."
className="w-full p-4 md:p-5 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
/>

</div>

<div>

<label className="block text-sm md:text-base font-semibold text-gray-400 uppercase mb-2">
EMAIL
</label>

<input
type="email"
name="email"
required
maxLength={254}
value={formData.email}
onChange={handleChange}
placeholder="Please enter email..."
className="w-full p-4 md:p-5 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
/>

</div>

<div>

<label className="block text-sm md:text-base font-semibold text-gray-400 uppercase mb-2">
PHONE NUMBER
</label>

<input
type="tel"
name="phone"
maxLength={30}
value={formData.phone}
onChange={handleChange}
placeholder="Please enter phone number..."
className="w-full p-4 md:p-5 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
/>

</div>

<div>

<label className="block text-sm md:text-base font-semibold text-gray-400 uppercase mb-2">
WHAT DO YOU HAVE IN MIND ?
</label>

<textarea
rows="6"
name="message"
required
maxLength={1000}
value={formData.message}
onChange={handleChange}
placeholder="Please enter query..."
className="w-full p-4 md:p-5 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
/>

</div>

<button
type="submit"
disabled={isSubmitting}
className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition duration-300 shadow-lg text-lg"
>

{isSubmitting ? "Sending..." : "Submit"}

</button>

{submissionStatus && (
  <p role="status" aria-live="polite" className="text-sm text-gray-200">
    {submissionStatus}
  </p>
)}

</form>

</div>

{/* RIGHT SECTION */}

<div className="w-full lg:w-1/2 bg-gray-700 p-5 sm:p-8 lg:p-12 2xl:p-16 flex flex-col justify-center border-l border-gray-700">

<h3 className="text-3xl sm:text-4xl 2xl:text-6xl font-semibold text-blue-400 mb-6">
Reach us at
</h3>

<p className="text-gray-300 text-lg md:text-xl mb-10 max-w-md leading-relaxed">
Near Durga Sweets, Karmeta, Jabalpur, Madhya Pradesh <br/>
India - 482001 <br/>
Phone: +91 9399466040 <br/>
Email: abhiisonii27@gmail.com
</p>

<div className="flex flex-wrap gap-5 sm:gap-8 mb-12 text-3xl md:text-4xl">

<a href="https://x.com/abhinandan32151" target="_blank" rel="noopener noreferrer">
<AiFillTwitterCircle className={SocialIconClasses} />
</a>

<a href="https://www.linkedin.com/in/abhinandan-soni-0657b427a" target="_blank" rel="noopener noreferrer">
<FaLinkedin className={SocialIconClasses} />
</a>

<a href="https://github.com/Abhinandan108-hub" target="_blank" rel="noopener noreferrer">
<FaGithub className={SocialIconClasses} />
</a>

<a href="https://www.instagram.com/elevated.abhi_vhp_108" target="_blank" rel="noopener noreferrer">
<AiFillInstagram className={SocialIconClasses} />
</a>

</div>

<div className="w-full h-64 sm:h-96 bg-gray-900 rounded-lg overflow-hidden shadow-md">

<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118049.2076046757!2d79.8804868969472!3d23.16853282210852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a8b0c611488b%3A0x6b772f939e144a1!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
width="100%"
height="100%"
style={{ border: 0 }}
allowFullScreen=""
loading="lazy"
title="Google Map"
></iframe>

</div>

</div>

</div>

</section>

);

};

export default Contact;
