
import React, { useState } from "react";
import Title from "../layouts/Title";
import emailjs from "emailjs-com";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [sending, setSending] = useState(false);

  // Email validation
  const emailValidation = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  };

  // Send email
  const handleSend = async (e) => {
    e.preventDefault();

    setErrMsg("");
    setSuccessMsg("");

    // Validation
    if (!username.trim()) {
      setErrMsg("Please enter your name!");
      return;
    }

    if (!email.trim()) {
      setErrMsg("Please enter your email!");
      return;
    }

    if (!emailValidation(email.trim())) {
      setErrMsg("Please enter a valid email address.");
      return;
    }

    if (!message.trim()) {
      setErrMsg("Message is required!");
      return;
    }

    // EmailJS template parameters
    const templateParams = {
      to_name: "Shubham",
      from_name: username.trim(),
      from_email: email.trim(),
      reply_to: email.trim(),
      phone: phoneNumber.trim(),
      subject: subject.trim() || "Portfolio Contact Request",
      message: message.trim(),
    };

    try {
      setSending(true);

      const response = await emailjs.send(
        "service_7h2n32i",
        "template_gq3i7ln",
        templateParams,
        "Nz4-ACWbM1bsHKkFQ"
      );

      console.log("Email sent successfully:", response);

      setSuccessMsg(
        `Thank you ${username}, your message has been sent successfully!`
      );

      // Reset form
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");

    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("Status:", error.status);
      console.error("Error Details:", error.text);

      setErrMsg(
        error.text || "Sorry, something went wrong. Please try again."
      );

    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Let's Work Together" />
      </div>

      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-center">

          <div className="w-full lgl:w-[80%] h-full py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg bg-white">

            <form
              onSubmit={handleSend}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >

              {/* Error Message */}
              {errMsg && (
                <p className="py-3 text-center text-[#F80000] text-base">
                  {errMsg}
                </p>
              )}

              {/* Success Message */}
              {successMsg && (
                <p className="py-3 text-center text-green-500 text-base">
                  {successMsg}
                </p>
              )}

              {/* Name and Phone */}
              <div className="w-full flex flex-col lgl:flex-row gap-10">

                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your Name
                  </p>

                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="contactInput"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>

                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="contactInput"
                    placeholder="Enter your phone number"
                  />
                </div>

              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="contactInput"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>

                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="contactInput"
                  placeholder="Enter subject"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="contactTextArea"
                  cols="30"
                  rows="8"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
