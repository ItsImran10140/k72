/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const mainImageRefSecond = useRef<HTMLDivElement>(null);
  const movingTextTopFirst = useRef<HTMLHeadingElement>(null);
  const movingTextTopSecond = useRef<HTMLHeadingElement>(null);
  const movingTextBottomFirst = useRef<HTMLHeadingElement>(null);
  const movingTextBottomSecond = useRef<HTMLHeadingElement>(null);

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
    if (!imageDivRef.current || !imageRef.current) return;

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -70%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          if (!imageRef.current) return;

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
    if (!mainImageRef.current) return;

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
    if (!mainImageRefSecond.current) return;

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

  useGSAP(() => {
    if (!movingTextTopFirst.current) return;

    gsap.to(movingTextTopFirst.current, {
      x: 400,
      repeat: -1,
      duration: 3,
      yoyo: true,
    });
  });

  useGSAP(() => {
    if (!movingTextTopSecond.current) return;

    gsap.to(movingTextTopSecond.current, {
      x: -400,
      repeat: -1,
      duration: 3,
      yoyo: true,
    });
  });

  useGSAP(() => {
    if (!movingTextBottomFirst.current) return;

    gsap.from(movingTextBottomFirst.current, {
      x: 400,
      repeat: -1,
      duration: 3,
      yoyo: true,
    });
  });

  useGSAP(() => {
    if (!movingTextBottomSecond.current) return;

    gsap.from(movingTextBottomSecond.current, {
      x: -400,
      repeat: -1,
      duration: 3,
      yoyo: true,
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
              terme. C'est pour ça qu'on s'engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className=" h-screen  flex items-center justify-center">
        <div className="lg:grid lg:grid-cols-3 grid grid-cols-2 w-full lg:px-35">
          <div className="lg:h-44 text-sm lg:text-lg font-semibold  px-3">
            Expertise
          </div>
          <div className=" lg:h-44 text-sm lg:text-lg font-semibold  px-3">
            <p>Strategy</p>
            <p>Advertising</p>
            <p>Branding</p>
            <p>Design</p>
            <p>Content</p>
          </div>
          <div className=" lg:h-44"></div>
          <div className=" h-56 flex items-center px-3">
            <p className="lg:text-lg text-sm font-semibold  ">
              Our Work_ Born in curiosity, raised by <br /> dedication and fed
              with a steady diet of <br /> creativity.
            </p>
          </div>
          <div className=" lg:h-56 flex items-center px-3">
            <p className="lg:text-lg text-sm font-semibold  ">
              Our Creative_ Simmering in an environment <br /> where talent can
              come to a full boil. <br /> Encouraged to become the best versions
              of <br /> ourselves.
            </p>
          </div>
          <div className=" lg:h-56 flex items-center px-3">
            <p className="lg:text-lg text-sm font-semibold  ">
              Our Culture_ We're open to <br /> each other. Period. The team{" "}
              <br /> works together to create a <br /> space that makes us
              proud.
            </p>
          </div>
        </div>
      </div>
      <div
        id="page2"
        className=" h-[1400px] bg-neutral-900 relative flex flex-col justify-center w-full items-center"
      >
        <div className="text-[#D3FD50] w-full h-30 mb-10 mt-[-400px] z-0 absolute flex justify-between">
          <h2
            ref={movingTextTopFirst}
            className="whitespace-nowrap font-[font2] lg:text-[6vw] text-3xl  text-start lg:leading-[0.8] lg:pt-10  uppercase"
          >
            Pour Tout
          </h2>
          <h2
            ref={movingTextTopSecond}
            className="whitespace-nowrap font-[font2] lg:text-[6vw] text-3xl  text-end lg:leading-[0.8] lg:pt-10  uppercase"
          >
            Pour Tout
          </h2>
        </div>
        <div className=" w-full h-full flex flex-col pt-40 justify-center items-center ">
          <div
            ref={mainImageRef}
            className=" lg:w-[500px] overflow-hidden rounded-3xl h-[600px] z-20  w-[350px]"
          >
            <img
              src="/img08.jpg"
              alt="Image"
              className="object-cover h-full w-full"
            />
          </div>
          <div
            ref={mainImageRefSecond}
            className="imageSlide bg-pink-400 lg:w-[500px] overflow-hidden  mb-10 rounded-3xl h-[650px] z-30 w-[350px]"
          >
            <img
              src="/img14.jpg"
              alt="Image"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="text-[#D3FD50] w-full h-30 mb-10  absolute z-30 flex justify-between mt-[-100px]">
          <h2
            ref={movingTextBottomFirst}
            className="whitespace-nowrap font-[font2] lg:text-[6vw] text-3xl  text-start lg:leading-[0.8] lg:pt-10  uppercase"
          >
            Pour Tout
          </h2>
          <h2
            ref={movingTextBottomSecond}
            className="whitespace-nowrap font-[font2] lg:text-[6vw] text-3xl  text-end lg:leading-[0.8] lg:pt-10  uppercase"
          >
            Pour Tout
          </h2>
        </div>
        <div className="absolute lg:rounded-t-[100px] rounded-t-[50px] bottom-0 h-[500px] w-full bg-black z-40 overflow-hidden flex flex-col justify-between">
          <div className="border lg:flex lg:justify-between lg:items-center  lg:h-24 w-full ">
            <div className="lg:pl-20 lg:mt-2 mt-8  text-white pr-20 flex justify-around lg:h-20 items-center">
              <span className="lg:text-5xl font-semibold uppercase border-2 h-full flex items-center border-white py-1 px-8  rounded-full hover:text-[#D3FD50] cursor-pointer mx-2 hover:border-[#D3FD50]">
                FB
              </span>
              <span className="lg:text-5xl font-semibold uppercase border-2 h-full flex items-center border-white py-1 px-8  rounded-full hover:text-[#D3FD50] cursor-pointer mx-2 hover:border-[#D3FD50]">
                IG
              </span>
              <span className="lg:text-5xl font-semibold uppercase border-2 h-full flex items-center border-white py-1 px-8  rounded-full hover:text-[#D3FD50] cursor-pointer mx-2 hover:border-[#D3FD50]">
                IN
              </span>
              <span className="lg:text-5xl font-semibold uppercase border-2 h-full flex items-center border-white py-1 px-8  rounded-full hover:text-[#D3FD50] cursor-pointer hover:border-[#D3FD50]">
                BE
              </span>
            </div>
            <div>
              <div className="pr-20  lg:mt-2 mt-[50px] text-white">
                <span className="lg:text-5xl font-semibold uppercase border-2 border-white py-1 px-8  rounded-full hover:text-[#D3FD50] cursor-pointer hover:border-[#D3FD50]">
                  Contact ♥
                </span>
              </div>
            </div>
          </div>
          <div className=" text-center  h-12">
            <div className="lg:flex  w-[50%] mx-auto lg:justify-around lg:mt-0 mt-[-180px]">
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

export default Agence;
