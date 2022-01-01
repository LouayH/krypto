import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai"

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
}

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const sections = [
    "Market",
    "Exchange",
    "Tutorials",
    "Wallets"
  ];

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <h1 className="logo text-white text-4xl">KRYPTO</h1>
      </div>
      <ul className="hidden list-none md:flex flex-initial justify-between items-center text-white">
        {sections.map((section, index) => (
          <NavbarItem key={section + index} title={section} />
        ))}
        <li className="bg-[#2952E3] mx-4 py-1 px-4 rounded-full cursor-pointer hover:bg-[#2546BD]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <ul className="list-none z-10 fixed top-1 right-1 p-3 w-[50vw] shadow-2xl flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in ">
            <li className="mx-4 text-xl my-2 cursor-pointer">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {sections.map((section, index) => (
              <NavbarItem key={section + index} title={section} classProps={"my-2 text-lg"} />
            ))}
          </ul>
        ) : (
          <HiMenuAlt4 className="md:hidden cursor-pointer text-white" onClick={() => setToggleMenu(true)} />
        )}
      </div>
    </nav>
  );
} 

export default NavBar;