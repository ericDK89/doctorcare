import { useState } from "react";
import iconImg from "../assets/images/Icon.svg";
import logoImg from "../assets/images/Logo.svg";
import whiteIconImg from "../assets/images/WhiteIcon.svg";
import whiteLogoImg from "../assets/images/WhiteLogo.svg";
import { useSidebar } from "../hooks/useSidebar";
import { NavButton } from "./NavButton";
import { Sidebar } from "./Sidebar";

export function Nav() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const { handleCloseSideBar } = useSidebar();

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
          : `flex justify-center gap-48 sm:gap-16 sm:justify-center
          pb-0 pt-6 sm:py-4 top-0 sm:top-0 left-0 right-0 
          sm:right-80 bg-green-500 fixed items-center w-full `
      }
    >
      {!navbarBackground ? (
        <img src={logoImg} alt="Logo" className="mb-5 sm:mb-0" />
      ) : (
        <img src={whiteLogoImg} alt="Logo" className="mb-5 sm:mb-0" />
      )}
      <ul className="hidden sm:flex gap-8 ml-56">
        <li
          className={`${
            !navbarBackground
              ? "text-green-500 opacity-70 hover:opacity-100"
              : "text-white-100 opacity-70 hover:opacity-100"
          }`}
        >
          <button>Início</button>
        </li>
        <li
          className={`${
            !navbarBackground
              ? "text-green-500 opacity-70 hover:opacity-100"
              : "text-white-100 opacity-70 hover:opacity-100"
          }`}
        >
          <a href="services">Serviços</a>
        </li>
        <li
          className={`${
            !navbarBackground
              ? "text-green-500 opacity-70 hover:opacity-100"
              : "text-white-100 opacity-70 hover:opacity-100"
          }`}
        >
          <a href="about">Sobre</a>
        </li>
        <li
          className={`${
            !navbarBackground
              ? "text-green-500 opacity-70 hover:opacity-100"
              : "text-white-100 opacity-70 hover:opacity-100"
          }`}
        >
          <a href="#">Depoimentos</a>
        </li>
      </ul>
      <NavButton text="AGENDAR CONSULTA" navbarBackground={navbarBackground} />
      {!navbarBackground ? (
        <button onClick={handleCloseSideBar}>
          <img src={iconImg} alt="List Button" className="sm:hidden mb-5" />
        </button>
      ) : (
        <button onClick={handleCloseSideBar}>
          <img
            src={whiteIconImg}
            alt="List Button"
            className="sm:hidden mb-5"
            aria-label="Abrir menu"
          />
        </button>
      )}
      <Sidebar />
    </nav>
  );
}
