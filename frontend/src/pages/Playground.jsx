import { useEffect, useState } from "react";
import { useGlobalContext } from "../hooks/GlobalContext";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import gif from "../assets/waiting.gif";
import Sticker from "../components/h4b";
import analyzeFile from "../lib/api";

const Playground = () => {
  const { isMenuOpen } = useGlobalContext();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uploadedFile) return;
    try {
      const response = await analyzeFile(uploadedFile);
      setResult(`${response.label} + ${response.confidence}`);
      console.log(response);
      console.log(result);
      console.log(uploadedFile);
    } catch (err) {
      console.log("Error!");
    }
  };

  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-black">
        <NavBar />
        {isMenuOpen ? (
          <div className="h-screen w-screen z-20 fixed inset-0 backdrop-brightness-75"></div>
        ) : (
          <></>
        )}
        <Sticker />
        <div className="relative flex flex-col w-[100vw] h-[80vh] top-[10%] justify-center items-center">
          <div className="text-white flex flex-col justify-center items-center max-w-[80vw] text-center space-y-5 inter-400">
            <h1 className="text-3xl md:text-5xl">
              Detect Deepfakes using Vision Transformers and GAN Classifiers
            </h1>
            <h2 className="text-xl md:text-3xl bg-gradient-to-b from-slate-600 to-neutral-50 bg-clip-text text-transparent">
              [LOPT]
            </h2>
            <h3 className="text-sm md:text-md">
              Drag and drop your file or click to browse. Virtus will analyze it
              using our AI model and return a detailed report in seconds. Detect
              AI-generated content from models like Midjourney, DALL-E, Stable
              Diffusion, DeepFaceLab and FaceSwap.
            </h3>
          </div>
          {/*
          <div className="min-w-[50vw] min-h-[25vh] mt-4 border-2 border-[#a1a2a2] rounded-md">
            <div className="min-h-[20vh] flex justify-center items-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="max-h-[10vh] not-md:max-w-[40vw] not-md:text-xs px-4 py-2 border border-gray-300 rounded-md text-white"
              />
            </div>
            <div className="min-h-[5vh] bg-white flex items-center justify-between">
              <div className="flex flex-row space-x-3 text-xs md:text-md">
                <img
                  src={gif}
                  height={24}
                  width={24}
                  className="ml-5 not-md:hidden"
                ></img>
                <img
                  src={gif}
                  height={12}
                  width={15}
                  className="ml-5 md:hidden"
                ></img>
                <p className="text-black inter-400">Waiting for Input</p>
              </div>
              {result ? <div>{result}</div> : <>No result</>}
              <button
                className="bg-[#1e1e1e] text-white px-2 py-2 text-sm inter-400 rounded-md mr-4"
                onClick={handleSubmit}
              >
                Check Now
              </button>
            </div>
          </div>
          */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Playground;
