import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useEffect } from "react";

function ProjectModal({ project, onClose }) {
  // Close on ESC key
  useEffect(() => {
    if (!project) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="
          fixed inset-0 z-50
          flex items-center justify-center
          p-4
          bg-black/60
          backdrop-blur-sm
        "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            w-full max-w-3xl
            max-h-[90vh]
            overflow-y-auto
            rounded-3xl
            bg-white
            dark:bg-slate-900
            border border-slate-200 dark:border-slate-800
            shadow-2xl
          "
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4 z-10
              w-10 h-10
              flex items-center justify-center
              rounded-full
              bg-white/90 dark:bg-slate-800/90
              text-slate-700 dark:text-slate-200
              hover:bg-blue-500 hover:text-white
              transition-colors
            "
          >
            <FaTimes />
          </button>

          {/* Image */}
          {project.images?.[0] && (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-72 object-cover rounded-t-3xl"
            />
          )}

          {/* Content */}
          <div className="p-8">
            <span className="text-sm font-medium text-blue-500">
              {project.category}
            </span>

            <h2 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
              {project.title}
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              {project.longDescription || project.description}
            </p>

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
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;
