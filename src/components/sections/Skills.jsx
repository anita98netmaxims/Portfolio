import { motion } from "framer-motion";

const skills = [
  { title: "React Native", percentage: 95 },
  { title: "React JS", percentage: 85 },
  { title: "JavaScript", percentage: 90 },
  { title: "TypeScript", percentage: 80 },
  { title: "Redux", percentage: 90 },
  { title: "Firebase", percentage: 88 },
  { title: "REST API", percentage: 95 },
  { title: "SQLite", percentage: 80 },
];

function Skills() {
  return (
    <section
      id="skills"
      className="
        py-28
        transition-colors
        duration-300

        bg-white
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
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-semibold tracking-wider">
            MY SKILLS
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Technical Skills
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Technologies and tools I work with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="
                rounded-2xl
                p-6
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

              <div className="flex justify-between items-center mb-4">

                <h3 className="font-semibold text-lg">
                  {skill.title}
                </h3>

                <span className="font-semibold text-blue-500">
                  {skill.percentage}%
                </span>

              </div>

              <div className="w-full h-3 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.percentage}%`,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;