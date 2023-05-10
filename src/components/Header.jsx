import ReactSwitch from "react-switch";
import "./Header.css";
import { useState } from "react";

const Header = ({ setmodalclose, setIsDark, isDark }) => {
  const [checked, setChecked] = useState(false);

  const handleChangeTheme = (nextChecked) => {
    setIsDark((isDark) => !isDark);
    setChecked(nextChecked);
  };

  const handleClick = () => {
    setmodalclose((modalclose) => !modalclose);
  };

  return (
    <header className="text-black p-3 flex flex-wrap justify-evenly sm:justify-between items-center w-full bg-gray-700/10 mb-5 dark:text-white ">
      <h1 className ="text-3xl font-bold text-blue-900 ">Usuarios </h1>

      <ReactSwitch
        onChange={handleChangeTheme}
        checked={checked}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className=" order-4 mt-3 sm:order-none"
        id="material-switch"
      />
      <div className="flex items-center">
        <button
          onClick={handleClick}
          className="bg-blue-500 p-3 rounded-md text-white flex justify-center items-center mt-3 gap-2 ml-5 text-sm hover:bg-sky-950 transition-colors font-bold "
        >
          <i className="bx bx-plus"></i>nuevo usuario{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;




