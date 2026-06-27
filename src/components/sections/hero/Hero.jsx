import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
        pt-28
        pb-20

        bg-white
        dark:bg-slate-950

        transition-colors
        duration-300
      "
    >
      {/* Background */}

      <div className="absolute inset-0">

        {/* Left Glow */}

        <div
          className="
            absolute
            -top-40
            -left-40
            w-[420px]
            h-[420px]
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[420px]
            h-[420px]
            rounded-full
            bg-cyan-400/10
            blur-[120px]
          "
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <HeroContent />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="flex justify-center"
          >
            <HeroImage />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;