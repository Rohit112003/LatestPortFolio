import starlightStudioImage from "@/assets/images/starlightStudioImage.png";
import futureForgeImage from "@/assets/images/futureForgeImage.png";
import Blockchain from "@/assets/images/Blockchain.webp";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUp from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
const portfolioProjects = [


{
  year: "2025",
  title: "FutureForge – AI Career Guidance Platform",
  results: [
    { title: "Developed AI-powered resume & career recommendation platform" },
    { title: "Integrated Gemini API for personalized insights" },
    { title: "Delivered ATS-ready resumes and mock interview feedback" },
  ],
  link: "https://future-forge-b3iblb5zg-rohit112003s-projects.vercel.app/",
  image: futureForgeImage,
},
  
{
  year: "2024",
  title: "Starlight Studios – Video Conferencing App",
  results: [
    { title: "Built scalable video conferencing app with real-time communication" },
    { title: "Used Docker & Kubernetes for consistent deployment" },
    { title: "Integrated authentication with Clerk and streaming via Stream.io" },
  ],
  link: "https://star-light-studio.vercel.app/",
  image: starlightStudioImage,
},
{
  year: "2023",
  title: "Certificates – Decentralized Application",
  results: [
    { title: "Secured Top 5 position at CodeUtsav 7.0" },
    { title: "Implemented tamper-proof certificate validation using blockchain" },
    { title: "Enhanced record security and transparency with smart contracts" },
  ],
  link: "[GitHub Link or 'Available upon request']",
  image: Blockchain,
},

];

export const ProjectsSection = () => {
  return <section id="projects" className="pb-16 lg:py-24">

    <div className="container">
      <div className="flex justify-center">

        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent  text-center">Real-world Results</p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 ">Featured Projects</h2>
      <p className="text-center lg:text-xl text-white/60 mt-4 md:text-lg max-w-md mx-auto">See how I transformed concepts into engaging digitial experiences</p>
      <div className=" flex flex-col mt-10 gap-20 md:mt-20    ">
        {portfolioProjects.map((project,projectIndex) => (
          <div className="bg-gray-800 rounded-3xl z-0 overflow-hidden  after:z-10  relative  after:content-['']
           after:absolute after:inset-0 after:outline-2 
           after:outline after:-outline-offset-2 after:rounded-3xl
            after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 
            lg:pt-16 lg:px-20 after:pointer-events-none  sticky top-16 "
            style={{
              top:`calc(64px + ${projectIndex*40}px)`
            }}
            key={project.title} >

            <div className="absolute inset-0 -z-10 opacity-5 " style={{
              backgroundImage: `url(${grainImage.src})`
            }}></div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm ">
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5 ">

                  {project.results.map((result) => (
                    <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50 " >
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>
                        {result.title}

                      </span>

                    </li>
                  ))}
                </ul>
                <a href={project.link}>

                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl md:w-auto px-7 font-semibold inline-flex items-center justify-center gap-2 mt-8 lg:mt-2 ">
                    <span className="">Visit Live site</span>
                    <ArrowUp className="size-4" />
                  </button>
                </a>
              </div>
              <div className="">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </div>

        ))}
      </div>

    </div>;
  </section>
};
