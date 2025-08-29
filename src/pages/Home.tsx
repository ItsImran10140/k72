import Video from "../components/Home/Video";
import HomeHeroText from "../components/Home/HomeHeroText";
import HomeBottomText from "../components/Home/HomeBottomText";

const Home = () => {
  return (
    <div className="text-white">
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
