import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "../ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
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
            MY WORK
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Production applications that I've built using React Native,
            Firebase, SQLite, Redux and REST APIs.
          </p>

        </motion.div>

        {/* Projects */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}

        </div>

      </div>

      {/* Modal renders here, controlled by selectedProject state */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
