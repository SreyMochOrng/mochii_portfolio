import ProjectCard from "../components/project_card";

const Projects = () => {
  const projects = [
    {
      image: "../src/assets/capstone1_image.png",
      title: "Attendance Tracking System",
      description:
        "During my Capstone project, me and my team developed an Attendance Tracking System with both web and mobile applications. The system allows users to easily manage attendance records, view reports, and track student performance.",
      tags: ["Laravel", "PHP", "Vue", "Tailwind CSS"],
    },
    {
      image: "../src/assets/capstone2_image.png",
      title: "Human Resource Management System",
      description:
        "For our Capstone II project, my team and I built an HRMS to automate attendance tracking, simplify leave management, and centralize company announcements. The goal was to reduce manual errors, improve communication, and enhance overall workplace efficiency.",
      tags: ["Laravel", "PHP", "Vue", "Tailwind CSS", "MySQL", "Railway"],
    },
    {
      image: "../src/assets/erobot_sticker.png",
      title: "Creative Sticker Design for Erobot",
      description:
        "Designed a vibrant sticker collection for Erobot, blending playful visuals with brand identity. This project aimed to capture the essence of Erobot’s personality, making the designs engaging, recognizable, and perfect for both digital and print use.",
      tags: ["Figma", "Graphic Design", "Branding"],
    },
    {
      image: "../src/assets/panda_sticker.png",
      title: "Playful Panda Sticker Design",
      description:
        "Created a unique sticker set for a private product, featuring a playful panda theme. The designs were crafted to be eye-catching, versatile, and adaptable for both digital and physical branding, bringing a fun and memorable touch to the product’s identity.",
      tags: ["Figma", "Graphic Design", "Branding"],
    },
    {
      image: "../src/assets/sentiment_analysis.png",
      title: "Sentiment Analysis Feature Extraction",
      description:
        "Built a sentiment analysis model with features such as positive/negative word counts, text length, unique words, pronouns, and markers like ‘no’ and exclamations to improve prediction accuracy.",
      tags: ["Python", "NLP", "Machine Learning", "Text Processing"],
    },
    {
      image: "../src/assets/better_player_resolve.png",
      title: "Enhanced Better Player Package",
      description:
        "Fixed critical bugs in the Better Player package and optimized its performance to provide smoother video playback and a more stable experience.",
      tags: ["Flutter", "Dart", "Video Streaming", "Open Source"],
    },
  ];

  return (
    <section id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl bg-gradient-primary bg-clip-text font-semibold text-primary mb-6 text-center">
            Projects
          </h2>
          <p className="text-xl text-description text-muted-foreground leading-relaxed">
            These recent projects show my passion for creating smart solutions.
            They demonstrate my ability to solve tough problems and design
            user-friendly products that are both effective and beautiful.
          </p>
        </div>
        <div className="p-7 space-y-7">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
