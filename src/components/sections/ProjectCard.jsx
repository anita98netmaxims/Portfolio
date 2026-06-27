import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!project.images?.length) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
        overflow-hidden
        rounded-3xl
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
      {/* Screenshot */}

      <div className="relative overflow-hidden h-64">

        <img
          src={project.images[currentImage]}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            hover:scale-110
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Slider Dots */}

        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">

            {project.images.map((_, index) => (

              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentImage === index
                    ? "bg-white"
                    : "bg-white/40"
                }`}
              />

            ))}

          </div>
        )}

      </div>

      {/* Content */}

      <div className="p-6">

        <span className="text-sm font-medium text-blue-500">
          {project.category}
        </span>

        <h2 className="text-2xl font-bold mt-2">
          {project.title}
        </h2>

        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.tech.map((item) => (

            <span
              key={item}
              className="
                px-3
                py-1
                rounded-full
                text-sm
                font-medium

                bg-blue-100
                text-blue-700

                dark:bg-blue-500/20
                dark:text-blue-300
              "
            >
              {item}
            </span>

          ))}

        </div>

        {/* Button */}

        <button
          className="
            mt-8
            flex
            items-center
            gap-3
            font-semibold
            text-blue-500
            hover:gap-4
            transition-all
          "
        >
          View Details

          <FaArrowRight />
        </button>

      </div>
    </motion.div>
  );
}

export default ProjectCard;