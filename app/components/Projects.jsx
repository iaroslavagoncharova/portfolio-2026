import { projects, assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  const buttonText = (type) => {
    switch (type) {
      case "github":
        return "GitHub";
      case "external":
        return "Check out";
      default:
        return "Coming soon";
    }
  };
  const buttonIcon = (type) => {
    switch (type) {
      case "github":
        return assets.open;
      case "external":
        return assets.open_white;
      default:
        return null;
    }
  };
  return (
    <motion.div
      id="projects"
      className="w-full px-[12%] lg:py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-center text-4xl font-nunito mb-12"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="group rounded-2xl overflow-hidden border border-(--border) transition-shadow duration-300 hover:shadow-(--shadow-dark)"
          >
            <div className="relative w-full aspect-4/3 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="transition-opacity duration-300"
              />
            </div>

            <div className="p-5 space-y-4 flex flex-col">
              <div>
                <h3 className="text-base font-semibold text-center">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mt-1 text-center">
                  {project.description}
                </p>
              </div>
              <div className="h-px w-12 bg-(--border) mx-auto" />

              <div className="flex flex-wrap gap-3 justify-center">
                {project.tech.map((tech, j) => (
                  <Image
                    key={j}
                    src={project.tech[j]}
                    alt={tech}
                    className="w-8 h-8 rounded-lg  p-1 group-hover:opacity-100 transition duration-200"
                  />
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!project.linkType) e.preventDefault();
                }}
                className={`
                  inline-flex items-center gap-3 px-5 py-2.5 rounded-full ${
                    project.linkType === "external"
                      ? "bg-(--accent) text-white border border-white/2"
                      : "border border-(--border) text-(--accent)"
                  } font-nunito 0 shadow-[0_6px_16px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:shadow-[0_10px_26px_rgba(0,0,0,0.35)] self-center focus:outline-none focus:ring-2 focus:ring-(--accent)/30
                `}
              >
                {buttonText(project.linkType)}
                {project.linkType && (
                  <Image
                    src={buttonIcon(project.linkType)}
                    alt="open link"
                    className="w-4 h-4"
                  />
                )}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
