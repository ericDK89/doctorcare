import { useSidebar } from "../hooks/useSidebar";

interface SidebarButtonProps {
  text: string;
  scrollSection: number;
}

export function SidebarButton({ scrollSection, text }: SidebarButtonProps) {
  const { handleCloseSideBar } = useSidebar();

  function handleSelectSection(scrollSection: number) {
    window.scrollTo(0, scrollSection);
    handleCloseSideBar();
  }

  return (
    <>
      <div>
        <button
          className="text-2xl font-bold text-white-100"
          onClick={() => {
            handleSelectSection(scrollSection); //0
          }}
        >
          {text}
        </button>
      </div>
    </>
  );
}
