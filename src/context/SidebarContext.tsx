import { createContext, useState } from "react";

interface SidebarContext {
  showSidebar: boolean;
  handleCloseSideBar: () => void;
}

interface SidebarContextProviderProps {
  children: React.ReactNode;
}

export const SidebarContext = createContext({} as SidebarContext);

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleCloseSideBar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <SidebarContext.Provider value={{ handleCloseSideBar, showSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
