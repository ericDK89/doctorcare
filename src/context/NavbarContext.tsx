import { createContext, useEffect, useState } from "react";

interface NavbarContext {
  navbarBackground: boolean;
  scroll: boolean;
}

interface NavbarContextProviderProps {
  children: React.ReactNode;
}

export const NavbarContext = createContext({} as NavbarContext);

export function NavbarContextProvider({
  children,
}: NavbarContextProviderProps) {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [scroll, setScroll] = useState(false);

  function changedBackground() {
    const scroll = window.scrollY;
    if (scroll >= 45) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  }

  window.addEventListener("scroll", changedBackground);

  useEffect(() => {
    function onScroll() {
      const scrollCheck = window.scrollY <= 650;
      setScroll(scrollCheck);
    }

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return (
    <NavbarContext.Provider value={{ navbarBackground, scroll }}>
      {children}
    </NavbarContext.Provider>
  );
}
