import { createContext, useState } from "react";

interface NavbarContext {
  navbarBackground: boolean;
}

interface NavbarContextProviderProps {
  children: React.ReactNode;
}

export const NavbarContext = createContext({} as NavbarContext);

export function NavbarContextProvider({
  children,
}: NavbarContextProviderProps) {
  const [navbarBackground, setNavbarBackground] = useState(false);

  function changedBackground() {
    const scroll = window.scrollY;
    if (scroll >= 45) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  }

  window.addEventListener("scroll", changedBackground);

  return (
    <NavbarContext.Provider value={{ navbarBackground }}>
      {children}
    </NavbarContext.Provider>
  );
}
