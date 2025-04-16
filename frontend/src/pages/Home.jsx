import { useGlobalContext } from "../hooks/GlobalContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import background from "../assets/bg.png";
import hack4bengal from "../assets/hack4b.png";
import dot from "../assets/dot3.svg";
import copy from "../assets/copy.svg";
import arrow from "../assets/arrow2.svg";

function Home() {
  const { isMenuOpen, changeMenu } = useGlobalContext();

  return (
    <>
      <NavBar />
      <img className="absolute h-screen w-screen z-0" src={background}></img>
      {isMenuOpen ? (
        <div className="h-screen w-screen z-20 fixed inset-0 backdrop-brightness-75"></div>
      ) : (
        <></>
      )}
      <div className="fixed -left-0 top-[40%] h-[11rem] w-[3rem] bg-white flex flex-col">
        <img src={hack4bengal} className="-rotate-90"></img>
        <p className="[writing-mode:vertical-rl] rotate-180 text-center text-md ml-2 mt-2 inter-600">
          hack4bengal
        </p>
      </div>
      <div className="fixed -right-0 top-[55%] w-[40rem] justify-between flex flex-row">
        <div>
          <p className="text-2xl inter-400 flex flex-row">
            <img src={dot}></img>
            <span className="text-white">Truth,</span>
            <span className="text-red-500">Verified</span>
          </p>
          <p className="text-xl inter-400 text-[#a1a2a2]">
            Virtus is a VIT based deepfake detection model built to uncover
            manipulated media-whether image or video. Fast. Accurate.
            Transparent.
          </p>
          <button className="bg-[#1E1E1E] h-[3.8rem] w-[12rem] flex flex-row justify-between items-center space-x-4 rounded-br-2xl mt-2 px-2">
            <p className="text-sm text-white inter-400">Try Veritas Now!</p>
            <div className="bg-[#606060] h-[3rem] w-[3rem] flex flex-col justify-center items-center rounded-br-2xl">
              <img src={arrow} height={12} width={12} className=""></img>
            </div>
          </button>
        </div>
        <div className="flex flex-row justify-center items-start  min-w-[4rem] mr-2">
          <img src={copy} height={20} width={20} className="pt-1 mr-2"></img>
          <p className="inter-400 text-[#797979] text-xl">25</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
