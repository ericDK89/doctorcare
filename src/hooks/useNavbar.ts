import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";

export function useNavbar() {
  const value = useContext(NavbarContext);

  return value;
}
