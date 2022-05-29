import checkIcon from "../assets/images/checkIcon.svg";

interface ServicesCardProps {
  title: string;
  text: string;
}

export function ServicesCard({ title, text }: ServicesCardProps) {
  return (
    <div
      className="flex flex-col gap-4 border border-solid border-green-100 
          rounded-md p-6 bg-white-50"
    >
      <img src={checkIcon} alt="Check" className="w-6 h-6" />
      <h4 className="text-2xl font-bold text-black-800">{title}</h4>
      <p>{text}</p>
    </div>
  );
}
