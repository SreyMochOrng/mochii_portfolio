import { FaLinkedin, FaGithub } from "react-icons/fa";
import me from "../assets/me.png";

function Home() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-background px-6"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="flex-2 space-y-6 text-center md:text-left">
          <header>
            <p className="text-primary800 text-2xl">Hello, I'm</p>
            <h1 className="text-primary text-5xl md:text-6xl font-bold">
              ORNG SreyMoch
            </h1>
          </header>

          <div>
            <p className="text-primary700 text-2xl md:text-3xl font-semibold">
              Software Developer
            </p>
            <p className="text-description text-lg md:text-xl mt-2">
              Crafting web & mobile experiences
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 text-3xl">
            <a
              href="https://github.com/SreyMochOrng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sreymoch-orng-303579285"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary950 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={me}
            alt="Portrait of Orng SreyMoch"
            className="w-64 md:w-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
