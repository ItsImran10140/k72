/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

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
        // markers: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        start: "top 22%",
        end: "top -70%",
        pin: true,
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

  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="absolute h-[20vw] rounded-3xl w-[15vw] top-40  left-[30vw] bg-amber-100 overflow-hidden"
        >
          <img
            ref={imageRef}
            src="/img01.jpg"
            alt="Image_01"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" relative font-[font2]">
          <div className=" mt-[55vh]">
            <h1 className="text-[17vw] uppercase leading-[15vw] text-center">
              Soixan7e <br /> Douze{" "}
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-4xl ">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
