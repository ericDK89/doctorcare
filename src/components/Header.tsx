import womanImg from "../assets/images/woman.png";
import { Button } from "./Button";

export function Header() {  

  return (
    <header
      id="hero"
      className="flex flex-col sm:flex-row items-center justify-between
      text-center sm:text-left pt-28"
    >
      <section className="max-w-[605px] w-full">
        <span className="text-green-500 text-sm font-bold">
          BOAS-VINDAS A DOCTORCARE 👋
        </span>
        <h1
          className="text-4xl font-bold text-black-800 px-6 sm:px-0 mt-4 
        mb-6 sm:text-5xl sm:leading-snug"
        >
          Assistência médica simplificada para todos
        </h1>
        <p className="text-lg text-gray-700 px-6 sm:px-0 mb-8">
          Os médicos da DoctorCare vão além dos sintomas para tratar a causa
          raiz de sua doença e proporcionar uma cura a longo prazo.
        </p>
        <Button />
      </section>
      <aside>
        <img
          src={womanImg}
          alt="Garota propaganda"
          className="w-[261.64px] h-[342px] sm:w-[420px] sm:h-[549px] mt-16 
          sm:mt-0 sm:mr-16"
        />
      </aside>
    </header>
  );
}
