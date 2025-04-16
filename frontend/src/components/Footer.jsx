import { useGlobalContext } from "../hooks/GlobalContext";

const Footer = () => {
  const { activeTab, changeTab } = useGlobalContext();

  const menuItems = ["HOME", "MODELS", "PLAYGROUND", "ABOUT", "CONTACT"];

  let tab, index;
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i] == activeTab) {
      tab = activeTab;
      index = i;
    }
  }

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="fixed bottom-9 z-20 w-[95%] h-[1rem] border-[#1E1E1E] border-[0.08rem] border-b-0"></div>
      <div className="fixed bottom-6 z-20 w-[100%] h-[1rem] flex flex-row justify-between items-center text-[#797979] text-sm inter-400">
        <p>{index + 1}</p>
        <p>{tab}</p>
        <p>Scroll Down....</p>
      </div>
    </div>
  );
};

export default Footer;
