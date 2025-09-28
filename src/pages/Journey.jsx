import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Badge } from "../components/badge";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const timelineData = [
  {
    year: "2024 - Present",
    title: "Software Developer",
    organization: "BookMeBus",
    description:
      "Currently working as a Software Developer, handling both backend and frontend development for web and mobile apps. I also assist with app deployment and maintenance.",
    skills: ["Dart", "Flutter", "Ruby on Rails", "Tailwind CSS", "PostgreSQL"],
    achievements: [
      "App deployment & maintenance",
      "Full-stack development",
      "Cross-platform mobile development",
    ],
    type: "working",
  },
  {
    year: "2025 - Present",
    title: "Joined Sisters of Code as Ambassador",
    organization: "Sisters of Code | Ambassador Program",
    description:
      "Since early 2025, I’ve been part of the Sisters of Code Ambassador Program. After completing the course, I earned 3 certificates and became a mentor for new members. This experience strengthened my leadership, communication, and teaching skills.",
    skills: ["Leadership", "Mentorship", "Communication", "Teamwork"],
    achievements: [
      "Earned 3 certificates",
      "Became a mentor",
      "Strengthened teaching & leadership skills",
    ],
    type: "education",
  },
  {
    year: "2024",
    title: "Hackathon Winner – 6th Place Out of 70+ Teams",
    organization: "Ideathon Cambodia | CJCC",
    description:
      "My first hackathon experience, and our team proudly placed 6th among 70+ teams. We built a creative solution under pressure and learned a lot from the process. It was a great boost to my teamwork and problem-solving skills.",
    skills: ["Hackathon", "Problem-Solving", "Teamwork", "Innovation"],
    achievements: [
      "Placed 6th among 70+ teams",
      "Built a creative solution under pressure",
      "Enhanced teamwork & problem-solving skills",
    ],
    type: "project",
  },
  {
    year: "2022 - 2023",
    title: "Intern as a Mobile Developer",
    organization: "Private Company",
    description:
      "My first experience as a mobile developer, where I contributed to building user-friendly applications. I learned to work with cross-functional teams and gained hands-on experience in the development lifecycle. This role solidified my passion for mobile technology and user experience design.",
    skills: ["Mobile Development", "Flutter", "Agile", "UI/UX Design"],
    achievements: [
      "Contributed to mobile apps",
      "Worked in cross-functional teams",
      "Gained real-world development experience",
    ],
    type: "experience",
  },
  {
    year: "2021 - 2024",
    title: "Bachelor in Computer Science",
    organization: "Cambodia Academy of Digital Technology",
    description:
      "My first step into the world of programming and software development. It laid the foundation for my career in tech. I gained strong fundamentals in algorithms, data structures, and full-stack development. This journey also helped me discover my passion for solving real-world problems through code.",
    skills: [
      "Computer Science",
      "Algorithms",
      "Data Structures",
      "Full-Stack Development",
    ],
    achievements: [
      "Earned Bachelor's degree",
      "Built strong programming fundamentals",
      "Developed passion for solving real-world problems",
    ],
    type: "education",
  },
];

const typeColors = {
  working: {
    dot: "bg-blue-500",
    border: "border-blue-400",
    badge: "bg-blue-100 text-blue-800",
  },
  education: {
    dot: "bg-purple-500",
    border: "border-purple-400",
    badge: "bg-purple-100 text-purple-800",
  },
  project: {
    dot: "bg-green-500",
    border: "border-green-400",
    badge: "bg-green-100 text-green-800",
  },
  experience: {
    dot: "bg-pink-500",
    border: "border-pink-400",
    badge: "bg-pink-100 text-pink-800",
  },
  milestone: {
    dot: "bg-yellow-500",
    border: "border-yellow-400",
    badge: "bg-yellow-100 text-yellow-800",
  },
  default: {
    dot: "bg-gray-400",
    border: "border-gray-300",
    badge: "bg-gray-100 text-gray-800",
  },
};

const Journey = () => {
  return (
    <section id="journey" className="py-20 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl bg-gradient-primary bg-clip-text font-semibold text-primary mb-6 text-center">
            My Journey
          </h2>
          <p className="text-xl text-description text-muted-foreground leading-relaxed">
            From the excitement of writing my very first line of code to taking
            on challenges in real-world projects, my journey has been a constant
            path of growth and discovery. Along the way, I’ve explored new
            technologies, built applications that solve real problems, and
            collaborated with diverse teams. Each experience has shaped not only
            my technical expertise but also my mindset as a problem solver and
            mentor. This timeline captures the milestones that define my
            professional and educational path in technology.
          </p>
        </div>

        <div className="relative w-full">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

          <div className="w-full space-y-16">
            {timelineData.map((item, index) => {
              const colors = typeColors[item.type] || typeColors.default;
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 top-8 w-5 h-5 rounded-full border-4 border-primary200 shadow-lg z-10 ${colors.dot}`}
                  ></div>

                  {/* Content wrapper */}
                  <div
                    className={`flex flex-col md:flex-row items-start ${
                      index % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content card */}

                    <div
                      className={`w-full md:w-6/12 ml-12 sm:ml-14 md:ml-0 ${
                        index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                      }`}
                    >
                      <Card
                        className={`mr-9 md:mr-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-background border ${colors.border}`}
                      >
                        <CardHeader>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <Badge variant="secondary" className={colors.badge}>
                              {item.year}
                            </Badge>
                            <Badge variant="outline">{item.type}</Badge>
                          </div>
                          <CardTitle className="text-lg sm:text-xl font-bold">
                            {item.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center space-x-2 mt-1">
                            <p className="text-primary font-semibold">
                              {item.organization}
                            </p>
                            <FaArrowUpRightFromSquare className="text-sm sm:text-base" />
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>

                          <div>
                            <h4 className="font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wide">
                              Key Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, i) => (
                                <Badge
                                  key={i}
                                  className="text-xs sm:text-sm border-primary700 bg-primary100 px-5 py-2"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wide">
                              Achievements
                            </h4>
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="text-xs sm:text-sm text-muted-foreground flex items-start"
                                >
                                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Year display for larger screens */}
                    <div
                      className={`hidden md:flex md:items-center md:justify-center md:pt-4 md:mx-3 w-full md:w-2/12`}
                    >
                      <div className="text-lg font-bold text-primary bg-background rounded-full px-5 py-3 shadow-soft border">
                        {item.year}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
