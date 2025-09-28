import {
  FaCode,
  FaPalette,
  FaWindowRestore,
} from "react-icons/fa";
import SkillCard from "../components/skill_card";
import { FaMobileScreenButton, FaWebAwesome } from "react-icons/fa6";

function AboutMe() {
  const programmingAndDevelopment = [
    "Dart",
    "Flutter",
    "Ruby on Rails",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Vue",
    "React",
    "Rest API",
  ];
  const mobileDevelopment = [
    "Flutter(Android & iOS",
    "UX/UI Design for Applications",
    "Cross-platform Developer",
  ];
  const webDevelopment = [
    "End-to-End Web Development",
    "API Development",
    "E-commerce Application Development",
  ];
  const devOpsAndTools = [
    "Git",
    "GitHub",
    "Bitbucket",
    "Firebase",
    "Postman",
    "Fastlane",
    "Figma",
  ];

  return (
    <section id="about" className="pt-20 space-y-10">
      <h2 className="text-4xl font-semibold text-primary mb-6 text-center">
        About Me
      </h2>
      <p className="text-description text-xl text-center">
        I’m a <em className="text-primary font-medium">Software Developer</em>{" "}
        with a{" "}
        <em className="text-primary font-medium">
          Bachelor Degree in Computer Science
        </em>{" "}
        from
        <em className="text-primary font-medium">
          {" "}
          CADT - Cambodia Academy of Digital Technology
        </em>
        . Skilled in web and mobile technologies, with hands-on experience in
        e-commerce projects, I specialize in Flutter, Ruby on Rails, and modern
        web development. I’m passionate about solving complex problems through
        code and continuously improving my technical and leadership skills.
      </p>
      <div className="flex flex-col gap-7">
        <div className="flex gap-7">
          <SkillCard
            title="Programming & Development"
            icon={FaCode}
            languages={programmingAndDevelopment}
          />
          <SkillCard
            title="Mobile Development"
            icon={FaMobileScreenButton}
            languages={mobileDevelopment}
          />
        </div>
        <div className="flex gap-7">
          <SkillCard
            title="Web Development"
            icon={FaWindowRestore}
            languages={webDevelopment}
          />
          <SkillCard
            title="DevOps & Tools"
            icon={FaPalette}
            languages={devOpsAndTools}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
