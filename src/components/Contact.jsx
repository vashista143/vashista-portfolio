import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_eedsgvt",
      "template_eaf6hkn",
      formRef.current,
      "spte_5eIipcuLvhpb"
    )
    .then(() => {
      alert("Message sent successfully 🚀");
      formRef.current.reset();
    })
    .catch(() => {
      alert("Failed to send message ❌");
    });
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0D1B4D] to-[#0d1b4d] px-4">

      {/* Glass Container */}
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row gap-10">

        {/* Background image inside container */}
        <div className="absolute inset-0 bg-[url('/hatsunebg.png')] bg-cover bg-center opacity-20"></div>

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/5 "></div>

        {/* Content */}
        <div className="relative z-10 w-full p-8 md:p-12 flex flex-col md:flex-row gap-10">

          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 text-white space-y-6">
            <h2 className="text-4xl font-bold tracking-wide">Contact</h2>

            <div>
              <p className="text-sm text-gray-400">EMAIL</p>
              <p className="text-lg">vashista.dara03@gmail.com</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">PHONE</p>
              <p className="text-lg">+91 7075975421</p>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              <a href="https://www.instagram.com/v_ista143">
                <img src="/src/assets/instagram-logo-fill-svgrepo-com.svg" className="w-6 h-6 invert" />
              </a>
              <a href="https://www.linkedin.com/in/vashista-dara/">
                <img src="/src/assets/linkedin-svgrepo-com.svg" className="w-6 h-6 invert" />
              </a>
              <a href="https://github.com/vashista143/">
                <img src="/src/assets/github-142-svgrepo-com.svg" className="w-6 h-6 invert" />
              </a>
              <a href="https://www.reddit.com/user/v_ista/">
                <img src="/src/assets/reddit-svgrepo-com.svg" className="w-8 h-8 invert" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full md:w-1/2 text-white">
<form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                className="bg-transparent border-b border-white/30 focus:border-[#00ff88] outline-none py-2 transition-all"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Email or Phone"
                className="bg-transparent border-b border-white/30 focus:border-[#00ff88] outline-none py-2 transition-all"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="bg-transparent border-b border-white/30 focus:border-[#00ff88] outline-none py-2 transition-all resize-none"
              />

              <button
                type="submit"
                className="mt-4 w-fit px-6 py-2 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] transition-all"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;