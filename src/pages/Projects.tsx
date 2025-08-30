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
    <div className="lg:p-4 p-2 mb-[100vh]">
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
              className="hero w-full lg:h-[450px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
