import closeIconImg from "../assets/images/CloseIcon.svg";
import whiteLogoImg from "../assets/images/WhiteLogo.svg";
import { useSidebar } from "../hooks/useSidebar";
import { SidebarButton } from "./SidebarButton";
import { SocialLinks } from "./SocialLinks";

export function Sidebar() {
  const { handleCloseSideBar, showSidebar } = useSidebar();

  return (
    <div
      className={`text-center w-screen bg-green-500 fixed sm:hidden
      top-[50%] h-screen transform translate-y-[-50%] pt-7 transition-transform 
      ease-in ${!showSidebar && "translate-x-[100%]"} `}
    >
      <div className="flex justify-between px-6">
        <img src={whiteLogoImg} alt="Logo" className="mb-5" />
        <button type="button" onClick={handleCloseSideBar}>
          <img
            src={closeIconImg}
            alt="List Button"
            className="sm:hidden mb-5 mr-5"
          />
        </button>
      </div>

      <div className="flex flex-col gap-12 pt-16 max-w-[274px] m-auto">
        <SidebarButton text={"Início"} scrollSection={0} />
        <SidebarButton text={"Serviços"} scrollSection={1200} />
        <SidebarButton text={"Sobre"} scrollSection={2800} />
        <SidebarButton text={"Contato"} scrollSection={3600} />

        <div>
          <button
            className="text-lg font-bold text-green-500 bg-white-100 py-4 
          px-8 rounded-full"
          >
            AGENDA SUA CONSULTA
          </button>
        </div>
      </div>
      <SocialLinks marginTop="mt-20" />
    </div>
  );
}
