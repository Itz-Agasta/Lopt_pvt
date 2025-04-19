const Details = () => {
  return (
    <div className="absolute top-[100%] w-[100vw] h-[100vh] z-70 bg-black brightness-90">
      <div className="relative min-h-[30vh] w-screen flex flex-col bg-black">
        <div className="font-[mubold] text-5xl text-white w-[50vw] ml-10 mt-5">
          APPROXIMATELY 500,000 DEEPFAKES
          <br />
          SHARED ON SOCIAL-MEDIA IN 2024
          <span className="text-sm">
            <a href="https://artsmart.ai/blog/ai-generated-deepfakes-statistics/">
              {"  "}[SOURCE]
            </a>
          </span>
        </div>
        <div className="font-[mubold] text-7xl text-[#212020] text-end w-[50vw] ml-[48vw] mt-5 mr-5">
          / BUILT BY
          <br />
          TEAM VYSE
        </div>
      </div>
    </div>
  );
};

export default Details;
