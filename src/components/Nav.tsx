import { useEffect, useState } from "react";
import iconImg from "../assets/images/Icon.svg";
import logoImg from "../assets/images/Logo.svg";
import whiteIconImg from "../assets/images/WhiteIcon.svg";
import whiteLogoImg from "../assets/images/WhiteLogo.svg";
import { useNavbar } from "../hooks/useNavbar";
import { useSidebar } from "../hooks/useSidebar";
import { NavButton } from "./NavButton";
import { NavMenu } from "./NavMenu";
import { Sidebar } from "./Sidebar";

export function Nav() {
  const { navbarBackground } = useNavbar();
  const { handleCloseSideBar } = useSidebar();

  const [navigation, setNavigation] = useState(0);

  useEffect(() => {
    function onScroll() {
      setNavigation(window.scrollY);
    }

    document.addEventListener("scroll", onScroll);
  }, [navigation]);

  console.log(navigation);

  return (
    <nav
      className={
        !navbarBackground
          ? `flex justify-center gap-48 sm:gap-16
          pb-0 pt-6 sm:pt-0 top-0 left-0 right-0
          sm:right-80 fixed items-center w-full`
          : `flex justify-center gap-48 sm:gap-16
          pb-0 pt-6 sm:pt-0 top-0 left-0 right-0
          sm:right-80 fixed items-center bg-green-500 w-full`
      }
    >
      {!navbarBackground ? (
        <img src={logoImg} alt="Logo" className="mb-5 sm:mb-0" />
      ) : (
        <img src={whiteLogoImg} alt="Logo" className="mb-5 sm:mb-0" />
      )}

      <div className="hidden sm:flex gap-8 ml-56">
        <NavMenu text="Início" moveTo={0} />
        <NavMenu text="Serviços" moveTo={800} />
        <NavMenu text="Sobre" moveTo={1800} />
        <NavMenu text="Contato" moveTo={2500} />
      </div>

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
