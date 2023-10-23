import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const Navigation = ["Home", "Jobs", "More"];

const App = () => {
  const [ItemClick, setItemClick] = useState(Navigation);

  const NavigationClick = (e) => {
    setItemClick((pre) => {
      const temp = [...pre];
      const iArrary = [];
      if (temp[e.target.id] === e.target.innerHTML) {
        console.log("tttttt", temp[e.target.id], e.target.innerHTML);
        iArrary.push(e.target.innerHTML);
      }
      console.log("fff", iArrary);
      return temp;
    });
  };
  return (
    <div className="w-full left-0 top-0 flex-col items-center px-5 justify-between bg-black">
      <div className="w-full flex">
        {/* left side of header */}
        <div className="w-full flex ">
          <p className="flex items-center justify-center text-[40px] text-white">
            ITCONNECT|
            <PersonIcon sx={{ fontSize: "40px" }} />
          </p>
        </div>
        {/* right side of header */}
        <div className="w-full flex items-center justify-center text-lg font-semibold  text-white gap-10">
          {Navigation.map((ele, index) => (
            <NavBar
              use={iArrary}
              ele={ele}
              index={index}
              key={index}
              id={index}
              NavigationClick={NavigationClick}
            />
          ))}
        </div>
        {/* right side User Icon */}
        <div className="flex items-center  text-[40px] text-white ">
          <AccountCircleIcon sx={{ fontSize: "40px" }} />
        </div>
      </div>
      <div className="flex w-full h-screen">
        <div className="w-full  mt-[180px]">
          {/* left */}
          <div className="w-full flex justify-between  items-center ">
            <div className="w-full grid grid-cols-2  ">
              <div className="flex mt-4 items-center justify-center w-[200px] h-[100px] bg-blue-400 border-2 rounded-lg ">
                <p className="text-white font-semibold text-2xl">Finds Jobs</p>
              </div>
              <div className="flex mt-4 items-center justify-center w-[200px] h-[100px] bg-blue-400 border-2 rounded-lg">
                <p className="text-white font-semibold text-2xl">CV</p>
              </div>
              <div className="flex mt-4 items-center justify-center w-[200px] h-[100px] bg-blue-400 border-2 rounded-lg">
                <p className="text-white font-semibold text-2xl">
                  Job Reccomendations
                </p>
              </div>
              <div className="flex mt-4 items-center justify-center w-[200px] h-[100px] bg-blue-400 border-2 rounded-lg">
                <p className="text-white font-semibold text-2xl">
                  Job Scam Checker
                </p>
              </div>
            </div>
            {/* right */}
            <div className="w-full flex items-center justify-center">
              <div className="flex w-[300px] h-[300px] rounded-full border-4 border-blue-400 bg-white items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg"
                  alt="img"
                  className="flex items-center justify-center rounded-full w-[300px] h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

const NavBar = ({ ele, id, NavigationClick, use }) => (
  <div
    id={id}
    onClick={NavigationClick}
    className={`${
      use == ele ? "border-2 border-b-2 border-blue-500" : console.log(use)
    }w-[50px]  cursor-pointer   `}
  >
    {ele}
  </div>
);
