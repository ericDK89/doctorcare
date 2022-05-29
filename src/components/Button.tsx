import whatsAppImg from "../assets/images/whatsapp.svg";

export function Button() {
  return (
    <>
      <a
        href="https://web.whatsapp.com/send?phone=5599111112222"
        target="_blank"
        className="bg-green-500 text-white-100 flex m-auto rounded-full 
        py-4 justify-center gap-4 sm:ml-0 transition-all duration-200 hover:opacity-80 
        items-end sm:items-start max-w-[16.4375rem] w-full"
      >
        <img src={whatsAppImg} alt="Entre em contato através do WhatsApp" />
        AGENDE SUA CONSULTA
      </a>
    </>
  );
}
