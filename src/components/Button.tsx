import whatsAppImg from "../assets/images/whatsapp.svg";

export function Button() {

  return (
    <>
      <button type="button"
        className="bg-green-500 text-white-100 flex m-auto rounded-full 
        py-4 px-8 gap-4 sm:ml-0 transition-all duration-200 hover:opacity-80"
      >
        <img src={whatsAppImg} alt="Entre em contato através do WhatsApp" />
        AGENDE SUA CONSULTA
      </button>
    </>
  );
}
