import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { assets, tools } from "@/assets/assets";
import { animate, motion, useMotionValue } from "motion/react";

const Header = () => {
  const x = useMotionValue(0);
  const controls = useRef(null);

  useEffect(() => {
    controls.current = animate(x, ["0%", "-50%"], {
      duration: 60,
      ease: "linear",
      repeat: Infinity,
    });

    return () => controls.current?.stop();
  }, []);

  return (
    <div className="w-11/12 max-w-6xl mx-auto flex flex-col min-h-screen pb-10 md:pt-0 md:pb-0 justify-center gap-10">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 pt-20">
        <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left max-w-lg">
          <motion.h3
            className="text-xl md:text-2xl font-nunito"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hi, I&apos;m Iaroslava!
          </motion.h3>
          <motion.h1
            className="text-3xl sm:text-6xl lg:text-[66px] font-nunito text-(--accent) font-semibold"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Junior Frontend Developer
          </motion.h1>
          <motion.p
            className="text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            I have hands-on experience building beautiful and user-focused web
            and mobile applications using React, React Native, and TypeScript
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              href="#contact"
              className="hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full bg-(--accent) text-white font-nunito border border-white/20 shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:shadow-[0_10px_26px_rgba(0,0,0,0.35)] hover:-translate-y-px active:translate-y-px"
            >
              Contact me
            </motion.a>
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href=""
              className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
            >
              My resume
            </motion.a>
          </div>
        </div>

        <motion.div
          className="shrink-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image
            src={assets.profile_photo}
            alt="Profile Photo"
            className="rounded-full w-64 md:w-72 shadow-[0_10px_26px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-all duration-300"
          />
        </motion.div>
      </div>
      <motion.section
        className="relative w-full flex flex-col gap-4 items-center mb-10"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div
          className="
      pointer-events-none
      absolute inset-0
      bg-linear-to-r
      from-white/50
      via-white/70
      to-(--background)
      opacity-70
      blur-md
      rounded-xl
    "
        />
        <div className="relative w-full overflow-hidden py-6">
          <motion.div
            className="flex gap-8 w-max"
            style={{ x }}
            onHoverStart={() => controls.current?.pause()}
            onHoverEnd={() => controls.current?.play()}
          >
            {[...tools, ...tools].map((tool, i) => (
              <span
                key={i}
                className="
            flex items-center justify-center
            px-5 py-2
            text-sm text-gray-800
          "
              >
                <Image src={tool.icon} alt={tool.name} width={24} height={24} />
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Header;
