import { FiFacebook, FiYoutube, FiLinkedin } from "react-icons/fi";
import { FaInstagram, FaPinterestP } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");

  const icons = [
    FiFacebook,
    FaInstagram,
    SlSocialTwitter,
    FiLinkedin,
    FiYoutube,
    FaPinterestP,
  ];
  const infos = [
    "About Us",
    "Terms and Conditions",
    "Privacy Policy",
    "Return Policy",
    "Shipping Policy",
    "Cancellation Policy",
    "International Delivery",
    "For Businesses, Hotels and Resorts",
  ];

  const handleSubscription = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_7k25jc1",
        "template_tpkhfgn",
        { email },
        "9Kn8AUNmMdrNubQhs"
      )
      .then(
        (response) => {
          if (response) {
            toast("Email subscribed successfully!", {
              type: "success",
            });
            setEmail("");
          }
        },
        (error) => {
          alert("Failed to subscribe. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="py-10 px-5 sm:px-10 bg-green-800/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Contact Information Section */}
      <div className="text-gray-600">
        <h3 className="base_text text-3xl font-bold">Get in touch</h3>
        <p className="my-5">support@amrutam.co.in</p>
        <p className="mb-5 text-lg">
          Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar,
          Gwalior - 474001
        </p>
        <p className="text-lg">+91 9713171999</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-800/80 text-white text-xl"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div className="flex justify-center md:justify-start items-center">
        <div>
          <h3 className="base_text text-3xl font-bold">Information</h3>
          <ul className="my-5 space-y-2">
            {infos.map((info, index) => (
              <li
                key={index}
                className="text-gray-600 hover:text-green-700 cursor-pointer"
              >
                {info}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div>
        <h3 className="base_text text-3xl font-bold">
          Subscribe to our Newsletter and join Amrutam Family today!
        </h3>
        <form
          onSubmit={handleSubscription}
          className="mt-5 flex flex-col sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full rounded-md sm:rounded-l-full"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-black text-white font-bold rounded-md sm:rounded-r-full w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
