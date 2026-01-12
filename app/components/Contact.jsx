import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { motion, stagger } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const fireConfetti = () => {
    confetti({
      particleCount: 80,
      angle: 90,
      spread: 55,
      startVelocity: 35,
      origin: { y: 0.7 },
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "c94ea70d-4812-4615-880b-29f95a90243c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      fireConfetti();
      setResult("Message sent successfully ✨");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col">
      <motion.div
        id="contact"
        className="w-full px-[12%] lg:py-10 scroll-mt-20 flex-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-nunito font-semibold">
              Let&apos;s connect
            </h2>
            <p className="max-w-md">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities! Feel free to reach out using the form or through
              my social media channels.
            </p>
            <motion.div
              className="flex gap-6 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delayChildren: stagger(0.2), duration: 0.6 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/iaroslavagoncharova/"
                target="_blank"
                className="p-3 rounded-xl hover:shadow-(--shadow-dark) hover:-translate-y-1 border border-(--border) hover:bg-(--accent)/10 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src={assets.linkedin}
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </motion.a>

              <motion.a
                href="https://github.com/iaroslavagoncharova"
                target="_blank"
                className="p-3 rounded-xl hover:shadow-(--shadow-dark) hover:-translate-y-1 border border-(--border) hover:bg-(--accent)/10 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image src={assets.git} alt="GitHub" className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="mailto:iaroslava.goncharova@gmail.com"
                className="p-3 rounded-xl hover:shadow-(--shadow-dark) hover:-translate-y-1 border border-(--border) hover:bg-(--accent)/10 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Image src={assets.mail} alt="Email" className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            className="w-full max-w-lg space-y-5 rounded-2xl p-8 text-center lg:text-left mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="flex-1 w-full rounded-lg border border-(--border) bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--accent)/30"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-1 w-full rounded-lg border border-(--border) bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--accent)/30"
              />
            </div>

            <textarea
              name="message"
              rows={4}
              required
              placeholder="Enter your message"
              className="w-full rounded-lg border border-(--border) bg-transparent px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-(--accent)/30"
            />
            {result && (
              <motion.p
                className="text-sm mt-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {result}
              </motion.p>
            )}
            <button
              type="submit"
              className="
              w-full mt-4 font-nunito
              rounded-full bg-(--accent) text-white border border-white/20 shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:shadow-[0_10px_26px_rgba(0,0,0,0.35)] hover:-translate-y-px active:translate-y-px
                px-6 py-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
              "
              disabled={result === "Sending..."}
            >
              Send message
            </button>
          </motion.form>
        </div>
      </motion.div>
      <motion.footer
        className="w-full py-6 mt-auto border-t border-(--border)/70 text-center text-sm text-(--primary)/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        &copy; {new Date().getFullYear()} Iaroslava Goncharova. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default Contact;
