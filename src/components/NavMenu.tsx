import { useNavbar } from "../hooks/useNavbar";
import "../styles/nav-menu.scss";

interface NavMenuProps {
  text: string;
  moveTo: number;
}

export function NavMenu({ text, moveTo }: NavMenuProps) {
  const { navbarBackground } = useNavbar();

  return (
    <button
      onClick={() => {
        window.scrollTo(0, moveTo);
      }}
      className={`${navbarBackground ? "background" : "no-background"}
`}
    >
      {text}
    </button>
  );
}
