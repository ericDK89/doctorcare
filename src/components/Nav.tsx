import { useState } from "react";
import iconImg from "../assets/images/Icon.svg";
import logoImg from "../assets/images/Logo.svg";
import whiteIconImg from "../assets/images/WhiteIcon.svg";
import whiteLogoImg from "../assets/images/WhiteLogo.svg";
import { NavButton } from "./NavButton";
import { Sidebar } from "./Sidebar";

export function Nav() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  function changedBackground() {
    const scroll = scrollY;
    if (scroll >= 50) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  }

  addEventListener("scroll", changedBackground);

  return (
    <nav
      className={
        !navbarBackground
          ? `flex justify-center gap-48 sm:gap-0 sm:justify-between
          pb-0 pt-6 sm:pt-0 top-0 sm:top-7 left-0 sm:left-80 right-0
          sm:right-80 fixed items-center`
          : `flex justify-center gap-48 sm:gap-0 sm:justify-between
          pb-0 pt-6 sm:pt-0 top-0 sm:top-7 left-0 sm:left-80 right-0 
          sm:right-80 bg-green-500 fixed items-center`
      }
    >
      {!navbarBackground ? (
        <img src={logoImg} alt="Logo" className="mb-5 sm:mb-0" />
      ) : (
        <img src={whiteLogoImg} alt="Logo" className="mb-5" />
      )}
      <ul className="hidden sm:flex gap-8">
        <li className="text-green-500 opacity-70 hover:opacity-100">
          <a href="#">Início</a>
        </li>
        <li className="text-green-500 opacity-70 hover:opacity-100">
          <a href="#">Serviços</a>
        </li>
        <li className="text-green-500 opacity-70 hover:opacity-100">
          <a href="#">Sobre</a>
        </li>
        <li className="text-green-500 opacity-70 hover:opacity-100">
          <a href="#">Depoimentos</a>
        </li>
      </ul>
      <NavButton text="AGENDAR CONSULTA" />
      {!navbarBackground ? (
        <img src={iconImg} alt="List Button" className="sm:hidden mb-5" />
      ) : (
        <img src={whiteIconImg} alt="List Button" className="sm:hidden mb-5" />
      )}
      <Sidebar />
    </nav>
  );
}
