import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

export function useSidebar() {
  const value = useContext(SidebarContext);

  return value;
}
