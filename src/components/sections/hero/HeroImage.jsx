import { motion } from "framer-motion";
import profile from "../../../assets/profile.jpg";

function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Outer Glow */}

      <div className="absolute w-[360px] h-[360px] rounded-full bg-cyan-500/20 dark:bg-cyan-500/30 blur-3xl animate-pulse" />

      {/* Rotating Border */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[340px]
          h-[340px]
          rounded-full
          border-2
          border-solid
          border-blue-500
          -translate-y-20
        "
      />

      {/* Image */}

      <motion.img
        src={profile}
        alt="Simran"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          relative
          w-[280px]
          h-[280px]
          md:w-[340px]
          md:h-[340px]
          lg:w-[380px]
          lg:h-[380px]
          rounded-full
          object-cover
          border-[8px]
          border-blue-500/30
          shadow-2xl
          -translate-y-20
        "
      />

      {/* Experience Badge */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          left-0
          -translate-y-20

          px-6
          py-3
          rounded-xl
          shadow-xl
          border

          bg-white/90
          border-slate-200

          dark:bg-slate-900/90
          dark:border-slate-700

          backdrop-blur-md
        "
      >
        <h3 className="text-blue-500 dark:text-blue-400 font-bold">
          3.5+ Years
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          Experience
        </p>
      </motion.div>

      {/* Projects Badge */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          top-10
          right-0
          -translate-y-20

          px-6
          py-3
          rounded-xl
          shadow-xl
          border

          bg-white/90
          border-slate-200

          dark:bg-slate-900/90
          dark:border-slate-700

          backdrop-blur-md
        "
      >
        <h3 className="text-blue-500 dark:text-blue-400 font-bold">
          15+
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          Projects
        </p>
      </motion.div>

    </div>
  );
}

export default HeroImage;