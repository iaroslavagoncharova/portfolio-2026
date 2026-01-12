import logo from "./portfolio-logo.png";
import profile_photo from "./profile-photo.jpg";
import blender from "./blender.svg";
import bluetooth from "./bluetooth.svg";
import canva from "./canva.svg";
import expo from "./expo.svg";
import figma from "./figma.svg";
import firebase from "./firebase.svg";
import flutter from "./flutter.svg";
import github from "./github.svg";
import javascript from "./javascript.svg";
import linear from "./linear.svg";
import mongodb from "./mongodb.svg";
import nextjs from "./nextjs.svg";
import node from "./node.svg";
import react_native from "./react_native.svg";
import sql from "./sql.svg";
import stripe from "./stripe.svg";
import typescript from "./typescript.svg";
import education from "./education.svg";
import stack from "./stack.svg";
import work from "./work.svg";
import git from "./git.svg";
import mail from "./mail.svg";
import linkedin from "./linkedin.svg";
import open from "./open.svg";
import open_white from "./open_white.svg";
import resty from "./resty.png";
import munchi from "./munchi.png";
import portfolio from "./portfolio.png";
import flower_house from "./flower_house.png";
import jobmein from "./jobmein.png";

export const assets = {
  logo,
  profile_photo,
  blender,
  bluetooth,
  canva,
  expo,
  figma,
  firebase,
  flutter,
  github,
  javascript,
  linear,
  mongodb,
  nextjs,
  node,
  react_native,
  sql,
  stripe,
  typescript,
  education,
  stack,
  work,
  git,
  mail,
  linkedin,
  open,
  resty,
  munchi,
  open_white,
  portfolio,
  flower_house,
  jobmein,
};

export const info = [
  {
    title: "Main stack",
    description: "React, React Native, Javascript, TypeScript",
    icon: stack,
  },
  {
    title: "Education",
    description:
      "B.Sc. in Information Technology, Web Development and Digital Media at Metropolia University of Applied Sciences",
    icon: education,
  },
  {
    title: "Experience",
    description:
      "Frontend development, mobile apps (React Native, Expo), product operations and customer support",
    icon: work,
  },
];

export const tools = [
  { name: "React Native", icon: react_native },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Next.js", icon: nextjs },
  { name: "Node.js", icon: node },
  { name: "Firebase", icon: firebase },
  { name: "MongoDB", icon: mongodb },
  { name: "SQL", icon: sql },
  { name: "Stripe", icon: stripe },
  { name: "Figma", icon: figma },
  { name: "Canva", icon: canva },
  { name: "Blender", icon: blender },
  { name: "Expo", icon: expo },
  { name: "Flutter", icon: flutter },
  { name: "GitHub", icon: github },
  { name: "Linear", icon: linear },
  { name: "Bluetooth", icon: bluetooth },
];

export const mainTools = [
  { name: "React Native", icon: react_native },
  { name: "TypeScript", icon: typescript },
  { name: "Firebase", icon: firebase },
  { name: "Figma", icon: figma },
];

export const aboutBullets = [
  {
    title: "Focus",
    description:
      "Building intuitive, user-focused interfaces for web and mobile",
  },
  {
    title: "Collaboration",
    description:
      "Comfortable working in diverse, cross-functional teams with designers, PMs and developers",
  },
  {
    title: "Problem-solving mindset",
    description:
      "Breaking down complex problems while continuously learning and improving",
  },
];

export const experienceByYear = [
  {
    year: "2025",
    companies: [
      {
        name: "Munchi",
        websiteLink: "https://www.gomunchi.com/",
        location: "Helsinki, Finland",
        roles: [
          {
            title: "Technical Account Manager",
            duration: "Sep 2025 - Nov 2025",
            bullets: [
              "Managed client accounts, onboarding, training, and 24/7 customer support",
              "Created internal documentation, improved workflows, and coordinated with sales and engineering teams to optimize operations",
            ],
          },
          {
            title: "Team Lead Associate",
            duration: "Jun 2025 - Sep 2025",
            bullets: [
              "Developed and enhanced features for Munchi One POS with React Native, collaborating with designers to incorporate user feedback",
              "Assisted with agile processes, sprint planning, documentation, and provided technical support and onboarding to clients",
            ],
          },
          {
            title: "Software Engineer Trainee",
            duration: "Jan 2025 - Jun 2025",
            bullets: [
              "Developed features for the Munchi One POS system using React Native, implementing API integrations, Bluetooth printer connectivity, and enhancing UI/UX",
              "Participated in product planning to align feature rollouts with customer needs and business goals",
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2024",
    companies: [
      {
        name: "Konica Minolta Business Solutions Finland",
        websiteLink: "https://www.konicaminolta.fi/",
        location: "Espoo, Finland",
        roles: [
          {
            title: "ITS Trainee",
            duration: "Jun 2024 - Aug 2024",
            bullets: [
              "Automated workflows using Microsoft Power Automate, SharePoint, and M-Files, and built a CSV analysis web app to improve internal accessibility",
              "Created marketing materials and presentations, supporting sales campaigns and gaining hands-on experience in IT services and industrial printing",
            ],
          },
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: "Munchi One",
    description:
      "All-in-one restaurant management platform for orders, payments, and operations",
    image: munchi,
    tech: [react_native, typescript, bluetooth, expo, figma],
    link: "https://www.gomunchi.com/products/munchi-one-pos",
    linkType: "external",
  },
  {
    title: "Resty",
    description:
      "All-in-one smart planner and wellness app for students to manage planning and self-care",
    image: resty,
    tech: [react_native, typescript, firebase, stripe, figma, node, expo],
    link: "",
    linkType: "external",
  },
  {
    title: "Flower House",
    description:
      "E-commerce mobile app for a flower shop with payment integration and confirmation emails",
    image: flower_house,
    tech: [flutter, firebase, figma, stripe, node],
    link: "https://github.com/iaroslavagoncharova/flower-house",
    linkType: "github",
  },
  {
    title: "Portfolio website",
    description:
      "You're viewing it! A personal portfolio website to showcase my projects and experience",
    image: portfolio,
    tech: [nextjs, javascript, figma],
    link: "https://github.com/iaroslavagoncharova/portfolio-2026",
    linkType: "github",
  },
  {
    title: "JobMeIn",
    description:
      "Tinder-like app for a discrimination-free job search experience",
    image: jobmein,
    tech: [react_native, typescript, figma, node, expo],
    link: "https://github.com/iaroslavagoncharova/JobMeIn",
    linkType: "github",
  },
];
