import mycpm1 from "../assets/screenshots/mycpm1.png";
import mycpm2 from "../assets/screenshots/mycpm2.png";

import performics1 from "../assets/screenshots/performics1.png";
import performics2 from "../assets/screenshots/performics2.png";

import motherfruits1 from "../assets/screenshots/motherfruits1.png";
import motherfruits2 from "../assets/screenshots/motherfruits2.png";
import motherfruits3 from "../assets/screenshots/motherfruits3.png";

export const projects = [
  {
    id: 1,
    title: "MyCPM",
    category: "Employee Management",
    description:
      "Employee Management application for 8500+ employees across India.",

    images: [mycpm1, mycpm2],

    tech: [
      "React Native",
      "Expo",
      "Redux",
      "Firebase",
      "REST API",
    ],
  },

  {
    id: 2,
    title: "Performics",
    category: "Retail Audit",

    description:
      "Retail audit & promoter management application with offline SQLite support.",

    images: [performics1, performics2],

    tech: [
      "React Native",
      "SQLite",
      "Redux",
      "REST API",
    ],
  },

  {
    id: 3,

    title: "MotherFruits",

    category: "E-Commerce",

    description:
      "Online fresh fruits & vegetables ordering application with secure checkout and delivery.",

    images: [
      motherfruits1,
      motherfruits2,
      motherfruits3,
    ],

    tech: [
      "React Native",
      "Firebase",
      "Redux",
      "REST API",
    ],
  },
];