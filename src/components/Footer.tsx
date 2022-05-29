import footerLogoImg from "../assets/images/FooterLogo.png";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer
      className="bg-green-500 text-white-100 flex flex-col sm:flex-row
      py-16 px-6 sm:justify-between sm:px-32 sm:items-center"
    >
      <div>
        <img src={footerLogoImg} alt="DoctorCare" />
        <p className="mt-6 mb-3 text-beige-100">©2022 - DoctorCare.</p>
        <span className="text-beige-100">Todos os direitos reservados.</span>
      </div>
      <div className="mr-auto sm:mr-0">
        <SocialLinks marginTop="mt-8" />
      </div>
    </footer>
  );
}
