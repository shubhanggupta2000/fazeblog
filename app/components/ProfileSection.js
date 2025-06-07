"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SiLeetcode } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const socialLinks = {
  profile: "https://www.guptashubhang.tech/",
  github: "https://github.com/shubhanggupta2000",
  linkedin: "https://www.linkedin.com/in/gupta-shubhang/",
  leetcode: "https://leetcode.com/u/Shubhang_Gupta/",
  medium: "https://medium.com/@guptashubhang2000",
  twitter: "https://twitter.com/ShubhangGupta13",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProfileSection() {
  return (
    <div className="w-full flex justify-center">
      <motion.div
        className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start justify-center mb-16 gap-8 md:gap-12 px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Profile Image */}
        <motion.div
          className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden ring-2 ring-sky-400 ring-offset-4 ring-offset-slate-900 flex-shrink-0"
          variants={item}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Image
            src="/me.jpg"
            alt="Profile Picture"
            width={392}
            height={392}
            className="object-cover"
          />
        </motion.div>

        {/* Profile Text and Socials */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          variants={item}
        >
          <p className="text-2xl text-sky-400 mb-1">
            Hi <span className="inline-block animate-wave">👋</span>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-1 text-sky-200">
            I&apos;m Shubhang Gupta
          </h1>
          <p className="text-lg md:text-xl font-semibold text-sky-300 mb-2">
            Software Developer | Blogger | Open Sourcerer
          </p>
          <p className="text-base md:text-lg text-slate-400 mb-4 italic">
            Developing the tech world, one line of code at a time.
          </p>
          <div className="flex space-x-6 mt-2">
            {Object.entries({
              profile: <CgProfile size={28} />,
              github: <FaGithub size={28} />,
              linkedin: <FaLinkedin size={28} />,
              leetcode: <SiLeetcode size={28} />,
              medium: <BsMedium size={28} />,
              twitter: <FaSquareXTwitter size={28} />,
            }).map(([key, icon]) => (
              <motion.a
                key={key}
                href={socialLinks[key]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
