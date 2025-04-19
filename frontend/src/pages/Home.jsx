import { useGlobalContext } from "../hooks/GlobalContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Sticker from "../components/h4b";
import background from "../assets/bg.png";
import dot from "../assets/dot3.svg";
import copy from "../assets/copy.svg";
import arrow from "../assets/arrow2.svg";
import arrow2 from "../assets/arrow3.svg";
import github from "../assets/github.svg";
import { InfiniteCarousel } from "../components/Carousel";
import { NavLink, useLocation } from "react-router";
import CombinedReveal from "../components/CombinedReveal";
import { motion } from "framer-motion";

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
      <Sticker />
      <div className="fixed z-20 md:left-5 md:top-[70%] right-5 bottom-[15%] flex flex-col md:w-[2vw]">
        <button className="bg-[#1E1E1E] p-1">
          <a href="https://github.com/Itz-Agasta/Lopt.git">
            <img src={github} height={10} width={20} />
          </a>
        </button>
      </div>
      <div className="fixed -right-0 top-[15%] w-[100%] md:w-[50vw] justify-between flex flex-row border-l-[0.09rem] border-[#1e1e1e]">
        <div>
          <CombinedReveal>
            <InfiniteCarousel />
          </CombinedReveal>
          <CombinedReveal>
            <div className="not-md:ml-2 md:w-[50vw]">
              <div className="md:text-xl text-md inter-400 flex flex-row w-[90vw] md:w-[50vw] justify-between">
                <div className="flex flex-row">
                  <img src={dot}></img>
                  <span className="text-white">Truth,</span>
                  <span className="text-red-500">Verified</span>
                </div>
                <div className="flex flex-row mr-4 space-x-2 justify-center items-center">
                  <img
                    src={copy}
                    height={24}
                    width={24}
                    className="not-md:hidden"
                  ></img>
                  <img
                    src={copy}
                    height={12}
                    width={12}
                    className="md:hidden"
                  ></img>
                  <p className="md:text-md text-xs inter-400 text-[#797979]">
                    25
                  </p>
                </div>
              </div>
              <p className="md:text-xl text-md inter-400 text-[#a1a2a2] w-[70vw] md:w-[80%] break-words">
                Virtus is a VIT based deepfake detection model built to uncover
                manipulated media-whether image or video. Fast. Accurate.
                Transparent.
              </p>
              <NavLink to="/playground">
                <button className="bg-[#1E1E1E] h-[3.4rem] w-[12rem] flex flex-row justify-between items-center space-x-4 rounded-xs rounded-br-2xl mt-2 px-1 group">
                  <div className="flex flex-row justify-center items-center space-x-2 min-w-full h-[90%] rounded-xs rounded-br-2xl after:transition-all after:duration-400 group-hover:bg-[#f03b05] transition-colors duration-500">
                    <a href="/playground" class="relative inline-block w-[80%]">
                      <span class="after:content-[''] after:absolute after:left-2 after:bottom-0 after:h-[0.08rem] after:w-0 after:bg-white after:transition-all after:duration-500 group-hover:after:w-[85%] text-sm text-white inter-400">
                        Try Veritas Now!
                      </span>
                    </a>
                    <div className="bg-[#606060] h-[3rem] w-[3rem] flex flex-col justify-center items-center rounded-br-2xl ml-[0.4rem] group-hover:bg-[#cb3105] transition-colors duration-300">
                      <img
                        src={arrow}
                        height={12}
                        width={12}
                        className="absolute group-hover:hidden"
                      ></img>
                      <img
                        src={arrow2}
                        height={12}
                        width={12}
                        className="opacity-0 group-hover:opacity-100"
                      ></img>
                    </div>
                  </div>
                </button>
              </NavLink>
            </div>
          </CombinedReveal>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
