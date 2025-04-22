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
    <motion.div
      className="flex flex-col items-center mb-16"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="relative w-60 h-60 rounded-full overflow-hidden mb-6 ring-2 ring-sky-400 ring-offset-4 ring-offset-slate-900"
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

      <motion.h1
        className="text-4xl font-bold mb-3 text-sky-200"
        variants={item}
      >
        Shubhang Gupta
      </motion.h1>

      <motion.p className="text-xl text-slate-400 mb-6 italic" variants={item}>
        Developing the tech world, one line of code at a time
      </motion.p>

      <motion.div
        className="flex space-x-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
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
            variants={item}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
