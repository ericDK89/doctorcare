import { useState } from "react";
import iconImg from "../assets/images/Icon.svg";
import logoImg from "../assets/images/Logo.svg";
import whiteIconImg from "../assets/images/WhiteIcon.svg";
import whiteLogoImg from "../assets/images/WhiteLogo.svg";

export function Nav() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  function changedBackground() {
    const scroll = window.scrollY;
    if (scroll >= 70) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  }

  window.addEventListener("scroll", changedBackground);

  return (
    <nav
      className={
        !navbarBackground
          ? `flex justify-center gap-40 sm:gap-0 sm:justify-between
          items-center pt-6 pb-0 top-0 sm:top-7 left-0 sm:left-80 right-0
          sm:right-80 fixed`
          : `flex justify-center gap-40 sm:gap-0 sm:justify-between
          items-center pt-6 pb-0 fixed top-0 sm:top-7 left-0 sm:left-80 right-0 
          sm:right-80 bg-green-500`
      }
    >
      {!navbarBackground ? (
        <img src={logoImg} alt="Logo" className="mb-5" />
      ) : (
        <img src={whiteLogoImg} alt="Logo" className="mb-5" />
      )}
      <ul className="hidden sm:flex gap-8 text-green-500 opacity-70">
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Depoimentos</a>
        </li>
      </ul>
      <button
        className="hidden sm:block border border-solid border-green-500 
        font-bold text-sm text-green-500 rounded-full px-6 py-2 
        hover:bg-green-500 hover:text-white-100 transition-all duration-200"
      >
        AGENDAR CONSULTA
      </button>
      {!navbarBackground ? (
        <img src={iconImg} alt="List Button" className="sm:hidden mb-5" />
      ) : (
        <img src={whiteIconImg} alt="List Button" className="sm:hidden mb-5" />
      )}
    </nav>
  );
}
