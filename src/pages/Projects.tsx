import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/Projects/ProjectsCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projects = [
    {
      image1: "/proj01.jpg",
      image2: "/proj02.jpg",
    },
    {
      image1: "/proj03.jpg",
      image2: "/proj04.jpg",
    },
    {
      image1: "/proj05.jpg",
      image2: "/proj06.jpg",
    },
    {
      image1: "/proj07.jpg",
      image2: "/proj08.jpg",
    },
    {
      image1: "/proj09.jpg",
      image2: "/proj10.jpg",
    },
    {
      image1: "/proj11.jpg",
      image2: "/proj12.jpg",
    },
    {
      image1: "/proj13.jpg",
      image2: "/proj14.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".hero", {
      height: 0,
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -250%",
        scrub: true,
      },
    });
  });

  return (
    <div className=" ">
      <div className=" pt-[45vh]">
        <h2 className="font-[font2] lg:text-[9.5vw] text-7xl uppercase">
          Projets
        </h2>
      </div>
      <div className="-lg:mt-20 lol">
        {projects.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="hero w-full lg:h-[450px] lg:p-2 mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          );
        })}
      </div>
      <div>
        <div className="mb-[-20px] rounded-t-[100px] bottom-0 h-[500px] w-full bg-black  overflow-hidden flex flex-col justify-between ">
          <div className="border flex justify-between items-center border-black h-24 w-full">
            <div className="pl-20 mt-2  text-white pr-20 flex justify-around h-20 items-center">
              <span className="text-5xl font-semibold uppercase border-2 h-full flex items-center border-white py-1 px-8  rounded-full hover:text-[#D3FD50] cursor-pointer mx-2 hover:border-[#D3FD50]">
                FB
              </span>
              <span className="text-5xl font-semibold uppercase border-2 h-full flex items-center border-white py-1 px-8  rounded-full hover:text-[#D3FD50] cursor-pointer mx-2 hover:border-[#D3FD50]">
                IG
              </span>
              <span className="text-5xl font-semibold uppercase border-2 h-full flex items-center border-white py-1 px-8  rounded-full hover:text-[#D3FD50] cursor-pointer mx-2 hover:border-[#D3FD50]">
                IN
              </span>
              <span className="text-5xl font-semibold uppercase border-2 h-full flex items-center border-white py-1 px-8  rounded-full hover:text-[#D3FD50] cursor-pointer hover:border-[#D3FD50]">
                BE
              </span>
            </div>
            <div>
              <div className="pr-20 mt-2  text-white">
                <span className="text-5xl font-semibold uppercase border-2 border-white py-1 px-8  rounded-full hover:text-[#D3FD50] cursor-pointer hover:border-[#D3FD50]">
                  Contact ♥
                </span>
              </div>
            </div>
          </div>
          <div className=" text-center  h-12">
            <div className="flex  w-[70%] mx-auto justify-around">
              <p className="text-white text-2xl uppercase hover:text-[#D3FD50] cursor-pointer">
                Privacy Policy
              </p>
              <p className="text-white text-2xl uppercase hover:text-[#D3FD50] cursor-pointer">
                Privacy Notice
              </p>
              <p className="text-white text-2xl uppercase hover:text-[#D3FD50] cursor-pointer">
                Ethics Report
              </p>
              <p className="text-white text-2xl uppercase hover:text-[#D3FD50] cursor-pointer">
                Concent Choice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
