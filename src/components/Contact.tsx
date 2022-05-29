import blackManImg from "../assets/images/BlackMan.png";
import mailIcon from "../assets/images/mailIcon.png";
import mapPinImg from "../assets/images/map-pin.svg";
import { Button } from "./Button";

export function Contact() {
  return (
    <section
      className="bg-white-50 py-28 flex flex-col sm:flex-row pl-6
      sm:justify-around sm:items-center"
    >
      <div className="max-w-[19rem] w-full">
        <h3 className="text-3xl sm:text-4xl text-black-800 font-bold">
          Entre em contato com a gente!
        </h3>
        <address className="flex flex-col my-8">
          <span className="text-gray-700 not-italic">
            <img
              src={mapPinImg}
              alt="Localização"
              className="inline mr-2 mb-4 w-6 h-6"
            />
            R. Amauri Souza, 346
          </span>
          <span className="text-gray-700 not-italic">
            <img
              src={mailIcon}
              alt="Envie um email"
              className="inline mr-2 w-6 h-6"
            />
            contato@doctorcare.com
          </span>
        </address>
        <div className="mr-[1.2rem]">
          <Button />
        </div>
      </div>
      <article className="mt-16 ">
        <img src={blackManImg} alt="Man smiling" className="pr-6 m-auto" />
      </article>
    </section>
  );
}
