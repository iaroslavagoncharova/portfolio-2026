import { assets, experience, experienceByYear } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion, stagger } from "motion/react";

const Experience = () => {
  return (
    <div id="experience" className="w-full px-[12%] py-16 scroll-mt-10">
      <motion.h2
        className="text-center text-4xl font-nunito"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 my-10 md:my-16 items-start"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delayChildren: stagger(0.2), duration: 0.8 }}
      >
        {experienceByYear.map((yearBlock, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[min-content_1fr] gap-4 lg:gap-8"
          >
            <div className="text-xl font-semibold text-(--accent)">
              {yearBlock.year}
            </div>

            <div className="space-y-6">
              {yearBlock.companies.map((company, j) => (
                <div key={j} className="space-y-2">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-snug">
                      {company.name}
                      {company.websiteLink && (
                        <a
                          href={company.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center ml-2 translate-y-px opacity-70 hover:opacity-100 transition"
                        >
                          <Image
                            src={assets.open}
                            alt="Company website"
                            className="w-4 h-4"
                          />
                        </a>
                      )}
                    </h3>
                    <p className="text-xs text-muted">{company.location}</p>
                  </div>

                  <div className="space-y-3">
                    {company.roles.map((role, k) => (
                      <motion.div
                        key={k}
                        className="space-y-1 pl-4 border-l-2 border-(--accent)/30 transition-colors duration-300 hover:border-(--accent)"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 * k }}
                      >
                        <h4 className="text-sm font-semibold tracking-wide">
                          {role.title}
                        </h4>
                        {role.duration && (
                          <div className="text-xs text-(--primary)/70">
                            {role.duration}
                          </div>
                        )}
                        <ul className="space-y-1">
                          {role.bullets.map((bullet, b) => (
                            <li
                              key={b}
                              className="text-sm text-muted flex gap-2"
                            >
                              <span className="text-accent">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
