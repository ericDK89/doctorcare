import { useNavbar } from "../hooks/useNavbar";
import "../styles/nav-menu.scss";

interface NavMenuProps {
  text: string;
  isCurrentSection?: boolean;
}

export function NavMenu({ text, isCurrentSection }: NavMenuProps) {
  const { navbarBackground, scroll } = useNavbar();

  return (
    <button className={`${navbarBackground ? "background" : "no-background"} 
                        ${isCurrentSection && "current"}`}>
      {text}
    </button>
  );
}
