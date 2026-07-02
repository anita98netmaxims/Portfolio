import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { projects } from "../data/projects";

function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find((p) => String(p.id) === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
                <p className="text-xl font-semibold">Project not found</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 flex items-center gap-2 text-blue-500 font-medium"
                >
                    <FaArrowLeft /> Back to Home
                </button>
            </div>
        );
    }

    return (
        <section className="min-h-screen py-20 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-6">

                {/* Back button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-blue-500 font-medium mb-8 hover:gap-3 transition-all"
                >
                    <FaArrowLeft /> Back
                </button>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-sm font-medium text-blue-500">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2">
                        {project.title}
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        {project.longDescription || project.description}
                    </p>
                </motion.div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="
                px-3 py-1 rounded-full text-sm font-medium
                bg-blue-100 text-blue-700
                dark:bg-blue-500/20 dark:text-blue-300
              "
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-8">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                flex items-center gap-2
                px-5 py-2.5 rounded-full
                bg-slate-900 text-white
                dark:bg-white dark:text-slate-900
                font-medium
                hover:opacity-90 transition-opacity
              "
                        >
                            <FaGithub /> Code
                        </a>
                    )}

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                flex items-center gap-2
                px-5 py-2.5 rounded-full
                bg-blue-500 text-white
                font-medium
                hover:bg-blue-600 transition-colors
              "
                        >
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                    )}
                </div>

                {/* Screenshot gallery */}
                <div className="grid sm:grid-cols-2 gap-2 mt-12">
                    {project.images?.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg h-100 w-50 "
                        >
                            <img
                                src={img}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ProjectDetails;
