import { useState } from "react";
import "./App.css";
import { FaRegCopyright } from "react-icons/fa";
import Home from "../src/pages/Home";
import AboutMe from "../src/pages/AboutMe";
import Journey from "../src/pages/Journey";
import Projects from "../src/pages/Projects";
import mochi_logo from "../src/assets/Mochii.png";
import Certificate from "./pages/Certificate";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm shadow-primary100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home">
            <img
              src={mochi_logo}
              alt="Mochii Logo"
              className="h-14 sm:h-16 md:h-20"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center text-lg">
            <a href="#about" className="text-primary800 hover:text-primary">
              About
            </a>
            <a href="#journey" className="text-primary800 hover:text-primary">
              Journey
            </a>
            <a href="#projects" className="text-primary800 hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="text-primary800 hover:text-primary">
              Contact
            </a>
            <a href="../src/assets/ORNG_SreyMoch_CV.pdf">
              <button className="btn text-background bg-primary px-6 py-2 rounded-full hover:opacity-90">
                Download CV
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary800 text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 px-6 py-4 bg-background text-lg shadow-md">
            <a
              href="#about"
              className="text-primary800 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#journey"
              className="text-primary800 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Journey
            </a>
            <a
              href="#projects"
              className="text-primary800 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-primary800 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a href="../src/assets/ORNG_SreyMoch_CV.pdf">
              <button className="btn text-background bg-primary px-6 py-2 rounded-full hover:opacity-90">
                Download CV
              </button>
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 space-y-20 pt-24 overflow-x-hidden">
        <Home />
        <AboutMe />
        <Journey />
        <Projects />
        {/* <Certificate /> */}
      </div>
      <section class="bg-primary300 py-10 flex justify-center items-center gap-2">
        <FaRegCopyright className="size-5" />
        <p className="text-2xl">
          2025 | Designed and Coded by{" "}
          <b>
            <i>ORNG SreyMoch</i>
          </b>
        </p>
      </section>
    </div>
  );
}

export default App;
