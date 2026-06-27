import { TypeAnimation } from "react-type-animation";
import {
    FaGithub,
    FaLinkedin,
    FaDownload,
    FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import resumePdf from "../../../assets/test.pdf";

function HeroContent() {
    const scrollToContact = (e) => {
        e.preventDefault();

        document
            .getElementById("contact")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    return (
        <div className="max-w-2xl">

            {/* Greeting */}

            <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="
          inline-flex
          items-center
          px-5
          py-2
          rounded-full
          bg-blue-100
          text-blue-600
          dark:bg-blue-500/20
          dark:text-blue-300
          font-semibold
          tracking-wide
        "
            >
                👋 Hello, I'm
            </motion.span>

            {/* Name */}

            <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="
          mt-6
          text-5xl
          md:text-7xl
          lg:text-[84px]
          xl:text-[92px]
          font-black
          dark:text-white
          leading-[0.9]
        "
            >
                Simran
                <br />

                <span className="text-blue-500">
                    Saifi
                </span>
            </motion.h1>

            {/* Typing */}

            <div className="mt-6 h-16">

                <TypeAnimation
                    sequence={[
                        "React Native Developer",
                        2000,
                        "React Developer",
                        2000,
                        "Frontend Developer",
                        2000,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                    className="
            text-2xl
            md:text-[38px]
            font-bold
            text-black-600
            dark:text-white
          "
                />

            </div>

            {/* Description */}

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="
          mt-6
          text-lg
          leading-8
          text-slate-700
          dark:text-slate-400
        "
            >
                Passionate React Native Developer with{" "}
                <span className="font-bold text-blue-500">
                    3.5+ years
                </span>{" "}
                of experience building scalable Android & iOS applications using
                React Native, Firebase, Redux, REST APIs, SQLite and modern UI.
            </motion.p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

                <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="
            flex
            items-center
            gap-3
            px-8
            py-4
            rounded-xl
            bg-blue-600
            text-white
            font-semibold
            shadow-xl
            hover:bg-blue-700
            hover:scale-105
            transition-all
            duration-300
          "
                >
                    Hire Me
                    <FaArrowRight />
                </a>

                <a
                    href={resumePdf}
                    download
                    className="
            flex
            items-center
            gap-3
            px-8
            py-4
            rounded-xl
            border
            border-blue-500
            text-slate-800
            dark:text-white
            hover:bg-blue-600
            hover:border-blue-600
            hover:text-white
            transition-all
            duration-300
          "
                >
                    <FaDownload />
                    Resume
                </a>

            </div>

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
  text-slate-900

  dark:bg-slate-900
  dark:border-slate-800
  dark:text-white

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
                  text-slate-900

                  dark:bg-slate-900
                  dark:border-slate-800
                  dark:text-white

                  hover:bg-blue-600
                  hover:text-white
                  hover:scale-110
                "
                >
                    <FaGithub size={22} />
                </a>

            </div>

        </div>
    );
}

export default HeroContent;