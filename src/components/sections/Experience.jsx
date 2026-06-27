import { motion } from "framer-motion";

const experience = [
  {
    company: "CPM India",
    role: "React Native Developer",
    duration: "Feb 2024 - Present",
    description:
      "Developed and maintained MyCPM Employee Management App for 8500+ employees across India using React Native, Expo, Redux, Firebase and REST APIs.",
  },
  {
    company: "Netmaxims Technologies",
    role: "React Native Developer",
    duration: "Jul 2022 - Feb 2024",
    description:
      "Built cross-platform mobile applications with React Native, Firebase, Google Maps, QR Scanner, Push Notifications and REST API integration.",
  },
  {
    company: "Psiborg Technologies",
    role: "React Native Developer Intern",
    duration: "May 2022 - Jul 2022",
    description:
      "Worked on authentication flows, native modules, debugging and REST API integration for React Native applications.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="
        py-28
        transition-colors
        duration-300

        bg-slate-50
        text-slate-900

        dark:bg-[#020617]
        dark:text-white
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 font-semibold tracking-wider">
            EXPERIENCE
          </p>

          <h2 className="text-5xl font-bold mt-4">
            My Journey
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            My professional journey as a React Native Developer.
          </p>
        </motion.div>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-5 top-0 bottom-0 w-1 bg-blue-500 rounded-full"></div>

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative flex gap-8 mb-16"
            >

              {/* Timeline Dot */}

              <div className="w-10 h-10 rounded-full bg-blue-500 border-4 border-white dark:border-slate-950 shadow-lg flex-shrink-0 z-10"></div>

              {/* Card */}

              <motion.div
                whileHover={{ y: -6 }}
                className="
                  flex-1
                  rounded-2xl
                  p-8
                  border
                  shadow-md
                  transition-all
                  duration-300

                  bg-white
                  border-slate-200

                  dark:bg-slate-900
                  dark:border-slate-800

                  hover:border-blue-500
                "
              >

                <span className="text-blue-500 font-medium">
                  {item.duration}
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {item.company}
                </h3>

                <h4 className="text-lg mt-2 text-slate-600 dark:text-slate-300">
                  {item.role}
                </h4>

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;