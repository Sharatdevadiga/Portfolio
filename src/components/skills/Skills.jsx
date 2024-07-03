import "./Skills.css";

import { AiOutlineHtml5 } from "react-icons/ai";
import {
  FaCss3,
  FaReact,
  FaBootstrap,
  FaSass,
  FaNodeJs,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiServer } from "react-icons/fi";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: AiOutlineHtml5, ariaLabel: "HTML5" },
  { name: "CSS", icon: FaCss3, ariaLabel: "CSS3" },
  { name: "JavaScript", icon: IoLogoJavascript, ariaLabel: "JavaScript" },
  { name: "React", icon: FaReact, ariaLabel: "React" },
  { name: "Redux", icon: SiRedux, ariaLabel: "Redux" },
  { name: "Tailwind", icon: RiTailwindCssFill, ariaLabel: "Tailwind CSS" },
  { name: "Bootstrap", icon: FaBootstrap, ariaLabel: "Bootstrap" },
  { name: "SASS", icon: FaSass, ariaLabel: "SASS" },
  { name: "MongoDB", icon: SiMongodb, ariaLabel: "MongoDB" },
  { name: "Express", icon: FiServer, ariaLabel: "Express" },
  { name: "Node.js", icon: FaNodeJs, ariaLabel: "Node.js" },
  { name: "SQL", icon: BiLogoPostgresql, ariaLabel: "SQL" },
  { name: "Git", icon: FaGitAlt, ariaLabel: "Git" },
  { name: "GitHub", icon: FaGithub, ariaLabel: "GitHub" },
];

function Skills() {
  return (
    <div className="flex-v-center skills-container">
      <h3 className="heading-secondary">I can Build Your site with</h3>
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <skill.icon aria-label={skill.ariaLabel} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
