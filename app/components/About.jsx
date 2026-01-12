import { aboutBullets, info } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] lg:py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-center text-4xl font-nunito"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        About me
      </motion.h2>
      <motion.div
        className="grid w-full grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 my-10 md:my-20 items-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="max-w-2xl font-nunito mb-8">
            I&apos;m a Junior Web & Mobile Developer with hands-on experience in
            frontend development, product operations, and customer support. I
            build user-centric applications that solve real-life challenges,
            continuously improving features, processes, and experiences.
          </p>
          <ul className="space-y-5">
            {aboutBullets.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--accent) block" />
                <div>
                  <h4 className="font-medium text-xs uppercase tracking-wider text-[var(--background)/70]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--background)/70]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="max-w-xl space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="space-y-12">
            <motion.ul
              className="grid sm:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {info.map((item, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-(--border) p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-dark) bg-(--background) bg-opacity-50"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 mb-4"
                  />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
