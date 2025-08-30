/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const mainImageRef = useRef(null);
  const mainImageRefSecond = useRef(null);

  const imageArray = [
    "/img01.jpg",
    "/img02.jpg",
    "/img03.jpg",
    "/img04.jpg",
    "/img05.jpg",
    "/img06.jpg",
    "/img07.jpg",
    "/img08.jpg",
    "/img09.jpg",
    "/img10.jpg",
    "/img11.jpg",
    "/img12.jpg",
    "/img13.jpg",
    "/img14.jpg",
  ];
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        //
        start: "top 28%",
        end: "top -70%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  useGSAP(() => {
    gsap.from(mainImageRef.current, {
      y: 400,
      duration: 2,
      scrollTrigger: {
        trigger: mainImageRef.current,

        scrub: 1,
        end: "top 50%",
      },
    });
  });

  useGSAP(() => {
    gsap.to(mainImageRefSecond.current, {
      y: -550,
      duration: 2,
      scrollTrigger: {
        trigger: mainImageRefSecond.current,

        scrub: 1,
        start: "top 80%",
        end: "top 45%",
      },
    });
  });

  return (
    <div className="parent">
      <div id="page1" className="py-1 ">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-36 -top-30 lg:left-[30vw] left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[55vh] mt-[30vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
            <p className="lg:text-4xl text-xl leading-tight">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className=" h-screen bg-amber-200"></div>
      <div
        id="page2"
        className=" h-[1400px] bg-neutral-900 relative flex flex-col justify-center w-full items-center"
      >
        <div className="bg-red-400 w-full h-30 mb-10 mt-[-400px] z-0 absolute "></div>
        <div className="border border-black w-full h-full flex flex-col pt-40 justify-center items-center ">
          <div
            ref={mainImageRef}
            className=" w-[500px] overflow-hidden rounded-3xl h-[600px] z-20 "
          >
            <img
              src="/img08.jpg"
              alt="Image"
              className="object-cover h-full w-full"
            />
          </div>
          <div
            ref={mainImageRefSecond}
            className="imageSlide bg-pink-400 w-[500px] overflow-hidden  mb-10 rounded-3xl h-[650px] z-30"
          >
            <img
              src="/img14.jpg"
              alt="Image"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="bg-purple-400 w-full mt-[-100px] h-30 z-30 absolute"></div>
      </div>
    </div>
  );
};

export default Agence;
