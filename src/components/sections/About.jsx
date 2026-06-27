import { motion } from "framer-motion";
import {
  FaReact,
  FaMobileAlt,
  FaDatabase,
  FaMapMarkedAlt,
} from "react-icons/fa";

const stats = [
  {
    number: "3.5+",
    title: "Years Experience",
    icon: <FaReact />,
  },
  {
    number: "8+",
    title: "Projects Delivered",
    icon: <FaMobileAlt />,
  },
  {
    number: "10K+",
    title: "Users Impacted",
    icon: <FaDatabase />,
  },
  {
    number: "1000+",
    title: "Cities Covered",
    icon: <FaMapMarkedAlt />,
  },
];

function About() {
  return (
    <section
      id="about"
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
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-500 font-semibold tracking-wider">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Know Me Better
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-6">
              React Native Developer
            </h3>

            <p
              className="
              leading-9
              text-lg

              text-slate-600
              dark:text-slate-400
            "
            >
              I'm <span className="font-semibold">Anita Kardam</span>, a
              passionate React Native Developer with{" "}
              <span className="text-blue-500 font-semibold">
                3.5+ years
              </span>{" "}
              of experience developing scalable Android & iOS
              applications.

              <br />
              <br />

              I specialize in React Native, React JS, Firebase,
              REST APIs, SQLite, Redux, Google Maps,
              Push Notifications, performance optimization
              and modern mobile UI development.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-6 mt-12">

              {stats.map((item) => (

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  key={item.title}
                  className="
                  rounded-2xl
                  p-6
                  border
                  transition
                  shadow-md

                  bg-white
                  border-slate-200

                  dark:bg-slate-900
                  dark:border-slate-800
                "
                >

                  <div className="text-3xl text-blue-500">
                    {item.icon}
                  </div>

                  <h4 className="text-3xl font-bold mt-4">
                    {item.number}
                  </h4>

                  <p
                    className="
                    mt-2

                    text-slate-600
                    dark:text-slate-400
                  "
                  >
                    {item.title}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
            rounded-3xl
            p-10
            border
            shadow-md
            transition

            bg-white
            border-slate-200

            dark:bg-slate-900
            dark:border-slate-800
          "
          >

            <h3 className="text-3xl font-bold">
              What I Do
            </h3>

            <div className="space-y-8 mt-10">

              <div>
                <h4 className="text-xl font-semibold text-blue-500">
                  Mobile App Development
                </h4>

                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Develop scalable Android & iOS applications
                  using React Native.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-500">
                  REST API Integration
                </h4>

                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Axios, Fetch, Authentication, secure APIs
                  and third-party integrations.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-500">
                  Firebase Services
                </h4>

                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Authentication, Push Notifications,
                  Firestore and Analytics.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-500">
                  Performance Optimization
                </h4>

                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Faster rendering, debugging,
                  production deployment and application optimization.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;