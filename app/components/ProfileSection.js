import Image from "next/image";
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

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center mb-16">
      <div className="relative w-60 h-60 rounded-full overflow-hidden mb-6 ring-2 ring-sky-400 ring-offset-4 ring-offset-slate-900">
        <Image
          src="/me.jpg"
          alt="Profile Picture"
          width={392}
          height={392}
          className="object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-3 text-sky-200">Shubhang Gupta</h1>
      <p className="text-xl text-slate-400 mb-6 italic">
        Developing the tech world, one line of code at a time
      </p>
      <div className="flex space-x-6">
        <a
          href={socialLinks.profile}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-300 transition-colors transform hover:scale-110"
        >
          <CgProfile size={28} />
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-300 transition-colors transform hover:scale-110"
        >
          <FaGithub size={28} />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-300 transition-colors transform hover:scale-110"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href={socialLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-300 transition-colors transform hover:scale-110"
        >
          <SiLeetcode size={28} />
        </a>
        <a
          href={socialLinks.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-300 transition-colors transform hover:scale-110"
        >
          <BsMedium size={28} />
        </a>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-300 transition-colors transform hover:scale-110"
        >
          <FaSquareXTwitter size={28} />
        </a>
      </div>
    </div>
  );
}
