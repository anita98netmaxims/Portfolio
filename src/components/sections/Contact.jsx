import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="
        py-28
        transition-colors
        duration-300
        bg-slate-50
        text-slate-900
        dark:bg-slate-950
        dark:text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-semibold tracking-wider">
            CONTACT
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: "anita97kardam@gmail.com",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Phone",
                value: "+91 95********",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                value: "Faridabad, Haryana, India",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                className="
                  flex
                  items-center
                  gap-5
                  p-6
                  rounded-2xl
                  border
                  shadow-lg
                  transition-all
                  duration-300

                  bg-white
                  border-slate-200

                  dark:bg-slate-900
                  dark:border-slate-800

                  hover:border-blue-500
                "
              >
                <div className="text-2xl text-blue-500">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social */}

            <div className="flex gap-5 pt-6">

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="
                  w-14
                  h-14
                  rounded-full
                  flex
                  items-center
                  justify-center
                  border
                  transition-all
                  duration-300

                  bg-white
                  border-slate-200

                  dark:bg-slate-900
                  dark:border-slate-800

                  hover:bg-blue-600
                  hover:text-white
                  hover:scale-110
                "
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="
                  w-14
                  h-14
                  rounded-full
                  flex
                  items-center
                  justify-center
                  border
                  transition-all
                  duration-300

                  bg-white
                  border-slate-200

                  dark:bg-slate-900
                  dark:border-slate-800

                  hover:bg-blue-600
                  hover:text-white
                  hover:scale-110
                "
              >
                <FaGithub size={22} />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              p-8
              rounded-3xl
              border
              shadow-xl
              space-y-6
              transition-all
              duration-300

              bg-white
              border-slate-200

              dark:bg-slate-900
              dark:border-slate-800
            "
          >

            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                rounded-xl
                px-5
                py-4
                border
                outline-none
                transition-all
                duration-300

                bg-slate-100
                text-slate-900
                placeholder:text-slate-500
                border-slate-300

                dark:bg-slate-800
                dark:text-white
                dark:placeholder:text-slate-400
                dark:border-slate-700

                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/20
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                rounded-xl
                px-5
                py-4
                border
                outline-none
                transition-all
                duration-300

                bg-slate-100
                text-slate-900
                placeholder:text-slate-500
                border-slate-300

                dark:bg-slate-800
                dark:text-white
                dark:placeholder:text-slate-400
                dark:border-slate-700

                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/20
              "
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="
                w-full
                rounded-xl
                px-5
                py-4
                border
                outline-none
                resize-none
                transition-all
                duration-300

                bg-slate-100
                text-slate-900
                placeholder:text-slate-500
                border-slate-300

                dark:bg-slate-800
                dark:text-white
                dark:placeholder:text-slate-400
                dark:border-slate-700

                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-500/20
              "
            />

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                font-semibold
                text-white
                bg-blue-600
                hover:bg-blue-700
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              Send Message →
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;