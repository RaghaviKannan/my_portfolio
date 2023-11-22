import "./App.css";
import work from "./work.jpg";
import studteach from "./assets/studteach.png";
import meal from "./assets/meal.png";
import qrimg from "./assets/qrimg.png";
import dog from "./assets/dog.png";
import nationalize from "./assets/nationalize.png";
import anime from "./assets/anime.png";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (darkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [darkMode]);

  const downloadResume = () => {
    const resumepath = process.env.PUBLIC_URL + "/resume.pdf";
    const anchor = document.createElement("a");
    anchor.href = resumepath;
    anchor.download = "raghavi-resume.pdf";
    anchor.click();
  };

  const skills = [
    {
      name: "HTML",
      icon: "https://th.bing.com/th/id/OIP.bI8KDjd8-nDvzTX_Uok7FwHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "CSS",
      icon: "https://th.bing.com/th/id/OIP.NccvSu6Gut1HXGwUTBKYKgHaH3?w=169&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      name: "JavaScript",
      icon: "https://th.bing.com/th/id/OIP.g1KfG8APYNeP-B_8fEd1rQHaHa?w=192&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "ReactJS",
      icon: "https://th.bing.com/th/id/OIP.cPh7ujRIfcHAy4kW2ADGOwHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Bootstrap",
      icon: "https://th.bing.com/th/id/OIP.KTq5K5E3QeLVrm71FR0w8gHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      name: "Tailwind CSS",
      icon: "https://miro.medium.com/max/632/1*5QD8DKhOjRe-gcYjozlLNQ.png",
    },
    {
      name: "Redux",
      icon: "https://th.bing.com/th/id/OIP.yvi6B33dh1qkOz22drdl5wHaHe?w=159&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Git",
      icon: "https://th.bing.com/th/id/OIP.3xatIgLyHni_Wi6mE5O7kgHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "GitHub",
      icon: "https://th.bing.com/th/id/OIP.kjCUP06WDUMR88i5wo2SqwHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    },
    {
      name: "MySQL",
      icon: "https://th.bing.com/th/id/OIP.bxyBQ7zZajsePQpFcVpAfAHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "MongoDB",
      icon: "https://th.bing.com/th/id/OIP.JhdchOb0n1bwrlfhGqycbgHaFG?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    // Add more skills here
  ];

  const projects = [
    {
      title: "Student - Teacher Management",
      description:
        "To manage and assign students to Teachers and maintain a dashboard.",
      image: studteach,
      url: "https://wondrous-lokum-64d39a.netlify.app/",
    },
    {
      title: "Meal Finder",
      description:
        "To get a recipe and video of a required dish by searching with keywords.",
      image: meal,
      url: "https://dreamy-maamoul-ba80c3.netlify.app/",
    },
    {
      title: "QR Code Generator",
      description:
        "To Generate your own QR code for given data with a given size and format.",
      image: qrimg,
      url: "https://heartfelt-melba-987b15.netlify.app/",
    },
    {
      title: "Nationalize",
      description: "To find probabilities of Nationality using just your Name.",
      image: nationalize,
      url: "",
    },
    {
      title: "Dog Facts",
      description:
        "Dog lover?? Find the interesting facts about your loved ones.",
      image: dog,
      url: "",
    },
    {
      title: "Anime Finder",
      description:
        "To find the anime episode with the image of the scene you have.",
      image: anime,
      url: "",
    },
  ];

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
      <nav className={`bg-orange-200 ${darkMode ? "dark:bg-gray-900" : ""}`}>
        <ul className="flex justify-end lg:mr-20">
          <li className="px-3 py-2 hover:font-bold">
            <a className="px-3 py-2 text-xl hover:underline" href="#">
              Home
            </a>
          </li>
          <li className="px-3 py-2 hover:font-bold">
            <a className="px-3 py-2 text-xl hover:underline" href="#skills">
              Skills
            </a>
          </li>
          <li className="px-3 py-2 hover:font-bold">
            <a className="px-3 py-2 text-xl hover:underline" href="#projects">
              Projects
            </a>
          </li>
          <li className="px-3 py-2 hover:font-bold">
            <a className="px-3 py-2 text-xl hover:underline" href="#contact">
              Contact
            </a>
          </li>
          <button
            className="border bg-red-500 p-2 text-white"
            onClick={toggleDarkMode}
          >
            Darkmode
          </button>
        </ul>
      </nav>
      {/* Home */}
      <section
        className={`flex flex-col min-h-screen ${
          darkMode ? "dark:bg-purple-900" : "bg-purple-100"
        }`}
      >
        <div className="container mx-auto flex-1 w-full">
          <div className="flex py-36">
            <div className="w-full lg:w-1/2 text-center text-xl p-20">
              <h1 className="mb-4">
                Hi 👋 I am <span>Raghavi</span>!!! 🤩
              </h1>
              <h5>
                An Ambitious learning web-developer, a quick learner, and a hard
                worker. I am equipped with a promising skill set with which I
                could effectively self-manage during independent projects, yet
                an excellent team player as well.🙂
              </h5>
            </div>
            <div className="w-1/2">
              <img className="w-10/12 pl-20 hidden lg:flex" src={work} alt="" />
            </div>
          </div>
          <div className="flex justify-center p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <span>Scroll down</span>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section
        id="skills"
        className={`flex flex-col min-h-screen ${
          darkMode
            ? "dark:bg-gradient-to-r from-blue-900 to-green-900"
            : "bg-gradient-to-r from-blue-200 to-green-200"
        }`}
      >
        <h1 className="text-5xl text-center  px-5 py-10 font-serif text-blue-500">
          Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="enlarge-on-hover flex flex-col items-center justify-center"
            >
              <h4>{skill.name}</h4>
              <img className="icon" src={skill.icon} alt={skill.name} />
            </div>
          ))}
        </div>
      </section>
      {/* Projects */}
      <section
        id="projects"
        className={`flex flex-col min-h-screen overflow-y-auto ${
          darkMode
            ? "dark:bg-gradient-to-r from-yellow-900 to-red-900"
            : "bg-gradient-to-r from-yellow-100 to-red-100"
        }`}
      >
        <h1 className="text-5xl text-center px-5 py-10 font-serif text-red-500">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-black rounded-md py-3 flex flex-col items-center"
            >
              <h3>{project.title}</h3>
              <img
                className="p-2 project"
                src={project.image}
                alt={project.title}
              />
              <p className="w-1/2 p-5">{project.description}</p>
              <a
                className="border border-white rounded bg-blue-500 px-5 py-2 text-white"
                target="_blank"
                rel="noopener noreferrer"
                href={project.url}
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* About and contact */}
      <section
        id="contact"
        className={`flex flex-col min-h-screen overflow-y-auto ${
          darkMode
            ? "dark:bg-gradient-to-r from-purple-900 to-pink-900"
            : "bg-gradient-to-r from-purple-300 to-pink-200"
        }`}
      >
        <h1 className="text-5xl text-center  px-5 py-10 font-serif text-red-500">
          Contact
        </h1>
        <div className="container flex flex-col items-center justify-center">
          <div className="flex space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <h4>Email: raghavikannan96@gmail.com</h4>
          </div>
          <div className="flex space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.361-.271.528-.732.417-1.173L10.207.852A1.237 1.237 0 009.115.5H7.743A1.237 1.237 0 006.65.852L1.091 6.41C.731 6.68.564 7.141.675 7.582L1.968 12.4a1.474 1.474 0 001.61 1.24l5.207-.875c.442-.074.822-.332 1.091-.67l1.293-1.924a11.94 11.94 0 01-.671-1.092l-.876-5.207a1.474 1.474 0 00-1.24-1.61L.825 1.968A1.474 1.474 0 00.156 3.58L.5 7.743c.074.441.332.822.67 1.091l1.924 1.293c.36.269.731.436 1.172.436a12.034 12.034 0 007.143-3.96c.162-.44.004-.928-.379-1.21l-1.293-.97a1.474 1.474 0 00-1.61-1.24l-5.207.875a1.474 1.474 0 00-1.091.67l-1.924 2.886c-.24.36-.35.795-.302 1.234.053.44.257.843.584 1.17l5.206 5.207c.327.326.73.53 1.17.583.44.053.873-.062 1.233-.302l2.886-1.924a1.474 1.474 0 00.67-1.09l.875-5.207a1.474 1.474 0 00-1.24-1.61L7.743.825A1.474 1.474 0 007.582.156L12.4.5a1.474 1.474 0 001.24 1.61l5.207.875a1.474 1.474 0 001.09.67l2.886-1.924a1.474 1.474 0 00.583-1.17c-.053-.44-.257-.842-.584-1.17l-5.207-5.206a1.474 1.474 0 00-1.17-.583c-.44.053-.842.257-1.17.584L7.743.156A1.474 1.474 0 007.582 0H3.58a1.474 1.474 0 00-1.234.584L.156 3.582C.083 3.92.148 4.26.3 4.6l1.924 2.886a1.474 1.474 0 00.67 1.09l5.207.876a1.474 1.474 0 001.24-1.24L7.582 3.58A1.237 1.237 0 007.743 3.5H9.115a1.237 1.237 0 001.092.651l4.558 1.558c.36.126.651.576.651 1.092v2.25a1.237 1.237 0 00-.352.892l-1.107 4.423c-.125.5-.575.85-1.09.85H6.75a1.474 1.474 0 00-1.24.67L.584 16.766c-.47.815-.365 1.797.217 2.44l4.964 4.964c.642.583 1.625.687 2.44.217l5.206-2.946a1.474 1.474 0 00.67-1.24l-1.107-4.423a1.237 1.237 0 00-.352-.892h-.02z"
              />
            </svg>

            <h4>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/raghavi-kannan-60a65b1a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Raghavi Kannan
              </a>
            </h4>
          </div>
          <div className="flex space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 20h4a2 2 0 002-2V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 3v2a2 2 0 01-2 2H11a2 2 0 01-2-2V3m4 2v7m0 0v7m0-7h-3m0 0H7"
              />
            </svg>
            <h4>
              Github:{" "}
              <a
                href="https://github.com/RaghaviKannan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Raghavi Kannan
              </a>
            </h4>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="border border-white rounded bg-red-500 px-5 py-2 text-white"
            onClick={downloadResume}
          >
            Download Resume
          </button>
        </div>
      </section>
      <footer className="text-center p-5">
        <p>&copy; 2023 Raghavi Kannan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
