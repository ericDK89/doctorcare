import closeIconImg from "../assets/images/CloseIcon.svg";
import facebookIcon from "../assets/images/facebookIcon.svg";
import instagramIcon from "../assets/images/instagramIcon.svg";
import whiteLogoImg from "../assets/images/WhiteLogo.svg";
import youtubeIcon from "../assets/images/youtubeIcon.svg";
import { NavButton } from "./NavButton";

export function Sidebar() {


  
  function handleCloseSideBar() {}

  return (
    <div
      className="text-center w-screen bg-green-500 fixed sm:hidden
      top-[50%] h-screen transform translate-y-[-50%] pt-7 translate-x-[-100%]"
    >
      <div className="flex justify-between px-6">
        <img src={whiteLogoImg} alt="Logo" className="mb-5" />
        <button type="button" onClick={handleCloseSideBar}>
          <img
            src={closeIconImg}
            alt="List Button"
            className="sm:hidden mb-5"
          />
        </button>
      </div>
      <ul className="flex flex-col gap-12 pt-16">
        <li className="text-2xl font-bold text-white-100">
          <a href="#">Início</a>
        </li>

        <li className="text-2xl font-bold text-white-100">
          <a href="#">Serviços</a>
        </li>

        <li className="text-2xl font-bold text-white-100">
          <a href="#">Sobre</a>
        </li>

        <li className="text-2xl font-bold text-white-100">
          <a href="#">Depoimentos</a>
        </li>
      </ul>
      <NavButton text="AGENDE SUA CONSULTA" hidden={true} />
      <div>
        <ul className="flex justify-center mt-20 gap-8">
          <li>
            <a href="#">
              <img src={instagramIcon} alt="" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src={facebookIcon} alt="" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src={youtubeIcon} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
