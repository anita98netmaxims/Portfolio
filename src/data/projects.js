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

    longDescription:
      "MyCPM is the internal HR & workforce app used company-wide, live on the Play Store with a 4.4★ rating and 10K+ downloads. Employees use it to mark geo-verified attendance, view leave records (Casual / Earned / Sick), download payslips, raise PF & medical claims, and take part in company surveys. Recent updates added multi-office attendance marking, a work-hours tracker, and a profile photo preview flow.",

    images: [mycpm1, mycpm2],

    tech: [
      "React Native",
      "Expo",
      "Redux",
      "Firebase",
      "REST API",
    ],

    live: "https://play.google.com/store/apps/details?id=com.cpminit.MYCPMAPP&hl=en_IN",
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